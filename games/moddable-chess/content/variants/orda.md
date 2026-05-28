---
title: "Orda Chess"
slug: "orda"
board: "8×8"
players: "2"
parent: "moddable-chess"
order: 48
win: "Checkmate"
special: "Asymmetric: White plays standard. Black commands the Horde — divergent movers that move one way and capture another."
---

## Orda Chess

An asymmetric variant where White plays standard chess and Black commands the Mongol Horde — pieces that move differently from how they capture.


{{svg:orda-board.svg "Orda Chess — starting position"}}

### Setup

**Board:** Standard 8×8.

**White (standard):** Standard chess setup.

**Black (Horde):** Pawns on rank 7. Back rank: Lancer, Archer, Kheshig, Khan, Yurt, Kheshig, Archer, Lancer.

**FEN:** `lhaykahl/8/pppppppp/8/8/PPPPPPPP/8/RNBQKBNR w KQ - 0 1`

### Rules

**Yurt (y)** — Moves one square diagonally. Captures one square orthogonally. (Replaces the Queen.)

**Lancer (l)** — Moves like a Rook (slides orthogonally). Captures like a Knight (L-shaped jump). Cannot slide to capture.

**Archer (h)** — Moves like a Bishop (slides diagonally). Captures like a Knight (L-shaped jump). Cannot slide to capture.

**Khan (k)** — Moves and captures as a standard King.

**Kheshig** — Standard Knight movement and capture.

- White can castle. Black cannot (the Khan starts on e8).
- Black's Lancers and Archers have split movement: they slide freely for non-capturing moves but must jump (like a Knight) to capture.
- Standard pawns for both sides.

### Win Condition

Checkmate the opponent's King/Khan.

### Strategy

Black's Lancers and Archers are powerful positional pieces (full rook/bishop mobility) but limited attackers (knight-range capture only). White must exploit the Horde's short capture range while avoiding their positional dominance. Black should use Lancers for long-range control and coordinate Archers for knight-distance attacks.

### Attribution

Designed by Couch Tomato (2020). Popularised on Pychess. Public domain.
