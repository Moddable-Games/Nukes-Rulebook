# NUKES — Official Rulebook

The complete rulebook for **NUKES** by [Moddable Games](https://moddable.games) — a tactical hex-based strategy game of nuclear brinkmanship for 2-9 players.

**[Read the Rulebook](https://moddable-games.github.io/Nukes-Rulebook/)**

---

## Overview

| | |
|---|---|
| **Players** | 2–9 |
| **Duration** | 45–90 min |
| **Version** | 0.9.2 |

This repository hosts the HTML rulebook, styled for web reading and print-ready PDF generation. It's deployed via GitHub Pages.

---

## Project Structure

```
index.html          Main rulebook (GitHub Pages entry point)
css/style.css       Extracted stylesheet
diagrams/           Standalone SVG diagram source files
logos/              Base64-encoded logo assets
.nojekyll           Disables Jekyll processing on GitHub Pages
```

---

## Local Development

Serve from any local web server. With MAMP:

```
http://localhost/MODDABLE/nukes-rulebook/
```

Or use any static server:

```bash
npx serve .
```

---

## Diagrams

Six interactive SVG diagrams illustrate core mechanics:

- **Infantry** — Flood fill movement + blocking
- **Artillery** — Jump mechanics (4 scenarios) + pivot at friendly Base
- **Airborne** — Exactly-2-step rule + slingshot chains
- **Nuke** — Valid targets + after-strike effects

---

## PDF Generation

The stylesheet includes print CSS with page-break rules. To generate a PDF:

1. Open `index.html` in Chrome
2. Print (Cmd+P) → Save as PDF
3. Enable "Background graphics"
4. Set margins to "None"

For automated generation, use Puppeteer or a headless Chrome script.

---

## Changelog

| Date | Change |
|------|--------|
| 2026-05-21 | Extract all inline styles to CSS classes; add changelog |
| 2026-05-20 | Restructure for GitHub Pages deployment |
| 2026-05-20 | Initial commit — full HTML rulebook with diagrams |

---

## Licence

All content and artwork are copyright Moddable Games. All rights reserved.
