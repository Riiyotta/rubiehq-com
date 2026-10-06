# https://www.rubiehq.com/

Source: https://www.rubiehq.com/ · website-builder crawl, 2026-10-06T07:05:09Z; section tree re-extracted from recon/mirror/src/*.html 2026-10-06
Status: **measured-from-mirror** · production approved: **false**
21 routes · 11 templates · 33 unique sections

> Generated from `ia.json` by `build.mjs`. Edit the JSON, not this file.

## Shape of the site

The largest 3 templates (Use case, Customer story, Legal document) account for 13 of 21 routes (62%). The remaining 8 routes span 8 templates.

| template | routes | share |
|---|---:|---:|
| Use case | 6 | 29% |
| Customer story | 5 | 24% |
| Legal document | 2 | 10% |
| Homepage | 1 | 5% |
| Migration Playbooks | 1 | 5% |
| Integration Playbooks | 1 | 5% |
| Product | 1 | 5% |
| Enterprise | 1 | 5% |
| Customer story index | 1 | 5% |
| Blog index | 1 | 5% |
| Article (long-form) | 1 | 5% |

## Page chrome

**21 routes carry chrome = `full`** — Homepage, Use case, Customer story, Migration Playbooks, Integration Playbooks, Product, Enterprise, Customer story index, Blog index, Article (long-form), Legal document.

## Sections by reuse

How widely a section is shared determines whether it belongs in a shared
component library or stays local to its page.

| section | category | templates | routes | implementation | scope |
|---|---|---:|---:|---|---|
| `shell.footer` | SHELL | 11 | 21 | `src/sections/Z10.jsx > footer` | All 21 routes. Identical apart from generated SVG arc ids. |
| `shell.header` | SHELL | 11 | 21 | `src/sections/Z10.jsx > header` | All 21 routes. Byte-identical on every one. |
| `shell.consent-banner-root` | SHELL | 11 | 21 | `src/sections/C15tUiRootHE9Kz.jsx` | All 21 routes. |
| `cta.book-demo-band` | CTA | 10 | 19 | `src/sections/Z10.jsx > section[7]` | 19 routes — all but /privacy-policy and /terms, which end at their legal body. |
| `narrative.problem-statement` | NARRATIVE | 4 | 9 | `src/sections/Z10.jsx > section[1]` | 9 routes: /, the six /use-cases/* routes and the two /solutions/* routes. |
| `faq.accordion` | FAQ | 1 | 6 | `src/sections/Z1013.jsx > section[3]` | The 6 /use-cases/* routes. |
| `hero.use-case` | HERO | 1 | 6 | `src/sections/Z1013.jsx > section[0]` | The 6 /use-cases/* routes. |
| `narrative.solution-statement` | NARRATIVE | 1 | 6 | `src/sections/Z1013.jsx > section[2]` | The 6 /use-cases/* routes. |
| `hero.customer-story` | HERO | 1 | 5 | `src/sections/Z1010.jsx > section[0]` | The 5 /customers/<name> routes. |
| `narrative.story-beat` | NARRATIVE | 1 | 5 | `src/sections/Z1010.jsx > section[2]` | The 5 /customers/<name> routes. |
| `proof.story-metrics` | PROOF | 1 | 5 | `src/sections/Z1010.jsx > section[1]` | The 5 /customers/<name> routes. |
| `hero.page-title` | HERO | 4 | 4 | `src/sections/Z102.jsx > section[0]` | 4 routes: /product, /enterprise, /customers and /blog. |
| `features.capability-grid` | FEATURES | 2 | 2 | `src/sections/Z108.jsx > section[3]` | The 2 /solutions/* routes. |
| `features.solution-anatomy` | FEATURES | 2 | 2 | `src/sections/Z108.jsx > section[5]` | The 2 /solutions/* routes. |
| `features.solution-outcomes` | FEATURES | 2 | 2 | `src/sections/Z108.jsx > section[4]` | The 2 /solutions/* routes. |
| `hero.solution` | HERO | 2 | 2 | `src/sections/Z108.jsx > section[0]` | The 2 /solutions/* routes. |
| `narrative.result-callout` | NARRATIVE | 2 | 2 | `src/sections/Z108.jsx > section[2]` | The 2 /solutions/* routes. |
| `shell.spacer` | SHELL | 2 | 2 | `src/sections/Z105.jsx > section[2]` | 2 routes: /blog and /solutions/migration-playbooks. Each sits in its own template now, so template membership and real route count agree. |
| `narrative.legal-body` | NARRATIVE | 1 | 2 | `src/sections/Z106.jsx > section[0]` | The 2 legal routes, /privacy-policy and /terms. |
| `features.any-source` | FEATURES | 1 | 1 | `src/sections/Z10.jsx > section[2]` | The / route only. |
| `features.automation-samples` | FEATURES | 1 | 1 | `src/sections/Z109.jsx > section[6]` | The /solutions/integration-playbooks route only. |
| `features.enterprise-pillars` | FEATURES | 1 | 1 | `src/sections/Z103.jsx > section[2]` | The /enterprise route only. |
| `features.pipeline-steps` | FEATURES | 1 | 1 | `src/sections/Z102.jsx > section[1]` | The /product route only. |
| `features.platform-primitives` | FEATURES | 1 | 1 | `src/sections/Z10.jsx > section[3]` | The / route only. |
| `features.playbook-cta-cards` | FEATURES | 1 | 1 | `src/sections/Z10.jsx > section[4]` | The / route only. |
| `features.use-case-teasers` | FEATURES | 1 | 1 | `src/sections/Z10.jsx > section[5]` | The / route only. |
| `hero.article` | HERO | 1 | 1 | `src/sections/Z1021.jsx > section[0]` | The 1 /blog/<slug> route. |
| `hero.home` | HERO | 1 | 1 | `src/sections/Z10.jsx > section[0]` | The / route only. |
| `index.blog-roll` | INDEX | 1 | 1 | `src/sections/Z105.jsx > section[1]` | The /blog route only. |
| `narrative.article-body` | NARRATIVE | 1 | 1 | `src/sections/Z1021.jsx > section[1]` | The 1 /blog/<slug> route. |
| `proof.compliance-badges` | PROOF | 1 | 1 | `src/sections/Z103.jsx > section[1]` | The /enterprise route only. |
| `proof.story-grid` | PROOF | 1 | 1 | `src/sections/Z104.jsx > section[1]` | The /customers route only. |
| `proof.testimonials` | PROOF | 1 | 1 | `src/sections/Z10.jsx > section[6]` | The / route only. |

**12 shared sections** appear in more than one template and belong in a component library.

**21 single-use sections** appear in exactly one template. Building these
as "reusable" components up front would be speculative — keep them page-local
until a second caller actually appears.

## Templates

### Homepage — `template.home`

1 route · `/` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×11 |
| 2 | HERO | `hero.home` | page-local |
| 3 | NARRATIVE | `narrative.problem-statement` | shared ×4 |
| 4 | FEATURES | `features.any-source` | page-local |
| 5 | FEATURES | `features.platform-primitives` | page-local |
| 6 | FEATURES | `features.playbook-cta-cards` | page-local |
| 7 | FEATURES | `features.use-case-teasers` | page-local |
| 8 | PROOF | `proof.testimonials` | page-local |
| 9 | CTA | `cta.book-demo-band` | shared ×10 |
| 10 | SHELL | `shell.footer` | shared ×11 |
| 11 | SHELL | `shell.consent-banner-root` | shared ×11 |

### Use case — `template.use-case`

6 routes · `/use-cases/sales`, `/use-cases/customer-success`, `/use-cases/product`, `/use-cases/healthcare`, `/use-cases/financial-services`, `/use-cases/education` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×11 |
| 2 | HERO | `hero.use-case` | page-local |
| 3 | NARRATIVE | `narrative.problem-statement` | shared ×4 |
| 4 | NARRATIVE | `narrative.solution-statement` | page-local |
| 5 | FAQ | `faq.accordion` | page-local |
| 6 | CTA | `cta.book-demo-band` | shared ×10 |
| 7 | SHELL | `shell.footer` | shared ×11 |
| 8 | SHELL | `shell.consent-banner-root` | shared ×11 |

### Customer story — `template.customer-story`

5 routes · `/customers/granum`, `/customers/brivity`, `/customers/cariina`, `/customers/curbwaste`, `/customers/bound` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×11 |
| 2 | HERO | `hero.customer-story` | page-local |
| 3 | PROOF | `proof.story-metrics` | page-local |
| 4 | NARRATIVE | `narrative.story-beat` | page-local |
| 5 | CTA | `cta.book-demo-band` | shared ×10 |
| 6 | SHELL | `shell.footer` | shared ×11 |
| 7 | SHELL | `shell.consent-banner-root` | shared ×11 |

### Migration Playbooks — `template.migration-playbooks`

1 route · `/solutions/migration-playbooks` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×11 |
| 2 | HERO | `hero.solution` | shared ×2 |
| 3 | NARRATIVE | `narrative.problem-statement` | shared ×4 |
| 4 | NARRATIVE | `narrative.result-callout` | shared ×2 |
| 5 | FEATURES | `features.capability-grid` | shared ×2 |
| 6 | FEATURES | `features.solution-outcomes` | shared ×2 |
| 7 | FEATURES | `features.solution-anatomy` | shared ×2 |
| 8 | SHELL | `shell.spacer` | shared ×2 |
| 9 | CTA | `cta.book-demo-band` | shared ×10 |
| 10 | SHELL | `shell.footer` | shared ×11 |
| 11 | SHELL | `shell.consent-banner-root` | shared ×11 |

### Integration Playbooks — `template.integration-playbooks`

1 route · `/solutions/integration-playbooks` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×11 |
| 2 | HERO | `hero.solution` | shared ×2 |
| 3 | NARRATIVE | `narrative.problem-statement` | shared ×4 |
| 4 | NARRATIVE | `narrative.result-callout` | shared ×2 |
| 5 | FEATURES | `features.capability-grid` | shared ×2 |
| 6 | FEATURES | `features.solution-outcomes` | shared ×2 |
| 7 | FEATURES | `features.solution-anatomy` | shared ×2 |
| 8 | FEATURES | `features.automation-samples` | page-local |
| 9 | CTA | `cta.book-demo-band` | shared ×10 |
| 10 | SHELL | `shell.footer` | shared ×11 |
| 11 | SHELL | `shell.consent-banner-root` | shared ×11 |

### Product — `template.product`

1 route · `/product` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×11 |
| 2 | HERO | `hero.page-title` | shared ×4 |
| 3 | FEATURES | `features.pipeline-steps` | page-local |
| 4 | CTA | `cta.book-demo-band` | shared ×10 |
| 5 | SHELL | `shell.footer` | shared ×11 |
| 6 | SHELL | `shell.consent-banner-root` | shared ×11 |

### Enterprise — `template.enterprise`

1 route · `/enterprise` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×11 |
| 2 | HERO | `hero.page-title` | shared ×4 |
| 3 | PROOF | `proof.compliance-badges` | page-local |
| 4 | FEATURES | `features.enterprise-pillars` | page-local |
| 5 | CTA | `cta.book-demo-band` | shared ×10 |
| 6 | SHELL | `shell.footer` | shared ×11 |
| 7 | SHELL | `shell.consent-banner-root` | shared ×11 |

### Customer story index — `template.story-index`

1 route · `/customers` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×11 |
| 2 | HERO | `hero.page-title` | shared ×4 |
| 3 | PROOF | `proof.story-grid` | page-local |
| 4 | CTA | `cta.book-demo-band` | shared ×10 |
| 5 | SHELL | `shell.footer` | shared ×11 |
| 6 | SHELL | `shell.consent-banner-root` | shared ×11 |

### Blog index — `template.blog-index`

1 route · `/blog` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×11 |
| 2 | HERO | `hero.page-title` | shared ×4 |
| 3 | INDEX | `index.blog-roll` | page-local |
| 4 | SHELL | `shell.spacer` | shared ×2 |
| 5 | CTA | `cta.book-demo-band` | shared ×10 |
| 6 | SHELL | `shell.footer` | shared ×11 |
| 7 | SHELL | `shell.consent-banner-root` | shared ×11 |

### Article (long-form) — `template.article`

1 route · `/blog/migration-revenue-killer` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×11 |
| 2 | HERO | `hero.article` | page-local |
| 3 | NARRATIVE | `narrative.article-body` | page-local |
| 4 | CTA | `cta.book-demo-band` | shared ×10 |
| 5 | SHELL | `shell.footer` | shared ×11 |
| 6 | SHELL | `shell.consent-banner-root` | shared ×11 |

### Legal document — `template.legal`

2 routes · `/privacy-policy`, `/terms` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×11 |
| 2 | NARRATIVE | `narrative.legal-body` | page-local |
| 3 | SHELL | `shell.footer` | shared ×11 |
| 4 | SHELL | `shell.consent-banner-root` | shared ×11 |

## Section reference

### SHELL

_Site chrome carried across routes: the fixed header, the footer, decorative spacer bands and the cookie-consent root._

**`shell.footer`** — Site footer: four link columns (Product, Solutions, Company, Legal), the arced 'rubie' SVG wordmark and the copyright line.

· All 21 routes. Identical apart from generated SVG arc ids. · appears on 21 routes · implemented by `src/sections/Z10.jsx > footer`

**`shell.header`** — Fixed top header: Rubie wordmark, primary nav (Product, Solutions, Use Cases, Resources) with hover mega-panels, and a Book a Demo button.

· All 21 routes. Byte-identical on every one. · appears on 21 routes · implemented by `src/sections/Z10.jsx > header`

**`shell.spacer`** — A decorative aria-hidden="true" band with no content at all — a bordered gap the layout uses as a rule between sections. Measured copy on both instances is zero words; it must never be given any.

· 2 routes: /blog and /solutions/migration-playbooks. Each sits in its own template now, so template membership and real route count agree. · appears on 2 routes · implemented by `src/sections/Z105.jsx > section[2]`

**`shell.consent-banner-root`** — The c15t cookie-consent banner mount point and its Accept/Reject card. Third-party vendor UI mounted outside <main>, not Rubie design surface.

· All 21 routes. · appears on 21 routes · implemented by `src/sections/C15tUiRootHE9Kz.jsx`

### HERO

_The page-opening block: the h1 and its immediate supporting copy, CTAs and hero visual._

**`hero.article`** — Blog-post masthead: the article h1, byline/date and hero illustration.

· The 1 /blog/<slug> route. · appears on 1 routes · implemented by `src/sections/Z1021.jsx > section[0]`

**`hero.customer-story`** — Customer-story hero: one long outcome-metric h1 ('X cuts Y by Z% with Rubie'), the customer's logo and a back-link to /customers.

· The 5 /customers/<name> routes. · appears on 5 routes · implemented by `src/sections/Z1010.jsx > section[0]`

**`hero.home`** — Homepage hero: h1 'Rip and Replace your Competition', the zero-effort-migrations sub-paragraph, dual CTAs, the Rive product animation and the 58-logo customer plate.

· The / route only. · appears on 1 routes · implemented by `src/sections/Z10.jsx > section[0]`

**`hero.page-title`** — Minimal title-only hero — an h1 and a short standfirst, for pages whose value is the body below rather than the opening pitch.

· 4 routes: /product, /enterprise, /customers and /blog. · appears on 4 routes · implemented by `src/sections/Z102.jsx > section[0]`

**`hero.solution`** — Solutions hero: h1 naming the playbook family, supporting copy, CTA and a large inline animated diagram of the playbook pipeline.

· The 2 /solutions/* routes. · appears on 2 routes · implemented by `src/sections/Z108.jsx > section[0]`

**`hero.use-case`** — Use-case hero: a two-part h1 (a bold claim plus a lighter 'without ...' qualifier), supporting paragraph, CTA and the 54-logo customer plate. Identical structure on all six routes; only copy changes.

· The 6 /use-cases/* routes. · appears on 6 routes · implemented by `src/sections/Z1013.jsx > section[0]`

### PROOF

_Third-party credibility: customer logos, named outcome metrics, testimonials, compliance badges._

**`proof.compliance-badges`** — A row of compliance and security badges (SOC 2 Type II and peers) under a short assurance heading.

· The /enterprise route only. · appears on 1 routes · implemented by `src/sections/Z103.jsx > section[1]`

**`proof.story-grid`** — A grid of customer-story cards linking to each /customers/<name> route, each carrying the customer logo and its headline outcome metric.

· The /customers route only. · appears on 1 routes · implemented by `src/sections/Z104.jsx > section[1]`

**`proof.story-metrics`** — The customer-story metric strip — three named outcome numbers with a caption each (e.g. '3 min / Per account data entry (down from 2+ hrs)'). No heading of its own.

· The 5 /customers/<name> routes. · appears on 5 routes · implemented by `src/sections/Z1010.jsx > section[1]`

**`proof.testimonials`** — 'What our customers are saying' — a grid of quote cards, each with an avatar, a name, a role and the customer's logo.

· The / route only. · appears on 1 routes · implemented by `src/sections/Z10.jsx > section[6]`

### FEATURES

_Explanatory product content — capability grids, stepped walkthroughs, interactive showcases._

**`features.any-source`** — 'Any source. Your platform.' — the source-connector capability block with its animated source-to-target diagram.

· The / route only. · appears on 1 routes · implemented by `src/sections/Z10.jsx > section[2]`

**`features.automation-samples`** — 'A sampling of what Integration Playbooks automate today' — a list of concrete automations shipped.

· The /solutions/integration-playbooks route only. · appears on 1 routes · implemented by `src/sections/Z109.jsx > section[6]`

**`features.capability-grid`** — A heading plus a three-item capability grid with supporting icons — the 'what you get' block.

· The 2 /solutions/* routes. · appears on 2 routes · implemented by `src/sections/Z108.jsx > section[3]`

**`features.enterprise-pillars`** — 'Security & Compliance First' — the enterprise assurance block covering compliance, residency, access control and audit, over a large animated backdrop.

· The /enterprise route only. · appears on 1 routes · implemented by `src/sections/Z103.jsx > section[2]`

**`features.pipeline-steps`** — A numbered walkthrough of the data pipeline ('01 — Authenticate' through Load), one stage per heading with an illustration each.

· The /product route only. · appears on 1 routes · implemented by `src/sections/Z102.jsx > section[1]`

**`features.platform-primitives`** — 'Platform primitives' — an interactive tabbed showcase of the core platform capabilities, with an animated panel per tab.

· The / route only. · appears on 1 routes · implemented by `src/sections/Z10.jsx > section[3]`

**`features.playbook-cta-cards`** — 'Build data playbooks with Rubie' — two linked cards routing to Migration Playbooks and Integration Playbooks.

· The / route only. · appears on 1 routes · implemented by `src/sections/Z10.jsx > section[4]`

**`features.solution-anatomy`** — An interactive stepped anatomy of a Rubie migration — buttons stepping through the pipeline stages.

· The 2 /solutions/* routes. · appears on 2 routes · implemented by `src/sections/Z108.jsx > section[5]`

**`features.solution-outcomes`** — The long outcome-explainer block ('What changes when migrations just work' / 'Engineering-grade infrastructure, no engineering required') with an animated supporting visual.

· The 2 /solutions/* routes. · appears on 2 routes · implemented by `src/sections/Z108.jsx > section[4]`

**`features.use-case-teasers`** — 'How teams are using Rubie today' — a grid teasing the six /use-cases/* routes.

· The / route only. · appears on 1 routes · implemented by `src/sections/Z10.jsx > section[5]`

### NARRATIVE

_Prose-led blocks: problem/solution framings, case-study bodies, article bodies, legal clauses._

**`narrative.article-body`** — The long-form article body — all prose, subheadings, lists, pull-quotes and the sources list, in one section.

· The 1 /blog/<slug> route. · appears on 1 routes · implemented by `src/sections/Z1021.jsx > section[1]`

**`narrative.legal-body`** — The full legal document body — an h1 followed by numbered clauses with nested lists.

· The 2 legal routes, /privacy-policy and /terms. · appears on 2 routes · implemented by `src/sections/Z106.jsx > section[0]`

**`narrative.problem-statement`** — A short, punchy problem framing under the hero — one h2 claim ('Your customers' data is locked up in legacy systems.', 'Onboarding is your bottleneck.') with brief elaborations.

· 9 routes: /, the six /use-cases/* routes and the two /solutions/* routes. · appears on 9 routes · implemented by `src/sections/Z10.jsx > section[1]`

**`narrative.result-callout`** — A kicker-labelled callout ('// The Result //') above one summarising sentence of at most 13 words.

· The 2 /solutions/* routes. · appears on 2 routes · implemented by `src/sections/Z108.jsx > section[2]`

**`narrative.solution-statement`** — The paired answer to narrative.problem-statement — an h2 resolution plus a large supporting animated visual.

· The 6 /use-cases/* routes. · appears on 6 routes · implemented by `src/sections/Z1013.jsx > section[2]`

**`narrative.story-beat`** — The customer-story body — the problem, the solution and the results told as one continuous block under a single h2.

· The 5 /customers/<name> routes. · appears on 5 routes · implemented by `src/sections/Z1010.jsx > section[2]`

### INDEX

_A list of links to other routes._

**`index.blog-roll`** — The blog index listing — a linked card per post with title, excerpt and date.

· The /blog route only. · appears on 1 routes · implemented by `src/sections/Z105.jsx > section[1]`

### FAQ

_A question-and-answer accordion._

**`faq.accordion`** — 'Your questions answered' — a question-and-answer accordion. Byte-identical on all six use-case routes, so the same questions are asked regardless of vertical.

· The 6 /use-cases/* routes. · appears on 6 routes · implemented by `src/sections/Z1013.jsx > section[3]`

### CTA

_A conversion band whose only job is to move the visitor to a demo._

**`cta.book-demo-band`** — Full-bleed dark-navy conversion band: the arced 'rubie' wordmark, the headline 'Your customers are waiting on data that lives behind a login.' and one Book a Demo button.

· 19 routes — all but /privacy-policy and /terms, which end at their legal body. · appears on 19 routes · implemented by `src/sections/Z10.jsx > section[7]`
