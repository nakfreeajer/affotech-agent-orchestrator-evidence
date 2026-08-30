Project: affotech-agent-orchestrator
Documentation sync boundary: through ORCH-000183 Architect review
Status: CURRENT HUMAN-READABLE PROJECTION
Machine authority: durable GitHub evidence and Architect decisions

# Project History

## Foundation through ORCH-000165

The project established Rony as final authority, Architect as governor/decision-maker, Executor as bounded worker, GitHub as durable evidence authority, exact lineage, no blind retry, and separation from AFFOTECH.

Key accepted milestones:

- ORCH-000153: forward delivery `WORKER-DELIVERY-EXECUTOR-000013/SENT` exactly once.
- ORCH-000163: Architect wake `ARCH-TRIGGER-9333-000005/SENT` exactly once.
- ORCH-000165: lineage compatibility repair accepted with full deterministic `817/817`.

## ORCH-000166 through ORCH-000173

ORCH-000166 safely armed persistent host `000026`. ORCH-000167 proved automatic newer-dispatch observation. ORCH-000168/169/170 isolated preparation composition and the explicit worker-delivery ID requirement. ORCH-000171/172/173 isolated and then closed an expired-lease ambiguity; ORCH-000173 proved an instrumented expired-lease revision create/readback plus index CAS/readback can close the lease.

## ORCH-000174 through ORCH-000179

Bounded preflights isolated the disposable GitHub adapter defect: actual HTTP `404` had been overwritten by `ghExitCode=1`. ORCH-000178 corrected that boundary and proved accepted worker-delivery lease acquisition and normal release. ORCH-000179 reached preparation and proved the transient authorization must include `actionKind=WORKER_DELIVERY`.

## ORCH-000180 / ORCH-000181

ORCH-000180 acquired/released epoch `188` but stopped before preparation. ORCH-000181 acquired/indexed epoch `189` and constructed `actionKind=WORKER_DELIVERY`, but again terminated before preparation; the lease expired while still indexed ACTIVE at revision `377`.

Architect classified ORCH-000181 BLOCKED and authorized exact expired-lease recovery as ORCH-000182.

## ORCH-000182 — reconciliation attempt produced no durable effect

ORCH-000182 invoked `reconcileExpiredMutationLease` exactly once. The disposable launcher returned no observable completion output, so Executor published `INCONCLUSIVE`.

Architect independently reconciled the GitHub namespace and proved target revision `000002` absent and index revision `377` unchanged. Because both authorized durable mutation effects were absent, Architect classified:

`GH-DEC-182-EXPIRED-WORKER-LEASE-RECONCILIATION-NO-DURABLE-EFFECT-BLOCKED`.

This preserved the no-blind-retry invariant and allowed one new separately authorized instrumented attempt.

## ORCH-000183 — accepted reconciliation denies projected transition

ORCH-000183 used the new separately authorized attempt after exact pre-state verification.

The accepted `reconcileExpiredMutationLease` path was invoked exactly once and returned deterministically:

`DENIED / EXPIRED_LEASE_RECONCILIATION_PROJECTION_INVALID`.

Durable post-state remained unchanged:

- revision `000002` absent;
- lease index revision `377`;
- `nextLeaseEpoch=190`;
- the same epoch-189 lease remains indexed ACTIVE;
- latest delivery remains `WORKER-DELIVERY-EXECUTOR-000013/SENT`;
- latest Architect trigger remains `ARCH-TRIGGER-9333-000005/SENT`;
- zero browser/host/source/protected-resource effects.

Unlike ORCH-000182, terminal and `LATEST_MILESTONE` convenience pointers advanced normally to ORCH-000183.

Architect classified:

`GH-DEC-183-EXPIRED-WORKER-LEASE-RECONCILIATION-PROJECTION-INVALID-BLOCKED`.

The next legal action is read-only projection-contract diagnosis against accepted source ORCH-000165 and proven-successful ORCH-000173. No further reconciliation attempt is authorized until the exact invalid projection condition is identified.

## Documentation-governance evolution — 2026-08-30/31

Rony eliminated Curator from the active model and made Architect directly responsible for canonical documentation. Governance then added:

- `documentationImpact = NONE | STATE | FULL` with write/readback closure before the next mutating implementation dispatch;
- `futureIdeaImpact = NONE | CAPTURE | PROMOTE` with separate `IDEA_INBOX`/`ROADMAP` surfaces;
- the fixed semantic documentation procedure `governance/ARCHITECT_DOCUMENTATION_SEMANTIC_TEST.md` v1.0 so Architect must decide by current-truth/state/lasting-truth questions and per-document testing rather than status or intuition.

Current governing versions:

- bootstrap v1.3;
- project policy v1.4;
- memory policy v1.4.

## Current target

Diagnose and then safely close the still-expired epoch-189 lease. Only after a clean lease index is accepted may the project return to the worker-delivery preparation proof, fresh persistent-host arm, and full unattended canary:

`Architect durable dispatch → persistent Orchestrator → durable worker intent → Executor exactly once → durable terminal → persistent Orchestrator → durable Architect trigger → Architect wake exactly once`.

AFFOTECH remains separate/protected until later explicit Rony-authorized integration.
