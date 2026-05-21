import { resolve } from 'path';
import puppeteer from 'puppeteer';

const ROOT = resolve(import.meta.dirname, '..');
const htmlPath = resolve(ROOT, 'index.html');

const browser = await puppeteer.launch({
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
});
const page = await browser.newPage();

await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0' });

await page.pdf({
  path: resolve(ROOT, 'nukes-rulebook.pdf'),
  format: 'A4',
  printBackground: true,
  margin: { top: '12mm', bottom: '12mm', left: '0', right: '0' }
});

await browser.close();
console.log('Generated nukes-rulebook.pdf');
