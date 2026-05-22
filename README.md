# NUKES — Official Rulebook

The complete rulebook for **NUKES** by [Moddable Games](https://moddable.games) — a tactical hex-based strategy game of nuclear brinkmanship for 2-9 players.

**[Read the Rulebook](https://moddable-games.github.io/Nukes-Rulebook/)**

---

## Overview

| | |
|---|---|
| **Players** | 2–3 |
| **Duration** | 45–90 min |
| **Version** | 0.9.3 |

This repository hosts the HTML rulebook, styled for web reading and print-ready PDF generation. It's deployed via GitHub Pages.

---

## Project Structure

```
content/
  rulebook.md           Canonical rules source (edit this)
templates/
  shell.html            HTML shell (header, cover, footer)
  partials/             Visual components (unit cards, ref page, etc.)
diagrams/
  svg/                  SVG diagram source files (8 diagrams)
css/
  style.css             Stylesheet (includes @media print for PDF)
js/
  build.mjs             Markdown → HTML build script
  pdf.mjs               PDF generation (Puppeteer, versioned output)
  pdf-paginate.mjs      Manual pagination engine (DOM measurement)
logos/
  moddable-white.png    Header brand logo
  nukes-logo.jpg        Cover artwork
pdf/
  nukes-rulebook-v*.pdf BUILD OUTPUT (versioned PDF)
index.html              BUILD OUTPUT (do not edit directly)
```

---

## Build

Requires Node.js 18+.

```bash
npm install --ignore-scripts
npm run build          # Generates index.html from content/rulebook.md
npm run pdf            # Generates nukes-rulebook.pdf
```

The build reads `content/rulebook.md`, resolves includes and SVG references, renders markdown to HTML, and injects it into the shell template.

---

## Editing the Rules

Edit `content/rulebook.md` — this is the single source of truth for all rules text. The file uses:

- Standard markdown for paragraphs, headings, lists, tables
- `{nowrap|text}` for non-breaking spans
- `{warn|text}` for warning emphasis
- `{{include:filename.html}}` to include visual HTML partials
- `{{svg:filename.svg "caption"}}` to include SVG diagrams
- Raw HTML blocks for complex visual layouts (boxes, highlights)

After editing, run `npm run build` to regenerate the HTML.

---

## Diagrams

Eight SVG diagrams illustrate core mechanics:

- **Infantry** — Flood fill movement + blocking
- **Artillery** — Jump mechanics (4 scenarios) + pivot at friendly Base
- **Airborne** — Exactly-2-step rule + slingshot chains
- **Nuke** — Valid targets + after-strike effects

---

## PDF Generation

```bash
npm run pdf
```

Uses Puppeteer with local Chrome. Renders each section (cover, content, ref-page, appendix, back-cover) as a separate PDF with full-bleed backgrounds, then merges with `pdfunite`. Multi-page sections use `pdf-paginate.mjs` for DOM-measurement-based pagination. Target: 20 pages (5× A3 booklet).

---

## Changelog

| Date | Change |
|------|--------|
| 2026-05-22 | Overhaul PDF pagination: manual JS page-break engine, smart section grouping, 20-page A3 booklet format; ref card biome alignment; designer note filler; print date on back cover |
| 2026-05-21 | Fix unclosed div in unit cards; overhaul print CSS for professional PDF output; versioned PDF output to pdf/ folder |
| 2026-05-21 | Add markdown source + build system; extract images from base64; PDF generation |
| 2026-05-21 | Extract all inline styles to CSS classes |
| 2026-05-20 | Restructure for GitHub Pages deployment |
| 2026-05-20 | Initial commit — full HTML rulebook with diagrams |

---

## Licence

All content and artwork are copyright Moddable Games. All rights reserved.
