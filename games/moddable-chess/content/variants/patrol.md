---
title: "Patrol Chess"
slug: "patrol"
board: "8×8"
players: "2"
parent: "moddable-chess"
order: 49
win: "Checkmate"
special: "Pieces can only capture or give check when defended by a friendly piece."
---

## Patrol Chess

A piece may only capture or give check if it is "patrolled" — defended by at least one friendly piece. Isolated pieces are toothless.


{{svg:patrol-board.svg "Patrol Chess — starting position"}}

### Setup

**Board:** Standard 8×8.

**Setup:** Standard chess starting position.

**FEN:** `rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1`

### Rules

- Standard chess movement applies, with the following additions:
- A piece may only CAPTURE if it is patrolled (defended by at least one friendly piece).
- A piece may only give CHECK if it is patrolled.
- Non-capturing, non-checking moves are played normally with no patrol requirement.
- A piece is "patrolled" when at least one other friendly piece defends the square it occupies.
- Checkmate requires the checking piece to be patrolled, AND the King has no escape to an unattacked square (where "attacked" also requires the attacker to be patrolled).
- Castling and en passant follow standard rules (subject to patrol constraints).

### Win Condition

Checkmate (the checking piece must be patrolled).

### Strategy

Piece coordination is everything. Isolated pieces cannot capture or deliver check — they are purely positional. Keep pieces connected and defending each other. Knights near friendly pieces become deadly while isolated Knights are decorative. Development must be compact rather than spread out. A single undefended piece can safely sit in enemy territory since it cannot be captured by an unpatrolled attacker.

### Attribution

Frederik Hendrik von Meyenfeldt, 1975. Public domain rules.
