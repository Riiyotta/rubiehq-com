#!/usr/bin/env python3
"""Whole-page-wrapper quality gate (R9), called from verify_all.py; also runnable on its own.

Reads extraction/measured-values.json -> sectionHeights (measured at 1440px from the BUILT clone by
extraction/measure_sections.mjs) and the section contracts:
  - HERO taller than 1800px: warning; taller than 3000px: error unless whitelisted.
  - one in-flow section holding more than 50% of its page: warning; more than 60%: error unless
    whitelisted. Pages with fewer than 3 in-flow non-SHELL sections are skipped; SHELL sections and
    fixed/sticky elements (inFlow false) never count.
  - every ledger section of every route must have a measurement (missing = error); the viewport must
    be 1440px wide (anything else = error).
  - whitelist entries (WHITELIST below) need reviewedBy, a justification of 30+ characters and a
    maxHeightPx above the measured height; a stale or exceeded entry fails, a whitelisted hit still warns.
    An agent's reviewedBy must say "agent attestation, not a human sign-off".
Thresholds are pinned here in code, not read from JSON.

check(repo) -> (errors, warnings).   CLI: python3 wrapper_gate.py
"""
import json, os, sys

HERO_WARN_PX, HERO_ERROR_PX = 1800, 3000
SHARE_WARN, SHARE_ERROR = 0.50, 0.60
MIN_INFLOW_SECTIONS = 3
VIEWPORT_WIDTH_PX = 1440
# (route, section id) -> review record. Empty: after decomposing the legal, article and customer-story
# bodies (R6) no section crosses an error threshold, so nothing needs an exception.
WHITELIST = {}
AGENT_MARK = "agent attestation, not a human sign-off"


def check(repo, led=None, whitelist=None):
    """led / whitelist overrides exist for the adversarial suite (synthetic heights, synthetic exceptions)."""
    errs, warns = [], []
    WL = WHITELIST if whitelist is None else whitelist
    if led is None: led = json.load(open(os.path.join(repo, "extraction", "measured-values.json"), encoding="utf-8"))
    secs = {}
    for f in os.listdir(os.path.join(repo, "sections")):
        if f.endswith(".json"):
            c = json.load(open(os.path.join(repo, "sections", f), encoding="utf-8")); secs[c["id"]] = c
    sh = led.get("sectionHeights")
    if not sh: return ["wrapper gate: extraction/measured-values.json has no sectionHeights (measure with extraction/measure_sections.mjs)"], warns
    if sh.get("viewportWidthPx") != VIEWPORT_WIDTH_PX or not str(sh.get("viewport", "")).startswith(f"{VIEWPORT_WIDTH_PX}x"):
        errs.append(f"wrapper gate: sectionHeights measured at {sh.get('viewport')!r}, the gate requires {VIEWPORT_WIDTH_PX}px")
    used = set()
    for r in led["routes"]:
        m = sh.get("routes", {}).get(r["route"])
        if not m: errs.append(f"wrapper gate: no height measurement for route {r['route']}"); continue
        meas = m.get("sections", [])
        if [s.get("id") for s in meas] != [s["id"] for s in r["sections"]]:
            errs.append(f"wrapper gate: {r['route']} measured sections {[s.get('id') for s in meas]} differ from the ledger"); continue
        page = m.get("pageHeightPx") or 0
        if page <= 0: errs.append(f"wrapper gate: {r['route']} has no page height"); continue
        inflow = []
        for i, s in enumerate(meas):
            if s.get("missing") or not isinstance(s.get("heightPx"), (int, float)):
                errs.append(f"wrapper gate: missing measurement for {r['route']} section {i} ({s.get('id')})"); continue
            cat = secs.get(s["id"], {}).get("category")
            key = f"{r['route']}#{s['id']}"
            wl = WL.get(key)
            if cat == "HERO" and s["heightPx"] > HERO_WARN_PX:
                if s["heightPx"] > HERO_ERROR_PX and not wl: errs.append(f"wrapper gate: HERO {s['id']} on {r['route']} is {s['heightPx']}px (> {HERO_ERROR_PX}px)")
                else: warns.append(f"wrapper gate: HERO {s['id']} on {r['route']} is {s['heightPx']}px (> {HERO_WARN_PX}px){' [whitelisted]' if wl else ''}")
            if s.get("inFlow") and cat != "SHELL": inflow.append((s, wl, key))
        if len(inflow) < MIN_INFLOW_SECTIONS: continue
        for s, wl, key in inflow:
            share = s["heightPx"] / page
            if share > SHARE_WARN:
                if share > SHARE_ERROR and not wl: errs.append(f"wrapper gate: {s['id']} holds {share:.0%} of {r['route']} ({s['heightPx']}/{page}px, > {SHARE_ERROR:.0%})")
                else: warns.append(f"wrapper gate: {s['id']} holds {share:.0%} of {r['route']} ({s['heightPx']}/{page}px, > {SHARE_WARN:.0%}){' [whitelisted]' if wl else ''}")
            if wl:
                used.add(key)
                if s["heightPx"] > wl.get("maxHeightPx", 0): errs.append(f"wrapper gate: whitelist {key} cap {wl.get('maxHeightPx')}px exceeded ({s['heightPx']}px)")
    for key, wl in WL.items():
        if not wl.get("reviewedBy"): errs.append(f"wrapper gate: whitelist {key} has no reviewedBy")
        elif "agent" in wl["reviewedBy"].lower() and AGENT_MARK not in wl["reviewedBy"]: errs.append(f"wrapper gate: whitelist {key} reviewedBy must say '{AGENT_MARK}'")
        if len(wl.get("justification", "")) < 30: errs.append(f"wrapper gate: whitelist {key} justification shorter than 30 characters")
        if key not in used: errs.append(f"wrapper gate: whitelist {key} is stale (no matching measured section over a threshold)")
    return errs, warns


if __name__ == "__main__":
    e, w = check(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
    for x in w: print("WARN:", x)
    for x in e: print("ERROR:", x)
    print(f"wrapper gate: {len(e)} error(s), {len(w)} warning(s)")
    sys.exit(1 if e else 0)
