Project: affotech-agent-orchestrator
Documentation sync boundary: through ORCH-000204 Architect acceptance on 2026-09-03
Status: CURRENT HUMAN-READABLE PROJECTION
Machine authority: durable GitHub evidence and Architect decisions

# Current State

## 1. Accepted source

Current accepted source:

`GH-PUB-204-DIRECT-CODEX-INTENT-OBSERVABILITY-REPAIR-READY-000001`

Architect decision:

`GH-DEC-204-DIRECT-CODEX-INTENT-OBSERVABILITY-REPAIR-ACCEPTED`

Qualification:

- 103 files;
- focused/relevant tests `142/142`;
- full deterministic suite `844/844`, 0 failed/skipped/cancelled;
- manifest SHA-256 `ee7aca2665853e8ebb9d0e0de99b510d84b7fa41282ebed88a1fa6b3c49bf3bf`;
- archive SHA-256 `34c4dd17b3475932de7513a4f0f395b0cb285229413128b357a6566da0134521`.

Accepted changed paths:

- `src/host/codex-direct-transport.js`;
- `src/host/github-contents-runtime-client.js`;
- `test/codex-direct-transport.test.js`.

## 2. Current production topology

The proven production path remains manual inbound:

`Architect durable dispatch → manual user locator/message → Codex terminal/runtime in VS Code → direct GitHub authority reads/work → direct GitHub terminal publication → Architect review`.

Direct-Codex transport is not yet live-qualified for unattended production use.

## 3. Accepted direct-Codex chain

- ORCH-000199: supported `codex exec` capability accepted.
- ORCH-000200: one-shot authenticated child primitive accepted.
- ORCH-000201: governed direct-Codex adapter and persistent-host direct route source accepted.
- ORCH-000203: create/readback ambiguity observability diagnostic accepted.
- ORCH-000204: typed pre-spawn create/readback observability repair accepted.

The ORCH-000204 repair preserves create status/reason/HTTP status, exact readback attempted/status/reason/match information, and a typed ambiguity phase while retaining fail-closed/no-retry semantics.

## 4. ORCH-000202 — historical INCONCLUSIVE live attempt

Decision:

`GH-DEC-202-DIRECT-CODEX-LIVE-INTENT-AMBIGUOUS-INCONCLUSIVE`

Stranded invocation:

`CODEX-DIRECT-INVOCATION-EXECUTOR-DISPATCH-000202-PROBE-000001`

Verified facts:

- immutable intent exists and is `ARMED`;
- result absent;
- expected probe terminal absent;
- first-hand child/model invocation count `0`;
- child-spawn boundary not crossed;
- duplicate replay count `0`;
- retry attempted/authorized `false`.

ORCH-000202 must not be rerun and this invocation must not be reused for a fresh live qualification.

## 5. Durable protected state

- mutation-lease index revision `382`;
- `nextLeaseEpoch=192`;
- `activeLeases=[]`;
- historical BrowserRelay delivery `WORKER-DELIVERY-EXECUTOR-000013/SENT` unchanged;
- historical delivery `000015` remains outside the direct-Codex namespace;
- historical worker registration unchanged;
- latest Architect trigger `ARCH-TRIGGER-9333-000005/SENT`.

## 6. Current missing action

`STRANDED_ORCH_000202_DIRECT_CODEX_INVOCATION_NOT_YET_DURABLY_RECONCILED`

The source repair is accepted, but the abandoned ORCH-000202 invocation identity remains open because its intent exists without a result.

The next milestone must close this identity using the first-hand zero-spawn evidence without modifying the immutable intent and without invoking Codex.

## 7. Next legal milestone

ORCH-000205 is the next bounded reconciliation milestone.

It must:

- use accepted source GH-PUB-204 as authority;
- re-verify the exact stranded intent and result absence;
- re-verify ORCH-000202 first-hand terminal evidence proving child invocation count `0` and probe terminal absence;
- preserve the immutable intent unchanged;
- perform zero child/model invocation;
- perform zero BrowserRelay/host/worker-delivery/registration/lease/trigger/AFFOTECH/Drive activity;
- create at most one durable reconciliation result only if the accepted result schema safely supports a terminal non-spawn reconciliation outcome;
- read that result back exactly and prove duplicate reuse/spawn suppression without spawning a child;
- otherwise stop before mutation and report the exact unsupported schema boundary.

ORCH-000205 does **not** authorize a fresh live probe. A new live identity may be authorized only after reconciliation is independently accepted.

## 8. Protected boundary

AFFOTECH System V2 Hybrid, ports `9222/9223`, Drive/business/private data, deployment, tenant resources, BrowserRelay `9444`, and unrelated worktrees remain unauthorized.

## 9. Documentation / future intent

ORCH-000204: `documentationImpact=FULL`; `futureIdeaImpact=NONE`.

`IDEA-0001 — Deterministic Architect documentation-closure marker` remains `ADOPTED_FOR_FUTURE`, deferred until core unattended transport reaches production-candidate qualification.
