Project: affotech-agent-orchestrator
Documentation sync boundary: through ORCH-000191 Architect review
Status: CURRENT HUMAN-READABLE PROJECTION
Machine authority: durable GitHub evidence and Architect decisions

# Project History

## Foundation through ORCH-000165

The project established Rony as final authority, Architect as governor/decision-maker, Executor as bounded worker, GitHub as durable evidence authority, exact lineage, no blind retry, and separation from AFFOTECH.

Key accepted milestones:

- ORCH-000153: worker forward delivery `WORKER-DELIVERY-EXECUTOR-000013/SENT` exactly once.
- ORCH-000163: Architect wake `ARCH-TRIGGER-9333-000005/SENT` exactly once.
- ORCH-000165: lineage compatibility repair accepted with full deterministic `817/817`.

## ORCH-000166 through ORCH-000181

ORCH-000166/167 established persistent-host idle/bootstrap and automatic newer-dispatch observation. ORCH-000173 proved instrumented expired-lease reconciliation can close a lease. ORCH-000177/178 proved correct HTTP semantic-status handling and lease acquire/release. ORCH-000179 reached worker-delivery preparation. ORCH-000181 acquired epoch `189` but terminated before preparation; the lease expired while indexed ACTIVE at revision `377`.

## ORCH-000182 through ORCH-000187

ORCH-000182/183 attempted recovery but durable state remained unchanged. ORCH-000184 established that reduced index entries cannot replace full immutable leases. ORCH-000185 still failed before mutation with full hydration, and ORCH-000186 proved the pure projector valid while historical ORCH-000185 invocation detail was insufficient.

ORCH-000187 then proved a corrected mutation-disabled caller using the full immutable lease, exact reconciliation binding, and integer `nowMs`; validation/projector succeeded and execution reached the first would-be creation of revision `000002`. Decision: `GH-DEC-187-CORRECTED-CALLER-PROJECTION-BOUNDARY-ACCEPTED`.

## ORCH-000188 — typed-hash correction

ORCH-000188 stopped before reconciliation because a precondition compared project canonical SHA-256 with Git blob SHA. Architect proved there was no lease drift and established the permanent typed-hash rule.

Decision: `GH-DEC-188-PRECONDITION-HASH-NAMESPACE-MISMATCH-BLOCKED`.

## ORCH-000189 — pre-call evidence write ambiguity

ORCH-000189 correctly separated the hash namespaces and passed pure projection. Before reconciliation, its mandatory pre-call `createJson` evidence publication returned `AMBIGUOUS`; fresh readback found that path absent. Real reconciliation was therefore not invoked.

Decision: `GH-DEC-189-PRECALL-EVIDENCE-WRITE-AMBIGUOUS-INCONCLUSIVE`.

## ORCH-000190 — createJson ambiguity semantics accepted

ORCH-000190 ran strictly mutation-disabled and established that accepted `createJson` is `precheck → one PUT → exact post-write readback`, with durable readback as final creation authority. It also established that a separate prerequisite external evidence write can itself become an unnecessary ambiguity blocker.

Architect accepted the diagnostic under:

`GH-DEC-190-PRECALL-CREATEJSON-TRANSPORT-AMBIGUITY-DIAGNOSTIC-ACCEPTED`.

The next real attempt therefore moved diagnostics into the same execution context and removed the separate pre-call evidence publication.

## ORCH-000191 — one real call consumed; revision precheck failed before mutation

ORCH-000191 passed preconditions, typed-hash validation, and pure projection, then invoked accepted `reconcileExpiredMutationLease` exactly once.

Executor terminal:

`GH-PUB-191-EXPIRED-LEASE-IN-MEMORY-RECONCILIATION-INCONCLUSIVE-000001`

Observed sequence:

- the real reconciliation call count reached `1`;
- during revision-`000002` `createJson` precheck, the disposable GitHub read adapter returned `gh` exit code `1` without a surfaced semantic HTTP status;
- the adapter normalized that result to `GITHUB_API_ERROR` instead of semantic `NOT_FOUND`;
- accepted `createJson` therefore returned `CREATE_PRECHECK_FAILED`;
- no revision PUT occurred;
- no index CAS occurred;
- revision `000002` remained absent;
- lease index remained revision `377`, `nextLeaseEpoch=190`, one ACTIVE-but-expired epoch-189 lease;
- delivery `WORKER-DELIVERY-EXECUTOR-000013/SENT` remained unchanged;
- Architect trigger `ARCH-TRIGGER-9333-000005/SENT` remained unchanged;
- protected side effects remained zero.

Architect decision:

`GH-DEC-191-REVISION-PRECHECK-TRANSPORT-INCONCLUSIVE`.

Classification: `INCONCLUSIVE`.

The single real-call budget is consumed. No further real reconciliation is authorized until the read-adapter semantic classification gap is diagnosed and a later Architect decision explicitly permits any repaired attempt.

`documentationImpact=STATE`; `futureIdeaImpact=NONE`.

## Current target

The next legal milestone is ORCH-000192 / DISPATCH-000192, a strictly read-only diagnostic of the ORCH-000191 GitHub contents read adapter.

It must compare a known-existing immutable revision with the known-absent revision `000002`, capture bounded exit/status/error/body/normalization evidence, determine why absent content became `GITHUB_API_ERROR` instead of semantic `NOT_FOUND`, and prove the smallest corrected read-adapter shape if possible.

No PUT, real reconciliation, lease/index mutation, new lease, worker delivery, browser, governed-host process change, Architect trigger, tracked source/test/config/package mutation, AFFOTECH, Drive, deployment, tenant, business, or private-data mutation is authorized.

After epoch-189 recovery is eventually accepted, the project may return to worker-delivery preparation, fresh persistent-host arm, and the full unattended canary:

`Architect durable dispatch → persistent Orchestrator → durable worker intent → Executor exactly once → durable terminal → persistent Orchestrator → durable Architect trigger → Architect wake exactly once`.

AFFOTECH remains separate/protected until later explicit Rony-authorized integration.
