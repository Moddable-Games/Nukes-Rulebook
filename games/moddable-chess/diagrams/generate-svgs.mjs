import { writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SVG_DIR = resolve(__dirname, 'svg');

const LIGHT = '#f0d9b5';
const DARK = '#b58863';
const SQ = 40;
const MARGIN = 20;
const LABEL_MARGIN = 20;

const UNICODE_PIECES = {
  K: '♔', Q: '♕', R: '♖', B: '♗', N: '♘', P: '♙',
  k: '♚', q: '♛', r: '♜', b: '♝', n: '♞', p: '♟',
  // Custom pieces
  A: '♗̸', a: '♝̸', // Archbishop (bishop+knight) — use bishop with stroke
  C: '♖̸', c: '♜̸', // Chancellor (rook+knight) — use rook with stroke
  M: '♕',  m: '♛',            // Amazon/Maharaja — use queen symbol
  S: '♔',  s: '♚',            // Schleich (courier) — use king symbol variant
};

const PIECE_LABELS = {
  K: '♔', Q: '♕', R: '♖', B: '♗', N: '♘', P: '♙',
  k: '♚', q: '♛', r: '♜', b: '♝', n: '♞', p: '♟',
  A: 'A', a: 'a', C: 'C', c: 'c', M: 'M', m: 'm', S: 'S', s: 's',
};

function parseFEN(fen, rows, cols) {
  const board = [];
  const ranks = fen.split(' ')[0].split('/');
  for (const rank of ranks) {
    const row = [];
    for (const ch of rank) {
      if (/\d/.test(ch)) {
        const num = parseInt(ch === '1' && rank.includes('10') ? '10' : ch);
        for (let i = 0; i < num; i++) row.push(null);
      } else {
        row.push(ch);
      }
    }
    board.push(row);
  }
  return board;
}

function fenToBoard(fenStr, rows, cols) {
  const positionPart = fenStr.split(' ')[0];
  const board = [];
  const ranks = positionPart.split('/');
  for (const rank of ranks) {
    const row = [];
    let i = 0;
    while (i < rank.length) {
      const ch = rank[i];
      if (ch >= '1' && ch <= '9') {
        const next = rank[i + 1];
        if (next >= '0' && next <= '9') {
          const num = parseInt(ch + next);
          for (let j = 0; j < num; j++) row.push(null);
          i += 2;
        } else {
          const num = parseInt(ch);
          for (let j = 0; j < num; j++) row.push(null);
          i++;
        }
      } else {
        row.push(ch);
        i++;
      }
    }
    while (row.length < cols) row.push(null);
    board.push(row);
  }
  return board;
}

function pieceToUnicode(piece) {
  const isWhite = piece === piece.toUpperCase();
  const base = piece.toUpperCase();
  if (base === 'K') return isWhite ? '♔' : '♚';
  if (base === 'Q') return isWhite ? '♕' : '♛';
  if (base === 'R') return isWhite ? '♖' : '♜';
  if (base === 'B') return isWhite ? '♗' : '♝';
  if (base === 'N') return isWhite ? '♘' : '♞';
  if (base === 'P') return isWhite ? '♙' : '♟';
  if (base === 'M') return 'M';  // Amazon/Maharaja — letter (no Unicode equivalent)
  if (base === 'A') return 'A';  // Archbishop — letter
  if (base === 'C') return 'C';  // Chancellor — letter
  if (base === 'S') return 'S';  // Schleich — letter
  return piece;
}

function isWhitePiece(piece) {
  return piece === piece.toUpperCase();
}

function generateSVG(title, fen, rows, cols) {
  const board = fenToBoard(fen, rows, cols);
  const boardW = cols * SQ;
  const boardH = rows * SQ;
  const totalW = boardW + LABEL_MARGIN + MARGIN;
  const totalH = boardH + LABEL_MARGIN + MARGIN;
  const ox = LABEL_MARGIN;
  const oy = MARGIN;

  let svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${totalW} ${totalH}" width="${totalW}" height="${totalH}">\n`;
  svg += `  <title>${title}</title>\n\n`;

  // Board squares
  svg += `  <g id="board">\n`;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const isLight = (r + c) % 2 === 0;
      const x = ox + c * SQ;
      const y = oy + r * SQ;
      svg += `    <rect x="${x}" y="${y}" width="${SQ}" height="${SQ}" fill="${isLight ? LIGHT : DARK}"/>\n`;
    }
  }
  svg += `  </g>\n\n`;

  // Pieces
  svg += `  <g font-family="sans-serif" font-size="22" text-anchor="middle" dominant-baseline="central">\n`;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const piece = board[r] && board[r][c];
      if (!piece) continue;
      const x = ox + c * SQ + SQ / 2;
      const y = oy + r * SQ + SQ / 2;
      const white = isWhitePiece(piece);
      const fill = white ? '#222' : '#f0f0f0';
      const symbol = pieceToUnicode(piece);
      // For letter-based custom pieces, use slightly different styling
      if (symbol.length === 1 && /[A-Za-z]/.test(symbol)) {
        svg += `    <text x="${x}" y="${y}" fill="${fill}" font-weight="bold" font-size="18">${symbol.toUpperCase()}</text>\n`;
      } else {
        svg += `    <text x="${x}" y="${y}" fill="${fill}">${symbol}</text>\n`;
      }
    }
  }
  svg += `  </g>\n\n`;

  // File labels
  const files = 'abcdefghijklmn'.slice(0, cols);
  svg += `  <g font-family="sans-serif" font-size="11" text-anchor="middle" fill="#555">\n`;
  for (let c = 0; c < cols; c++) {
    const x = ox + c * SQ + SQ / 2;
    const y = oy + boardH + 15;
    svg += `    <text x="${x}" y="${y}">${files[c]}</text>\n`;
  }
  svg += `  </g>\n\n`;

  // Rank labels
  svg += `  <g font-family="sans-serif" font-size="11" text-anchor="middle" fill="#555">\n`;
  for (let r = 0; r < rows; r++) {
    const x = 10;
    const y = oy + r * SQ + SQ / 2 + 2;
    svg += `    <text x="${x}" y="${y}">${rows - r}</text>\n`;
  }
  svg += `  </g>\n`;

  svg += `</svg>`;
  return svg;
}

// All variants with their FEN, board size, and slug
const STANDARD_FEN = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';

const variants = [
  { slug: 'standard', title: 'Standard Chess — starting position', fen: STANDARD_FEN, rows: 8, cols: 8 },
  { slug: 'king-of-the-hill', title: 'King of the Hill — starting position', fen: STANDARD_FEN, rows: 8, cols: 8 },
  { slug: 'three-check', title: 'Three-Check — starting position', fen: STANDARD_FEN, rows: 8, cols: 8 },
  { slug: 'antichess', title: 'Antichess — starting position', fen: STANDARD_FEN, rows: 8, cols: 8 },
  { slug: 'racing-kings', title: 'Racing Kings — starting position', fen: '8/8/8/8/8/8/krbnNBRK/qrbnNBRQ w - - 0 1', rows: 8, cols: 8 },
  { slug: 'fischer-random', title: 'Fischer Random — one possible starting position', fen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1', rows: 8, cols: 8 },
  { slug: 'rifle', title: 'Rifle Chess — starting position', fen: STANDARD_FEN, rows: 8, cols: 8 },
  { slug: 'atomic', title: 'Atomic Chess — starting position', fen: STANDARD_FEN, rows: 8, cols: 8 },
  { slug: 'marseillais', title: 'Marseillais Chess — starting position', fen: STANDARD_FEN, rows: 8, cols: 8 },
  { slug: 'duck-chess', title: 'Duck Chess — starting position', fen: STANDARD_FEN, rows: 8, cols: 8 },
  { slug: 'fog-of-war', title: 'Fog of War — starting position', fen: STANDARD_FEN, rows: 8, cols: 8 },
  { slug: 'no-castling', title: 'No Castling — starting position', fen: STANDARD_FEN, rows: 8, cols: 8 },
  { slug: 'torpedo', title: 'Torpedo Chess — starting position', fen: STANDARD_FEN, rows: 8, cols: 8 },
  { slug: 'horde', title: 'Horde Chess — starting position (8×8)', fen: 'rnbqkbnr/pppppppp/8/1PP2PP1/PPPPPPPP/PPPPPPPP/PPPPPPPP/PPPPPPPP w kq - 0 1', rows: 8, cols: 8 },
  { slug: 'extinction', title: 'Extinction Chess — starting position', fen: STANDARD_FEN, rows: 8, cols: 8 },
  { slug: 'maharaja', title: 'Maharaja & Sepoys — starting position (8×8)', fen: 'rnbqkbnr/pppppppp/8/8/8/8/8/4M3 w kq - 0 1', rows: 8, cols: 8 },
  { slug: 'knightmate', title: 'Knightmate — starting position (8×8)', fen: 'rkbqnbkr/pppppppp/8/8/8/8/PPPPPPPP/RKBQNBKR w KQkq - 0 1', rows: 8, cols: 8 },
  { slug: 'monster-chess', title: 'Monster Chess — starting position (8×8)', fen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/R3K2R w KQkq - 0 1', rows: 8, cols: 8 },
  { slug: 'progressive', title: 'Progressive Chess — starting position', fen: STANDARD_FEN, rows: 8, cols: 8 },
  { slug: 'chigorin', title: 'Chigorin Chess — starting position (8×8)', fen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNNQKNNR w KQkq - 0 1', rows: 8, cols: 8 },
  { slug: 'almost-chess', title: 'Almost Chess — starting position (8×8)', fen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBCKBNR w KQkq - 0 1', rows: 8, cols: 8 },
  { slug: 'amazon-chess', title: 'Amazon Chess — starting position (8×8)', fen: 'rnbmkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBMKBNR w KQkq - 0 1', rows: 8, cols: 8 },
  { slug: 'upside-down', title: 'Upside-Down Chess — starting position (8×8)', fen: 'RNBQKBNR/PPPPPPPP/8/8/8/8/pppppppp/rnbqkbnr w KQkq - 0 1', rows: 8, cols: 8 },
  { slug: 'single-check', title: 'Single-Check — starting position', fen: STANDARD_FEN, rows: 8, cols: 8 },
  { slug: 'five-check', title: 'Five-Check — starting position', fen: STANDARD_FEN, rows: 8, cols: 8 },
  { slug: 'giveaway', title: 'Giveaway — starting position', fen: STANDARD_FEN, rows: 8, cols: 8 },
  { slug: 'suicide-chess', title: 'Suicide Chess — starting position', fen: STANDARD_FEN, rows: 8, cols: 8 },
  { slug: 'stalemate-wins', title: 'Stalemate Wins — starting position', fen: STANDARD_FEN, rows: 8, cols: 8 },
  { slug: 'codrus', title: 'Codrus — starting position', fen: STANDARD_FEN, rows: 8, cols: 8 },
  { slug: 'makpong', title: 'Makpong — starting position', fen: STANDARD_FEN, rows: 8, cols: 8 },
  { slug: 'los-alamos', title: 'Los Alamos Chess — starting position (6×6)', fen: 'rnqknr/pppppp/6/6/PPPPPP/RNQKNR w - - 0 1', rows: 6, cols: 6 },
  { slug: 'minichess', title: 'Minichess — starting position (5×5)', fen: 'kqbnr/ppppp/5/PPPPP/RNBQK w - - 0 1', rows: 5, cols: 5 },
  { slug: 'endgame-chess', title: 'Endgame Chess — starting position (8×8)', fen: '4k3/pppppppp/8/8/8/8/PPPPPPPP/4K3 w - - 0 1', rows: 8, cols: 8 },
  { slug: 'peasants-revolt', title: "Peasants' Revolt — starting position (8×8)", fen: '2n1k1n1/pppppppp/8/8/8/8/PPPPPPPP/4K3 w - - 0 1', rows: 8, cols: 8 },
  { slug: 'pawns-only', title: 'Pawns Only — starting position (8×8)', fen: '4k3/pppppppp/8/8/8/8/PPPPPPPP/4K3 w - - 0 1', rows: 8, cols: 8 },
];

// Skip variants that already have hand-crafted SVGs
const existing = ['breakthrough', 'capablanca', 'courier', 'grand'];

let generated = 0;
for (const v of variants) {
  if (existing.includes(v.slug)) continue;
  const svg = generateSVG(v.title, v.fen, v.rows, v.cols);
  const outPath = resolve(SVG_DIR, `${v.slug}-board.svg`);
  writeFileSync(outPath, svg);
  generated++;
}

console.log(`Generated ${generated} SVG board diagrams.`);
