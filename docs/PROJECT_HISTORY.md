Project: affotech-agent-orchestrator
Documentation sync boundary: through ORCH-000206 Architect review on 2026-09-04
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

The old BrowserRelay endpoint `9444` was found unavailable. That branch was later superseded as the active transport direction after runtime identity was corrected.

## 2026-09-02 — runtime/transport identity correction

Rony confirmed the operational Executor is the Codex terminal/runtime in VS Code.

Permanent correction:

`role ≠ runtime ≠ transport ≠ browser/session ≠ endpoint`

## ORCH-000198 through ORCH-000200 — direct Codex primitive established

- ORCH-000198 accepted the current manual-to-Codex/direct-GitHub topology.
- ORCH-000199 accepted supported non-interactive `codex exec`.
- ORCH-000200 accepted one authenticated child `codex exec` with exact correlation and no retry.

## ORCH-000201 — governed direct-Codex adapter accepted

Accepted source became `GH-PUB-201-GOVERNED-DIRECT-CODEX-ADAPTER-READY-000001` with 103 files, focused `95/95`, and full deterministic `833/833`.

## ORCH-000202 — first live adapter qualification INCONCLUSIVE

The first live attempt created an `ARMED` intent but stopped before child spawn. Child/model invocation count was `0`. ORCH-000202 remained historically INCONCLUSIVE.

## ORCH-000203 / ORCH-000204 — observability diagnosis and repair

ORCH-000203 proved the original create/readback ambiguity lacked sufficient typed evidence. ORCH-000204 implemented and accepted typed create/readback observability while preserving fail-closed and no-retry semantics.

Accepted source became:

`GH-PUB-204-DIRECT-CODEX-INTENT-OBSERVABILITY-REPAIR-READY-000001`

Qualification: 103 files; focused/relevant `142/142`; full deterministic `844/844`; manifest `ee7aca2665853e8ebb9d0e0de99b510d84b7fa41282ebed88a1fa6b3c49bf3bf`; archive `34c4dd17b3475932de7513a4f0f395b0cb285229413128b357a6566da0134521`.

## ORCH-000205 — abandoned ORCH-000202 identity reconciled

The old invocation was durably closed using existing `RECONCILIATION_REQUIRED` result semantics with zero child spawn, no terminal observation, retry disabled, immutable intent unchanged, and duplicate suppression proven. This did not convert ORCH-000202 into PASS.

## ORCH-000206 — fresh live child ran, durable probe terminal missing

Executor terminal:

`GH-PUB-206-GOVERNED-DIRECT-CODEX-ADAPTER-LIVE-QUALIFIED-000001`

Architect decision:

`GH-DEC-206-DIRECT-CODEX-FRESH-TERMINAL-NOT-OBSERVED-BLOCKED`

Fresh invocation:

`CODEX-DIRECT-INVOCATION-EXECUTOR-DISPATCH-000206-PROBE-000001`

The repaired pre-spawn boundary succeeded with ambiguity phase `NONE`, then exactly one real child `codex exec` ran and exited `0` without timeout. However, the required durable child probe terminal `GH-PUB-206-DIRECT-CODEX-LIVE-PROBE-000001` was never published/observed.

The adapter correctly persisted `TERMINAL_NOT_OBSERVED`, disabled retry, and performed no duplicate replay or second spawn. No source, host, BrowserRelay, worker-delivery, registration, lease, trigger, AFFOTECH, or Drive mutation occurred.

Permanent distinction reinforced:

`process exit 0 ≠ dispatch execution ≠ durable terminal publication ≠ transport success`.

`documentationImpact=STATE`; `futureIdeaImpact=NONE`.

## Current target

ORCH-000207 is the next read-only forensic diagnostic of the completed ORCH-000206 child/publication boundary. It must use zero new model invocations and determine, if recoverable, what the child actually received/emitted and whether GitHub publication tooling/network/auth was available. If exact completed-child evidence is unavailable, it must stop at observability insufficiency and define the minimum bounded child-output capture repair before any new live attempt.
