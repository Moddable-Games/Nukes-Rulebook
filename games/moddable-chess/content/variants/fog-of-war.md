---
title: "Fog of War Chess"
slug: "fog-of-war"
board: "8×8"
players: "2"
parent: "moddable-chess"
order: 27
win: "Capture opponent king"
special: "You only see squares your pieces can move to. No check warnings."
---

## Fog of War Chess

A hidden-information variant where each player can only see squares that their pieces can legally move to or attack. Transforms chess from a perfect-information game into one of reconnaissance and deduction.


{{svg:fog-of-war-board.svg "Fog of War — starting position"}}

### Setup

**Board:** Standard 8×8, but each player's view is limited.

**FEN:** `rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1`

### Rules

**Visibility:**
- You can see any square that at least one of your pieces could legally move to or capture on.
- You can always see squares occupied by your own pieces.
- Enemy pieces on squares you cannot see are invisible to you.
- Empty squares you cannot see appear as fog (undifferentiated).

**Key differences from standard chess:**
- **No check announcements.** You are not told when your King is in check.
- **King capture wins.** The game ends immediately when a King is captured — there is no checkmate, only capture.
- **Illegal moves into check are legal** — since you may not know you're in check. You simply lose if the opponent captures your King.
- **Castling and en passant** follow normal rules but are only possible when you have visibility of the relevant squares.

### Win Condition

Capture the opponent's King.

### Strategy

Scouts (Knights, Bishops) become critical for revealing enemy positions. The centre is more important for maintaining broad visibility. Gambits to sacrifice material for information are viable. Endgames play very differently when you can't see the opponent's King position.

### Attribution

Jens Bæk Nielsen and Torben Osted, 1989. Popularised on Chess.com. Public domain rules.
