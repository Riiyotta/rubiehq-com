#!/usr/bin/env python3
"""Re-derives the citation ledger and every section contract's provenance from the runnable clone's
own tracked source (src/routes.js -> src/pages/*.jsx -> src/sections/*.jsx). This is the evidence
tree a full git clone of the package carries, so verify_all.py can resolve every citation there.

For each route (in src/routes.js order) it reads the page component, finds the one section component
that holds <main>, and lists <main>'s direct <header>, every top-level <section> (a <section> not
nested inside another <section>) and the direct <footer>; the consent root is cited in its own
component. The sequence is matched one-to-one, in order, against the section ids the ledger already
assigns (the hand-reconciled taxonomy); a count or tag mismatch is a hard error, never guessed.

Whole-document sections are decomposed by real content boundaries (R6), see DECOMPOSE below:
  legal body   -> legal header (h1 + effective date + preamble) + one clause per <h2>
  article body -> table of contents (<nav>) + one chapter per <section id> + sources
  story body   -> pull quote (<blockquote>) + one story beat per chapter <section> + company facts + the
                  sidebar email-capture <form> (a conversion block, so CTA-classed)

Writes extraction/measured-values.json (routes[].sections: id, tag, anchor, file, lines, dom) and, in
every sections/*.json: evidence.measuredFrom, evidence.instances/routes, source {id, tag, file, lines},
semantic {id, category}, implementedBy. Run from anywhere:  python3 build_source_map.py [--check]
--check exits 1 if writing would change anything (used to prove the files are in sync with src/)."""
import json, os, re, sys

HERE = os.path.dirname(os.path.abspath(__file__))
REPO = os.path.dirname(HERE)
PKG = os.path.dirname(REPO)
SRC = os.path.join(PKG, "src")

# parent section id -> (strategy, part ids in order). The parent id disappears from the taxonomy.
DECOMPOSE = {
    "narrative.legal-body": ("legal", ["narrative.legal-header", "narrative.legal-clause"]),
    "narrative.article-body": ("article", ["index.article-toc", "narrative.article-chapter", "narrative.article-sources"]),
    "narrative.story-body": ("story", ["proof.story-pull-quote", "narrative.story-beat", "proof.story-company-facts", "cta.story-email-capture"]),
}
# The pre-decomposition ledger called the whole story body narrative.story-beat; the id now names ONE chapter.
LEGACY_PARENT = {"narrative.story-beat": "narrative.story-body"}


def ind(l): return len(l) - len(l.lstrip())


def end_of(L, a, tag):
    """1-based line of the element opened on line a: the first later line at the same indent that closes it."""
    s = L[a - 1]
    if re.search(rf"<{tag}\b[^>]*/>\s*$", s) or s.rstrip().endswith(f"</{tag}>"):
        return a
    for j in range(a, len(L)):
        if ind(L[j]) == ind(s) and L[j].strip().startswith(f"</{tag}>"):
            return j + 1
    raise SystemExit(f"unclosed <{tag}> at line {a}")


def top_level(L):
    out, depth, start = [], 0, None
    for i, l in enumerate(L, 1):
        s = l.strip()
        if ind(l) == 6 and re.match(r"<(header|footer)\b", s):
            t = s[1:7]; out.append((t, i, end_of(L, i, t)))
        for m in re.finditer(r"<section\b|</section>", l):
            if m.group() == "<section":
                if depth == 0: start = i
                depth += 1
            else:
                depth -= 1
                if depth == 0: out.append(("section", start, i))
    return sorted(out, key=lambda x: x[1])


def last_content_line(L, a, b):
    j = b - 1
    while j > a and re.match(r"^</(div|section)>$", L[j - 1].strip()): j -= 1
    return j


def decompose(strategy, L, a, b, rel, k):
    """-> list of (id-index, tag, start, end, dom) inside the parent range a..b (1-based, inclusive)."""
    rng = range(a, b + 1)
    if strategy == "legal":
        h1 = next(i for i in rng if L[i - 1].strip().startswith("<h1"))
        h2 = [i for i in rng if L[i - 1].strip().startswith("<h2")]
        last = last_content_line(L, a, b)
        parts = [(0, "h1", h1, h2[0] - 1, {"top": k, "span": ["@start", "h2:0"]})]
        for n, s in enumerate(h2):
            e = h2[n + 1] - 1 if n + 1 < len(h2) else last
            parts.append((1, "h2", s, e, {"top": k, "span": [f"h2:{n}", f"h2:{n + 1}" if n + 1 < len(h2) else "@end"]}))
        return parts
    if strategy == "article":
        art = next(i for i in rng if L[i - 1].strip().startswith("<article"))
        kids = [i for i in range(art + 1, end_of(L, art, "article")) if ind(L[i - 1]) == ind(L[art - 1]) + 2 and re.match(r"<(nav|section)\b", L[i - 1].strip())]
        parts, ch = [], 0
        for i in kids:
            t = L[i - 1].strip()[1:].split()[0].rstrip(">")
            if t == "nav": parts.append((0, "nav", i, end_of(L, i, "nav"), {"top": k, "sel": "article > nav", "nth": 0}))
            elif " id=" in L[i - 1]: parts.append((1, "section", i, end_of(L, i, "section"), {"top": k, "sel": "article > section[id]", "nth": ch})); ch += 1
            else: parts.append((2, "section", i, end_of(L, i, "section"), {"top": k, "sel": "article > section:not([id])", "nth": 0}))
        return parts
    if strategy == "story":
        art = next(i for i in rng if L[i - 1].strip().startswith("<article"))
        art_end = end_of(L, art, "article")
        bq = min((i for i in range(art, art_end) if L[i - 1].strip().startswith("<blockquote")), key=lambda i: ind(L[i - 1]))
        sec_ind = min(ind(L[i - 1]) for i in range(art, art_end) if L[i - 1].strip().startswith("<section"))
        secs = [i for i in range(art, art_end) if L[i - 1].strip().startswith("<section") and ind(L[i - 1]) == sec_ind]
        aside = next(i for i in rng if L[i - 1].strip().startswith("<aside"))
        parts = [(0, "blockquote", bq, end_of(L, bq, "blockquote"), {"top": k, "sel": "article blockquote", "nth": 0})]
        parts += [(1, "section", s, end_of(L, s, "section"), {"top": k, "sel": "article > div > section", "nth": n}) for n, s in enumerate(secs)]
        facts = next(i for i in range(aside, end_of(L, aside, "aside")) if ind(L[i - 1]) == ind(L[aside - 1]) + 4 and L[i - 1].strip().startswith("<div"))
        form = next(i for i in range(aside, end_of(L, aside, "aside")) if L[i - 1].strip().startswith("<form"))
        parts.append((2, "div", facts, end_of(L, facts, "div"), {"top": k, "sel": "aside > div > div", "nth": 0}))
        parts.append((3, "form", form, end_of(L, form, "form"), {"top": k, "sel": "aside form", "nth": 0}))
        return parts
    raise SystemExit(f"unknown strategy {strategy}")


def jload(p):
    with open(p, encoding="utf-8") as f: return json.load(f)


def jdump(p, d, check, changed):
    s = json.dumps(d, indent=2, ensure_ascii=False) + "\n"
    old = open(p, encoding="utf-8").read() if os.path.isfile(p) else None
    if old != s:
        changed.append(os.path.relpath(p, REPO))
        if not check:
            with open(p, "w", encoding="utf-8") as f: f.write(s)


def main():
    check = "--check" in sys.argv
    if not os.path.isfile(os.path.join(SRC, "routes.js")):
        sys.exit("build_source_map.py needs the runnable clone's src/ next to design-repo/ (a full checkout of the package)")
    led_p = os.path.join(REPO, "extraction", "measured-values.json")
    led = jload(led_p)
    by_route = {r["route"]: r for r in led["routes"]}
    routes_js = open(os.path.join(SRC, "routes.js"), encoding="utf-8").read()
    served = re.findall(r'path:\s*"([^"]+)"[^\n]*import\("\./pages/([A-Za-z0-9]+)\.jsx"\)', routes_js)
    if sorted(p for p, _ in served) != sorted(by_route):
        sys.exit(f"src/routes.js serves {sorted(p for p, _ in served)} but the ledger maps {sorted(by_route)}")
    consent_rel = "src/sections/C15tUiRootHE9Kz.jsx"
    CL = open(os.path.join(PKG, consent_rel), encoding="utf-8").read().split("\n")
    c_start = next(i for i, l in enumerate(CL, 1) if 'data-testid="consent-banner-root"' in l)
    c_end = end_of(CL, c_start, "div")
    routes_out = []
    for path, page in served:
        r = by_route[path]
        page_rel = f"src/pages/{page}.jsx"
        z = re.findall(r'from "\.\./sections/(Z\w+)\.jsx"', open(os.path.join(PKG, page_rel), encoding="utf-8").read())
        if len(z) != 1: sys.exit(f"{page_rel}: expected exactly one <main> section component, found {z}")
        rel = f"src/sections/{z[0]}.jsx"
        L = open(os.path.join(PKG, rel), encoding="utf-8").read().split("\n")
        tops = top_level(L)
        old = [s for s in r["sections"] if s["id"] != "shell.consent-banner-root"]
        # collapse an already-decomposed ledger back to its parents so re-runs are idempotent
        parents, seen_parent = [], set()
        for s in old:
            pid = next((p for p, (_, parts) in DECOMPOSE.items() if s["id"] in parts and s.get("parent") == p), None)
            if pid:
                if (pid, s.get("dom", {}).get("top")) not in seen_parent:
                    seen_parent.add((pid, s.get("dom", {}).get("top"))); parents.append({"id": pid, "tag": "section"})
            else:
                parents.append({"id": LEGACY_PARENT.get(s["id"], s["id"]), "tag": s["tag"]})
        if [t for t, _, _ in tops] != [p["tag"] for p in parents]:
            sys.exit(f"{path}: {rel} top-level tags {[t for t, _, _ in tops]} differ from the ledger {[p['tag'] for p in parents]}")
        secs = []
        for k, ((tag, a, b), p) in enumerate(zip(tops, parents)):
            if p["id"] in DECOMPOSE:
                strat, ids = DECOMPOSE[p["id"]]
                for n, ptag, s, e, dom in decompose(strat, L, a, b, rel, k):
                    secs.append({"id": ids[n], "tag": ptag, "anchor": None, "file": rel, "lines": [s, e], "parent": p["id"], "dom": dom})
            else:
                secs.append({"id": p["id"], "tag": tag, "anchor": None, "file": rel, "lines": [a, b], "dom": {"top": k}})
        secs.append({"id": "shell.consent-banner-root", "tag": "div", "anchor": 'data-testid="consent-banner-root"', "file": consent_rel,
                     "lines": [c_start, c_end], "dom": {"consent": True}})
        for i, s in enumerate(secs): s["idx"] = i
        routes_out.append({"route": path, "title": r["title"], "h1": r["h1"], "template": r["template"], "file": page_rel,
                           "sections": [{k: s[k] for k in ("idx", "id", "tag", "anchor", "file", "lines", "parent", "dom") if k in s} for s in secs]})
    led["sourceProject"]["snapshotFolder"] = "src/"
    led["note"] = ("Citation ledger. `file` + `lines` are line ranges in the runnable clone's own tracked source (src/sections/*.jsx, "
                   "one component per route holding <main>, plus the shared consent component). Generated by extraction/build_source_map.py "
                   "from src/routes.js order; verify_all.py re-reads every range and requires the cited tag on the first line. "
                   "The earlier ledger cited rendered-HTML snapshots under recon/, which the package never tracked, so a full git clone "
                   "could not check a single citation. `dom` tells extraction/measure_sections.mjs which rendered element each entry is. "
                   "Whole-document sections are decomposed by real content boundaries (`parent` names the block they came from).")
    led["routes"] = routes_out
    changed = []
    jdump(led_p, led, check, changed)

    # provenance into every contract that exists on disk
    inst = {}
    for r in routes_out:
        for s in r["sections"]:
            inst.setdefault(s["id"], []).append((r["route"], s))
    sec_dir = os.path.join(REPO, "sections")
    for f in sorted(os.listdir(sec_dir)):
        if not f.endswith(".json"): continue
        p = os.path.join(sec_dir, f); c = jload(p); sid = c["id"]
        if sid not in inst: continue
        cites = []
        for _, s in inst[sid]:
            cite = f"{s['file']}:{s['lines'][0]}-{s['lines'][1]}"
            if cite not in cites: cites.append(cite)
        first_route, s0 = inst[sid][0]
        dom = s0["dom"]
        where = ("consent root" if dom.get("consent") else
                 (f"top[{dom['top']}]" + (f" {dom['sel']}[{dom['nth']}]" if "sel" in dom else (f" {dom['span'][0]}..{dom['span'][1]}" if "span" in dom else ""))))
        c["evidence"]["measuredFrom"] = cites
        c["evidence"]["instances"] = len(inst[sid])
        c["evidence"]["routes"] = len({rt for rt, _ in inst[sid]})
        c["source"] = {"id": f"{os.path.basename(s0['file'])[:-4]}:{s0['tag']}@{s0['lines'][0]}", "tag": s0["tag"], "file": s0["file"],
                       "lines": list(s0["lines"]), "route": first_route}
        c["semantic"] = {"id": sid, "category": c["category"]}
        c["implementedBy"] = f"{s0['file']} > {where}"
        jdump(p, c, check, changed)
    if check:
        if changed: print("out of sync with src/:", ", ".join(changed)); sys.exit(1)
        print("build_source_map: ledger and contract provenance are in sync with src/"); return
    print(f"build_source_map: {len(routes_out)} routes, {sum(len(r['sections']) for r in routes_out)} cited ranges; rewrote {len(changed)} file(s)")


if __name__ == "__main__":
    main()
