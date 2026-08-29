Project: affotech-agent-orchestrator
Documentation sync boundary: through Architect-classified ORCH-000178 and canonical ORCH-000179
Status: CURRENT HUMAN-READABLE PROJECTION
Machine authority: durable GitHub evidence and Architect decisions

# Architecture

## 1. Core purpose

AFFOTECH Agent Orchestrator is a governed deterministic message-routing and durable-state layer. AI roles think; the Orchestrator carries exact governed envelopes and observes durable state. It does not approve work, interpret business semantics, scrape assistant decisions, or synthesize authority from browser text.

## 2. Active topology

```text
Architect 9333
  ↓ durable dispatch
Persistent deterministic Orchestrator
  ↓ exact lease + durable worker intent + exact delivery
Executor 9444
  ↓ durable terminal
Persistent deterministic Orchestrator
  ↓ durable Architect trigger + exact wake
Architect 9333
```

Documentation policy is `ARCHITECT_DIRECT`.

## 3. Accepted source

`GH-PUB-165-WORKER-DELIVERY-LEGACY-LINEAGE-HYDRATION-REPAIR-READY-000001`

Qualification: 101 files; focused `65/65`; GitHub runtime ports `43/43`; BrowserRelay transport ports `22/22`; full deterministic `817/817`.

## 4. Worker-delivery chain

Accepted target order:

`observe dispatch → acquire exact WORKER_DELIVERY lease → prepareWorkerDeliveryIntent → durable PREPARED intent/readback → send/reconcile result → release/reconcile lease`.

For the zero-browser preflight, the send step is replaced by accepted PROVEN_NOT_SENT reconciliation.

ORCH-000170 proved preparation needs exact disposable factory option `workerDeliveryId=WORKER-DELIVERY-EXECUTOR-000014` when no accepted fresh-delivery ID is otherwise supplied.

## 5. Disposable GitHub adapter contract is now proven for acquisition

ORCH-000177 identified that `ghExitCode=1` had overwritten actual GitHub HTTP `404` semantics. ORCH-000178 corrected only that disposable boundary.

Proven behavior:

- actual GitHub 404 reaches the accepted client as semantic status `404`/NOT_FOUND;
- `ghExitCode=1` remains separate diagnostics;
- accepted candidate precheck succeeds as normal absence;
- accepted acquisition can create/read back an ACTIVE lease and activate it in the index;
- accepted normal release can create/read back RELEASED revision and remove the lease from the index.

ORCH-000178 lease `MUTATION-LEASE-HOST-553f5ff7a8db44a8bf8bbf091309bb19` proves revision `000001=ACTIVE`, revision `000002=RELEASED`, epoch `186`.

Final clean boundary is index revision `372`, next epoch `187`, active leases `0`.

## 6. ORCH-000178 remaining defect — launcher continuation

ORCH-000178 did not reach preparation. The temporary launcher treated successful acquisition as the end of its active work and terminated before invoking `prepareWorkerDeliveryIntent`, then released the lease normally.

This is a disposable control-flow defect, not evidence of an accepted acquisition or source-contract defect.

## 7. Current authority — ORCH-000179

ORCH-000179 uses one continuous disposable launcher/process with required successful-path order:

`ACQUIRE → PREPARE → PROVEN_NOT_SENT → RELEASE`.

A successful acquisition is explicitly not a terminal condition. The exact returned lease binding must stay in the same process and the launcher must immediately call preparation with `workerDeliveryId=WORKER-DELIVERY-EXECUTOR-000014`.

Success requires durable PREPARED intent, zero browser contact, durable PROVEN_NOT_SENT/NOT_SENT result, normal release before expiry, final active leases `0`, and latest delivery still `000013/SENT`.

No tracked source patch, host process, browser, Architect trigger, or protected-resource mutation is authorized.

## 8. Protected boundaries

Architect session `9333`; Executor session `9444`; AFFOTECH protected ports `9222/9223`. AFFOTECH source/worktrees, relay, Drive, Apps Script, tenant resources, deployments, and business/private data remain unauthorized absent explicit Rony authority.
