Project: affotech-agent-orchestrator
Documentation sync boundary: through Architect-accepted ORCH-000165 and canonical ORCH-000166
Status: CURRENT HUMAN-READABLE PROJECTION
Machine authority: durable GitHub evidence and Architect decisions

# Architecture

## 1. Core purpose

The AFFOTECH Agent Orchestrator is a governed **deterministic message-routing and durable-state layer**. AI roles think; the Orchestrator carries exact governed envelopes and observes durable state. It does not approve work, interpret business semantics, scrape assistant decisions, or synthesize authority from browser text.

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

Documentation policy is `ARCHITECT_DIRECT`. Curator is not an active required role.

## 3. Operational topology

```text
                     GitHub evidence repo
                    durable mailbox/state
                          ▲      │
                          │      ▼
Architect browser 9333 ◄── Local Orchestrator ──► Executor browser 9444
```

Current implementation direction:

- Node/JavaScript modules;
- independent long-running local process;
- GitHub Contents/CAS runtime persistence;
- BrowserRelay/CDP only for exact transport;
- durable host/delivery/lease/trigger state;
- duplicate suppression and explicit reconciliation;
- no local-git commit/push as runtime transport.

## 4. Durable external-mutation contract

```text
read-only pre-boundary
→ durable intent/readback
→ exactly one attempt
→ durable result OR AMBIGUOUS
→ read-only reconciliation before retry
```

Repeated text is never sufficient correlation. Historical ambiguity is preserved rather than rewritten.

## 5. Worker-delivery lineage model

A worker delivery consists of an immutable intent plus result.

Current accepted rules after ORCH-000165:

- new results persist explicit `messageId` and `dispatchId`;
- result delivery ID and worker role must match the intent;
- result `intentSha256` must exactly match the immutable intent;
- explicit result lineage must match intent lineage or fail closed;
- a **legacy** result that predates explicit lineage fields may hydrate message/dispatch lineage only from its exact immutable intent after all exact bindings above pass;
- timestamps, payload text, current pointers, or another delivery may never be used to infer missing lineage;
- historical records are never rewritten merely to satisfy a newer reader.

This compatibility rule was required because accepted delivery `WORKER-DELIVERY-EXECUTOR-000013` has exact `intentSha256` binding but its historical result does not contain explicit `messageId`/`dispatchId`.

## 6. Current accepted source

Accepted source:

`GH-PUB-165-WORKER-DELIVERY-LEGACY-LINEAGE-HYDRATION-REPAIR-READY-000001`

Decision:

`GH-DEC-165-WORKER-DELIVERY-LEGACY-LINEAGE-HYDRATION-REPAIR-ACCEPTED`

Qualification:

- source files: `101`;
- focused tests: `65/65`;
- GitHub runtime ports: `43/43`;
- BrowserRelay transport ports: `22/22`;
- full deterministic suite: `817/817`;
- manifest SHA-256: `3a5f046056cf1b94b6ec1685d3c18b754625727eb296f3a07df298f9732abf28`;
- archive SHA-256: `e07ef7e0775de6e500568d3e813800a2750c5b4e0e56befb676ce3d259cd80ba`.

A read-only live compatibility check resolved delivery `000013` as `SENT / ORCH-000153 / DISPATCH-000153` with zero writes.

## 7. Proven transport legs

### Forward leg — ORCH-000153

`WORKER-DELIVERY-EXECUTOR-000013 / SENT` was delivered exactly once; duplicate replay additional send `0`; lease returned inactive.

### Return leg — ORCH-000163

`ARCH-TRIGGER-9333-000005 / SENT` appended exact `verify & next`; USER count `2→3`; attempted/confirmed `1/1`; second send `0`; no assistant-response text/DOM read.

These prove both transport legs independently.

## 8. Persistent-host bootstrap

ORCH-000164 was the first attempt to combine the proven legs into a persistent unattended host.

Its `DISPATCH-000164` bootstrap watermark was successfully created/read back, but the first durable snapshot failed with `WORKER_DELIVERY_LINEAGE_CONFLICT` because the pre-ORCH-000165 reader rejected the legacy result shape. It failed before browser contact/send and the partial host was stopped.

ORCH-000165 repaired that reader/writer compatibility seam.

ORCH-000166 is the fresh bootstrap retry with `HOST-INSTANCE-SANDBOX-000026 / HOST-GEN-SANDBOX-000026`. It must:

1. prove real delivery `000013` hydrates correctly read-only before process launch;
2. establish `DISPATCH-000166` as already handled;
3. make exactly one OS process-creation attempt;
4. complete at least two valid idle polling iterations with zero browser contact/send;
5. leave the host running;
6. claim readiness only if the same accepted running composition can observe a newer dispatch, deliver it exactly once, observe its durable Executor terminal, and invoke the proven Architect wake path.

## 9. Browser/session boundaries

- Architect control session: port `9333`.
- Executor control session: port `9444`.
- Protected AFFOTECH ports: `9222`, `9223`.

BrowserRelay remains transport only.

## 10. Protected AFFOTECH boundary

No current Orchestrator authority permits AFFOTECH source/worktree, `nakfreeajer/affotech-agent-relay`, Drive, Apps Script, tenant resources, business/private data, deployment, or protected-port access/mutation.

## 11. Completion trajectory

Target steady-state cycle:

`Architect decision/dispatch → persistent Orchestrator → Executor exactly once → durable terminal → persistent Orchestrator → Architect wake exactly once → Architect decision → repeat`

If ORCH-000166 is accepted, the next Architect dispatch must be discovered and forwarded by the running host without manual transport intervention.
