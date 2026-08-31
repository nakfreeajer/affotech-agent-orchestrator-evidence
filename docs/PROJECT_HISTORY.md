Project: affotech-agent-orchestrator
Documentation sync boundary: through ORCH-000184 Architect review
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

ORCH-000166 safely armed persistent host `000026`. ORCH-000167 proved automatic newer-dispatch observation. ORCH-000168/169/170 isolated preparation composition and the explicit worker-delivery ID requirement. ORCH-000171/172/173 isolated and then closed an expired-lease ambiguity; ORCH-000173 proved an instrumented expired-lease revision create/readback plus index CAS/readback can close the lease when the full immutable lease record is used.

## ORCH-000174 through ORCH-000179

Bounded preflights isolated the disposable GitHub adapter defect: actual HTTP `404` had been overwritten by `ghExitCode=1`. ORCH-000178 corrected that boundary and proved accepted worker-delivery lease acquisition and normal release. ORCH-000179 reached preparation and proved the transient authorization must include `actionKind=WORKER_DELIVERY`.

## ORCH-000180 / ORCH-000181

ORCH-000180 acquired/released epoch `188` but stopped before preparation. ORCH-000181 acquired/indexed epoch `189` and constructed `actionKind=WORKER_DELIVERY`, but again terminated before preparation; the lease expired while still indexed ACTIVE at revision `377`.

## ORCH-000182 — no durable reconciliation effect

ORCH-000182 invoked `reconcileExpiredMutationLease` exactly once. The disposable launcher returned no observable completion output. Architect independently reconciled the GitHub namespace and proved target revision `000002` absent and index revision `377` unchanged, so the authorized mutation effect was durably absent.

Architect decision:

`GH-DEC-182-EXPIRED-WORKER-LEASE-RECONCILIATION-NO-DURABLE-EFFECT-BLOCKED`.

## ORCH-000183 — deterministic projection denial

ORCH-000183 used one separately authorized instrumented reconciliation attempt after exact pre-state verification. The accepted path returned:

`DENIED / EXPIRED_LEASE_RECONCILIATION_PROJECTION_INVALID`

before any durable mutation. Revision `000002` remained absent, lease index remained `377`, next epoch remained `190`, and protected side effects remained zero.

Architect decision:

`GH-DEC-183-EXPIRED-WORKER-LEASE-RECONCILIATION-PROJECTION-INVALID-BLOCKED`.

The next legal action became read-only root-cause diagnosis.

## ORCH-000184 — caller argument defect identified and accepted

ORCH-000184 performed zero reconciliation and zero lease/source/browser/host mutation.

It compared the epoch-189 target and ORCH-000183 call shape with accepted source and the successful ORCH-000169/ORCH-000173 control.

Diagnosis:

- immutable epoch-189 revision `000001` is a valid full `MUTATION_LEASE`;
- the mutation-lease index stores a reduced `activeLeases` projection/locator;
- ORCH-000183 passed that reduced index entry where the expiry projection requires a full `validateMutationLease`-compatible lease record;
- the reduced object failed `validateMutationLease` with `RECORD_FIELDS_INVALID` before EXPIRED projection construction;
- historical ORCH-000169/173 succeeded using the full immutable lease record;
- classification `CALLER_ARGUMENT_DEFECT`;
- accepted source patch required `false`.

Architect accepted the diagnosis under:

`GH-DEC-184-EXPIRED-LEASE-CALLER-ARGUMENT-CONTRACT-ACCEPTED`.

Permanent contract established: index entries are locators/projections, not substitutes for full immutable lease records when reconciliation/projector validation requires the complete lease schema.

A prior activated ORCH-000184 decision recorded documentation impact `STATE`. Because the fixed semantic test requires `FULL` when a permanent root cause/contract is established, Architect published a superseding decision with `documentationImpact=FULL`. Historical records were preserved rather than rewritten.

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

Close the still-expired epoch-189 lease through a corrected caller/composition that hydrates and verifies the full immutable revision before reconciliation. Only after a clean lease index is accepted may the project return to the worker-delivery preparation proof, fresh persistent-host arm, and full unattended canary:

`Architect durable dispatch → persistent Orchestrator → durable worker intent → Executor exactly once → durable terminal → persistent Orchestrator → durable Architect trigger → Architect wake exactly once`.

AFFOTECH remains separate/protected until later explicit Rony-authorized integration.
