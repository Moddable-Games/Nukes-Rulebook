# Moddable Rules

The official rulebook system for all games published by [Moddable Games](https://moddable.games). Each game gets its own themed rulebook built from a shared design system.

**[Browse Rulebooks](https://moddable-games.github.io/Nukes-Rulebook/)**

---

## Games

| Game | Version | Players | Status |
|------|---------|---------|--------|
| **Nukes** | 0.9.3 | 2–3 | Live |
| **Mongo** | 0.8.2 | 3–6 | Playtest |
| **Endless Skies** | 1.3.0 | 1–4 | In Development |

---

## Mods

| Mod | Base Game | Version | Players | Status |
|-----|-----------|---------|---------|--------|
| **Dungeon Chess** | Chess | 0.1.0 | 2–4 | Alpha |
| **Talisman: Hexed** | Talisman 4e | 1.0.0 | 2–6 | Live |
| **Hyper Imperium** | Twilight Imperium 4e | 2.0.1 | 3–6 | Live |
| **Econopoly** | Monopoly | 0.9.0 | 2–6 | Live |

---

## Project Structure

```
games/
  nukes/                 Full rulebook (live)
  mongo/                 Placeholder (content pending playtest)
  endless-skies/         Placeholder (content in development)
  dungeon-chess/         Full rulebook (alpha) — mod of Chess
  talisman-hexed/        Full rulebook (live) — mod of Talisman 4e
  hyper-imperium/        Full rulebook (live) — mod of TI4
  econopoly/             Full rulebook (live) — mod of Monopoly
shared/
  css/                   Design tokens, base styles, components
  fonts/                 Self-hosted WOFF2 web fonts
  templates/             Shared fallback shell template
  logos/                 Moddable brand assets
js/
  build.mjs             Multi-game build system
  pdf.mjs               PDF generation (Puppeteer)
  pdf-paginate.mjs      Manual pagination engine
  toc.js                Client-side TOC with scroll tracking
css/
  landing.css           Landing page styles
dist/                   BUILD OUTPUT (all games)
index.html             Landing page (game selector)
```

Each game directory contains:
```
games/{slug}/
  content/rulebook.md    Canonical rules source
  templates/
    shell.html           Game-specific HTML shell
    partials/            Visual components (unit cards, etc.)
  diagrams/svg/          SVG illustrations
  theme.css              Game colour palette and overrides
  logos/                 Game-specific artwork
  pdf/                   Generated PDFs
```

---

## Build

Requires Node.js 18+.

```bash
npm install --ignore-scripts
npm run build              # Build all games → dist/
npm run build:game nukes   # Build one game
npm run pdf                # Generate all PDFs
npm run pdf:game nukes     # Generate PDF for one game
```

The build reads each game's `content/rulebook.md`, resolves includes and SVGs, renders markdown to HTML, applies the game's theme, and outputs to `dist/{slug}/index.html`.

---

## Adding a New Game

1. Create `games/{slug}/content/rulebook.md` with YAML frontmatter:
   ```yaml
   ---
   title: "Game Name — Official Rulebook"
   version: "0.1.0"
   slug: "game-slug"
   players: "2–4"
   duration: "60 min"
   age: "12+"
   tagline: "One-line description"
   ---
   ```
2. Create `games/{slug}/theme.css` (override CSS custom properties)
3. Create `games/{slug}/templates/shell.html` (or rely on `shared/templates/shell.html`)
4. Run `npm run build` — the system auto-discovers games with `content/rulebook.md`

---

## Design System

The shared CSS uses semantic custom properties that each game's theme overrides:

| Variable | Purpose |
|----------|---------|
| `--accent` | Primary accent colour |
| `--bg-primary` | Page background |
| `--bg-dark` | Dark sections (header, ref page) |
| `--heading-color` | H2 colour |
| `--text-primary` | Body text |
| `--divider-color` | Section borders |

---

## Changelog

#### 2026-05-22
- Restructured to multi-game ruleset system (games/, shared/, dist/)
- Added Dungeon Chess, Mongo, Endless Skies rulesets
- Added Talisman: Hexed, Hyper Imperium, Econopoly mod rulesets
- Shared design system: tokens, base, components CSS with per-game themes
- Landing page auto-generated from frontmatter with filter pills (Games/Mods)
- Multi-game build system with auto-discovery and template fallback chain
- Category colours on landing cards (red = game, blue = mod, green = expansion)
- Overhauled PDF pagination (manual JS page-break engine, 20-page A3 booklet)
- Self-hosted Google Fonts, responsive mobile breakpoints (768px/480px)
- ARIA landmarks, skip-to-content, TOC scroll highlighting

#### 2026-05-21
- Added markdown source + build system (markdown-it, gray-matter)
- PDF generation with Puppeteer (versioned output)
- Extracted images from base64, print CSS overhaul

#### 2026-05-20
- Initial commit — Nukes HTML rulebook with diagrams
- Structured for GitHub Pages (static files, relative paths)

---

## Licence

All content and artwork are copyright Moddable Games. All rights reserved.
