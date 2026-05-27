---
title: "Grid Chess"
slug: "grid-chess"
board: "8×8"
players: "2"
parent: "moddable-chess"
order: 26
win: "Checkmate"
special: "Moves must cross at least one 2×2 grid line."
---

## Grid Chess

The board is overlaid with a grid dividing it into sixteen 2×2 sections. A move is only legal if the piece crosses at least one grid line.


{{svg:grid-chess-board.svg "Grid Chess — starting position"}}

### Setup

**Board:** Standard 8×8, overlaid with grid lines between files b–c, d–e, f–g and between ranks 2–3, 4–5, 6–7. This creates 16 sections of 2×2 squares each.

**Setup:** Standard chess starting position.

**FEN:** `rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1`

### Rules

- Standard chess movement applies, with one restriction:
- A move is only legal if the piece crosses at least one grid line (moves from one 2×2 section to a different one, or crosses a grid line within its path).
- A piece cannot move to another square within the same 2×2 section unless its path crosses a grid line and returns.
- This means some normally legal moves are illegal (e.g., a King on e1 cannot move to d1 since both are in the same 2×2 box).
- Kings can stand adjacent without giving check if they share the same 2×2 section (since neither can cross a grid line to capture the other).
- Check only exists if the checking piece's attack crosses a grid line.
- Castling, en passant, and promotion follow standard rules (subject to grid-crossing).

### Win Condition

Checkmate (only moves crossing grid lines count as attacks).

### Strategy

Mobility is dramatically reduced. Knights are relatively stronger — they always cross at least one grid line regardless of position. Pieces on the edge of a 2×2 section have more options than those in the centre of a section. The opening is very slow; develop with grid-crossing in mind. Rooks and Bishops can be surprisingly limited when grid lines bisect their diagonals or files.

### Attribution

Walter Stead, 1953. Published in fairy chess circles. Public domain.
