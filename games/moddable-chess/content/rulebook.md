---
title: "Moddable Chess — Complete Variant Library"
version: "0.1.0"
slug: "moddable-chess"
players: "2–6"
duration: "10–120 min"
age: "10+"
tagline: "Every chess variant, one engine"
type: "platform"
status: "alpha"
updated: "2026-05-23"
published: false
---

<div class="section"><div class="eyebrow"><span class="eyebrow-badge">Variant 1</span><span class="eyebrow-line"></span></div>

## Regular Chess {#regular}

The baseline. Standard FIDE chess on an 8×8 board. Included as the foundation from which all variants diverge.

**Board:** 8×8, 64 squares alternating light/dark.

**Pieces (per side):** 1 King, 1 Queen, 2 Rooks, 2 Bishops, 2 Knights, 8 Pawns.

**Setup:** White on ranks 1–2, Black on ranks 7–8. Back rank (from a-file): Rook, Knight, Bishop, Queen, King, Bishop, Knight, Rook. Pawns fill the second rank.

**Win condition:** Checkmate the opponent's King, or opponent resigns. Draws by stalemate, threefold repetition, fifty-move rule, or insufficient material.

**Special rules:** Castling (kingside/queenside), en passant capture, pawn promotion on the eighth rank.

</div>

<div class="section"><div class="eyebrow"><span class="eyebrow-badge">Variant 2</span><span class="eyebrow-line"></span></div>

## XiangQi — Chinese Chess {#xiangqi}

One of the oldest and most-played chess variants in the world. Over a billion players, primarily in China, Vietnam, and diaspora communities. The game predates Western chess and diverged from the same Indian ancestor (Chaturanga) around the 7th century.

**Board:** 9×10 grid of intersections (pieces sit on points, not squares). A horizontal "river" divides the board between ranks 5 and 6. Each side has a 3×3 "palace" in the centre of the back three ranks.

**Pieces (per side):**

| Piece | Qty | Movement |
|-------|-----|----------|
| General (將/帥) | 1 | One step orthogonally, confined to the palace |
| Advisor (士/仕) | 2 | One step diagonally, confined to the palace |
| Elephant (象/相) | 2 | Exactly two steps diagonally; cannot cross the river; blocked if the intermediate point is occupied |
| Horse (馬/傌) | 2 | One step orthogonal + one step diagonal outward (like a knight but blockable at the first step) |
| Chariot (車/俥) | 2 | Slides any distance orthogonally (identical to a rook) |
| Cannon (砲/炮) | 2 | Moves like a chariot; captures by jumping over exactly one intervening piece (the "screen") |
| Soldier (兵/卒) | 5 | One step forward only; after crossing the river, may also move one step sideways |

**Key differences from Western chess:**
- **No diagonal sliding** for any piece except within the palace (Advisors).
- **Generals cannot face each other** on the same file with no intervening piece (the "flying general" rule).
- **Elephants cannot cross the river** — they are defensive pieces only.
- **Horses can be blocked** — if the orthogonal step is occupied, the horse cannot move in that direction.
- **Cannons** are the most distinctive piece: they move freely but capture only by jumping over a screen.

**Win condition:** Checkmate or stalemate the opponent's General. (Unlike Western chess, stalemate is a LOSS for the stalemated player.)

**Attribution:** Traditional Chinese game. Formal rules standardized by the Chinese XiangQi Association. Public domain.

</div>

<div class="section"><div class="eyebrow"><span class="eyebrow-badge">Variant 3</span><span class="eyebrow-line"></span></div>

## Capablanca Chess {#capablanca}

Invented by World Champion José Raúl Capablanca in the 1920s to address what he saw as the "draw death" of standard chess. A larger board with two new compound pieces creates richer tactical possibilities.

**Board:** 10×8 (ten files, eight ranks).

**Pieces (per side):** Standard 16 pieces plus:
- **Archbishop** (♗+♞) — combines Bishop and Knight movement. Placed between the Queen's Knight and Queen's Bishop.
- **Chancellor** (♖+♞) — combines Rook and Knight movement. Placed between the King's Knight and King's Bishop.

**Setup (from a-file):** Rook, Knight, Archbishop, Bishop, Queen, King, Bishop, Chancellor, Knight, Rook. Pawns on the second rank (10 pawns per side).

**Rules:** Identical to standard chess with these additions:
- Castling moves the King three squares toward the Rook (to accommodate the wider board).
- Pawns may promote to Archbishop or Chancellor in addition to standard pieces.
- No en passant differences — same rules apply.

**Win condition:** Checkmate, same as standard chess.

**Attribution:** José Raúl Capablanca, c. 1920. Public domain.

</div>

<div class="section"><div class="eyebrow"><span class="eyebrow-badge">Variant 4</span><span class="eyebrow-line"></span></div>

## Hexagonal Chess — Glinski {#hexagonal}

The most popular hexagonal chess variant. Invented by Władysław Gliński in 1936, it adapts chess to a hexagonal grid where pieces have six primary directions instead of four orthogonal + four diagonal.

**Board:** 91 hexagonal cells arranged in a hexagonal shape (11 files of varying length). Three cell colours instead of two.

**Pieces (per side):** 1 King, 1 Queen, 3 Bishops, 2 Rooks, 2 Knights, 9 Pawns.

**Movement adaptations:**
- **Orthogonal** = along hex edges (6 directions). Rooks slide along these.
- **Diagonal** = through hex vertices (6 directions). Bishops slide along these. Each bishop stays on one of three cell colours permanently.
- **King** moves one step in any of the 12 directions.
- **Queen** slides in all 12 directions.
- **Knight** leaps to the nearest cell not reachable by a single King move — effectively two steps along one axis then one step at a 60° angle.
- **Pawns** advance straight forward (toward opponent's back rank) and capture one step diagonally forward. No double-step or en passant in the original rules.

**Win condition:** Checkmate, same as standard chess.

**Key differences:**
- Three bishops per side (one per cell colour) instead of two.
- Nine pawns per side instead of eight.
- No castling.
- Promotion occurs on any cell of the opponent's back edge.

**Attribution:** Władysław Gliński, 1936. Public domain.

</div>

<div class="section"><div class="eyebrow"><span class="eyebrow-badge">Variant 5</span><span class="eyebrow-line"></span></div>

## Alice Chess {#alice}

A mind-bending variant using two standard boards. After each move, the moved piece transfers to the corresponding square on the other board. Creates unique tactical puzzles where pieces phase between dimensions.

**Boards:** Two standard 8×8 boards, labelled A and B. Board A starts with the normal chess setup; Board B starts empty.

**Rules:**
1. A piece on Board A makes a legal move on Board A.
2. After completing the move, the piece transfers to the same square on Board B.
3. The destination square on Board B must be empty for the transfer to occur.
4. On subsequent turns, a piece on Board B makes its move on Board B, then transfers back to Board A (same vacancy requirement).
5. A piece may only move if the corresponding destination square on the other board is vacant.

**Captures:** A piece captures normally on its current board, then transfers to the other board.

**Check:** A King is in check if an enemy piece on either board could capture it (accounting for the transfer rule).

**Win condition:** Checkmate, accounting for the two-board geometry.

**Key implications:**
- Pieces constantly phase between boards, making long-term planning exceptionally difficult.
- A piece that just moved is "safe" from most attacks because it's now on the other board.
- Blocking a check is harder because the blocking piece will transfer away after moving.

**Attribution:** V.R. Parton, 1953. Public domain.

</div>

<div class="section"><div class="eyebrow"><span class="eyebrow-badge">Variant 6</span><span class="eyebrow-line"></span></div>

## Fog of War Chess {#fog-of-war}

A hidden-information variant where each player can only see squares that their pieces can legally move to or attack. All other squares are obscured. Transforms chess from a perfect-information game into one of reconnaissance and deduction.

**Board:** Standard 8×8, but each player's view is limited.

**Visibility rules:**
- You can see any square that at least one of your pieces could legally move to or capture on.
- You can always see squares occupied by your own pieces.
- Enemy pieces on squares you cannot see are invisible to you.
- Empty squares you cannot see appear as fog (undifferentiated).

**Key rule changes:**
- **No check announcements.** You are not told when your King is in check. If you fail to notice and don't resolve it, the King can be captured.
- **King capture wins.** The game ends immediately when a King is captured — there is no checkmate, only capture.
- **Illegal moves into check are legal** — since you may not know you're in check. You simply lose if the opponent captures your King.
- **Castling and en passant** follow normal rules but are only possible when you have visibility of the relevant squares.

**Win condition:** Capture the opponent's King.

**Strategy implications:**
- Scouts (Knights, Bishops) become critical for revealing enemy positions.
- The centre becomes more important for maintaining broad visibility.
- Gambits to sacrifice material for information are viable.
- Endgames play very differently when you can't see the opponent's King position.

**Attribution:** Jens Bæk Nielsen and Torben Osted, 1989. Popularised on Chess.com. Public domain rules.

</div>

<div class="section"><div class="eyebrow"><span class="eyebrow-badge">Variant 7</span><span class="eyebrow-line"></span></div>

## 4-Player Chess {#4-player}

The de facto standard for multiplayer chess. Four armies on a cross-shaped board. Played as free-for-all or 2v2 teams.

**Board:** Cross-shaped — a standard 8×8 centre with 3×8 extensions on each side (total 160 squares). Each extension is a player's home territory.

**Players:** 4 (Red, Blue, Yellow, Green). Seated at the four extensions.

**Pieces:** Standard chess set per player (King, Queen, 2 Rooks, 2 Bishops, 2 Knights, 8 Pawns) deployed in the home extension.

**Turn order:** Clockwise. Red → Blue → Yellow → Green → Red...

**Free-for-all rules:**
- When a player is checkmated, their pieces become "dead" (grey) — they remain on the board as obstacles but cannot move or capture.
- The last player with a living King wins.
- Points are awarded for captures: Pawn = 1, Knight/Bishop = 3, Rook = 5, Queen = 9, Checkmate = 20.

**Team rules (2v2):**
- Opposite players are partners (Red+Yellow vs Blue+Green).
- When one partner is checkmated, the game continues with the remaining partner.
- Team wins when both opponents are checkmated.
- Partners may not capture each other's pieces.

**Key differences from standard chess:**
- No castling in most rulesets.
- Pawns promote on the far edge of the board (opposite side from start).
- Diplomacy and temporary alliances are part of free-for-all strategy.

**Attribution:** Popularised by Chess.com (2017). Historical multiplayer chess variants date to the 1700s. Public domain.

</div>

<div class="section"><div class="eyebrow"><span class="eyebrow-badge">Variant 8</span><span class="eyebrow-line"></span></div>

## Courier Chess {#courier}

A medieval large-board variant documented since 1202, predating the modern Queen and Bishop moves. One of the oldest recorded chess variants in Europe.

**Board:** 12×8 (96 squares).

**Pieces (per side, from a-file):** Rook, Knight, Elephant, Courier, Sage, King, General, Courier, Elephant, Knight, Rook, Rook. 12 Pawns on the second rank.

| Piece | Movement |
|-------|----------|
| King | One step any direction (as standard) |
| General | One step diagonally only (precursor to Queen — very weak) |
| Courier | Slides diagonally any distance (modern Bishop) |
| Sage (Schleich) | One step in any direction (same as King, but not royal) |
| Elephant (Alfil) | Exactly two steps diagonally, jumping over the intermediate square |
| Rook | Slides orthogonally (as standard) |
| Knight | L-shape jump (as standard) |
| Pawn | One step forward, captures diagonally. No double-step. Promotes to General only. |

**Win condition:** Checkmate or stalemate (stalemate = win for the side delivering it in medieval rules).

**Historical note:** The Courier was the first piece to move like a modern Bishop — this game introduced unlimited diagonal sliding to European chess centuries before it was adopted into the standard game.

**Attribution:** First documented 1202 (Wirnt von Gravenberg). Public domain.

</div>

<div class="section"><div class="eyebrow"><span class="eyebrow-badge">Variant 9</span><span class="eyebrow-line"></span></div>

## Omega Chess {#omega}

A modern 10×10 variant with four extra corner squares and two new pieces. Designed to be fully backwards-compatible with standard chess (the 8×8 centre plays identically).

**Board:** 10×10 grid plus four "wizard squares" — one at each corner outside the main grid (total 104 squares).

**New pieces:**
- **Champion** — Leaps exactly 1 or 2 squares orthogonally, or exactly 2 squares diagonally. Cannot be blocked. Combines aspects of King and Knight.
- **Wizard** — Leaps to any square a camel would (3+1 L-shape) or a ferz would (one step diagonal). Starts on the corner wizard squares.

**Setup:** Standard pieces on ranks 1–2 of the 10×10 board with Champions flanking the Rooks and Wizards on the corner squares. 10 Pawns per side.

**Rules:** Same as standard chess with additions:
- Castling moves King three squares toward Rook.
- Pawns may double-step from rank 2 or rank 3.
- Wizards may re-enter the corner squares.
- Promotion: any piece including Champion or Wizard.

**Win condition:** Checkmate.

**Attribution:** Daniel MacDonald, 1992. Patented (expired). Rules are public domain.

</div>

<div class="section"><div class="eyebrow"><span class="eyebrow-badge">Variant 10</span><span class="eyebrow-line"></span></div>

## Grand Chess {#grand}

A 10×10 variant that adds the Archbishop and Chancellor without changing any existing piece rules. Considered one of the cleanest large-board variants — no special rules, just a bigger stage.

**Board:** 10×10 (100 squares).

**Pieces (per side):** 1 King, 1 Queen, 1 Archbishop, 1 Chancellor, 2 Rooks, 2 Bishops, 2 Knights, 10 Pawns.
- **Archbishop** (♗+♞) — Bishop + Knight compound.
- **Chancellor** (♖+♞) — Rook + Knight compound.

**Setup:** Pawns on rank 3. Back two ranks arranged: empty corners, pieces spread across ranks 1–2 with King and Queen central.

**Key rules:**
- **No castling.** The wider board makes it unnecessary.
- **Pawn promotion:** Pawns reaching rank 8 or 9 MAY promote. Pawns reaching rank 10 MUST promote. Promotion to any captured piece only — you cannot promote if all pieces of that type are on the board.
- **En passant** works normally.

**Win condition:** Checkmate.

**Attribution:** Christian Freeling, 1984. Public domain.

</div>

<div class="section"><div class="eyebrow"><span class="eyebrow-badge">Variant 11</span><span class="eyebrow-line"></span></div>

## 3-Board Chess {#3-board}

Three standard chessboards placed side by side. Pieces can move across board boundaries along shared edges, creating a spatial challenge where threats come from unexpected directions.

**Boards:** Three 8×8 boards arranged in a row (left, centre, right). Edges where boards meet are "open" — pieces can cross freely.

**Players:** 3 (one per board, or free-for-all with each player starting on their board).

**Setup:** Each player sets up a standard chess army on their home board (ranks 1–2 from their perspective).

**Movement across boards:**
- A piece moving off the right edge of Board 1 continues onto the left edge of Board 2 (same rank).
- Sliding pieces (Rook, Bishop, Queen) continue their slide across board boundaries without stopping.
- Knights can jump to squares on adjacent boards.

**Win condition:** Last player with a living King wins. A checkmated player's pieces are removed.

**Key strategy:** Board-edge squares that seem safe in standard chess become vulnerable to cross-board attacks. The centre board is contested territory.

**Attribution:** Traditional multiplayer variant. Numerous implementations. Public domain.

</div>

<div class="section"><div class="eyebrow"><span class="eyebrow-badge">Variant 12</span><span class="eyebrow-line"></span></div>

## 4-Board Chess {#4-board}

Four standard boards in a 2×2 grid. Pieces transfer between boards at shared edges. Team or free-for-all with spatial complexity that rewards coordination.

**Boards:** Four 8×8 boards in a 2×2 arrangement. Adjacent edges are open for piece movement.

**Players:** 4 (one per board corner). Teams: top-left + bottom-right vs top-right + bottom-left.

**Setup:** Standard chess setup per player on their nearest board corner.

**Movement:** Same as 3-Board Chess — pieces cross open edges freely. Diagonal sliding pieces can cross corner junctions where four boards meet.

**Win condition (team):** Checkmate both opponents. A checkmated player's pieces remain as obstacles.

**Win condition (free-for-all):** Last King standing.

**Attribution:** Traditional variant. Public domain.

</div>

<div class="section"><div class="eyebrow"><span class="eyebrow-badge">Reference</span><span class="eyebrow-line"></span></div>

## Dungeon Chess {#dungeon-chess}

Our original variant — a standalone game with its own complete rulebook.

<div class="highlight">
<div class="box-title">Separate Rulebook</div>

Dungeon Chess has grown beyond a simple chess variant into a full asymmetric strategy game with XP drafting, four unique species, modular dungeon boards, and campaign play. It has its own dedicated rulebook with complete rules, unit cards, and map documentation.

**[Read the Dungeon Chess Rulebook →](../dungeon-chess/)**
</div>

</div>
