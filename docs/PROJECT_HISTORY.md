Project: affotech-agent-orchestrator
Documentation sync boundary: through Architect-classified ORCH-000181 and canonical ORCH-000182
Status: CURRENT HUMAN-READABLE PROJECTION
Machine authority: durable GitHub evidence and Architect decisions

# Project History

## Foundation through ORCH-000165

The project established Rony as final authority, Architect as governor/decision-maker, Executor as bounded worker, GitHub as durable evidence authority, exact lineage, no blind retry, and separation from AFFOTECH.

Key accepted milestones:

- ORCH-000153: forward delivery `WORKER-DELIVERY-EXECUTOR-000013/SENT` exactly once.
- ORCH-000163: Architect wake `ARCH-TRIGGER-9333-000005/SENT` exactly once.
- ORCH-000165: lineage compatibility repair accepted with full deterministic `817/817`.

Documentation ownership is `ARCHITECT_DIRECT`.

## ORCH-000166 through ORCH-000178

ORCH-000166/167 proved persistent host idle and automatic newer-dispatch observation. ORCH-000168/169/170 isolated worker-intent preparation composition and the explicit worker-delivery ID requirement. ORCH-000171/172/173 isolated and closed an earlier expired lease. ORCH-000174 through ORCH-000177 isolated disposable GitHub adapter observability/status defects. ORCH-000178 corrected that boundary and durably proved accepted worker-delivery lease acquisition and normal release.

## ORCH-000179 — preparation reached

ORCH-000179 acquired epoch `187` and called preparation. It failed closed with `HOST_AUTHORIZATION_INVALID` because the disposable continuation omitted the accepted runner-equivalent transient `actionKind=WORKER_DELIVERY` binding. The lease was normally released and state returned clean.

## ORCH-000180 — action-kind attempt not reached

ORCH-000180 acquired/released epoch `188`, but the bounded disposable process stopped before any preparation request. It therefore provided no negative evidence about the action-kind fix.

## ORCH-000181 — in-process attempt left expired lease

ORCH-000181 removed the intended external execution boundary, acquired and indexed epoch `189`, and constructed transient `actionKind=WORKER_DELIVERY`. Nevertheless the process terminated before `prepareWorkerDeliveryIntent` was called.

No delivery `000014` intent/result or browser contact occurred. By readback time the lease had expired. Accepted normal release was no longer authorized, so it was not attempted.

Durable state:

- lease ID `MUTATION-LEASE-HOST-8af1857f183a9d267184b29c1a5eb1e0`;
- epoch `189`;
- revision `000001=ACTIVE`;
- revision `000002` absent;
- index revision `377`;
- next epoch `190`;
- exactly one active indexed lease;
- latest delivery `000013/SENT`;
- Architect trigger `000005/SENT`;
- no browser/source side effect.

Architect classified:

`GH-DEC-181-WORKER-DELIVERY-IN-PROCESS-PREFLIGHT-EXPIRED-LEASE-BLOCKED`.

## ORCH-000182 — current exact recovery

Before any new preparation proof, ORCH-000182 must invoke accepted expired-lease reconciliation exactly once against the ORCH-000181 binding.

Required recovery result:

`revision 000002=EXPIRED → index 377→378 → nextEpoch 190 unchanged → activeLeases=[]`.

No new lease or preparation is authorized in this milestone.

After recovery, Architect should avoid another bespoke launcher boundary and move toward qualifying the actual persistent-host composition once the preparation path can be exercised without artificial process termination.

## Current target

`automatic dispatch observation → exact lease → durable worker intent → Executor exactly once → durable terminal → automatic terminal observation → durable Architect trigger → Architect wake exactly once`.

AFFOTECH remains separate/protected.
