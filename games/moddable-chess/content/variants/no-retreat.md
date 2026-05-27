---
title: "No Retreat"
slug: "no-retreat"
board: "8×8"
players: "2"
parent: "moddable-chess"
order: 39
win: "Checkmate"
special: "Pieces cannot move backward toward their own starting rank."
---

## No Retreat

No piece may move backward. Every advance is permanent, every overextension punished.


{{svg:no-retreat-board.svg "No Retreat — starting position"}}

### Setup

**Board:** Standard 8×8.

**Setup:** Standard chess starting position.

**FEN:** `rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1`

### Rules

- Standard chess movement applies, with one restriction:
- No piece may move to a rank closer to its own starting position. For White, no piece may move to a lower-numbered rank than it currently occupies. For Black, no piece may move to a higher-numbered rank.
- Sideways moves (same rank) are always legal.
- Forward moves (toward opponent's back rank) are always legal.
- Backward moves (toward own back rank) are illegal.
- The King is NOT exempt — it also cannot retreat.
- Castling is legal (the King moves sideways, not backward).
- Pawns are unaffected in practice (they already cannot move backward).

### Win Condition

Checkmate.

### Strategy

Every piece advance is permanent — commit carefully. Knights lose half their mobility since they cannot retreat from advanced posts. Rooks on open files dominate since they can still move sideways freely. Avoid overextending pieces since they become trapped on advanced ranks. Endgames are especially dangerous because Kings cannot flee backward.

### Attribution

Traditional variant, 20th century. Public domain.
