Project: affotech-agent-orchestrator
Documentation sync boundary: through Architect-accepted ORCH-000168 and canonical ORCH-000169
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
- ORCH-000166 — persistent host `000026` armed and left running after three valid idle polls with zero transport side effects.

## ORCH-000167 — BLOCKED at automatic intent preparation

Decision:

`GH-DEC-167-AUTOMATIC-HOST-WORKER-DELIVERY-INTENT-PREPARATION-BLOCKED`

Host `000026` automatically observed `DISPATCH-000167`, derived/acquired the worker-delivery lease path, reached `HOST_DELIVERY_READY`, then stopped with `WORKER_DELIVERY_INTENT_PREPARATION_REQUIRED` before delivery intent creation or browser send.

This cleanly proved automatic dispatch observation but not automatic durable worker-intent preparation.

## ORCH-000168 — ACCEPTED composition diagnostic

Decision:

`GH-DEC-168-WORKER-DELIVERY-INTENT-PREPARATION-COMPOSITION-DIAGNOSTIC-ACCEPTED`

Reviewed publication:

`GH-PUB-168-WORKER-DELIVERY-INTENT-PREPARATION-SEAM-DIAGNOSTIC-000001`

Architect accepted these findings:

- `automatic-dispatch-host.js` correctly returns the post-lease action boundary;
- `persistent-host-runner.js` automatically invokes `ports.prepareWorkerDeliveryIntent` before `sendWorkerDelivery`;
- `browser-relay-transport-ports.js` owns the preparation method and requires a real injected worker-persistence create/readback contract;
- host `000026` statically bound the method, but its effective persistence composition failed to return a durable `PREPARED` intent;
- `sendWorkerDelivery` was never reached;
- runner safely released/reconciled before browser contact;
- no tracked source defect in the action chain was proven;
- lease need is canonically derived from the worker-delivery action/lineage/resource contract, so earlier dispatch lease booleans were metadata-inconsistent rather than an authoritative override.

Classification rationale:

`ACCEPTED_SOURCE_CONTAINS_AUTOMATIC_PREPARATION_CALL_BUT_EFFECTIVE_HOST_000026_INJECTED_PERSISTENCE_COMPOSITION_FAILED_TO_RETURN_DURABLE_PREPARED_INTENT`.

Repair policy:

**Repair disposable composition first. Do not change lease metadata to bypass the lease. Do not patch accepted source unless composition-only repair proves the source contract itself insufficient.**

## Current next authority — ORCH-000169

ORCH-000169 authorizes one exact recovery chain:

- retire verified host `000026` only at a zero-active-lease boundary;
- repair only untracked disposable host-launcher/persistence wiring;
- prove delivery `000014` reaches durable `PREPARED` with zero browser contact;
- reconcile preflight `000014` to `PROVEN_NOT_SENT` and preserve `LATEST_DELIVERY=000013/SENT`;
- start fresh host `000027` exactly once with the same corrected composition;
- complete at least two idle polls and leave it running.

Tracked source/test/config/docs/governance mutation by Executor remains prohibited. If the composition-only path cannot satisfy the accepted preparation contract, ORCH-000169 must stop with `SOURCE_CONTRACT_REPAIR_REQUIRED` for a separate Architect-authorized source milestone.
