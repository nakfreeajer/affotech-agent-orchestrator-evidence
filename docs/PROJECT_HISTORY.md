Project: affotech-agent-orchestrator
Documentation sync boundary: through Architect-classified ORCH-000171 and canonical ORCH-000172
Status: CURRENT HUMAN-READABLE PROJECTION
Machine authority: durable GitHub evidence and Architect decisions

# Project History

## Foundation through ORCH-000165

The project established Rony as final authority, Architect as governor/decision-maker, Executor as bounded worker, GitHub as durable evidence authority, exact lineage, no blind retry, and separation from AFFOTECH.

Key accepted milestones:

- ORCH-000153: forward delivery `WORKER-DELIVERY-EXECUTOR-000013 / SENT` exactly once.
- ORCH-000163: Architect wake `ARCH-TRIGGER-9333-000005 / SENT` exactly once.
- ORCH-000165: legacy worker-delivery lineage compatibility repair accepted with full deterministic `817/817`.

Documentation ownership became `ARCHITECT_DIRECT`; Curator is not an active required role.

## ORCH-000166 through ORCH-000170

ORCH-000166 safely armed persistent host `000026`.

ORCH-000167 proved automatic observation of a newer Architect dispatch but stopped before durable worker-intent preparation.

ORCH-000168 proved accepted source already executes the preparation action and isolated the effective persistence/composition seam.

ORCH-000169 attempted composition-first recovery and fresh host `000027`; preparation still failed before intent creation and an expired worker-delivery lease remained active after ambiguous reconciliation.

ORCH-000170 independently diagnosed the two causes:

- preparation = `COMPOSITION_ADAPTER_DEFECT` because host `000027` omitted accepted `workerDeliveryId`;
- lease = `RECONCILIATION_RECORD_CREATION_AMBIGUOUS` with correct immutable recovery binding but absent revision `000002`.

## ORCH-000171 — exact lease recovery INCONCLUSIVE

Architect authorized exactly one accepted `reconcileExpiredMutationLease` call for the ORCH-000169 lease.

All preconditions passed. The call returned:

`AMBIGUOUS / EXPIRED_LEASE_RECONCILIATION_RECORD_AMBIGUOUS`.

Readback after the call proved:

- revision `000002` absent;
- index revision still `369`;
- exact expired revision-1 lease still indexed `ACTIVE`;
- active lease count still `1`;
- no new lease, host, browser, delivery, trigger, or tracked-source mutation.

Architect classified:

`GH-DEC-171-EXPIRED-WORKER-DELIVERY-LEASE-RECONCILIATION-INCONCLUSIVE`.

The important conclusion is that the ambiguity is reproducible at the revision-create/readback seam even under a correctly-bound one-call recovery. A second blind call is forbidden.

## ORCH-000172 — current read-only seam diagnostic

The next milestone traces the exact concrete GitHub createJson/client path used for lease revision `000002`, including command/API method, input handling, path/payload, return normalization, and error propagation. It compares that path against known-good durable creates and identifies the smallest repair boundary without mutation.

Only after ORCH-000172 may Architect decide whether the next action is a disposable adapter fix, bounded accepted-source repair, transport/auth repair, or another exact recovery under corrected conditions.

## Current target

`automatic dispatch observation → exact lease → durable worker intent → Executor exactly once → durable terminal → automatic terminal observation → durable Architect trigger → Architect wake exactly once`.

AFFOTECH remains separate/protected.
