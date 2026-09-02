Project: affotech-agent-orchestrator
Documentation sync boundary: through ORCH-000203 Architect acceptance on 2026-09-03
Status: CURRENT HUMAN-READABLE PROJECTION
Machine authority: durable GitHub evidence and Architect decisions

# Current State

## 1. Accepted source

Current accepted source:

`GH-PUB-201-GOVERNED-DIRECT-CODEX-ADAPTER-READY-000001`

Qualification:

- 103 files;
- focused tests `95/95`;
- full deterministic suite `833/833`, 0 failed, 0 skipped/cancelled;
- manifest SHA-256 `42f37c4fcd4b291e2edf4c14725b03287dc0150e9e2e4cca614d0f56ea2239b8`;
- archive SHA-256 `b6d87a5a041be0615a143965bb2cc8c5c35080633c74d70e4600d636a4503878`.

Architect source decision:

`GH-DEC-201-GOVERNED-DIRECT-CODEX-ADAPTER-ACCEPTED`

## 2. Current production topology

The proven production path remains manual inbound:

`Architect durable dispatch → manual user locator/message → Codex terminal/runtime in VS Code → direct GitHub authority reads/work → direct GitHub terminal publication → Architect review`.

The direct-Codex adapter is source-accepted but is not yet live-qualified for unattended production use.

## 3. ORCH-000202 — INCONCLUSIVE live qualification

Decision:

`GH-DEC-202-DIRECT-CODEX-LIVE-INTENT-AMBIGUOUS-INCONCLUSIVE`

Verified:

- invocation `CODEX-DIRECT-INVOCATION-EXECUTOR-DISPATCH-000202-PROBE-000001`;
- intent exists, state `ARMED`;
- result absent;
- probe terminal absent;
- first adapter outcome `INTENT_AMBIGUOUS`;
- child/model invocation count `0`;
- duplicate replay count `0`;
- second spawn count `0`;
- retry attempted/authorized `false`.

ORCH-000202 must not be rerun.

## 4. ORCH-000203 — ACCEPTED diagnostic

Executor terminal:

`GH-PUB-203-DIRECT-CODEX-INTENT-AMBIGUITY-DIAGNOSTIC-000001`

Architect decision:

`GH-DEC-203-DIRECT-CODEX-INTENT-AMBIGUITY-DIAGNOSTIC-ACCEPTED`

Accepted diagnostic facts:

- stranded intent remains exact `ARMED`;
- result absent;
- probe terminal absent;
- child spawn boundary not reached;
- child/model invocation `0`;
- accepted production call chain is `send → createJson → readJsonCurrent → spawnChild`;
- ORCH-000202 durable evidence did not preserve the production create status/reason or exact post-write readback outcome;
- mutation-disabled reproduction proves ambiguous create can yield `INTENT_AMBIGUOUS` with zero spawn while exact `CREATED` + exact readback reaches the spawn boundary.

Root cause is **not yet proven** because the original production return shape was not durably captured.

## 5. Current missing capability

`DIRECT_CODEX_PRESPAWN_CREATE_READBACK_OBSERVABILITY_REPAIR_NOT_YET_IMPLEMENTED`

The next source repair must preserve typed create/readback evidence while keeping fail-closed behavior unchanged.

Required observable fields include:

- create status;
- sanitized create reason code;
- whether post-write readback was attempted;
- readback status/exception class;
- exact intent-match boolean;
- exact ambiguity phase.

## 6. Stranded ORCH-000202 intent

Path:

`evidence/codex-direct-invocations/executor/CODEX-DIRECT-INVOCATION-EXECUTOR-DISPATCH-000202-PROBE-000001/intent.json`

State is `ARMED`. Result and probe terminal are absent. First-hand ORCH-000202 evidence records child invocation count `0`.

Nevertheless:

- do not delete/overwrite/normalize the intent;
- do not synthesize a result;
- do not retry the child;
- do not reconcile until separately authorized after the observability repair is accepted.

## 7. Durable protected state

- mutation-lease index revision `382`;
- `nextLeaseEpoch=192`;
- `activeLeases=[]`;
- historical BrowserRelay delivery `WORKER-DELIVERY-EXECUTOR-000013/SENT` unchanged;
- delivery `000015` remains outside direct-Codex namespace;
- historical worker registration unchanged;
- latest Architect trigger `ARCH-TRIGGER-9333-000005/SENT`.

## 8. Next legal milestone

The next bounded milestone is ORCH-000204: source/test repair of direct-Codex pre-spawn create/readback observability.

ORCH-000204 must:

- use accepted source GH-PUB-201 as baseline;
- mutate only explicitly authorized adapter/GitHub-client/test paths;
- add deterministic tests for typed create/readback phase reporting;
- preserve exact fail-closed semantics and no blind retry;
- perform **zero** real child Codex/model invocations;
- perform **zero** mutation of the stranded ORCH-000202 intent/result namespace;
- perform **zero** host start, BrowserRelay, worker-delivery, registration, lease, AFFOTECH, or Drive activity.

A later separately authorized milestone will decide reconciliation of the stranded intent and whether/how to perform a fresh live probe.

## 9. Documentation / future intent

ORCH-000203: `documentationImpact=FULL`; `futureIdeaImpact=NONE`.

`IDEA-0001 — Deterministic Architect documentation-closure marker` remains `ADOPTED_FOR_FUTURE`, deferred until core unattended transport reaches production-candidate qualification.
