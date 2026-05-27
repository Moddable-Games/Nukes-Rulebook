---
title: "Extinction Chess"
slug: "extinction"
board: "8×8"
players: "2"
parent: "moddable-chess"
order: 20
win: "Capture all of one piece type"
special: "Lose all your knights, bishops, rooks, or pawns — you lose the game."
---

## Extinction Chess

Lose when any piece type is fully eliminated. Every piece type becomes a critical resource.


{{svg:extinction-board.svg "Extinction Chess — starting position"}}

### Setup

**Board:** Standard 8×8.

**Setup:** Standard chess setup.

**FEN:** `rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1`

### Rules

Standard chess rules apply with one additional loss condition:
- If all pieces of any ONE type are eliminated, that player loses immediately.
- Piece types tracked: Kings (1), Queens (1), Rooks (2), Bishops (2), Knights (2), Pawns (8).
- Promotion can "rescue" an extinct piece type by promoting a pawn to that piece.
- The King is just another tracked type — losing your King loses the game (same as standard chess), but so does losing both Bishops, both Knights, both Rooks, your Queen, or all eight Pawns.

### Win Condition

Eliminate any one type of your opponent's pieces entirely.

### Strategy

Pieces with only one copy (King, Queen) are high-value targets — losing either one ends the game. Trading your last Knight for their last Knight is fine, but trading your last Bishop for their Knight when they still have both Bishops is dangerous. Promotion becomes a defensive tool to recover extinct types.

### Attribution

R. Wayne Schmittberger, 1985. Public domain.
