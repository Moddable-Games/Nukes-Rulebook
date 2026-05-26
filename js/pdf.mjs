import { readFileSync, mkdirSync, existsSync, readdirSync } from 'fs';
import { resolve } from 'path';
import { execSync } from 'child_process';
import puppeteer from 'puppeteer';
import matter from 'gray-matter';
import { buildPaginateScript } from './pdf-paginate.mjs';

const ROOT = resolve(import.meta.dirname, '..');
const GAMES_DIR = resolve(ROOT, 'games');
const DIST_DIR = resolve(ROOT, 'dist');

const PAGE_H_MM = 297;
const PAD_MM = 20;
const PAGINATE_JS = buildPaginateScript(PAGE_H_MM, PAD_MM);

// --- Parse CLI arguments ---
const args = process.argv.slice(2);
let targetSlug = null;
const gameIdx = args.indexOf('--game');
if (gameIdx !== -1 && args[gameIdx + 1]) {
  targetSlug = args[gameIdx + 1];
}

// --- Discover games ---
function getGameSlugs() {
  if (targetSlug) return [targetSlug];
  return readdirSync(GAMES_DIR, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => d.name)
    .filter(slug => existsSync(resolve(GAMES_DIR, slug, 'content/rulebook.md')));
}

// --- Generate a single-page section (cover, back-cover) ---
async function generateSinglePage(browser, htmlPath, sectionSel, opts) {
  const page = await browser.newPage();
  await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0' });
  await page.emulateMediaType('print');
  await page.setViewport({ width: 794, height: 1123 });

  await page.evaluate((sel, ver, slug) => {
    const target = document.querySelector(sel);
    if (sel === '.back-cover') {
      const now = new Date();
      const printed = now.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
      const bc = document.createElement('div');
      bc.className = 'back-cover';
      bc.innerHTML = `
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
  }, sectionSel, opts.version || '', opts.slug || '');

  await page.addStyleTag({ content: `
    html, body { background: ${opts.bg} !important; margin: 0; padding: 0; }
  `});

  const pdfPath = opts.outPath;
  await page.pdf({
    path: pdfPath,
    format: 'A4',
    printBackground: true,
    margin: { top: 0, bottom: 0, left: 0, right: 0 }
  });

  await page.close();
  return pdfPath;
}

// --- Generate a multi-page section with pagination ---
async function generateMultiPage(browser, htmlPath, sectionSel, opts) {
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
        const isSection = tag === 'DIV' && (cls.includes('section') || cls === 'content');
        if (isSection) {
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

  const pdfPath = opts.outPath;
  await page.pdf({
    path: pdfPath,
    format: 'A4',
    printBackground: true,
    margin: { top: 0, bottom: 0, left: 0, right: 0 }
  });

  await page.close();
  return pdfPath;
}

// --- Game-specific section configurations ---
function getSections(slug, meta, gameDir) {
  const hasRefPage = existsSync(resolve(DIST_DIR, slug, 'index.html'));

  // Nukes has custom sections
  if (slug === 'nukes') {
    const TEAL_CSS = `.clar-q{color:#c9a84c!important}.clar-a{color:#f2ece0!important}.clar-a strong{color:#fff!important}.clar-new{color:#fff!important;background:#c9a84c!important;border-color:#c9a84c!important}.eyebrow{color:#f2ece0!important}h2{color:#f2ece0!important}hr{border-color:rgba(242,236,224,.25)!important}p{color:#f2ece0!important}`;
    return [
      { sel: '.cover', bg: '#0e0a06', multi: false },
      { sel: '.content', bg: '#f2ece0', multi: true },
      { sel: '.ref-page', bg: '#2a4a4b', multi: true, css: TEAL_CSS },
      { sel: '.appendix', bg: '#2a4a4b', multi: true, css: TEAL_CSS },
      { sel: '.back-cover', bg: '#0e0a06', multi: false },
    ];
  }

  // Default: cover + content + back-cover
  const sections = [];
  sections.push({ sel: '.cover', bg: 'var(--bg-dark, #1a1a2e)', multi: false });
  sections.push({ sel: '.content', bg: 'var(--bg-primary, #f8f4ef)', multi: true });
  sections.push({ sel: '.back-cover', bg: 'var(--bg-dark, #1a1a2e)', multi: false });
  return sections;
}

// --- Main ---
const browser = await puppeteer.launch({
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
});

const slugs = getGameSlugs();

for (const slug of slugs) {
  const gameDir = resolve(GAMES_DIR, slug);
  const src = readFileSync(resolve(gameDir, 'content/rulebook.md'), 'utf8');
  const { data: meta } = matter(src);
  const version = meta.version || '0.0.0';

  const htmlPath = resolve(DIST_DIR, slug, 'index.html');
  if (!existsSync(htmlPath)) {
    console.warn(`  Skipping ${slug} — no built HTML`);
    continue;
  }

  const outDir = resolve(gameDir, 'pdf');
  mkdirSync(outDir, { recursive: true });
  const outPath = resolve(outDir, `${slug}-rulebook-v${version}.pdf`);

  const sections = getSections(slug, meta, gameDir);
  const pdfPaths = [];

  for (let i = 0; i < sections.length; i++) {
    const s = sections[i];
    const sectionPath = resolve(outDir, `_section_${i}.pdf`);
    const opts = { bg: s.bg, css: s.css || '', outPath: sectionPath, version, slug };

    try {
      if (s.multi) {
        await generateMultiPage(browser, htmlPath, s.sel, opts);
      } else {
        await generateSinglePage(browser, htmlPath, s.sel, opts);
      }
      pdfPaths.push(sectionPath);
    } catch (e) {
      console.warn(`  Warning: section "${s.sel}" not found in ${slug}, skipping`);
    }
  }

  if (pdfPaths.length === 0) {
    console.warn(`  Skipping ${slug} — no sections rendered`);
    continue;
  }

  // Merge sections
  if (pdfPaths.length === 1) {
    execSync(`mv "${pdfPaths[0]}" "${outPath}"`);
  } else {
    execSync(`pdfunite ${pdfPaths.map(p => `"${p}"`).join(' ')} "${outPath}"`);
    for (const p of pdfPaths) execSync(`rm "${p}"`);
  }

  const finalPages = parseInt(
    execSync(`pdfinfo "${outPath}" | grep Pages | awk '{print $2}'`).toString().trim()
  );
  console.log(`  Generated ${slug}/pdf/${slug}-rulebook-v${version}.pdf (${finalPages} pages)`);
}

// --- Variant PDF generation (for games with variants: true) ---
for (const slug of slugs) {
  const gameDir = resolve(GAMES_DIR, slug);
  const src = readFileSync(resolve(gameDir, 'content/rulebook.md'), 'utf8');
  const { data: meta } = matter(src);
  if (!meta.variants) continue;

  const version = meta.version || '0.0.0';
  const variantsDir = resolve(gameDir, 'content/variants');
  if (!existsSync(variantsDir)) continue;

  const variantFiles = readdirSync(variantsDir).filter(f => f.endsWith('.md'));
  const variants = variantFiles.map(f => {
    const vsrc = readFileSync(resolve(variantsDir, f), 'utf8');
    const { data: vmeta } = matter(vsrc);
    return { file: f, slug: vmeta.slug || f.replace('.md', ''), meta: vmeta };
  }).sort((a, b) => (a.meta.order || 999) - (b.meta.order || 999));

  const variantPdfDir = resolve(gameDir, 'pdf/variants');
  mkdirSync(variantPdfDir, { recursive: true });

  const allVariantPdfs = [];
  console.log(`  Generating ${variants.length} variant PDFs for ${slug}...`);

  for (const v of variants) {
    const htmlPath = resolve(DIST_DIR, slug, 'variants', v.slug, 'index.html');
    if (!existsSync(htmlPath)) {
      console.warn(`    Skipping variant ${v.slug} — no built HTML`);
      continue;
    }

    const variantPdfPath = resolve(variantPdfDir, `${v.slug}.pdf`);

    // --- Page 1: Cover ---
    const coverPage = await browser.newPage();
    await coverPage.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0' });
    await coverPage.emulateMediaType('print');
    await coverPage.setViewport({ width: 794, height: 1123 });

    await coverPage.evaluate(() => {
      const cover = document.querySelector('.variant-cover');
      if (!cover) return;
      document.body.innerHTML = '';
      document.body.appendChild(cover);
    });

    await coverPage.addStyleTag({ content: `
      html, body { margin: 0; padding: 0; background: #0a1628; }
      .variant-cover {
        width: 210mm; height: 297mm; box-sizing: border-box;
        display: flex; align-items: center; justify-content: center;
        padding: 40mm 20mm;
        background: linear-gradient(160deg, #0a1628 0%, #112240 100%);
        border-bottom: none;
      }
      .variant-cover-inner { text-align: center; }
      .variant-cover-title { font-size: 42px; }
      .variant-cover-label { font-size: 11px; margin-bottom: 16px; }
    `});

    const coverPath = resolve(variantPdfDir, `_${v.slug}_cover.pdf`);
    await coverPage.pdf({
      path: coverPath,
      format: 'A4',
      printBackground: true,
      margin: { top: 0, bottom: 0, left: 0, right: 0 }
    });
    await coverPage.close();

    // --- Page 2+: Content (paginated) ---
    const contentPage = await browser.newPage();
    await contentPage.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0' });
    await contentPage.emulateMediaType('print');
    await contentPage.setViewport({ width: 794, height: 1123 });

    await contentPage.evaluate(() => {
      const content = document.querySelector('.content');
      if (!content) return;
      document.body.innerHTML = '';
      const wrapper = document.createElement('div');
      wrapper.id = 'pdf-source';
      for (const child of Array.from(content.querySelectorAll('.section > *'))) {
        wrapper.appendChild(child);
      }
      document.body.appendChild(wrapper);
    });

    await contentPage.addStyleTag({ content: `
      html, body { margin: 0; padding: 0; background: #f8f4ef; }
      #pdf-source { padding: ${PAD_MM}mm; box-sizing: border-box; }
      h2 { margin-top: 0; }
      svg { max-width: 100%; height: auto; margin: 16px 0; padding: 16px; background: #fff; border: 1px solid #ddd; border-radius: 4px; }
    `});

    await contentPage.evaluate(PAGINATE_JS);

    const contentPath = resolve(variantPdfDir, `_${v.slug}_content.pdf`);
    await contentPage.pdf({
      path: contentPath,
      format: 'A4',
      printBackground: true,
      margin: { top: 0, bottom: 0, left: 0, right: 0 }
    });
    await contentPage.close();

    // Merge cover + content
    execSync(`pdfunite "${coverPath}" "${contentPath}" "${variantPdfPath}"`);
    execSync(`rm "${coverPath}" "${contentPath}"`);

    allVariantPdfs.push(variantPdfPath);
  }

  console.log(`  Generated ${allVariantPdfs.length} individual variant PDFs`);

  // Combined library PDF
  if (allVariantPdfs.length > 0) {
    const combinedPath = resolve(gameDir, 'pdf', `${slug}-variant-library-v${version}.pdf`);
    execSync(`pdfunite ${allVariantPdfs.map(p => `"${p}"`).join(' ')} "${combinedPath}"`);
    const totalPages = parseInt(
      execSync(`pdfinfo "${combinedPath}" | grep Pages | awk '{print $2}'`).toString().trim()
    );
    console.log(`  Generated ${slug}/pdf/${slug}-variant-library-v${version}.pdf (${totalPages} pages)`);
  }
}

await browser.close();
console.log('PDF generation complete.');
