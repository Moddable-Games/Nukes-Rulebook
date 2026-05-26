---
title: "Marseillais Chess"
slug: "marseillais"
board: "8×8"
players: "2"
parent: "moddable-chess"
order: 9
win: "Checkmate"
special: "Each player makes TWO moves per turn (except White's first turn)."
---

## Marseillais Chess

Two moves per turn. If your first move gives check, your turn ends immediately.


{{svg:marseillais-board.svg "Marseillais Chess — starting position"}}

### Setup

**Board:** Standard 8×8.

**Setup:** Standard chess setup.

**FEN:** `rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1`

### Rules

- Each player makes TWO moves per turn instead of one.
- If your first move delivers check, your turn ends — you do not get a second move.
- If your first move does not give check, you must make a second move (you cannot pass).
- You may move the same piece twice, or two different pieces.
- Castling counts as one move — you may castle then move another piece.

### Win Condition

Checkmate (accounting for the double-move).

### Strategy

The double-move creates devastating tactical combinations. A Knight can reach any square in a single turn. Pins and skewers work differently because the pinned player might be able to move the pinned piece AND deal with the threat in the same turn. Initiative is even more important than in standard chess.

### Attribution

Originated in Marseille, France, early 20th century. Public domain.
