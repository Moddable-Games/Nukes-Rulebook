---
title: "Grand Chess"
slug: "grand"
board: "10×10"
players: "2"
parent: "moddable-chess"
order: 18
win: "Checkmate"
special: "Same new pieces as Capablanca, bigger board, pawns start on rank 3."
---

## Grand Chess

A 10×10 variant that adds the Archbishop and Chancellor without changing any existing piece rules. Considered one of the cleanest large-board variants — no special rules, just a bigger stage.

### Setup

**Board:** 10×10 (100 squares).

{{svg:grand-board.svg "Grand Chess — starting position (10×10)"}}

### Pieces

**Pieces (per side):** 1 King, 1 Queen, 1 Archbishop, 1 Chancellor, 2 Rooks, 2 Bishops, 2 Knights, 10 Pawns.
- **Archbishop** (♗+♞) — Bishop + Knight compound.
- **Chancellor** (♖+♞) — Rook + Knight compound.

**Setup:** Pawns on rank 3. Back two ranks arranged: empty corners, pieces spread across ranks 1–2 with King and Queen central.

**FEN:** `r8r/1nbqkcbn1/pppppppppp/10/10/10/10/PPPPPPPPPP/1NBQKCBN1/R8R w - - 0 1`

### Rules

- **No castling.** The wider board makes it unnecessary.
- **Pawn promotion:** Pawns reaching rank 8 or 9 MAY promote. Pawns reaching rank 10 MUST promote. Promotion to any captured piece only — you cannot promote if all pieces of that type are on the board.
- **En passant** works normally.
- All other standard chess rules apply.

### Win Condition

Checkmate.

### Strategy

With no castling, King safety comes from piece coordination rather than a pawn shelter. The Archbishop excels in closed positions, the Chancellor on open files. The promotion restriction (captured pieces only) means trading pieces has promotion implications — don't trade your last Knight if you might need one back via promotion.

### Attribution

Christian Freeling, 1984. Public domain.
