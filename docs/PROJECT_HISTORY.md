Project: affotech-agent-orchestrator
Documentation sync boundary: through Architect-classified ORCH-000178 and canonical ORCH-000179
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

## ORCH-000166 through ORCH-000173

ORCH-000166 safely armed persistent host `000026`.

ORCH-000167 proved automatic observation of a newer Architect dispatch but stopped before durable worker-intent preparation.

ORCH-000168/169/170 isolated the worker-preparation persistence/composition seam and diagnosed the missing explicit worker-delivery ID.

ORCH-000171/172/173 isolated and then closed an expired-lease GitHub create/readback ambiguity; index reached revision `370` with zero active leases.

## ORCH-000174 through ORCH-000177 — acquisition diagnosis

ORCH-000174 and ORCH-000176 stopped at ambiguous lease acquisition before preparation. ORCH-000175 proved no orphan candidate/index mutation existed. ORCH-000177 durably captured the lower request and found the exact disposable adapter defect: actual HTTP `404` was overwritten by `ghExitCode=1`, causing normal candidate absence to be rejected.

## ORCH-000178 — acquisition and normal release proven

The disposable adapter was corrected without tracked source mutation.

Execution proved:

- missing-path qualification preserved HTTP `404` separately from `ghExitCode=1`;
- one accepted worker-delivery lease acquisition succeeded;
- lease `MUTATION-LEASE-HOST-553f5ff7a8db44a8bf8bbf091309bb19` revision `000001` became durable ACTIVE at epoch `186`;
- index activation succeeded;
- the temporary launcher then terminated before `prepareWorkerDeliveryIntent`;
- preparation count stayed `0`; delivery `000014` remained absent;
- one normal accepted release succeeded;
- revision `000002` became durable RELEASED;
- final index revision `372`, next epoch `187`, active leases `0`;
- latest delivery remained `000013/SENT`;
- no browser/host/trigger/source side effect occurred.

Architect classified:

`GH-DEC-178-WORKER-DELIVERY-LEASE-ACQUISITION-ACCEPTED-CONTINUATION-BLOCKED`.

The acquisition and normal-release seams are now proven. The remaining defect is disposable launcher continuation.

## ORCH-000179 — current continuous preflight

ORCH-000179 must keep the successful lease binding in one process and execute:

`ACQUIRE → PREPARE → PROVEN_NOT_SENT → RELEASE`.

Preparation uses exact `workerDeliveryId=WORKER-DELIVERY-EXECUTOR-000014`. No browser contact is permitted. Success requires a durable PREPARED intent, durable PROVEN_NOT_SENT/NOT_SENT result, normal release, final active leases zero, and latest delivery still `000013/SENT`.

Only after this preparation proof is accepted should Architect arm a fresh persistent host and resume the unattended full-cycle qualification.

## Current target

`automatic dispatch observation → exact lease → durable worker intent → Executor exactly once → durable terminal → automatic terminal observation → durable Architect trigger → Architect wake exactly once`.

AFFOTECH remains separate/protected.
