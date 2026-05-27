---
title: "Andernach Chess"
slug: "andernach"
board: "8×8"
players: "2"
parent: "moddable-chess"
order: 4
win: "Checkmate"
special: "Capturing piece changes colour (becomes opponent's). Kings exempt."
---

## Andernach Chess

When a piece captures, it switches sides — the capturing piece becomes the opponent's piece on the captured square. Kings are exempt from colour change.


{{svg:andernach-board.svg "Andernach Chess — starting position"}}

### Setup

**Board:** Standard 8×8.

**Setup:** Standard chess starting position.

**FEN:** `rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1`

### Rules

- All pieces move as in standard chess.
- When a piece captures an enemy piece, the captured piece is removed and the capturing piece changes colour (becomes the opponent's piece).
- Kings are exempt — a King that captures does NOT change colour.
- The converted piece belongs to the opponent starting from their next turn.
- Check and checkmate work normally.
- Castling and en passant follow standard rules.
- Pawns that capture on the promotion rank change colour first, then promote as the new owner's piece.

### Win Condition

Checkmate (standard).

### Strategy

Every capture is double-edged — you remove an enemy piece but hand them the capturer. Material advantages are nearly impossible to build through captures alone. Non-capturing moves (pawn advances, positional manoeuvres) become relatively more valuable. Forks and pins have radically different implications because winning material by capture gifts the capturing piece to the opponent.

### Attribution

Created for a chess composition event in Andernach, Germany, 1993. Public domain rules.
