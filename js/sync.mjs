import { readFileSync, writeFileSync, readdirSync, existsSync } from 'fs';
import { resolve } from 'path';
import matter from 'gray-matter';

const ROOT = resolve(import.meta.dirname, '..');
const GAMES_DIR = resolve(ROOT, 'games');
const WEBSITE_DIR = resolve(ROOT, '..', 'moddable-website');
const OUTPUT = resolve(WEBSITE_DIR, 'data', 'games-sync.json');

const slugs = readdirSync(GAMES_DIR, { withFileTypes: true })
  .filter(d => d.isDirectory())
  .map(d => d.name)
  .filter(slug => existsSync(resolve(GAMES_DIR, slug, 'content/rulebook.md')));

const data = {};

for (const slug of slugs) {
  const src = readFileSync(resolve(GAMES_DIR, slug, 'content/rulebook.md'), 'utf8');
  const { data: meta } = matter(src);
  data[slug] = {
    title: (meta.title || '').replace(/\s*[—–-]\s*Official Rulebook$/i, ''),
    version: meta.version || null,
    players: meta.players || null,
    duration: meta.duration || null,
    age: meta.age || null,
    tagline: meta.tagline || null,
    type: meta.type || 'game',
    base_game: meta.base_game || null,
    status: meta.status || null,
    updated: meta.updated || null,
    published: meta.published !== false,
  };
}

writeFileSync(OUTPUT, JSON.stringify(data, null, 2) + '\n');
console.log(`Synced ${Object.keys(data).length} games → ${OUTPUT}`);
