# NUKES Rulebook Project — Handover Notes
**Game:** NUKES by Moddable Games (v0.9.2)
**Last updated:** May 2026
**Status:** HTML rulebook complete, PDF generation in progress

---

## FILES

### rulebook/
- `nukes-rulebook-v8.html` — **CURRENT WORKING FILE**. Full rulebook with all 8 diagrams embedded, approved style applied.
- `style-teaser-approved.html` — The approved style teaser (Direction 1+3 hybrid) used as reference for v8.

### diagrams/
All 8 approved SVG diagrams as standalone HTML files:
- `infantry_d1_floodfill_d2_blocking.html` — Contains 2 SVGs (flood fill + blocking)
- `artillery_d1_jumpmechanics.html` — Jump mechanics (4 scenarios)
- `artillery_d2_pivot.html` — Pivot at friendly Base (8 destinations)
- `airborne_d1_exactly2.html` — Exactly 2 steps, not adjacent (with mountains)
- `airborne_d2_slingshot.html` — Slingshot chain (all valid destinations)
- `nuke_d1_targets_d2_afterstrike.html` — Contains 2 SVGs (valid targets + after strike)

### logos/
Base64-encoded PNG files for embedding in HTML:
- `nukes_logo_b64.txt` — Nukes hexagonal badge (black background — needs CSS dark cover bg)
- `moddable_white_b64.txt` — Moddable Games logo white version (for dark backgrounds)
- `moddable_black_b64.txt` — Moddable Games logo black version (for light backgrounds)

**IMPORTANT — Logo note:** The Nukes logo PNG has a black background baked in (not true transparency).
The cover uses `background: #0e0a06` (near-black) so the black corners blend seamlessly.
Do NOT attempt background removal — it creates feathered/fuzzy edges.

---

## STYLE SYSTEM

### Fonts (loaded from Google Fonts)
- `Oswald` — headings (h2, h3), eyebrows, labels, stats (weights 400, 600, 700)
- `Crimson Pro` — body text (weights 400, 600, italic)
- `Special Elite` — header/footer meta, cover pub line, footer copy

### Colour Palette
```css
--cream:    #f2ece0;  /* page background */
--cream-d:  #e4d8c0;
--cream-dd: #cfc0a0;
--ink:      #1a1208;  /* body text */
--ink-l:    #362818;
--teal:     #1c4a4a;  /* primary brand colour */
--gold:     #c9a84c;  /* accent */
--gold-d:   #8b6914;
--gold-p:   #e8d5a0;
--rust:     #a83818;  /* warning/meltdown */
--purple-l: #7a3aaa;  /* "NEW" badge in appendix */
```

### Key Layout
- Page max-width: 900px
- Content padding: 0 52px
- Header/footer: fixed 52px height, teal background, gold border
- Cover: dark background (#0e0a06) so logo blends cleanly

---

## OUTSTANDING ISSUES

### 1. Orphan Words (HIGH PRIORITY)
Orphan words (single words on last line of a paragraph) persist.
They are difficult to fix without a live browser because:
- Python line-width estimation doesn't match browser rendering
- `text-wrap: pretty` CSS helps but doesn't catch all cases
- `white-space: nowrap` spans on last 2-3 words of sentences is the reliable fix
- **RECOMMENDATION:** Open in Chrome, screenshot each section, identify orphans visually,
  rewrite sentences to eliminate them (shorter or longer to change line count)
- DO NOT try to auto-detect in Python — it doesn't work reliably

### 2. PDF Generation (MEDIUM PRIORITY)
Current approach: Chrome print-to-PDF (Cmd+P → Save as PDF)
- Background graphics must be checked ON
- Margins: None
- The print CSS in v8 has `break-before: page` on 8 major sections
- Cover has `break-after: page`
- Known remaining issue: some sections may still bleed across pages
- The HTML file is 454kb which causes corruption in the Claude.ai artifact viewer
- **RECOMMENDATION:** Use Puppeteer/headless Chrome for automated PDF generation

### 3. Spacing between words in some text
The PDF text extraction shows missing spaces (e.g. "Thisis" instead of "This is").
This is a PDF text-extraction artefact only — the HTML renders correctly.

---

## CONFIRMED RULES (Key Clarifications)

**Fluid Platoons:** Token count = platoon type always. 1=Infantry, 2=Artillery, 3=Airborne, 4-9=Base.

**Hostage Return:** Tokens go to regions where THAT token's owner already has units. Max 1 per region per turn. Number returned = moves earned.

**Meltdown:** Returning token to 9-unit Base → target hex becomes Biohazard immediately. ONLY target hex; 6 surrounding hexes unaffected (key distinction from Nuke).

**Airborne Movement:** Exactly 2 steps via ANY path (not straight line). Cannot land on adjacent hex. Slingshot: land on own Airborne/Base, launch again. Each launch point usable once per chain. Can STOP at intermediate Base. Full reachable set = destinations from start + from Base A + from Base B.

**Nuke Blast:** Target hex → Biohazard. Units in target + 6 surrounding destroyed. Surrounding hex BIOMES unchanged.

**Cities:** Act as Bases for MOVEMENT only regardless of unit count. <4 units = no combat bonus. 4+ units = real Base, normal bonuses.

**Artillery Pivot:** From pivot Base, can land on: Base itself, any of 5 adjacent hexes (excl. came-from), or jump beyond any occupied adjacent. Standard jump rules apply from pivot.

---

## RULES TEXT CORRECTIONS APPLIED IN V8
- Phase 2: "unoccupied" → "empty or friendly"
- Infantry restricted terrain: token-count framing throughout
- Artillery pivot: full mechanics described
- Airborne "exactly 2": clarified as any-direction 2-step, not straight line
- Nuke blast: only target hex becomes Biohazard (surrounding stay as-is)
- Meltdown: confirmed as Biohazard on target only
- Artillery pivot clarification in appendix: generic (not "8 destinations" which was example-specific)

---

## DIAGRAM NOTES
- All diagrams use the same hex grid rendering system (pointy-top, offset grid)
- Hex radius r=28-30px, colours: fields=#c8e8a0, mountains=#d8d4ce, water=#a8d4f0, biohazard=#d8b8f0
- P1 (own) tokens: #1c4a4a (teal), P2 (enemy) tokens: #8b1c1c (rust)
- Gold border = Base or key unit
- Green outline = valid destination/target
- Red X = cannot land/target
- SVGs are embedded directly in rulebook HTML, made responsive via max-width:100%;height:auto

