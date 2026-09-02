Project: affotech-agent-orchestrator
Documentation sync boundary: through ORCH-000197 Architect review
Status: CURRENT HUMAN-READABLE PROJECTION
Machine authority: durable GitHub evidence and Architect decisions

# Current State

## 1. Accepted source

`GH-PUB-165-WORKER-DELIVERY-LEGACY-LINEAGE-HYDRATION-REPAIR-READY-000001`

Qualification: 101 files; focused `65/65`; GitHub runtime ports `43/43`; BrowserRelay transport ports `22/22`; full deterministic `817/817`.

Accepted source did not change through ORCH-000197.

## 2. Accepted recovery / delivery-preflight foundation

- ORCH-000193 closed epoch-189 recovery.
- ORCH-000194 proved `ACQUIRE → transient actionKind=WORKER_DELIVERY → PREPARE → PROVEN_NOT_SENT → RELEASE` for delivery `000014`, with zero browser contact/send.
- `WORKER-DELIVERY-EXECUTOR-000014` is terminal `PROVEN_NOT_SENT` evidence and is not reusable for a live send.

## 3. ORCH-000195 — INCONCLUSIVE live-delivery attempt

ORCH-000195 targeted fresh `WORKER-DELIVERY-EXECUTOR-000015` but stopped before preparation because `127.0.0.1:9444` returned `ECONNREFUSED`.

No delivery `000015` intent/result was created and no browser contact/send occurred. The epoch-191 lease was normally released. Final lease state: index `382`, `nextLeaseEpoch=192`, `activeLeases=[]`. `LATEST_DELIVERY` remains `WORKER-DELIVERY-EXECUTOR-000013/SENT`.

Decision:

`GH-DEC-195-EXECUTOR-RELAY-PORT-UNAVAILABLE-INCONCLUSIVE`.

## 4. ORCH-000196 — ACCEPTED relay/runtime availability diagnosis

Decision:

`GH-DEC-196-EXECUTOR-RELAY-PROCESS-ABSENT-DIAGNOSTIC-ACCEPTED`

Verified diagnosis:

- worker authority and registration remain valid and ACTIVE;
- registration still correctly targets the existing Executor conversation on port `9444`;
- `127.0.0.1:9444` has no listener and no owner process;
- dedicated Executor relay/runtime and registered Executor browser-session process are absent;
- source patch and registration refresh are not required while identity remains unchanged;
- manual restoration of the existing Executor browser session plus relay/runtime is required.

## 5. ORCH-000197 — BLOCKED post-restoration readiness

Executor terminal:

`GH-PUB-197-EXECUTOR-RELAY-STILL-NOT-RUNNING-000001`

Architect decision:

`GH-DEC-197-EXECUTOR-RELAY-STILL-NOT-RUNNING-BLOCKED`

The read-only readiness gate executed correctly, but the expected manual restoration had not occurred:

- preconditions passed;
- registration and authority bindings remain valid;
- registered conversation/port binding still matches;
- port `9444` still has `NO_LISTENER`;
- owner process remains `NONE`;
- Executor relay process remains `NOT_RUNNING_OR_NOT_PRESENT`;
- registered Executor browser-session process remains unidentified/absent;
- delivery `000015` remains absent;
- lease index remains `382`, `nextLeaseEpoch=192`, `activeLeases=[]`;
- `LATEST_DELIVERY` remains `WORKER-DELIVERY-EXECUTOR-000013/SENT`;
- no lease, delivery, browser, process, registration, source, AFFOTECH, or Drive mutation occurred.

This is a deterministic operational blocker, not an ambiguous mutation state. A live-delivery retry is not authorized.

## 6. Current durable boundary

- accepted source: GH-PUB-165 unchanged;
- lease index revision `382`;
- `nextLeaseEpoch=192`;
- `activeLeases=[]`;
- latest successful delivery `WORKER-DELIVERY-EXECUTOR-000013/SENT`;
- delivery `000014/PROVEN_NOT_SENT` preserved;
- delivery `000015` intent/result absent;
- worker registration `WORKER-REG-EXECUTOR-000001` ACTIVE;
- worker authority `WORKER-AUTH-EXECUTOR-000001` ACTIVE;
- registered Executor relay port `9444`;
- port `9444` currently has no listener;
- latest Architect trigger `ARCH-TRIGGER-9333-000005/SENT`.

## 7. Required next action — human runtime restoration

No further dispatch is currently authorized.

Rony must first restore the **existing registered Executor runtime boundary**:

1. restore/start the dedicated Executor browser session for the already-registered Executor conversation;
2. restore/start its dedicated BrowserRelay/runtime owner so `127.0.0.1:9444` is listening;
3. preserve the current worker registration/authority unless the actual conversation/session identity changes;
4. do not touch Architect port `9333` or protected AFFOTECH ports `9222/9223`.

Historical live-delivery prompts treat port `9444` as an already-running registered BrowserRelay target; the evidence repository does not currently provide a canonical startup command for that relay/browser boundary. Do not invent a launch command from host-launch evidence.

After restoration is actually completed, Architect may publish a **fresh** read-only readiness verification. Do not rerun DISPATCH-000197.

Only after that fresh readiness verification is accepted may the live exactly-once delivery qualification for delivery `000015` be retried.

## 8. Documentation / future intent

ORCH-000197: `documentationImpact=STATE`; `futureIdeaImpact=NONE`.

`IDEA-0001 — Deterministic Architect documentation-closure marker` remains `ADOPTED_FOR_FUTURE`, deferred until core unattended transport reaches production-candidate qualification.
