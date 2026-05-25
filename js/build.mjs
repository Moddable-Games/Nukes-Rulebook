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

// --- Build variant sub-pages for games with variants: true ---
function buildVariants(slug) {
  const gameDir = resolve(GAMES_DIR, slug);
  const variantsDir = resolve(gameDir, 'content/variants');
  if (!existsSync(variantsDir)) return;

  const parentSrc = readFileSync(resolve(gameDir, 'content/rulebook.md'), 'utf8');
  const { data: parentMeta } = matter(parentSrc);
  if (!parentMeta.variants) return;

  const variantTemplatePath = resolve(gameDir, 'templates/variant-shell.html');
  const fallbackTemplatePath = resolve(SHARED_DIR, 'templates/shell.html');
  const templatePath = existsSync(variantTemplatePath) ? variantTemplatePath : fallbackTemplatePath;
  const template = readFileSync(templatePath, 'utf8');

  const md = createMarkdownRenderer();

  const variantFiles = readdirSync(variantsDir).filter(f => f.endsWith('.md'));

  const variants = variantFiles.map(file => {
    const src = readFileSync(resolve(variantsDir, file), 'utf8');
    const { data: meta, content } = matter(src);
    return { file, meta, content, slug: meta.slug || file.replace('.md', '') };
  });

  variants.sort((a, b) => (a.meta.order || 999) - (b.meta.order || 999));

  for (let i = 0; i < variants.length; i++) {
    const { meta, content, slug: variantSlug } = variants[i];

    const withSvgs = content.replace(
      /\{\{svg:([^\s"]+)\s*"([^"]*)"\}\}/g,
      (_, file, caption) => {
        const svgPath = resolve(gameDir, 'diagrams/svg', file);
        if (!existsSync(svgPath)) return `<!-- missing: ${file} -->`;
        const svg = readFileSync(svgPath, 'utf8').replace(/\n\s*\n/g, '\n');
        return caption ? `${svg}\n<p class="diagram-caption">${caption}</p>` : svg;
      }
    );

    let rendered = md.render(withSvgs);
    rendered = rendered.replace(/<ul>\n/g, '<ul class="rules">\n');
    rendered = rendered.replace(/<table>/g, '<table class="t">');

    const prev = variants[i - 1];
    const next = variants[i + 1];
    const prevLink = prev
      ? `<a href="../${prev.slug}/" class="variant-pager-prev">← ${prev.meta.title}</a>`
      : '<span class="variant-pager-spacer"></span>';
    const nextLink = next
      ? `<a href="../${next.slug}/" class="variant-pager-next">${next.meta.title} →</a>`
      : '<span class="variant-pager-spacer"></span>';

    let output = template.replace('{{CONTENT}}', rendered);
    output = output.replace(/\{\{variant_title\}\}/g, meta.title || variantSlug);
    output = output.replace(/\{\{variant_board\}\}/g, meta.board || '8×8');
    output = output.replace(/\{\{variant_players\}\}/g, meta.players || '2');
    output = output.replace(/\{\{variant_order\}\}/g, String(meta.order || i + 1));
    output = output.replace(/\{\{version\}\}/g, parentMeta.version || '');
    output = output.replace('{{PREV_LINK}}', prevLink);
    output = output.replace('{{NEXT_LINK}}', nextLink);

    const outDir = resolve(DIST_DIR, slug, 'variants', variantSlug);
    mkdirSync(outDir, { recursive: true });
    writeFileSync(resolve(outDir, 'index.html'), output);
  }

  console.log(`  Built ${variants.length} variant pages for ${slug}`);
}

// --- Generate landing page from frontmatter ---
function buildLanding() {
  const allSlugs = readdirSync(GAMES_DIR, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => d.name)
    .filter(slug => existsSync(resolve(GAMES_DIR, slug, 'content/rulebook.md')));

  const games = allSlugs.map(slug => {
    const src = readFileSync(resolve(GAMES_DIR, slug, 'content/rulebook.md'), 'utf8');
    const { data } = matter(src);
    return { slug, ...data };
  });

  const isProduction = process.env.NODE_ENV === 'production' || process.env.CI === 'true';
  const visible = isProduction ? games.filter(g => g.published !== false) : games;
  visible.sort((a, b) => (b.updated || '').localeCompare(a.updated || ''));

  const statusLabels = { live: 'Live', alpha: 'Alpha', playtest: 'Playtest', dev: 'In Dev' };
  const statusClasses = { live: 'badge--live', alpha: 'badge--alpha', playtest: 'badge--playtest', dev: 'badge--dev' };

  const version = readFileSync(resolve(ROOT, 'version.txt'), 'utf8').trim();

  function logoPath(slug) {
    const dir = resolve(GAMES_DIR, slug, 'logos');
    if (!existsSync(dir)) return '';
    const files = readdirSync(dir).filter(f => /\.(png|jpg|svg|webp)$/.test(f) && f !== '.gitkeep');
    if (!files.length) return '';
    const logo = files.find(f => /logo/i.test(f)) || files[0];
    return `games/${slug}/logos/${logo}`;
  }

  const cards = visible.map(g => {
    const logo = logoPath(g.slug);
    const logoImg = logo ? `<img class="card-logo" src="${logo}" alt="">` : '';
    const metaType = g.type === 'mod' && g.base_game ? `<span class="card-base">Mod of ${g.base_game}</span>` : '';
    const badge = statusLabels[g.status] || g.status || '';
    const badgeClass = statusClasses[g.status] || 'badge--dev';
    return `    <a href="dist/${g.slug}/index.html" class="game-card" data-type="${g.type || 'game'}">
      ${logoImg}
      <div class="card-body">
        <div class="card-header">
          <span class="card-title">${g.title ? g.title.replace(/\s*[—–-]\s*Official Rulebook$/i, '') : g.slug}</span>
          <span class="card-version">v${g.version || '0.0.0'}</span>
        </div>
        ${metaType}
        <div class="card-meta">
          <span>${g.players || ''} players</span><span class="sep">/</span><span>${g.duration || ''}</span><span class="sep">/</span><span class="badge ${badgeClass}">${badge}</span>
        </div>
        <p class="card-desc">${g.tagline || ''}</p>
      </div>
    </a>`;
  }).join('\n\n');

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Moddable Rules — Game Rulebooks</title>
<meta name="description" content="Official rulebooks for games published by Moddable Games.">
<link rel="icon" type="image/svg+xml" href="shared/logos/favicon.svg">
<link rel="stylesheet" href="css/landing.css?v=${version}">
</head>
<body>

<div class="landing">

  <header class="landing-header">
    <a href="https://moddable.games" target="_blank" rel="noopener"><img class="landing-logo" src="shared/logos/moddable-white.png" alt="Moddable Games"></a>
    <p class="landing-subtitle">Game Rulebooks</p>
  </header>

  <div class="filter-bar">
    <button class="filter-pill filter-pill--all active" data-filter="all">All</button>
    <button class="filter-pill filter-pill--game" data-filter="game">Games</button>
    <button class="filter-pill filter-pill--mod" data-filter="mod">Mods</button>
    <button class="filter-pill filter-pill--platform" data-filter="platform">Platforms</button>
  </div>

  <div class="game-grid">

${cards}

  </div>

  <footer class="landing-footer">
    <a href="https://moddable.games" target="_blank" rel="noopener" class="landing-footer-link">Moddable Games</a> &middot; &copy; 2012&ndash;2026 All Rights Reserved
    <span class="footer-version">v${version}</span>
  </footer>

</div>

<script src="js/landing.js?v=${version}"></script>
</body>
</html>
`;

  writeFileSync(resolve(ROOT, 'index.html'), html);
  console.log('  Built index.html (landing page)');
}

// --- Main ---
console.log(`Building ${gameSlugs.length} game(s): ${gameSlugs.join(', ')}`);

for (const slug of gameSlugs) {
  buildGame(slug);
  buildVariants(slug);
}

buildLanding();
console.log('Build complete.');
