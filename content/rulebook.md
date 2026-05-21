---
title: "NUKES — Official Rulebook"
version: "0.9.3"
---

<div class="section">
<div class="eyebrow">Before You Begin</div>

## How to Play in 5 Minutes

Nukes is a 2–3 player strategy game played on a board of hexagonal regions. You command armies across varied terrain, build fortified bases, and threaten opponents with nuclear strikes — all while managing a precarious supply of hostages that is simultaneously your resource and your countdown timer.

<div class="highlight">
<div class="box-title">★ Read This First — The Two Core Ideas</div>

**1. Units are fluid.** Tokens have no fixed type. The number of tokens in a region determines what they are: 1 = Infantry, 2 = Artillery, 3 = Airborne, 4+ = Base. This changes constantly as tokens move, and it governs movement, combat, and terrain {nowrap|safety.}

**2. Hostages are your engine.** You hold your opponents' tokens. Each turn you must return 1–3 of them to their owner's forces on the board — this earns you moves, but also reinforces your enemy. Your hostage supply is finite. When it runs out, you {nowrap|lose.}
</div>

### The Core Loop

- **Return 1–3 hostages** to regions where their owner already has units — earning one move per token returned.
- **Move your platoons.** Infantry chains through same-biome terrain. Artillery fires in straight lines over occupied regions. Airborne drops exactly two regions away and can slingshot through friendly Bases.
- **Attack** by moving into an enemy region — but only if you have strictly greater strength than the defender.
- **Capture enemy units** as hostages instead of destroying them, sacrificing your own units to do so.
- **Build Bases** (4+ units in one region) to convert units into isotopes and {nowrap|unlock nuclear strikes.}
- **Win** by destroying or occupying an opponent's city — or outlasting everyone else.

</div>

<div class="section pb">
<div class="eyebrow">What's in the Box</div>

## Components

| Item | Qty | Notes |
|------|-----|-------|
| **Hex Tiles** | 44 | Each is a region. Biohazard printed on the reverse. |
| **Tokens** | 75 | 25 per player in 3 distinct colours. |
| **Bookmark Reference Cards** | 3 | One per player — see the Quick Reference section of this rulebook. |
| **Rulebook** | 1 | This document. |

### Tokens — What They Represent

There are no separate pieces for different unit types. Token count and location {nowrap|determine everything.}

| Token State | Represents |
|-------------|-----------|
| **On the board — 1 token** | Infantry |
| **On the board — 2 tokens** | Artillery |
| **On the board — 3 tokens** | Airborne |
| **On the board — 4 to 9 tokens** | Base (does not move) |
| **Off the board, beside it** | Isotopes — your nuke fuel reserve |
| **Held by another player** | Hostages — your tokens, in enemy hands |

### Hex Tiles by Biome

| Biome | Count | Colour |
|-------|-------|--------|
| Fields | 13 | Light green |
| Forests | 9 | Dark green |
| Mountains | 7 | Grey |
| Water | 7 | Light blue |
| Deserts | 5 | Yellow |
| Cities | 3 | Light red |

</div>

<div class="section pb">
<div class="eyebrow">Before the First Turn</div>

## Setting Up the Board

### Building the Board

The board uses 37 of the 44 tiles and can be built three ways:

- **Symmetrical:** A pre-agreed mirrored layout. Visit moddable.games/tool/nukes {nowrap|for templates.}
- **Pre-defined:** All players agree on a specific arrangement before play begins.
- **Drafted:** Randomly choose a starting player who picks the central region. Players then alternate placing tiles adjacent to their city, the central region, or any {nowrap|already-placed tile.}

<div class="two-col">
<div>

#### 2-Player Tile Counts

| Biome | Per Side | Total |
|-------|----------|-------|
| Fields | 5 | 10 + centre |
| Forests | 4 | 8 |
| Mountains | 3 | 6 |
| Water | 3 | 6 |
| Deserts | 2 | 4 |
| Cities | 1 | 2 |

</div>
<div>

#### 3-Player Tile Counts

| Biome | Per Side | Total |
|-------|----------|-------|
| Fields | 4 | 12 + centre |
| Forests | 2 | 6 |
| Mountains | 2 | 6 |
| Water | 2 | 6 |
| Deserts | 1 | 3 |
| Cities | 1 | 3 |

<p class="table-note">★ In 3-player games the central region must not be a City.</p>
</div>
</div>

### Starting Positions

- Place your **City tile** at the edge of the board, equally spaced from all other cities and the central region.
- Place **4 of your tokens** in your city as starting units.
- Place **1 token** beside the board as your starting **isotope**.
- In a **2-player game:** take all 20 of your opponent's tokens as hostages.
- In a **3-player game:** take 10 tokens from each other player as hostages (20 total).

</div>

<div class="section pb">
<div class="eyebrow">Winning the Game</div>

## Victory Conditions

The game ends **immediately** the moment any condition below is met. No further {nowrap|turns are taken.}

- **Destroy an opponent's city** via a Nuke strike or a Meltdown on their city hex.
- **Establish a Base on an opponent's city** — move 4 or more of your units onto their {nowrap|city tile.}
- **Outlast all opponents** — be the last player with hostages to return and units on {nowrap|the board.}

### Elimination

A player is eliminated when **either** of the following {nowrap|occurs independently:}

- {warn|Hostage Attrition:} You have no hostages to return at the start of your turn. Your city is immediately destroyed and all your units removed from the game.
- {warn|Total Annihilation:} You have no units left on the board at any point. All your tokens everywhere — on the board and held as hostages by others — are immediately removed from the game.

<div class="box red">
<div class="box-title">⚠ 3-Player Eliminations</div>

When a player is eliminated, any of their tokens held as hostages by surviving players are also removed from the game immediately. Surviving players lose that portion of their hostage supply. The two remaining players continue normally.
</div>
</div>

<div class="section pb">
<div class="eyebrow">How Turns Work</div>

## Turn Structure

Turns proceed clockwise. Each turn has three phases, always in this order.

{{include:turn-flow.html}}

### Phase 1 — Return Hostages

<div class="highlight">
<div class="box-title">✦ Understanding the Hostage Mechanic</div>

You hold tokens belonging to your opponents. Like hostages in the real world, they are under your control until returned home. When you return them, each token goes to a region on the board where **that token's owner already has at least one unit** — physically joining that region and potentially upgrading its platoon type. Returning tokens earns you moves, but directly strengthens your enemy's forces.
**This tension is the engine of the game.**
</div>

- You **must** return between 1 and 3 hostage tokens each turn — at least 1 is mandatory.
- Each token goes to a region where **that token's owner already has units present**. You cannot return a token to an empty region or to one of your own regions.
- The returned token **physically joins that region**, increasing the unit count. A 2-token Artillery may become 3-token Airborne. A 3-token Airborne may become a 4-token Base — with all {nowrap|consequences that follow.}
- You may return **no more than 1 token per region** per turn.
- The number of tokens returned equals the number of **moves earned** this turn.
- {warn|If you have no hostages to return}, your city is immediately destroyed and you {nowrap|are eliminated.}

### Phase 2 — Move Units

- You earn **one move per hostage returned** — between 1 and 3 moves total.
- Moves are **optional**. You may use fewer than you earned. Only return as many hostages as moves you actually need — every returned token costs you.
- You may move a **maximum of 3 units in total** per turn. Valid combinations: 1 Airborne (3 units), 1 Artillery + 1 Infantry, or up to 3 Infantry.
- Each move is: moving a platoon into any empty region, into a region containing friendly units, or attacking an enemy-occupied region.
- The **same unit(s) cannot move more than once** per turn — except within {nowrap|an Airborne Slingshot.}

### Phase 3 — End-of-Turn Resolution

After all moves and combat are resolved, any units resting in restricted terrain they cannot safely occupy are destroyed. Only a unit's **final resting position** matters — a token may transit through a restricted terrain region during a move and end safely {nowrap|elsewhere with no penalty.}

<div class="box teal">
<div class="box-title">✦ Immediate vs End-of-Turn Destruction</div>

Nuke blasts and Meltdowns destroy units **immediately** when triggered — not at end of turn. Everything else (a platoon stranded in terrain it cannot safely occupy) is resolved during Phase 3 only.
</div>
</div>

<div class="section pb">
<div class="eyebrow">Your Forces</div>

## Units & Platoons

Platoon type is determined solely by the **current token count** in a region. This fluidity is fundamental — tokens become different unit types as they {nowrap|join or leave regions.}

<div class="box teal">
<div class="box-title">✦ The Fluid Platoon Principle</div>

If 1 infantry token moves into a region containing 2 artillery tokens, those 3 tokens are now Airborne — with all of Airborne's permissions and restrictions. At end of turn, a region with 3 tokens in water is Airborne (safe). Two tokens in water is Artillery (destroyed). Always ask: **how many tokens are here, and {nowrap|what does that make them?}**
</div>

{{include:unit-cards.html}}

### Infantry — Movement & Rules

<div class="diagrams-grid">
<div class="diagram-box">
<div class="diagram-title">Same-Biome Flood Fill</div>
{{svg:infantry_floodfill.svg "Infantry reaches every connected field hex in one move — no distance limit. Adjacent mountains are also reachable as a final step into a different biome. The mountain with a red mark has no adjacent field and cannot be reached."}}
</div>
<div class="diagram-box">
<div class="diagram-title">Can Enter, Cannot Pass Through</div>
{{svg:infantry_blocking.svg "Infantry can move into a friendly Artillery region (tokens merge). It cannot move through it. Mountains seal the corridor — the fields beyond the Artillery are unreachable. Six adjacent mountains are reachable as a final step."}}
</div>
</div>

- **Same-biome chaining:** Infantry may travel through any number of connected regions sharing their starting biome in a single move — no distance limit. At the end they may optionally step into one adjacent region of a different biome.
- **Blocked by ALL units, including friendly ones:** Infantry cannot pass through any region containing any other units — enemy or friendly. Your own Artillery blocks your own Infantry just as firmly as an enemy would. Only your own Airborne and Bases may be passed through freely.
- **Restricted terrain:** A region ending the turn with 1 token (Infantry) in water or desert is destroyed at Phase 3 {nowrap|resolution.} Infantry cannot transit through water or desert unless your own Airborne or a Base is already stationed in that specific region.
- **Combat bonus:** Each friendly Base infantry passes *through* en route to an attack {nowrap|adds +1 to combat strength.} The starting Base {nowrap|does not count.}

### Artillery — Movement & Rules

<div class="diagrams-grid">
<div class="diagram-box">
<div class="diagram-title">Jump Mechanics</div>
{{svg:artillery_jumpmechanics.svg "Four jump attempts from the same position. Enemy Infantry and own Airborne are valid stepping stones. An empty intermediate prevents any jump. Enemy Airborne blocks the jump despite the hex being occupied."}}
</div>
<div class="diagram-box">
<div class="diagram-title">Pivot at a Friendly Base</div>
{{svg:artillery_pivot.svg "Artillery arrives at the friendly Base (gold border). From the Base it can reach 8 destinations: the Base itself, 5 adjacent hexes (excluding where it came from), and 2 hexes beyond the friendly infantry via continued jumps."}}
</div>
</div>

- **Straight-line jumps:** Artillery moves by jumping to the directly opposing region across a hex axis. Intermediate regions must contain units at the moment of the jump — units placed there earlier in the same {nowrap|turn count.}
- **Multiple jumps:** Artillery can chain multiple jumps in one move, using each occupied region as a stepping stone.
- **Direction changes (pivots):** When artillery jumps over your own Airborne or a Base, it may change to any new hex direction and {nowrap|continue from there.} From the pivot point, artillery may: land on the pivot Base or Airborne itself; land on any adjacent empty hex; land on any adjacent friendly region (tokens merge via fluid rules); or jump over any occupied adjacent hex to land beyond it. Multiple pivots are permitted in one move.
- **Enemy blockers:** Artillery cannot jump over enemy Airborne or enemy Bases. It can jump over enemy Infantry and enemy Artillery.
- **Forest:** Artillery starting in a forest cannot attack that turn. It may still move to any unoccupied region or join a friendly platoon.
- **Water:** A region ending with 2 tokens alone in water is destroyed at Phase 3. Cannot pass through water without your Airborne or Base already in that region.
- **Combat bonus:** Each friendly Base passed over en route adds +1. The starting Base {nowrap|does not count.}

### Airborne — Movement & Rules

<div class="diagrams-grid">
<div class="diagram-box">
<div class="diagram-title">Exactly 2 Steps, Not Adjacent</div>
{{svg:airborne_exactly2.svg "Airborne lands exactly 2 steps away in any direction — the path need not be straight. Adjacent hexes cannot be landed on. Mountains without a friendly Base cannot be passed through or landed in."}}
</div>
<div class="diagram-box">
<div class="diagram-title">Slingshot Chain</div>
{{svg:airborne_slingshot.svg "All valid destinations shown across the full slingshot chain — from start directly, or via either Base as a launch point. Each Base may only serve as a launch point once per chain."}}
</div>
</div>

- **Exactly two regions:** Airborne moves in two steps, each to an adjacent region. The two steps can go in any direction — there is no requirement to move in a straight line. The only restriction is that the final landing region cannot be directly adjacent to the starting region. Any region that is two steps away via any path, and not adjacent to the start, is a {nowrap|valid landing spot.}
- **Mountains:** Airborne cannot pass through a mountain region unless one of your own Bases is already present there. Even with Base support, airborne cannot safely end as 1 token alone in a mountain.
- **Enemy blockers:** Airborne cannot pass over regions containing enemy Infantry or enemy Artillery. It can pass over enemy Airborne and enemy Bases freely.
- **Slingshot:** If Airborne lands on a region containing your own Airborne or a Base, it may immediately launch again. Declare the entire chain at once. Each intermediate Airborne or Base may only serve as a launch point once per chain. Every leg must obey the "exactly 2, not adjacent" rule. The entire chain counts as only 3 {nowrap|units toward the turn's maximum.}
- **Combat bonus:** Each friendly Base slingshot over en route {nowrap|adds +1 to combat strength.}

### Nukes — Movement & Rules

<div class="diagrams-grid">
<div class="diagram-box">
<div class="diagram-title">Valid Targets</div>
{{svg:nuke_targets.svg "Nuke hops over the infantry, pivots at the Airborne, then hops again to reach targets. Enemy Airborne blocks one direction. The enemy cluster top-right is the strongest choice — destroying 5 units in one strike."}}
</div>
<div class="diagram-box">
<div class="diagram-title">After the Strike</div>
{{svg:nuke_afterstrike.svg "The target hex becomes Biohazard. All units in the target and its 6 surrounding hexes are destroyed — the surrounding hexes themselves remain unchanged. Five enemy units eliminated with no friendly casualties."}}
</div>
</div>

- **Requires a Base:** A nuke can only be launched from a region containing one of your Bases. The Base remains after launch.
- **Must jump at least once:** A nuke must cross over at least one occupied intermediate region. It cannot fire into an adjacent hex.
- **Isotopes:** Before firing, place at least 1 isotope from your supply into the target region. You may place multiple — each adds +1 to nuke strength beyond the {nowrap|base of 2.}
- **Strength:** Starts at 2 (nuke token + 1 isotope minimum). Add +1 per additional isotope placed in the target. Add +1 per friendly Base passed over en route.
- **Movement:** Same jump rules as artillery. Direction changes at your own Airborne or Bases. Can jump over enemy Infantry only — cannot jump over enemy Artillery, Airborne, or Bases. Biohazards are treated as empty and cannot be jumped.
- **Legal targets:** Any region except an empty water region — including empty regions, biohazards, and your own units.
- **Enemy targets:** Your nuke strength must strictly exceed the defender's strength to target an enemy-occupied region.
- **Blast effect (immediate):** Target region → Biohazard permanently. All units on the target region and all units in the 6 surrounding regions are {nowrap|destroyed immediately} — including your own. The surrounding regions do not change biome.
- **No hostage capture.** A nuke only destroys.

### Bases — Full Rules

- A Base forms **immediately** when a 4th token joins a region — mid-turn during Phase 2.
- **Maximum 9 units.** Voluntarily moving your own platoon into a full Base is illegal. If an opponent returns a hostage to your full Base, the Meltdown rule applies.
- **Isotope conversion:** Each time *you* add units to your own Base, you may immediately convert 1 unit into an isotope. Triggers once per event — two separate moves adding to bases in one turn means two conversion opportunities. Does not trigger when an opponent returns a token to your Base.
- Bases provide **+1 combat strength** to your platoons passing through or over them en route to combat. Units starting their move *from within* a Base do not {nowrap|receive this bonus.}
- A Base cannot move, but **any number of units may leave** — including all of them, leaving the {nowrap|region empty.}

### Cities — Full Rules

- Cities act as Bases **for movement purposes only** regardless of unit count — Infantry can pass through freely, Artillery and Nukes can change direction when passing over, and Airborne can slingshot from them.
- With **fewer than 4 units**: no combat adjacency bonus.
- With **4 or more units**: a real Base is present, providing all normal {nowrap|Base combat bonuses.}
- The pass-through combat bonus (+1 for platoons moving through or over) does not apply to units beginning their move from within that city.

</div>

<div class="section pb">
<div class="eyebrow">Advanced Mechanic</div>

## Meltdown

A Meltdown occurs when a hostage token is returned to a region already at its maximum capacity of 9 units. This is a legal and intentional offensive tactic.

<div class="meltdown-box">
<div class="box-title">☢ Meltdown Effect — Immediate</div>

**Target hex:** Converted to Biohazard immediately. All units on the target hex are {nowrap|destroyed immediately.}

**Surrounding hexes:** Completely unaffected — units in the 6 surrounding regions are not destroyed and those hexes do not change biome.

This is the key distinction from a Nuke, which destroys units in all {nowrap|surrounding hexes too.}
</div>

- Triggered during **Phase 1** (Return Hostages), not during Phase 2.
- The destruction is **immediate** — not delayed to Phase 3.
- The return that triggers a Meltdown still counts as one of your 1–3 returns — you still **earn a move** from it.
- All units on the target hex are {nowrap|destroyed immediately.}

</div>

<div class="section pb">
<div class="eyebrow">Resolving Battles</div>

## Combat

A platoon may only move into an enemy-occupied region if it can win. You must have **strictly greater strength** than the defender — a tie is not sufficient to attack.

### Calculating Strength

{{include:strength-grid.html}}

- The surrounding bonus for the attacker is calculated relative to the **target region's 6 adjacent hexes**.
- If the attacker wins, all defending units in the target region are **destroyed and removed from the game** by default. The attacker occupies the region.

### Capturing Hostages

Instead of destroying enemy units, you may capture them as hostages — adding to your supply and extending your opponent's time in the game (while {nowrap|extending your own).}

- For each point of **excess strength** (beyond what was needed to win), you may capture one of the defender's units instead of destroying it.
- To capture one enemy unit, you must **sacrifice one of your own units** — from the attacking platoon or from an adjacent region that contributed {nowrap|support strength.}
- The **attacker chooses** which specific enemy units to capture versus destroy.
- You may capture from 0 up to your total excess strength — entirely your choice.

<div class="box">
<div class="box-title">✦ Example</div>

Attacker strength 5 vs defender strength 2 — 3 points of excess. The attacker may capture up to 3 of the defender's units, sacrificing one of their own per capture. They choose to capture 2 (sacrificing 2 of their own) and destroy 1 — judging those hostages worth the losses.
</div>
</div>

<div class="section pb">
<div class="eyebrow">The Battlefield</div>

## Biomes

Each region belongs to one of seven biome types. Terrain restrictions apply based on the **{nowrap|platoon type the tokens become}** — not how they arrived. A region with 3 tokens in water is Airborne, which has no water restriction — always evaluate the {nowrap|token count.}

{{include:biome-grid.html}}

{{include:terrain-table.html}}

<div class="box teal">
<div class="box-title">✦ "Needs Support to Pass" — What This Means</div>

A platoon can transit through a restricted terrain region only if **your own Airborne or a Base is already stationed there**. The restriction still applies — but their presence guarantees the total token count will be high enough at end of turn to avoid destruction. The biome remains restricted; the support unit {nowrap|simply ensures a safe count.}
</div>
</div>

</div><!-- /content -->

{{include:ref-page.html}}

{{include:appendix.html}}
