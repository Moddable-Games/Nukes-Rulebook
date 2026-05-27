---
title: "Weak!"
slug: "weak"
board: "8×8"
players: "2"
parent: "moddable-chess"
order: 54
win: "Checkmate"
special: "Weakest piece type with a legal move must move first."
---

## Weak!

On each turn, you MUST move the weakest piece type that has a legal move. Pawns first, then Knights, Bishops, Rooks, Queen, King — in order of weakness.


{{svg:weak-board.svg "Weak! — starting position"}}

### Setup

**Board:** Standard 8×8.

**Setup:** Standard chess starting position.

**FEN:** `rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1`

### Rules

- Standard chess movement applies, with a move obligation:
- On each turn, a player MUST move the weakest piece type that has at least one legal move.
- Piece strength hierarchy (weakest to strongest): Pawn < Knight < Bishop < Rook < Queen < King.
- If any Pawn has a legal move, you must move a Pawn. Only if no Pawn can move may you move a Knight. And so on up the hierarchy.
- The King can only be moved if no other piece type has a legal move.
- When in check, the weakest piece type that can resolve the check must be used.
- Castling is only possible when the King is the weakest available piece (extremely rare in practice).

### Win Condition

Checkmate.

### Strategy

The opening is entirely pawn play since pawns must move first. Once pawns are blocked or captured, knights activate, then bishops, and so on. Lock your opponent's pawns to force them into using pieces prematurely. Pawn structure is paramount. Sacrifice pawns strategically to "unlock" stronger pieces earlier. Endgames are wild — losing your last pawn frees your pieces entirely.

### Attribution

Ralph Betza, 1970s–80s. Published in *NOST-algia* newsletter. Public domain.
