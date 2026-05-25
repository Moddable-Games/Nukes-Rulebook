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

### Human — Balanced & Reliable

Heroes, knights and archers. No gimmicks, no weaknesses. Cheap Knight (12 XP), premium Archer that pierces through pieces, and a Wizard with asymmetric threat zones. The Princess is the most mobile King. You always know what you're getting.

### Undead — Phase & Swarm

1 XP Skeletons let you field massive armies (up to 35 Pawns + King), but each dies to any adjacent touch. The Wraith phases through allies, the Reaper walks on water, the Tomb fires through friendly screens. Slippery, numerous, fragile.

### Redskin — Explosive Firepower

Every unit hits hard but costs dearly. Cannon-equipped Pawns and Castles, a hit-and-run Salamander, and the Demonics — which explodes on death, taking adjacent enemies with it. Iron Golem is immune to enemy cannons. Fewer units, bigger impact per piece.

### Greenskin — Attrition & Disruption

Goblins and Orcs backed by disruptive abilities. The Ogre freezes adjacent enemy Pawns. The Troll survives its first death. The Shaman can immobilise a key target. The Orc has flexible movement. Designed to grind opponents down and control the tempo.

</div>

<div class="section"><div class="eyebrow"><span class="eyebrow-badge">Units</span><span class="eyebrow-line"></span></div>

## Unit Roster

All units, organised by chess role. XP cost shown in brackets.

### Pawns

| Unit | Species | Cost | Movement | Attack | Special |
|------|---------|------|----------|--------|---------|
| Hero | Human | 2 XP | 1 square, any direction (8-way) | Diagonal only (1 square) | — |
| Skeleton | Undead | 1 XP | 1 square, any direction (8-way) | Diagonal only (1 square) | **Fragile:** any adjacent enemy can capture it (auto-capture) |
| Kobold | Redskin | 5 XP | 1 square (8-way) + rook slide (to screen) | Diagonal (1 sq) + Cannon | — |
| Goblin | Greenskin | 5 XP | 1 square (8-way) + rook slide (to screen) | Diagonal (1 sq) + Cannon | — |

All Pawns cannot step on water. Kobold and Goblin can also slide along rook lines up to the first piece they encounter (the screen), giving them extra mobility. Skeletons cost only 1 XP but are fragile — any enemy adjacent to a Skeleton can capture it regardless of that enemy's normal attack pattern.

### Castles

| Unit | Species | Cost | Movement | Attack | Special |
|------|---------|------|----------|--------|---------|
| Stronghold | Human | 10 XP | 1 square orthogonally | Adjacent + Rook slide | — |
| Tomb | Undead | 12 XP | 1 square orthogonally | Adjacent + Rook slide | **Phase fire:** rook-slide attacks pass through one friendly piece |
| Iron Golem | Redskin | 18 XP | 1 sq ortho + rook slide (to screen) | Adjacent + Cannon | **Cannon-proof:** cannot be targeted by cannon attacks |
| Ogre | Greenskin | 14 XP | 1 sq ortho + rook slide (to screen) | Adjacent + Cannon | **Intimidate:** adjacent enemy Pawns cannot attack |

Stronghold is reliable baseline artillery. Tomb can use allies as screens for extended range. Iron Golem is a fortress immune to enemy cannons. Ogre paralyses nearby enemy Pawns.

### Knights

| Unit | Species | Cost | Movement | Attack | Special |
|------|---------|------|----------|--------|---------|
| Knight | Human | 12 XP | L-shaped jump (2+1) | Same as movement | — |
| Reaper | Undead | 15 XP | L-shaped jump (2+1) | Same as movement | **Water-walk:** can land on water squares |
| Salamander | Redskin | 18 XP | L-shaped jump (2+1) | Same as movement | **Hit-and-run:** after capturing, may move 1 additional square in any direction |
| Orc | Greenskin | 14 XP | L-shaped jump (2+1) OR 2 squares orthogonally | Same as movement | **Flexible:** can also move 2 squares straight (orthogonal) |

All Knights leap over pieces and terrain. Human Knight is cheap and reliable. Reaper ignores the primary terrain hazard. Salamander can reposition after striking. Orc has two movement modes for unpredictable positioning.

### Bishops

| Unit | Species | Cost | Movement | Attack | Special |
|------|---------|------|----------|--------|---------|
| Archer | Human | 18 XP | Diagonal slide | Diagonal slide (through 1 piece) | **Piercing:** can attack through one intervening piece |
| Wraith | Undead | 15 XP | Diagonal slide | Diagonal slide | **Phase:** slides pass through friendly pieces (stops only at enemies/voids) |
| Fire Elem. | Redskin | 12 XP | Diagonal slide | Diagonal slide | **Water weakness:** water blocks slide entirely |
| Troll | Greenskin | 16 XP | Diagonal slide | Diagonal slide | **Thick-skinned:** first capture is absorbed (pushed 1 sq backward); second capture kills |

Archer is premium — piercing attacks make it a diagonal cannon. Wraith phases through allies for surprise angles. Fire Elem. is cheap but crippled on water maps. Troll survives one hit, making it a durable diagonal presence.

### Queens

| Unit | Species | Cost | Movement | Attack | Special |
|------|---------|------|----------|--------|---------|
| Wizard | Human | 20 XP | Rook lines (orthogonal slide) | Diagonal + Rook lines | Split: moves as Rook, attacks in all directions |
| Vampire | Undead | 20 XP | Bishop lines (diagonal slide) | Rook + Diagonal lines | Split: moves as Bishop, attacks in all directions |
| Demonics | Redskin | 22 XP | Full queen (all 8 directions) | Full queen | **Volatile:** on death, explodes — destroys all adjacent enemy pieces |
| Shaman | Greenskin | 20 XP | Full queen (all 8 directions) | Full queen | **Hex:** once per game, spend a turn to immobilise one visible enemy for 2 turns |

Wizard and Vampire have asymmetric threat zones. Demonics is expensive but its death explosion can swing the game. Shaman's one-time hex can neutralise a key enemy at a critical moment. Both Demonics and Shaman are water-blocked.

### Kings

| Unit | Species | Cost | Movement | Attack | Bonus |
|------|---------|------|----------|--------|-------|
| Princess | Human | 15 XP | King step (1 sq, 8-way) + Bishop slide | King step only | Mobile: slides diagonally for repositioning (no capture via slide) |
| Warlock | Undead | 20 XP | King step (1 sq, 8-way) | King step + Bishop slide attack | Ranged: attacks at distance via diagonal slide |
| Red Dragon | Redskin | 20 XP | King step (1 sq, 8-way) | King step + Knight jump attack | Strikes via L-shaped leap |
| Warlord | Greenskin | 15 XP | King step (1 sq, 8-way) | King step + Knight jump attack | Strikes via L-shaped leap |

Every King has a unique bonus ability. Princess has extra mobility; Warlock and Red Dragon have ranged attacks. Kings are royal — lose yours and you lose the game.

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
- Skeleton (1 XP) swarm: Warlock (20) + 55 Skeletons = 75 XP — fragile but overwhelming
- Human balanced: Princess (15) + Wizard (20) + Archer (18) + Knight (12) + 5 Heroes (10) = 75 XP
- Redskin elite: Red Dragon (20) + Demonics (22) + Iron Golem (18) + 3 Kobolds (15) = 75 XP
- Greenskin midrange: Warlord (15) + Shaman (20) + Troll (16) + Orc (14) + 2 Goblins (10) = 75 XP

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
