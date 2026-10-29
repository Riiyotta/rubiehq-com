#!/usr/bin/env python3
"""Computes registry.manifest.json designPolicy.contentHash: sha256 over every file the bound policy is
enforced by (policy/design-policy.json enforcedBy, sorted; each as path NUL bytes NUL). verify_all.py
recomputes the same value and fails when it is stale. Usage: python3 policy_hash.py [--write]"""
import hashlib, json, os, sys
REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
man_p = os.path.join(REPO, "registry.manifest.json")
man = json.load(open(man_p, encoding="utf-8"))
pol = json.load(open(os.path.join(REPO, man["designPolicy"]["ref"]), encoding="utf-8"))
h = hashlib.sha256()
for rel in sorted(pol["enforcedBy"]):
    h.update(rel.encode() + b"\0" + open(os.path.join(REPO, rel), "rb").read() + b"\0")
val = "sha256:" + h.hexdigest()
if "--write" in sys.argv:
    man["designPolicy"]["contentHash"] = val
    open(man_p, "w", encoding="utf-8").write(json.dumps(man, indent=2, ensure_ascii=False) + "\n")
print(val)
