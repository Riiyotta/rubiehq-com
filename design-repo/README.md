# rubiehq-com — Design Repo

Machine-validated design system extracted from a live site, structured per the design-repo BUILD-GUIDE.
Status: **design-review-pending** (`productionApproved: false`). The source is a real, live site: see `assets/asset-roles.json`
for what a generator may and may not reproduce.

## Counts

- Sections: 33
- Templates: 11
- Routes: 21
- Primitives: 10
- Components: 5
- Assets: 180
- Foundation tokens: 161
- Semantic tokens: 18
- Rules: 7

## Layout

- `tokens/00-foundation → 10-semantic → 20-component → 30-layout → themes`, and `tokens/llm/` (catalog, policy, allowlist)
- `primitives/`, `components/`, `sections/` (one contract per section type), `templates/templates.json` (structured nodes)
- `compatibility/graph.json` (rules with severity), `assets/asset-roles.json`, `motion/motion-contract.json`
- `schema/` (draft-07 PageSpec schema, example, semantic validator, adversarial tests), `extraction/` (citations, admission)

## What is measured vs inferred

Values (colours, sizes, spacing, radii, widths, word counts, line ranges) are measured. So is the whole
section/template structure as of 0.2.0: every section is a real element in a route's rendered HTML, cited by
file and line range, and every template's node sequence is the collapsed sequence its routes actually produce
(`verify_all.py` check 7 fails if any route of a template disagrees). Section **purposes** and **labels** are
written from that real markup rather than inferred, so `purposeIsInferred` is `false` throughout.

Still heuristic, and worth review before production use: semantic token role **names** (`text.primary`,
`surface.alt`…) and section **categories** — the eight-category split (SHELL/HERO/PROOF/FEATURES/NARRATIVE/
INDEX/FAQ/CTA) is an editorial reading of the site, not a measurement.

Asset **roles** are measured from each file's own path and usage, and the compliance-relevant ones are pinned:
the site's 22 third-party company marks carry `customer-logo` / `must-not-fabricate`, and only Rubie's own two
marks carry `logo` / `must-reuse-exact`. `avatar` / `must-not-fabricate` is defined and pinned but has 0 observed
assets: this capture contains no real-person imagery (the one person-adjacent file is a cityscape testimonial
background, classified `content-image`). A generator must not reproduce any pinned asset — see
`assets/asset-roles.json`, where every reclassified record carries an `evidence.roleReason`.

## Admit this repo

```
python3 extraction/verify_all.py      # files, entryPoints, counts, parity, citations, pinned policies, schema, adversarial suite
python3 extraction/prove_drift.py     # proves each check fails on injected drift
```
