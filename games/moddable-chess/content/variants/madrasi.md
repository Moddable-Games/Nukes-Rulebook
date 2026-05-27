---
title: "Madrasi Chess"
slug: "madrasi"
board: "8×8"
players: "2"
parent: "moddable-chess"
order: 32
win: "Checkmate"
special: "Same-type opposing pieces paralyse each other when they attack."
---

## Madrasi Chess

When a piece is attacked by an opposing piece of the same type, both pieces are paralysed — they cannot move, capture, or give check until the paralysis is broken.


{{svg:madrasi-board.svg "Madrasi Chess — starting position"}}

### Setup

**Board:** Standard 8×8.

**Setup:** Standard chess starting position.

**FEN:** `rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1`

### Rules

- Standard chess movement applies, with the following addition:
- When a piece is attacked by an opposing piece of the same type (e.g., White Knight attacked by Black Knight), BOTH pieces are paralysed.
- Paralysed pieces cannot move, capture, or give check.
- Paralysis requires mutual attack — both pieces must be able to reach each other's square.
- Kings are NOT subject to paralysis (standard Madrasi rules).
- Paralysis is lifted when: (a) a non-paralysed piece captures one of the paralysed pair, or (b) a third piece interposes on the line of mutual attack (for line pieces like Rooks, Bishops, Queens).
- A paralysed piece still occupies its square and blocks movement through it.
- Castling, en passant, and promotion follow standard rules (subject to paralysis).

### Win Condition

Checkmate (paralysed pieces cannot contribute to check or defence).

### Strategy

Use paralysis offensively — freeze your opponent's key pieces by opposing them with your same-type pieces. A single Bishop can neutralise the opponent's Bishop while your other pieces attack freely. Avoid getting YOUR strong pieces paralysed. Knights are especially vulnerable since their paralysis cannot be broken by interposition. Trading one piece type to free another is a key tactical motif.

### Attribution

Abdul Jabbar Karwatkar, 1979. Named after his home city of Madras (now Chennai), India. Public domain rules.
