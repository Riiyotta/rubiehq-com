# Changelog

## 0.2.0 — 2026-10-06
Re-extracted the section tree. The 0.1.0 pass classified each page's `<main>`
element as a single hero section and never descended into its children, so all
21 routes collapsed to one template (`template.group`) with two sections, and
a 4391px-tall "hero" absorbed every real block on the page.

- **Sections 2 → 33.** Re-derived by parsing each route's rendered HTML
  snapshot under `recon/mirror/src/`: `<main>`'s direct children, plus every
  top-level `<section>` inside a wrapper div, without descending into nested
  sections. `shell.consent-banner-root` sits outside `<main>` and is cited
  separately.
- **Templates 1 → 11.** One per real page shape. Every route of every template
  now collapses to exactly one node sequence, which `verify_all.py` check 7
  enforces — the 0.1.0 claim that all 21 routes shared a sequence was false.
- **Citations 42 → 156**, each resolved against the real file, line range and
  cited tag/anchor.
- **Components 19 → 5.** The 0.1.0 set was CSS-class frequency counts
  (`grayscale`, `italic`, `mix-blend-soft-light`, `box`, `group`) and minified
  third-party consent-banner internals (`c15t-ui-*`), none of which is a
  component. Replaced with the five patterns that actually recur in the
  markup, each with an occurrence count and a line citation.
- **Content contracts are now per-section.** 0.1.0 gave `hero.main` a union
  envelope (`ctas.maxItems: 12`, `images.maxItems: 72`) wide enough to accept
  nav links as calls to action. Budgets are now measured per section type.
- **Asset roles corrected.** The site's 12 third-party company logos
  (Rillet, OrderCo, Granum, Curbwaste, Cariina, Brivity, Bound, Arketa and
  peers) were classified `content-image`/`may-generate-new`; they now carry
  `customer-logo`/`must-not-fabricate`. Only Rubie's own mark is `logo`.
  Testimonial portraits carry `avatar`/`must-not-fabricate`.
- **Motion closed per section**, derived from each section's real markup
  (`<canvas>` → `canvas-animation`, `@keyframes`/`animate-*` →
  `css-animation`, `sticky` → `scroll-linked`), with `none` always legal since
  any section may render unanimated.
- **Restored the `^(/|#)` href pattern** and added the same constraint to
  image `src`, so a generated page cannot link to or hotlink the live site.
- `shell.spacer` is recorded as genuinely contentless (an `aria-hidden`
  bordered band, zero measured words) and must never be given copy.
- Adversarial suite: 37 passed / 0 failed (12 controls, 25 mutations).

## 0.1.0 — 2026-10-06T07:05:09Z
- Initial extraction from https://www.rubiehq.com/: 2 sections, 1 templates, 21 routes.
