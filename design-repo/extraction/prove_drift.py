#!/usr/bin/env python3
"""Proves verify_all.py actually CATCHES drift: copies this design repo to a scratch folder,
injects one defect at a time, and requires verify_all.py to fail with the matching message.
Also requires the unmodified copy to pass (a check that rejects everything is broken too).
The clone's own src/, public/ and package.json (the evidence tree) are symlinked read-only into each
scratch package, so citation, asset, route-coverage and freshness checks run for real; when the
design-repo is run alone (no clone beside it) the injections that need that tree are skipped, not passed.
Usage: python3 prove_drift.py [--scratch DIR]   (DIR: where scratch copies go; default: the OS temp dir)"""
import argparse, json, os, re, shutil, subprocess, sys, tempfile

HERE = os.path.dirname(os.path.abspath(__file__))
REPO = os.path.dirname(HERE)
PKG = os.path.dirname(REPO)
EVIDENCE = [x for x in ("src", "public", "package.json", "CLONE_SPEC.md") if os.path.exists(os.path.join(PKG, x))]
HAS_TREE = all(x in EVIDENCE for x in ("src", "public", "package.json"))


def jload(p): return json.load(open(p, encoding="utf-8"))
def jsave(p, d): json.dump(d, open(p, "w", encoding="utf-8"), indent=2)


def first_section(r):
    return sorted(f for f in os.listdir(os.path.join(r, "sections")) if f.endswith(".json"))[0]


def inj_phantom(r):
    p = os.path.join(r, "tokens/llm/component-allowlist.json"); d = jload(p); d["sections"].append("content.phantom-section"); jsave(p, d)
def inj_orphan(r):
    src = os.path.join(r, "sections", first_section(r)); d = jload(src); d["id"] = "content.orphan-section"
    jsave(os.path.join(r, "sections/content.orphan-section.json"), d)
def inj_count(r):
    p = os.path.join(r, "registry.manifest.json"); d = jload(p); d["counts"]["sections"] += 1; jsave(p, d)
def inj_readme(r):
    p = os.path.join(r, "README.md"); s = open(p).read(); s = re.sub(r"^- Templates: (\d+)$", lambda m: f"- Templates: {int(m.group(1)) + 7}", s, flags=re.M); open(p, "w").write(s)
def _ledger(r):
    p = os.path.join(r, "extraction/measured-values.json"); return p, jload(p)
def _first_cited(d):
    return next((x for rt in d["routes"] for x in rt["sections"] if x.get("lines")), None)
def inj_cite_range(r):   # the ledger claims a range past the end of the snapshot file
    p, d = _ledger(r); x = _first_cited(d)
    if not x: return False
    x["lines"] = [999999, 1000000]; jsave(p, d)
def inj_cite_wrong(r):   # in range, but the cited line is not that element (anchor no longer on the line)
    p, d = _ledger(r); x = _first_cited(d)
    if not x: return False
    x["anchor"] = "anchor-that-is-not-on-this-line"; jsave(p, d)
def inj_cite_other(r):   # a contract cites a range that belongs to a DIFFERENT section
    _, led = _ledger(r)
    ents = [(x["id"], f"{x.get('file', rt['file'])}:{x['lines'][0]}-{x['lines'][1]}") for rt in led["routes"] for x in rt["sections"] if x.get("lines")]
    if not ents: return False
    a = ents[0]; b = next((e for e in ents if e[0] != a[0]), None)
    if not b: return False
    p = os.path.join(r, "sections", a[0] + ".json"); d = jload(p); d["evidence"]["measuredFrom"] = [b[1]]; jsave(p, d)
def inj_allow_version(r):
    p = os.path.join(r, "tokens/llm/component-allowlist.json"); d = jload(p); d["version"] = str(d["version"]) + "-drift"; jsave(p, d)
def inj_pinned(r):
    p = os.path.join(r, "assets/asset-roles.json"); d = jload(p); d["roles"]["avatar"]["generationPolicy"] = "may-generate-new"; jsave(p, d)  # valid value, wrong for this role
def inj_abs(r):
    # the probe path is assembled at run time so this file itself never contains a machine path
    probe = "/" + "/".join(["Us" + "ers", "someone", "project"])
    p = os.path.join(r, "README.md"); open(p, "a").write(f"\nSource: {probe}\n")
def inj_entry(r):
    p = os.path.join(r, "registry.manifest.json"); d = jload(p); d["entryPoints"]["tokenCatalog"] = "../ia.json"; jsave(p, d)
def inj_policy(r):
    p = os.path.join(r, "tokens/llm/token-policy.json"); d = jload(p); d["rawValueRestrictions"]["typography-human-label"] = "forbidden"; jsave(p, d)
def inj_graph(r):
    p = os.path.join(r, "compatibility/graph.json"); d = jload(p)
    lim = next(x for x in d["rules"] if x["id"] == "SECTION_PER_PAGE_LIMITS")["limits"]
    if not lim: return False
    k = sorted(lim)[0]; lim[k] += 5; jsave(p, d)
def inj_theme(r):
    p = os.path.join(r, "tokens/themes/light.json"); d = jload(p)
    if not d["resolves"]: return False
    k = sorted(d["resolves"])[0]; d["resolves"][k] = "rgb(1,2,3)"; jsave(p, d)
def inj_schema_enum(r):
    p = os.path.join(r, "schema/pagespec.schema.json"); d = jload(p); d["definitions"]["node"]["properties"]["type"]["enum"].append("hero.not-a-contract"); jsave(p, d)
def inj_rule_kind(r):
    p = os.path.join(r, "compatibility/graph.json"); d = jload(p); d["rules"].append({"id": "UNIMPLEMENTED", "severity": "error", "kind": "notARealKind"}); jsave(p, d)
def inj_snapshot_folder(r):   # the ledger declares an evidence folder that does not exist — must fail outright, not fall back silently
    p, d = _ledger(r)
    if "snapshotFolder" not in d.get("sourceProject", {}): return False
    d["sourceProject"]["snapshotFolder"] = "does-not-exist/src/"; jsave(p, d)
def inj_hero_exception(r):   # the graph claims a template has >1 HERO section that it does not
    p = os.path.join(r, "compatibility/graph.json"); d = jload(p)
    rule = next((x for x in d["rules"] if x["id"] == "ONE_HERO_PER_PAGE"), None)
    if rule is None: return False
    rule["exceptions"] = list(rule.get("exceptions", [])) + ["template.phantom-multi-hero"]; jsave(p, d)

def _edit_text(r, rel, old, new):
    p = os.path.join(r, rel); s = open(p, encoding="utf-8").read()
    if old not in s: raise RuntimeError(f"{rel}: anchor {old!r} not found")
    open(p, "w", encoding="utf-8").write(s.replace(old, new, 1))
def inj_avail_registry(r):   # registry alone loosens a pinned availability
    p = os.path.join(r, "assets/asset-roles.json"); d = jload(p); d["roles"]["logo"]["availability"] = "generation-safe"; jsave(p, d)
def inj_avail_registry_and_validator(r):   # registry + semantic_validate pin flipped together: verify_all's own pin still holds
    inj_avail_registry(r); _edit_text(r, "schema/semantic_validate.py", '"logo": "clone-only"', '"logo": "generation-safe"')
def inj_avail_pin_removed(r):   # the pin line removed from verify_all only
    _edit_text(r, "extraction/verify_all.py", '"logo": "clone-only", ', '')
def inj_substitute(r):
    p = os.path.join(r, "assets/asset-roles.json"); d = jload(p); d["roles"]["customer-logo"]["generationSafeSubstitutes"] = ["logo"]; jsave(p, d)
def inj_retrieval_contract_and_allowlist(r):   # contract + allowlist flipped together
    p = os.path.join(r, "sections/shell.consent-banner-root.json"); d = jload(p); d["retrievalEligible"] = True; d.pop("retrievalReason", None); jsave(p, d)
    p = os.path.join(r, "tokens/llm/component-allowlist.json"); d = jload(p); d["retrievalIneligible"] = []; jsave(p, d)
def inj_retrieval_pin_removed(r):
    _edit_text(r, "extraction/verify_all.py", 'RETRIEVAL_INELIGIBLE = {"shell.consent-banner-root"}', 'RETRIEVAL_INELIGIBLE = set()')
def inj_gate_threshold(r):
    _edit_text(r, "extraction/wrapper_gate.py", "HERO_WARN_PX, HERO_ERROR_PX = 1800, 3000", "HERO_WARN_PX, HERO_ERROR_PX = 2800, 9000")
def inj_heights_removed(r):
    p, d = _ledger(r); d.pop("sectionHeights", None); jsave(p, d)
def inj_height_missing(r):
    p, d = _ledger(r); d["sectionHeights"]["routes"]["/terms"]["sections"][1].pop("heightPx"); jsave(p, d)
def inj_identity_stale(r):
    p = os.path.join(r, "schema/source-identity.json"); d = jload(p); d["customers"] = d["customers"][1:]; jsave(p, d)
def inj_theme_combo(r):
    p = os.path.join(r, "tokens/llm/token-policy.json"); d = jload(p); d["themeCombinations"]["light"]["textOnSurface"]["surface.default"].append("text.inverse"); jsave(p, d)
def inj_font(r):
    p = os.path.join(r, "tokens/llm/token-policy.json"); d = jload(p); d["supportedFontFamilies"].append("Comic Sans MS"); jsave(p, d)
def inj_policy_hash(r):
    p = os.path.join(r, "compatibility/graph.json"); d = jload(p); d["rules"][0]["description"] += " (edited)"; jsave(p, d)
def inj_policy_saas_mismatch(r):
    p = os.path.join(r, "registry.manifest.json"); d = jload(p); d["designPolicy"]["policyId"] = "consumer-service-marketplace-web"; jsave(p, d)
def inj_policy_missing(r):
    os.remove(os.path.join(r, "policy/design-policy.json"))
def inj_route_unserved(r):
    p, d = _ledger(r); x = json.loads(json.dumps(d["routes"][1])); x["route"] = "/not-served"; d["routes"].append(x); jsave(p, d)
def inj_asset_flag(r):
    p = os.path.join(r, "assets/asset-roles.json"); d = jload(p); a = next(a for a in d["assets"] if a.get("inClone")); a["inClone"] = False; jsave(p, d)
def inj_asset_unregistered(r):
    p = os.path.join(r, "assets/asset-roles.json"); d = jload(p); d["assets"] = [a for a in d["assets"] if not a["path"].startswith("stills/")]; jsave(p, d)
def inj_source_tag(r):
    p = os.path.join(r, "sections/hero.home.json"); d = jload(p); d["source"]["tag"] = "article"; jsave(p, d)
def inj_source_is_semantic(r):
    p = os.path.join(r, "sections/hero.home.json"); d = jload(p); d["source"]["id"] = "hero.home"; jsave(p, d)
def inj_contract_open(r):
    p = os.path.join(r, "sections/hero.home.json"); d = jload(p); d["inventedField"] = True; jsave(p, d)
def inj_gen_example_missing(r):
    os.remove(os.path.join(r, "schema/examples/generated-legal.pagespec.json"))
def inj_example_mode(r):
    p = os.path.join(r, "schema/example.pagespec.json"); d = jload(p); d["mode"] = "generation"; jsave(p, d)
def inj_derived_stale(r):   # a contract budget edited without regenerating the schema/allowlist layers
    p = os.path.join(r, "sections/hero.home.json"); d = jload(p); d["content"]["fields"]["images"]["maxItems"] += 1; jsave(p, d)


INJECTIONS = [
    ("phantom allowlist entry", inj_phantom, "has no contract file"),
    ("orphan section contract", inj_orphan, "has no allowlist entry"),
    ("wrong manifest count", inj_count, "manifest counts.sections"),
    ("stale README count", inj_readme, "README count 'Templates'"),
    ("out-of-range citation", inj_cite_range, "range exceeds the file", "tree"),
    ("in-range citation pointing at the wrong element", inj_cite_wrong, "does not contain the cited element", "tree"),
    ("contract citing another section's range", inj_cite_other, "points at", None),
    ("allowlistVersion drift", inj_allow_version, "allowlistVersion drift"),
    ("pinned asset policy changed to a different valid value", inj_pinned, "pinned asset role 'avatar'"),
    ("absolute path leak", inj_abs, "absolute path"),
    ("entryPoint escaping design-repo", inj_entry, "entryPoints.tokenCatalog"),
    ("policy category not in catalog", inj_policy, "rawValueRestrictions"),
    ("graph limit drifted from contract", inj_graph, "SECTION_PER_PAGE_LIMITS"),
    ("theme resolution drift", inj_theme, "theme light"),
    ("schema enum drifted from contracts", inj_schema_enum, "schema node type enum"),
    ("graph rule the validator does not implement", inj_rule_kind, "not implemented"),
    ("snapshotFolder points at a missing evidence folder", inj_snapshot_folder, "declares sourceProject.snapshotFolder", "tree"),
    ("ONE_HERO_PER_PAGE exception for a template that is not one", inj_hero_exception, "ONE_HERO_PER_PAGE exceptions"),
    ("registry availability loosened (logo -> generation-safe)", inj_avail_registry, "PINNED_AVAILABILITY: asset role 'logo'"),
    ("registry + semantic_validate pin flipped together", inj_avail_registry_and_validator, "PINNED_AVAILABILITY"),
    ("availability pin removed from verify_all only", inj_avail_pin_removed, "PINNED_AVAILABILITY differs"),
    ("substitute pointing at a clone-only role", inj_substitute, "is not a generation-safe role"),
    ("retrieval flipped in contract + allowlist together", inj_retrieval_contract_and_allowlist, "retrieval pin"),
    ("retrieval pin removed from verify_all", inj_retrieval_pin_removed, "RETRIEVAL_INELIGIBLE differs"),
    ("wrapper-gate threshold loosened in code", inj_gate_threshold, "thresholds drifted"),
    ("sectionHeights removed", inj_heights_removed, "no sectionHeights"),
    ("one section measurement missing", inj_height_missing, "missing measurement"),
    ("source-identity edited by hand (stale vs src/)", inj_identity_stale, "build_source_identity.py --check", "tree"),
    ("token policy theme combination out of sync with the theme", inj_theme_combo, "themeCombinations"),
    ("token policy font list out of sync with the font tokens", inj_font, "supportedFontFamilies"),
    ("policy-enforcing file changed, contentHash not recomputed", inj_policy_hash, "contentHash is stale"),
    ("SaaS classification bound to a non-SaaS policy", inj_policy_saas_mismatch, "must bind n0-saas-design-constraints-common"),
    ("policy file missing", inj_policy_missing, "policy/design-policy.json"),
    ("ledger maps a route src/routes.js does not serve", inj_route_unserved, "does not serve it", "tree"),
    ("asset inClone flag contradicts public/", inj_asset_flag, "registry says inClone=false", "tree"),
    ("clone file with no registry entry", inj_asset_unregistered, "has no registry entry", "tree"),
    ("contract source tag not at the cited line", inj_source_tag, "has no <article>", "tree"),
    ("source.id equal to the semantic id", inj_source_is_semantic, "must not equal the semantic id"),
    ("section contract with an unknown key", inj_contract_open, "violates section-contract.schema.json"),
    ("a template without a generation example", inj_gen_example_missing, "no mode=generation example"),
    ("clone control switched to generation mode", inj_example_mode, "must be the clone-mode control"),
    ("contract edited without regenerating derived layers", inj_derived_stale, "sync_contract_layers.py --check", "tree"),
]


def run(r, full=False):
    env = dict(os.environ, PYTHONDONTWRITEBYTECODE="1")
    if not full: env["VERIFY_SKIP_ADVERSARIAL"] = "1"  # injections target verify_all's own checks
    p = subprocess.run([sys.executable, os.path.join(r, "extraction/verify_all.py")], capture_output=True, text=True, env=env)
    return p.returncode, p.stdout + p.stderr


def main():
    ap = argparse.ArgumentParser(); ap.add_argument("--scratch", help="directory for scratch copies (default: OS temp dir)")
    args = ap.parse_args()
    if args.scratch: os.makedirs(args.scratch, exist_ok=True)
    tmp = tempfile.mkdtemp(prefix="drift-", dir=args.scratch)
    try:
        def fresh():
            pkg = tempfile.mkdtemp(dir=tmp)
            shutil.copytree(REPO, os.path.join(pkg, "design-repo"), ignore=shutil.ignore_patterns("__pycache__"))
            for x in EVIDENCE: os.symlink(os.path.join(PKG, x), os.path.join(pkg, x))
            return os.path.join(pkg, "design-repo")
        ok = fail = skip = 0
        code, out = run(fresh(), full=True)
        if code == 0: ok += 1; print("  ok    control: unmodified copy is admitted" + ("" if HAS_TREE else " (design-repo alone: evidence checks degrade to warnings)"))
        else: fail += 1; print("  FAIL  control: unmodified copy was rejected:\n" + out)
        for inj in INJECTIONS:
            label, fn, needle = inj[:3]; needs = inj[3] if len(inj) > 3 else None
            if needs == "tree" and not HAS_TREE:
                skip += 1; print(f"  skip  {label}: needs the clone's src/ + public/ beside design-repo/ (design-repo run alone)"); continue
            r = fresh()
            try:
                applied = fn(r)
            except Exception as e:  # a broken injection is a failure of this proof, not a silent pass
                fail += 1; print(f"  FAIL  {label}: the injection itself crashed: {e!r}"); continue
            if applied is False:
                skip += 1; print(f"  skip  {label}: not applicable to this repo"); continue
            code, out = run(r)
            if code != 0 and needle in out: ok += 1; print(f"  ok    caught: {label}")
            else: fail += 1; print(f"  FAIL  NOT caught: {label} (expected '{needle}')\n{out[-600:]}")
        print(f"drift-proof: {ok} passed, {fail} failed, {skip} skipped")
        sys.exit(1 if fail else 0)
    finally:
        shutil.rmtree(tmp, ignore_errors=True)


if __name__ == "__main__":
    main()
