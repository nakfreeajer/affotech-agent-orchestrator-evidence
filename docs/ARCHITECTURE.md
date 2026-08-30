Project: affotech-agent-orchestrator
Documentation sync boundary: through Architect-classified ORCH-000179 and canonical ORCH-000180
Status: CURRENT HUMAN-READABLE PROJECTION
Machine authority: durable GitHub evidence and Architect decisions

# Architecture

## 1. Core purpose

AFFOTECH Agent Orchestrator is a governed deterministic message-routing and durable-state layer. AI roles think; the Orchestrator carries exact governed envelopes and observes durable state. It does not approve work, scrape assistant decisions, or synthesize authority from browser text.

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

Target order:

`observe dispatch → acquire WORKER_DELIVERY lease → construct transient transport authorization → prepareWorkerDeliveryIntent → durable PREPARED intent → send/reconcile result → release lease`.

For zero-browser qualification, the send step is replaced by PROVEN_NOT_SENT reconciliation.

The disposable GitHub HTTP-status adapter, accepted lease acquisition, ACTIVE readback/index activation, normal release, and RELEASED readback/index removal are already proven by ORCH-000178.

## 5. Preparation bindings now isolated

ORCH-000170 proved preparation requires explicit disposable factory option:

`workerDeliveryId=WORKER-DELIVERY-EXECUTOR-000014`.

ORCH-000179 reached preparation exactly once and exposed the remaining authorization shape. Passing the persisted lease record directly produced `HOST_AUTHORIZATION_INVALID`.

The accepted persistent runner adds transient:

`actionKind=WORKER_DELIVERY`

to the transport lease/authorization used for worker-delivery preparation. This is a runtime transport-binding field, not a durable mutation-lease revision field.

## 6. ORCH-000179 result

- epoch-187 lease ACQUIRED and ACTIVE readback succeeded;
- preparation call count `1`;
- preparation failed `FAILED_BEFORE_SEND / HOST_AUTHORIZATION_INVALID`;
- delivery `000014` absent;
- browser contact/send `0/0`;
- one normal release succeeded;
- final index revision `374`;
- next epoch `188`;
- active leases `0`;
- latest delivery `000013/SENT`.

Conclusion: the remaining defect is disposable continuation composition, not accepted lease/source behavior.

## 7. Current authority — ORCH-000180

ORCH-000180 starts from `374 / nextEpoch 188 / activeLeases=[]` and runs one continuous zero-browser path.

After durable ACQUIRED readback it must keep the persisted lease immutable and derive a preparation-only transport authorization with the exact same binding plus `actionKind=WORKER_DELIVERY`.

It then calls preparation once with explicit delivery ID `000014`, requires durable PREPARED readback, reconciles as PROVEN_NOT_SENT/NOT_SENT with zero browser contact, and normally releases the lease.

No tracked source patch, host process, browser, Architect trigger, or protected-resource mutation is authorized.

## 8. Protected boundaries

Architect session `9333`; Executor session `9444`; AFFOTECH protected ports `9222/9223`. AFFOTECH source/worktrees, relay, Drive, Apps Script, tenant resources, deployments, and business/private data remain unauthorized absent explicit Rony authority.
