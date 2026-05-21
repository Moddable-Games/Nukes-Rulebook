import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';
import matter from 'gray-matter';
import markdownIt from 'markdown-it';

const ROOT = resolve(import.meta.dirname, '..');
const read = f => readFileSync(resolve(ROOT, f), 'utf8');

const src = read('content/rulebook.md');
const { data: meta, content } = matter(src);
const template = read('templates/shell.html');

const md = markdownIt({ html: true, typographer: true });

// --- Custom inline rule: {nowrap|text} ---
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

// --- Custom inline rule: {warn|text} ---
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

// --- Pre-process: resolve includes before markdown renders ---
// Strips leading indentation so markdown-it treats it as HTML blocks
function processIncludes(text) {
  return text.replace(
    /\{\{include:([^}]+)\}\}/g,
    (_, file) => {
      const content = read(`templates/partials/${file.trim()}`);
      return content.replace(/^[ ]{2,}/gm, '');
    }
  );
}

// --- Post-process: inject SVGs ---
function processSvgIncludes(html) {
  return html.replace(
    /\{\{svg:([^\s"]+)\s*"([^"]*)"\}\}/g,
    (_, file, caption) => {
      const svg = read(`diagrams/svg/${file}`);
      let out = svg;
      if (caption) {
        out += `\n<p class="diagram-caption">${caption}</p>`;
      }
      return out;
    }
  );
}

// --- Add .rules class to <ul> inside .section divs ---
function addRulesClass(html) {
  return html.replace(/<ul>\n/g, '<ul class="rules">\n');
}

// --- Add .t class to tables ---
function addTableClass(html) {
  return html.replace(/<table>/g, '<table class="t">');
}

const withIncludes = processIncludes(content);
let rendered = md.render(withIncludes);
rendered = processSvgIncludes(rendered);
rendered = addRulesClass(rendered);
rendered = addTableClass(rendered);

let output = template.replace('{{CONTENT}}', rendered);

if (meta.version) {
  output = output.replace(/v0\.9\.\d+/g, `v${meta.version}`);
}

writeFileSync(resolve(ROOT, 'index.html'), output);
console.log('Built index.html successfully');
