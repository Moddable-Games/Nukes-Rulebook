---
title: "Breakthrough"
slug: "breakthrough"
board: "7×7"
players: "2"
parent: "moddable-chess"
order: 9
win: "Reach opposite rank"
special: "Pawns only — first to reach the far side wins. No captures backward."
---

## Breakthrough

Pawns only. First to reach the far rank wins. A minimalist abstract strategy game.

### Setup

**Board:** 7×7 grid (49 squares).

**FEN:** `ppppppp/ppppppp/7/7/7/PPPPPPP/PPPPPPP w - - 0 1`

{{svg:breakthrough-board.svg "Breakthrough — starting position (7×7)"}}

### Pieces

**Pieces:** Each player starts with 14 pawns filling their first two ranks.

### Movement

- Pawns move one square forward (straight ahead).
- Pawns capture one square diagonally forward (same as standard chess pawns).
- Pawns may also MOVE (not just capture) one square diagonally forward. This is the key difference from chess pawns.
- No double-step. No en passant. No promotion mechanics.

### Win Condition

First player to reach the opponent's back rank (rank 7 for White, rank 1 for Black) wins. If a player has no legal moves, they lose.

### Strategy

Breakthrough is deceptively deep despite its simple rules. Connected groups of pawns protect each other as they advance. Sacrificing pawns to create breakthroughs (gaps in the enemy line) is the primary tactic. The game has been solved for small boards but remains strategically rich at 7×7 and above.

### Attribution

Dan Troyka, 2000. Public domain.
