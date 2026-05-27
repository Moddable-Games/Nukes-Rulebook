---
title: "Omnicide"
slug: "omnicide"
board: "8×8"
players: "2"
parent: "moddable-chess"
order: 40
win: "Lose all pieces"
special: "Lose all your pieces to win. Captures NOT forced (unlike Antichess)."
---

## Omnicide

Lose all your pieces to win — but unlike Antichess, captures are completely optional. You must engineer positions where your opponent WANTS to take your pieces.


{{svg:omnicide-board.svg "Omnicide — starting position"}}

### Setup

**Board:** Standard 8×8.

**Setup:** Standard chess starting position.

**FEN:** `rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1`

### Rules

- All pieces move as in standard chess.
- Captures are NOT forced — this is the key difference from Antichess/Giveaway.
- The King has no royal status — it can be captured like any other piece.
- No check, no checkmate.
- No castling (King has no special status).
- Pawns promote normally.
- First player to have zero pieces on the board wins.

### Win Condition

Lose all your pieces (including King). First player with zero pieces remaining wins.

### Strategy

Since captures are not forced, you cannot simply "feed" pieces to your opponent as in Antichess. You must create positions where capturing your pieces benefits the opponent (or where leaving them alive is worse). Pawns are liabilities — they are hard to get captured without cooperation. Try to create positions where your pieces are en prise AND the opponent gains something by taking them (e.g., clearing a promotion path for their own pawn while taking yours).

### Attribution

Modern variant. Distinct from Antichess by the absence of forced captures. Public domain.
