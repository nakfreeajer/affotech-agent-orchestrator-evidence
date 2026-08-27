Project: affotech-agent-orchestrator
Documentation sync boundary: through Architect-accepted ORCH-000168 and canonical ORCH-000169
Status: CURRENT HUMAN-READABLE PROJECTION
Machine authority: durable GitHub evidence and Architect decisions

# Bugs and Lessons

## Permanent governance lessons

- Executor PASS is evidence, never acceptance.
- Never blind-retry an ambiguous external mutation; reconcile read-only first.
- Historical evidence remains immutable in meaning.
- Architect owns relevant documentation directly under `ARCHITECT_DIRECT`.
- Orchestrator is deterministic transport only; it never reads assistant decisions for authority.
- Local git commit/push is not runtime state transport.

## Durable worker-delivery ordering

Required order:

`observe governed dispatch → exact action-derived lease → durable worker-delivery intent/readback → BrowserRelay pre-send observation → one send → durable result → duplicate suppression/reconciliation`.

A state machine returning `PREPARE_WORKER_DELIVERY_INTENT` is not equivalent to a persistent runner successfully executing and durably reading back that action.

## ORCH-000153 / ORCH-000163

Forward delivery and Architect wake are independently proven exactly once. Durable intent/result plus duplicate suppression—not visible UI alone—is the proof standard.

## ORCH-000164 / ORCH-000165

A stricter reader rejected historical delivery `000013` because its old result lacked explicit lineage despite exact immutable intent binding. ORCH-000165 added fail-closed legacy hydration and future explicit lineage without rewriting historical evidence.

## ORCH-000166 — persistent idle proof

Host `000026` was accepted only after one process start, consumed bootstrap watermark readback, three valid idle polls, self-echo suppression, zero transport side effects, and liveness at publication.

Lesson: process existence is not enough; repeated safe durable observation is required.

## ORCH-000167 — automatic observation is not automatic delivery

The first full-cycle probe proved host `000026` automatically observes a newer Architect dispatch and derives the worker-delivery lease/action boundary. It did not yet prove durable intent preparation or browser delivery.

Stop reason:

`WORKER_DELIVERY_INTENT_PREPARATION_REQUIRED`.

## ORCH-000168 — distinguish source logic from effective composition

Accepted diagnostic finding:

- `automatic-dispatch-host.js` correctly produces `HOST_DELIVERY_READY / PREPARE_WORKER_DELIVERY_INTENT`;
- `persistent-host-runner.js` automatically calls `ports.prepareWorkerDeliveryIntent` after lease acquisition;
- `browser-relay-transport-ports.js` provides the preparation method and requires a real persistence adapter to create/read back canonical intent before returning `PREPARED`;
- host-000026 launcher statically bound the method;
- nevertheless, the effective injected persistence composition returned no durable prepared intent and the runner safely reconciled before send.

Lesson: **a function being present and bound is not proof that its injected persistence dependencies satisfy the runtime contract**. Composition must be qualified end-to-end through the same durable create/readback path used in production.

## Error propagation lesson

The accepted runner preserved the stable stop reason but did not preserve a narrower lower-level preparation failure. That was enough to fail closed but not enough to identify the exact adapter sub-cause from host events alone.

Future composition/source repair should preserve a stable preparation failure detail in diagnostic evidence without exposing private/browser response content.

## Lease metadata lesson

The worker-delivery lease is derived from the action/lineage/resource contract and `evaluateMutationLeaseUse`. Earlier dispatch metadata saying `mutationLeaseRequired=false` did not override that boundary.

Lesson: Architect dispatch metadata must match the accepted action contract, but metadata inconsistency must never be repaired by weakening a safety lease already required by the host lifecycle.

## ORCH-000169 — composition-first repair rule

Before considering tracked source changes:

1. retire the exact stuck host only at a zero-active-lease boundary;
2. fix disposable untracked launcher/persistence injection;
3. prove one real canonical worker-delivery intent reaches durable `PREPARED` with zero browser contact;
4. reconcile that preflight as `PROVEN_NOT_SENT` so no false SENT/current-delivery state is created;
5. use the same corrected composition for a fresh host identity;
6. require multiple idle polls before accepting the replacement host.

If the exact accepted preparation method cannot succeed with a correct real GitHub-backed persistence composition, then and only then return `SOURCE_CONTRACT_REPAIR_REQUIRED` for a separate source milestone.

## Current success criterion

The target remains:

`Architect dispatch → persistent Orchestrator → durable intent → Executor exactly once → durable terminal → persistent Orchestrator → durable trigger → Architect wake exactly once`.

No source, AFFOTECH, Drive, deployment, tenant, or business/private-data mutation is necessary to prove the transport loop itself.
