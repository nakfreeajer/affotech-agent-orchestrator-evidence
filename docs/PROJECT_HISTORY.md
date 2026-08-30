Project: affotech-agent-orchestrator
Documentation sync boundary: through Architect-classified ORCH-000179 and canonical ORCH-000180
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

ORCH-000168/169/170 isolated worker preparation composition and diagnosed the missing explicit worker-delivery ID.

ORCH-000171/172/173 isolated and closed the expired-lease GitHub reconciliation ambiguity.

## ORCH-000174 through ORCH-000178 — acquisition path closed

ORCH-000174/176 hit ambiguous lease acquisition. ORCH-000175 proved no orphan candidate. ORCH-000177 captured the concrete disposable adapter error: HTTP `404` had been replaced by `ghExitCode=1`.

ORCH-000178 corrected that disposable mapping. One epoch-186 lease became durable ACTIVE/indexed and was later normally RELEASED. Final index reached revision `372`, next epoch `187`, active leases `0`. The only remaining issue was that the temporary launcher stopped before preparation.

## ORCH-000179 — continuous launcher reached preparation

ORCH-000179 started at the clean revision-372 boundary and successfully:

- acquired one epoch-187 worker-delivery lease;
- read back its ACTIVE revision;
- continued into `prepareWorkerDeliveryIntent` exactly once.

Preparation failed closed as `HOST_AUTHORIZATION_INVALID`. The direct disposable continuation passed the persisted lease record unchanged, while the accepted persistent runner adds transient `actionKind=WORKER_DELIVERY` to the transport authorization before worker-delivery preparation.

No delivery `000014` intent/result was created and no browser was contacted. The exact lease was normally released. Final index revision became `374`, next epoch `188`, active leases `0`, and latest delivery remained `000013/SENT`.

Architect classified:

`GH-DEC-179-WORKER-DELIVERY-PREPARATION-LEASE-ACTION-KIND-BINDING-BLOCKED`.

No tracked source repair is indicated.

## ORCH-000180 — current action-kind-enriched preflight

The next milestone preserves all proven seams and changes only the preparation transport authorization.

After one epoch-188 lease is durably ACTIVE, the launcher must keep the durable lease immutable and derive a transient transport object with exact same binding plus `actionKind=WORKER_DELIVERY`.

It then calls preparation once with `workerDeliveryId=WORKER-DELIVERY-EXECUTOR-000014`, requires durable PREPARED intent, reconciles as PROVEN_NOT_SENT/NOT_SENT with zero browser contact, and normally releases the lease.

Only after this preparation proof is accepted should Architect arm a fresh persistent host and resume unattended full-cycle qualification.

## Current target

`automatic dispatch observation → exact lease → durable worker intent → Executor exactly once → durable terminal → automatic terminal observation → durable Architect trigger → Architect wake exactly once`.

AFFOTECH remains separate/protected.
