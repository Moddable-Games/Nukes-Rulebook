---
title: "Dice Chess"
slug: "dice-chess"
board: "8×8"
players: "2"
parent: "moddable-chess"
order: 17
win: "Checkmate"
special: "Die roll constrains which piece type must move."
---

## Dice Chess

Before each move, roll two dice. The numbers determine which piece types you may move. Randomness meets strategy.


{{svg:dice-chess-board.svg "Dice Chess — starting position"}}

### Setup

**Board:** Standard 8×8.

**Setup:** Standard chess starting position. Two standard dice required.

**FEN:** `rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1`

### Rules

- Before each move, the player rolls two dice. Numbers correspond to piece types: 1 = Pawn, 2 = Knight, 3 = Bishop, 4 = Rook, 5 = Queen, 6 = King.
- The player may move either piece type indicated by the two dice.
- Rolling doubles (same number on both dice) grants a free choice — move any piece.
- Castling is only allowed on a roll of 4 (Rook), 6 (King), or doubles.
- En passant is only possible on a roll of 1 (Pawn) or doubles.
- If a player cannot make a legal move with either rolled piece type, the turn is lost (passed).
- When in check, the player must still roll — if neither rolled piece type can resolve the check, the turn is lost. If check persists and the King is captured, the game ends.

### Win Condition

Checkmate, or capture of the opponent's King (if check cannot be answered due to dice).

### Strategy

Develop all piece types early so you have legal moves regardless of the roll. Knights (2) and Bishops (3) cover the most frequent useful results. Keep your King safe — the random element means surprise attacks are harder to repel. Pawn-only positions are fragile because you may roll high numbers with no legal move.

### Attribution

Ancient origins (11th–14th century Europe, earlier roots in India/Burma). Modern codification by Anne Sunnucks, *The Encyclopaedia of Chess*, 1970. Public domain.
