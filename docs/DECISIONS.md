Project: affotech-agent-orchestrator
Documentation sync boundary: through Rony documentation-governance directive and canonical ORCH-000182
Status: CURRENT HUMAN-READABLE PROJECTION
Machine authority: durable GitHub evidence, governing policy, and immutable Architect decisions

# Architect Decisions

Architect classifications are exactly `ACCEPTED`, `BLOCKED`, `INCONCLUSIVE`, `NO NEW REPORT`. Executor PASS/COMPLETED is evidence only.

## Permanent authority decisions

- Rony is final human authority.
- Architect governs, verifies, decides, defines next bounded authority, and owns canonical human-readable documentation.
- Executor performs bounded implementation/runtime/validation work and publishes first-hand evidence.
- Orchestrator is independent persistent deterministic control-plane infrastructure once qualified; it routes/enforces accepted state-machine rules but does not interpret project semantics.
- GitHub durable evidence is machine authority.
- No blind retry after ambiguous external mutation.
- Historical evidence is immutable in meaning.
- Local git commit/push is not runtime persistence.
- AFFOTECH and protected resources remain separate until explicitly authorized.

## Rony directive — Architect-direct documentation closure

Rony directed that Architect is aware of the complete governed process and should therefore maintain all relevant project documentation directly rather than relying on a Curator terminal that reconstructs Architect meaning second-hand.

Adopted permanent policy:

- Curator is eliminated from the active project model.
- No Curator terminal, relay, browser registration, cursor, or approval hop is required.
- Historical Curator evidence remains valid history.
- Architect must classify documentation impact after every review/material Rony directive as `NONE`, `STATE`, or `FULL`.
- `STATE` or `FULL` requires Architect to update and durably read back every materially affected canonical document before publishing the next mutating implementation dispatch.
- `NONE` avoids ceremonial documentation churn.
- Documentation failure must not be silently ignored.
- Orchestrator does not decide documentation semantics or author prose.
- A future accepted machine contract may allow Orchestrator to gate on an Architect documentation-closure marker, but semantic ownership remains Architect.

Governing files implementing this directive:

- `governance/ORCHESTRATOR_BOOTSTRAP.md` v1.2
- `governance/PROJECT_ORCHESTRATION_POLICY.md` v1.2
- `governance/PROJECT_MEMORY_EVENT_LEDGER_POLICY.md` v1.2

## Proven foundations relevant to current transport seam

- ORCH-000153 — exactly-once Executor forward delivery.
- ORCH-000163 — exactly-once Architect wake.
- ORCH-000165 — accepted source, `817/817` deterministic suite.
- ORCH-000166/167 — persistent-host idle and automatic newer-dispatch observation.
- ORCH-000173 — prior expired lease closed.
- ORCH-000177/178 — corrected HTTP status mapping and accepted lease acquire/release proven.
- ORCH-000179 — preparation reached and proved transient `actionKind=WORKER_DELIVERY` requirement.

## ORCH-000181 — BLOCKED

Decision:

`GH-DEC-181-WORKER-DELIVERY-IN-PROCESS-PREFLIGHT-EXPIRED-LEASE-BLOCKED`

Architect verified:

- one epoch-189 worker-delivery lease was acquired and indexed;
- transient `actionKind=WORKER_DELIVERY` was constructed;
- preparation call count remained `0` because the process terminated first;
- delivery `000014` remains absent;
- browser contact/send `0/0`;
- lease expired before normal release;
- lease remains indexed ACTIVE at revision `377`;
- target revision `000002` is absent;
- no blind retry or expiry reconciliation occurred;
- accepted source remains unchanged.

Decision rationale:

`IN_PROCESS_ATTEMPT_ACQUIRED_AND_INDEXED_EPOCH_189_AND_CONSTRUCTED_ACTION_KIND_WORKER_DELIVERY_BUT_TERMINATED_BEFORE_PREPARATION_AND_LEFT_THE_EXPIRED_LEASE_ACTIVE_IN_INDEX_REVISION_377`.

## Current next authority — ORCH-000182

ORCH-000182 is recovery-only. It authorizes exactly one expired-lease reconciliation for:

`MUTATION-LEASE-HOST-8af1857f183a9d267184b29c1a5eb1e0 / epoch 189 / revision 1`

Expected closure:

`revision 000002=EXPIRED → index 377→378 → nextLeaseEpoch=190 → activeLeases=[]`

No new lease, preparation, delivery mutation, browser, host, Architect trigger, tracked source, or protected-resource activity is authorized.

After ORCH-000182 is reviewed, Architect must again classify documentation impact and satisfy the v1.2 documentation-closure invariant before any next mutating implementation dispatch.
