---
title: "Legan Chess"
slug: "legan"
board: "8×8"
players: "2"
parent: "moddable-chess"
order: 36
win: "Checkmate"
special: "Berolina pawns (move diagonal, capture straight). King and Queen swap starting squares."
---

## Legan Chess

Combines Berolina pawn movement with swapped King/Queen positions. No castling or en passant.


{{svg:legan-board.svg "Legan Chess — starting position"}}

### Setup

**Board:** Standard 8×8.

**Setup:** Like standard chess but the King starts on d1/d8 and the Queen on e1/e8 (swapped positions).

**FEN:** `rnbkqbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBKQBNR w - - 0 1`

### Rules

- Pawns move diagonally forward (one or two squares from their starting rank) and capture straight forward — Berolina movement.
- No castling.
- No en passant.
- All other pieces move and capture as standard chess.
- Promotion on the 8th rank works as normal.

### Win Condition

Checkmate the opponent's King.

### Strategy

The King on d-file is more exposed than in standard chess since the Queen is no longer shielding it. Berolina pawns create unusual pawn structures — they cannot protect each other the way normal pawns can. Central control requires different thinking since pawns threaten diagonal squares for movement but straight squares for capture.

### Attribution

Named after Vladimír Legan. Public domain.
