Project: affotech-agent-orchestrator
Documentation sync boundary: through ORCH-000205 Architect acceptance on 2026-09-03
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

The first live call created an immutable `ARMED` intent for `CODEX-DIRECT-INVOCATION-EXECUTOR-DISPATCH-000202-PROBE-000001` but returned `INTENT_AMBIGUOUS` before child spawn.

Verified historical final state before reconciliation:

- result absent;
- old probe terminal absent;
- child/model invocation count `0`;
- replay count `0`;
- no retry authorized.

ORCH-000202 remains historically INCONCLUSIVE.

## ORCH-000203 — ambiguity observability diagnostic accepted

Decision:

`GH-DEC-203-DIRECT-CODEX-INTENT-AMBIGUITY-DIAGNOSTIC-ACCEPTED`

The read-only diagnostic proved the original live evidence could not distinguish an ambiguous create/transport result from exact readback normalization/observation failure. It established the permanent requirement for typed pre-spawn create/readback observability.

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

The repair added typed create status/reason/HTTP status, exact readback attempted/status/reason/match, and explicit ambiguity phase while preserving fail-closed one-PUT/exact-readback/no-blind-retry behavior.

## ORCH-000205 — stranded ORCH-000202 identity reconciled

Executor terminal:

`GH-PUB-205-DIRECT-CODEX-STRANDED-INVOCATION-RECONCILED-000001`

Architect decision:

`GH-DEC-205-DIRECT-CODEX-STRANDED-INVOCATION-RECONCILIATION-ACCEPTED`

The accepted GH-PUB-204 result schema safely supported terminal non-spawn closure using existing `RECONCILIATION_REQUIRED` semantics.

Exactly one durable result was created for the old invocation with:

- `childStarted=false`;
- `childInvocationCount=0`;
- `terminalObserved=false`;
- `terminalPublicationId=null`;
- `retryAttempted=false`;
- `retryAuthorized=false`;
- `outcome=RECONCILIATION_REQUIRED`.

The immutable intent blob remained unchanged. The old probe terminal remained absent. One injected duplicate-suppression replay produced spawn `0` with no second mutation. Real child/model invocation remained `0`.

This closes the abandoned invocation identity for reuse without changing ORCH-000202's historical INCONCLUSIVE classification.

`documentationImpact=STATE`; `futureIdeaImpact=NONE`.

## Current target

ORCH-000206 is the next fresh live direct-Codex adapter qualification.

It must use a new probe dispatch and invocation identity, exactly one real authenticated child on first-call success, ORCH-000204 typed create/readback observability, exact durable child terminal observation, exact result readback, and one duplicate replay with second spawn `0`.

It must not touch the reconciled ORCH-000202 identity, start the persistent host, use BrowserRelay, reuse worker delivery `000015`, or access AFFOTECH/Drive.

Only ORCH-000206 acceptance may authorize the later persistent-host automatic dispatch → direct Codex qualification.
