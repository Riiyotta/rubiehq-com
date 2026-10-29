#!/usr/bin/env python3
"""Builds schema/source-identity.json: the registry of everything that identifies or reproduces the
source site, derived from the real clone source (src/), the asset registry and CLONE_SPEC.md, with
file:line evidence for every named pattern. semantic_validate.py uses it to reject a
mode="generation" PageSpec that leaks the source (one named rule per category):

  brand       Rubie / RubieHQ / rubiehq.com / Nightly Data, Inc. (legal entity)   GENERATION_MODE_BRAND
  customers   real customer companies (logo-strip list, logo alt text, story sidebars) GENERATION_MODE_CUSTOMER
  people      real named people (quote attributions)                         GENERATION_MODE_PERSON
  urls        source domains, absolute URLs found in src/                     GENERATION_MODE_URL
  endpoints   live mailto inboxes                                             GENERATION_MODE_EMBED
  assetPaths  every file the clone ships under public/                        GENERATION_MODE_ASSET
  screenshotPaths  rendered product imagery / canvas stills                   GENERATION_MODE_SCREENSHOT
  copy        sha256 of every 5-word shingle of source copy                   GENERATION_MODE_COPY
  claims      sha256 of every 3-word shingle that carries a number            GENERATION_MODE_CLAIM

Text is normalised identically here and in the validator (normalize()): NFKC, zero-width characters
removed, curly quotes straightened, every dash to '-', whitespace collapsed, lower-cased.
Detection is string-based: a paraphrase is not caught. No human has reviewed these patterns.
Usage: python3 build_source_identity.py [--check]"""
import hashlib, json, os, re, sys, unicodedata

HERE = os.path.dirname(os.path.abspath(__file__))
REPO = os.path.dirname(HERE)
PKG = os.path.dirname(REPO)
OUT = os.path.join(REPO, "schema", "source-identity.json")
ZW = dict.fromkeys(map(ord, "​‌‍⁠﻿­"), None)
QUOTES = {ord(c): "'" for c in "‘’‚‛′"} | {ord(c): '"' for c in "“”„‟″"}
DASHES = {ord(c): "-" for c in "‐‑‒–—―−"}


def normalize(s):
    s = unicodedata.normalize("NFKC", str(s)).translate(ZW).translate(QUOTES).translate(DASHES)
    return " ".join(s.split()).lower()


def words(s):
    return re.findall(r"[a-z0-9%$][a-z0-9%$'.\-]*", normalize(s))


def shingles(ws, n):
    return {" ".join(ws[i:i + n]) for i in range(len(ws) - n + 1)}


def h(s): return hashlib.sha256(s.encode("utf-8")).hexdigest()[:16]


def jsx_text_nodes(path):
    """(line, text) for every rendered text node / string literal in a JSX file."""
    out = []
    for i, l in enumerate(open(path, encoding="utf-8").read().split("\n"), 1):
        for m in re.finditer(r'\{"((?:[^"\\]|\\.)*)"\}', l):
            try: out.append((i, json.loads('"' + m.group(1) + '"')))
            except Exception: pass
        l2 = re.sub(r'\{"((?:[^"\\]|\\.)*)"\}', " ", l)
        for m in re.finditer(r">([^<>{}]+)<", l2):
            if m.group(1).strip(): out.append((i, m.group(1)))
        s = l2.strip()
        if s and not s.startswith(("<", "{", "}", "//", "/*", "*", "import", "export", "const", "return", "if", "try", ")")) and "=" not in s and "(" not in s:
            out.append((i, s))
        for m in re.finditer(r'\balt="([^"]+)"', l):
            out.append((i, m.group(1)))
    return out


def main():
    check = "--check" in sys.argv
    src = os.path.join(PKG, "src")
    if not os.path.isdir(src):
        sys.exit("build_source_identity.py needs the clone's src/ next to design-repo/")
    files = sorted(os.path.join(r, f) for r, _, fs in os.walk(src) for f in fs if f.endswith((".jsx", ".js")))
    nodes = [(os.path.relpath(p, PKG), i, t) for p in files for i, t in jsx_text_nodes(p)]

    def evidence(rx, flags=re.I):
        hits = []
        for p in files:
            for i, l in enumerate(open(p, encoding="utf-8").read().split("\n"), 1):
                if re.search(rx, l, flags): hits.append(f"{os.path.relpath(p, PKG)}:{i}")
        return hits

    def entry(name, rx, case_sensitive=False, kind=None):
        ev = evidence(rx, 0 if case_sensitive else re.I)
        if not ev: sys.exit(f"pattern {name!r} has no evidence in src/: refusing to register an invented pattern")
        e = {"name": name, "regex": rx, "caseSensitive": case_sensitive, "occurrences": len(ev), "evidence": ev[:3]}
        if kind: e["kind"] = kind
        return e

    brand = [entry("Rubie", r"\brubie(?:hq)?\b", kind="brand name / wordmark text"),
             entry("rubiehq.com", r"rubiehq\.com", kind="domain"),
             entry("Nightly Data, Inc.", r"\bnightly\s+data\b", kind="legal entity")]
    spec = os.path.join(PKG, "CLONE_SPEC.md")
    if os.path.isfile(spec):
        n = sum(1 for l in open(spec, encoding="utf-8") if re.search(r"rubie", l, re.I))
        brand[0]["cloneSpecLines"] = n

    # customers: the sr-only logo-strip list under "Trusted by leading companies", logo alt text, story sidebar names
    names = set()
    for p in files:
        L = open(p, encoding="utf-8").read().split("\n")
        for i, l in enumerate(L):
            if "Trusted by leading companies" in l:
                for l2 in L[i:i + 20]:
                    m = re.search(r"<li>([^<]+)</li>", l2)
                    if m: names.add(m.group(1).strip())
            m = re.search(r'<img alt="([^"]+)"', l)
            if m and not re.search(r"rubie", m.group(1), re.I): names.add(m.group(1).strip())
    led = json.load(open(os.path.join(REPO, "extraction", "measured-values.json"), encoding="utf-8"))
    for r in led["routes"]:
        for s in r["sections"]:
            if s["id"] == "proof.story-company-facts":
                L = open(os.path.join(PKG, s["file"]), encoding="utf-8").read().split("\n")
                m = next((re.search(r"<h2[^>]*>([^<]+)</h2>", l) for l in L[s["lines"][0] - 1:s["lines"][1]] if "<h2" in l), None)
                if m: names.add(m.group(1).strip())
    COMMON_WORDS = {"bound"}  # names that are also ordinary English words: matched case-sensitively, as a capitalised name
    cust = {}
    for n in sorted(names, key=lambda x: (x.lower(), x)):  # total order: set iteration order must not decide the stored spelling
        key = re.sub(r"[^a-z0-9]", "", n.lower())
        if key in cust: continue
        rx = r"\b" + r"[\s.\-]?".join(re.escape(x) for x in re.findall(r"[A-Za-z0-9]+", n)) + r"\b"
        cs = key in COMMON_WORDS
        cust[key] = entry(n, rx, case_sensitive=cs)

    # people: quote attributions ("Name, Title") inside <footer> of a <blockquote>
    people = {}
    for p in files:
        L = open(p, encoding="utf-8").read().split("\n")
        for i, l in enumerate(L):
            if "<blockquote" in l:
                for l2 in L[i:i + 12]:
                    m = re.search(r'^\s*(?:\{")?([A-Z][a-z]+(?: [A-Z][a-zA-Z\'-]+)+),', l2)
                    if m:
                        people.setdefault(m.group(1), None)
                    if "</blockquote>" in l2: break
    people = [entry(n, r"\b" + re.escape(n) + r"\b", case_sensitive=True, kind="full name") for n in sorted(people)]
    for e in list(people):
        last = e["name"].split()[-1]
        people.append(entry(last, r"\b" + re.escape(last) + r"\b", case_sensitive=True, kind="surname of " + e["name"]))

    urls = sorted({m for p in files for m in re.findall(r"https?://[A-Za-z0-9./_\-]+", open(p, encoding="utf-8").read()) if "w3.org" not in m})
    endpoints = sorted({m for p in files for m in re.findall(r"mailto:[A-Za-z0-9._%+\-]+@[A-Za-z0-9.\-]+", open(p, encoding="utf-8").read())})

    pub = os.path.join(PKG, "public")
    asset_paths = sorted("/" + os.path.relpath(os.path.join(r, f), pub) for r, _, fs in os.walk(pub) for f in fs)
    roles = {a["path"]: a["role"] for a in json.load(open(os.path.join(REPO, "assets", "asset-roles.json"), encoding="utf-8"))["assets"]}
    shots = sorted(p for p in asset_paths if p.startswith(("/stills/", "/_next/image")) or roles.get(p[1:]) in ("content-image", "animation-still", "hero-image"))

    copy, claims = set(), set()
    for _, _, t in nodes:
        ws = words(t)
        copy |= shingles(ws, 5)
        claims |= {s for s in shingles(ws, 3) if re.search(r"\d", s)}
    out = {
        "version": "0.1.0",
        "generatedBy": "extraction/build_source_identity.py (re-run after the clone source changes; verify_all.py fails if this file is stale)",
        "reviewStatus": "Derived mechanically from src/; no human has reviewed these patterns. Detection is string-based, so paraphrased source copy is not caught.",
        "normalization": "NFKC; zero-width characters removed; curly quotes straightened; all dashes to '-'; whitespace collapsed; lower-cased (except caseSensitive name patterns, matched on the un-lowered normalised text).",
        "brand": brand,
        "customers": list(cust.values()),
        "people": people,
        "domains": ["rubiehq.com"],
        "urls": urls,
        "endpoints": endpoints,
        "assetPaths": asset_paths,
        "screenshotPaths": shots,
        "copy": {"shingleWords": 5, "hash": "sha256, first 16 hex chars, of the space-joined normalised words", "count": len(copy), "values": sorted(h(s) for s in copy)},
        "claims": {"shingleWords": 3, "hash": "sha256, first 16 hex chars; only shingles that contain a digit", "count": len(claims), "values": sorted(h(s) for s in claims)},
        "allowedPlaceholderHosts": ["*.example", "*.invalid", "example.com", "example.org", "example.net"],
    }
    s = json.dumps(out, indent=1, ensure_ascii=False) + "\n"
    old = open(OUT, encoding="utf-8").read() if os.path.isfile(OUT) else None
    if check:
        if old != s: print("schema/source-identity.json is stale relative to src/"); sys.exit(1)
        print("build_source_identity: in sync with src/"); return
    open(OUT, "w", encoding="utf-8").write(s)
    print(f"build_source_identity: {len(brand)} brand, {len(cust)} customers, {len(people)} people, {len(urls)} urls, {len(endpoints)} endpoints, "
          f"{len(asset_paths)} asset paths ({len(shots)} screenshots), {len(copy)} copy shingles, {len(claims)} claim shingles")


if __name__ == "__main__":
    main()
