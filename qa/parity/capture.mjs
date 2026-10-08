/* Parity capture: every route in src/routes.js, full-page shot + section rects.
   Usage: node qa/parity/capture.mjs <port> */
import { chromium } from '/Users/riyaghosh/V3/rubiehq/node_modules/playwright/index.mjs';
import fs from 'fs'; import path from 'path';

const PORT = process.argv[2] || '5300';
const ROOT = path.resolve('.');
const OUT  = path.join(ROOT, 'qa/parity/shots');
fs.mkdirSync(OUT, { recursive: true });

const routesSrc = fs.readFileSync(path.join(ROOT, 'src/routes.js'), 'utf8');
const ROUTES = [...routesSrc.matchAll(/path:\s*"([^"]+)"/g)].map(m => m[1]);
const shots = JSON.parse(fs.readFileSync(path.join(ROOT, 'recon/images/_shots.json'), 'utf8'));

const b = await chromium.launch();
const page = await b.newPage({ viewport: { width: 1440, height: 900 } });
const out = [];

for (const route of ROUTES) {
  const url = `http://localhost:${PORT}${route}`;
  const errs = [];
  page.removeAllListeners('pageerror');
  page.on('pageerror', e => errs.push(e.message.slice(0, 160)));
  try {
    await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 });
    await page.waitForTimeout(1200);
    await page.evaluate(async () => {
      const h = document.body.scrollHeight;
      for (let y = 0; y < h; y += 400) { window.scrollTo(0, y); await new Promise(r => setTimeout(r, 70)); }
      window.scrollTo(0, 0);
    });
    await page.waitForTimeout(1400);
    const info = await page.evaluate(() => ({
      height: document.body.scrollHeight,
      overflowX: document.documentElement.scrollWidth > window.innerWidth,
      sections: [...document.querySelectorAll('[data-clone-section]')].map(el => {
        const r = el.getBoundingClientRect();
        return { id: el.getAttribute('data-clone-section'), y: Math.round(r.top + window.scrollY), h: Math.round(r.height) };
      }),
    }));
    const file = route === '/' ? 'home' : route.slice(1).replace(/\//g, '_');
    await page.screenshot({ path: path.join(OUT, `${file}.clone.png`), fullPage: true });
    out.push({ route, file, reference: shots[route] || null, ...info, pageErrors: errs });
    console.log(`${route}  h=${info.height}  sections=${info.sections.length}${errs.length ? '  ERR:' + errs.length : ''}`);
  } catch (e) {
    out.push({ route, error: String(e).slice(0, 200) });
    console.log(`${route}  FAILED  ${String(e).slice(0, 120)}`);
  }
}
fs.writeFileSync(path.join(ROOT, 'qa/parity/capture.json'), JSON.stringify(out, null, 1));
console.log(`\ncaptured ${out.filter(r => !r.error).length}/${ROUTES.length} routes`);
await b.close();
