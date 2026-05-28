---
title: "Cylinder Chess"
slug: "cylinder"
board: "8×8"
players: "2"
parent: "moddable-chess"
order: 16
win: "Checkmate"
special: "Files wrap — the a-file connects to the h-file. Pieces slide around the cylinder."
---

## Cylinder Chess

The board wraps horizontally, forming a cylinder. The a-file is adjacent to the h-file.


{{svg:cylinder-board.svg "Cylinder Chess — starting position"}}

### Setup

**Board:** Standard 8×8 (files wrap).

**Setup:** Standard chess setup.

**FEN:** `rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1`

### Rules

- The a-file connects to the h-file. Moving left from a1 reaches h1; moving right from h1 reaches a1.
- Rooks can slide across the wrap (e.g. Ra1 can move to h1 via the wrap, or slide all the way around).
- Bishops slide diagonally and can wrap around the board, reaching squares that would be inaccessible on a flat board.
- Queens combine rook and bishop wrapping movement.
- Pawns can capture diagonally across the wrap (e.g. a pawn on a5 can capture on h6).
- Knights jump normally — the wrap does not affect knight movement beyond providing connectivity between a/h files.
- Castling follows standard rules (no wrapping castling).

### Win Condition

Checkmate the opponent's King.

### Strategy

Bishops become much more powerful on a cylinder — they can reach every square of their colour. Rook files are no longer safe flanks since attacks can come from behind via the wrap. Flank pawns gain additional capture options. The lack of board edges eliminates many standard endgame techniques.

### Attribution

Traditional variant with roots in 19th-century chess composition. Public domain.
