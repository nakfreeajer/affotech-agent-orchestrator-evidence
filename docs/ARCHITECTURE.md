Project: affotech-agent-orchestrator
Documentation sync boundary: through Architect-accepted ORCH-000166
Status: CURRENT HUMAN-READABLE PROJECTION
Machine authority: durable GitHub evidence and Architect decisions

# Architecture

## 1. Core purpose

AFFOTECH Agent Orchestrator is a governed **deterministic message-routing and durable-state layer**. AI roles think; the Orchestrator carries exact governed envelopes and observes durable state. It does not approve work, interpret business semantics, scrape assistant decisions, or synthesize authority from browser text.

## 2. Authority and active roles

```text
Rony
  ↕
Architect — govern / verify / decide / document
  ↓ durable dispatch
Persistent deterministic Orchestrator
  ↓ exact delivery
Executor — bounded implementation/runtime/validation
  ↓ durable terminal
Persistent deterministic Orchestrator
  ↓ one-way wake
Architect
```

Architect classifications are exactly `ACCEPTED`, `BLOCKED`, `INCONCLUSIVE`, `NO NEW REPORT`.
Documentation policy is `ARCHITECT_DIRECT`; Curator is not an active required role.

## 3. Operational topology

```text
                     GitHub evidence repo
                    durable mailbox/state
                          ▲      │
                          │      ▼
Architect browser 9333 ◄── Local Orchestrator ──► Executor browser 9444
```

Current accepted implementation direction:

- Node/JavaScript modules;
- independent long-running local process;
- GitHub Contents/CAS runtime persistence;
- BrowserRelay/CDP for exact message transport only;
- durable host/delivery/lease/trigger state;
- duplicate suppression and explicit reconciliation;
- no local-git commit/push as runtime transport.

## 4. Durable mutation contract

`read-only pre-boundary → durable intent/readback → exactly one attempt → durable result OR AMBIGUOUS → read-only reconciliation before retry`.

Repeated text is never sufficient correlation. Historical ambiguity/evidence is preserved rather than rewritten.

## 5. Worker-delivery lineage model

Current ORCH-000165 rules:

- future results persist explicit `messageId` and `dispatchId`;
- result delivery ID, worker role, and `intentSha256` must exactly bind to the immutable intent;
- explicit result lineage conflicts fail closed;
- a legacy result missing explicit lineage may hydrate only through that exact immutable intent after all exact bindings pass;
- timestamps, payload text, current pointers, and other deliveries may never supply missing lineage;
- historical records are not rewritten for reader compatibility.

Accepted source:

`GH-PUB-165-WORKER-DELIVERY-LEGACY-LINEAGE-HYDRATION-REPAIR-READY-000001`

Qualification: 101 files; focused `65/65`; runtime ports `43/43`; BrowserRelay transport ports `22/22`; full deterministic `817/817`.

## 6. Proven transport legs

- ORCH-000153 proved forward delivery `WORKER-DELIVERY-EXECUTOR-000013 / SENT` exactly once.
- ORCH-000163 proved Architect trigger `ARCH-TRIGGER-9333-000005 / SENT` exactly once without assistant-response scraping.

## 7. Persistent host — ORCH-000166 ACCEPTED

Decision:

`GH-DEC-166-UNATTENDED-AUTOMATIC-HOST-000026-ARMED-ACCEPTED`

Running host identity:

`HOST-INSTANCE-SANDBOX-000026 / HOST-GEN-SANDBOX-000026`

Accepted bootstrap facts:

- one OS process-creation attempt;
- PID `16880` alive at terminal publication;
- `leaveRunning=true`;
- explicit consumed watermark `DISPATCH-000166` read back;
- three valid idle polling iterations;
- bootstrap dispatch suppressed three times;
- browser contact/send `0/0`;
- worker-delivery/Architect-trigger mutation `0/0`;
- lease acquisition `0`;
- accepted GitHub runtime, worker transport, and Architect wake-port composition installed;
- protected boundaries untouched.

This closes bootstrap/arming. The next dispatch must be discovered by this running host rather than manually forwarded.

## 8. First unattended-cycle probe

ORCH-000167 is intended to prove the combined steady-state path in one bounded cycle:

1. Architect publishes a strictly newer durable dispatch;
2. host `000026` observes it;
3. host creates one fresh durable worker-delivery intent/result and sends the exact locator to Executor once;
4. Executor performs a no-op/read-only probe and publishes one durable terminal;
5. host observes the corresponding terminal;
6. host creates one fresh Architect-trigger intent/result and sends exact `verify & next` to port `9333` once;
7. no assistant response text/DOM is read.

No source, docs-by-Executor, AFFOTECH, Drive, deployment, tenant, or business/private-data mutation is authorized by the probe.

## 9. Session and protected boundaries

- Architect control session: `9333`.
- Executor control session: `9444`.
- Protected AFFOTECH ports: `9222/9223`.

AFFOTECH source/worktrees, `nakfreeajer/affotech-agent-relay`, Drive, Apps Script, tenant resources, deployments, and business/private data remain separate unless Rony explicitly authorizes integration.
