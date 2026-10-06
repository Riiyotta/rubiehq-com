# clone/ — Rubie | Rip and Replace Your Competition

A runnable **Vite + React + react-router + Tailwind v3** project written from the real rendered DOM of https://www.rubiehq.com/: one component per section with that section's own markup, the site's own stylesheets, its real images, fonts and video under `public/`, routes declared in `src/routes.js`.

```
npm install
npm run dev      # http://localhost:5173
npm run build
```

## What is in it

- `src/sections/`: **22** component(s) (42 section instance(s) over 21 route(s); identical markup shared across routes is one component).
- `src/pages/` + `src/routes.js` + `src/App.jsx`: one page per captured route, sections in page order, react-router links between captured pages.
- `src/styles/`: the site's own CSS, copied as it was with every `url()` rewritten to a file under `public/`; `tokens.css` + `tailwind.config.cjs` carry the measured design tokens (Tailwind utilities load first, preflight is off, so the site's CSS wins).
- `public/`: **101** real file(s), 4.5 MB (images, fonts, video, SVG). Nothing points outside the project.
- `clone-manifest.json`: route → page → component map, every still, every dropped file.

## Animation

- **Canvas / Rive areas: 3 still(s) captured** (0 canvas(es) drew nothing and are an empty, correctly sized box). The 1 `.riv` file(s) are **not** included: a remix cannot recolour or redraw a Rive file and would ship the original mascot on every generated site. Replace each still with an image slot, CSS or GSAP.
- **Scroll-driven motion is not reproduced.** The clone keeps one reveal-on-scroll observer only. The original ships Rive runtime. Rebuild them with CSS or GSAP in the remix.
- **Scroll-reveal: 0 element(s)** that started hidden or offset and animated in are marked `data-reveal`; one IntersectionObserver (`src/lib/usePageChrome.js`) fades them up (off under reduced motion).
- **13 element(s) forced visible.** These started hidden/offset on the original and were still hidden/offset when this clone was captured — the scroll-triggered animation that reveals them on the original did not fire the same way during capture. Rather than ship them permanently invisible, their hiding style was stripped so they render plainly (no animation, but visible). Rebuild the real scroll-in motion in the remix.
- **63 dropdown / mega-menu panel(s) captured.** A nav item whose panel is only built on hover/click (no entries of its own in the static DOM) was hovered for real; the panel that appeared is saved as a permanent sibling of its trigger and shown with real CSS `:hover`/`:focus-within` (see `src/styles/clone.css`) — a working dropdown, not just a label. Its own open/close script behaviour (animation, click-outside-to-close) is not reproduced.
- **Not reproduced**: GSAP timelines / ScrollTrigger pins and scrubs (pin wrappers are removed, content flows normally), Lenis smooth scroll, accordions, tabs, carousels and other script behaviour (only the state the page was in after load is captured), forms (submit is prevented), third-party frames (replaced by an empty box of the same size), shadow-DOM content.
- **No analytics or trackers**: none are in `src/` or `public/`.
- **No external links**: links to other sites (and to pages that were not captured) keep their element and styling but have no `href`; links between cloned pages go through the router. `--keep-external-links` keeps them.

### Rive files left out

| File | Replaced by |
|---|---|
| `images/home/rubie-home-animations.riv` | a still inside the section that held its canvas (not matched by name) |

## Checks run by the builder

| Check | Result |
|---|---|
| Every `src` / `url()` the code points at exists in `public/` | PASS (638 image reference(s), 638 resolved) |
| No tracker host in code or `public/` | PASS |
| No external hyperlink in `src/` | PASS (433 link(s) to other sites or uncaptured pages lost their target) |
| No placeholder boxes from the level-2 scaffold | PASS |
| Vite build + every route loads offline | PASS: vite build ok; 21 route(s) loaded: 0 console/network error(s), 0 outside host(s), 0 empty page(s) |
| Parity vs the original page, per section (gate 80%) | BELOW GATE: average 89.7% over 6 route(s) |

### Parity detail

Each section of the built clone is compared with the same section of the **original page**: the crawl's own full-page screenshot at 1440 px (`extras/images/`, taken from the live site with its scripts running) cut at that section's rectangle, or a fresh screenshot of the offline mirror when that file is missing. Both sides are compared on a half-scale grid; a pixel matches when no channel differs by more than 40/255, and a section whose height differs by more than 10 % is scaled down by the height ratio (except GSAP-pinned sections, whose extra scroll length is a script's doing). The route score weights sections by height. Sections below the gate get a side-by-side picture (original | clone) in `qa/parity/`. Whole-page height is not scored: GSAP pin spacers add blank scroll length the clone does not reproduce. Live animation, video and carousels in motion differ by design.

**`/`**: 56.2% over 2 of 2 section(s) (reference: original crawl screenshot); page height 7219 → 8452 px. Below the gate: 0:Z10 55%.

| # | Component | Height (original → clone) | Match | Score |
|---|---|---|---|---|
| 0 | `Z10` | 7219 → 8452 px | 64.6% | 55.2% ⚠ |
| 1 | `C15tUiRootHE9Kz` | 189 → 189 px | 95.1% | 95.1% |

**`/customers`**: 97.4% over 2 of 2 section(s) (reference: original crawl screenshot); page height 2865 → 2865 px.

| # | Component | Height (original → clone) | Match | Score |
|---|---|---|---|---|
| 0 | `Z104` | 2865 → 2865 px | 97.2% | 97.2% |
| 1 | `C15tUiRootHE9Kz` | 189 → 189 px | 99.8% | 99.8% |

**`/solutions/migration-playbooks`**: 96.8% over 2 of 2 section(s) (reference: original crawl screenshot); page height 4927 → 4887 px.

| # | Component | Height (original → clone) | Match | Score |
|---|---|---|---|---|
| 0 | `Z108` | 4927 → 4887 px | 96.9% | 96.9% |
| 1 | `C15tUiRootHE9Kz` | 189 → 189 px | 93.0% | 93.0% |

**`/customers/brivity`**: 89.9% over 2 of 2 section(s) (reference: original crawl screenshot); page height 4715 → 4705 px.

| # | Component | Height (original → clone) | Match | Score |
|---|---|---|---|---|
| 0 | `Z1011` | 4715 → 4705 px | 89.7% | 89.7% |
| 1 | `C15tUiRootHE9Kz` | 189 → 189 px | 93.6% | 93.6% |

**`/use-cases/product`**: 98.9% over 2 of 2 section(s) (reference: original crawl screenshot); page height 4352 → 4352 px.

| # | Component | Height (original → clone) | Match | Score |
|---|---|---|---|---|
| 0 | `Z1015` | 4352 → 4352 px | 98.9% | 98.9% |
| 1 | `C15tUiRootHE9Kz` | 189 → 189 px | 100.0% | 100.0% |

**`/use-cases/education`**: 99.2% over 2 of 2 section(s) (reference: original crawl screenshot); page height 4328 → 4328 px.

| # | Component | Height (original → clone) | Match | Score |
|---|---|---|---|---|
| 0 | `Z1018` | 4328 → 4328 px | 99.2% | 99.2% |
| 1 | `C15tUiRootHE9Kz` | 189 → 189 px | 100.0% | 100.0% |

### Missing in the mirror

5 local URL(s) the rendered page used were not saved by the crawl: `/_next/static/media/fef07dbb0973bf53-s.3p2_lha1f2xer.woff2`, `/_next/static/media/8a480f0b521d4e75-s.1qq4vpdcun5oj.woff2`, `/_next/static/media/53b9e256198e5412-s.390ncx5urfkfu.woff2`, `/_next/static/media/7178b3e590c64307-s.21jp631_3pja2.woff2`, `/_next/image`

