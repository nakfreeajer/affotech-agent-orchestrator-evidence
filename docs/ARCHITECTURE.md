Project: affotech-agent-orchestrator
Documentation sync boundary: through Architect-classified ORCH-000169 and canonical ORCH-000170
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

Documentation policy is `ARCHITECT_DIRECT`; Curator is not an active required role.

## 3. Accepted source and lineage contract

Current accepted source:

`GH-PUB-165-WORKER-DELIVERY-LEGACY-LINEAGE-HYDRATION-REPAIR-READY-000001`

Qualification: 101 files; focused `65/65`; GitHub runtime ports `43/43`; BrowserRelay transport ports `22/22`; full deterministic `817/817`.

Worker-delivery rules:

- future results persist explicit message/dispatch lineage;
- delivery ID, worker role and `intentSha256` bind exactly;
- explicit conflicts fail closed;
- legacy missing lineage may hydrate only through the exact immutable intent;
- historical records are not rewritten.

## 4. Proven transport pieces

- ORCH-000153: forward delivery exactly once.
- ORCH-000163: Architect wake exactly once.
- ORCH-000166: persistent host `000026` safely armed/idle.
- ORCH-000167: a strictly newer Architect dispatch was automatically detected by the persistent host without manual forwarding.

## 5. Worker-delivery action chain

ORCH-000168 established the accepted chain:

```text
evaluateAutomaticDispatchHost
→ derive/acquire exact WORKER_DELIVERY lease
→ HOST_DELIVERY_READY / PREPARE_WORKER_DELIVERY_INTENT
→ persistent-host-runner calls ports.prepareWorkerDeliveryIntent
→ transport persists + reads back canonical intent
→ require PREPARED + exact preparedIntent
→ only then sendWorkerDelivery may run
```

`automatic-dispatch-host.js` chooses the next lifecycle action. `persistent-host-runner.js` executes it. `browser-relay-transport-ports.js` owns intent preparation and requires an injected worker-persistence adapter. `github-runtime-ports.js` provides durable GitHub primitives.

## 6. ORCH-000169 result — composition repair still insufficient

ORCH-000169 attempted a composition-only repair and fresh host replacement without tracked source changes.

Observed result:

- accepted `prepareWorkerDeliveryIntent` was called once;
- status `FAILED_BEFORE_SEND`;
- `durableRecorded=false`;
- no delivery `000014` intent/result;
- browser contact/send `0/0`;
- `sendWorkerDelivery` never reached.

Therefore the disposable composition repair did not yet satisfy the accepted preparation persistence contract. The lower-level failure remains hidden by the current diagnostic surface and must be identified before deciding whether the next repair belongs to composition, source error propagation, or the persistence contract itself.

Host `000027` identity exists, but its process exited and completed zero idle polls. It is not an armed replacement host.

## 7. Lease ambiguity is now a hard gating condition

The ORCH-000169 preflight acquired one worker-delivery mutation lease. It expired before cleanup. Release/expiry reconciliation returned `EXPIRED_LEASE_RECONCILIATION_RECORD_AMBIGUOUS`.

The exact lease remains present in the current index as `ACTIVE` despite being expired:

`MUTATION-LEASE-HOST-97e204bd87c1b341df79b1d787987f98`, epoch `185`, revision `1`, bound to `ORCH-000169 / DISPATCH-000169`, resource scope `worker-delivery`.

No further ambiguity-prone mutation should proceed until read-only diagnosis establishes whether a durable reconciliation record exists, whether the index is stale, or whether the recovery binding itself was wrong.

## 8. Current diagnostic boundary — ORCH-000170

ORCH-000170 is read-only and must answer two questions independently:

1. why the corrected host-000027 preparation adapter still failed before durable intent creation/readback;
2. why exact expired-lease reconciliation became ambiguous and what exact later mutation can close it safely.

It must not mutate source, host process, browser, delivery, trigger, lease, lease index, or reconciliation state.

## 9. Protected boundaries

- Architect session: `9333`.
- Executor session: `9444`.
- protected AFFOTECH ports: `9222/9223`.
- AFFOTECH source/worktrees, AFFOTECH relay, Drive, Apps Script, tenant resources, deployments, and business/private data remain unauthorized absent explicit Rony integration authority.
