---
title: "Dungeon Chess — Official Rulebook"
version: "0.1.0"
slug: "dungeon-chess"
players: "2–4"
duration: "30–120 min"
age: "12+"
tagline: "Asymmetric fantasy strategy on modular dungeon boards"
---

<div class="section"><div class="eyebrow"><span class="eyebrow-badge">Section 1</span><span class="eyebrow-line"></span></div>

## Overview

Dungeon Chess is an asymmetric turn-based strategy game for 2–4 players. Each player commands one of four fantasy species — Humans, Undead, Redskins, or Greenskins — across modular dungeon boards built from interlocking tiles. No two armies play the same way.

You draft your warband from a budget of 75 XP, choosing from six unit types unique to your species. Deploy onto the board, manoeuvre through corridors and chambers, and hunt down the enemy King. The first player to capture an opponent's King wins.

<div class="highlight">
<div class="box-title">Core Principles</div>

**1. Asymmetry.** Each species has the same six unit roles but different costs, abilities, and tactical identities. Humans are balanced generalists; Undead exploit movement tricks; Redskins bring devastating firepower; Greenskins overwhelm with brute force.

**2. Draft tension.** With only 75 XP and 24 possible units to choose from, no two warbands are alike. Every point spent is a tactical commitment.

**3. Dungeon terrain.** Corridors create chokepoints. Gaps block movement. Water restricts certain units. The board itself is a weapon.
</div>

</div>

<div class="section"><div class="eyebrow"><span class="eyebrow-badge">Section 2</span><span class="eyebrow-line"></span></div>

## Species

Four species compete for dominance in the dungeon. Each shares the same six unit roles but brings a distinct tactical identity to the battlefield.

| Species | Colour | Playstyle | Strengths |
|---------|--------|-----------|-----------|
| **Humans** | White | Balanced | Well-rounded stats, no weaknesses, adaptable to any board state |
| **Undead** | Black | Movement tricks | Phasing through units, resurrection, positional manipulation |
| **Redskins** | Red | Firepower | Devastating ranged attacks, area denial, high burst damage |
| **Greenskins** | Green | Brute force | Cheap powerful units, high HP, overwhelm through numbers |

<div class="designer-note">
<p>Species were designed around a rock-paper-scissors dynamic that doesn't create hard counters. Greenskins outnumber Humans but struggle against Redskin firepower. Redskins dominate open corridors but can't pin down phasing Undead. Undead outmanoeuvre Greenskins in tight spaces but crumble against Human versatility.</p>
</div>

</div>

<div class="section"><div class="eyebrow"><span class="eyebrow-badge">Section 3</span><span class="eyebrow-line"></span></div>

## Units

Each species fields six unit types. While unit roles are shared across species, their XP costs and special abilities differ — reflecting each faction's tactical identity.

### Humans (White)

| Unit | Type | Cost | Movement | Special Ability |
|------|------|------|----------|-----------------|
| **Man-at-Arms** | Pawn | 5 XP | Step | Shield Wall — +1 defence when adjacent to another Man-at-Arms |
| **Watchtower** | Castle | 15 XP | Slide | Fortify — cannot be displaced by Cannon movement |
| **Cavalier** | Knight | 12 XP | Jump | Charge — first attack each game deals double damage |
| **Chaplain** | Bishop | 10 XP | Slide | Heal — restore one captured friendly Pawn to an adjacent space |
| **Empress** | Queen | 20 XP | Slide | Inspire — adjacent friendly units gain +1 movement range |
| **High King** | King | 8 XP | Step | Rally — once per game, all friendly units within 2 spaces gain an extra action |

### Undead (Black)

| Unit | Type | Cost | Movement | Special Ability |
|------|------|------|----------|-----------------|
| **Skeleton** | Pawn | 4 XP | Step | Reassemble — returns to play after 2 turns if not captured by King |
| **Crypt** | Castle | 14 XP | Slide | Phase — can slide through one occupied square per move |
| **Wraith** | Knight | 13 XP | Jump | Incorporeal — ignores Gaps when jumping |
| **Necromancer** | Bishop | 12 XP | Slide | Raise Dead — convert one adjacent captured enemy Pawn to a friendly Skeleton |
| **Lich Queen** | Queen | 18 XP | Slide | Soul Drain — capturing a unit restores one friendly captured Pawn |
| **Death King** | King | 7 XP | Step | Undying — survives first capture attempt (once per game) |

### Redskins (Red)

| Unit | Type | Cost | Movement | Special Ability |
|------|------|------|----------|-----------------|
| **Firebrand** | Pawn | 6 XP | Step | Ignite — leaves a fire token on vacated square (blocks for 1 turn) |
| **Furnace** | Castle | 16 XP | Slide | Bombardment — can attack one target within range 3 without moving |
| **Salamander** | Knight | 14 XP | Jump | Fireproof — immune to fire tokens and Cannon knockback |
| **Pyromancer** | Bishop | 11 XP | Slide | Fireball — Cannon-type attack up to range 2, does not move the attacker |
| **Inferno Queen** | Queen | 22 XP | Slide | Blaze Trail — every square moved through becomes a fire token for 1 turn |
| **Ember King** | King | 9 XP | Step | Heat Shield — adjacent fire tokens grant +1 defence |

### Greenskins (Green)

| Unit | Type | Cost | Movement | Special Ability |
|------|------|------|----------|-----------------|
| **Goblin** | Pawn | 3 XP | Step | Swarm — up to 3 Goblins may occupy the same square |
| **Troll Fort** | Castle | 13 XP | Slide | Regenerate — if damaged but not captured, restores to full next turn |
| **Warg Rider** | Knight | 11 XP | Jump | Pounce — may jump a second time if first jump captures a Pawn |
| **Shaman** | Bishop | 10 XP | Slide | War Cry — push all adjacent enemy Pawns one square away |
| **Warboss** | Queen | 18 XP | Slide | Rampage — may attack twice per turn but cannot Slide more than 3 squares |
| **Great Chief** | King | 6 XP | Step | Thick Hide — requires two attacks in one turn to capture |

{{include:unit-cards.html}}

</div>

<div class="section"><div class="eyebrow"><span class="eyebrow-badge">Section 4</span><span class="eyebrow-line"></span></div>

## Movement Rules

All units move according to one of four movement types. The dungeon board's corridors, gaps, and water features create tactical constraints that reward careful positioning.

### Step

The unit moves exactly **one square** in any orthogonal or diagonal direction. Step units are slow but predictable — they never overextend and can navigate tight corridors without restriction.

- Kings and Pawns use Step movement.
- Step units can move into any adjacent unoccupied square or one occupied by an enemy (to attack).

### Slide

The unit moves **any number of squares** in a straight line (orthogonal or diagonal) until blocked by another unit, a wall, or the board edge. Slide units dominate long corridors but are vulnerable in cramped spaces.

- Castles, Bishops, and Queens use Slide movement.
- A Sliding unit must stop immediately before any occupied square (unless a special ability overrides this).
- Slide cannot change direction mid-move.

### Jump

The unit moves in an **L-shape**: two squares in one direction plus one square perpendicular (like a chess knight). Jump units bypass obstacles between origin and destination.

- Knights use Jump movement.
- Jumping ignores intervening units and terrain — only the destination square matters.
- A Jump unit cannot land on a friendly-occupied square.

### Cannon

A special ranged attack where the unit does **not move** but affects a target at range. Cannon attacks travel in straight lines and may require clear line-of-sight depending on the unit's species abilities.

- Certain Redskin units (Furnace, Pyromancer) have Cannon as an attack option.
- Cannon attacks do not displace the attacker — the unit stays in place.
- Standard Cannon range is 2–3 squares in a straight line.

### Gaps

Gaps are impassable squares on the board — holes in the dungeon floor, collapsed ceilings, or bottomless pits.

- No unit may enter or pass through a Gap square by Step or Slide.
- Jump movement may cross over Gaps (the unit flies over them).
- Gaps block line-of-sight for Cannon attacks.
- Some Undead abilities (Wraith: Incorporeal) ignore Gap restrictions.

### Water

Water squares represent flooded chambers, underground rivers, or submerged passages.

- **Pawns cannot enter Water** under any circumstances.
- Knights, Bishops, Queens, Castles, and Kings may enter Water but **end their turn immediately** upon doing so (no further actions that turn).
- Certain species abilities modify Water interaction (e.g., Salamander: Fireproof grants Water immunity).

### Check

When a unit threatens the enemy King (could capture it next turn), that King is in **Check**.

- A player whose King is in Check **must** resolve the Check on their next turn — by moving the King, blocking the threat, or capturing the threatening unit.
- If Check cannot be resolved, the King is captured and that player is eliminated.
- Unlike standard chess, there is no stalemate — if you cannot move, you lose.
- Multiple units can place a King in Check simultaneously.

</div>

<div class="section"><div class="eyebrow"><span class="eyebrow-badge">Section 5</span><span class="eyebrow-line"></span></div>

## Drafting

Before the game begins, each player assembles their warband by spending a budget of **75 XP** on units from their species roster. Drafting is simultaneous — all players build their armies in secret, then reveal before deployment.

### Constraints

- **Budget:** Exactly 75 XP. You may not overspend, and unspent XP is wasted.
- **Mandatory units:** Every warband must contain exactly **1 King** and at least **1 Pawn**.
- **No duplicates beyond Pawns:** You may draft multiple Pawns, but only one of each other unit type.
- **Species-locked:** You may only draft units from your chosen species.

### Draft Strategy

<div class="highlight">
<div class="box-title">Draft Tips</div>

**Go wide or go tall.** Flooding the board with cheap Pawns gives you presence but limited power. Investing in expensive Queens and Castles gives raw strength but leaves your King exposed with fewer bodies to shield it.

**Mind the King tax.** Your King costs between 6–9 XP depending on species and must be included. This constrains your remaining budget differently for each faction — Greenskins get 69 XP for their army, while Redskins only get 66 XP.

**Counter-draft the map.** On water-heavy boards, Pawn-heavy armies suffer. On open maps with long corridors, Slide-heavy builds dominate. Consider the map before finalising your roster.
</div>

</div>

<div class="section"><div class="eyebrow"><span class="eyebrow-badge">Section 6</span><span class="eyebrow-line"></span></div>

## Deployment

After drafting, players place their units onto the board in their designated spawn zones. Deployment is sequential — the player who chose their species last deploys first.

### Spawn Zones

Each map defines spawn zones for each player — typically 2–3 rows of squares at the player's board edge. All drafted units must be placed within the spawn zone before play begins.

### Placement Rules

- **One unit per square.** No square may hold more than one unit at deployment (Goblin Swarm does not apply during deployment).
- **King placement is secret.** Place your King face-down. It is only revealed when an enemy unit first threatens its square. Once revealed, it remains face-up for the rest of the game.
- **No Water spawns.** Units cannot be deployed onto Water squares even if they are within the spawn zone.
- **All units must deploy.** Every drafted unit must be placed. You cannot hold reserves.

### Turn Order

After all players have deployed, determine first-player by species colour priority: White (Humans) first, then Black (Undead), Red (Redskins), Green (Greenskins). Play proceeds clockwise from the first player.

On your turn, you activate **one unit** — it may move and/or attack according to its movement type and special abilities.

</div>

<div class="section"><div class="eyebrow"><span class="eyebrow-badge">Section 7</span><span class="eyebrow-line"></span></div>

## Maps

Dungeon Chess ships with three modular board configurations. Each creates a different tactical landscape, favouring different species and army compositions.

### Compact Skirmish (10x10)

A tight, claustrophobic dungeon designed for **2 players**. Short corridors, frequent chokepoints, and limited flanking routes create intense close-quarters combat. Games are fast and aggressive — expect 30–45 minutes.

- **Grid:** 10 columns x 10 rows (100 squares)
- **Spawn zones:** 2 rows per player (top and bottom edges)
- **Gaps:** 8–12 scattered centrally
- **Water:** 4–6 squares forming a central channel
- **Best for:** Learning the game, quick matches, aggressive playstyles

### Two Player Dungeon (20x8)

A long, narrow corridor complex designed for **2 players** who want a deeper strategic experience. The elongated shape creates a no-man's-land in the centre, rewarding patient manoeuvring and ranged superiority. Games run 45–75 minutes.

- **Grid:** 20 columns x 8 rows (160 squares)
- **Spawn zones:** 3 columns per player (left and right edges)
- **Gaps:** 12–16 forming maze-like barriers
- **Water:** 8–10 squares creating lateral channels
- **Best for:** Competitive two-player, strategic depth, positional play

### Four Player Dungeon (20x20)

The grand dungeon — a sprawling labyrinth designed for the full **4-player** experience. Multiple paths, wide chambers, and complex Gap formations create a dynamic battlefield where alliances shift and flanks appear unexpectedly. Games run 60–120 minutes.

- **Grid:** 20 columns x 20 rows (400 squares)
- **Spawn zones:** 3 rows/columns per player (one per board edge)
- **Gaps:** 30–40 forming chambers and corridors
- **Water:** 16–20 squares forming rivers and pools
- **Best for:** Full multiplayer, diplomacy, epic battles, varied strategies

</div>

<div class="section"><div class="eyebrow"><span class="eyebrow-badge">Section 8</span><span class="eyebrow-line"></span></div>

## Winning

The game ends immediately when a King is captured.

### Victory Conditions

- **King Capture:** Move one of your units onto the enemy King's square. That player is eliminated. In a 2-player game, the capturing player wins. In 3–4 player games, play continues until only one King remains.
- **Resignation:** A player may resign at any time. Their units are removed from the board immediately.
- **Timeout (optional):** If using a turn clock, a player who exceeds their time limit forfeits their King.

### Multiplayer Elimination

In games with 3–4 players, when a player is eliminated:

- All their remaining units are removed from the board.
- Play continues with the remaining players. Turn order is unchanged (skip eliminated players).
- The player who captured the King gains no additional benefit — the reward is removing a threat.

<div class="designer-note">
<p>King capture (rather than checkmate) was chosen deliberately. It keeps games decisive, shortens the endgame, and prevents draws. The hidden King at deployment adds a deduction layer — you must figure out which unit is the King before you can target it.</p>
</div>

</div>

<div class="section"><div class="eyebrow"><span class="eyebrow-badge">Section 9</span><span class="eyebrow-line"></span></div>

## Glossary

| Term | Definition |
|------|-----------|
| **Asymmetric** | Each player's faction has different units, costs, and abilities |
| **Cannon** | A ranged attack where the unit does not move |
| **Capture** | Moving onto an enemy-occupied square, removing that unit from play |
| **Check** | A state where the King could be captured on the next turn |
| **Deploy** | Placing units onto the board at the start of the game |
| **Draft** | Selecting your warband from available units within a budget |
| **Gap** | An impassable square that blocks Step, Slide, and line-of-sight |
| **Jump** | L-shaped movement that bypasses intervening terrain and units |
| **King** | The critical unit — its capture eliminates a player |
| **Modular board** | A board assembled from configurable tiles before each game |
| **Pawn** | The basic infantry unit; cheap, Step-movement only |
| **Slide** | Movement in a straight line for any distance until blocked |
| **Spawn zone** | The designated area where a player deploys their units |
| **Species** | One of the four playable factions (Human, Undead, Redskin, Greenskin) |
| **Step** | Movement of exactly one square in any direction |
| **Warband** | The complete set of units a player drafts for a game |
| **Water** | Terrain that Pawns cannot enter and other units enter at cost |
| **XP** | Experience Points — the currency used during drafting |

</div>
