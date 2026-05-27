---
title: "Benedict Chess"
slug: "benedict"
board: "8×8"
players: "2"
parent: "moddable-chess"
order: 7
win: "Convert opponent king"
special: "No captures. Attacked enemies convert to your colour instead."
---

## Benedict Chess

There are no captures. When a piece moves to a square from which it attacks enemy pieces, those pieces convert to the mover's colour. Win by converting the opponent's King.


{{svg:benedict-board.svg "Benedict Chess — starting position"}}

### Setup

**Board:** Standard 8×8.

**Setup:** Standard chess starting position.

**FEN:** `rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1`

### Rules

- Pieces move as in standard chess but there are NO captures.
- When a piece moves to a new square, every enemy piece it now attacks (could move to, if it were a capture) immediately converts to the moving player's colour.
- Multiple enemy pieces can convert from a single move.
- Pawns convert enemies on the diagonals they attack, not the square in front.
- The King can be converted — this ends the game immediately.
- Since there are no captures, the total number of pieces on the board never decreases.
- No castling (the King is too vulnerable to conversion near the centre).
- No en passant (there are no captures).

### Win Condition

Convert the opponent's King to your colour (by moving a piece that attacks the King's square).

### Strategy

Long-range pieces (Queen, Bishops, Rooks) are enormously powerful because they can convert many pieces at once. The game snowballs — converting pieces gives you more attackers. Protecting your King from being in ANY attack line is critical. Early moves are decisive; one careless move can trigger chain conversions.

### Attribution

C. S. Elliott, 1971. Named after Benedict Arnold. Public domain rules.
