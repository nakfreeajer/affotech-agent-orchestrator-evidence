Project: affotech-agent-orchestrator
Documentation sync boundary: through ORCH-000203 / DISPATCH-000203 publication on 2026-09-02
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

Architect decision:

`GH-DEC-201-GOVERNED-DIRECT-CODEX-ADAPTER-ACCEPTED`

## 2. Current production topology

The proven production path remains manual inbound:

`Architect durable dispatch → manual user locator/message → Codex terminal/runtime in VS Code → direct GitHub authority reads/work → direct GitHub terminal publication → Architect review`.

The direct-Codex adapter is source-accepted but is not yet live-qualified for unattended production use.

## 3. ORCH-000202 — INCONCLUSIVE live adapter qualification

Executor terminal:

`GH-PUB-202-GOVERNED-DIRECT-CODEX-ADAPTER-LIVE-QUALIFIED-000001`

Architect decision:

`GH-DEC-202-DIRECT-CODEX-LIVE-INTENT-AMBIGUOUS-INCONCLUSIVE`

Classification:

`DIRECT_CODEX_ADAPTER_LIVE_INTENT_OR_RESULT_AMBIGUOUS`

Verified boundary:

- direct invocation `CODEX-DIRECT-INVOCATION-EXECUTOR-DISPATCH-000202-PROBE-000001`;
- immutable intent exists and is `ARMED`;
- direct-Codex result is absent;
- expected child probe terminal `GH-PUB-202-DIRECT-CODEX-LIVE-PROBE-000001` is absent;
- first adapter outcome `INTENT_AMBIGUOUS`;
- child invocation count `0`;
- total real child/model invocation count `0`;
- duplicate replay count `0`;
- second spawn count `0`;
- retry attempted `false` and retry authorized `false`.

The adapter therefore stopped before the child-process boundary. ORCH-000202 did not qualify the live adapter and must not be rerun.

The stranded intent is preserved exactly. No result, probe terminal, BrowserRelay delivery, registration, lease, trigger, source, AFFOTECH or Drive mutation is authorized until the ambiguity is diagnosed.

## 4. Durable protected state

- mutation-lease index revision `382`;
- `nextLeaseEpoch=192`;
- `activeLeases=[]`;
- historical BrowserRelay delivery `WORKER-DELIVERY-EXECUTOR-000013/SENT` unchanged;
- delivery `000015` remains outside the direct-Codex namespace and must not be reused;
- historical worker registration remains unchanged;
- latest Architect trigger `ARCH-TRIGGER-9333-000005/SENT`.

## 5. Current missing proof

`DIRECT_CODEX_PRODUCTION_INTENT_CREATE_READBACK_AMBIGUITY_ROOT_CAUSE_NOT_YET_PROVEN`

The immediate problem is no longer Codex authentication or BrowserRelay. The accepted adapter durably created an intent, but its production call returned an ambiguous create/readback outcome before child spawn.

## 6. ORCH-000203 — current legal milestone

Current canonical prompt/dispatch:

- `ORCH-000203`;
- `DISPATCH-000203`;
- milestone `ORCH.P0.SANDBOX.OPERATIONAL.UNATTENDED.CYCLE.CODEX.DIRECT.INTENT.CREATE.READBACK.AMBIGUITY.DIAGNOSTIC.2V`;
- operation class `READ_ONLY_DIRECT_CODEX_INTENT_AMBIGUITY_DIAGNOSTIC`;
- prompt SHA-256 `76cfef2154cad6c27d4f3cfb4af13e2fbe0c1b0f9f4aecc40843ad60269a437d`;
- mutation-envelope SHA-256 `937c6d41d2779c09923455278832ff56a4cd4700c33d588670745a1231260439`;
- dispatch state `MANUAL_TRIGGER_REQUIRED`.

ORCH-000203 is read-only. It inspects the accepted adapter and production GitHub runtime create/readback contract, reconstructs the exact child-spawn boundary, and performs only mutation-disabled/pure reproduction.

It must not:

- mutate or terminalize the stranded ORCH-000202 intent;
- create a direct-Codex result;
- spawn Codex or retry ORCH-000202;
- start the persistent host;
- touch BrowserRelay/9444, worker delivery `000015`, historical registration, leases, AFFOTECH or Drive;
- mutate accepted source/tests/docs/governance.

## 7. Current required action

Run in the current Codex terminal:

`execute github dispatch nakfreeajer/affotech-agent-orchestrator-evidence DISPATCH-000203`

After its terminal/report/receipt is published, return to Architect with `verify & next`.

No live adapter retry is authorized until ORCH-000203 is independently reviewed.

## 8. Documentation / future intent

ORCH-000202 review: `documentationImpact=STATE`; `futureIdeaImpact=NONE`.

ORCH-000203 publication: `documentationImpact=STATE`; `futureIdeaImpact=NONE`.

`IDEA-0001 — Deterministic Architect documentation-closure marker` remains `ADOPTED_FOR_FUTURE`, deferred until core unattended transport reaches production-candidate qualification.
