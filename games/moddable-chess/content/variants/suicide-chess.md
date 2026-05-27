---
title: "Suicide Chess"
slug: "suicide-chess"
board: "8×8"
players: "2"
parent: "moddable-chess"
order: 50
win: "Lose all pieces"
special: "Forced captures like Giveaway, but stalemate is a draw, not a loss."
---

## Suicide Chess

Nearly identical to Giveaway — forced captures, lose all pieces to win — but with one critical difference: stalemate is a draw, not a loss.


{{svg:suicide-chess-board.svg "Suicide Chess — starting position"}}

### Setup

**Board:** Standard 8×8.

**Setup:** Standard chess starting position.

**FEN:** `rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1`
### Rules

- If you can capture, you MUST capture. If multiple captures are available, you choose which one.
- The King is not royal — there is no check or checkmate. The King can be captured like any other piece.
- No castling.
- Pawns promote normally.
- Stalemate = draw (unlike Giveaway where stalemate is a loss).

### Win Condition

Lose all of your pieces (including the King).

### Difference from Giveaway The only rule difference is the stalemate condition. In Giveaway, being stalemated means you lose. In Suicide Chess, stalemate is a draw. This seemingly small change has significant strategic implications — reaching a position where neither side can force their remaining pieces to be captured is a valid defensive

resource.

### Strategy

Similar to Giveaway, but the draw-by-stalemate option adds a defensive layer. If you're losing (i.e., your opponent is losing pieces faster than you), you can aim for a stalemate position. This makes the endgame more complex and gives the "losing" side more fighting chances.

### Attribution

Traditional variant. Public domain.
