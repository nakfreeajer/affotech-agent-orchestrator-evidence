Project: affotech-agent-orchestrator
Documentation sync boundary: through Architect-classified ORCH-000180 and canonical ORCH-000181
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

ORCH-000166 safely armed persistent host `000026`. ORCH-000167 proved automatic newer-dispatch observation. ORCH-000168/169/170 isolated preparation composition and the explicit worker-delivery ID requirement. ORCH-000171/172/173 isolated and then closed the expired-lease ambiguity.

## ORCH-000174 through ORCH-000178

Repeated bounded preflights isolated the disposable GitHub adapter defect: HTTP `404` had been overwritten by `ghExitCode=1`. ORCH-000178 corrected that boundary and proved accepted worker-delivery lease acquisition and normal release durably.

## ORCH-000179 — preparation reached

ORCH-000179 kept acquisition and preparation in one continuous attempt. It acquired epoch `187`, then preparation failed closed with `HOST_AUTHORIZATION_INVALID` because the disposable continuation passed the persisted lease directly instead of the accepted runner-equivalent transient authorization containing `actionKind=WORKER_DELIVERY`. The lease was normally released and state returned clean.

## ORCH-000180 — action-kind attempt stopped before preparation

ORCH-000180 intended to reproduce the transient action-kind enrichment. It acquired epoch `188` successfully, but its bounded disposable process stopped before issuing any preparation request. The flushed trace contained acquisition and no delivery-record request.

The exact lease was normally released. Final state:

- index revision `376`;
- next epoch `189`;
- active leases `0`;
- delivery `000014` absent;
- latest delivery `000013/SENT`;
- browser/host/trigger/source side effects zero.

Architect classified:

`GH-DEC-180-WORKER-DELIVERY-ACTION-KIND-PREFLIGHT-OPERATIONAL-TIMEOUT-BLOCKED`.

This does not disprove the action-kind fix because preparation call count was zero.

## ORCH-000181 — current in-process preflight

ORCH-000181 removes the external process boundary. One in-process state machine must execute:

`ACQUIRE → transient actionKind=WORKER_DELIVERY → PREPARE → PROVEN_NOT_SENT → RELEASE`.

Preparation uses explicit `workerDeliveryId=WORKER-DELIVERY-EXECUTOR-000014`; no browser contact is permitted. Success requires durable PREPARED intent, durable PROVEN_NOT_SENT/NOT_SENT result, normal release, final active leases zero, and latest delivery still `000013/SENT`.

Only after this preparation proof is accepted should Architect arm a fresh persistent host and resume unattended full-cycle qualification.

## Current target

`automatic dispatch observation → exact lease → durable worker intent → Executor exactly once → durable terminal → automatic terminal observation → durable Architect trigger → Architect wake exactly once`.

AFFOTECH remains separate/protected.
