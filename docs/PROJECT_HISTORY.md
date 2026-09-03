Project: affotech-agent-orchestrator
Documentation sync boundary: through ORCH-000204 Architect acceptance on 2026-09-03
Status: CURRENT HUMAN-READABLE PROJECTION
Machine authority: durable GitHub evidence and Architect decisions

# Project History

## Foundation through ORCH-000165

The project established Rony as final authority, Architect as governor/decision-maker, Executor as bounded worker, GitHub as durable evidence authority, exact lineage, no blind retry, and separation from AFFOTECH.

Key accepted foundations:

- ORCH-000153: exactly-once historical BrowserRelay delivery `WORKER-DELIVERY-EXECUTOR-000013/SENT`;
- ORCH-000163: Architect wake `ARCH-TRIGGER-9333-000005/SENT` exactly once;
- ORCH-000165: legacy worker-delivery lineage compatibility repair with full deterministic `817/817`.

## ORCH-000166 through ORCH-000194 — persistent-host recovery foundation

Persistent-host bootstrap, dispatch observation, immutable lease hydration, typed hash identities, exact create/readback semantics, and semantic GitHub `404 → NOT_FOUND` handling were established. ORCH-000193 closed the stale epoch-189 lease; ORCH-000194 proved zero-browser ACQUIRE → PREPARE → PROVEN_NOT_SENT → RELEASE.

## ORCH-000195 through ORCH-000197 — historical 9444 branch

The old BrowserRelay endpoint `9444` was found unavailable. That branch remained mutation-clean but was later superseded as the active transport direction after runtime identity was corrected.

## 2026-09-02 — runtime/transport identity correction

Rony confirmed the operational Executor is the Codex terminal/runtime in VS Code.

Permanent correction:

`role ≠ runtime ≠ transport ≠ browser/session ≠ endpoint`

BrowserRelay registration is historical evidence, not proof of current runtime transport.

## ORCH-000198 through ORCH-000200 — direct Codex primitive established

- ORCH-000198 accepted the current manual-to-Codex/direct-GitHub topology.
- ORCH-000199 accepted supported non-interactive `codex exec`.
- ORCH-000200 accepted one authenticated child `codex exec` with exact correlation and no retry.

## ORCH-000201 — governed direct-Codex adapter accepted

Decision:

`GH-DEC-201-GOVERNED-DIRECT-CODEX-ADAPTER-ACCEPTED`

Accepted source became `GH-PUB-201-GOVERNED-DIRECT-CODEX-ADAPTER-READY-000001` with 103 files, focused `95/95`, and full deterministic `833/833`.

The accepted adapter introduced deterministic direct-Codex identities, durable intent before spawn, at-most-once child spawn, duplicate suppression, reconciliation-required intent-without-result handling, explicit workdir/sandbox/ephemeral/timeout controls, exact durable Executor-terminal observation, durable result readback, distinct failure classes, and no BrowserRelay dependency.

## ORCH-000202 — first live adapter qualification INCONCLUSIVE

Decision:

`GH-DEC-202-DIRECT-CODEX-LIVE-INTENT-AMBIGUOUS-INCONCLUSIVE`

The live call created an immutable intent for:

`CODEX-DIRECT-INVOCATION-EXECUTOR-DISPATCH-000202-PROBE-000001`

but returned `INTENT_AMBIGUOUS` before child spawn.

Verified final state:

- intent `ARMED`;
- result absent;
- expected probe terminal absent;
- child/model invocation count `0`;
- replay count `0`;
- no retry authorized.

The adapter failed closed correctly. ORCH-000202 must not be rerun.

## ORCH-000203 — ambiguity observability diagnostic accepted

Decision:

`GH-DEC-203-DIRECT-CODEX-INTENT-AMBIGUITY-DIAGNOSTIC-ACCEPTED`

The read-only diagnostic reconstructed:

`send → createJson → readJsonCurrent → spawnChild`.

It proved the original ORCH-000202 evidence was insufficient to distinguish an ambiguous create/transport result from an exact readback normalization/observation failure. Mutation-disabled reproduction showed ambiguous create → zero spawn, while accepted create + exact readback reaches the spawn boundary.

Permanent lesson: create/readback decisions controlling process spawn require typed phase observability sufficient for diagnosis without retry.

## ORCH-000204 — create/readback observability repair accepted

Executor terminal:

`GH-PUB-204-DIRECT-CODEX-INTENT-OBSERVABILITY-REPAIR-READY-000001`

Architect decision:

`GH-DEC-204-DIRECT-CODEX-INTENT-OBSERVABILITY-REPAIR-ACCEPTED`

Accepted source became:

`GH-PUB-204-DIRECT-CODEX-INTENT-OBSERVABILITY-REPAIR-READY-000001`

Source facts:

- 103 files;
- focused/relevant `142/142`;
- full deterministic `844/844`;
- manifest `ee7aca2665853e8ebb9d0e0de99b510d84b7fa41282ebed88a1fa6b3c49bf3bf`;
- archive `34c4dd17b3475932de7513a4f0f395b0cb285229413128b357a6566da0134521`.

Changed paths:

- `src/host/codex-direct-transport.js`;
- `src/host/github-contents-runtime-client.js`;
- `test/codex-direct-transport.test.js`.

The repair added typed create status/reason/HTTP status, exact readback attempted/status/reason/match, and explicit ambiguity-phase evidence while preserving fail-closed, one-PUT, exact-readback, semantic-status, and no-blind-retry contracts.

ORCH-000204 performed zero real Codex/model invocation and zero mutation of the stranded ORCH-000202 invocation.

`documentationImpact=FULL`; `futureIdeaImpact=NONE`.

## Current target

ORCH-000205 is the next bounded reconciliation: close the abandoned ORCH-000202 direct-Codex invocation using first-hand zero-spawn evidence without modifying its immutable intent and without running Codex.

Only if the accepted GH-PUB-204 result schema safely supports a terminal non-spawn reconciliation result may ORCH-000205 create/read back one such result. Otherwise it must stop before mutation and report the schema boundary.

After reconciliation is independently accepted, Architect may authorize a fresh live qualification using a new direct-Codex invocation identity with ORCH-000204 observability active.
