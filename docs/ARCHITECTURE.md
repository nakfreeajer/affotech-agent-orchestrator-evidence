Project: affotech-agent-orchestrator
Documentation sync boundary: through Architect-classified ORCH-000167 and canonical ORCH-000168
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
  ↓ durable intent + exact delivery
Executor 9444
  ↓ durable terminal
Persistent deterministic Orchestrator
  ↓ durable trigger + exact wake
Architect 9333
```

Documentation policy is `ARCHITECT_DIRECT`; Curator is not an active required role.

## 3. Accepted source and lineage contract

Current source:

`GH-PUB-165-WORKER-DELIVERY-LEGACY-LINEAGE-HYDRATION-REPAIR-READY-000001`

Qualification: 101 files; focused `65/65`; runtime ports `43/43`; BrowserRelay transport ports `22/22`; full deterministic `817/817`.

Worker-delivery rules after ORCH-000165:

- future results persist explicit message/dispatch lineage;
- delivery ID, worker role and `intentSha256` must bind exactly;
- explicit conflicts fail closed;
- legacy missing lineage may hydrate only through the exact immutable intent;
- historical records are not rewritten.

## 4. Proven transport pieces

- ORCH-000153: forward delivery exactly once.
- ORCH-000163: Architect wake exactly once.
- ORCH-000166: persistent host `000026` armed, three valid idle polls, self-echo suppressed, zero transport side effects, left running.

## 5. ORCH-000167 — automatic observation works; automatic preparation does not yet

The first full-cycle probe proved the persistent host detects a strictly newer Architect dispatch automatically.

For `DISPATCH-000167`, host `000026` durably emitted:

1. `LEASE_REQUIRED` with `actionKind=WORKER_DELIVERY`;
2. `LEASE_ACQUIRED` telemetry;
3. transition to `HOST_DELIVERY_READY`;
4. `nextAction=PREPARE_WORKER_DELIVERY_INTENT`;
5. `RECONCILIATION_REQUIRED` with reason `WORKER_DELIVERY_INTENT_PREPARATION_REQUIRED`.

No delivery intent/result was created, no Executor browser send occurred, and no Architect trigger was created. Active lease index is currently empty.

Architect decision:

`GH-DEC-167-AUTOMATIC-HOST-WORKER-DELIVERY-INTENT-PREPARATION-BLOCKED`.

Architectural conclusion: the durable dispatch-observation stage is now proven. The next unresolved seam is between the post-lease `HOST_DELIVERY_READY` action boundary and durable `prepareWorkerDeliveryIntent` execution.

## 6. ORCH-000168 diagnostic boundary

ORCH-000168 must determine whether that seam belongs to:

- accepted source automation;
- host-000026 disposable launcher/composition wiring;
- dispatch lease metadata;
- or multiple causes.

It inspects `automatic-dispatch-host.js`, `persistent-host-runner.js`, `github-runtime-ports.js`, `browser-relay-transport-ports.js`, and the local host-000026 launcher/log only. It must not mutate source, host, browser, delivery, trigger, or lease state.

## 7. Persistent-host correctness principle

A persistent host is not fully unattended merely because it detects a dispatch. A complete worker leg requires:

`observe dispatch → acquire exact lease if required → prepare/read back durable intent → BrowserRelay pre-send observation → one send → durable result → duplicate suppression`.

The return leg analogously requires terminal observation → durable trigger intent → one Architect wake → durable result.

## 8. Protected boundaries

- Architect session: `9333`.
- Executor session: `9444`.
- protected AFFOTECH ports: `9222/9223`.
- AFFOTECH source/worktrees, AFFOTECH relay, Drive, Apps Script, tenant resources, deployments, and business/private data remain unauthorized absent explicit Rony integration authority.
