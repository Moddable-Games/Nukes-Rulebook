---
title: "Capablanca Chess"
slug: "capablanca"
board: "10×8"
players: "2"
parent: "moddable-chess"
order: 17
win: "Checkmate"
special: "Two extra pieces: Archbishop (B+N) and Chancellor (R+N). Wider board."
---

## Capablanca Chess

Invented by World Champion José Raúl Capablanca in the 1920s to address what he saw as the "draw death" of standard chess. A larger board with two new compound pieces creates richer tactical possibilities.

### Setup

**Board:** 10×8 (ten files, eight ranks).

**FEN:** `rnabqkbcnr/pppppppppp/10/10/10/10/PPPPPPPPPP/RNABQKBCNR w KQkq - 0 1`

{{svg:capablanca-board.svg "Capablanca Chess — starting position (10×8)"}}

### Pieces

**Pieces (per side):** Standard 16 pieces plus:
- **Archbishop** (♗+♞) — combines Bishop and Knight movement. Placed between the Queen's Knight and Queen's Bishop.
- **Chancellor** (♖+♞) — combines Rook and Knight movement. Placed between the King's Knight and King's Bishop.

**Setup (from a-file):** Rook, Knight, Archbishop, Bishop, Queen, King, Bishop, Chancellor, Knight, Rook. Pawns on the second rank (10 pawns per side).

### Rules

Identical to standard chess with these additions:
- Castling moves the King three squares toward the Rook (to accommodate the wider board).
- Pawns may promote to Archbishop or Chancellor in addition to standard pieces.
- No en passant differences — same rules apply.

### Win Condition

Checkmate, same as standard chess.

### Strategy

The wider board and compound pieces create more open positions. The Archbishop dominates closed diagonals while the Chancellor controls open files with knight-fork threats. Pawn structure is more flexible with 10 files — flank play becomes viable alongside central control.

### Attribution

José Raúl Capablanca, c. 1920. Public domain.
