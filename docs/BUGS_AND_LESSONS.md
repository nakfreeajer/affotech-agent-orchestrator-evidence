Project: affotech-agent-orchestrator
Documentation sync boundary: through Architect-classified ORCH-000178 and canonical ORCH-000179
Status: CURRENT HUMAN-READABLE PROJECTION
Machine authority: durable GitHub evidence and Architect decisions

# Bugs and Lessons

## Permanent governance lessons

- Executor PASS is evidence, never acceptance.
- Never blind-retry an ambiguous external mutation; reconcile read-only first.
- Historical evidence remains immutable in meaning.
- Architect owns relevant documentation directly under `ARCHITECT_DIRECT`.
- Orchestrator is deterministic transport only; it never reads assistant decisions for authority.
- Local git commit/push is not runtime persistence.

## Preparation contract lesson

Accepted preparation requires the exact disposable worker-delivery ID contract. The known required option is `workerDeliveryId=WORKER-DELIVERY-EXECUTOR-000014`; do not replace it with a speculative tracked-source patch.

## Transport-status lesson

ORCH-000177 proved process exit status and HTTP semantic status are different fields. A GitHub HTTP `404` with `ghExitCode=1` must reach accepted normalization as HTTP/NOT_FOUND semantics, while the process exit code remains diagnostics only.

ORCH-000178 proved the corrected disposable mapping works in a real mutation path: accepted lease acquisition became durable ACTIVE and indexed.

## ORCH-000178 — successful acquisition must continue, not terminate

The temporary launcher successfully acquired epoch-186 lease `MUTATION-LEASE-HOST-553f5ff7a8db44a8bf8bbf091309bb19`, but then terminated before preparation. It subsequently released the lease normally.

Durable proof:

- revision `000001=ACTIVE`;
- revision `000002=RELEASED`;
- final index revision `372`;
- next epoch `187`;
- active leases `0`;
- preparation calls `0`;
- delivery `000014` absent.

Lesson: **a successful intermediate mutation is not a milestone terminal when the authorized state machine requires immediate continuation**.

For composed preflights, successful-path control flow must be explicit:

`acquire returns ACQUIRED → retain exact lease binding → continue to prepare → reconcile delivery → release lease`.

A generic cleanup/finally path must not release a successfully acquired lease before the authorized continuation step is attempted.

## Stage-specific proof now available

The following worker-delivery preflight seams are independently proven:

- HTTP 404 semantic mapping in disposable GitHub adapter;
- accepted worker-delivery lease acquisition;
- durable ACTIVE lease readback/index activation;
- accepted normal lease release;
- durable RELEASED readback/index removal.

The next unproven seam is preparation itself under the corrected explicit worker-delivery ID, followed by zero-browser PROVEN_NOT_SENT reconciliation.

## ORCH-000179 rule

Use one disposable process for the complete successful path:

`ACQUIRE → PREPARE → PROVEN_NOT_SENT → RELEASE`.

Start from index revision `372`, next epoch `187`, active leases `0`. Acquire once. If acquired, do not exit or release early; immediately call preparation once with exact `workerDeliveryId=WORKER-DELIVERY-EXECUTOR-000014`.

After durable PREPARED readback, reconcile delivery `000014` as PROVEN_NOT_SENT/NOT_SENT with browser contact/send `0/0`, then release the lease normally.

Any ambiguity stops without retry and preserves exact durable state.

## Recovery ordering

1. complete continuous acquire→prepare→proven-not-sent→release preflight;
2. independently accept the preparation proof;
3. arm a fresh persistent host using the proven composition;
4. publish a strictly newer automatic canary dispatch without manual forwarding;
5. prove Executor delivery, terminal observation, and Architect wake end-to-end.

## Current success criterion

`Architect dispatch → persistent Orchestrator → durable intent → Executor exactly once → durable terminal → persistent Orchestrator → durable trigger → Architect wake exactly once`.

AFFOTECH, Drive, deployment, tenant, and business/private-data mutation are not required to prove the transport loop.
