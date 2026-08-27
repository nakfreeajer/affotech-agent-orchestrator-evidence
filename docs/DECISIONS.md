Project: affotech-agent-orchestrator
Documentation sync boundary: through Architect-classified ORCH-000167 and canonical ORCH-000168
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

- ORCH-000153 — accepted exactly-once Executor forward delivery.
- ORCH-000163 — accepted exactly-once Architect wake.
- ORCH-000165 — accepted lineage-compatibility source repair, full deterministic `817/817`.
- ORCH-000166 — accepted persistent host `000026` armed and left running after three valid idle polls with zero transport side effects.

## ORCH-000167 — BLOCKED at automatic intent preparation

Decision:

`GH-DEC-167-AUTOMATIC-HOST-WORKER-DELIVERY-INTENT-PREPARATION-BLOCKED`

No Executor terminal exists for ORCH-000167 because the automatic host stopped before delivery.

Durable host evidence proves:

- `DISPATCH-000167` was automatically observed by host `000026`;
- `LEASE_REQUIRED` was emitted for `actionKind=WORKER_DELIVERY`;
- `LEASE_ACQUIRED` telemetry was emitted;
- host state reached `HOST_DELIVERY_READY`;
- next action was `PREPARE_WORKER_DELIVERY_INTENT`;
- host emitted `RECONCILIATION_REQUIRED` with reason `WORKER_DELIVERY_INTENT_PREPARATION_REQUIRED`.

No delivery `000014` intent/result exists, no Executor browser send occurred, latest terminal remains ORCH-000166, no trigger `000006` exists, and current active lease count is zero.

Classification rationale:

`HOST_000026_AUTOMATICALLY_OBSERVED_DISPATCH_000167_BUT_ACCEPTED_RUNNING_COMPOSITION_STOPPED_BEFORE_DURABLE_WORKER_DELIVERY_INTENT_PREPARATION`.

This is a clean pre-send `BLOCKED`, not `INCONCLUSIVE`: no browser send was attempted and no delivery intent exists.

## Current next authority — ORCH-000168

ORCH-000168 is a read-only diagnostic to decide exactly whether the missing automatic preparation step is:

- `COMPOSITION_WIRING_DEFECT`;
- `ACCEPTED_SOURCE_AUTOMATION_GAP`;
- `DISPATCH_AUTHORITY_METADATA_CONFLICT`;
- `MULTIPLE_CAUSES`;
- or another exact seam.

It must also explain why DISPATCH-000167 declared lease booleans false while the accepted host deterministically required a WORKER_DELIVERY lease, and state the smallest correct repair boundary without changing anything.
