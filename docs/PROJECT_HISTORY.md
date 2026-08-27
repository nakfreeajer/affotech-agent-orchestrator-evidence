Project: affotech-agent-orchestrator
Documentation sync boundary: through Architect-accepted ORCH-000170 and canonical ORCH-000171
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

## ORCH-000166 through ORCH-000169

ORCH-000166 safely armed persistent host `000026`.

ORCH-000167 proved automatic observation of a newer Architect dispatch but stopped before durable worker intent preparation.

ORCH-000168 proved accepted source already performs the preparation action and isolated the effective persistence/composition seam.

ORCH-000169 attempted composition-first recovery and fresh host `000027`. Preparation still failed before durable intent creation, host `000027` did not arm, and the preflight lease expired during cleanup. Expiry reconciliation became ambiguous, leaving the exact expired lease fail-closed in the current index.

Architect classified ORCH-000169 under:

`GH-DEC-169-PREPARATION-PREFLIGHT-AND-LEASE-AMBIGUITY-BLOCKED`.

## ORCH-000170 — accepted dual diagnostic

Executor performed no mutation and independently diagnosed both ORCH-000169 blockers.

Publication:

`GH-PUB-170-PREPARATION-AND-EXPIRED-LEASE-AMBIGUITY-DIAGNOSTIC-000001`

Architect decision:

`GH-DEC-170-PREPARATION-AND-EXPIRED-LEASE-DIAGNOSTIC-ACCEPTED`

Preparation finding:

- accepted worker-ID resolution expects `expectedFreshWorkerDeliveryId` or factory `workerDeliveryId`;
- host `000027` supplied neither;
- stable failure was `WORKER_DELIVERY_ID_REQUIRED`;
- classification `COMPOSITION_ADAPTER_DEFECT`;
- no source repair is currently proven necessary.

Lease finding:

- ORCH-000169 expiry-reconciliation binding was correct;
- accepted recovery attempted revision `000002` but could not prove durable create/readback;
- revision `000002` does not exist;
- index revision `369` still holds the expired ACTIVE revision-1 lease;
- classification `RECONCILIATION_RECORD_CREATION_AMBIGUOUS`.

The causes are independent.

## ORCH-000171 — current exact lease recovery

Architect intentionally separated recovery order. Lease ambiguity must be closed before any new preparation/host attempt.

ORCH-000171 authorizes exactly one accepted expired-lease reconciliation call for the ORCH-000169 worker-delivery lease. It may create/read back revision `000002` and CAS the index once to remove only that lease. It may not acquire another lease, retry preparation, create delivery `000014`, launch a host, contact a browser, or patch source.

If accepted, the following milestone can return to the disposable launcher fix by injecting `workerDeliveryId=WORKER-DELIVERY-EXECUTOR-000014`, then re-prove preparation before arming a fresh host.

## Current target

`automatic dispatch observation → exact lease → durable worker intent → Executor exactly once → durable terminal → automatic terminal observation → durable Architect trigger → Architect wake exactly once`.

AFFOTECH remains separate/protected.
