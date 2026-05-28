---
title: "Dark Chess"
slug: "dark-chess"
board: "8×8"
players: "2"
parent: "moddable-chess"
order: 17
win: "Capture opponent king"
special: "Total fog — only see squares occupied by your own pieces."
---

## Dark Chess

The most restrictive fog variant. Each player can ONLY see squares occupied by their own pieces — not squares they attack. Chess becomes a game of memory, deduction, and blind aggression.


{{svg:dark-chess-board.svg "Dark Chess — starting position"}}

### Setup

**Board:** Standard 8×8, but each player's view is severely limited.

**Setup:** Standard chess starting position.

**FEN:** `rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1`

### Rules

**Visibility:**
- You can ONLY see squares occupied by your own pieces.
- All other squares are invisible — you cannot see enemy pieces or empty squares.
- When you move a piece, you discover what is on the destination square only upon arrival.

**Key differences from Fog of War:**
- In Fog of War, you see all squares your pieces can legally move to. In Dark Chess, you see ONLY the squares your pieces physically occupy.
- No check announcements. You are never told your King is in danger.
- King capture wins the game — there is no checkmate.
- Moving into check is "legal" since you cannot know you're in check.
- If you attempt a move to an occupied square you cannot see, the move either captures (if enemy) or is revealed as illegal (if friendly).

### Win Condition

Capture the opponent's King.

### Strategy

Information is almost nonexistent. You must remember where enemy pieces were last seen (when you occupied adjacent squares). Spreading pieces out provides more visibility but weakens coordination. Knights are excellent scouts since they land on squares far from their origin. Advancing pawns reveals enemy positions through collision. The centre is fought over blindly.

### Attribution

Modern variant. Distinguished from Fog of War by its stricter visibility rules. Public domain.
