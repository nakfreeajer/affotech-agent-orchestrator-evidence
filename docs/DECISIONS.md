Project: affotech-agent-orchestrator
Documentation sync boundary: through Architect-classified ORCH-000169 and canonical ORCH-000170
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
- AFFOTECH and its protected resources remain separate.
- Documentation policy is `ARCHITECT_DIRECT`.

## Accepted foundations

- ORCH-000153 — exactly-once Executor forward delivery.
- ORCH-000163 — exactly-once Architect wake.
- ORCH-000165 — lineage-compatibility source repair, full deterministic `817/817`.
- ORCH-000166 — persistent host `000026` safely armed/idle.
- ORCH-000168 — accepted diagnostic that the automatic preparation call exists in accepted source and the immediate failure was the effective persistence/composition seam.

## ORCH-000169 — BLOCKED before durable preparation and with lease ambiguity

Decision:

`GH-DEC-169-PREPARATION-PREFLIGHT-AND-LEASE-AMBIGUITY-BLOCKED`

Reviewed publication:

`GH-PUB-169-PREPARATION-COMPOSITION-REPAIR-FRESH-HOST-ARM-BLOCKED-000001`

Architect verified:

- accepted source remained ORCH-000165;
- host `000026` was already absent;
- one host-000027 launch attempt created its identity but did not leave a running/armed host;
- one preflight preparation call returned `FAILED_BEFORE_SEND` with `durableRecorded=false`;
- delivery `000014` intent/result remained absent;
- browser contact/send `0/0`;
- latest delivery remained `000013/SENT`;
- latest Architect trigger remained `000005/SENT`; trigger `000006` absent;
- no source mutation occurred.

A second blocker was created during authorized preflight cleanup: the exact worker-delivery lease expired and expiry reconciliation returned `EXPIRED_LEASE_RECONCILIATION_RECORD_AMBIGUOUS`. The current index still lists that exact expired lease as `ACTIVE`.

Classification rationale:

`COMPOSITION_REPAIR_STILL_FAILED_BEFORE_DURABLE_INTENT_AND_EXPIRED_ORCH_000169_WORKER_DELIVERY_LEASE_RECONCILIATION_REMAINS_AMBIGUOUS`.

Architect policy:

**Do not retry preparation, patch source, replace hosts, or mutate the lease until a read-only diagnostic identifies both the lower-level preparation failure and the exact reconciliation ambiguity.**

## Current next authority — ORCH-000170

ORCH-000170 is a read-only diagnostic. It must classify the preparation failure independently and classify the lease ambiguity independently, identify exact call/binding evidence, and state the smallest next repair/recovery boundary.

No source, host, browser, delivery, trigger, lease, lease-index, reconciliation, AFFOTECH, Drive, deployment, tenant or private-data mutation is authorized.
