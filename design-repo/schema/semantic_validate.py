#!/usr/bin/env python3
"""Semantic validator for a PageSpec against this design repo.

Enforces, in order:
  1. JSON Schema draft-07 (schema/pagespec.schema.json) -- structural closure
  2. template cross-reference: the node sequence must follow the DECLARED template's own
     node list (order, required nodes present, repeatable/maxCount respected, no foreign sections)
  3. every rule in compatibility/graph.json, respecting severity (error fails, warn is reported)
  4. per-field maxWords budgets from sections/<id>.json, on this instance
  5. motion: pattern allowed for that section, reducedMotionFallback present
  6. images: assetRole allowed for that section (clone: assetRoles + generatedAssetRoles; generation: generatedAssetRoles only)
  7. mode = "generation": nothing from the source (schema/source-identity.json), one named rule per category:
     GENERATION_MODE_BRAND / _CUSTOMER / _PERSON / _URL / _EMBED / _ASSET / _SCREENSHOT / _COPY / _CLAIM.
     mode = "clone" may reuse real content (the bundled clone example is the control).
  8. tokens: node `style` values are approved token ids only: TOKEN_UNKNOWN, TOKEN_RAW_COLOR,
     TOKEN_ARBITRARY_SPACING, TOKEN_UNSUPPORTED_FONT, TOKEN_THEME_UNSUPPORTED, TOKEN_THEME_COMBINATION
  9. pins: asset availability (PINNED_AVAILABILITY) and retrieval eligibility (RETRIEVAL_INELIGIBLE) are
     pinned here, independent of the registry; a registry that disagrees makes every check fail.

Detection in 7 is string-based (normalised text, regexes, hashed shingles): a paraphrase is not caught.

Usage:  python3 semantic_validate.py <pagespec.json>
Import: check(spec) -> (errors, warnings)
"""
import hashlib, json, os, re, sys, unicodedata

HERE = os.path.dirname(os.path.abspath(__file__))
REPO = os.path.dirname(HERE)
RULE_KINDS = {"maxCategoryPerPage", "perPageLimits", "mustBeFirst", "mustBeLast", "noConsecutive",
              "noAdjacentSameCategory", "maxAnimatedSections"}


_CACHE = {}

# Pinned in code, independent of assets/asset-roles.json (same table in extraction/verify_all.py).
PINNED_AVAILABILITY = {
    "logo": "clone-only", "customer-logo": "blocked-for-generation", "avatar": "blocked-for-generation",
    "icon": "generation-safe", "illustration": "generation-safe", "background": "generation-safe", "hero-image": "generation-safe",
    "content-image": "clone-only", "animation": "clone-only", "animation-still": "clone-only", "video": "clone-only", "font": "clone-only",
    "live-embed": "blocked-for-generation", "founder-contact-email": "blocked-for-generation",
    "placeholder-brand-mark": "generation-safe", "user-supplied-asset": "generation-safe", "generated-illustration": "generation-safe",
    "placeholder-screenshot": "generation-safe", "fictional-avatar": "generation-safe", "placeholder-customer-logo": "generation-safe",
    "placeholder-url": "generation-safe", "original-copy": "generation-safe",
}
# Runtime / utility UI that is never a retrieval example (same pin in verify_all.py and sync_contract_layers.py).
RETRIEVAL_INELIGIBLE = {"shell.consent-banner-root"}
RUNTIME_UI = re.compile(r"consent|cookie|modal|dialog|drawer|popup|pop-up|overlay|preloader|toast|cursor", re.I)

ZW = dict.fromkeys(map(ord, "\u200b\u200c\u200d\u2060\ufeff\u00ad"), None)
QUOTES = {ord(c): "'" for c in "\u2018\u2019\u201a\u201b\u2032"} | {ord(c): '"' for c in "\u201c\u201d\u201e\u201f\u2033"}
DASHES = {ord(c): "-" for c in "\u2010\u2011\u2012\u2013\u2014\u2015\u2212"}


def norm_case(s):
    """NFKC, zero-width removed, curly quotes straightened, dashes unified, whitespace collapsed (case kept)."""
    s = unicodedata.normalize("NFKC", str(s)).translate(ZW).translate(QUOTES).translate(DASHES)
    return " ".join(s.split())


def normalize(s):
    return norm_case(s).lower()


def norm_words(s):
    return re.findall(r"[a-z0-9%$][a-z0-9%$'.\-]*", normalize(s))


def _h(s): return hashlib.sha256(s.encode("utf-8")).hexdigest()[:16]


def load(rel):
    # contracts are read once per process: the adversarial suite calls check() hundreds of times
    if rel not in _CACHE:
        with open(os.path.join(REPO, rel), encoding="utf-8") as f:
            _CACHE[rel] = json.load(f)
    return _CACHE[rel]


def words(s):
    return len(str(s).split())


def contracts():
    if "__sections__" in _CACHE:
        return _CACHE["__sections__"]
    out = {}
    d = os.path.join(REPO, "sections")
    for f in sorted(os.listdir(d)):
        if f.endswith(".json"):
            c = json.load(open(os.path.join(d, f), encoding="utf-8"))
            out[c["id"]] = c
    _CACHE["__sections__"] = out
    return out


def validator():
    if "__validator__" not in _CACHE:
        from jsonschema import Draft7Validator
        _CACHE["__validator__"] = Draft7Validator(load("schema/pagespec.schema.json"))
    return _CACHE["__validator__"]


def check(spec):
    errors, warnings = [], []
    # ---- 1. schema
    try:
        v = validator()
    except ImportError:
        return ["jsonschema is required (pip install jsonschema)"], []
    for e in sorted(v.iter_errors(spec), key=lambda e: [str(p) for p in e.absolute_path]):
        loc = "/".join(str(p) for p in e.absolute_path) or "(root)"
        errors.append(f"schema: {loc}: {e.message}")
    if not isinstance(spec, dict) or not isinstance(spec.get("nodes"), list):
        return errors or ["schema: nodes must be a list"], warnings
    nodes = [n for n in spec["nodes"] if isinstance(n, dict)]
    types = [n.get("type") for n in nodes]
    secs = contracts()
    templates = {t["id"]: t for t in load("templates/templates.json")["templates"]}
    roles = load("assets/asset-roles.json")["roles"]
    for r, want in PINNED_AVAILABILITY.items():
        got = roles.get(r, {}).get("availability")
        if got != want: errors.append(f"PINNED_AVAILABILITY: asset role '{r}' is '{got}' in the registry but pinned to '{want}' in code")
    for r in roles:
        if r not in PINNED_AVAILABILITY: errors.append(f"PINNED_AVAILABILITY: registry role '{r}' has no pinned availability")
    for sid, c in secs.items():
        want = sid not in RETRIEVAL_INELIGIBLE
        if c.get("retrievalEligible") is not want:
            errors.append(f"RETRIEVAL_INELIGIBLE: sections/{sid}.json retrievalEligible={c.get('retrievalEligible')!r} but the code pin says {want}")
        if want and RUNTIME_UI.search(sid + " " + c.get("label", "")):
            errors.append(f"RETRIEVAL_INELIGIBLE: '{sid}' looks like runtime UI but is not pinned retrieval-ineligible")
    mode = spec.get("mode")

    # ---- 2. declared template cross-reference
    tid = spec.get("template")
    t = templates.get(tid)
    if t:
        i = 0
        tsecs = [tn["section"] for tn in t["nodes"]]
        for k, tn in enumerate(t["nodes"]):
            cnt = 0
            while i < len(types) and types[i] == tn["section"]:
                cnt += 1; i += 1
            if cnt == 0 and tn.get("required"):
                if tn["section"] in types:
                    errors.append(f"template: section '{tn['section']}' is out of order for {tid} (expected as node {k + 1})")
                else:
                    errors.append(f"template: required section '{tn['section']}' missing (node {k + 1} of {tid})")
            if cnt > 1 and not tn.get("repeatable"):
                errors.append(f"template: section '{tn['section']}' repeated {cnt}x but is not repeatable in {tid}")
            if tn.get("repeatable") and cnt > tn.get("maxCount", cnt):
                errors.append(f"template: section '{tn['section']}' repeated {cnt}x, max {tn['maxCount']} in {tid}")
        for extra in types[i:]:
            if extra in tsecs:
                errors.append(f"template: section '{extra}' is out of order for {tid}")
            else:
                errors.append(f"template: section '{extra}' is not part of template {tid}")
            break

    # ---- 3. compatibility graph (severity-aware)
    cat = {sid: c["category"] for sid, c in secs.items()}
    for rule in load("compatibility/graph.json")["rules"]:
        kind, rid = rule.get("kind"), rule.get("id")
        sink = errors if rule.get("severity") == "error" else warnings
        tag = f"{rid} ({rule.get('severity')})"
        if kind not in RULE_KINDS:
            errors.append(f"graph: rule {rid} has kind '{kind}' that this validator does not implement")
            continue
        if kind == "maxCategoryPerPage":
            n = sum(1 for s in types if cat.get(s) == rule["category"])
            if n > rule["max"] and tid not in rule.get("exceptions", []):
                sink.append(f"{tag}: {n} {rule['category']} sections on one page (max {rule['max']})")
        elif kind == "perPageLimits":
            for s, lim in rule["limits"].items():
                n = types.count(s)
                if n > lim:
                    sink.append(f"{tag}: '{s}' appears {n}x (limit {lim})")
        elif kind == "mustBeFirst":
            for s in rule["sections"]:
                if s in types and types[0] != s:
                    sink.append(f"{tag}: '{s}' must be the first node")
        elif kind == "mustBeLast":
            for s in rule["sections"]:
                if s in types and types[-1] != s:
                    sink.append(f"{tag}: '{s}' must be the last node")
        elif kind == "noConsecutive":
            for a, b in zip(types, types[1:]):
                if a == b and a in rule["sections"]:
                    sink.append(f"{tag}: '{a}' appears twice in a row")
        elif kind == "noAdjacentSameCategory":
            allowed = {tuple(p.split("+", 1)) if isinstance(p, str) else tuple(p) for p in rule.get("exceptions", [])}
            for a, b in zip(types, types[1:]):
                if a != b and a in cat and cat.get(a) == cat.get(b) and (a, b) not in allowed:
                    sink.append(f"{tag}: '{a}' and '{b}' are both {cat[a]} and adjacent")
        elif kind == "maxAnimatedSections":
            n = sum(1 for nd in nodes if isinstance(nd.get("motion"), dict) and nd["motion"].get("pattern") not in (None, "none"))
            if n > rule["max"]:
                sink.append(f"{tag}: {n} animated sections (max {rule['max']})")

    # ---- 4-6. per-node content budgets, motion, asset roles
    for k, nd in enumerate(nodes):
        c = secs.get(nd.get("type"))
        if not c:
            continue
        f = c["content"]["fields"]
        content = nd.get("content") if isinstance(nd.get("content"), dict) else {}
        where = f"node {k + 1} ({nd.get('type')})"
        for key, spec_f in f.items():
            if spec_f.get("type") == "string" and isinstance(content.get(key), str) and words(content[key]) > spec_f["maxWords"]:
                errors.append(f"maxWords: {where}.{key} has {words(content[key])} words (max {spec_f['maxWords']})")
        if "body" in content and "body" in f and isinstance(content["body"], list):
            for j, p in enumerate(content["body"]):
                if words(p) > f["body"]["maxWords"]:
                    errors.append(f"maxWords: {where}.body[{j}] has {words(p)} words (max {f['body']['maxWords']})")
        if "ctas" in content and "ctas" in f and isinstance(content["ctas"], list):
            for j, cta in enumerate(content["ctas"]):
                if isinstance(cta, dict) and words(cta.get("label", "")) > f["ctas"]["maxWords"]:
                    errors.append(f"maxWords: {where}.ctas[{j}].label has {words(cta['label'])} words (max {f['ctas']['maxWords']})")
        if "items" in content and "items" in f and isinstance(content["items"], list):
            for j, it in enumerate(content["items"]):
                if not isinstance(it, dict): continue
                if words(it.get("title", "")) > f["items"]["titleMaxWords"]:
                    errors.append(f"maxWords: {where}.items[{j}].title has {words(it['title'])} words (max {f['items']['titleMaxWords']})")
                if "body" in it and words(it["body"]) > f["items"].get("bodyMaxWords", 0):
                    errors.append(f"maxWords: {where}.items[{j}].body has {words(it['body'])} words (max {f['items'].get('bodyMaxWords', 0)})")
        m = nd.get("motion")
        if not isinstance(m, dict) or not m.get("reducedMotionFallback"):
            errors.append(f"motion: {where} has no reducedMotionFallback")
        elif m.get("pattern") not in c["motion"]["allowedPatterns"]:
            errors.append(f"motion: {where} pattern '{m.get('pattern')}' not allowed (allowed: {', '.join(c['motion']['allowedPatterns'])})")
        for j, img in enumerate(content.get("images", []) if isinstance(content.get("images"), list) else []):
            fi = f.get("images", {})
            okroles = fi.get("generatedAssetRoles", []) if mode == "generation" else fi.get("assetRoles", []) + fi.get("generatedAssetRoles", [])
            if isinstance(img, dict) and "alt" in img and words(img["alt"]) > 16:
                errors.append(f"maxWords: {where}.images[{j}].alt has {words(img['alt'])} words (max 16)")
            if isinstance(img, dict) and okroles and img.get("assetRole") not in okroles:
                errors.append(f"assetRole: {where}.images[{j}] role '{img.get('assetRole')}' not used by this section in {mode} mode (allowed: {', '.join(okroles)})")
    check_tokens(spec, nodes, errors)
    if mode == "generation":
        check_generation(spec, nodes, roles, errors)
    return errors, warnings


def _strings(v, path):
    if isinstance(v, dict):
        for k, x in v.items(): yield from _strings(x, f"{path}.{k}")
    elif isinstance(v, list):
        for i, x in enumerate(v): yield from _strings(x, f"{path}[{i}]")
    elif isinstance(v, str):
        yield path, v


HOST = re.compile(r"(?:https?:)?//([A-Za-z0-9.\-]+)|\b([A-Za-z0-9\-]+(?:\.[A-Za-z0-9\-]+)*\.(?:com|io|ai|co|org|net|app|dev|so|hq))\b", re.I)


def _host_ok(host, allowed):
    host = host.lower().rstrip(".")
    return any(host == a or (a.startswith("*.") and (host.endswith(a[1:]) or host == a[2:])) for a in allowed)


def check_generation(spec, nodes, roles, errors):
    ident = load("schema/source-identity.json")
    copy, claims = set(ident["copy"]["values"]), set(ident["claims"]["values"])
    allowed = ident["allowedPlaceholderHosts"]
    seen = set()
    def err(rule, msg):
        if (rule, msg) not in seen: seen.add((rule, msg)); errors.append(f"{rule}: {msg}")
    texts = list(_strings({k: spec.get(k) for k in ("route", "brand")}, "")) + [(f"nodes[{i}]{p}", s) for i, n in enumerate(nodes) for p, s in _strings(n.get("content", {}), ".content")]
    for where, s in texts:
        cased, low = norm_case(s), normalize(s)
        for e in ident["brand"]:
            if re.search(e["regex"], cased if e["caseSensitive"] else low, 0 if e["caseSensitive"] else re.I):
                err("GENERATION_MODE_BRAND", f"{where} contains the source brand '{e['name']}'")
        for e in ident["customers"]:
            if re.search(e["regex"], cased if e["caseSensitive"] else low, 0 if e["caseSensitive"] else re.I):
                err("GENERATION_MODE_CUSTOMER", f"{where} names the real customer '{e['name']}'")
        for e in ident["people"]:
            if re.search(e["regex"], cased):
                err("GENERATION_MODE_PERSON", f"{where} names the real person '{e['name']}'")
        for u in ident["urls"]:
            if normalize(u).rstrip("/") in low: err("GENERATION_MODE_URL", f"{where} reuses the source URL {u}")
        for d in ident["domains"]:
            if d in low: err("GENERATION_MODE_URL", f"{where} points at the source domain {d}")
        for m in HOST.finditer(cased):
            host = m.group(1) or m.group(2)
            if host and not _host_ok(host, allowed) and not re.fullmatch(r"[\d.]+", host):
                err("GENERATION_MODE_URL", f"{where} links to '{host}', not a placeholder host ({', '.join(allowed)})")
        for e in ident["endpoints"]:
            if normalize(e) in low or normalize(e.split(":", 1)[1]) in low:
                err("GENERATION_MODE_EMBED", f"{where} reuses the live source endpoint {e}")
        if low in set(ident["assetPaths"]) or any(low == normalize(p) for p in ident["assetPaths"]):
            err("GENERATION_MODE_ASSET", f"{where} references the source asset file {s}")
        if any(low == normalize(p) for p in ident["screenshotPaths"]):
            err("GENERATION_MODE_SCREENSHOT", f"{where} reuses a source product screenshot / canvas still {s}")
        ws = norm_words(s)
        hit = next((" ".join(ws[i:i + 5]) for i in range(len(ws) - 4) if _h(" ".join(ws[i:i + 5])) in copy), None)
        if hit: err("GENERATION_MODE_COPY", f"{where} reproduces source copy ('{hit}' ...)")
        hit = next((" ".join(ws[i:i + 3]) for i in range(len(ws) - 2) if re.search(r"\d", " ".join(ws[i:i + 3])) and _h(" ".join(ws[i:i + 3])) in claims), None)
        if hit: err("GENERATION_MODE_CLAIM", f"{where} reuses a source claim / statistic ('{hit}')")
    for i, n in enumerate(nodes):
        imgs = n.get("content", {}).get("images") if isinstance(n.get("content"), dict) else None
        for j, img in enumerate(imgs if isinstance(imgs, list) else []):
            if not isinstance(img, dict): continue
            r = img.get("assetRole")
            av = PINNED_AVAILABILITY.get(r)
            if av != "generation-safe":
                subs = roles.get(r, {}).get("generationSafeSubstitutes", [])
                err("GENERATION_MODE_ASSET", f"nodes[{i}].images[{j}] uses asset role '{r}' ({av}); use one of: {', '.join(subs) or 'a generation-safe role'}")


RAW_COLOR = re.compile(r"#[0-9a-f]{3,8}\b|\b(?:rgba?|hsla?)\s*\(", re.I)
RAW_LEN = re.compile(r"^-?\d+(?:\.\d+)?(?:px|rem|em|%|vh|vw)?$", re.I)


def check_tokens(spec, nodes, errors):
    pol = load("tokens/llm/token-policy.json")
    cat = load("tokens/llm/token-catalog.json")["categories"]
    man = load("registry.manifest.json")
    theme = spec.get("theme", man.get("defaultTheme"))
    if not isinstance(theme, str):
        errors.append("TOKEN_THEME_UNSUPPORTED: theme must be a theme id string (raw theme overrides are not allowed)"); return
    if theme not in man.get("schemaValidatedThemes", []):
        errors.append(f"TOKEN_THEME_UNSUPPORTED: theme '{theme}' is not one of {man.get('schemaValidatedThemes')}")
    combos = pol.get("themeCombinations", {}).get(theme, {}).get("textOnSurface", {})
    for i, n in enumerate(nodes):
        st = n.get("style")
        if not isinstance(st, dict): continue
        for k, v in st.items():
            fs = pol["styleFields"].get(k)
            if not fs or not isinstance(v, str): continue
            where = f"nodes[{i}].style.{k}"
            if RAW_COLOR.search(v):
                errors.append(f"TOKEN_RAW_COLOR: {where} = '{v}' is a raw colour; use a color token"); continue
            if k == "fontFamily":
                if v not in pol["supportedFontFamilies"]:
                    errors.append(f"TOKEN_UNSUPPORTED_FONT: {where} = '{v}' (supported: {', '.join(pol['supportedFontFamilies'])})")
                continue
            if RAW_LEN.match(v.strip()):
                errors.append(f"TOKEN_ARBITRARY_SPACING: {where} = '{v}' is a raw length; use a {fs['category']} token"); continue
            if v not in cat.get(fs["category"], []) or not v.startswith(fs["prefix"]):
                errors.append(f"TOKEN_UNKNOWN: {where} = '{v}' is not an approved {fs['prefix']}* token in token-catalog.{fs['category']}")
        surf, txt = st.get("surface"), st.get("textColor")
        if surf in combos and txt is not None and txt not in combos[surf]:
            errors.append(f"TOKEN_THEME_COMBINATION: nodes[{i}] textColor '{txt}' on '{surf}' fails theme '{theme}' (allowed: {', '.join(combos[surf]) or 'none'})")


def main():
    if len(sys.argv) < 2:
        sys.exit("usage: semantic_validate.py <pagespec.json>")
    errors, warnings = check(json.load(open(sys.argv[1], encoding="utf-8")))
    for w in warnings:
        print("WARN:", w)
    if errors:
        print("INVALID:"); [print("  -", e) for e in errors]; sys.exit(1)
    print("VALID"); sys.exit(0)


if __name__ == "__main__":
    main()
