---
title: "Dungeon Chess — Official Rulebook"
version: "0.1.0"
slug: "dungeon-chess"
players: "2–4"
duration: "30–120 min"
age: "12+"
tagline: "Asymmetric fantasy strategy on modular dungeon boards"
type: "mod"
base_game: "Chess"
status: "alpha"
updated: "2026-05-25"
published: true
---

<div class="section"><div class="eyebrow"><span class="eyebrow-badge">Overview</span><span class="eyebrow-line"></span></div>

## What Is Dungeon Chess?

Dungeon Chess is an asymmetric strategy game built on a chess engine. Four fantasy species — each with unique abilities — battle on modular dungeon maps with terrain hazards. Players draft armies from a shared XP budget, then fight to capture the enemy King.

**Core differences from standard chess:**
- **Asymmetric armies** — each species has unique unit abilities, not just reskinned pieces
- **XP drafting** — build your army from a budget, choosing quantity vs quality
- **King capture wins** — no checkmate; you must actually take the King
- **Terrain** — water blocks movement; voids create chokepoints; gaps affect diagonal slides
- **Cannon attacks** — some units attack at range using the XiangQi screen mechanic
- **Split move/attack** — some units move in one pattern but attack in another

</div>

<div class="section"><div class="eyebrow"><span class="eyebrow-badge">Species</span><span class="eyebrow-line"></span></div>

## The Four Species

Each species has 6 unit types corresponding to chess roles (Pawn, Castle, Knight, Bishop, Queen, King). Every species plays differently.

### Human — Balanced & Versatile

Heroes, knights and archers. The Human army is well-rounded with no major weaknesses. The Archer can attack across gaps; the Wizard splits its movement and attack directions.

### Undead — Masters of Movement

Skeletons and vampires. The Undead exploit gaps in the terrain — the Wraith moves through voids that stop other species. The Vampire inverts the Wizard's pattern.

### Redskin — Cannon Power

Kobolds and iron golems. Redskin units use cannon attacks — ranged strikes that require a screen piece between attacker and target. Expensive pawns but devastating firepower.

### Greenskin — Brute Force

Goblins, ogres and trolls. Like Redskins, Greenskins have cannon-equipped Pawns and Castles. Their King (Warlord) can strike like a Knight.

</div>

<div class="section"><div class="eyebrow"><span class="eyebrow-badge">Units</span><span class="eyebrow-line"></span></div>

## Unit Roster

All units, organised by chess role. XP cost shown in brackets.

### Pawns

| Unit | Species | Cost | Movement | Attack |
|------|---------|------|----------|--------|
| Hero | Human | 2 XP | 1 square, any direction (8-way) | Diagonal only (1 square) |
| Skeleton | Undead | 2 XP | 1 square, any direction (8-way) | Diagonal only (1 square) |
| Kobold | Redskin | 5 XP | 1 square (8-way) + rook slide (to screen) | Diagonal (1 sq) + Cannon along rook lines |
| Goblin | Greenskin | 5 XP | 1 square (8-way) + rook slide (to screen) | Diagonal (1 sq) + Cannon along rook lines |

All Pawns cannot step on water. Kobold and Goblin can also slide along rook lines up to the first piece they encounter (the screen), giving them extra mobility.

### Castles

| Unit | Species | Cost | Movement | Attack |
|------|---------|------|----------|--------|
| Stronghold | Human | 10 XP | 1 square orthogonally | Adjacent (1 sq) + Rook slide (unlimited range) |
| Tomb | Undead | 10 XP | 1 square orthogonally | Adjacent (1 sq) + Rook slide (unlimited range) |
| Iron Golem | Redskin | 15 XP | 1 square ortho + rook slide (to screen) | Adjacent (1 sq) + Cannon along rook lines |
| Ogre | Greenskin | 15 XP | 1 square ortho + rook slide (to screen) | Adjacent (1 sq) + Cannon along rook lines |

All Castles cannot step on water. Stronghold/Tomb can capture at range via rook slide OR adjacent enemies directly. Iron Golem/Ogre can also slide along rook lines up to the first piece (the screen), and capture both adjacent enemies and distant enemies via cannon.

### Knights

| Unit | Species | Cost | Movement | Attack |
|------|---------|------|----------|--------|
| Knight | Human | 15 XP | L-shaped jump (2+1) | Same as movement |
| Reaper | Undead | 15 XP | L-shaped jump (2+1) | Same as movement |
| Salamander | Redskin | 15 XP | L-shaped jump (2+1) | Same as movement |
| Orc | Greenskin | 15 XP | L-shaped jump (2+1) | Same as movement |

Knights leap over all pieces and terrain. Cannot land on water.

### Bishops

| Unit | Species | Cost | Movement | Attack | Special |
|------|---------|------|----------|--------|---------|
| Archer | Human | 15 XP | Diagonal slide | Diagonal slide (through 1 piece) | Can attack through one intervening piece |
| Wraith | Undead | 15 XP | Diagonal slide | Diagonal slide | Water transparent (slides through water) |
| Fire Elem. | Redskin | 15 XP | Diagonal slide | Diagonal slide | Water blocks slide entirely (move and attack) |
| Troll | Greenskin | 15 XP | Diagonal slide | Diagonal slide | Water blocks slide entirely (move and attack) |

The Archer can attack enemies even if one piece stands between them on the diagonal — like a diagonal cannon. The Wraith and Archer are both water-transparent (slides pass through water), while Fire Elem. and Troll are completely blocked by water.

### Queens

| Unit | Species | Cost | Movement | Attack | Special |
|------|---------|------|----------|--------|---------|
| Wizard | Human | 20 XP | Rook lines (orthogonal slide) | Diagonal slide + Rook lines | Moves as Rook, attacks as Bishop and Rook |
| Vampire | Undead | 20 XP | Bishop lines (diagonal slide) | Rook lines + Diagonal slide | Moves as Bishop, attacks as Rook and Bishop |
| Demonics | Redskin | 20 XP | Full queen (all 8 directions) | Full queen (all 8 directions) | Water blocks slide |
| Shaman | Greenskin | 20 XP | Full queen (all 8 directions) | Full queen (all 8 directions) | Water blocks slide |

The Wizard and Vampire are the most complex units. Each moves in one pattern but attacks in another, creating asymmetric threat zones.

### Kings

| Unit | Species | Cost | Movement | Attack | Bonus |
|------|---------|------|----------|--------|-------|
| Princess | Human | 15 XP | King step (1 sq, 8-way) + Bishop slide | King step only | Slides diagonally for repositioning (no capture via slide) |
| Warlock | Undead | 20 XP | King step (1 sq, 8-way) | King step + Bishop slide attack | Attacks at range via diagonal slide |
| Red Dragon | Redskin | 20 XP | King step (1 sq, 8-way) | King step + Knight jump attack | Strikes via L-shaped leap |
| Warlord | Greenskin | 15 XP | King step (1 sq, 8-way) | King step + Knight jump attack | Strikes via L-shaped leap |

Every King has a unique bonus ability. The Princess has extra mobility; the Warlock and Dragons have ranged attacks. Kings are royal — lose yours and you lose the game.

</div>

<div class="section"><div class="eyebrow"><span class="eyebrow-badge">Cannon</span><span class="eyebrow-line"></span></div>

## The Cannon Mechanic

Kobolds, Goblins, Iron Golems, and Ogres have cannon attacks — a ranged capture mechanic borrowed from XiangQi (Chinese Chess).

**How it works:**
- The cannon attacks along rook lines (straight orthogonal).
- It must pass over exactly ONE piece (the "screen") between itself and the target.
- The screen can be friendly or enemy — it just needs to exist.
- Without a screen piece in the line, the cannon cannot capture.
- Water squares are skipped (not treated as blockers for cannon lines).
- The cannon jumps over the screen and lands on the target's square (same as XiangQi).

**Example:** A Kobold on a1 wants to capture an enemy on a5. There must be exactly one piece on a2, a3, or a4 (the screen). If the line is empty or has two pieces between them, the cannon cannot fire.

</div>

<div class="section"><div class="eyebrow"><span class="eyebrow-badge">Terrain</span><span class="eyebrow-line"></span></div>

## Terrain

Dungeon maps use three terrain types:

### Floor (Normal)
Standard passable squares. No restrictions.

### Water
- Most units CANNOT step onto water squares.
- Knights cannot land on water (but can leap over it).
- Water blocks diagonal slides for Fire Elemental, Troll, Demonics, and Shaman.
- Cannon lines skip over water (water is transparent to ranged attacks).
- Placed as 4×4 blocks in the centre of maps.

### Void
- Off-board squares. Cannot be entered by any unit.
- Creates the dungeon's corridors and chokepoints.
- All sliding pieces stop at void boundaries — voids block slides for every unit equally.

</div>

<div class="section"><div class="eyebrow"><span class="eyebrow-badge">Drafting</span><span class="eyebrow-line"></span></div>

## Army Drafting

Before each battle, players build their army from an XP budget.

**Budget:** 75 XP

**Constraints:**
- Must include exactly 1 King
- Must include at least 1 Pawn
- No maximum team size — as many units as budget allows
- Duplicates are allowed (e.g. 3 Knights is legal)

**Strategy notes:**
- Human/Undead Pawns cost 2 XP — you can field a swarm (up to ~27 Pawns + King)
- Redskin/Greenskin Pawns cost 5 XP — fewer Pawns but each has cannon attacks
- A balanced Human army: Princess (15) + Wizard (20) + Knight (15) + Archer (15) + 5 Heroes (10) = 75 XP
- A Pawn rush: Princess (15) + 30 Heroes (60) = 75 XP

</div>

<div class="section"><div class="eyebrow"><span class="eyebrow-badge">Battle</span><span class="eyebrow-line"></span></div>

## Battle Rules

### Setup
1. Choose your species
2. Draft your army (75 XP)
3. Choose turn order: You First, AI First, or Random
4. Deploy units in your spawn zone (bottom rows of the map)

### Turn Order
- 2-player: alternating turns
- 4-player: cyclic (Player → AI 1 → AI 2 → AI 3)
- Each turn: move one unit OR attack with one unit

### Check
- A King is in check if an enemy unit could capture it on the next move.
- You CANNOT make a move that leaves your own King in check.
- You MUST resolve check on your turn (move King, block, or capture the attacker).
- There is no checkmate — the game only ends on actual King capture.

### Win Condition
**Capture the enemy King.** The game ends immediately when a King is taken. In 4-player games, eliminated players' remaining pieces are removed; the last King standing wins.

### Undo
Players may undo their last move (reverting both their move and the AI's response).

</div>

<div class="section"><div class="eyebrow"><span class="eyebrow-badge">Maps</span><span class="eyebrow-line"></span></div>

## Maps

### Map 1: Compact Skirmish (2-player)

{{svg:compact-skirmish.svg "Compact Skirmish — 10×10 arena"}}

A 10×10 open arena with a 4×4 water block in the centre (rows 3–6, columns 3–6). Spawn zones are the top 2 rows (AI) and bottom 2 rows (Player). Fast, tactical games with water forcing units around the middle.

### Map 2: Two Player Dungeon (2-player)

{{svg:two-player-dungeon.svg "Two Player Dungeon — 20×8 cross"}}

A 20×8 cross-shaped dungeon. Three chambers connected by narrow 2-wide corridors:
- **Top chamber:** 8×3 (AI spawn)
- **Centre chamber:** 8×8 with 4×4 water in the middle
- **Bottom chamber:** 8×3 (Player spawn)
- **Corridors:** 2 squares wide, connecting chambers vertically

Chokepoints force careful army composition. Knights and units that leap are valuable for crossing constraints.

### Map 3: Four Player Dungeon (4-player)

{{svg:four-player-dungeon.svg "Four Player Dungeon — 20×20 symmetric cross"}}

A 20×20 symmetric cross. Four spawn chambers at the cardinal edges, connected by narrow corridors to a central 8×8 arena with 4×4 water. Each arm has its own connector passage.
- **Centre:** rows 6–13, cols 6–13 (with water at rows 8–11, cols 8–11)
- **Spawn zones:** 3-row sections at the end of each arm

The largest and most complex map. Multi-front warfare, temporary alliances, and last-player-standing dynamics.

</div>
