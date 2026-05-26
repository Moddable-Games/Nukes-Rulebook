---
title: "Antichess"
slug: "antichess"
board: "8×8"
players: "2"
parent: "moddable-chess"
order: 4
win: "Lose all pieces or get stalemated"
special: "Captures are mandatory. First to lose all pieces wins."
---

## Antichess

Captures are mandatory. Lose all your pieces to win. Inverts the entire logic of chess.


{{svg:antichess-board.svg "Antichess — starting position"}}

### Setup

**Board:** Standard 8×8.

**Setup:** Standard chess setup.

**FEN:** `rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1`

### Rules

- If a capture is available, you MUST capture. If multiple captures are available, you may choose which one.
- The King has no royal status — it can be captured like any other piece and there is no check or checkmate.
- No castling.
- Pawns may promote to King (in addition to the usual pieces).
- Stalemate (no legal moves) is a WIN for the stalemated player.

### Win Condition

Lose all your pieces, or be stalemated.

### Strategy

You want to force your opponent to capture your pieces while avoiding being forced to keep yours. Opening theory is highly developed — certain openings force wins within a few moves.

### Attribution

Also known as "Losing Chess," "Giveaway Chess," or "Suicide Chess." Traditional variant, 19th century. Public domain.
