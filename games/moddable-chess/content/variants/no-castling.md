---
title: "No Castling Chess"
slug: "no-castling"
board: "8×8"
players: "2"
parent: "moddable-chess"
order: 38
win: "Checkmate"
special: "Standard chess with castling removed. Kings must develop naturally."
---

## No Castling Chess

Standard chess with castling disabled. Endorsed by Vladimir Kramnik as a potential improvement to competitive chess, reducing the dominance of memorised opening theory.


{{svg:no-castling-board.svg "No Castling — starting position"}}

### Setup

**Board:** Standard 8×8.

**Setup:** Standard chess setup.

**FEN:** `rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1`

### Rules

Identical to standard chess except:
- Castling is not allowed for either player, ever.
- All other rules (en passant, promotion, etc.) are unchanged.

### Win Condition

Checkmate.

### Strategy

Without castling, King safety requires more creative solutions. Players must decide early whether to keep the King in the centre (risky but saves tempi) or manually walk it to safety (safe but slow). Open files toward the King are more dangerous because there's no quick escape. Rook activation is delayed since Rooks can't be connected via castling.

### Attribution

Proposed by Vladimir Kramnik, 2019. Tested at Chess.com events. Public domain.
