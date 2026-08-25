Project: affotech-agent-orchestrator
Documentation sync boundary: through ORCH-000137 Architect decision plus ORCH-000138 Executor reconciliation terminal
Status: CURRENT HUMAN-READABLE PROJECTION
Machine authority: durable GitHub evidence and Architect decisions

# Project History

## 1. Canonical project-memory foundation

The canonical project-event ledger remains the immutable chronological machine history for the early project chain and is coherent through sequence 51. This documentation does not renumber, rewrite or replace those events.

Important accepted foundations from that period include:

- durable GitHub evidence as machine authority;
- project-event/cursor/documentation projection mechanics;
- lineage-first host selection after the ORCH-000076 stale-lineage failure;
- fail-closed handling of semantic/documentation projection defects;
- no blind retry after ambiguous external mutation;
- separation of AFFOTECH from the Orchestrator project.

ORCH-000088 later completed and Architect-accepted the documentation catch-up through ORCH-000087, advancing the human-readable projection to the then-current accepted state.

## 2. Shift from project-memory work to operational messenger hardening

After the project-memory/documentation foundation, work concentrated on the actual operational objective: a persistent local messenger that can carry exact governed messages between registered AI sessions without becoming another reasoning agent.

The hardening direction became:

```text
Architect → durable dispatch → local Orchestrator → Executor
Executor → durable result → local Orchestrator → Architect wake
```

The Orchestrator remains deterministic and non-AI.

## 3. Delivery-intent ordering and durable transport foundation

Material milestones before the current accepted source established:

- durable delivery intent must exist before BrowserRelay contact;
- BrowserRelay must reject unprepared transport;
- mutation leases protect shared delivery state;
- transport ambiguity must stop and reconcile read-only before any retry;
- local process identity, host generation, delivery identity and authority binding must remain exact;
- assistant-response text/DOM is never authority.

ORCH-000113 diagnosed delivery-intent ordering.

ORCH-000114/115 repaired the ordering so the persistent runner invokes `prepareWorkerDeliveryIntent` before `sendWorkerDelivery` and transport fails closed on unprepared calls.

ORCH-000116 attempted live qualification after that repair.

ORCH-000117 repaired the worker-delivery lease action-kind/composition seam exposed by live qualification.

## 4. Independent local Orchestrator proof

ORCH-000118 proved a real separate local PowerShell-hosted Orchestrator process could be launched independently from the Executor terminal. This was an important operational milestone even though the transport chain was not yet complete.

The desired process shape became:

```text
independent Windows process
    ↓
accepted Orchestrator engine
    ↓
GitHub durable state + BrowserRelay
```

PowerShell is a launcher, not an AI component.

## 5. Transport observability and ambiguity recovery

ORCH-000121 established accepted phase/reason observability across:

- pre-send observation;
- send invocation/completion boundary;
- post-send observation;
- cleanup/disconnect;
- durable result/current-pointer persistence.

This made later failures diagnosable without reading assistant response text.

ORCH-000122 exposed an expired mutation-lease recovery gap.

ORCH-000123 implemented explicit expired-lease reconciliation while preserving ambiguous transport state.

ORCH-000125 independently validated/accepted the ORCH-000123 candidate with a complete `808/808` sharded suite.

ORCH-000126 applied the accepted expired-lease reconciliation to stale live state with zero browser/source side effects.

## 6. Fresh independent-host qualification chain

### ORCH-000127 — BLOCKED

Fresh host composition failed before browser/lease/delivery work because required Architect target-binding metadata was missing from the launcher composition.

No send occurred.

### ORCH-000128 — INCONCLUSIVE

Target binding was corrected. A real independent process and host were created, and a fresh worker delivery was armed, but transport stopped at `PRE_SEND_OBSERVATION / WORKER_PRE_SEND_OBSERVATION_FAILED`.

No send was proven.

### ORCH-000129 — ACCEPTED diagnostic

Read-only reconciliation proved the exact probe had zero occurrences in the registered Executor conversation and therefore had not been sent. It also exposed the lack of an accepted durable operation for terminalizing an ARMED delivery as proven-not-sent.

### ORCH-000130 — ACCEPTED source

Implemented the explicit recovery-only `PROVEN_NOT_SENT` delivery reconciliation contract.

Accepted source baseline:

- source files: 101;
- full sharded tests: 813/0;
- worker relay: 148;
- BrowserRelay transport ports: 21;
- persistent host runner: 36;
- GitHub runtime ports: 40.

This remains the current accepted source.

### ORCH-000131 — ACCEPTED cleanup

Applied the accepted `PROVEN_NOT_SENT` recovery contract to the unresolved prior delivery with zero browser/host/source work. `LATEST_DELIVERY` remained on the last truly SENT delivery.

## 7. Launcher/runtime-composition hardening

### ORCH-000132 — BLOCKED

Independent host launch failed at input validation because the temporary launcher omitted required integer `input.nowMs`.

No delivery/browser work occurred.

### ORCH-000133 — BLOCKED

`input.nowMs` was fixed, but host identity persistence used a stale local evidence git worktree. The local commit could not push and the runtime correctly failed closed with `IDENTITY_CREATE_AMBIGUOUS`.

Lesson: local git commit/push is the wrong runtime persistence transport.

### ORCH-000134 — BLOCKED

The launcher was switched to the accepted GitHub Contents runtime, but the spawned environment could not find `gh` on PATH.

No host was launched.

### ORCH-000135 — INCONCLUSIVE

The exact GitHub CLI executable was supplied successfully. GitHub Contents runtime worked and BrowserRelay was reached, but the temporary launcher used a no-op `workerPersistence` adapter that returned `durableRecorded=true` without actually writing the worker intent.

Transport stopped at pre-send observation with zero send.

### ORCH-000136 — ACCEPTED diagnostic/recovery

The expired lease was reconciled. Read-only call-graph inspection proved the accepted runner ordering was correct and isolated the defect to temporary launcher composition: browser transport ports had overridden the real durable worker persistence with an identity/no-op adapter.

No source repair was required.

## 8. Real durable worker persistence qualification

### ORCH-000137 — INCONCLUSIVE

The live retry used a real GitHub Contents-backed worker persistence adapter.

It proved:

- host `HOST-INSTANCE-SANDBOX-000016` was durably created;
- one worker-delivery lease was acquired;
- `WORKER-DELIVERY-EXECUTOR-000007` intent was written and read back before any BrowserRelay contact;
- the intent was exactly bound to ORCH-000137 / DISPATCH-000137, current Executor authority/registration, conversation and port 9444;
- BrowserRelay contact occurred once;
- browser send count: 0;
- attempted send count: 0;
- confirmed send count: 0;
- result did not yet exist;
- `LATEST_DELIVERY` remained `WORKER-DELIVERY-EXECUTOR-000004 / SENT`;
- no retry occurred.

Architect classification: `INCONCLUSIVE` because pre-send observation still failed.

Decision: `GH-DEC-137-PRE-SEND-OBSERVATION-INCONCLUSIVE`.

## 9. ORCH-000138 reconciliation — latest Executor evidence

ORCH-000138 performed the bounded zero-send reconciliation authorized after ORCH-000137.

Executor-reported durable result:

- exact probe occurrence count: 0;
- transport reconciliation: `PROVEN_NOT_SENT`;
- delivery `WORKER-DELIVERY-EXECUTOR-000007`: `ARMED → PROVEN_NOT_SENT`;
- attempted send count: 0;
- confirmed send count: 0;
- browser send count: 0;
- associated lease: terminal `EXPIRED`, no longer active;
- `LATEST_DELIVERY` remains `WORKER-DELIVERY-EXECUTOR-000004 / SENT`;
- no source/test/config mutation;
- no retry.

Publication:

`GH-PUB-138-WORKER-DELIVERY-000007-PROVEN-NOT-SENT-RECONCILED-000001`

At this documentation sync boundary, ORCH-000138 still requires Architect review. Executor completion is not automatic acceptance.

## 10. Current strategic direction

The project is deliberately moving away from treating the Orchestrator as a complex reasoning system.

Keep:

- durable GitHub mailbox/evidence;
- exact authority/session registrations;
- durable intents/results;
- exactly-once suppression;
- fail-closed ambiguity handling;
- read-only reconciliation before retry;
- protected role boundaries.

Simplify after end-to-end proof:

- reduce qualification-only ceremony where it is no longer needed;
- package the local messenger as a small deterministic daemon;
- keep AI only in Architect, Executor and Curator roles;
- Python is a preferred future local-daemon option, but no Python implementation is yet accepted.

## 11. Remaining operational trajectory

The next visible goal is one successful fresh forward delivery:

1. fresh host and delivery identity;
2. durable intent before browser contact;
3. pre-send observation succeeds;
4. exactly one message reaches Executor 9444;
5. durable SENT result and current pointer update;
6. duplicate suppression on next iteration;
7. Executor durable completion detection;
8. Architect wake on 9333 exactly once;
9. Curator relay when documentation is requested;
10. unattended governed cycle.

AFFOTECH remains separate/protected throughout this phase.
