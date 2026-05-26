---
title: "Fischer Random (Chess960)"
slug: "fischer-random"
key: "chess960"
board: "8×8"
players: "2"
parent: "moddable-chess"
order: 6
win: "Checkmate"
special: "Back rank pieces randomised (960 positions). Castling rules adapted."
---

## Fischer Random (Chess960)

960 possible starting positions. The back-rank pieces are shuffled randomly with one constraint: the King must be between the two Rooks.


{{svg:fischer-random-board.svg "Fischer Random — one possible starting position"}}

### Setup

**Board:** Standard 8×8.

**Setup:** Back-rank pieces are shuffled randomly for each game, with three constraints:
1. The King must be somewhere between the two Rooks (to preserve castling rights).
2. Bishops must be on opposite-coloured squares.
3. Both players mirror the same random position (White's arrangement = Black's arrangement).

Pawns are placed normally on the second rank.

**FEN:** Randomised each game. One of 960 possible positions. Example: `rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1` (this happens to be the standard position — one of the 960).

### Rules

Identical to standard chess, including castling. Castling follows a generalised rule: the King and Rook end up on the same squares they would in standard castling (King on c1/g1, Rook on d1/f1), regardless of where they started.

### Win Condition

Checkmate (identical to standard chess).

### Strategy

Opening book knowledge is neutralised. Every game requires original thinking from move one. Piece development principles (control the centre, develop knights before bishops, castle early) still apply but the specific moves change every game.

### Attribution

Bobby Fischer, 1996. Public domain.
