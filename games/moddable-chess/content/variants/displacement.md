---
title: "Displacement Chess"
slug: "displacement"
board: "8×8"
players: "2"
parent: "moddable-chess"
order: 20
win: "Checkmate"
special: "Pieces can swap positions with adjacent friendly pieces as an alternative move."
---

## Displacement Chess

Any piece can swap positions with an adjacent friendly piece instead of making a normal move.


{{svg:displacement-board.svg "Displacement Chess — starting position"}}

### Setup

**Board:** Standard 8×8.

**Setup:** Standard chess setup.

**FEN:** `rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1`

### Rules

- On your turn, instead of a normal move, you may swap any of your pieces with an adjacent friendly piece (horizontally, vertically, or diagonally adjacent).
- The King may not swap into a square where it would be in check.
- A swap counts as your entire move for that turn.
- Normal moves, captures, castling, en passant, and promotion all work as standard chess.
- Swaps are never captures — both pieces must be friendly.

### Win Condition

Checkmate the opponent's King.

### Strategy

Swaps enable rapid piece coordination — a trapped rook can swap with an adjacent pawn to escape. The King can dodge threats by swapping with a defender. Development becomes faster since pieces can be repositioned without spending multiple tempi. Watch for swap-based discovered attacks.

### Attribution

Modern variant. Public domain.
