---
title: "Standard Chess"
slug: "standard"
board: "8×8"
players: "2"
parent: "moddable-chess"
order: 1
win: "Checkmate"
special: "Standard FIDE rules"
---

## Standard Chess

Classic FIDE rules. The foundation from which all variants diverge.


{{svg:standard-board.svg "Standard Chess — starting position"}}

### Setup

**Board:** 8×8, 64 squares alternating light and dark. The board is oriented so each player has a light square in their near-right corner.

**FEN:** `rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1`

### Pieces

**Pieces (per side):** 1 King, 1 Queen, 2 Rooks, 2 Bishops, 2 Knights, 8 Pawns.

**Starting position (from a-file):** Rook, Knight, Bishop, Queen, King, Bishop, Knight, Rook on the back rank. Eight Pawns fill the second rank. White occupies ranks 1–2, Black occupies ranks 7–8. The Queen starts on her own colour (White Queen on d1, Black Queen on d8).

### Rules

**Turns:** White moves first. Players alternate one move per turn.

**Piece movement:**

- **King** — moves one square in any direction (horizontally, vertically, or diagonally). Cannot move into a square attacked by an opponent's piece.
- **Queen** — moves any number of squares in any straight line (horizontal, vertical, or diagonal). Cannot jump over pieces.
- **Rook** — moves any number of squares horizontally or vertically. Cannot jump over pieces.
- **Bishop** — moves any number of squares diagonally. Cannot jump over pieces. Each Bishop is confined to one square colour for the entire game.
- **Knight** — moves in an L-shape: two squares in one direction plus one square perpendicular (or vice versa). The only piece that can jump over other pieces.
- **Pawn** — moves one square forward (toward the opponent's back rank). On its first move, a Pawn may advance two squares forward. Pawns capture one square diagonally forward. Pawns cannot move backward.

**Captures:** A piece is captured by moving your piece to the square it occupies. The captured piece is removed from the board. All pieces capture the same way they move, except Pawns (which move forward but capture diagonally).

**Check:** When a King is under direct attack by an opponent's piece, it is in check. A player in check must immediately resolve it by: moving the King to a safe square, capturing the attacking piece, or blocking the attack by interposing a piece. A player may never make a move that leaves their own King in check.

**Special moves:**

- **Castling** — the King moves two squares toward a Rook, and that Rook jumps to the square the King crossed. Requirements: neither the King nor that Rook has previously moved; no pieces between them; the King is not in check; the King does not pass through or land on an attacked square. Each player may castle kingside (short) or queenside (long) once per game.
- **En passant** — if a Pawn advances two squares from its starting rank and lands beside an opponent's Pawn, the opponent may capture it as if it had only moved one square. This capture must be made immediately on the very next move or the right is lost.
- **Pawn promotion** — when a Pawn reaches the opponent's back rank (rank 8 for White, rank 1 for Black), it must immediately be promoted to a Queen, Rook, Bishop, or Knight of the same colour. The player chooses the piece. There is no limit to the number of promoted pieces.

### Win Condition

**Checkmate:** The game is won when a player's King is in check and there is no legal move to escape. The player delivering checkmate wins.

**Other ways a game ends:**

- **Resignation** — a player concedes defeat.
- **Stalemate** — the player to move has no legal moves and is NOT in check. The game is a draw.
- **Threefold repetition** — the same board position occurs three times (with the same player to move and same castling/en passant rights). Either player may claim a draw.
- **Fifty-move rule** — if 50 consecutive moves pass with no Pawn move and no capture, either player may claim a draw.
- **Insufficient material** — if neither side has enough pieces to deliver checkmate (e.g. King vs King, King+Bishop vs King), the game is a draw.
- **Agreement** — both players agree to a draw.

### Strategy

Control the centre, develop pieces early, castle for King safety, and coordinate piece activity. The opening, middlegame, and endgame each demand different skills — billions of games have been played and the game remains unsolved.

### Attribution

Origins in 6th-century India (Chaturanga). Modern rules standardised by FIDE. Public domain.
