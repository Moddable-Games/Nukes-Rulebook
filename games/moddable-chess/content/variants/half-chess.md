---
title: "Half Chess"
slug: "half-chess"
board: "8×4"
players: "2"
parent: "moddable-chess"
order: 31
win: "Checkmate"
special: "4-rank board, armies start adjacent. Immediate contact."
---

## Half Chess

Standard pieces on a 4-rank board. Armies start adjacent with no gap — contact is immediate and violent.


{{svg:half-chess-board.svg "Half Chess — starting position (8×4)"}}

### Setup

**Board:** 8 files × 4 ranks.

**Setup (FEN):** `rnbqkbnr/pppppppp/PPPPPPPP/RNBQKBNR`

- Rank 4 (Black back rank): r n b q k b n r
- Rank 3 (Black pawns): p p p p p p p p
- Rank 2 (White pawns): P P P P P P P P
- Rank 1 (White back rank): R N B Q K B N R

### Rules

- Standard piece movement applies, constrained by the 4-rank board.
- Pawns move one square forward only (no double-step — there is no room).
- No en passant.
- Castling is allowed (King and Rook are in standard positions).
- Pawns promote on the far rank (rank 4 for White, rank 1 for Black).
- Since armies start adjacent, nearly every piece can capture or be captured on move 1.

### Win Condition

Checkmate.

### Strategy

There is no development phase — the game is tactical from move 1. Every pawn trade immediately opens lines to the back rank. The King is extremely vulnerable with only 4 ranks of space. Knights are limited by the board's depth (few useful squares to jump to). Rooks dominate once files open. Games resolve quickly.

### Attribution

Traditional mini-chess variant. Public domain.
