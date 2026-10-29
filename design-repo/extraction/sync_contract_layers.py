#!/usr/bin/env python3
"""Regenerates the layers that are pure functions of the section contracts + templates, so they can
never be hand-edited out of sync (verify_all.py checks the same parity independently):

  sections/*.json           generatedAssetRoles (from assets/asset-roles.json availability + substitutes),
                            retrievalEligible / retrievalReason (from RETRIEVAL_INELIGIBLE below)
  schema/pagespec.schema.json  template enum, node type enum, node allOf, assetRole enum, content.<id> defs
  tokens/llm/component-allowlist.json  sections, contentFields, retrievalIneligible
  compatibility/graph.json  SECTION_PER_PAGE_LIMITS, NO_ADJACENT_SAME_CATEGORY exceptions (observed pairs)

Usage: python3 sync_contract_layers.py [--check]   (--check: exit 1 if anything would change)"""
import json, os, sys

HERE = os.path.dirname(os.path.abspath(__file__))
REPO = os.path.dirname(HERE)

# Runtime / utility UI that must never be retrieved as a content example (R8). Same pin as verify_all.py
# and schema/semantic_validate.py; each needs a 30+ character reason.
RETRIEVAL_INELIGIBLE = {
    "shell.consent-banner-root": "Cookie-consent banner: runtime utility UI fixed over the page, not page content; a generator must never retrieve it as a section example.",
}
STR_HREF = {"type": "string", "pattern": "^(/|#)", "description": "Relative path or #anchor only: generated pages must not link to the original site's live URLs."}
STR_SRC = {"type": "string", "pattern": "^(/|#)", "description": "Relative path only: generated pages must not hotlink the original site's live assets."}


def J(rel):
    with open(os.path.join(REPO, rel), encoding="utf-8") as f: return json.load(f)


def content_def(c, roles_enum):
    props, req = {}, []
    for k, f in c["content"]["fields"].items():
        t = f["type"]
        if t == "string": d = {"type": "string"}
        elif t == "string[]": d = {"type": "array", "maxItems": f["maxItems"], "items": {"type": "string"}}
        elif t == "cta[]": d = {"type": "array", "maxItems": f["maxItems"], "items": {"type": "object", "additionalProperties": False, "required": ["label"],
                                                                                   "properties": {"label": {"type": "string"}, "href": STR_HREF}}}
        elif t == "item[]": d = {"type": "array", "maxItems": f["maxItems"], "items": {"type": "object", "additionalProperties": False, "required": ["title"],
                                                                                    "properties": {"title": {"type": "string"}, "body": {"type": "string"}}}}
        elif t == "image[]": d = {"type": "array", "maxItems": f["maxItems"], "items": {"type": "object", "additionalProperties": False, "required": ["assetRole"],
                                                                                     "properties": {"assetRole": {"type": "string", "enum": roles_enum(f)}, "alt": {"type": "string"}, "src": STR_SRC}}}
        else: sys.exit(f"{c['id']}: unknown field type {t}")
        props[k] = d
        if f.get("required"): req.append(k)
    d = {"type": "object", "additionalProperties": False, "properties": props}
    if req: d["required"] = sorted(req)
    return d


def main():
    check = "--check" in sys.argv
    changed = []

    def save(rel, d):
        s = json.dumps(d, indent=2, ensure_ascii=False) + "\n"
        p = os.path.join(REPO, rel)
        if open(p, encoding="utf-8").read() != s:
            changed.append(rel)
            if not check:
                with open(p, "w", encoding="utf-8") as f: f.write(s)

    roles = J("assets/asset-roles.json")["roles"]
    def gen_roles(rs):
        out = []
        for r in rs:
            for x in ([r] if roles[r]["availability"] == "generation-safe" else roles[r]["generationSafeSubstitutes"]):
                if x not in out: out.append(x)
        return sorted(out)

    secs = {}
    for f in sorted(os.listdir(os.path.join(REPO, "sections"))):
        if not f.endswith(".json"): continue
        c = J(f"sections/{f}")
        c["generatedAssetRoles"] = gen_roles(c.get("assetRoles", []))
        if c["id"] in RETRIEVAL_INELIGIBLE:
            c["retrievalEligible"] = False; c["retrievalReason"] = RETRIEVAL_INELIGIBLE[c["id"]]
        else:
            c["retrievalEligible"] = True; c.pop("retrievalReason", None)
        im = c["content"]["fields"].get("images")
        if im: im["generatedAssetRoles"] = gen_roles(im["assetRoles"])
        secs[c["id"]] = c
        save(f"sections/{f}", c)
    templates = J("templates/templates.json")["templates"]

    schema = J("schema/pagespec.schema.json")
    D = schema["definitions"]
    for k in [k for k in D if k.startswith("content.")]: del D[k]
    for sid, c in sorted(secs.items()):
        D[f"content.{sid}"] = content_def(c, lambda f: sorted(set(f["assetRoles"]) | set(f.get("generatedAssetRoles", []))))
    D["node"]["properties"]["type"]["enum"] = sorted(secs)
    D["node"]["allOf"] = [{"if": {"properties": {"type": {"const": sid}}, "required": ["type"]},
                           "then": {"properties": {"content": {"$ref": f"#/definitions/content.{sid}"}}}} for sid in sorted(secs)]
    D["assetRole"]["enum"] = sorted(roles)
    schema["properties"]["template"]["enum"] = sorted(t["id"] for t in templates)
    save("schema/pagespec.schema.json", schema)

    allow = J("tokens/llm/component-allowlist.json")
    allow["sections"] = sorted(secs)
    allow["contentFields"] = {sid: sorted(c["content"]["fields"]) for sid, c in sorted(secs.items())}
    allow["retrievalIneligible"] = sorted(RETRIEVAL_INELIGIBLE)
    save("tokens/llm/component-allowlist.json", allow)

    graph = J("compatibility/graph.json")
    rules = {r["id"]: r for r in graph["rules"]}
    rules["SECTION_PER_PAGE_LIMITS"]["limits"] = {sid: (1 if c["constraints"].get("onePerPage") else c["constraints"]["maxPerPage"]) for sid, c in sorted(secs.items())}
    pairs = set()
    for t in templates:
        seq = [n["section"] for n in t["nodes"]]
        for a, b in zip(seq, seq[1:]):
            if a != b and secs[a]["category"] == secs[b]["category"]: pairs.add(f"{a}+{b}")
    rules["NO_ADJACENT_SAME_CATEGORY"]["exceptions"] = sorted(pairs)
    save("compatibility/graph.json", graph)
    if check:
        if changed: print("out of sync:", ", ".join(changed)); sys.exit(1)
        print("sync_contract_layers: all derived layers in sync"); return
    print(f"sync_contract_layers: rewrote {len(changed)} file(s): {', '.join(changed)}")


if __name__ == "__main__":
    main()
