---
title: "Hoppel-Poppel"
slug: "hoppel-poppel"
board: "8×8"
players: "2"
parent: "moddable-chess"
order: 32
win: "Checkmate"
special: "Knights capture like bishops (sliding diagonal); bishops capture like knights (L-jump)."
---

## Hoppel-Poppel

Knights and Bishops swap their capture methods while retaining their normal movement.


{{svg:hoppel-poppel-board.svg "Hoppel-Poppel — starting position"}}

### Setup

**Board:** Standard 8×8.

**Setup:** Standard chess setup.

**FEN:** `rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1`

### Rules

- Knights move in their standard L-shape but capture by sliding diagonally (like a bishop).
- Bishops slide diagonally as normal but capture by jumping in an L-shape (like a knight).
- Only captures are swapped — non-capturing moves remain standard.
- Rooks, Queens, Kings, and Pawns are unaffected.
- Castling, en passant, and promotion work as normal.

### Win Condition

Checkmate the opponent's King.

### Strategy

Knights become long-range capture threats (they can capture anything on their diagonal) but remain short-range for positioning. Bishops gain the ability to capture past blocking pieces (jumping like knights) but lose their sliding capture lanes. This creates asymmetric tactical patterns where pieces threaten different squares depending on whether they're capturing or moving.

### Attribution

Traditional German variant. The name means "Hippety-Hop" in German. Public domain.
