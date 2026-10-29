#!/usr/bin/env python3
"""Writes one mode="generation" example PageSpec per template (schema/examples/generated-<template>.pagespec.json)
for a FICTIONAL brand ("Fernbrook", fernbrook.example), using only original copy written for this file,
generation-safe asset roles, placeholder URLs and fictional people. Every field respects the section
contract's real budgets (maxWords / maxItems). The examples are controls for the adversarial suite:
they must pass Draft-07 + semantic validation with zero GENERATION_MODE_* findings, and the mutations
inject source identity into them. Usage: python3 build_generation_examples.py [--check]"""
import json, os, sys

HERE = os.path.dirname(os.path.abspath(__file__))
REPO = os.path.dirname(HERE)
OUT = os.path.join(REPO, "schema", "examples")

BRAND = {"name": "Fernbrook", "domain": "fernbrook.example"}
# Original copy for a fictional records-onboarding product. Deliberately no digits (claims) and nothing taken from the source.
HEADINGS = ["Move every record without the late nights", "Onboarding that feels like a quiet handoff", "Clean imports from whatever your customers keep",
            "Plans that teams reuse every week", "Questions buyers ask before they switch", "Stories from teams who switched calmly",
            "Field notes on careful data moves", "What happens to your information here", "How Fernbrook keeps each step visible"]
SENTENCES = ["Fernbrook reads messy exports, lines up the fields and hands your team a tidy preview before anything goes live.",
             "Your specialists approve each mapping once, and the next customer with the same shape of file starts from that plan.",
             "Every import keeps a plain trail of what changed, who signed off and which rows still need a human eye.",
             "Spreadsheets, old portals and odd text dumps all land in the same review queue instead of a support inbox.",
             "Sales can promise a gentle switch because onboarding no longer waits on a sprint from the platform crew.",
             "When a file arrives with surprises, Fernbrook flags the odd columns and suggests a fix you can accept or reject.",
             "Teams keep their own vocabulary, so a lead stays a lead and a ticket stays a ticket after the move.",
             "Nothing is written to production until a person on your side presses approve on the final preview."]
LIST = ["Spreadsheets", "Legacy portals", "Shared drives", "Email exports", "Form archives", "Ticket histories", "Contact lists", "Billing ledgers", "Calendar files"]
ITEMS = [("Preview first", "See the cleaned rows before they reach your workspace."), ("Reusable plans", "Save a mapping once and apply it to the next account."),
         ("Plain audit trail", "Every change carries a name and a reason."), ("Gentle retries", "Fix one odd row without restarting the whole batch."),
         ("Shared review", "Ops and success look at the same queue."), ("Quiet alerts", "Only the rows that need a person raise a flag.")]
CTAS = [("Plan a walkthrough", "/walkthrough"), ("Read the guide", "/guide"), ("Talk to us", "/contact"), ("See pricing notes", "/notes"), ("Start a trial", "/start")]
PEOPLE = [("Morgan Ellery", "Head of Onboarding, Tidewell Co"), ("Priya Castellan", "Operations Lead, Northmarsh"), ("Jonah Vale", "Support Director, Quillfield")]
COMPANY = ("Tidewell Co", "A fictional property-services company used to show the story layout.")


def cut(s, n):
    w = s.split()
    return " ".join(w[:max(1, n)])


def content_for(sid, c, k):
    out = {}
    for name, f in c["content"]["fields"].items():
        if not f.get("required") and name not in ("images", "listItems", "items", "quote", "attribution"): continue
        t = f["type"]
        if t == "string":
            src = {"eyebrow": ["Before", "During", "After"][k % 3], "quote": "Our onboarding queue finally feels calm and the team trusts every preview.",
                   "attribution": f"{PEOPLE[k % 3][0]}, {PEOPLE[k % 3][1]}", "inputPlaceholder": "Your work email",
                   "heading": COMPANY[0] if sid == "proof.story-company-facts" else HEADINGS[(k + len(sid)) % len(HEADINGS)]}.get(name, HEADINGS[k % len(HEADINGS)])
            out[name] = cut(src, f["maxWords"])
        elif t == "string[]":
            n = min(f["maxItems"], 2 if name == "body" else 3)
            pool = SENTENCES if name == "body" else LIST
            if sid == "proof.story-company-facts" and name == "body": out[name] = [cut(COMPANY[1], f["maxWords"])]; continue
            out[name] = [cut(pool[(k + i) % len(pool)], f["maxWords"]) for i in range(n)]
        elif t == "cta[]":
            n = min(f["maxItems"], 2)
            if sid == "index.article-toc":
                out[name] = [{"label": cut(HEADINGS[i], f["maxWords"]), "href": f"#chapter-{'ab'[i]}"} for i in range(n)]
            else:
                out[name] = [{"label": cut(CTAS[(k + i) % len(CTAS)][0], f["maxWords"]), "href": CTAS[(k + i) % len(CTAS)][1]} for i in range(n)]
        elif t == "item[]":
            n = min(f["maxItems"], 3)
            out[name] = [{"title": cut(ITEMS[(k + i) % len(ITEMS)][0], f["titleMaxWords"]), "body": cut(ITEMS[(k + i) % len(ITEMS)][1], f.get("bodyMaxWords", 0) or 1)} for i in range(n)]
        elif t == "image[]":
            roles = f.get("generatedAssetRoles", [])
            if not roles: continue
            out[name] = [{"assetRole": roles[0], "alt": "Placeholder visual for a fictional brand", "src": f"/placeholder/{roles[0]}.svg"}]
    return out


def main():
    check = "--check" in sys.argv
    secs = {}
    for f in sorted(os.listdir(os.path.join(REPO, "sections"))):
        if f.endswith(".json"):
            c = json.load(open(os.path.join(REPO, "sections", f), encoding="utf-8")); secs[c["id"]] = c
    schema = json.load(open(os.path.join(REPO, "schema", "pagespec.schema.json"), encoding="utf-8"))
    version = schema["properties"]["pageSpecVersion"]["const"]
    os.makedirs(OUT, exist_ok=True)
    stale = []
    for t in json.load(open(os.path.join(REPO, "templates", "templates.json"), encoding="utf-8"))["templates"]:
        nodes, k = [], 0
        for tn in t["nodes"]:
            reps = min(2, tn.get("maxCount", 1)) if tn.get("repeatable") else 1
            for _ in range(reps):
                c = secs[tn["section"]]
                pat = "none" if "none" in c["motion"]["allowedPatterns"] else c["motion"]["allowedPatterns"][0]
                node = {"type": tn["section"], "content": content_for(tn["section"], c, k),
                        "motion": {"pattern": pat, "reducedMotionFallback": c["motion"]["reducedMotionFallback"]}}
                if c["category"] == "HERO":
                    node["style"] = {"surface": "surface.default", "textColor": "text.primary", "typography": "typography.display",
                                     "fontFamily": "Geist", "spacingTop": "layout.sectionPaddingTop", "spacingBottom": "layout.sectionPaddingBottom"}
                nodes.append(node); k += 1
        spec = {"pageSpecVersion": version, "mode": "generation", "theme": "light", "brand": BRAND, "template": t["id"],
                "route": "/" if t["id"] == "template.home" else "/" + t["id"].split(".", 1)[1], "nodes": nodes}
        p = os.path.join(OUT, f"generated-{t['id'].split('.', 1)[1]}.pagespec.json")
        s = json.dumps(spec, indent=2, ensure_ascii=False) + "\n"
        if not os.path.isfile(p) or open(p, encoding="utf-8").read() != s:
            stale.append(os.path.basename(p))
            if not check: open(p, "w", encoding="utf-8").write(s)
    if check and stale: print("stale generation examples:", ", ".join(stale)); sys.exit(1)
    print(f"build_generation_examples: {'in sync' if check else 'wrote ' + str(len(stale)) + ' file(s)'}")


if __name__ == "__main__":
    main()
