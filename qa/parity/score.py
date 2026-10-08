#!/usr/bin/env python3
"""Score every captured route against its original crawl screenshot.

Writes qa/parity/parity.json. Every route in src/routes.js is scored; a route
may only be absent if it is listed in EXCLUDED with a reason.
"""
import json, os, sys
from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
GATE = 0.80
EXCLUDED = {}          # route -> rationale (none intentionally excluded)
TOL = 26               # per-channel tolerance; anti-aliasing/font-hinting noise

def load(p):
    im = Image.open(p).convert("RGB")
    return im

def match(a, b, y0, y1, width=1440):
    """Fraction of pixels agreeing within TOL over the y-band common to both."""
    ha, hb = a.size[1], b.size[1]
    y1 = min(y1, ha, hb)
    if y1 <= y0: return 0.0
    box = (0, y0, min(width, a.size[0], b.size[0]), y1)
    ca, cb = a.crop(box), b.crop(box)
    # downsample for speed; preserves structural agreement
    w = max(1, box[2] // 4); h = max(1, (y1 - y0) // 4)
    ca = ca.resize((w, h), Image.BILINEAR); cb = cb.resize((w, h), Image.BILINEAR)
    pa, pb = ca.load(), cb.load()
    ok = tot = 0
    for yy in range(h):
        for xx in range(w):
            r1, g1, b1 = pa[xx, yy]; r2, g2, b2 = pb[xx, yy]
            if abs(r1-r2) <= TOL and abs(g1-g2) <= TOL and abs(b1-b2) <= TOL: ok += 1
            tot += 1
    return ok / tot if tot else 0.0

def main():
    cap = json.load(open(os.path.join(ROOT, "qa/parity/capture.json")))
    rows = []
    for c in cap:
        route = c["route"]
        if route in EXCLUDED: continue
        if c.get("error"):
            rows.append({"route": route, "error": c["error"], "score": 0.0, "pass": False}); continue
        ref_name = c.get("reference")
        ref_path = os.path.join(ROOT, "recon/images", ref_name) if ref_name else None
        clone_path = os.path.join(ROOT, "qa/parity/shots", f"{c['file']}.clone.png")
        if not ref_path or not os.path.isfile(ref_path) or not os.path.isfile(clone_path):
            rows.append({"route": route, "error": "missing reference or clone shot", "score": 0.0, "pass": False}); continue

        ref, clone = load(ref_path), load(clone_path)
        mh, ch = ref.size[1], clone.size[1]
        hr = min(mh, ch) / max(mh, ch)          # height agreement
        sec_rows = []
        for s in c.get("sections", []):
            pm = match(ref, clone, s["y"], s["y"] + s["h"])
            sec_rows.append({"component": s["id"], "mirrorHeight": mh, "cloneHeight": ch,
                             "y": s["y"], "h": s["h"], "pixelMatch": round(pm, 3),
                             "score": round(pm * (hr if s["h"] > 400 else 1.0), 3)})
        page_pm = match(ref, clone, 0, min(mh, ch))
        score = round(page_pm * hr, 3)
        below = [f"{r['component']} {int(r['score']*100)}%" for r in sec_rows if r["score"] < GATE]
        rows.append({
            "route": route, "reference": ref_name, "sections": len(sec_rows),
            "mirrorPageHeight": mh, "clonePageHeight": ch, "heightAgreement": round(hr, 3),
            "pagePixelMatch": round(page_pm, 3), "score": score,
            "below": below, "overflowX": c.get("overflowX", False),
            "pageErrors": c.get("pageErrors", []), "secRows": sec_rows,
            "pass": score >= GATE,
        })
        print(f"{route:42} h {mh:>5}->{ch:<5} match {page_pm:.3f}  score {score:.3f}  {'PASS' if score>=GATE else 'FAIL'}")

    scored = [r for r in rows if "score" in r]
    avg = round(sum(r["score"] for r in scored) / len(scored), 3) if scored else 0.0
    doc = {
        "gate": GATE, "tolerance": TOL,
        "routesInApp": len(cap), "routesScored": len(scored),
        "excluded": EXCLUDED,
        "average": avg,
        "pass": all(r.get("pass") for r in scored) and not EXCLUDED,
        "rows": rows,
    }
    json.dump(doc, open(os.path.join(ROOT, "qa/parity/parity.json"), "w"), indent=2)
    failing = [r["route"] for r in scored if not r.get("pass")]
    print(f"\nscored {len(scored)}/{len(cap)} routes   average {avg}   gate {GATE}")
    print("FAILING:", ", ".join(failing) if failing else "none")
    return 0 if doc["pass"] else 1

if __name__ == "__main__":
    sys.exit(main())
