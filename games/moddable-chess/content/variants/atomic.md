---
title: "Atomic Chess"
slug: "atomic"
board: "8×8"
players: "2"
parent: "moddable-chess"
order: 8
---

## Atomic Chess

Captures explode, destroying all non-pawn pieces in a one-square radius around the capture square. Including the capturing piece.


{{svg:atomic-board.svg "Atomic Chess — starting position"}}

**Board:** Standard 8×8.

**Setup:** Standard chess setup.

**Rules:**
- When a piece captures, an "explosion" occurs on the capture square.
- The explosion destroys: the capturing piece, the captured piece, and ALL non-pawn pieces on squares adjacent (horizontally, vertically, and diagonally) to the capture square.
- Pawns survive explosions (they are not destroyed by adjacent captures, only by direct capture).
- A King CAN be destroyed by an adjacent explosion — this counts as a win.
- You may NOT make a capture that would explode your own King.
- Because Kings can be destroyed by explosions, Kings can stand adjacent to each other (since capturing the enemy King would explode your own).
- No castling if the King or Rook has been exploded.

**Win condition:** Destroy the opponent's King (by exploding it or, rarely, checkmate).

**Key strategy:** Material sacrifices that trigger chain explosions near the enemy King are the primary tactic. Early Queen sacrifices are common if they explode near the King. Pawn structure matters because pawns are explosion-proof shields.

**Attribution:** Traditional variant. Popularised on Lichess and Chess.com. Public domain.
