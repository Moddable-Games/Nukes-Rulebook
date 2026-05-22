import { readFileSync, mkdirSync } from 'fs';
import { resolve } from 'path';
import { execSync } from 'child_process';
import puppeteer from 'puppeteer';
import matter from 'gray-matter';
import { buildPaginateScript } from './pdf-paginate.mjs';

const ROOT = resolve(import.meta.dirname, '..');
const htmlPath = resolve(ROOT, 'index.html');

const src = readFileSync(resolve(ROOT, 'content/rulebook.md'), 'utf8');
const { data: meta } = matter(src);
const version = meta.version || '0.0.0';

const outDir = resolve(ROOT, 'pdf');
mkdirSync(outDir, { recursive: true });
const outPath = resolve(outDir, `nukes-rulebook-v${version}.pdf`);

const PAGE_H_MM = 297;
const PAD_MM = 20;
const PAGINATE_JS = buildPaginateScript(PAGE_H_MM, PAD_MM);

async function generateSinglePage(browser, sectionSel, opts) {
  const page = await browser.newPage();
  await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0' });
  await page.emulateMediaType('print');
  await page.setViewport({ width: 794, height: 1123 });

  await page.evaluate((sel, ver) => {
    const target = document.querySelector(sel);
    if (sel === '.back-cover') {
      const now = new Date();
      const printed = now.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
      const bc = document.createElement('div');
      bc.className = 'back-cover';
      bc.innerHTML = `
        <img src="logos/nukes-logo.jpg" class="back-cover-logo" />
        <p class="back-cover-version">v${ver}</p>
        <p class="back-cover-pub">Published by Moddable Games</p>
        <p class="back-cover-date">Printed ${printed}</p>
      `;
      document.body.innerHTML = '';
      document.body.appendChild(bc);
    } else if (target) {
      document.body.innerHTML = '';
      document.body.appendChild(target);
    }
  }, sectionSel, version);

  await page.addStyleTag({ content: `
    html, body { background: ${opts.bg} !important; margin: 0; padding: 0; }
  `});

  const pdfPath = resolve(outDir, `_section_${opts.index}.pdf`);
  await page.pdf({
    path: pdfPath,
    format: 'A4',
    printBackground: true,
    margin: { top: 0, bottom: 0, left: 0, right: 0 }
  });

  await page.close();
  return pdfPath;
}

async function generateMultiPage(browser, sectionSel, opts) {
  const page = await browser.newPage();
  await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0' });
  await page.emulateMediaType('print');
  await page.setViewport({ width: 794, height: 1123 });

  await page.evaluate((sel) => {
    const target = document.querySelector(sel);
    if (!target) return;
    document.body.innerHTML = '';
    const wrapper = document.createElement('div');
    wrapper.id = 'pdf-source';

    function flatten(parent) {
      for (const child of Array.from(parent.children)) {
        const tag = child.tagName;
        const cls = child.className;
        const isSection = tag === 'DIV' && cls.includes('section');
        const isContent = tag === 'DIV' && cls === 'content';
        if (isSection || isContent) {
          flatten(child);
        } else {
          wrapper.appendChild(child);
        }
      }
    }
    flatten(target);
    document.body.appendChild(wrapper);
  }, sectionSel);

  await page.addStyleTag({ content: `
    html, body { background: ${opts.bg} !important; margin: 0; padding: 0; }
    #pdf-source { padding: ${PAD_MM}mm; box-sizing: border-box; }
    ${opts.css || ''}
  `});

  await page.evaluate(PAGINATE_JS);

  const pdfPath = resolve(outDir, `_section_${opts.index}.pdf`);
  await page.pdf({
    path: pdfPath,
    format: 'A4',
    printBackground: true,
    margin: { top: 0, bottom: 0, left: 0, right: 0 }
  });

  await page.close();
  return pdfPath;
}

const browser = await puppeteer.launch({
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
});

const TEAL_TEXT_CSS = `.clar-q{color:#c9a84c!important}.clar-a{color:#f2ece0!important}.clar-a strong{color:#fff!important}.clar-new{color:#fff!important;background:#c9a84c!important;border-color:#c9a84c!important}.eyebrow{color:#f2ece0!important}h2{color:#f2ece0!important}hr{border-color:rgba(242,236,224,.25)!important}p{color:#f2ece0!important}`;

const sections = [
  { sel: '.cover', bg: '#0e0a06', multi: false, index: 0 },
  { sel: '.content', bg: '#f2ece0', multi: true, index: 1 },
  { sel: '.ref-page', bg: '#2a4a4b', multi: true, index: 2, css: TEAL_TEXT_CSS },
  { sel: '.appendix', bg: '#2a4a4b', multi: true, index: 3, css: TEAL_TEXT_CSS },
  { sel: '.back-cover', bg: '#0e0a06', multi: false, index: 4 },
];

const pdfPaths = [];
for (const s of sections) {
  const gen = s.multi ? generateMultiPage : generateSinglePage;
  const p = await gen(browser, s.sel, s);
  pdfPaths.push(p);
}

await browser.close();

execSync(`pdfunite ${pdfPaths.map(p => `"${p}"`).join(' ')} "${outPath}"`);

for (const p of pdfPaths) {
  execSync(`rm "${p}"`);
}

const finalPages = parseInt(
  execSync(`pdfinfo "${outPath}" | grep Pages | awk '{print $2}'`).toString().trim()
);
console.log(`Generated pdf/nukes-rulebook-v${version}.pdf (${finalPages} pages)`);
