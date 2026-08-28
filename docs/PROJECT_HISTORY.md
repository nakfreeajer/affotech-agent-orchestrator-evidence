Project: affotech-agent-orchestrator
Documentation sync boundary: through Architect-accepted ORCH-000173 and canonical ORCH-000174
Status: CURRENT HUMAN-READABLE PROJECTION
Machine authority: durable GitHub evidence and Architect decisions

# Project History

## Foundation through ORCH-000165

The project established Rony as final authority, Architect as governor/decision-maker, Executor as bounded worker, GitHub as durable evidence authority, exact lineage, no blind retry, and separation from AFFOTECH.

Key accepted milestones:

- ORCH-000153: forward delivery `WORKER-DELIVERY-EXECUTOR-000013 / SENT` exactly once.
- ORCH-000163: Architect wake `ARCH-TRIGGER-9333-000005 / SENT` exactly once.
- ORCH-000165: legacy worker-delivery lineage compatibility repair accepted with full deterministic `817/817`.

Documentation ownership is `ARCHITECT_DIRECT`; Curator is not an active required role.

## ORCH-000166 through ORCH-000170

ORCH-000166 safely armed persistent host `000026`.

ORCH-000167 proved automatic observation of a newer Architect dispatch but stopped before durable worker-intent preparation.

ORCH-000168 proved accepted source already executes the preparation action and isolated the effective persistence/composition seam.

ORCH-000169 attempted composition-first recovery and fresh host `000027`; preparation still failed before intent creation and an expired worker-delivery lease remained active after ambiguous reconciliation.

ORCH-000170 independently diagnosed preparation as `COMPOSITION_ADAPTER_DEFECT`: host `000027` omitted accepted `workerDeliveryId`. It also proved the expired-lease recovery binding was correct.

## ORCH-000171 / ORCH-000172 — ambiguity isolation

ORCH-000171 executed one exact accepted expired-lease reconciliation under unchanged preconditions and returned `AMBIGUOUS / EXPIRED_LEASE_RECONCILIATION_RECORD_AMBIGUOUS` with no durable side effect.

ORCH-000172 traced the create/readback seam and was accepted as `ERROR_PROPAGATION_ONLY_GAP`: accepted path/payload/schema semantics were not proven defective, while the disposable/runtime layers had hidden the concrete GitHub transport outcome.

## ORCH-000173 — expired lease closed

Architect authorized one instrumented exact reconciliation with unchanged accepted request semantics.

Execution proved:

- initial revision-`000002` precheck returned expected 404;
- the exact GitHub Contents PUT succeeded;
- revision `000002` read back as exact `EXPIRED` projection of revision `000001`;
- one index CAS advanced revision `369 → 370`;
- only the target lease was removed;
- current active lease count is `0`;
- no browser, host, worker-delivery, trigger, source, AFFOTECH or Drive side effect occurred.

Architect accepted:

`GH-DEC-173-EXPIRED-WORKER-DELIVERY-LEASE-INSTRUMENTED-RECONCILIATION-ACCEPTED`.

The ORCH-000169 lease recovery chain is closed.

## ORCH-000174 — current preparation preflight

The project now returns to the independent preparation seam.

ORCH-000174 explicitly supplies `workerDeliveryId=WORKER-DELIVERY-EXECUTOR-000014`, acquires at most one worker-delivery lease, and must prove one durable `PREPARED` intent with zero browser contact.

The prepared preflight must then be durably reconciled as `PROVEN_NOT_SENT / NOT_SENT`, leaving `LATEST_DELIVERY=000013/SENT`, and its lease must be released normally before expiry so active lease count returns to zero.

Only after this preparation proof is accepted should Architect arm a fresh host identity and resume the unattended full-cycle qualification.

## Current target

`automatic dispatch observation → exact lease → durable worker intent → Executor exactly once → durable terminal → automatic terminal observation → durable Architect trigger → Architect wake exactly once`.

AFFOTECH remains separate/protected.
