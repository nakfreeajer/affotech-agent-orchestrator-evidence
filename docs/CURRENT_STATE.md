Project: affotech-agent-orchestrator
Documentation sync boundary: through ORCH-000205 Architect acceptance on 2026-09-03
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
- ORCH-000205: stranded ORCH-000202 invocation reconciliation accepted.

The ORCH-000204 repair preserves create status/reason/HTTP status, exact readback attempted/status/reason/match information, and typed ambiguity phase while retaining fail-closed/no-retry semantics.

## 4. ORCH-000202 — historical INCONCLUSIVE live attempt, now reconciled

Original decision:

`GH-DEC-202-DIRECT-CODEX-LIVE-INTENT-AMBIGUOUS-INCONCLUSIVE`

Invocation:

`CODEX-DIRECT-INVOCATION-EXECUTOR-DISPATCH-000202-PROBE-000001`

Original first-hand facts remain immutable:

- intent exists as `ARMED`;
- child/model invocation count `0`;
- child-spawn boundary not crossed;
- old probe terminal absent;
- no replay/retry occurred.

ORCH-000205 reconciled this abandoned identity under:

`GH-DEC-205-DIRECT-CODEX-STRANDED-INVOCATION-RECONCILIATION-ACCEPTED`

Durable result:

`evidence/codex-direct-invocations/executor/CODEX-DIRECT-INVOCATION-EXECUTOR-DISPATCH-000202-PROBE-000001/result.json`

Result semantics:

- `outcome=RECONCILIATION_REQUIRED`;
- `childStarted=false`;
- `childInvocationCount=0`;
- `terminalObserved=false`;
- `terminalPublicationId=null`;
- `retryAttempted=false`;
- `retryAuthorized=false`.

The immutable intent blob remained identical before/after reconciliation. Duplicate replay used an injected launcher and produced spawn count `0`.

This identity is closed for reuse. It must never be used for a new live qualification and ORCH-000202 remains historically INCONCLUSIVE, not PASS.

## 5. Durable protected state

- mutation-lease index revision `382`;
- `nextLeaseEpoch=192`;
- `activeLeases=[]`;
- historical BrowserRelay delivery `WORKER-DELIVERY-EXECUTOR-000013/SENT` unchanged;
- historical delivery `000015` remains outside the direct-Codex namespace;
- historical worker registration unchanged;
- latest Architect trigger `ARCH-TRIGGER-9333-000005/SENT`.

## 6. Current missing proof

`FRESH_DIRECT_CODEX_ADAPTER_LIVE_QUALIFICATION_WITH_TYPED_OBSERVABILITY_NOT_YET_ACCEPTED`

The source/observability repair and stranded-identity reconciliation are complete. The remaining adapter-level proof is a fresh live invocation using a new identity, exactly one real authenticated child, exact durable probe terminal observation, durable result readback, and duplicate suppression with zero second spawn.

## 7. Next legal milestone

ORCH-000206 is the next bounded live qualification milestone.

It must:

- use accepted source GH-PUB-204;
- use a completely fresh probe dispatch and direct-Codex invocation identity;
- require both fresh intent and result paths absent before the first call;
- allow exactly one real authenticated child `codex exec`;
- preserve the ORCH-000204 typed create/readback observability fields;
- require the exact fresh child probe terminal;
- require exact durable adapter result readback;
- perform exactly one duplicate-suppression replay with second spawn count `0` only after first-call success;
- perform no blind retry on create/readback/auth/process/timeout/terminal ambiguity;
- leave the reconciled ORCH-000202 identity untouched;
- start no persistent host yet;
- touch no BrowserRelay/9444, worker-delivery, registration, lease, trigger, AFFOTECH or Drive state.

Only successful ORCH-000206 acceptance may authorize persistent-host automatic dispatch observation → direct Codex qualification.

## 8. Protected boundary

AFFOTECH System V2 Hybrid, ports `9222/9223`, Drive/business/private data, deployment, tenant resources, BrowserRelay `9444`, and unrelated worktrees remain unauthorized.

## 9. Documentation / future intent

ORCH-000205: `documentationImpact=STATE`; `futureIdeaImpact=NONE`.

`IDEA-0001 — Deterministic Architect documentation-closure marker` remains `ADOPTED_FOR_FUTURE`, deferred until core unattended transport reaches production-candidate qualification.
