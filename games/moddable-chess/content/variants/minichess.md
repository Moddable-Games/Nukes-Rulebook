---
title: "Minichess"
slug: "minichess"
board: "5×5"
players: "2"
parent: "moddable-chess"
order: 36
---

## Minichess

Gardner's 5×5 chess. All standard piece types on a tiny board. Fast, tactical, and surprisingly deep for its size.


{{svg:minichess-board.svg "Minichess — starting position (5×5)"}}

### Setup

**Board:** 5×5 (five files, five ranks).

**Setup (FEN):** `kqbnr/ppppp/5/PPPPP/RNBQK`

Black (rank 5): King, Queen, Bishop, Knight, Rook (+ 5 pawns on rank 4).
White (rank 1): Rook, Knight, Bishop, Queen, King (+ 5 pawns on rank 2).

### Rules

- Standard chess movement for all pieces.
- Pawns move one square forward only (no double-step).
- No en passant.
- No castling (King and Rook are adjacent — no room to castle).
- Pawns promote on the far rank to Queen, Rook, Bishop, or Knight.

### Win Condition

Checkmate, same as standard chess.

### Strategy

The tiny board means pieces are immediately in contact. Rooks are less powerful (short files) while Knights are relatively stronger (they can reach most of the board in 1-2 moves). Games are decided quickly — material advantages of even a single pawn are usually decisive. The King is very exposed with so few squares to hide. Queen trades simplify the position enormously.

### Attribution

Martin Gardner, 1969 (Scientific American). Public domain.
