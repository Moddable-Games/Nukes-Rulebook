import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync } from 'fs';
import { resolve } from 'path';
import matter from 'gray-matter';
import markdownIt from 'markdown-it';

const ROOT = resolve(import.meta.dirname, '..');
const GAMES_DIR = resolve(ROOT, 'games');
const SHARED_DIR = resolve(ROOT, 'shared');
const DIST_DIR = resolve(ROOT, 'dist');

// --- Parse CLI arguments ---
const args = process.argv.slice(2);
let gameSlugs = [];

const gameIdx = args.indexOf('--game');
if (gameIdx !== -1 && args[gameIdx + 1]) {
  gameSlugs = [args[gameIdx + 1]];
} else if (args.includes('--all') || args.length === 0) {
  // Discover all games that have content/rulebook.md
  gameSlugs = readdirSync(GAMES_DIR, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => d.name)
    .filter(slug => existsSync(resolve(GAMES_DIR, slug, 'content/rulebook.md')));
} else {
  console.error('Usage: node js/build.mjs [--all | --game <slug>]');
  process.exit(1);
}

if (gameSlugs.length === 0) {
  console.warn('No games found with content/rulebook.md');
  process.exit(0);
}

// --- Markdown-it instance with custom rules ---
function createMarkdownRenderer() {
  const md = markdownIt({ html: true, typographer: true });

  // Custom inline rule: {nowrap|text}
  md.inline.ruler.before('emphasis', 'nowrap', (state, silent) => {
    if (state.src[state.pos] !== '{') return false;
    const match = state.src.slice(state.pos).match(/^\{nowrap\|([^}]+)\}/);
    if (!match) return false;
    if (!silent) {
      const token = state.push('html_inline', '', 0);
      token.content = `<span class="nowrap">${match[1]}</span>`;
    }
    state.pos += match[0].length;
    return true;
  });

  // Custom inline rule: {warn|text}
  md.inline.ruler.before('emphasis', 'warn', (state, silent) => {
    if (state.src[state.pos] !== '{') return false;
    const match = state.src.slice(state.pos).match(/^\{warn\|([^}]+)\}/);
    if (!match) return false;
    if (!silent) {
      const token = state.push('html_inline', '', 0);
      token.content = `<em class="warn">${match[1]}</em>`;
    }
    state.pos += match[0].length;
    return true;
  });

  return md;
}

// --- Build a single game ---
function buildGame(slug) {
  const gameDir = resolve(GAMES_DIR, slug);

  // Helper: read a file with absolute path
  const readFile = f => readFileSync(f, 'utf8');

  // --- Read content ---
  const contentPath = resolve(gameDir, 'content/rulebook.md');
  if (!existsSync(contentPath)) {
    console.warn(`  Skipping ${slug}: no content/rulebook.md`);
    return;
  }

  const src = readFile(contentPath);
  const { data: meta, content } = matter(src);

  // --- Resolve template ---
  const templatePath = existsSync(resolve(gameDir, 'templates/shell.html'))
    ? resolve(gameDir, 'templates/shell.html')
    : resolve(SHARED_DIR, 'templates/shell.html');
  const template = readFile(templatePath);

  // --- Pre-process: resolve includes (game partials first, shared fallback) ---
  function processIncludes(text) {
    return text.replace(
      /\{\{include:([^}]+)\}\}/g,
      (_, file) => {
        const name = file.trim();
        const gamPartialPath = resolve(gameDir, 'templates/partials', name);
        const sharedPartialPath = resolve(SHARED_DIR, 'templates/partials', name);
        const partialPath = existsSync(gamPartialPath) ? gamPartialPath : sharedPartialPath;
        const partialContent = readFile(partialPath);
        return partialContent.replace(/^[ ]{2,}/gm, '');
      }
    );
  }

  // --- Post-process: inject SVGs ---
  function processSvgIncludes(html) {
    return html.replace(
      /\{\{svg:([^\s"]+)\s*"([^"]*)"\}\}/g,
      (_, file, caption) => {
        const svgPath = resolve(gameDir, 'diagrams/svg', file);
        const svg = readFile(svgPath);
        let out = svg;
        if (caption) {
          out += `\n<p class="diagram-caption">${caption}</p>`;
        }
        return out;
      }
    );
  }

  // --- Add .rules class to <ul> ---
  function addRulesClass(html) {
    return html.replace(/<ul>\n/g, '<ul class="rules">\n');
  }

  // --- Add .t class to tables ---
  function addTableClass(html) {
    return html.replace(/<table>/g, '<table class="t">');
  }

  // --- Render markdown ---
  const md = createMarkdownRenderer();
  const withIncludes = processIncludes(content);
  let rendered = md.render(withIncludes);
  rendered = processSvgIncludes(rendered);
  rendered = addRulesClass(rendered);
  rendered = addTableClass(rendered);

  // --- Assemble output ---
  let output = template.replace('{{CONTENT}}', rendered);
  output = processIncludes(output);

  // --- Replace template variables from frontmatter ---
  const templateVars = {
    version: meta.version || '',
    game_slug: slug,
    game_title: meta.title || slug,
    players: meta.players || '',
    duration: meta.duration || '',
    age: meta.age || '',
  };

  for (const [key, value] of Object.entries(templateVars)) {
    output = output.replace(new RegExp(`\\{\\{${key}\\}\\}`, 'g'), value);
  }

  // Version replacement (legacy pattern)
  if (meta.version) {
    output = output.replace(/v0\.9\.\d+/g, `v${meta.version}`);
  }

  // --- Fix asset paths for dist/{slug}/ output ---
  // Output is at dist/{slug}/index.html (2 levels deep, same as games/{slug}/)
  // Templates may use flat paths (old-style: css/, logos/, js/) or
  // already-relative paths (new-style: ../../shared/, ../theme.css).
  //
  // Strategy:
  //  - Rewrite flat paths to correct ../../ relative paths
  //  - Fix ../theme.css → ../../games/{slug}/theme.css (template is no longer in games/)
  //  - Leave ../../shared/ paths alone (same depth)

  const gameRelative = `../../games/${slug}`;

  // --- Flat CSS paths (old-style templates like nukes) ---
  output = output.replace(
    /href="css\/fonts\.css"/g,
    'href="../../shared/css/fonts.css"'
  );
  output = output.replace(
    /href="css\/style\.css"/g,
    'href="../../shared/css/style.css"'
  );

  // --- Game-specific theme: fix ../theme.css → correct path from dist/ ---
  output = output.replace(
    /href="\.\.\/theme\.css"/g,
    `href="${gameRelative}/theme.css"`
  );

  // Add theme.css for old-style templates that don't reference it
  const themeExists = existsSync(resolve(gameDir, 'theme.css'));
  const hasThemeLink = output.includes('theme.css');
  if (themeExists && !hasThemeLink) {
    output = output.replace(
      /href="\.\.\/\.\.\/shared\/css\/style\.css"/,
      `href="../../shared/css/style.css">\n<link rel="stylesheet" href="${gameRelative}/theme.css"`
    );
  }

  // --- Flat logo/image paths (old-style: logos/foo.png) ---
  output = output.replace(
    /(?:src|href|content)="logos\//g,
    (match) => match.replace('logos/', `${gameRelative}/logos/`)
  );

  // Moddable brand logo → shared
  const moddablePattern = `${gameRelative}/logos/moddable-white.png`;
  output = output.replaceAll(moddablePattern, '../../shared/logos/moddable-white.png');

  // --- Flat PDF/content paths (old-style) ---
  output = output.replace(
    /href="pdf\//g,
    `href="${gameRelative}/pdf/`
  );
  output = output.replace(
    /href="content\//g,
    `href="${gameRelative}/content/`
  );

  // --- Flat JS paths (old-style: js/toc.js) ---
  output = output.replace(
    /src="js\//g,
    'src="../../js/'
  );

  // --- Write output ---
  const outDir = resolve(DIST_DIR, slug);
  mkdirSync(outDir, { recursive: true });
  writeFileSync(resolve(outDir, 'index.html'), output);

  console.log(`  Built dist/${slug}/index.html`);
}

// --- Main ---
console.log(`Building ${gameSlugs.length} game(s): ${gameSlugs.join(', ')}`);

for (const slug of gameSlugs) {
  buildGame(slug);
}

console.log('Build complete.');
