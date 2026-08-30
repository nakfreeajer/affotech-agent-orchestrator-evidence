Project: affotech-agent-orchestrator
Documentation sync boundary: through Architect-classified ORCH-000179 and canonical ORCH-000180
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

## Proven worker-delivery prerequisites

The zero-browser preparation path has now independently proven:

- disposable GitHub HTTP `404` semantic mapping separate from `ghExitCode`;
- accepted lease acquisition and ACTIVE readback/index activation;
- accepted normal release and RELEASED readback/index removal;
- continuous successful-path control flow from acquisition into preparation;
- explicit `workerDeliveryId=WORKER-DELIVERY-EXECUTOR-000014` requirement.

## ORCH-000179 — durable lease is not the complete transport authorization

ORCH-000179 acquired a valid epoch-187 lease and called preparation once. Preparation failed `HOST_AUTHORIZATION_INVALID` before intent creation because the disposable launcher passed the persisted lease directly.

The accepted persistent runner enriches the preparation-only transport authorization with:

`actionKind=WORKER_DELIVERY`.

Lesson: **the durable mutation lease and the transient action-specific transport authorization are related but not identical representations**.

Do not rewrite the immutable lease merely to add runtime-only authorization context. Instead:

`durable ACTIVE lease → derive transient transport object → add actionKind=WORKER_DELIVERY → validate all other bindings unchanged → call preparation`.

This preserves immutable lease lineage while satisfying the action-specific BrowserRelay authorization contract.

## Stage-specific safety remained intact

ORCH-000179 recorded:

- acquisition `1 / ACQUIRED`;
- preparation `1 / FAILED_BEFORE_SEND`;
- reason `HOST_AUTHORIZATION_INVALID`;
- delivery `000014` intent/result absent;
- browser contact/send `0/0`;
- normal release `1 / RELEASED`;
- final index revision `374`;
- next epoch `188`;
- active leases `0`.

No source patch or lease recovery is needed from this result.

## ORCH-000180 rule

Start at index `374`, epoch `188`, active leases `0`.

Use one continuous process:

`ACQUIRE → derive transient actionKind=WORKER_DELIVERY authorization → PREPARE → PROVEN_NOT_SENT → RELEASE`.

Preparation uses explicit `workerDeliveryId=WORKER-DELIVERY-EXECUTOR-000014`. The durable lease remains unchanged. After PREPARED readback, reconcile delivery `000014` as PROVEN_NOT_SENT/NOT_SENT with browser contact/send `0/0`, then release normally.

Any ambiguity stops without retry and preserves exact durable state.

## Recovery ordering

1. complete action-kind-enriched continuous preparation preflight;
2. independently accept the PREPARED + PROVEN_NOT_SENT proof;
3. arm a fresh persistent host using the now-proven composition;
4. publish a strictly newer automatic canary without manual forwarding;
5. prove Executor delivery, terminal observation, and Architect wake end-to-end.

## Current success criterion

`Architect dispatch → persistent Orchestrator → durable intent → Executor exactly once → durable terminal → persistent Orchestrator → durable trigger → Architect wake exactly once`.

AFFOTECH, Drive, deployment, tenant, and business/private-data mutation are not required to prove the transport loop.
