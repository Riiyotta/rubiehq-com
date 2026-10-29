#!/usr/bin/env python3
"""Admission check for this design repo. Exit 0 = admitted.

  1  required files exist and parse
  2  manifest fields; entryPoints relative, inside design-repo/ (no ../), present
  3  allowlistVersion matches the allowlist (machine-checked version field)
  4  counts recomputed from the files on disk (manifest AND README)
  5  allowlist parity: sections/components/primitives files <-> allowlist, nodeProperties <-> schema
  6  schema parity: template/section/assetRole enums and content definitions match the contracts
  7  templates: every node has a contract; routes assigned exactly once; coverage matches the ledger
  8  constraints + graph recomputed from templates (a rule in prose and in code must agree)
  9  citations: every path:line-line resolves, is in range, and the cited line holds the cited tag.
     The evidence tree is the runnable clone's own tracked source (sourceProject.snapshotFolder =
     "src/", next to design-repo/), so a full git clone of the package checks every citation and asset.
     Only a design-repo copied out ALONE (no src/, no public/, no package.json beside it) degrades to
     a warning; a partial tree, or a declared folder that is missing next to a package, is an error.
     Also: every route src/routes.js serves is in the ledger exactly once (R11).
 10  tokens: every {reference} resolves; theme resolves every semantic token to the recomputed value;
     catalog ids exist; policy categories match catalog keys
 11  assets: closed role vocabulary; PINNED roles hold their exact policy; files exist (warn if no public/)
 12  motion closed to the contract's fields; section patterns inside the contract
 13  no absolute machine paths in any JSON/MD file
 14  schema is valid draft-07; example validates with zero errors; adversarial suite passes
 15  zip hygiene, only if someone creates ../design-repo.zip by hand (the builder does not produce one)
 16  motion budget is one canonical measured value: recomputed from templates+sections, and both
     motion/motion-contract.json and compatibility/graph.json must carry exactly that number

 17  R7 provenance: closed schema/section-contract.schema.json; source {id,tag,file,lines} separate from
     semantic {id,category}; source range re-read from the real file
 18  R8 retrieval: RETRIEVAL_INELIGIBLE pinned here (and in semantic_validate.py), registry/allowlist agree
 19  R3 asset availability: PINNED_AVAILABILITY pinned here (and in semantic_validate.py); substitutes are
     generation-safe; assets reconciled with the clone's public/ (inClone flags, no unregistered file)
 20  R9 wrapper gate (extraction/wrapper_gate.py) over measured sectionHeights at 1440px
 21  R4/R2 examples: one generation example per template, all examples valid; source-identity, examples,
     derived layers and ledger are in sync with their generators (when src/ is present)
 22  tokens: token-policy themeCombinations / supportedFontFamilies recomputed from the token files
 23  common-policy binding: manifest category + designPolicy, policy file present, contentHash matches

Drift-proofing lives in extraction/prove_drift.py (injects each defect into a scratch copy).
"""
import hashlib, importlib.util, json, os, re, subprocess, sys, zipfile

HERE = os.path.dirname(os.path.abspath(__file__))
REPO = os.path.dirname(HERE)
PKG = os.path.dirname(REPO)
MIRROR = PKG  # resolved for real at the top of main(), from measured-values.json's sourceProject.snapshotFolder
errs, warns = [], []
ALONE = False  # set when design-repo/ was copied out on its own (no clone source next to it)
# Pinned generation policies. Kept HERE, independent of assets/asset-roles.json, so that changing a
# role in the registry to a different-but-still-valid policy is caught (membership alone is not enough).
PINNED = {"logo": "must-reuse-exact", "customer-logo": "must-not-fabricate", "avatar": "must-not-fabricate",
          "font": "must-reuse-exact", "live-embed": "must-not-reuse-live-endpoint",
          "founder-contact-email": "must-not-reuse-live-endpoint"}
# Availability pinned in code (same table in schema/semantic_validate.py; verify_all checks the two agree).
PINNED_AVAILABILITY = {
    "logo": "clone-only", "customer-logo": "blocked-for-generation", "avatar": "blocked-for-generation",
    "icon": "generation-safe", "illustration": "generation-safe", "background": "generation-safe", "hero-image": "generation-safe",
    "content-image": "clone-only", "animation": "clone-only", "animation-still": "clone-only", "video": "clone-only", "font": "clone-only",
    "live-embed": "blocked-for-generation", "founder-contact-email": "blocked-for-generation",
    "placeholder-brand-mark": "generation-safe", "user-supplied-asset": "generation-safe", "generated-illustration": "generation-safe",
    "placeholder-screenshot": "generation-safe", "fictional-avatar": "generation-safe", "placeholder-customer-logo": "generation-safe",
    "placeholder-url": "generation-safe", "original-copy": "generation-safe",
}
REQUIRED_GENERATION_SAFE = ["placeholder-brand-mark", "user-supplied-asset", "generated-illustration", "placeholder-screenshot",
                            "fictional-avatar", "placeholder-customer-logo", "placeholder-url", "original-copy"]
# Runtime / utility UI never retrievable as a content example (R8); same pin in semantic_validate.py.
RETRIEVAL_INELIGIBLE = {"shell.consent-banner-root"}
RUNTIME_UI = re.compile(r"consent|cookie|modal|dialog|drawer|popup|pop-up|overlay|preloader|toast|cursor", re.I)
SAAS_POLICY = ("n0-saas-design-constraints-common", "0.1.0")
REQUIRED = ["registry.manifest.json", "README.md", "CHANGELOG.md", "tokens/themes/light.json",
            "tokens/llm/token-catalog.json", "tokens/llm/token-policy.json", "tokens/llm/component-allowlist.json",
            "templates/templates.json", "compatibility/graph.json", "assets/asset-roles.json", "motion/motion-contract.json",
            "schema/pagespec.schema.json", "schema/example.pagespec.json", "schema/semantic_validate.py",
            "schema/tests/adversarial_test.py", "extraction/measured-values.json", "extraction/prove_drift.py",
            "schema/section-contract.schema.json", "schema/source-identity.json", "extraction/wrapper_gate.py",
            "extraction/measure_sections.mjs", "extraction/build_source_map.py", "extraction/build_source_identity.py",
            "extraction/build_generation_examples.py", "extraction/sync_contract_layers.py", "policy/design-policy.json"]
ENTRY_KEYS = ["tokenCatalog", "tokenPolicy", "componentAllowlist", "compatibilityGraph", "assetContract", "motionContract",
              "templates", "pagespecSchema", "examplePageSpec", "semanticValidate", "adversarialSuite", "admission",
              "driftProof", "measuredValues", "defaultTheme", "sectionContractSchema", "sourceIdentity", "wrapperGate",
              "generationExamples", "designPolicy"]


def J(rel):
    with open(os.path.join(REPO, rel), encoding="utf-8") as f:
        return json.load(f)


def files_in(d, ext=".json"):
    p = os.path.join(REPO, d)
    return sorted(f for f in os.listdir(p) if f.endswith(ext)) if os.path.isdir(p) else []


def tokens_in(tier):
    out = {}
    for f in files_in(os.path.join("tokens", tier)):
        out.update(J(os.path.join("tokens", tier, f)).get("tokens", {}))
    return out


def main():
    # 1
    for rel in REQUIRED:
        p = os.path.join(REPO, rel)
        if not os.path.exists(p): errs.append(f"missing: {rel}")
        elif rel.endswith(".json"):
            try: J(rel)
            except Exception as e: errs.append(f"bad json {rel}: {e}")
    for d in ("tokens/00-foundation", "tokens/10-semantic", "tokens/20-component", "tokens/30-layout", "sections", "primitives", "components"):
        if not os.path.isdir(os.path.join(REPO, d)): errs.append(f"missing folder: {d}/")
    if errs: return finish()
    man = J("registry.manifest.json")
    allow = J("tokens/llm/component-allowlist.json")
    schema = J("schema/pagespec.schema.json")
    templates = J("templates/templates.json")["templates"]
    graph = J("compatibility/graph.json")
    assets = J("assets/asset-roles.json")
    ledger = J("extraction/measured-values.json")

    # the evidence tree (rendered HTML snapshots + their asset mirror) is wherever the ledger itself says it is —
    # never guessed from a generic root src/ or public/, which could just as easily be the runnable clone's own
    # source. snapshotFolder is relative to the package root (PKG), e.g. "recon/mirror/src/" or "src/" for an
    # older package that still keeps its evidence at the root. A ledger with no snapshotFolder at all (written by
    # a builder version that predates this field) falls back to the old recon/mirror-or-root heuristic so it is
    # not treated as a hard failure; a ledger that DOES declare one and the folder is missing is a real defect.
    global ALONE
    snap = ledger.get("sourceProject", {}).get("snapshotFolder")
    if not snap:
        errs.append("measured-values.json declares no sourceProject.snapshotFolder (the evidence tree must be named, never guessed)")
        return finish()
    mirror = os.path.normpath(os.path.join(PKG, snap, ".."))
    beside = {k: os.path.exists(os.path.join(PKG, k)) for k in ("src", "public", "package.json")}
    if not any(beside.values()):
        ALONE = True
        warns.append("design-repo/ copied out alone (no src/, public/ or package.json beside it): citations, asset files, route coverage and generator freshness are not checked here; run verify_all.py in a checkout of the package to admit fully")
    elif not all(beside.values()):
        errs.append(f"partial package beside design-repo/: {', '.join(k for k, v in beside.items() if not v)} missing (expected the runnable clone: src/, public/, package.json)")
    elif not os.path.isdir(os.path.join(PKG, snap)):
        errs.append(f"measured-values.json declares sourceProject.snapshotFolder '{snap}' but {snap} does not exist beside design-repo/")
    global MIRROR
    MIRROR = mirror
    secs = {}
    for f in files_in("sections"):
        c = J(f"sections/{f}")
        if c.get("id") + ".json" != f: errs.append(f"sections/{f}: id '{c.get('id')}' does not match its file name")
        secs[c["id"]] = c

    # 2
    for k in ("repositoryId", "status", "productionApproved", "defaultTheme", "schemaValidatedThemes", "allowlistVersion", "versionFieldNote", "counts", "entryPoints"):
        if k not in man: errs.append(f"manifest: missing field {k}")
    eps = man.get("entryPoints", {})
    for k in ENTRY_KEYS:
        if k not in eps: errs.append(f"entryPoints.{k} is not wired in")
    for k, v in eps.items():
        if not isinstance(v, str) or os.path.isabs(v) or v.startswith("..") or "/../" in v or re.match(r"^[A-Za-z]:", v):
            errs.append(f"entryPoints.{k} must be a relative path inside design-repo/, got {v!r}")
        elif not os.path.exists(os.path.join(REPO, v)):
            errs.append(f"entryPoints.{k} points at a missing file: {v}")

    # 3
    if man.get("allowlistVersion") != allow.get("version"):
        errs.append(f"allowlistVersion drift: manifest {man.get('allowlistVersion')!r} vs allowlist {allow.get('version')!r}")

    # 4
    F, S, L = tokens_in("00-foundation"), tokens_in("10-semantic"), tokens_in("30-layout")
    C = {}  # component tokens share prop names across files, so namespace them: button.background
    for f in files_in("tokens/20-component"):
        d = J(f"tokens/20-component/{f}")
        C.update({f"{d['component']}.{k}": v for k, v in d.get("tokens", {}).items()})
    comp_tokens = len(C)
    actual = {"sections": len(secs), "templates": len(templates), "routes": sum(t["routeCount"] for t in templates),
              "primitives": len(files_in("primitives")), "components": len(files_in("components")), "assets": len(assets.get("assets", [])),
              "themes": len(files_in("tokens/themes")), "rules": len(graph.get("rules", [])),
              "tokens": {"foundation": len(F), "semantic": len(S), "component": comp_tokens, "layout": len(L)}}
    mc = man.get("counts", {})
    for k, v in actual.items():
        if mc.get(k) != v: errs.append(f"manifest counts.{k} = {mc.get(k)} but the files give {v}")
    readme = open(os.path.join(REPO, "README.md"), encoding="utf-8").read()
    for label, v in [("Sections", actual["sections"]), ("Templates", actual["templates"]), ("Routes", actual["routes"]),
                     ("Primitives", actual["primitives"]), ("Components", actual["components"]), ("Assets", actual["assets"]),
                     ("Foundation tokens", len(F)), ("Semantic tokens", len(S)), ("Rules", actual["rules"])]:
        m = re.search(rf"^- {label}: (\d+)$", readme, re.M)
        if not m or int(m.group(1)) != v: errs.append(f"README count '{label}' is {m.group(1) if m else 'missing'} but the files give {v}")

    # 5
    for key, found in [("sections", sorted(secs)), ("primitives", [f[:-5] for f in files_in("primitives")]), ("components", [f[:-5] for f in files_in("components")])]:
        a = set(allow.get(key, []))
        for x in sorted(a - set(found)): errs.append(f"allowlist parity: '{x}' in allowlist.{key} has no contract file")
        for x in sorted(set(found) - a): errs.append(f"allowlist parity: {key}/{x}.json has no allowlist entry")
    node_props = set(schema["definitions"]["node"]["properties"])
    if set(allow.get("nodeProperties", [])) != node_props:
        errs.append(f"allowlist.nodeProperties {sorted(allow.get('nodeProperties', []))} != schema node properties {sorted(node_props)}")
    for sid, c in secs.items():
        if sorted(allow.get("contentFields", {}).get(sid, [])) != sorted(c["content"]["fields"]):
            errs.append(f"allowlist.contentFields['{sid}'] differs from sections/{sid}.json")

    # 6
    if sorted(schema["properties"]["template"]["enum"]) != sorted(t["id"] for t in templates): errs.append("schema template enum differs from templates.json")
    if sorted(schema["definitions"]["node"]["properties"]["type"]["enum"]) != sorted(secs): errs.append("schema node type enum differs from sections/")
    if sorted(schema["definitions"]["assetRole"]["enum"]) != sorted(assets["roles"]): errs.append("schema assetRole enum differs from assets/asset-roles.json roles")
    for sid, c in secs.items():
        d = schema["definitions"].get(f"content.{sid}")
        if not d: errs.append(f"schema has no content definition for {sid}"); continue
        if d.get("additionalProperties") is not False: errs.append(f"schema content.{sid} is not closed (additionalProperties must be false)")
        if sorted(d["properties"]) != sorted(c["content"]["fields"]): errs.append(f"schema content.{sid} fields differ from the section contract")

    # 7
    seen = {}
    ledger_routes = [r["route"] for r in ledger["routes"]]
    for t in templates:
        for n in t["nodes"]:
            if n["section"] not in secs: errs.append(f"template {t['id']} node '{n['section']}' has no section contract")
            for k in ("section", "required", "repeatable"):
                if k not in n: errs.append(f"template {t['id']} node is missing '{k}' (nodes must be structured objects)")
    for r in ledger["routes"]:
        if r["route"] in seen: errs.append(f"route {r['route']} assigned twice")
        seen[r["route"]] = r["template"]
        if r["template"] not in {t["id"] for t in templates}: errs.append(f"route {r['route']} maps to unknown template {r['template']}")
    if sum(t["routeCount"] for t in templates) != len(ledger_routes): errs.append("sum of template routeCount differs from the measured route list")
    for t in templates:
        n = sum(1 for r in ledger["routes"] if r["template"] == t["id"])
        if n != t["routeCount"]: errs.append(f"template {t['id']}: routeCount {t['routeCount']} but {n} measured routes map to it")
        for r in t.get("routes", []):
            if seen.get(r) != t["id"]: errs.append(f"template {t['id']} lists route {r} that the ledger maps elsewhere")
        seq = [n["section"] for n in t["nodes"]]
        for r in ledger["routes"]:
            if r["template"] == t["id"]:
                ids = [s["id"] for s in r["sections"]]
                collapsed = [x for i, x in enumerate(ids) if i == 0 or ids[i - 1] != x]
                if collapsed != seq: errs.append(f"route {r['route']}: measured section sequence differs from template {t['id']}"); break

    # 8
    for sid, c in secs.items():
        tm = [t for t in templates if any(n["section"] == sid for n in t["nodes"])]
        mx = max((sum((n.get("maxCount", 1) if n["repeatable"] else 1) for n in t["nodes"] if n["section"] == sid) for t in tm), default=0)
        cons = c["constraints"]
        if (cons.get("onePerPage") and mx != 1) or (not cons.get("onePerPage") and cons.get("maxPerPage") != mx):
            errs.append(f"sections/{sid}.json constraints disagree with templates (observed max per page {mx})")
        first = c["category"] == "SHELL" and tm and all(t["nodes"][0]["section"] == sid for t in tm)
        last = c["category"] == "SHELL" and tm and all(t["nodes"][-1]["section"] == sid for t in tm)
        if bool(cons.get("mustBeFirst")) != bool(first): errs.append(f"sections/{sid}.json mustBeFirst disagrees with templates")
        if bool(cons.get("mustBeLast")) != bool(last): errs.append(f"sections/{sid}.json mustBeLast disagrees with templates")
    rules = {r["id"]: r for r in graph["rules"]}
    sv = load_validator()
    for r in graph["rules"]:
        if r.get("severity") not in ("error", "warn"): errs.append(f"graph rule {r['id']} has no valid severity")
        if r.get("kind") not in sv.RULE_KINDS: errs.append(f"graph rule {r['id']} kind '{r.get('kind')}' is not implemented by semantic_validate.py")
    lim = rules.get("SECTION_PER_PAGE_LIMITS", {}).get("limits", {})
    for sid, c in secs.items():
        want = 1 if c["constraints"].get("onePerPage") else c["constraints"].get("maxPerPage")
        if lim.get(sid) != want: errs.append(f"graph SECTION_PER_PAGE_LIMITS['{sid}'] = {lim.get(sid)} but the contract says {want}")
    for rid, key in (("SHELL_MUST_BE_FIRST", "mustBeFirst"), ("SHELL_MUST_BE_LAST", "mustBeLast"), ("NO_CONSECUTIVE_SAME_SECTION", "noConsecutive")):
        if sorted(rules.get(rid, {}).get("sections", [])) != sorted(s for s, c in secs.items() if c["constraints"].get(key)):
            errs.append(f"graph {rid} disagrees with the section contracts' {key}")
    # a repeatable node (consecutive duplicates collapsed by the model into one {repeatable, maxCount}) represents
    # maxCount instances of that section, not one — a template with hero.main, hero.main collapses to a single
    # node but still puts two HERO sections on the page, so it must count as 2 here too, not 1.
    hero_ex = sorted(t["id"] for t in templates if sum((n.get("maxCount") or 1) if n.get("repeatable") else 1 for n in t["nodes"] if secs.get(n["section"], {}).get("category") == "HERO") > 1)
    if sorted(rules.get("ONE_HERO_PER_PAGE", {}).get("exceptions", [])) != hero_ex:
        errs.append(f"graph ONE_HERO_PER_PAGE exceptions {rules.get('ONE_HERO_PER_PAGE', {}).get('exceptions')} but templates give {hero_ex}")

    # 9
    src = os.path.join(MIRROR, "src")
    ledger_at = {}  # "file:start-end" -> ledger entry (the ONE element that range belongs to)
    for r in ledger["routes"]:
        for s_ in r["sections"]:
            if s_.get("lines"):
                f_ = s_.get("file", r["file"])
                ledger_at[f"{f_}:{s_['lines'][0]}-{s_['lines'][1]}"] = dict(s_, file=f_)
    for sid, c in secs.items():  # a contract may only cite ranges the ledger attributes to THIS section
        for cite in c["evidence"].get("measuredFrom", []):
            e = ledger_at.get(cite)
            if not e: errs.append(f"citation {cite} in sections/{sid}.json is not a measured section range")
            elif e["id"] != sid: errs.append(f"citation {cite} in sections/{sid}.json points at '{e['id']}', not '{sid}'")
    if ALONE:
        warns.append(f"{len(ledger_at)} citations not resolved against files (design-repo/ shipped alone)")
    elif os.path.isdir(src):
        rj = os.path.join(src, "routes.js")
        served = re.findall(r'path:\s*"([^"]+)"', open(rj, encoding="utf-8").read()) if os.path.isfile(rj) else None
        if served is None: errs.append("src/routes.js not found: cannot enumerate the routes the clone serves")
        else:
            for x in sorted(set(served) - set(ledger_routes)): errs.append(f"route coverage: src/routes.js serves {x} but no template maps it")
            for x in sorted(set(ledger_routes) - set(served)): errs.append(f"route coverage: the ledger maps {x} but src/routes.js does not serve it")
            for x in sorted({x for x in served if served.count(x) > 1}): errs.append(f"route coverage: src/routes.js declares {x} twice")
        cache = {}
        for cite, e in ledger_at.items():
            m = re.match(r"^(.+):(\d+)-(\d+)$", cite)
            p, a, b = os.path.join(MIRROR, m.group(1)), int(m.group(2)), int(m.group(3))
            if p not in cache:
                cache[p] = open(p, encoding="utf-8", errors="ignore", newline="").read().split("\n") if os.path.isfile(p) else None
            lines = cache[p]
            if lines is None: errs.append(f"citation {cite}: file does not exist"); continue
            if not (1 <= a <= b <= len(lines)): errs.append(f"citation {cite}: range exceeds the file ({len(lines)} lines)"); continue
            line = lines[a - 1]
            if f"<{e['tag']}" not in line: errs.append(f"citation {cite}: line {a} does not contain the cited <{e['tag']}> element")
            elif e.get("anchor") and e["anchor"] not in line: errs.append(f"citation {cite}: line {a} does not contain the cited element's {e['anchor']!r}")

    # 10
    known = set(F) | set(S) | set(L) | set(C)
    def refs(v):
        if isinstance(v, dict): return [x for vv in v.values() for x in refs(vv)]
        return re.findall(r"^\{(.+)\}$", v) if isinstance(v, str) else []
    for tier, toks in (("10-semantic", S), ("20-component", C), ("30-layout", L)):
        for tid, t in toks.items():
            for ref in refs(t.get("$value")):
                if ref not in known: errs.append(f"tokens/{tier}: {tid} references unknown token {{{ref}}}")
    allvals = {k: v.get("$value") for d in (F, S, L) for k, v in d.items()}
    def resolve(v, depth=0):
        if isinstance(v, dict): return {k: resolve(x, depth) for k, x in v.items()}
        m = re.match(r"^\{(.+)\}$", v) if isinstance(v, str) else None
        return resolve(allvals.get(m.group(1), v), depth + 1) if m and depth < 5 else v
    theme = J("tokens/themes/light.json")["resolves"]
    for sid, t in S.items():
        if sid not in theme: errs.append(f"theme light does not resolve semantic token {sid}")
        elif resolve(t["$value"]) != theme[sid]: errs.append(f"theme light: {sid} resolves to {theme[sid]!r} but the tokens give {resolve(t['$value'])!r}")
    for sid in theme:
        if sid not in S: errs.append(f"theme light resolves unknown token {sid}")
    cat = J("tokens/llm/token-catalog.json")["categories"]
    comp_ids = set(C)
    for k, ids in cat.items():
        for i in ids:
            if i not in S and i not in L and i not in comp_ids: errs.append(f"token-catalog.{k}: '{i}' is not a real token")
    pol = J("tokens/llm/token-policy.json")
    if sorted(pol.get("rawValueRestrictions", {})) != sorted(cat): errs.append(f"token-policy rawValueRestrictions keys {sorted(pol.get('rawValueRestrictions', {}))} do not match catalog categories {sorted(cat)}")

    # 11
    roles = assets["roles"]; policies = set(assets["generationPolicies"])
    for r, v in roles.items():
        if v["generationPolicy"] not in policies: errs.append(f"asset role {r}: policy '{v['generationPolicy']}' is not in generationPolicies")
    for r, want in PINNED.items():
        if r not in roles: errs.append(f"pinned asset role '{r}' is missing from the registry")
        elif roles[r]["generationPolicy"] != want or not roles[r].get("pinned"): errs.append(f"pinned asset role '{r}' must be '{want}' (pinned), found '{roles[r]['generationPolicy']}'")
    pub = os.path.join(PKG, "public")
    # Some asset entries are not a file under public/ at all (e.g. a mailto: contact address) — real
    # evidence worth a pinned contract, but nothing to resolve on disk.
    is_virtual = lambda a: ":" in a["path"].split("/")[0] and not re.match(r"^[A-Za-z]:\\", a["path"])
    for a in assets["assets"]:
        if a["role"] not in roles: errs.append(f"asset {a['path']}: role '{a['role']}' is not in the closed role set")
    if os.path.isdir(pub) and not ALONE:
        on_disk = {os.path.relpath(os.path.join(rt, f), pub) for rt, _, fs in os.walk(pub) for f in fs}
        for a in assets["assets"]:
            if "inClone" not in a: errs.append(f"asset {a['path']}: no inClone flag (reconcile the registry against the clone's public/)"); continue
            if is_virtual(a):
                if a["inClone"]: errs.append(f"asset {a['path']}: a virtual (non-file) asset cannot be inClone")
                continue
            if a["inClone"] and a["path"] not in on_disk: errs.append(f"asset missing on disk: public/{a['path']} (registry says inClone)")
            if not a["inClone"] and a["path"] in on_disk: errs.append(f"asset public/{a['path']} is in the clone but the registry says inClone=false")
        for x in sorted(on_disk - {a["path"] for a in assets["assets"]}): errs.append(f"asset public/{x} ships in the clone but has no registry entry/role")
        print(f"  assets: {sum(1 for a in assets['assets'] if a.get('inClone'))} registry entries resolved under public/, {len(on_disk)} clone files all registered")
    else:
        warns.append("asset files not checked (design-repo/ shipped alone)")
    for sid, c in secs.items():
        for r in c.get("assetRoles", []):
            if r not in roles: errs.append(f"sections/{sid}.json uses unknown asset role '{r}'")

    # 12
    mot = schema["definitions"]["motion"]; mc_ = J("motion/motion-contract.json")
    if mot.get("additionalProperties") is not False: errs.append("schema motion object is not closed")
    if sorted(mot["properties"]) != sorted(mc_["closedFields"]): errs.append("schema motion fields differ from motion-contract closedFields")
    if sorted(mot["properties"]["pattern"]["enum"]) != sorted(mc_["patterns"]): errs.append("schema motion patterns differ from motion-contract patterns")
    for sid, c in secs.items():
        for p in c["motion"]["allowedPatterns"]:
            if p not in mc_["patterns"]: errs.append(f"sections/{sid}.json motion pattern '{p}' is not in the motion contract")

    # 13  machine paths: every JSON string VALUE that starts with one (site routes like "/home/about" are not paths)
    # machine-path prefixes, assembled from parts so this file itself never contains one
    roots = ["/" + x + "/" for x in ("Us" + "ers", "pri" + "vate", "var/fol" + "ders", "t" + "mp")]
    alt = "|".join(re.escape(x) for x in roots)
    leak = re.compile(r"^(" + alt + r"|/home/[^/]+/|[A-Za-z]:\\\\)")
    md_leak = re.compile(r"(?:^|[\s`(\"'])(" + alt + r"|/home/[^/\s]+/|[A-Za-z]:\\\\)", re.M)
    ROUTE_KEYS = {"route", "routes", "sampleRoute", "routePattern"}
    def walk(v, key=None):
        if isinstance(v, dict):
            for k, x in v.items(): yield from walk(x, k)
        elif isinstance(v, list):
            for x in v: yield from walk(x, key)
        elif isinstance(v, str) and key not in ROUTE_KEYS:
            m = leak.match(v)
            if m: yield m.group(1)
    for root, _, fs in os.walk(REPO):
        for f in fs:
            p = os.path.join(root, f); rel = os.path.relpath(p, REPO)
            if f.endswith(".json"):
                hit = next(walk(json.load(open(p, encoding="utf-8"))), None)
                if hit: errs.append(f"absolute path in {rel}: {hit}")
            elif f.endswith(".md"):
                m = md_leak.search(open(p, encoding="utf-8", errors="ignore").read())
                if m: errs.append(f"absolute path in {rel}: {m.group(1)}")
            elif f.endswith((".py", ".mjs", ".js")):
                code_ = open(p, encoding="utf-8").read()
                if re.search(r"^(REPO|ROOT|HERE)\s*=\s*['\"]/", code_, re.M): errs.append(f"hard-coded root path in {rel}")
                m = re.search(alt, code_)
                if m: errs.append(f"absolute path in {rel}: {m.group(0)}")

    # 14
    from jsonschema import Draft7Validator
    try: Draft7Validator.check_schema(schema)
    except Exception as e: errs.append(f"pagespec.schema.json is not valid draft-07: {e}")
    e1, w1 = sv.check(J("schema/example.pagespec.json"))
    for e in e1: errs.append(f"example.pagespec.json: {e}")
    if os.environ.get("VERIFY_SKIP_ADVERSARIAL") != "1":  # prove_drift.py sets this: its injections target the checks above
        r = subprocess.run([sys.executable, os.path.join(REPO, "schema/tests/adversarial_test.py")], capture_output=True, text=True)
        last = (r.stdout.strip().splitlines() or ["(no output)"])[-1]
        if r.returncode: errs.append("adversarial suite failed:\n      " + (r.stdout + r.stderr).strip().replace("\n", "\n      "))
        else: print("  " + last)

    # 15
    z = os.path.join(PKG, "design-repo.zip")
    if os.path.isfile(z):
        names = zipfile.ZipFile(z).namelist()
        junk = [n for n in names if "__MACOSX" in n or n.endswith(".DS_Store")]
        if junk: errs.append(f"design-repo.zip contains {len(junk)} __MACOSX/.DS_Store entries")
        zt = os.path.getmtime(z)
        newer = [os.path.relpath(os.path.join(rt, f), REPO) for rt, _, fs in os.walk(REPO) for f in fs if os.path.getmtime(os.path.join(rt, f)) > zt + 1 and "__pycache__" not in rt]
        if newer: errs.append(f"design-repo.zip is stale: {len(newer)} file(s) changed after it was built (e.g. {newer[0]})")

    # 16  motion budget: one canonical measured value, recomputed then cross-checked in both contracts
    sec_motion = {}
    for f in files_in("sections"):
        d = J(os.path.join("sections", f))
        for sec in (d if isinstance(d, list) else [d]):
            if isinstance(sec, dict) and sec.get("id"):
                pats = [p for p in (sec.get("motion", {}).get("allowedPatterns") or []) if p != "none"]
                sec_motion[sec["id"]] = bool(pats)
    tdoc = J("templates/templates.json")
    tl = tdoc if isinstance(tdoc, list) else tdoc.get("templates", [])
    per_page, missing = {}, set()
    for tpl in tl:
        n = 0
        for node in tpl.get("nodes", []):
            sid = node.get("section")
            if sid not in sec_motion: missing.add(sid)
            elif sec_motion[sid]: n += 1
        per_page[tpl.get("id", "?")] = n
    if missing:
        errs.append(f"motion budget: {len(missing)} template node(s) reference an unknown section (e.g. {sorted(missing)[0]})")
    elif per_page:
        measured = max(per_page.values())
        attained = [k for k, v in per_page.items() if v == measured]
        mc = J("motion/motion-contract.json").get("budget", {}).get("maxAnimatedSectionsPerPage")
        gr = [r for r in J("compatibility/graph.json").get("rules", []) if r.get("id") == "MOTION_BUDGET"]
        gmax = gr[0].get("max") if gr else None
        if not gr:
            errs.append("motion budget: compatibility/graph.json has no MOTION_BUDGET rule")
        if mc != measured or gmax != measured:
            errs.append(
                f"motion budget disagrees with the measurement (recomputed {measured} from templates+sections, "
                f"attained by {attained[0]}): motion-contract.json says {mc}, graph.json says {gmax}. "
                f"All three must be the same number.")
        else:
            print(f"  motion budget: {measured} animated sections/page (recomputed; {attained[0]}) — both contracts agree")

    # 17  R7 provenance: closed contract schema + source/semantic split, source range re-read
    from jsonschema import Draft7Validator as _D7
    csv_ = _D7(J("schema/section-contract.schema.json"))
    for sid, c in secs.items():
        for e in csv_.iter_errors(c): errs.append(f"sections/{sid}.json violates section-contract.schema.json: {'/'.join(map(str, e.absolute_path)) or '(root)'}: {e.message[:160]}")
        so, se = c.get("source", {}), c.get("semantic", {})
        if se.get("id") != sid: errs.append(f"sections/{sid}.json semantic.id must equal the contract id")
        if se.get("category") != c.get("category"): errs.append(f"sections/{sid}.json semantic.category differs from category")
        if so.get("id") == sid: errs.append(f"sections/{sid}.json source.id must not equal the semantic id (provenance is not taxonomy)")
        cite = f"{so.get('file')}:{(so.get('lines') or [0, 0])[0]}-{(so.get('lines') or [0, 0])[-1]}"
        if cite not in c["evidence"].get("measuredFrom", []): errs.append(f"sections/{sid}.json source range {cite} is not one of its measuredFrom citations")
        elif not ALONE:
            p_ = os.path.join(PKG, so["file"])
            L_ = open(p_, encoding="utf-8").read().split("\n") if os.path.isfile(p_) else []
            if not (1 <= so["lines"][0] <= so["lines"][1] <= len(L_)): errs.append(f"sections/{sid}.json source range {cite} is outside {so['file']}")
            elif f"<{so.get('tag')}" not in L_[so["lines"][0] - 1]: errs.append(f"sections/{sid}.json source: line {so['lines'][0]} of {so['file']} has no <{so.get('tag')}>")

    # 18  R8 retrieval eligibility pinned in code
    for sid, c in secs.items():
        want = sid not in RETRIEVAL_INELIGIBLE
        if c.get("retrievalEligible") is not want: errs.append(f"retrieval pin: sections/{sid}.json retrievalEligible={c.get('retrievalEligible')!r}, pinned {want}")
        if want and RUNTIME_UI.search(sid + " " + c.get("label", "") + " " + c.get("purpose", "")[:60]): errs.append(f"retrieval pin: {sid} looks like runtime UI but is not in RETRIEVAL_INELIGIBLE")
    for sid in RETRIEVAL_INELIGIBLE:
        if sid not in secs: errs.append(f"retrieval pin: {sid} has no contract")
    if sorted(allow.get("retrievalIneligible", [])) != sorted(RETRIEVAL_INELIGIBLE): errs.append(f"allowlist.retrievalIneligible {allow.get('retrievalIneligible')} differs from the code pin {sorted(RETRIEVAL_INELIGIBLE)}")
    if set(sv.RETRIEVAL_INELIGIBLE) != RETRIEVAL_INELIGIBLE: errs.append("RETRIEVAL_INELIGIBLE differs between verify_all.py and semantic_validate.py")

    # 19  R3 availability pinned in code
    if sv.PINNED_AVAILABILITY != PINNED_AVAILABILITY: errs.append("PINNED_AVAILABILITY differs between verify_all.py and semantic_validate.py")
    av_vals = {"clone-only", "generation-safe", "blocked-for-generation"}
    for r, v in roles.items():
        if v.get("availability") not in av_vals: errs.append(f"asset role {r}: availability {v.get('availability')!r} is not one of {sorted(av_vals)}")
        if PINNED_AVAILABILITY.get(r) != v.get("availability"): errs.append(f"PINNED_AVAILABILITY: asset role '{r}' is '{v.get('availability')}' in the registry, pinned '{PINNED_AVAILABILITY.get(r)}'")
        if len(v.get("generatedModeGuidance", "")) < 30: errs.append(f"asset role {r}: generatedModeGuidance missing or shorter than 30 characters")
        subs = v.get("generationSafeSubstitutes")
        if not isinstance(subs, list): errs.append(f"asset role {r}: no generationSafeSubstitutes list")
        elif v.get("availability") != "generation-safe" and not subs: errs.append(f"asset role {r} is {v.get('availability')} but names no generationSafeSubstitutes")
        else:
            for x in subs:
                if roles.get(x, {}).get("availability") != "generation-safe": errs.append(f"asset role {r}: substitute '{x}' is not a generation-safe role")
        if v.get("availability") == "generation-safe" and v.get("generationPolicy") == "must-reuse-exact": errs.append(f"asset role {r}: a must-reuse-exact role cannot be generation-safe")
    for r in PINNED_AVAILABILITY:
        if r not in roles: errs.append(f"PINNED_AVAILABILITY names '{r}' but the registry has no such role")
    for r in REQUIRED_GENERATION_SAFE:
        if PINNED_AVAILABILITY.get(r) != "generation-safe": errs.append(f"required generation-safe role '{r}' is not pinned generation-safe")
    for sid, c in secs.items():
        want = sorted({x for r in c.get("assetRoles", []) for x in ([r] if roles.get(r, {}).get("availability") == "generation-safe" else roles.get(r, {}).get("generationSafeSubstitutes", []))})
        if sorted(c.get("generatedAssetRoles", [])) != want: errs.append(f"sections/{sid}.json generatedAssetRoles {c.get('generatedAssetRoles')} != derived {want}")

    # 20  R9 wrapper gate over measured heights
    wg = importlib.util.spec_from_file_location("wrapper_gate", os.path.join(HERE, "wrapper_gate.py"))
    wgm = importlib.util.module_from_spec(wg); wg.loader.exec_module(wgm)
    if (wgm.HERO_WARN_PX, wgm.HERO_ERROR_PX, wgm.SHARE_WARN, wgm.SHARE_ERROR) != (1800, 3000, 0.50, 0.60):
        errs.append("wrapper gate thresholds drifted from the pinned 1800/3000px and 50%/60%")
    ge, gw = wgm.check(REPO)
    errs.extend(ge); warns.extend(gw)
    if not ge: print(f"  wrapper gate: {sum(len(v['sections']) for v in ledger.get('sectionHeights', {}).get('routes', {}).values())} measured sections at 1440px, 0 errors, {len(gw)} warning(s)")

    # 21  examples + generator freshness
    exdir = os.path.join(REPO, "schema", "examples")
    exs = sorted(f for f in os.listdir(exdir) if f.endswith(".json")) if os.path.isdir(exdir) else []
    gen_t = set()
    for f in exs:
        ex = J(f"schema/examples/{f}")
        ee, _ = sv.check(ex)
        for e in ee: errs.append(f"schema/examples/{f}: {e}")
        if ex.get("mode") == "generation": gen_t.add(ex.get("template"))
    for t in templates:
        if t["id"] not in gen_t: errs.append(f"no mode=generation example PageSpec for {t['id']} (schema/examples/)")
    if J("schema/example.pagespec.json").get("mode") != "clone": errs.append("schema/example.pagespec.json must be the clone-mode control")
    probe = "“Rubie’s​ data — moves”"
    import importlib as _il
    bs = importlib.util.spec_from_file_location("bsi", os.path.join(HERE, "build_source_identity.py")); bsm = importlib.util.module_from_spec(bs); bs.loader.exec_module(bsm)
    if bsm.normalize(probe) != sv.normalize(probe) or bsm.words(probe) != sv.norm_words(probe):
        errs.append("text normalisation differs between build_source_identity.py and semantic_validate.py")
    if not ALONE and os.environ.get("VERIFY_SKIP_FRESHNESS") != "1":
        for script in ("build_source_map.py", "sync_contract_layers.py", "build_source_identity.py", "build_generation_examples.py"):
            r_ = subprocess.run([sys.executable, os.path.join(HERE, script), "--check"], capture_output=True, text=True)
            if r_.returncode: errs.append(f"{script} --check: generated files are stale: {(r_.stdout + r_.stderr).strip()[-300:]}")

    # 22  token policy recomputed from the token files
    def _lum(c):
        r_, g_, b_ = [int(x) / 255 for x in re.findall(r"\d+", c)[:3]]
        f_ = lambda v: v / 12.92 if v <= 0.03928 else ((v + 0.055) / 1.055) ** 2.4
        return 0.2126 * f_(r_) + 0.7152 * f_(g_) + 0.0722 * f_(b_)
    def _cr(a_, b_):
        x, y = sorted([_lum(a_), _lum(b_)], reverse=True); return (x + 0.05) / (y + 0.05)
    combos = {s_: sorted(t for t in theme if t.startswith("text.") and _cr(theme[s_], theme[t]) >= 4.5) for s_ in sorted(theme) if s_.startswith("surface.")}
    if pol.get("themeCombinations", {}).get("light", {}).get("textOnSurface") != combos: errs.append(f"token-policy themeCombinations.light.textOnSurface differs from the contrast recomputed from tokens/themes/light.json: {combos}")
    fams = [v["$value"] for k, v in F.items() if k.startswith("fontFamily.")]
    if pol.get("supportedFontFamilies") != fams: errs.append(f"token-policy supportedFontFamilies {pol.get('supportedFontFamilies')} != tokens/00-foundation fontFamily values {fams}")
    if sorted(pol.get("styleFields", {})) != sorted(schema["definitions"]["style"]["properties"]): errs.append("token-policy styleFields differ from the schema style properties")
    for k, fs in pol.get("styleFields", {}).items():
        if fs["category"] != "fontFamily" and fs["category"] not in cat: errs.append(f"token-policy styleFields.{k} names catalog category '{fs['category']}' that does not exist")
    if "mode" not in schema.get("required", []) or sorted(schema["properties"]["mode"].get("enum", [])) != ["clone", "generation"]: errs.append("schema: mode must be required with enum [clone, generation]")

    # 23  common-policy / category binding
    dp = man.get("designPolicy", {})
    for k in ("ref", "policyId", "policyVersion", "commonIrVersion", "enforcementMode", "contentHash"):
        if k not in dp: errs.append(f"manifest designPolicy.{k} missing")
    if not man.get("category"): errs.append("manifest category missing")
    pf = os.path.join(REPO, dp.get("ref", "policy/design-policy.json"))
    if not os.path.isfile(pf): errs.append(f"designPolicy.ref {dp.get('ref')} does not exist")
    else:
        pd = json.load(open(pf, encoding="utf-8"))
        saas = pd.get("classification", {}).get("isSaaS")
        if (dp.get("policyId"), dp.get("policyVersion")) != (pd.get("policyId"), pd.get("policyVersion")): errs.append("manifest designPolicy policyId/policyVersion differ from the policy file")
        if dp.get("commonIrVersion") != "0.5" or pd.get("commonIrVersion") != "0.5": errs.append("designPolicy commonIrVersion must be 0.5")
        if dp.get("enforcementMode") != "hard-and-soft": errs.append("designPolicy enforcementMode must be hard-and-soft")
        if saas is True and (dp.get("policyId"), dp.get("policyVersion")) != SAAS_POLICY: errs.append(f"a SaaS repo must bind {SAAS_POLICY[0]} v{SAAS_POLICY[1]}")
        if saas is False and dp.get("policyId") == SAAS_POLICY[0]: errs.append("a non-SaaS repo must not bind the SaaS common policy")
        if saas is True and man.get("category") != "saas": errs.append("policy classification isSaaS=true but manifest category is not 'saas'")
        h = hashlib.sha256()
        for rel in sorted(pd.get("enforcedBy", [])):
            fp = os.path.join(REPO, rel)
            if not os.path.isfile(fp): errs.append(f"policy enforcedBy {rel} does not exist"); continue
            h.update(rel.encode() + b"\0" + open(fp, "rb").read() + b"\0")
        if dp.get("contentHash") != "sha256:" + h.hexdigest(): errs.append(f"designPolicy.contentHash is stale: files give sha256:{h.hexdigest()}")
        if not ALONE:
            for ev in pd.get("classificationEvidence", []):
                fp = os.path.join(PKG, ev["file"])
                L_ = open(fp, encoding="utf-8").read().split("\n") if os.path.isfile(fp) else []
                if not (0 < ev["line"] <= len(L_)) or ev["needle"] not in L_[ev["line"] - 1]: errs.append(f"policy evidence {ev['file']}:{ev['line']} does not contain {ev['needle']!r}")
    return finish()


def load_validator():
    spec = importlib.util.spec_from_file_location("semantic_validate", os.path.join(REPO, "schema/semantic_validate.py"))
    m = importlib.util.module_from_spec(spec); spec.loader.exec_module(m)
    return m


def finish():
    for w in warns: print("WARN:", w)
    if errs:
        print("REPO NOT ADMITTED:"); [print("  -", e) for e in errs]; sys.exit(1)
    if ALONE:
        print("REPO OK (design-repo copied out alone: citations, asset files, route coverage and generator freshness not checked) — structure, entryPoints, versions, counts, parity, templates, graph, provenance shape, retrieval/availability pins, wrapper gate, tokens, policy binding, motion, paths, schema, examples and adversarial suite all pass.")
    else:
        print("REPO OK — structure, entryPoints, versions, counts, parity, templates, graph, citations, route coverage, assets vs the clone, provenance, retrieval/availability pins, wrapper gate, tokens, policy binding, generator freshness, motion, paths, schema, examples and adversarial suite all pass.")
    sys.exit(0)


if __name__ == "__main__":
    main()
