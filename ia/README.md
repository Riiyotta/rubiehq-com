# Rubie | Rip and Replace Your Competition — information architecture

`ia.json` is the only file to hand-edit here. `IA.md` and `matrix.csv` are generated from it: re-run the scripts below after any change and never hand-edit the generated files.

```bash
cd ia
node validate.mjs   # checks route/template totals, referential integrity, category coverage
node build.mjs      # regenerates IA.md and matrix.csv
```

Every section's `implementedBy` points at the real markup that renders it, as `src/sections/<blob>.jsx > <element>`. Because the clone renders each route as one monolithic `Z*.jsx` blob, these are positional pointers into that blob rather than one component per section — the clone has no per-section components yet. The design repo's `sections/*.json` carry the same pointers, plus line-exact citations into `recon/mirror/src/*.html`.

## Findings

**The shell is the whole shared surface, and it is genuinely shared.** `shell.header`, `shell.footer` and `shell.consent-banner-root` appear on all 21 routes, and `cta.book-demo-band` on 19. All four are byte-identical wherever they appear, confirmed by hashing each block's normalized markup (generated SVG ids folded) across all 21 HTML snapshots: the header matched 21/21, the footer 21/21, the CTA band 19/19 and `faq.accordion` 6/6. These are the only sections that should become shared components; the CTA band alone is ~1147 lines of markup duplicated on 19 routes.

**27 of 33 sections are single-use and should stay page-local.** The homepage alone owns 6 of them, and they are the heaviest blocks on the site — `hero.home` spans 4415 lines of the homepage's 8851. There is no second caller for any of them, so building them as shared components now would be speculative.

**Two template families carry real repetition worth templating.** The 6 `/use-cases/*` routes share an identical 7-node sequence (only copy changes, and `faq.accordion` is byte-identical on all six — the same questions regardless of vertical), and the 5 `/customers/<name>` routes share an identical 6-node sequence. Together that is 11 of 21 routes from 2 shapes; the real build effort is in the other 10.

**`template.legal` is the one measured exception to the CTA rule.** `/privacy-policy` and `/terms` are the only routes with no `cta.book-demo-band` — they end at their document body. This is recorded as a real exception rather than normalized away, and the design repo's compatibility graph carries a matching named exception.

## How this was measured

The first generated version of this IA claimed 1 template and 2 sections for all 21 routes, because the extractor classified the page's `<main>` element as a single hero section and never descended into its children — so a 4391px-tall "hero" absorbed the whole page. That is why `hero.main` and `template.group` no longer exist here.

This version was re-derived from `recon/mirror/src/*.html` — the original rendered HTML snapshots, which are the same evidence the design repo's ledger cites, rather than the clone's JSX. Each file was parsed into a real element tree, `<main>`'s direct children were taken as the page's blocks, every top-level `<section>` inside a wrapper was collected (without descending into nested sections), and the blocks were then grouped across all 21 routes by normalized hash to separate genuinely shared markup from per-page markup. Top-level section counts per route range from 1 (legal) to 8 (homepage and the two solutions routes), not the uniform 2 previously claimed.

Two sections carry no copy and are recorded as such. `shell.spacer` is an `aria-hidden="true"` bordered band used as a rule between sections — measured content on both of its instances is zero words, and it must never be given any. `proof.story-metrics` has no heading of its own: it is the three-number outcome strip under each customer-story hero.

One block needed a second look. On `/solutions/integration-playbooks` an unheaded section at L1457-1847 initially looked like another spacer, but it carries real copy ("Meanwhile, your competitors are shipping product while your engineers maintain the 47th connector."), so it is `narrative.result-callout` — the same section the migration route carries at L1074-1137. Only the genuinely empty `aria-hidden` bands are `shell.spacer`.
