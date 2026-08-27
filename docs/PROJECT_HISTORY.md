Project: affotech-agent-orchestrator
Documentation sync boundary: through Architect-accepted ORCH-000172 and canonical ORCH-000173
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

ORCH-000170 independently diagnosed:

- preparation = `COMPOSITION_ADAPTER_DEFECT` because host `000027` omitted accepted `workerDeliveryId`;
- lease = `RECONCILIATION_RECORD_CREATION_AMBIGUOUS` with correct immutable recovery binding but absent revision `000002`.

## ORCH-000171 — exact lease recovery INCONCLUSIVE

Architect authorized exactly one accepted `reconcileExpiredMutationLease` call for the ORCH-000169 lease. It returned `AMBIGUOUS / EXPIRED_LEASE_RECONCILIATION_RECORD_AMBIGUOUS`. Revision `000002` remained absent, index revision remained `369`, and no durable side effect occurred.

Architect decision:

`GH-DEC-171-EXPIRED-WORKER-DELIVERY-LEASE-RECONCILIATION-INCONCLUSIVE`.

## ORCH-000172 — accepted create/readback seam diagnostic

Executor traced the exact accepted GitHub Contents path without mutation.

Publication:

`GH-PUB-172-EXPIRED-LEASE-REVISION-CREATE-READBACK-SEAM-DIAGNOSTIC-000001`

Architect decision:

`GH-DEC-172-EXPIRED-LEASE-CREATE-READBACK-ERROR-PROPAGATION-DIAGNOSTIC-ACCEPTED`.

The diagnostic proved ORCH-000171 used accepted `createGitHubContentsRuntimeClient` / `createJson`, the projected `000002` path and EXPIRED payload are valid, and no material path/payload/schema/auth difference from known-good durable creates is proven.

The concrete accepted normalized failure is `AMBIGUOUS / POST_MUTATION_ABSENT`. Runtime reconciliation collapses that to `EXPIRED_LEASE_RECONCILIATION_RECORD_AMBIGUOUS`, while the disposable request wrapper had discarded the underlying `gh`/HTTP status/error.

Classification: `ERROR_PROPAGATION_ONLY_GAP`. No tracked source repair is currently proven necessary.

## ORCH-000173 — current instrumented exact reconciliation

Architect now authorizes one exact reconciliation under the same immutable lease binding and accepted request semantics, but with a disposable wrapper that preserves safe transport diagnostics without changing request behavior.

If revision `000002` and index CAS succeed, the lease may close. If not, the call must not be retried; the concrete redacted PUT/readback cause must be published.

Preparation retry remains separate and still waits until lease ambiguity is closed.

## Current target

`automatic dispatch observation → exact lease → durable worker intent → Executor exactly once → durable terminal → automatic terminal observation → durable Architect trigger → Architect wake exactly once`.

AFFOTECH remains separate/protected.
