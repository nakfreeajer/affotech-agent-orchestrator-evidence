Project: affotech-agent-orchestrator
Documentation sync boundary: through Architect-accepted ORCH-000172 and canonical ORCH-000173
Status: CURRENT HUMAN-READABLE PROJECTION
Machine authority: immutable Architect decisions under `evidence/decisions/architect/`

# Architect Decisions

Architect classifications are exactly `ACCEPTED`, `BLOCKED`, `INCONCLUSIVE`, `NO NEW REPORT`. Executor PASS/COMPLETED is evidence only.

## Permanent decisions

- Rony is final human authority.
- Architect governs, verifies, decides, and directly maintains relevant documentation.
- Executor performs bounded implementation/runtime/validation work.
- Orchestrator is deterministic/non-AI transport only.
- GitHub durable evidence is machine authority.
- No blind retry after ambiguous external mutation.
- Historical evidence is immutable in meaning.
- Local git commit/push is not runtime persistence.
- AFFOTECH and protected resources remain separate.
- Documentation policy is `ARCHITECT_DIRECT`.

## Accepted foundations

- ORCH-000153 — exactly-once Executor forward delivery.
- ORCH-000163 — exactly-once Architect wake.
- ORCH-000165 — accepted lineage-compatibility source repair, `817/817`.
- ORCH-000166 — persistent host `000026` safely armed/idle.
- ORCH-000170 — preparation `COMPOSITION_ADAPTER_DEFECT`; lease recovery binding correct but revision creation ambiguous.

## ORCH-000171 — INCONCLUSIVE

Decision:

`GH-DEC-171-EXPIRED-WORKER-DELIVERY-LEASE-RECONCILIATION-INCONCLUSIVE`

One exact correctly bound accepted reconciliation call repeated `AMBIGUOUS / EXPIRED_LEASE_RECONCILIATION_RECORD_AMBIGUOUS` with revision `000002` absent, index revision `369` unchanged, target expired lease still ACTIVE, and no durable side effect.

Architect decision: no second blind reconciliation.

## ORCH-000172 — ACCEPTED error-propagation diagnostic

Decision:

`GH-DEC-172-EXPIRED-LEASE-CREATE-READBACK-ERROR-PROPAGATION-DIAGNOSTIC-ACCEPTED`

Reviewed publication:

`GH-PUB-172-EXPIRED-LEASE-REVISION-CREATE-READBACK-SEAM-DIAGNOSTIC-000001`

Architect accepts:

- ORCH-000171 used accepted `createGitHubContentsRuntimeClient` and accepted `createJson`;
- revision `000002` path and deterministic EXPIRED payload are valid;
- known-good creates use the same GitHub Contents client model, repository, branch, auth and encoding;
- no path, payload, schema, auth or accepted-runtime create defect is proven;
- the accepted client collapses the failed/unproven PUT/readback to `AMBIGUOUS / POST_MUTATION_ABSENT`;
- runtime reconciliation then collapses that to `EXPIRED_LEASE_RECONCILIATION_RECORD_AMBIGUOUS`;
- the disposable request wrapper did not preserve the underlying `gh`/HTTP failure;
- classification is `ERROR_PROPAGATION_ONLY_GAP`;
- no tracked source repair is currently required by the evidence.

Decision rationale:

`ACCEPTED_CREATE_JSON_AND_LEASE_PATH_ARE_NOT_PROVEN_DEFECTIVE_BUT_DISPOSABLE_REQUEST_AND_RUNTIME_ERROR_PROPAGATION_HIDE_THE_CONCRETE_GITHUB_FAILURE`.

## Current next authority — ORCH-000173

ORCH-000173 authorizes one instrumented exact reconciliation. The accepted request/reconciliation semantics and immutable lease binding must remain unchanged; only the disposable request wrapper may preserve safe non-sensitive PUT/readback diagnostics.

If reconciliation succeeds, revision `000002` and one exact index CAS may close the lease. If it fails or is ambiguous, no retry is authorized and the concrete redacted transport cause must be published.

No new lease, preparation, host, browser, delivery, trigger, source, AFFOTECH, Drive, deployment, tenant or private-data mutation is authorized beyond the exact lease/index reconciliation envelope.
