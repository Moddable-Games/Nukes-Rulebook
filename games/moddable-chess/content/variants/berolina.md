---
title: "Berolina Chess"
slug: "berolina"
board: "8×8"
players: "2"
parent: "moddable-chess"
order: 8
win: "Checkmate"
special: "Pawns move diagonally forward and capture straight forward — the inverse of normal."
---

## Berolina Chess

Pawns are inverted: they advance diagonally and capture straight ahead. Named after Berlin, where it was invented in 1926.


{{svg:berolina-board.svg "Berolina Chess — starting position"}}

### Setup

**Board:** Standard 8×8.

**Setup:** Standard chess setup (pawns use Berolina movement rules).

**FEN:** `rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1`

### Rules

- Pawns move one or two squares diagonally forward (instead of straight forward).
- Pawns capture one square straight forward (instead of diagonally).
- En passant applies to Berolina pawn double-moves.
- Promotion occurs on the 8th rank as normal.
- All other pieces move and capture as standard chess.

### Win Condition

Checkmate the opponent's King.

### Strategy

Berolina pawns control different squares than normal pawns. A pawn on e2 can advance to d3 or f3 (and double-move to c4 or g4), but captures on e3. This makes pawn chains behave very differently — adjacent pawns no longer protect each other. Bishops become relatively weaker since pawns compete for diagonal space.

### Attribution

Invented by Edmund Hebermann in Berlin, 1926. Public domain.
