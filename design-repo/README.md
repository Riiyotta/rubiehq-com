# rubiehq-com — Design Repo

Machine-validated design system extracted from a live site, structured per the design-repo BUILD-GUIDE.
Status: **design-review-pending** (`productionApproved: false`). The source is a real, live site: see `assets/asset-roles.json`
for what a generator may and may not reproduce.

## Counts

- Sections: 39
- Templates: 11
- Routes: 21
- Primitives: 10
- Components: 5
- Assets: 187
- Foundation tokens: 161
- Semantic tokens: 18
- Rules: 7

## Layout

- `tokens/00-foundation → 10-semantic → 20-component → 30-layout → themes`, and `tokens/llm/` (catalog, policy, allowlist)
- `primitives/`, `components/`, `sections/` (one contract per section type, closed by `schema/section-contract.schema.json`), `templates/templates.json`
- `compatibility/graph.json` (rules with severity), `assets/asset-roles.json`, `motion/motion-contract.json`, `policy/design-policy.json`
- `schema/`: PageSpec schema, clone-mode example (`example.pagespec.json`), one generation-mode example per template (`examples/`),
  `source-identity.json` (what generation mode must not reproduce), semantic validator, adversarial suite
- `extraction/`: citation ledger + measured heights, admission (`verify_all.py`), drift proof, wrapper gate, and the generators
  (`build_source_map.py`, `sync_contract_layers.py`, `build_source_identity.py`, `build_generation_examples.py`, `policy_hash.py`, `measure_sections.mjs`)

## Modes (PageSpec 0.3.0)

Every PageSpec has a required `mode`:

- `clone` — faithful reconstruction of rubiehq.com; real brand, copy and assets may be reused for fidelity.
- `generation` — a new page for another brand. The semantic validator rejects anything from the source, one named rule per
  category: `GENERATION_MODE_BRAND` (Rubie, rubiehq.com, Nightly Data, Inc.), `_CUSTOMER`, `_PERSON`, `_URL` (source URLs and any
  host that is not `.example` / `.invalid`), `_EMBED` (live inboxes), `_ASSET` (role availability, source file paths), `_SCREENSHOT`,
  `_COPY` (hashed 5-word shingles of the clone's copy), `_CLAIM` (hashed 3-word shingles carrying a number).
  Patterns are generated from `src/` by `extraction/build_source_identity.py` with file:line evidence. Text is normalised first
  (NFKC, zero-width removal, curly quotes, dashes). **Detection is string-based**: a paraphrase is not caught. **No human has
  reviewed the pinned patterns.**

Asset roles carry `availability` (`clone-only` | `generation-safe` | `blocked-for-generation`), `generationSafeSubstitutes` and
`generatedModeGuidance`; availability is pinned in code (`PINNED_AVAILABILITY` in `verify_all.py` and `semantic_validate.py`).
The Rubie logo is `clone-only`; customer logos, avatars, live endpoints and inboxes are `blocked-for-generation`.

## Evidence and what a full clone checks

Citations point at the runnable clone's own tracked source (`src/sections/*.jsx`, `src/pages/*.jsx`). Up to 0.2.0 they pointed at
rendered-HTML snapshots under `recon/`, which `.gitignore` excludes, so a full git clone printed "evidence not shipped" and checked
no citation or asset. Now a full checkout (design-repo/ next to `src/`, `public/`, `package.json`) resolves every citation, re-reads
every contract's `source` range, checks route coverage against `src/routes.js`, reconciles `assets/asset-roles.json` with `public/`
(`inClone` flags; 109 of 187 registry entries ship in the clone, the rest exist only in the original crawl) and re-runs every
generator with `--check`. Only a design-repo copied out alone degrades those checks to warnings.

## Sections are semantic units

The legal body, the article body and the customer-story body were each one whole-document section. They are now decomposed by
real content boundaries: `narrative.legal-header` + one `narrative.legal-clause` per numbered heading; `index.article-toc` + one
`narrative.article-chapter` per `#id` chapter + `narrative.article-sources`; `proof.story-pull-quote` + one `narrative.story-beat`
per Challenge/Solution/Results chapter + `proof.story-company-facts` + `cta.story-email-capture` (the sidebar form is a conversion
block, so it is CTA-classed). Heights were measured at 1440px from the built clone (`vite build` + `vite preview`, headless
Chromium, `extraction/measure_sections.mjs`); the wrapper gate reports 0 errors and 2 warnings (`features.pipeline-steps` holds 58%
of `/product`, `proof.story-grid` 53% of `/customers`; both single semantic units, below the 60% error line). No whitelist entry.
`shell.consent-banner-root` is `retrievalEligible: false`.

## Tokens

A node may carry an optional closed `style` naming token ids only. The validator enforces `TOKEN_UNKNOWN`, `TOKEN_RAW_COLOR`,
`TOKEN_ARBITRARY_SPACING`, `TOKEN_UNSUPPORTED_FONT` (Geist, ui-monospace, system-ui), `TOKEN_THEME_UNSUPPORTED` and
`TOKEN_THEME_COMBINATION` (text-on-surface pairs at WCAG contrast >= 4.5, recomputed from the theme by `verify_all.py`).

## Common policy binding

`category: saas`; `designPolicy` binds `n0-saas-design-constraints-common` v0.1.0 (commonIrVersion 0.5, `hard-and-soft`). The SaaS
call is made from evidence in the clone (book-a-demo sales motion, product login, SOC 2 / HIPAA enterprise page, per-team use cases,
integration playbooks; no consumer app surface, no pricing page) recorded with file:line in `policy/design-policy.json`. It is an
agent attestation, not a human sign-off; `approval.architectureDecisionRecorded` is false. `contentHash` is sha256 over the files
the policy is enforced by and is recomputed by `verify_all.py`.

## What is measured vs inferred

Values (colours, sizes, spacing, radii, widths, word counts, line ranges) are measured. So is the whole
section/template structure as of 0.2.0: every section is a real element in a route's rendered HTML, cited by
file and line range in the clone's JSX, and every template's node sequence is the collapsed sequence its routes actually produce
(`verify_all.py` check 7 fails if any route of a template disagrees). Section **purposes** and **labels** are
written from that real markup rather than inferred, so `purposeIsInferred` is `false` throughout.

Still heuristic, and worth review before production use: semantic token role **names** (`text.primary`,
`surface.alt`…) and section **categories** — the eight-category split (SHELL/HERO/PROOF/FEATURES/NARRATIVE/
INDEX/FAQ/CTA) is an editorial reading of the site, not a measurement.

Asset **roles** are measured from each file's own path and usage, and the compliance-relevant ones are pinned:
the site's 22 third-party company marks carry `customer-logo` / `must-not-fabricate`, and only Rubie's own two
marks carry `logo` / `must-reuse-exact` (clone mode only; `clone-only` availability). `avatar` / `must-not-fabricate` is defined and pinned but has 0 observed
assets: this capture contains no real-person imagery (the one person-adjacent file is a cityscape testimonial
background, classified `content-image`). A generator must not reproduce any pinned asset — see
`assets/asset-roles.json`, where every reclassified record carries an `evidence.roleReason`.

## Admit this repo

```
python3 extraction/verify_all.py                    # needs jsonschema; run from a full checkout to check citations/assets too
python3 extraction/prove_drift.py --scratch DIR     # proves each check fails on injected drift
python3 extraction/wrapper_gate.py                  # height gate alone
# re-measure heights: npx vite build --outDir DIR && npx vite preview --outDir DIR --port PORT
#   NODE_PATH="$(npm root -g)" node design-repo/extraction/measure_sections.mjs --base http://localhost:PORT --write
```

Visual parity of the clone against the live site was **not** re-measured in this revision (no live capture was taken);
the only parity numbers are the clone builder's own (CLONE.md, average 89.7% over 6 routes, below the 80% per-section gate on `/`).
