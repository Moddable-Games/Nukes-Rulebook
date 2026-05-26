---
title: "Rifle Chess"
slug: "rifle"
board: "8×8"
players: "2"
parent: "moddable-chess"
order: 7
---

## Rifle Chess

Capturing pieces stay on their original square — they "shoot" the target from a distance.


{{svg:rifle-board.svg "Rifle Chess — starting position"}}

### Setup

**Board:** Standard 8×8.

**Setup:** Standard chess setup.

**FEN:** `rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1`

### Rules

All standard chess rules apply except:
- When a piece captures, it does NOT move to the captured piece's square. Instead, the captured piece is removed and the capturing piece stays where it is.
- En passant: the capturing pawn stays on its current square; the enemy pawn is removed.
- Castling: unchanged (no capture involved).
- Pawn promotion: a pawn can only promote by moving to the last rank WITHOUT capturing. If it captures a piece on the last rank, it stays on its current rank (since it doesn't move to the capture square).

### Win Condition

Checkmate (adjusted for rifle mechanics — a piece threatens the King from its current position without needing to occupy the King's square).

### Strategy

Pieces become much harder to dislodge since capturing doesn't occupy their square. Batteries (multiple pieces lined up) are devastating because a front piece can "shoot" without opening the line. The value of centralisation increases enormously.

### Attribution

Traditional variant. Also known as "Stationary Capture Chess." Public domain.
