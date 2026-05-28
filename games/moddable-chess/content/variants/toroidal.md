---
title: "Toroidal Chess"
slug: "toroidal"
board: "8×8"
players: "2"
parent: "moddable-chess"
order: 61
win: "Checkmate"
special: "Board wraps in both directions (files and ranks) forming a torus. No edges exist."
---

## Toroidal Chess

The board wraps in both directions — files connect left-to-right AND ranks connect top-to-bottom, forming a torus. There are no edges.


{{svg:toroidal-board.svg "Toroidal Chess — starting position"}}

### Setup

**Board:** Standard 8×8 (wraps both axes).

**Setup:** Standard chess setup.

**FEN:** `rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w - - 0 1`

### Rules

- The a-file connects to the h-file (horizontal wrap).
- Rank 1 connects to rank 8 (vertical wrap).
- Rooks can slide in any direction and wrap around indefinitely until blocked.
- Bishops slide diagonally and wrap — a bishop can return to its starting square by sliding far enough.
- Queens combine both wrapping movements.
- Knights jump normally but the connectivity means all squares are reachable.
- No castling (no meaningful concept of king safety with wrapping ranks).
- No en passant.
- Pawns move "forward" relative to their colour (White toward rank 8, wrapping to rank 1; Black toward rank 1, wrapping to rank 8).

### Win Condition

Checkmate the opponent's King.

### Strategy

On a torus, there are no safe corners or edges — every square is equally central. Bishops can reach every square of their colour (not just 7 diagonals but infinitely wrapping ones). Rooks threaten ranks and files that circle back, making them nearly impossible to evade. The opening concept of "King safety" is meaningless — positional play dominates.

### Attribution

Mathematical chess variant based on toroidal geometry. Public domain.
