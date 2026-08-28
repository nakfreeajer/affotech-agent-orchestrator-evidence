Project: affotech-agent-orchestrator
Documentation sync boundary: through Architect-accepted ORCH-000175 and canonical ORCH-000176
Status: CURRENT HUMAN-READABLE PROJECTION
Machine authority: durable GitHub evidence and Architect decisions

# Project History

## Foundation through ORCH-000165

The project established Rony as final authority, Architect as governor/decision-maker, Executor as bounded worker, GitHub as durable evidence authority, exact lineage, no blind retry, and separation from AFFOTECH.

Key accepted milestones:

- ORCH-000153: forward delivery `WORKER-DELIVERY-EXECUTOR-000013 / SENT` exactly once.
- ORCH-000163: Architect wake `ARCH-TRIGGER-9333-000005 / SENT` exactly once.
- ORCH-000165: legacy worker-delivery lineage compatibility repair accepted with full deterministic `817/817`.

Documentation ownership is `ARCHITECT_DIRECT`.

## ORCH-000166 through ORCH-000173

ORCH-000166 safely armed persistent host `000026`.

ORCH-000167 proved automatic observation of a newer Architect dispatch but stopped before durable worker-intent preparation.

ORCH-000168 proved accepted source already executes preparation and isolated the persistence/composition seam.

ORCH-000169 attempted composition-first recovery; ORCH-000170 diagnosed missing accepted `workerDeliveryId`; ORCH-000171/172 isolated lease create/readback ambiguity; ORCH-000173 durably closed the expired lease and restored a clean index revision `370` with zero active leases.

## ORCH-000174 — preparation preflight blocked at lease acquisition

The zero-browser preflight targeted delivery `000014`, but its first mutation—the one authorized worker-delivery lease acquisition—returned `AMBIGUOUS`. Preparation was never called and no delivery record was created.

Post-state remained index revision `370`, `nextLeaseEpoch=186`, `activeLeases=[]`, latest delivery `000013/SENT`, and zero browser/host/trigger/source side effects.

Architect classified:

`GH-DEC-174-WORKER-DELIVERY-PREFLIGHT-LEASE-ACQUISITION-BLOCKED`.

## ORCH-000175 — accepted acquisition ambiguity diagnostic

The read-only diagnostic traced the accepted acquisition path and searched the durable lease namespace.

It proved:

- no ORCH-000174 candidate lease revision exists;
- no candidate readback or index CAS occurred;
- no orphan immutable lease record exists;
- current index remains clean at revision `370`, next epoch `186`;
- the precise lower request outcome cannot be reconstructed because the ORCH-000174 disposable launcher discarded the accepted reconciliation descriptor and lower diagnostics.

Classification: `ERROR_PROPAGATION_ONLY_GAP`.

Architect accepted:

`GH-DEC-175-WORKER-DELIVERY-LEASE-ACQUISITION-ERROR-PROPAGATION-DIAGNOSTIC-ACCEPTED`.

No cleanup or source repair is currently required.

## ORCH-000176 — current instrumented acquisition + explicit-ID preflight

Architect now authorizes one fresh acquisition from the clean boundary with semantically inert bounded request/reconciliation diagnostics.

If acquisition is durably proven ACTIVE/indexed, execution may continue to the explicit preparation fix `workerDeliveryId=WORKER-DELIVERY-EXECUTOR-000014`, prove durable PREPARED, reconcile as PROVEN_NOT_SENT with zero browser contact, and normally release the lease.

Any ambiguous mutation stops without retry.

## Current target

`automatic dispatch observation → exact lease → durable worker intent → Executor exactly once → durable terminal → automatic terminal observation → durable Architect trigger → Architect wake exactly once`.

AFFOTECH remains separate/protected.
