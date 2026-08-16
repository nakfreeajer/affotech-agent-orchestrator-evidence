# ORCH.P0.WORKER.RELAY.GITHUB.DISPATCH.NATIVE.RESOLVER.BASELINE.RECONCILIATION.1A

Result: ORCH034_NOT_DERIVED_FROM_ACCEPTED_SOURCE_BASELINE
Classification: ORCH034_BASELINE_WORKSPACE_MISMATCH
Worker outcome: BLOCKED

Dispatch: DISPATCH-000035 / ORCH-000035
Captured origin/main ref: 1a7a5137964a8f302ffd9de5b67db0b7d95df4ee
Canonical prompt SHA-256: e2a06143934f8197dd366484f9b69de36a80d7dfb3fc41fac71c87471026b26e

Both preserved archives were read from Git objects at the single captured ref and verified before extraction:

- ORCH-000030: 66 files; 48035 bytes; archive SHA-256 db0ae6ce35ca02839d6f018842a48aff7a83254ff801d478434a4da797aba389.
- ORCH-000034: 55 files; 27316 bytes; archive SHA-256 71ddec7acae1bb7adf553f8a2fad9a1bb60550921a422d7964d1dc94e21291b9.

Manifest reconciliation:

- ORCH-000030 declared manifest: 290c40a3d96d127dd3e1dfe56eb1e86f3dc92d6a6b55d2aa97028e0e1f2df77a.
- ORCH-000034 declared manifest: 30fac18e65e6c4c1d96258ddd5d65255da178ec2ee641581671999f0df8cf9d8.
- Independent established raw-byte manifest recomputation (`<sha256>  <normalized slash path>`, path-sorted, UTF-8 LF): ORCH-000030 d915fda858de710e4c338e689635a5b7729c57d593c34834d7ac7baaeb2d8dd6; ORCH-000034 8706c49965530860373553d7289c9ee6352001adf0b704c1d56e9379e476ed3b.
- Neither declared manifest reproduces under the established algorithm; the immutable archive bytes and file-level hashes remain independently usable for the path/delta comparison.

Exact path reconciliation:

Common paths: 55.

Only in ORCH-000030 (11):
- README.md
- src/browser-relay/browser-relay.js
- src/browser-relay/constants.js
- src/browser-relay/registration.js
- src/github-transport/constants.js
- src/github-transport/publisher.js
- src/github-transport/wrapper.js
- src/prompt-ledger/prompt-ledger.js
- test/browser-relay.test.js
- test/github-transport.test.js
- test/prompt-ledger.test.js

Only in ORCH-000034: none.

Byte-different common paths (ORCH-000030 SHA-256 -> ORCH-000034 SHA-256):

- src/browser-relay/worker-relay.js: 1c357fe78e12149b028d9c6f3a4bc789d07489ff4b07c1ae484d9f420532b807 -> 5d9fdc047bcf75315b67a5831c01a2eca301595059d299b89bdc9100748eb6a6
- src/recovery/exactly-once.js: 4f7628fd9ccd6b5c6729b11af94a3261b39ce03eeecaee004706f5f121aa00e0 -> 1129520dce3589a5075b5414757a47569c3495cfe26f0a467bb14eb001868232
- test/p0-1c-recovery.test.js: 4a7f68b0a3e9baed4622ec7a1f334abfc5ad2a051e05b210cd33fc390ba2798c -> 15cccb93494810d3719b9a50e6b6420c00c7fffd0cb03aaa0413f11e8bd3a5e1
- test/worker-relay.test.js: b462db6da4016605a7f532e061127aa4f647fdb920ef194ccceaa9afc118043b -> 31002264b96aef3f4ff048545887be4cdaeda6015713bab1a8b41ac8b141f288

The two relay paths are the authorized ORCH-000034 implementation delta. The recovery source/test pair are additional common-file changes outside the authorized two-file envelope. Therefore ORCH-000034 is not derived from the accepted ORCH-000030 source baseline; its preserved state is an incomplete/different workspace.

Test reconciliation:

- Both package.json files are byte-identical and define `npm test` as `node --test`.
- ORCH-000030 npm test: 237 passed, 0 failed, 0 skipped.
- ORCH-000034 npm test: 157 passed, 0 failed, 0 skipped.
- ORCH-000030 focused worker-relay test: 35 passed, 0 failed, 0 skipped.
- ORCH-000034 focused worker-relay test: 16 passed, 0 failed, 0 skipped.
- Omitted test files and their ORCH-000030 counts: test/browser-relay.test.js 37; test/github-transport.test.js 13; test/prompt-ledger.test.js 19; total 69.
- Common test-file count change: test/worker-relay.test.js decreased by 19 (35 -> 16); test/p0-1c-recovery.test.js increased by 8 (64 -> 72). Other common test files were unchanged: evidence-bridge 27, mission-state-machine 22, protocol-doctor 20.
- Net: -69 -19 +8 = -80 tests, exactly 237 -> 157.

All commands ran from disposable extracted snapshots without dependency installation or snapshot modification. No source, test, config, browser, delivery, result, trigger, accepted-pointer, authority, AFFOTECH, Drive, or Curator state was modified. No browser ports were contacted.
