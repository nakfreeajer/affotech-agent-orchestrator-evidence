Project: affotech-agent-orchestrator
Documentation sync boundary: through Architect-classified ORCH-000177 and canonical ORCH-000178
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
- ORCH-000170 — preparation requires exact disposable worker-delivery ID.
- ORCH-000173 — expired ORCH-000169 lease closed.
- ORCH-000175 — no orphan candidate/index mutation after ambiguous acquisition.

## ORCH-000177 — BLOCKED

Decision:

`GH-DEC-177-WORKER-DELIVERY-ACQUISITION-HTTP-STATUS-ADAPTER-BLOCKED`

Reviewed publication:

`GH-PUB-177-WORKER-DELIVERY-DURABLE-TRACE-FLUSH-ACQUISITION-BLOCKED-000001`

Architect verified:

- durable trace qualification passed;
- one lease-acquisition call only;
- candidate precheck returned HTTP `404` with `ghExitCode=1`;
- disposable adapter supplied semantic status `1` rather than HTTP `404`;
- accepted `notFound()` predicate returned false;
- client normalized to `CREATE_PRECHECK_FAILED`;
- runtime returned `AMBIGUOUS` before candidate PUT or index CAS;
- index remains revision `370`, next epoch `186`, active leases `0`;
- no preparation, delivery `000014`, browser, host, trigger, or source mutation occurred.

Decision rationale:

`DISPOSABLE_ADAPTER_OVERWROTE_HTTP_404_SEMANTICS_WITH_GH_EXIT_CODE_1_SO_ACCEPTED_CREATE_PRECHECK_REJECTED_NORMAL_ABSENT_CANDIDATE_BEFORE_ANY_MUTATION`.

Architect decision: no tracked source patch. Correct only the disposable adapter so HTTP semantic status and process exit code are separate, then authorize one fresh acquisition from the unchanged clean boundary.

## Current next authority — ORCH-000178

ORCH-000178 must prove on a harmless read-only missing path that an actual HTTP `404` is presented to the accepted client as `404`/NOT_FOUND while `ghExitCode=1` remains diagnostic metadata.

Only after that qualification may one acquisition run. If acquisition becomes durably ACTIVE, the milestone may continue to explicit `workerDeliveryId=WORKER-DELIVERY-EXECUTOR-000014`, PREPARED intent, zero-browser PROVEN_NOT_SENT result, and normal lease release.

Any ambiguity stops without retry and must preserve already-flushed diagnostics.
