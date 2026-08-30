Project: affotech-agent-orchestrator
Documentation sync boundary: through Architect-classified ORCH-000179 and canonical ORCH-000180
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
- ORCH-000170 — explicit delivery-ID preparation requirement diagnosed.
- ORCH-000173 — expired ORCH-000169 lease closed.
- ORCH-000178 — corrected HTTP adapter plus accepted lease ACQUIRE/RELEASE lifecycle proven.

## ORCH-000179 — BLOCKED at transient transport authorization

Decision:

`GH-DEC-179-WORKER-DELIVERY-PREPARATION-LEASE-ACTION-KIND-BINDING-BLOCKED`

Reviewed publication:

`GH-PUB-179-WORKER-DELIVERY-CONTINUOUS-PREFLIGHT-BLOCKED-000001`

Architect verified:

- one epoch-187 lease acquisition succeeded and ACTIVE readback passed;
- one preparation call was made;
- preparation failed before send with `HOST_AUTHORIZATION_INVALID`;
- no delivery `000014` intent/result was written;
- browser contact/send stayed `0/0`;
- one normal release succeeded;
- final index revision `374`, next epoch `188`, active leases `0`;
- latest delivery remained `000013/SENT`;
- source unchanged.

Cause: the disposable continuation passed the persisted lease directly. The accepted persistent runner enriches the preparation-only transport authorization with `actionKind=WORKER_DELIVERY`.

Decision: no tracked source patch and no lease-format rewrite. The next preflight must preserve the durable lease exactly and add `actionKind=WORKER_DELIVERY` only to the transient transport authorization object passed to preparation.

## Current next authority — ORCH-000180

ORCH-000180 runs one continuous sequence:

`ACQUIRE → transient actionKind enrichment → PREPARE → PROVEN_NOT_SENT → RELEASE`.

It starts from index `374`, epoch `188`, zero active leases. Preparation uses explicit delivery ID `000014` plus the exact transient action-kind binding. No browser, host, Architect-trigger, tracked-source, or protected-resource mutation is authorized.
