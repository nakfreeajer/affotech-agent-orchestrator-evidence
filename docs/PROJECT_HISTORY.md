Project: affotech-agent-orchestrator
Documentation sync boundary: through ORCH-000203 Architect acceptance on 2026-09-03
Status: CURRENT HUMAN-READABLE PROJECTION
Machine authority: durable GitHub evidence and Architect decisions

# Project History

## Foundation through ORCH-000165

The project established Rony as final authority, Architect as governor/decision-maker, Executor as bounded worker, GitHub as durable evidence authority, exact lineage, no blind retry, and separation from AFFOTECH.

Key accepted foundations:

- ORCH-000153: exactly-once historical BrowserRelay delivery `WORKER-DELIVERY-EXECUTOR-000013/SENT`;
- ORCH-000163: exactly-once Architect wake `ARCH-TRIGGER-9333-000005/SENT`;
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
- ORCH-000199 accepted supported non-interactive `codex exec` on `codex-cli 0.151.0`.
- ORCH-000200 accepted one child `codex exec` reusing current ChatGPT authentication with exact correlation, exit/output observability, and no retry.

## ORCH-000201 — governed direct-Codex adapter accepted

Executor terminal:

`GH-PUB-201-GOVERNED-DIRECT-CODEX-ADAPTER-READY-000001`

Architect decision:

`GH-DEC-201-GOVERNED-DIRECT-CODEX-ADAPTER-ACCEPTED`

Accepted source became:

`GH-PUB-201-GOVERNED-DIRECT-CODEX-ADAPTER-READY-000001`

Source facts:

- 103 files;
- focused `95/95`;
- full deterministic `833/833`;
- manifest `42f37c4fcd4b291e2edf4c14725b03287dc0150e9e2e4cca614d0f56ea2239b8`;
- archive `b6d87a5a041be0615a143965bb2cc8c5c35080633c74d70e4600d636a4503878`.

Accepted adapter semantics include deterministic direct-Codex identities, durable intent before spawn, at-most-once child spawn, duplicate suppression, reconciliation-required intent-without-result handling, explicit workdir/sandbox/ephemeral/timeout controls, exact durable Executor-terminal observation before transport success, durable result readback, distinct failure classes, and no BrowserRelay dependency.

## ORCH-000202 — first live adapter qualification INCONCLUSIVE

Architect decision:

`GH-DEC-202-DIRECT-CODEX-LIVE-INTENT-AMBIGUOUS-INCONCLUSIVE`

The live call created an immutable intent for:

`CODEX-DIRECT-INVOCATION-EXECUTOR-DISPATCH-000202-PROBE-000001`

but returned `INTENT_AMBIGUOUS` before child spawn.

Verified final state:

- intent exists as `ARMED`;
- result absent;
- expected probe terminal absent;
- child/model invocation count `0`;
- replay count `0`;
- no retry authorized.

The adapter failed closed correctly. ORCH-000202 must not be rerun.

## ORCH-000203 — ambiguity observability diagnostic accepted

Executor terminal:

`GH-PUB-203-DIRECT-CODEX-INTENT-AMBIGUITY-DIAGNOSTIC-000001`

Architect decision:

`GH-DEC-203-DIRECT-CODEX-INTENT-AMBIGUITY-DIAGNOSTIC-ACCEPTED`

The read-only diagnostic reconstructed the accepted source call chain:

`send → createJson → readJsonCurrent → spawnChild`.

It proved the original ORCH-000202 evidence was insufficient to distinguish:

- an ambiguous GitHub create/transport return after the intent was durably written; from
- a later exact readback normalization/observation failure.

The production create status/reason and exact readback outcome were not durably preserved. The root cause is therefore not reconstructible from ORCH-000202 evidence alone.

Mutation-disabled reproduction confirmed:

- ambiguous create response → `INTENT_AMBIGUOUS`, spawn `0`;
- `CREATED` + exact readback → child boundary reachable.

No live child/model run or protected mutation occurred in ORCH-000203.

Permanent lesson added: pre-spawn durable create/readback decisions must preserve typed phase observability sufficient to diagnose ambiguity without retry.

`documentationImpact=FULL`; `futureIdeaImpact=NONE`.

## Current target

ORCH-000204 is the next bounded source/test repair: preserve production create status/reason, exact post-write readback status/match, and ambiguity phase in the direct-Codex transport boundary while retaining fail-closed semantics.

The stranded ORCH-000202 intent remains immutable and unreconciled. ORCH-000204 must not spawn Codex, retry the live probe, start the persistent host, touch BrowserRelay, reuse delivery `000015`, or access AFFOTECH/Drive.

After ORCH-000204 is independently accepted, Architect may separately authorize stranded-invocation reconciliation and then a fresh live qualification with a new direct-Codex invocation identity.
