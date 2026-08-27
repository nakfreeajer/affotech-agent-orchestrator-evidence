Project: affotech-agent-orchestrator
Documentation sync boundary: through Architect-classified ORCH-000169 and canonical ORCH-000170
Status: CURRENT HUMAN-READABLE PROJECTION
Machine authority: durable GitHub evidence and Architect decisions

# Project History

## Foundation through ORCH-000165

The project established Rony as final authority, Architect as governor/decision-maker, Executor as bounded worker, GitHub as durable evidence authority, exact lineage, no blind retry, and separation from AFFOTECH.

Key accepted milestones:

- ORCH-000153: forward delivery `WORKER-DELIVERY-EXECUTOR-000013 / SENT` exactly once.
- ORCH-000163: Architect wake `ARCH-TRIGGER-9333-000005 / SENT` exactly once.
- ORCH-000165: legacy worker-delivery lineage compatibility repair accepted with full deterministic `817/817`; historical delivery `000013` remained untouched.

On 2026-08-26 Rony changed documentation ownership to `ARCHITECT_DIRECT`; Curator is not an active required role.

## ORCH-000166 — persistent automatic host armed

Architect accepted host `000026` after one start, bootstrap suppression, three valid idle polls, zero transport side effects, and liveness at publication.

## ORCH-000167 — first automatic full-cycle probe

Architect published `DISPATCH-000167` directly to GitHub. Host `000026` automatically detected it and progressed through lease acquisition to `HOST_DELIVERY_READY / PREPARE_WORKER_DELIVERY_INTENT`, then failed closed before durable delivery intent creation or browser contact.

Architect classified `GH-DEC-167-AUTOMATIC-HOST-WORKER-DELIVERY-INTENT-PREPARATION-BLOCKED`.

## ORCH-000168 — accepted read-only composition diagnostic

The diagnostic proved accepted source already invokes `prepareWorkerDeliveryIntent` automatically. The effective host-000026 injected persistence seam did not return a durably read-back `PREPARED` intent, so `sendWorkerDelivery` was never reached. The lease boundary was confirmed action-derived rather than optional dispatch metadata.

Architect accepted:

`GH-DEC-168-WORKER-DELIVERY-INTENT-PREPARATION-COMPOSITION-DIAGNOSTIC-ACCEPTED`.

## ORCH-000169 — composition-first recovery BLOCKED

Architect authorized a disposable composition repair, zero-browser preparation preflight, and fresh host `000027` arm attempt without tracked source mutation.

Observed execution:

- old host `000026` was already absent before the attempt;
- fresh host `000027` identity was created;
- exactly one host launch attempt occurred;
- one real preparation call returned `FAILED_BEFORE_SEND` with `durableRecorded=false`;
- no `WORKER-DELIVERY-EXECUTOR-000014` intent/result was created;
- no browser contact/send occurred;
- host `000027` exited and completed zero idle polls;
- latest delivery remained `000013/SENT`;
- Architect trigger remained `000005/SENT`.

The preflight lease expired before cleanup. Exact expiry reconciliation and bounded cleanup remained ambiguous with `EXPIRED_LEASE_RECONCILIATION_RECORD_AMBIGUOUS`; the current lease index still lists the exact expired lease as `ACTIVE`.

Architect decision:

`GH-DEC-169-PREPARATION-PREFLIGHT-AND-LEASE-AMBIGUITY-BLOCKED`.

## ORCH-000170 — current read-only diagnostic

Before any new source, host, delivery, or lease mutation, ORCH-000170 must establish:

1. the exact lower-level preparation failure in the host-000027 persistence composition or accepted error-propagation/persistence contract; and
2. the exact reason expired-lease reconciliation became ambiguous, including whether a durable recovery record already exists and whether the index is stale or the recovery binding was wrong.

Only after that diagnostic may Architect authorize the smallest exact recovery/repair.

## Current target

The target remains:

`automatic dispatch observation → exact lease → durable worker intent → Executor exactly once → durable terminal → automatic terminal observation → durable Architect trigger → Architect wake exactly once`.

AFFOTECH remains separate/protected and no Curator relay is required.
