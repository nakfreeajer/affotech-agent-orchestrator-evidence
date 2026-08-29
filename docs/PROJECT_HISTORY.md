Project: affotech-agent-orchestrator
Documentation sync boundary: through Architect-classified ORCH-000177 and canonical ORCH-000178
Status: CURRENT HUMAN-READABLE PROJECTION
Machine authority: durable GitHub evidence and Architect decisions

# Project History

## Foundation through ORCH-000165

The project established Rony as final authority, Architect as governor/decision-maker, Executor as bounded worker, GitHub as durable evidence authority, exact lineage, no blind retry, and separation from AFFOTECH.

Key accepted milestones:

- ORCH-000153: forward delivery `WORKER-DELIVERY-EXECUTOR-000013/SENT` exactly once.
- ORCH-000163: Architect wake `ARCH-TRIGGER-9333-000005/SENT` exactly once.
- ORCH-000165: legacy worker-delivery lineage compatibility repair accepted with full deterministic `817/817`.

Documentation ownership is `ARCHITECT_DIRECT`.

## ORCH-000166 through ORCH-000173

ORCH-000166 safely armed persistent host `000026`.

ORCH-000167 proved automatic observation of a newer Architect dispatch but stopped before durable worker-intent preparation.

ORCH-000168 proved accepted source already executes preparation and isolated the effective persistence/composition seam.

ORCH-000169 attempted composition-first recovery and left an expired worker-delivery lease after preparation failure.

ORCH-000170 diagnosed the preparation composition defect as missing accepted `workerDeliveryId`.

ORCH-000171/172 isolated expired-lease create/readback ambiguity; ORCH-000173 then closed that lease. Revision `000002` became durable `EXPIRED`, index advanced `369→370`, active leases became zero.

## ORCH-000174 through ORCH-000176 — acquisition ambiguity isolation

ORCH-000174 attempted the zero-browser preparation preflight but its one lease acquisition returned `AMBIGUOUS` before preparation.

ORCH-000175 proved no orphan candidate or index CAS existed; the lower request diagnostics had been discarded.

ORCH-000176 added instrumentation, but the trace remained only in process memory and was lost when the launcher exited on `LEASE_AMBIGUOUS`.

## ORCH-000177 — concrete acquisition adapter defect found

ORCH-000177 first qualified durable trace flush on a harmless read-only probe, then performed one acquisition call.

The durable trace established the exact cause:

- candidate precheck GET returned actual HTTP `404`;
- `gh` process exit code was `1`;
- disposable adapter supplied status `1` to the accepted client instead of preserving HTTP `404` semantics;
- accepted NOT_FOUND predicate therefore failed;
- `createJson` returned `CREATE_PRECHECK_FAILED`;
- runtime returned `AMBIGUOUS` before any candidate PUT or index CAS.

Durable state remained clean: index revision `370`, next epoch `186`, active leases `0`, delivery `000014` absent, browser/host/trigger/source effects zero.

Architect classified:

`GH-DEC-177-WORKER-DELIVERY-ACQUISITION-HTTP-STATUS-ADAPTER-BLOCKED`.

No tracked source repair is required by current evidence.

## ORCH-000178 — current status-preserving preflight

The next milestone changes only the disposable request adapter so HTTP semantic status and process exit code remain separate.

A read-only missing-path probe must first prove actual HTTP `404` is recognized by the accepted client as NOT_FOUND while `ghExitCode=1` is retained only as diagnostics.

Only then may one acquisition run. If it succeeds durably, the milestone may continue to exact `workerDeliveryId=WORKER-DELIVERY-EXECUTOR-000014`, PREPARED intent, zero-browser PROVEN_NOT_SENT result, and normal lease release.

## Current target

`automatic dispatch observation → exact lease → durable worker intent → Executor exactly once → durable terminal → automatic terminal observation → durable Architect trigger → Architect wake exactly once`.

AFFOTECH remains separate/protected.
