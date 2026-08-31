Project: affotech-agent-orchestrator
Documentation sync boundary: through ORCH-000184 Architect review
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

ORCH-000184 is `documentationImpact=FULL`: TEST-1 is YES, TEST-2 is NO, and TEST-3 is YES because a permanent root cause/caller contract was established. `futureIdeaImpact=NONE`.

## 4. Proven transport foundations

- ORCH-000153: forward delivery `WORKER-DELIVERY-EXECUTOR-000013/SENT` exactly once.
- ORCH-000163: Architect wake `ARCH-TRIGGER-9333-000005/SENT` exactly once.
- ORCH-000166/167: persistent-host idle/bootstrap and automatic newer-dispatch observation proved.
- ORCH-000173: expired worker-delivery lease reconciliation succeeded using the full immutable lease record with bounded request-level instrumentation.
- ORCH-000177/178: HTTP-status adapter and accepted lease acquire/release proven.
- ORCH-000179: preparation reached; transient BrowserRelay authorization requires `actionKind=WORKER_DELIVERY`.

## 5. ORCH-000184 — ACCEPTED caller-argument diagnosis

Executor terminal:

`GH-PUB-184-EXPIRED-LEASE-PROJECTION-INVALID-DIAGNOSTIC-000001`

Architect accepted the diagnostic under:

`GH-DEC-184-EXPIRED-LEASE-CALLER-ARGUMENT-CONTRACT-ACCEPTED`

Verified diagnosis:

- target immutable epoch-189 revision `000001` is a valid full `MUTATION_LEASE` record;
- the `activeLeases` entry in mutation-lease index revision `377` is a reduced projection/locator;
- ORCH-000183 supplied that reduced index entry directly to the expiry projection/reconciliation path;
- `validateMutationLease` rejected the reduced object with `RECORD_FIELDS_INVALID`;
- failure occurred before projected EXPIRED revision construction;
- historical ORCH-000169/ORCH-000173 control succeeded using the full immutable lease record;
- classification = `CALLER_ARGUMENT_DEFECT`;
- accepted source patch required = false.

Permanent caller contract:

Mutation-lease index entries are not substitutes for immutable lease revisions when the called operation requires `validateMutationLease`-compatible input. The caller must hydrate the exact immutable revision referenced by `recordPath`, verify identity/revision/hash/lineage, and pass the full record.

The earlier activated ORCH-000184 decision that labelled documentation impact `STATE` is superseded by the current Architect decision because the fixed semantic test requires `FULL` for this permanent root-cause/contract change. Historical records are not rewritten.

## 6. Current durable recovery boundary

The lease state itself remains unchanged:

- target lease `MUTATION-LEASE-HOST-8af1857f183a9d267184b29c1a5eb1e0`;
- epoch `189`, immutable revision `000001`, state ACTIVE but expired;
- target revision `000002` absent;
- mutation-lease index revision `377`;
- `nextLeaseEpoch=190`;
- exactly one active-index entry, the target lease;
- latest delivery `WORKER-DELIVERY-EXECUTOR-000013/SENT`;
- latest Architect trigger `ARCH-TRIGGER-9333-000005/SENT`;
- ORCH-000184 reconciliation calls `0` and lease/source/browser/host/AFFOTECH/Drive mutations `0`.

## 7. Next legal action — ORCH-000185 corrected reconciliation

After this FULL documentation closure is durably read back, Architect may authorize one new corrected expired-lease reconciliation attempt.

Required caller behavior:

1. fresh-read index revision `377` and require exactly the target entry;
2. hydrate the exact immutable `revision 000001` from its canonical `recordPath`;
3. verify lease ID/epoch/revision, content-hash binding, holder, message/dispatch/milestone lineage, resource scope/hash, mutation-envelope hash, state ACTIVE, and expiry;
4. before external mutation, run the accepted pure expiry projection/validator against the hydrated full record and require a valid EXPIRED revision projection;
5. only if that preflight passes, call accepted `reconcileExpiredMutationLease` exactly once with the full immutable record;
6. require durable `revision 000002=EXPIRED` and lease-index `377→378`, `nextLeaseEpoch=190`, `activeLeases=[]`;
7. no new lease, preparation, delivery `000014`, browser, governed host, Architect trigger, source patch, AFFOTECH, Drive, deployment, tenant, or private-data mutation.

No worker-delivery preparation is legal until this lease recovery is independently accepted.

## 8. Future intent

`IDEA-0001 — Deterministic Architect documentation-closure marker` remains `ADOPTED_FOR_FUTURE`, deferred until core unattended transport reaches production-candidate qualification. It creates no implementation authority.
