Project: affotech-agent-orchestrator
Documentation sync boundary: through ORCH-000183 Architect review
Status: CURRENT HUMAN-READABLE PROJECTION
Machine authority: durable GitHub evidence and Architect decisions

# Current State

## 1. Accepted source

`GH-PUB-165-WORKER-DELIVERY-LEGACY-LINEAGE-HYDRATION-REPAIR-READY-000001`

Qualification: 101 files; focused `65/65`; GitHub runtime ports `43/43`; BrowserRelay transport ports `22/22`; full deterministic `817/817`.

## 2. Active role model

- Rony = final human authority.
- Architect = verification, governance, decisions, architecture, next bounded authority, canonical documentation ownership, and material future-intent preservation.
- Executor = bounded implementation/runtime/test/validation work.
- Orchestrator = independent persistent deterministic control-plane service once qualified.
- Curator = eliminated from the active model; historical Curator evidence remains history only.

## 3. Documentation decision model

Current governing files:

- `governance/ORCHESTRATOR_BOOTSTRAP.md` v1.3
- `governance/PROJECT_ORCHESTRATION_POLICY.md` v1.4
- `governance/ARCHITECT_DOCUMENTATION_SEMANTIC_TEST.md` v1.0
- `governance/PROJECT_MEMORY_EVENT_LEDGER_POLICY.md` v1.4

Architect must apply the fixed semantic test to classify `documentationImpact=NONE|STATE|FULL`, then independently classify `futureIdeaImpact=NONE|CAPTURE|PROMOTE`.

This ORCH-000183 review is `documentationImpact=STATE`: TEST-1 is YES because the next legal recovery action changed; TEST-2 is YES because no lasting accepted capability, contract, governance rule, or permanent root cause has yet been established. `futureIdeaImpact=NONE`.

## 4. Proven transport foundations

- ORCH-000153: forward delivery `WORKER-DELIVERY-EXECUTOR-000013/SENT` exactly once.
- ORCH-000163: Architect wake `ARCH-TRIGGER-9333-000005/SENT` exactly once.
- ORCH-000166: persistent host `000026` safely armed/idle.
- ORCH-000167: automatic newer-dispatch observation proved.
- ORCH-000173: expired worker-delivery lease reconciliation succeeded with bounded request-level instrumentation.
- ORCH-000177/178: HTTP-status adapter and accepted lease acquire/release proven.
- ORCH-000179: preparation reached; transient BrowserRelay authorization requires `actionKind=WORKER_DELIVERY`.

## 5. ORCH-000183 — BLOCKED

Executor terminal:

`GH-PUB-183-EXPIRED-WORKER-LEASE-RECONCILIATION-PROJECTION-BLOCKED-000001`

Verified facts:

- required pre-state passed;
- exactly one `reconcileExpiredMutationLease` call was made;
- accepted path returned `DENIED`;
- reason code `EXPIRED_LEASE_RECONCILIATION_PROJECTION_INVALID`;
- revision `000002` remains absent;
- lease-index revision remains `377`;
- `nextLeaseEpoch=190`;
- exactly one indexed ACTIVE lease remains: `MUTATION-LEASE-HOST-8af1857f183a9d267184b29c1a5eb1e0 / epoch 189 / revision 1`;
- latest delivery remains `WORKER-DELIVERY-EXECUTOR-000013/SENT`;
- latest Architect trigger remains `ARCH-TRIGGER-9333-000005/SENT`;
- browser/send/host/source/AFFOTECH/Drive side effects remain zero;
- ORCH-000183 terminal and `LATEST_MILESTONE` convenience pointers both advanced normally.

Architect decision:

`GH-DEC-183-EXPIRED-WORKER-LEASE-RECONCILIATION-PROJECTION-INVALID-BLOCKED`

The denial occurred before durable reconciliation mutation. There is no partial revision/index mutation and no ambiguity requiring cleanup.

## 6. Next legal action — ORCH-000184 diagnostic

Do **not** call `reconcileExpiredMutationLease` again yet.

The next milestone must be read-only and identify the exact projection-contract validation condition that produced `EXPIRED_LEASE_RECONCILIATION_PROJECTION_INVALID`.

Required diagnostic comparison:

- accepted ORCH-000165 source implementation of expired-lease projection/validation/reconciliation;
- proven-successful ORCH-000173 reconciliation input/call shape;
- ORCH-000183 disposable launcher/call shape and exact epoch-189 lease/index projection;
- time/expiry binding, project/holder/lineage, revision/previous-record binding, resource scope/hash, mutation-envelope hash, index projection, and any required reconciliation metadata.

No GitHub lease/index mutation, new lease, preparation, delivery `000014`, browser contact, host mutation, Architect trigger, source patch, AFFOTECH, Drive, deployment, tenant, or private-data work is legal in this diagnostic.

The diagnostic must classify the exact cause and smallest next repair before another reconciliation attempt is authorized.

## 7. Future intent

`IDEA-0001 — Deterministic Architect documentation-closure marker` remains `ADOPTED_FOR_FUTURE`, deferred until core unattended transport reaches production-candidate qualification. It creates no implementation authority.
