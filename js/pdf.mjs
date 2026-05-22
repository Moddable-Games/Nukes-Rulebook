import { readFileSync, mkdirSync } from 'fs';
import { resolve } from 'path';
import { execSync } from 'child_process';
import puppeteer from 'puppeteer';
import matter from 'gray-matter';

const ROOT = resolve(import.meta.dirname, '..');
const htmlPath = resolve(ROOT, 'index.html');

const src = readFileSync(resolve(ROOT, 'content/rulebook.md'), 'utf8');
const { data: meta } = matter(src);
const version = meta.version || '0.0.0';

const outDir = resolve(ROOT, 'pdf');
mkdirSync(outDir, { recursive: true });
const outPath = resolve(outDir, `nukes-rulebook-v${version}.pdf`);

const browser = await puppeteer.launch({
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
});
const page = await browser.newPage();

await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0' });
await page.emulateMediaType('print');
await page.setViewport({ width: 794, height: 1123 });

// Move teal sections to end of body for correct page-break context
await page.evaluate(() => {
  const refPage = document.querySelector('.ref-page');
  const appendix = document.querySelector('.appendix');
  if (refPage) document.body.appendChild(refPage);
  if (appendix) document.body.appendChild(appendix);
});

await page.evaluate(() => {
  document.documentElement.style.setProperty('background', 'var(--cream)', 'important');
  document.body.style.setProperty('background', 'var(--cream)', 'important');
});

await page.evaluate((ver) => {
  const backCover = document.createElement('div');
  backCover.className = 'back-cover';
  backCover.innerHTML = `
    <img src="logos/nukes-logo.jpg" class="back-cover-logo" />
    <p class="back-cover-version">v${ver}</p>
    <p class="back-cover-pub">Published by Moddable Games</p>
  `;
  document.body.appendChild(backCover);
}, version);

await page.pdf({
  path: outPath,
  format: 'A4',
  printBackground: true,
  margin: { top: '14mm', bottom: '0', left: '0', right: '0' }
});

await browser.close();

const finalPages = parseInt(
  execSync(`pdfinfo "${outPath}" | grep Pages | awk '{print $2}'`).toString().trim()
);
console.log(`Generated pdf/nukes-rulebook-v${version}.pdf (${finalPages} pages)`);
