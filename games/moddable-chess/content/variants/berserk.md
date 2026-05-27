---
title: "Berserk Chess"
slug: "berserk"
board: "8×8"
players: "2"
parent: "moddable-chess"
order: 8
win: "Checkmate"
special: "Delivering check grants one bonus move with a different piece."
---

## Berserk Chess

When you deliver check, you immediately get a bonus move with a different piece. Aggressive play is rewarded with extra tempo.


{{svg:berserk-board.svg "Berserk Chess — starting position"}}

### Setup

**Board:** Standard 8×8.

**Setup:** Standard chess starting position.

**FEN:** `rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1`

### Rules

- Standard chess movement applies.
- When a player delivers check, they immediately get one bonus move.
- The bonus move must be made by a DIFFERENT piece than the one that gave check.
- The bonus move may NOT give check (no cascading bonus moves).
- If the bonus move would deliver check, it is illegal — choose a different bonus move.
- If no legal non-checking bonus move exists, the bonus is forfeited.
- Castling, en passant, and promotion follow standard rules.

### Win Condition

Checkmate (standard).

### Strategy

Discovered checks are extremely powerful — the discovering piece delivers check, and the bonus move can develop or reposition another piece. Queen and Bishop batteries that create check threats dominate. Piece development should prioritise creating check potential. Being passive is very dangerous since the opponent gains extra tempo from every check.

### Attribution

Modern variant, popularised on online chess platforms (2000s). Public domain rules.
