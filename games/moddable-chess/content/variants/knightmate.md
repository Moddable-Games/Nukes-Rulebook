---
title: "Knightmate"
slug: "knightmate"
board: "8×8"
players: "2"
parent: "moddable-chess"
order: 21
win: "Checkmate the royal Knight"
special: "Knight and King swap roles. The Knight is royal; Kings move as knights."
---

## Knightmate

The Knight becomes the royal piece. The King becomes a commoner that moves like a knight. A complete role reversal that transforms strategy.


{{svg:knightmate-board.svg "Knightmate — starting position"}}

### Setup

**Board:** Standard 8×8.

**Setup (FEN):** `rkbqnbkr/pppppppp/8/8/8/8/PPPPPPPP/RKBQNBKR`

### Pieces

**Pieces:** Standard chess pieces, but with swapped roles:
- **Knight** — the royal piece. Must be protected from checkmate. Sits on e1/e8 (where the King normally starts).
- **King** — moves like a knight (L-shape). Not royal — can be captured freely. Starts on b1/g1 and b8/g8.

### Rules

All standard chess rules apply, except:
- The Knight is subject to check and checkmate (it is royal).
- The King is an ordinary piece that moves in knight-jumps.
- Castling works with the royal Knight and the Rooks.
- Pawns may promote to King (the non-royal piece) but not to Knight (the royal piece).

### Win Condition

Checkmate the opponent's royal Knight.

### Strategy

The royal Knight is far more mobile than a standard King, which makes it harder to trap but also means it can overextend. Kings (moving as knights) are powerful attacking pieces. Queen + King combinations create devastating fork threats.

### Attribution

Bruce Zimov, 1972. Public domain.
