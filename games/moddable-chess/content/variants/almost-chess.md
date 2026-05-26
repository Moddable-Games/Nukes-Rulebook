---
title: "Almost Chess"
slug: "almost-chess"
board: "8×8"
players: "2"
parent: "moddable-chess"
order: 25
win: "Checkmate"
special: "White's Queen is replaced by a Chancellor (Rook + Knight compound)."
---

## Almost Chess

One Queen is replaced by a Chancellor (Rook + Knight compound). "Almost" standard chess — one piece different, but the implications ripple through the entire game.


{{svg:almost-chess-board.svg "Almost Chess — starting position"}}

### Setup

**Board:** Standard 8×8.

**Setup (FEN):** `rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBCKBNR`

White: Rook, Knight, Bishop, Chancellor, King, Bishop, Knight, Rook (+ 8 pawns).
Black: Standard setup (with Queen).

### Pieces

**Pieces:**
- **Chancellor (C)** — combines Rook and Knight movement. Can slide along ranks/files like a Rook OR jump in L-shapes like a Knight. Placed on d1 (where White's Queen normally sits).

### Rules

All standard chess rules apply. The Chancellor replaces White's Queen only. Black retains their standard Queen.

### Win Condition

Checkmate, same as standard chess.

### Strategy

The Chancellor is slightly weaker than a Queen (no diagonal sliding) but has the Knight's forking ability combined with Rook-length reach. White lacks diagonal firepower from d1 and must rely more on Bishops. The Chancellor excels at forks — combining Rook pins with Knight threats. Black's Queen gives them an advantage on open diagonals.

### Attribution

Ralph Betza, 1977. Public domain.
