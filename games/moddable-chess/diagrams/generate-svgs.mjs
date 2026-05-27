import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SVG_DIR = resolve(__dirname, 'svg');
const PIECES_SVG = readFileSync('/Applications/MAMP/htdocs/MODDABLE/moddable-chess/assets/pieces.svg', 'utf8');

const LIGHT = '#f0d9b5';
const DARK = '#b58863';
const SQ = 40;
const MARGIN = 20;
const LABEL_MARGIN = 20;
const PIECE_PAD = 2;

// Extract symbol definitions from the app's pieces.svg
function extractSymbols() {
  const symbols = {};
  const regex = /<symbol id="piece-([^"]+)"[^>]*>([\s\S]*?)<\/symbol>/g;
  let match;
  while ((match = regex.exec(PIECES_SVG)) !== null) {
    symbols[match[1]] = match[0];
  }
  return symbols;
}

const ALL_SYMBOLS = extractSymbols();

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
          for (let j = 0; j < parseInt(ch + next); j++) row.push(null);
          i += 2;
        } else {
          for (let j = 0; j < parseInt(ch); j++) row.push(null);
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

function generateSVG(title, fen, rows, cols) {
  const board = fenToBoard(fen, rows, cols);
  const boardW = cols * SQ;
  const boardH = rows * SQ;
  const totalW = boardW + LABEL_MARGIN + MARGIN;
  const totalH = boardH + LABEL_MARGIN + MARGIN;
  const ox = LABEL_MARGIN;
  const oy = MARGIN;

  // Collect which piece symbols are used
  const usedPieces = new Set();
  for (const row of board) {
    for (const cell of row) {
      if (cell) usedPieces.add(cell);
    }
  }

  let svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${totalW} ${totalH}" width="${totalW}" height="${totalH}">\n`;
  svg += `  <title>${title}</title>\n\n`;

  // Embed only the piece symbols we need
  svg += `  <defs>\n`;
  for (const piece of usedPieces) {
    if (ALL_SYMBOLS[piece]) {
      svg += `    ${ALL_SYMBOLS[piece]}\n`;
    }
  }
  svg += `  </defs>\n\n`;

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
  svg += `  <g id="pieces">\n`;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const piece = board[r] && board[r][c];
      if (!piece) continue;
      if (!ALL_SYMBOLS[piece]) continue;
      const x = ox + c * SQ + PIECE_PAD;
      const y = oy + r * SQ + PIECE_PAD;
      const size = SQ - PIECE_PAD * 2;
      svg += `    <use href="#piece-${piece}" x="${x}" y="${y}" width="${size}" height="${size}"/>\n`;
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
    const y = oy + r * SQ + SQ / 2 + 4;
    svg += `    <text x="${x}" y="${y}">${rows - r}</text>\n`;
  }
  svg += `  </g>\n`;

  svg += `</svg>`;
  return svg;
}

const STANDARD_FEN = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';

const variants = [
  { slug: 'standard', title: 'Standard Chess — starting position', fen: STANDARD_FEN, rows: 8, cols: 8 },
  { slug: 'king-of-the-hill', title: 'King of the Hill — starting position', fen: STANDARD_FEN, rows: 8, cols: 8 },
  { slug: 'three-check', title: 'Three-Check — starting position', fen: STANDARD_FEN, rows: 8, cols: 8 },
  { slug: 'antichess', title: 'Antichess — starting position', fen: STANDARD_FEN, rows: 8, cols: 8 },
  { slug: 'racing-kings', title: 'Racing Kings — starting position', fen: '8/8/8/8/8/8/krbnNBRK/qrbnNBRQ w - - 0 1', rows: 8, cols: 8 },
  { slug: 'fischer-random', title: 'Fischer Random — one possible starting position', fen: STANDARD_FEN, rows: 8, cols: 8 },
  { slug: 'rifle', title: 'Rifle Chess — starting position', fen: STANDARD_FEN, rows: 8, cols: 8 },
  { slug: 'atomic', title: 'Atomic Chess — starting position', fen: STANDARD_FEN, rows: 8, cols: 8 },
  { slug: 'marseillais', title: 'Marseillais Chess — starting position', fen: STANDARD_FEN, rows: 8, cols: 8 },
  { slug: 'duck-chess', title: 'Duck Chess — starting position', fen: STANDARD_FEN, rows: 8, cols: 8 },
  { slug: 'fog-of-war', title: 'Fog of War — starting position', fen: STANDARD_FEN, rows: 8, cols: 8 },
  { slug: 'no-castling', title: 'No Castling — starting position', fen: STANDARD_FEN, rows: 8, cols: 8 },
  { slug: 'torpedo', title: 'Torpedo Chess — starting position', fen: STANDARD_FEN, rows: 8, cols: 8 },
  { slug: 'horde', title: 'Horde Chess — starting position', fen: 'rnbqkbnr/pppppppp/8/1PP2PP1/PPPPPPPP/PPPPPPPP/PPPPPPPP/PPPPPPPP w kq - 0 1', rows: 8, cols: 8 },
  { slug: 'extinction', title: 'Extinction Chess — starting position', fen: STANDARD_FEN, rows: 8, cols: 8 },
  { slug: 'maharaja', title: 'Maharaja & Sepoys — starting position', fen: 'rnbqkbnr/pppppppp/8/8/8/8/8/4M3 w kq - 0 1', rows: 8, cols: 8 },
  { slug: 'capablanca', title: 'Capablanca Chess — starting position (10×8)', fen: 'rnabqkbcnr/pppppppppp/10/10/10/10/PPPPPPPPPP/RNABQKBCNR w KQkq - 0 1', rows: 8, cols: 10 },
  { slug: 'grand', title: 'Grand Chess — starting position (10×10)', fen: 'r8r/1nbqkcbn1/pppppppppp/10/10/10/10/PPPPPPPPPP/1NBQKCBN1/R8R w - - 0 1', rows: 10, cols: 10 },
  { slug: 'courier', title: 'Courier Chess — starting position (12×8)', fen: 'rnbbqsksbbnr/pppppppppppp/12/12/12/12/PPPPPPPPPPPP/RNBBQSKSBBNR w - - 0 1', rows: 8, cols: 12 },
  { slug: 'breakthrough', title: 'Breakthrough — starting position (7×7)', fen: 'ppppppp/ppppppp/7/7/7/PPPPPPP/PPPPPPP w - - 0 1', rows: 7, cols: 7 },
  { slug: 'knightmate', title: 'Knightmate — starting position', fen: 'rkbqnbkr/pppppppp/8/8/8/8/PPPPPPPP/RKBQNBKR w KQkq - 0 1', rows: 8, cols: 8 },
  { slug: 'monster-chess', title: 'Monster Chess — starting position', fen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/R3K2R w KQkq - 0 1', rows: 8, cols: 8 },
  { slug: 'progressive', title: 'Progressive Chess — starting position', fen: STANDARD_FEN, rows: 8, cols: 8 },
  { slug: 'chigorin', title: 'Chigorin Chess — starting position', fen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNNQKNNR w KQkq - 0 1', rows: 8, cols: 8 },
  { slug: 'almost-chess', title: 'Almost Chess — starting position', fen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBCKBNR w KQkq - 0 1', rows: 8, cols: 8 },
  { slug: 'amazon-chess', title: 'Amazon Chess — starting position', fen: 'rnbmkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBMKBNR w KQkq - 0 1', rows: 8, cols: 8 },
  { slug: 'upside-down', title: 'Upside-Down Chess — starting position', fen: 'RNBQKBNR/PPPPPPPP/8/8/8/8/pppppppp/rnbqkbnr w KQkq - 0 1', rows: 8, cols: 8 },
  { slug: 'single-check', title: 'Single-Check — starting position', fen: STANDARD_FEN, rows: 8, cols: 8 },
  { slug: 'five-check', title: 'Five-Check — starting position', fen: STANDARD_FEN, rows: 8, cols: 8 },
  { slug: 'giveaway', title: 'Giveaway — starting position', fen: STANDARD_FEN, rows: 8, cols: 8 },
  { slug: 'suicide-chess', title: 'Suicide Chess — starting position', fen: STANDARD_FEN, rows: 8, cols: 8 },
  { slug: 'stalemate-wins', title: 'Stalemate Wins — starting position', fen: STANDARD_FEN, rows: 8, cols: 8 },
  { slug: 'codrus', title: 'Codrus — starting position', fen: STANDARD_FEN, rows: 8, cols: 8 },
  { slug: 'makpong', title: 'Makpong — starting position', fen: STANDARD_FEN, rows: 8, cols: 8 },
  { slug: 'los-alamos', title: 'Los Alamos Chess — starting position (6×6)', fen: 'rnqknr/pppppp/6/6/PPPPPP/RNQKNR w - - 0 1', rows: 6, cols: 6 },
  { slug: 'minichess', title: 'Minichess — starting position (5×5)', fen: 'kqbnr/ppppp/5/PPPPP/RNBQK w - - 0 1', rows: 5, cols: 5 },
  { slug: 'endgame-chess', title: 'Endgame Chess — starting position', fen: '4k3/pppppppp/8/8/8/8/PPPPPPPP/4K3 w - - 0 1', rows: 8, cols: 8 },
  { slug: 'peasants-revolt', title: "Peasants' Revolt — starting position", fen: '2n1k1n1/pppppppp/8/8/8/8/PPPPPPPP/4K3 w - - 0 1', rows: 8, cols: 8 },
  { slug: 'pawns-only', title: 'Pawns Only — starting position', fen: '4k3/pppppppp/8/8/8/8/PPPPPPPP/4K3 w - - 0 1', rows: 8, cols: 8 },
  { slug: 'andernach', title: 'Andernach Chess — starting position', fen: STANDARD_FEN, rows: 8, cols: 8 },
  { slug: 'benedict', title: 'Benedict Chess — starting position', fen: STANDARD_FEN, rows: 8, cols: 8 },
  { slug: 'berserk', title: 'Berserk Chess — starting position', fen: STANDARD_FEN, rows: 8, cols: 8 },
  { slug: 'checkless', title: 'Checkless Chess — starting position', fen: STANDARD_FEN, rows: 8, cols: 8 },
  { slug: 'dark-chess', title: 'Dark Chess — starting position', fen: STANDARD_FEN, rows: 8, cols: 8 },
  { slug: 'dice-chess', title: 'Dice Chess — starting position', fen: STANDARD_FEN, rows: 8, cols: 8 },
  { slug: 'diana', title: 'Diana Chess — starting position (6×6)', fen: 'rbbkr1/pppppp/6/6/PPPPPP/RBBKR1', rows: 6, cols: 6 },
  { slug: 'grid-chess', title: 'Grid Chess — starting position', fen: STANDARD_FEN, rows: 8, cols: 8 },
  { slug: 'half-chess', title: 'Half Chess — starting position (8×4)', fen: 'rnbqkbnr/pppppppp/PPPPPPPP/RNBQKBNR', rows: 4, cols: 8 },
  { slug: 'madrasi', title: 'Madrasi Chess — starting position', fen: STANDARD_FEN, rows: 8, cols: 8 },
  { slug: 'no-retreat', title: 'No Retreat — starting position', fen: STANDARD_FEN, rows: 8, cols: 8 },
  { slug: 'omnicide', title: 'Omnicide — starting position', fen: STANDARD_FEN, rows: 8, cols: 8 },
  { slug: 'patrol', title: 'Patrol Chess — starting position', fen: STANDARD_FEN, rows: 8, cols: 8 },
  { slug: 'petty', title: 'Petty Chess — starting position (5×6)', fen: 'rnbqk/ppppp/5/5/PPPPP/RNBQK', rows: 6, cols: 5 },
  { slug: 'weak', title: 'Weak! — starting position', fen: STANDARD_FEN, rows: 8, cols: 8 },
];

let generated = 0;
for (const v of variants) {
  const svg = generateSVG(v.title, v.fen, v.rows, v.cols);
  writeFileSync(resolve(SVG_DIR, `${v.slug}-board.svg`), svg);
  generated++;
}

console.log(`Generated ${generated} SVG board diagrams (Staunton pieces).`);
