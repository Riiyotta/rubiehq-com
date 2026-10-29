#!/usr/bin/env node
// Re-measures every ledger section's rendered height at 1440x900 in the BUILT clone and writes
// extraction/measured-values.json -> sectionHeights (read by extraction/wrapper_gate.py).
//
//   npx vite build --outDir <scratch> && npx vite preview --outDir <scratch> --port <port>
//   NODE_PATH="$(npm root -g)" node design-repo/extraction/measure_sections.mjs --base http://localhost:<port> [--write]
//
// Playwright is resolved through NODE_PATH (or a local install); no browser or module path is stored in
// the repo. Each ledger entry's `dom` says which element it is: {top: k} = k-th of <main>'s direct
// <header>, top-level <section>s and direct <footer>; {top, sel, nth} = nth match of sel inside it;
// {top, span: [a, b]} = from the top of a to the top of b ("@start"/"@end" = the block's own edges,
// "h2:n" = the n-th <h2>); {consent: true} = the consent root. Fixed / sticky elements take no page height.
import { createRequire } from "module";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const require = createRequire(import.meta.url);
const here = path.dirname(fileURLToPath(import.meta.url));
const ledgerPath = path.join(here, "measured-values.json");
const args = process.argv.slice(2);
const base = (args[args.indexOf("--base") + 1] || process.env.CLONE_BASE_URL || "").replace(/\/$/, "");
if (!base || args.indexOf("--base") < 0 && !process.env.CLONE_BASE_URL) { console.error("usage: measure_sections.mjs --base http://localhost:<port> [--write]"); process.exit(2); }
const { chromium } = require("playwright");
const ledger = JSON.parse(fs.readFileSync(ledgerPath, "utf8"));

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
const routes = {};
for (const r of ledger.routes) {
  await page.goto(base + r.route, { waitUntil: "networkidle" });
  await page.evaluate(async () => { for (let y = 0; y < document.body.scrollHeight; y += 800) { window.scrollTo(0, y); await new Promise((f) => setTimeout(f, 40)); } window.scrollTo(0, 0); });
  await page.waitForTimeout(300);
  const res = await page.evaluate((entries) => {
    const main = document.querySelector("main[data-clone-section]");
    const tops = [...main.querySelectorAll(":scope > header, section, :scope > footer")].filter((e) => e.tagName !== "SECTION" || !e.parentElement.closest("section"));
    const box = (e) => { const b = e.getBoundingClientRect(); return { top: b.top + scrollY, bottom: b.bottom + scrollY }; };
    const pos = (e) => getComputedStyle(e).position;
    const out = entries.map((en) => {
      const d = en.dom;
      if (d.consent) { const c = document.querySelector('[data-testid="consent-banner-root"]'); return c ? { id: en.id, heightPx: Math.round(c.getBoundingClientRect().height), position: pos(c), inFlow: false } : { id: en.id, missing: true }; }
      const t = tops[d.top]; if (!t) return { id: en.id, missing: true };
      let el = t, y0, y1;
      if (d.sel) { el = t.querySelectorAll(d.sel)[d.nth]; if (!el) return { id: en.id, missing: true }; }
      if (d.span) {
        const edge = (s, start) => { if (s === "@start") return box(t).top; if (s === "@end") return box(t).bottom; const [tag, n] = s.split(":"); const h = t.querySelectorAll(tag)[+n]; return h ? box(h).top : null; };
        y0 = edge(d.span[0]); y1 = edge(d.span[1]); if (y0 == null || y1 == null) return { id: en.id, missing: true };
      } else { const b = box(el); y0 = b.top; y1 = b.bottom; }
      const p = pos(el); const fixed = p === "fixed" || (p === "sticky" && en.tag === "header");
      return { id: en.id, heightPx: Math.round(y1 - y0), position: p, inFlow: !fixed };
    });
    return { pageHeightPx: document.documentElement.scrollHeight, sections: out };
  }, r.sections);
  routes[r.route] = { template: r.template, ...res };
  console.error(`${r.route}: ${res.pageHeightPx}px, ${res.sections.length} sections`);
}
await browser.close();
const out = { viewport: "1440x900", viewportWidthPx: 1440, measuredAt: new Date().toISOString().slice(0, 10),
  method: "extraction/measure_sections.mjs against the built clone (vite build + vite preview), headless Chromium, after a full scroll pass",
  routes };
if (args.includes("--write")) { ledger.sectionHeights = out; fs.writeFileSync(ledgerPath, JSON.stringify(ledger, null, 2) + "\n"); console.error("wrote sectionHeights to measured-values.json"); }
else console.log(JSON.stringify(out, null, 1));
