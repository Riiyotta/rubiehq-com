#!/usr/bin/env python3
"""Adversarial suite: proves every rule REJECTS a bad PageSpec for the RIGHT reason, and that controls pass.

Controls: the bundled example + one synthesized minimal PageSpec per template (generic loop, so a new
template needs no new control code). Mutations are built from this repo's own contracts; each one must
produce an error (or, for warn-severity rules, a warning) naming the specific rule it targets. A mutation
that cannot be built for this repo is reported as SKIPPED with the reason -- never silently dropped.
Usage: python3 adversarial_test.py"""
import copy, importlib.util, json, os, sys

HERE = os.path.dirname(os.path.abspath(__file__))
SCHEMA = os.path.dirname(HERE)
REPO = os.path.dirname(SCHEMA)
spec_ = importlib.util.spec_from_file_location("semantic_validate", os.path.join(SCHEMA, "semantic_validate.py"))
sv = importlib.util.module_from_spec(spec_); spec_.loader.exec_module(sv)

SECS = sv.contracts()
TEMPLATES = sv.load("templates/templates.json")["templates"]
GRAPH = {r["id"]: r for r in sv.load("compatibility/graph.json")["rules"]}
VERSION = sv.load("schema/pagespec.schema.json")["properties"]["pageSpecVersion"]["const"]
NONE = {"pattern": "none", "reducedMotionFallback": "disable-animation"}


def minimal_node(sid, motion=None):
    f = SECS[sid]["content"]["fields"]
    content = {}
    for k, spec in f.items():
        if not spec.get("required"): continue
        t = spec["type"]
        content[k] = {"string": "Sample", "string[]": ["Sample"], "cta[]": [{"label": "Go"}], "item[]": [{"title": "Sample"}], "image[]": []}[t]
    return {"type": sid, "content": content, "motion": dict(motion or NONE)}


def control_for(t, mode="clone"):
    return {"pageSpecVersion": VERSION, "mode": mode, "template": t["id"], "route": (t.get("routes") or ["/sample"])[0],
            "nodes": [minimal_node(n["section"]) for n in t["nodes"]]}


EXDIR = os.path.join(SCHEMA, "examples")
GEN = {}
for f in sorted(os.listdir(EXDIR)) if os.path.isdir(EXDIR) else []:
    d = json.load(open(os.path.join(EXDIR, f), encoding="utf-8"))
    if d.get("mode") == "generation": GEN[d["template"]] = d
IDENT = sv.load("schema/source-identity.json")
sys.path.insert(0, os.path.join(REPO, "extraction"))
import wrapper_gate  # noqa: E402


def main():
    example = sv.load("schema/example.pagespec.json")
    tmpl = {t["id"]: t for t in TEMPLATES}[example["template"]]
    tseq = [n["section"] for n in tmpl["nodes"]]
    types = [n["type"] for n in example["nodes"]]
    cases, skipped = [], []   # case: (label, spec, expect, needle) with expect in {"pass", "error", "warn"}
    cases.append(("control: bundled example", example, "pass", None))
    for t in TEMPLATES:
        cases.append((f"control: minimal {t['id']}", control_for(t), "pass", None))

    def mut(label, fn, needle, expect="error", why_not=None):
        if why_not:
            skipped.append(f"{label}: {why_not}"); return
        s = copy.deepcopy(example); fn(s); cases.append((label, s, expect, needle))

    first_idx = lambda pred: next((i for i, n in enumerate(example["nodes"]) if pred(n)), None)

    # ---- schema layer
    mut("wrong template enum", lambda s: s.__setitem__("template", "template.does-not-exist"), "schema: template")
    mut("missing required motion", lambda s: s["nodes"][0].pop("motion"), "'motion' is a required property")
    mut("invented section type", lambda s: s["nodes"][0].__setitem__("type", "hero.invented-type"), "schema: nodes/0/type")
    mut("missing reducedMotionFallback", lambda s: s["nodes"][0]["motion"].pop("reducedMotionFallback"), "reducedMotionFallback")
    mut("invented motion field", lambda s: s["nodes"][0]["motion"].__setitem__("inventedAnimation", True), "inventedAnimation")
    mut("style object with an invented key", lambda s: s["nodes"][0].__setitem__("style", {"color": "#ff0000"}), "'color' was unexpected")
    mut("raw theme override object at page level", lambda s: s.__setitem__("theme", {"color.text.primary": "#ff0000"}), "TOKEN_THEME_UNSUPPORTED")
    mut("missing mode", lambda s: s.pop("mode"), "'mode' is a required property")
    mut("mode outside the closed enum", lambda s: s.__setitem__("mode", "reference"), "schema: mode")

    # ---- token layer (R10): node style may only name approved tokens
    def st(**kw): return lambda s: s["nodes"][1].__setitem__("style", kw)
    mut("TOKEN_UNKNOWN: invented token", st(surface="surface.neon"), "TOKEN_UNKNOWN")
    mut("TOKEN_UNKNOWN: real token in the wrong field", st(surface="text.primary"), "TOKEN_UNKNOWN")
    mut("TOKEN_RAW_COLOR: hex", st(textColor="#FF0000"), "TOKEN_RAW_COLOR")
    mut("TOKEN_RAW_COLOR: rgb()", st(surface="rgb(2, 99, 255)"), "TOKEN_RAW_COLOR")
    mut("TOKEN_ARBITRARY_SPACING: px", st(spacingTop="37px"), "TOKEN_ARBITRARY_SPACING")
    mut("TOKEN_ARBITRARY_SPACING: rem radius", st(radius="1.5rem"), "TOKEN_ARBITRARY_SPACING")
    mut("TOKEN_UNSUPPORTED_FONT", st(fontFamily="Comic Sans MS"), "TOKEN_UNSUPPORTED_FONT")
    mut("TOKEN_THEME_UNSUPPORTED: dark theme", lambda s: s.__setitem__("theme", "dark"), "TOKEN_THEME_UNSUPPORTED")
    mut("TOKEN_THEME_COMBINATION: inverse text on the default surface", st(surface="surface.default", textColor="text.inverse"), "TOKEN_THEME_COMBINATION")
    cases.append(("control: approved tokens on a node", (lambda s: (s["nodes"][1].__setitem__("style", {"surface": "surface.inverse", "textColor": "text.inverse", "typography": "typography.heading", "fontFamily": "Geist", "spacingTop": "layout.sectionPaddingTop", "radius": "radius.surface"}), s)[1])(copy.deepcopy(example)), "pass", None))
    mut("wrong pageSpecVersion", lambda s: s.__setitem__("pageSpecVersion", "9.9.9"), "schema: pageSpecVersion")
    mut("unknown content field", lambda s: s["nodes"][0]["content"].__setitem__("inventedField", "x"), "'inventedField' was unexpected")
    cta = first_idx(lambda n: "ctas" in SECS[n["type"]]["content"]["fields"])
    mut("link to a live external URL", lambda s: s["nodes"][cta]["content"].__setitem__("ctas", [{"label": "Go", "href": "https://evil.example/x"}]),
        "does not match", why_not=None if cta is not None else "no section with ctas")
    img = first_idx(lambda n: "images" in SECS[n["type"]]["content"]["fields"])
    mut("invented assetRole", lambda s: s["nodes"][img]["content"].__setitem__("images", [{"assetRole": "invented-role"}]),
        "invented-role", why_not=None if img is not None else "no section with images")
    if img is not None:
        role = (SECS[example["nodes"][img]["type"]]["content"]["fields"]["images"].get("assetRoles") or ["content-image"])[0]
        mut("alt text over its word budget", lambda s: s["nodes"][img]["content"].__setitem__("images", [{"assetRole": role, "alt": " ".join(["w"] * 17)}]), "alt has 17 words")

    # ---- structural layer (template cross-reference)
    once = [i for i, tn in enumerate(tmpl["nodes"]) if tn["required"] and tseq.count(tn["section"]) == 1]
    mut("removed mandatory section", lambda s: s["nodes"].pop(types.index(tseq[once[0]])), "missing",
        why_not=None if once and len(types) > 1 else "no required section that occurs once")
    if len(types) >= 2 and types[0] != types[1]:
        mut("first two sections swapped", lambda s: s["nodes"].__setitem__(slice(0, 2), [s["nodes"][1], s["nodes"][0]]), "out of order")
    else:
        skipped.append("first two sections swapped: fewer than two distinct leading sections")
    foreign = next((sid for sid in sorted(SECS) if sid not in tseq), None)
    mut("section from outside the template", lambda s: s["nodes"].insert(1, minimal_node(foreign)), "not part of template",
        why_not=None if foreign else "every section belongs to this template")
    other = next((t for t in TEMPLATES if t["id"] != tmpl["id"] and [n["section"] for n in t["nodes"]] != tseq), None)
    mut("declared template contradicts the nodes", lambda s: s.__setitem__("template", other["id"]), "template:",
        why_not=None if other else "only one template in this repo")

    # ---- graph layer: each rule must fire by its own id
    one = first_idx(lambda n: SECS[n["type"]]["constraints"].get("onePerPage"))
    mut("SECTION_PER_PAGE_LIMITS: one-per-page section duplicated", lambda s: s["nodes"].insert(one + 1, copy.deepcopy(s["nodes"][one])),
        "SECTION_PER_PAGE_LIMITS", why_not=None if one is not None else "no one-per-page section")
    fb = GRAPH["SHELL_MUST_BE_FIRST"]["sections"]; fi = first_idx(lambda n: n["type"] in fb)
    mut("SHELL_MUST_BE_FIRST: first section moved to the end", lambda s: s["nodes"].append(s["nodes"].pop(fi)), "SHELL_MUST_BE_FIRST",
        why_not=None if fi is not None and len(types) > 1 else "no mustBeFirst section in the example")
    lb = GRAPH["SHELL_MUST_BE_LAST"]["sections"]; li = next((i for i in range(len(types) - 1, -1, -1) if types[i] in lb), None)
    mut("SHELL_MUST_BE_LAST: last section moved to the front", lambda s: s["nodes"].insert(0, s["nodes"].pop(li)), "SHELL_MUST_BE_LAST",
        why_not=None if li is not None and len(types) > 1 else "no mustBeLast section in the example")
    nc = GRAPH["NO_CONSECUTIVE_SAME_SECTION"]["sections"]; ni = first_idx(lambda n: n["type"] in nc)
    mut("NO_CONSECUTIVE_SAME_SECTION (warn)", lambda s: s["nodes"].insert(ni + 1, copy.deepcopy(s["nodes"][ni])), "NO_CONSECUTIVE_SAME_SECTION", "warn",
        why_not=None if ni is not None else "no section is restricted from repeating back-to-back")
    allowed = {tuple(p.split("+", 1)) for p in GRAPH["NO_ADJACENT_SAME_CATEGORY"].get("exceptions", [])}
    pair = next(((a, b) for a in sorted(SECS) for b in sorted(SECS) if a != b and SECS[a]["category"] == SECS[b]["category"] and (a, b) not in allowed), None)
    mut("NO_ADJACENT_SAME_CATEGORY (warn)", lambda s: s["nodes"].extend([minimal_node(pair[0]), minimal_node(pair[1])]), "NO_ADJACENT_SAME_CATEGORY", "warn",
        why_not=None if pair else "no two sections share a category")
    budget = GRAPH["MOTION_BUDGET"]["max"]
    animated = next((sid for sid in sorted(SECS) if [p for p in SECS[sid]["motion"]["allowedPatterns"] if p != "none"]), None)
    if animated:
        pat = [p for p in SECS[animated]["motion"]["allowedPatterns"] if p != "none"][0]
        mut("MOTION_BUDGET (warn)", lambda s: s["nodes"].extend([minimal_node(animated, {"pattern": pat, "reducedMotionFallback": "disable-animation"}) for _ in range(budget + 1)]), "MOTION_BUDGET", "warn")
    else:
        skipped.append("MOTION_BUDGET: no section allows an animated pattern")
    heroes = sorted(sid for sid, c in SECS.items() if c["category"] == "HERO")
    hi = first_idx(lambda n: SECS[n["type"]]["category"] == "HERO")
    extra = next((h for h in heroes if hi is None or h != types[hi]), None)
    why = None if (hi is not None and extra) else "fewer than two HERO section types"
    if not why and example["template"] in GRAPH["ONE_HERO_PER_PAGE"]["exceptions"]: why = "the example's template is a named exception"
    mut("ONE_HERO_PER_PAGE: a second HERO section", lambda s: s["nodes"].insert(hi + 1, minimal_node(extra)), "ONE_HERO_PER_PAGE", why_not=why)

    # ---- runtime budgets
    wn = next(((i, k) for i, n in enumerate(example["nodes"]) for k in ("heading", "subheading") if k in n["content"]), None)
    if wn:
        i, k = wn; mw = SECS[types[i]]["content"]["fields"][k]["maxWords"]
        mut(f"maxWords overflow on a {k}", lambda s: s["nodes"][i]["content"].__setitem__(k, " ".join(["word"] * (mw + 1))), f"{k} has {mw + 1} words")
    else:
        skipped.append("maxWords overflow: example has no heading")
    itn = first_idx(lambda n: n["content"].get("items"))
    if itn is not None:
        tw = SECS[types[itn]]["content"]["fields"]["items"]["titleMaxWords"]
        mut("maxWords overflow on an item title", lambda s: s["nodes"][itn]["content"]["items"][0].__setitem__("title", " ".join(["word"] * (tw + 1))), "title has")
    noanim = first_idx(lambda n: SECS[n["type"]]["motion"]["allowedPatterns"] == ["none"])
    mut("motion pattern not allowed for its section", lambda s: s["nodes"][noanim]["motion"].__setitem__("pattern", "scroll-linked"), "not allowed",
        why_not=None if noanim is not None else "every section allows animation")


    # ---- generation mode (R1/R2/R4/R5): the generated examples are controls; each mutation injects source identity
    for tid, g in sorted(GEN.items()):
        cases.append((f"control: generation example {tid}", g, "pass", None))
    cases.append(("control: clone example keeps real brand, copy and assets", example, "pass", None))
    g0 = GEN.get("template.home")
    def gmut(label, fn, needle):
        if not g0: skipped.append(f"{label}: no generation example for template.home"); return
        s = copy.deepcopy(g0); fn(s); cases.append((label, s, "error", needle))
    def set_heading(text, i=1):
        return lambda s: s["nodes"][i]["content"].__setitem__("heading", text)
    def set_body(text, i=2):
        return lambda s: s["nodes"][i]["content"].__setitem__("body", [text])
    hero_i = next(i for i, n in enumerate(g0["nodes"]) if n["type"] == "hero.home") if g0 else 1
    real_sentence = next(p for n in example["nodes"] for p in n["content"].get("body", []) if len(p.split()) > 12)
    real_claim = next((p for n in example["nodes"] for p in n["content"].get("body", []) if any(ch.isdigit() for ch in p)), None)
    gmut("GENERATION_MODE_BRAND: source brand in a heading", set_heading("Rubie for teams", hero_i), "GENERATION_MODE_BRAND")
    gmut("GENERATION_MODE_BRAND: upper-case + zero-width obfuscation", set_heading("RU​BIE moves data", hero_i), "GENERATION_MODE_BRAND")
    gmut("GENERATION_MODE_BRAND: legal entity", set_body("Operated by Nightly Data, Inc. for its customers."), "GENERATION_MODE_BRAND")
    gmut("GENERATION_MODE_BRAND: source CTA", lambda s: s["nodes"][hero_i]["content"].__setitem__("ctas", [{"label": "See Rubie in action", "href": "/demo"}]), "GENERATION_MODE_BRAND")
    gmut("GENERATION_MODE_BRAND: brand field reuses the source", lambda s: s.__setitem__("brand", {"name": "RubieHQ"}), "GENERATION_MODE_BRAND")
    gmut("GENERATION_MODE_CUSTOMER: real customer name", set_body("Teams at Granum switched in a week."), "GENERATION_MODE_CUSTOMER")
    gmut("GENERATION_MODE_CUSTOMER: spelling variant", set_body("Our partner Order co loves it."), "GENERATION_MODE_CUSTOMER")
    gmut("GENERATION_MODE_PERSON: real person", set_body("Says Hannah Wion, who runs onboarding."), "GENERATION_MODE_PERSON")
    gmut("GENERATION_MODE_URL: source domain", lambda s: s["nodes"][hero_i]["content"].__setitem__("body", ["Visit rubiehq.com today for details."]), "GENERATION_MODE_URL")
    gmut("GENERATION_MODE_URL: non-placeholder host", set_body("Read more at www.acme-real-company.com about this."), "GENERATION_MODE_URL")
    gmut("GENERATION_MODE_URL: source third-party URL", set_body("See http://www.allaboutcookies.org/ for cookies."), "GENERATION_MODE_URL")
    gmut("GENERATION_MODE_EMBED: live source inbox", set_body("Write to help@rubiehq.com any time."), "GENERATION_MODE_EMBED")
    gmut("GENERATION_MODE_COPY: verbatim source sentence", set_body(real_sentence), "GENERATION_MODE_COPY")
    gmut("GENERATION_MODE_COPY: curly quotes / dashes / NFKC variant", set_body(real_sentence.replace("'", "’").replace(" - ", " — ").replace("fi", "ﬁ")), "GENERATION_MODE_COPY")
    if real_claim: gmut("GENERATION_MODE_CLAIM: source statistic", set_body(real_claim), "GENERATION_MODE_CLAIM")
    else: skipped.append("GENERATION_MODE_CLAIM: clone example has no numeric claim")
    img_i = next((i for i, n in enumerate(g0["nodes"]) if n["content"].get("images")), None) if g0 else None
    if img_i is not None:
        def img(**kw): return lambda s: s["nodes"][img_i]["content"].__setitem__("images", [dict({"assetRole": s["nodes"][img_i]["content"]["images"][0]["assetRole"], "alt": "x"}, **kw)])
        gmut("GENERATION_MODE_ASSET: real logo role", img(assetRole="logo"), "GENERATION_MODE_ASSET")
        gmut("GENERATION_MODE_ASSET: real customer-logo role", img(assetRole="customer-logo"), "GENERATION_MODE_ASSET")
        gmut("GENERATION_MODE_ASSET: source file path", img(src=next(p for p in IDENT["assetPaths"] if p.startswith("/images/logos/"))), "GENERATION_MODE_ASSET")
        gmut("GENERATION_MODE_SCREENSHOT: source canvas still / product image", img(src=IDENT["screenshotPaths"][0]), "GENERATION_MODE_SCREENSHOT")
    else:
        skipped.append("GENERATION_MODE_ASSET/SCREENSHOT: the home generation example has no image")
    ts = GEN.get("template.home")
    st_i = next((i for i, n in enumerate(example["nodes"]) if n["type"] == "proof.testimonials"), None)
    if st_i is not None:
        s_ = copy.deepcopy(g0); s_["nodes"][st_i]["content"]["images"] = [{"assetRole": "avatar", "alt": "x"}]
        cases.append(("GENERATION_MODE_ASSET: real-person avatar role", s_, "error", "GENERATION_MODE_ASSET"))

    # ---- pins (R3/R8): editing the registry or a contract alone cannot loosen them
    def with_cache(label, rel, edit, needle):
        orig = copy.deepcopy(sv._CACHE.get(rel) if rel in sv._CACHE else sv.load(rel))
        mod = copy.deepcopy(orig); edit(mod); sv._CACHE[rel] = mod
        try:
            e, _ = sv.check(copy.deepcopy(example)); good = any(needle in x for x in e)
        finally:
            sv._CACHE[rel] = orig
        pin_results.append((label, good, needle))
    pin_results = []
    with_cache("PINNED_AVAILABILITY: registry flips logo to generation-safe", "assets/asset-roles.json", lambda d: d["roles"]["logo"].__setitem__("availability", "generation-safe"), "PINNED_AVAILABILITY")
    with_cache("PINNED_AVAILABILITY: registry flips customer-logo to clone-only", "assets/asset-roles.json", lambda d: d["roles"]["customer-logo"].__setitem__("availability", "clone-only"), "PINNED_AVAILABILITY")
    with_cache("RETRIEVAL_INELIGIBLE: consent banner flipped to eligible", "__sections__", lambda d: d["shell.consent-banner-root"].__setitem__("retrievalEligible", True), "RETRIEVAL_INELIGIBLE")
    with_cache("RETRIEVAL_INELIGIBLE: a content section marked ineligible", "__sections__", lambda d: d["hero.home"].__setitem__("retrievalEligible", False), "RETRIEVAL_INELIGIBLE")
    with_cache("RETRIEVAL_INELIGIBLE: runtime-UI section not pinned", "__sections__", lambda d: d.__setitem__("shell.cookie-modal", dict(d["shell.spacer"], id="shell.cookie-modal", label="cookie-modal", retrievalEligible=True)), "RETRIEVAL_INELIGIBLE")

    # ---- wrapper gate (R9) on synthetic measurements
    led0 = sv.load("extraction/measured-values.json")
    def gate(label, edit, expect, needle, whitelist=None):
        led = copy.deepcopy(led0); edit(led)
        e, w = wrapper_gate.check(REPO, led=led, whitelist=whitelist)
        good = any(needle in x for x in (e if expect == "error" else w)) and (expect != "warn" or not e)
        gate_results.append((label, good, needle))
    gate_results = []
    hp = led0["sectionHeights"]["routes"]["/"]
    hidx = next(i for i, s in enumerate(hp["sections"]) if s["id"] == "hero.home")
    def hero_h(px):
        def f(led):
            r = led["sectionHeights"]["routes"]["/"]; r["sections"][hidx]["heightPx"] = px; r["pageHeightPx"] = max(r["pageHeightPx"], px * 3)
        return f
    gate("HERO 1900px warns", hero_h(1900), "warn", "HERO hero.home")
    gate("HERO 3100px fails", hero_h(3100), "error", "HERO hero.home")
    gate("HERO 3100px whitelisted still warns", hero_h(3100), "warn", "[whitelisted]",
         {"/#hero.home": {"reviewedBy": "agent attestation, not a human sign-off", "justification": "synthetic adversarial case for the whitelist path", "maxHeightPx": 3200}})
    def share(px):
        def f(led):
            r = led["sectionHeights"]["routes"]["/"]; r["sections"][hidx]["heightPx"] = px; r["pageHeightPx"] = 4000
        return f
    gate("one section holds 65% of a page", share(2600), "error", "holds 65%")
    gate("one section holds 55% of a page (warn)", share(2200), "warn", "holds 55%")
    gate("missing measurement", lambda led: led["sectionHeights"]["routes"]["/"]["sections"][hidx].pop("heightPx"), "error", "missing measurement")
    gate("route with no measurement", lambda led: led["sectionHeights"]["routes"].pop("/terms"), "error", "no height measurement for route /terms")
    gate("measured at the wrong viewport", lambda led: led["sectionHeights"].update(viewport="1280x800", viewportWidthPx=1280), "error", "requires 1440px")
    gate("whitelist without justification", hero_h(3100), "error", "justification shorter",
         {"/#hero.home": {"reviewedBy": "agent attestation, not a human sign-off", "justification": "short", "maxHeightPx": 3200}})
    gate("whitelist by an agent not labelled as attestation", hero_h(3100), "error", "reviewedBy must say",
         {"/#hero.home": {"reviewedBy": "review agent", "justification": "synthetic adversarial case for the whitelist path", "maxHeightPx": 3200}})
    gate("whitelist cap below the measured height", hero_h(3100), "error", "cap 3000px exceeded",
         {"/#hero.home": {"reviewedBy": "agent attestation, not a human sign-off", "justification": "synthetic adversarial case for the whitelist path", "maxHeightPx": 3000}})
    gate("stale whitelist entry", lambda led: None, "error", "is stale",
         {"/nowhere#hero.home": {"reviewedBy": "agent attestation, not a human sign-off", "justification": "synthetic adversarial case for a stale entry", "maxHeightPx": 3000}})

    ok = fail = 0
    for label, good, needle in pin_results + gate_results:
        if good: ok += 1
        else: fail += 1; print(f"FAIL: {label}: expected a finding containing '{needle}'")
    for label, spec, expect, needle in cases:
        errors, warnings = sv.check(spec)
        if expect == "pass": good = not errors
        elif expect == "error": good = any(needle in e for e in errors)
        else: good = any(needle in w for w in warnings)
        if good: ok += 1
        else:
            fail += 1
            print(f"FAIL: {label}: expected {expect}" + (f" containing '{needle}'" if needle else "") + f"; errors={errors[:3]} warnings={warnings[:3]}")
    for s_ in skipped: print("SKIPPED:", s_)
    n_ctrl = sum(1 for c in cases if c[2] == "pass")
    n_mut = len(cases) - n_ctrl + len(pin_results) + len(gate_results)
    print(f"adversarial: {ok} passed, {fail} failed ({n_ctrl} controls, {n_mut} mutations incl. {len(pin_results)} pin and {len(gate_results)} wrapper-gate cases, {len(skipped)} skipped as not applicable)")
    sys.exit(1 if fail else 0)


if __name__ == "__main__":
    main()
