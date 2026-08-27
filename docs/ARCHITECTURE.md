Project: affotech-agent-orchestrator
Documentation sync boundary: through Architect-accepted ORCH-000168 and canonical ORCH-000169
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

Current source:

`GH-PUB-165-WORKER-DELIVERY-LEGACY-LINEAGE-HYDRATION-REPAIR-READY-000001`

Qualification: 101 files; focused `65/65`; GitHub runtime ports `43/43`; BrowserRelay transport ports `22/22`; full deterministic `817/817`.

Worker-delivery rules after ORCH-000165:

- future results persist explicit message/dispatch lineage;
- delivery ID, worker role and `intentSha256` bind exactly;
- explicit conflicts fail closed;
- legacy missing lineage may hydrate only through the exact immutable intent;
- historical records are not rewritten.

## 4. Proven transport pieces

- ORCH-000153: forward delivery exactly once.
- ORCH-000163: Architect wake exactly once.
- ORCH-000166: persistent host `000026` armed, three valid idle polls, self-echo suppressed, zero transport side effects.
- ORCH-000167: a strictly newer Architect dispatch was automatically detected by the running persistent host without manual forwarding.

## 5. Worker-delivery action chain

ORCH-000168 established the accepted automatic chain precisely:

```text
evaluateAutomaticDispatchHost
→ lease requirement derived from WORKER_DELIVERY action
→ acquire exact worker mutation lease
→ HOST_DELIVERY_READY / PREPARE_WORKER_DELIVERY_INTENT
→ persistent-host-runner calls ports.prepareWorkerDeliveryIntent
→ browser-relay transport persists + reads back intent
→ require status PREPARED + exact preparedIntent
→ only then sendWorkerDelivery may run
```

`automatic-dispatch-host.js` selects the next lifecycle action; it does not itself perform the durable intent side effect. `persistent-host-runner.js` is responsible for executing the action. `browser-relay-transport-ports.js` owns the preparation method and requires an injected worker persistence adapter. `github-runtime-ports.js` provides the underlying durable GitHub primitives.

## 6. ORCH-000168 diagnosis — COMPOSITION_WIRING_DEFECT

Accepted decision:

`GH-DEC-168-WORKER-DELIVERY-INTENT-PREPARATION-COMPOSITION-DIAGNOSTIC-ACCEPTED`

The accepted source already calls preparation automatically. Host `000026` statically bound `prepareWorkerDeliveryIntent`, but the effective injected persistence composition did not return a durably read-back `PREPARED` intent. The runner therefore released/reconciled and stopped before BrowserRelay send.

This is a **composition/persistence-adapter failure first**, not evidence of a missing accepted state-machine transition.

The diagnostic also clarified lease semantics: worker-delivery lease need is derived from the action/lineage/resource contract. Dispatch metadata booleans do not safely override that action-derived boundary.

## 7. Current replacement strategy — ORCH-000169

ORCH-000169 is composition-only. It must not patch accepted source.

Required sequence:

1. verify and safely stop exact host `000026` only at a zero-active-lease boundary;
2. repair disposable untracked host-launcher persistence injection;
3. use the corrected composition to prepare delivery `WORKER-DELIVERY-EXECUTOR-000014` durably with zero browser contact;
4. require exact readback and `PREPARED` result;
5. reconcile the preflight delivery as `PROVEN_NOT_SENT`, preserving `LATEST_DELIVERY=000013/SENT`;
6. release the lease to active count zero;
7. start fresh host `000027` exactly once with the same corrected composition;
8. suppress `DISPATCH-000169` as bootstrap and complete at least two valid idle polls;
9. leave host `000027` running for the next strictly newer dispatch.

If composition-only repair cannot satisfy the accepted preparation contract, the milestone must stop with `SOURCE_CONTRACT_REPAIR_REQUIRED` and defer any tracked source patch to a new Architect-authorized source milestone.

## 8. Protected boundaries

- Architect session: `9333`.
- Executor session: `9444`.
- protected AFFOTECH ports: `9222/9223`.
- AFFOTECH source/worktrees, AFFOTECH relay, Drive, Apps Script, tenant resources, deployments, and business/private data remain unauthorized absent explicit Rony integration authority.
