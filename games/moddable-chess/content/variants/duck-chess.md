---
title: "Duck Chess"
slug: "duck-chess"
board: "8×8"
players: "2"
parent: "moddable-chess"
order: 21
win: "Capture opponent king"
special: "After each move, place the duck (blocker) on any empty square."
---

## Duck Chess

After each move, place a shared rubber duck on any empty square. The duck blocks all pieces. Capture the King to win (no check/checkmate).


{{svg:duck-chess-board.svg "Duck Chess — starting position"}}

### Setup

**Board:** Standard 8×8 plus one shared "duck" piece (a blocker).

**Setup:** Standard chess setup. No duck on the board initially.

**FEN:** `rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1`

### Rules

- Each turn has two parts: (1) make a normal chess move, then (2) place the duck on any empty square.
- The duck blocks all movement — no piece can move through or onto the duck's square.
- There is no check or checkmate. Kings can move into "attacked" squares freely.
- The game ends when a King is captured.
- The duck must be placed every turn — you cannot skip the duck placement.
- On the first move of the game, the duck is placed after White's first move.

### Win Condition

Capture the opponent's King.

### Strategy

The duck adds a blocking/defensive dimension to every turn. You can use your duck placement to block enemy attacks on your King, or to cut off the enemy King's escape routes before threatening capture. Planning must account for where the duck will be placed.

### Attribution

Dr Tim Paulden, 2016. Public domain.
