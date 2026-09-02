Project: affotech-agent-orchestrator
Documentation sync boundary: through ORCH-000196 Architect review
Status: CURRENT HUMAN-READABLE PROJECTION
Machine authority: durable GitHub evidence and Architect decisions

# Current State

## 1. Accepted source

`GH-PUB-165-WORKER-DELIVERY-LEGACY-LINEAGE-HYDRATION-REPAIR-READY-000001`

Qualification: 101 files; focused `65/65`; GitHub runtime ports `43/43`; BrowserRelay transport ports `22/22`; full deterministic `817/817`.

Accepted source did not change through ORCH-000196.

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

Executor terminal:

`GH-PUB-196-EXECUTOR-RELAY-9444-RUNTIME-DIAGNOSTIC-000001`

Architect decision:

`GH-DEC-196-EXECUTOR-RELAY-PROCESS-ABSENT-DIAGNOSTIC-ACCEPTED`

Verified diagnostic result:

- worker authority `WORKER-AUTH-EXECUTOR-000001` remains ACTIVE;
- worker registration `WORKER-REG-EXECUTOR-000001` remains ACTIVE, unsuperseded/unconsumed, and correctly targets the existing Executor conversation on relay port `9444`;
- registration and authority bindings are valid;
- `127.0.0.1:9444` has no listener;
- no process owns port `9444`;
- the dedicated Executor relay/runtime process is not running/present;
- no registered Executor browser-session process was identified;
- the separate Architect relay/browser on `9333` remains a different boundary;
- `source_patch_required=false`;
- `registration_refresh_required=false`;
- `relay_process_launch_required=true`;
- `browser_process_launch_required=true`;
- `manual_user_action_required=true`;
- safe live-delivery retry becomes true only after the existing registered Executor browser session and dedicated relay/runtime are restored.

ORCH-000196 itself was strictly read-only: lease/delivery/browser/process/registration/source/AFFOTECH/Drive mutations were all zero.

## 5. Current durable boundary

- lease index revision `382`;
- `nextLeaseEpoch=192`;
- `activeLeases=[]`;
- `LATEST_DELIVERY=WORKER-DELIVERY-EXECUTOR-000013/SENT`;
- delivery `000014/PROVEN_NOT_SENT` preserved;
- delivery `000015` intent/result absent;
- Executor registration remains the existing `WORKER-REG-EXECUTOR-000001` bound to the existing conversation and port `9444`;
- accepted source remains GH-PUB-165.

## 6. Required human restoration + ORCH-000197

Before another live delivery, Rony must restore the **existing registered Executor runtime boundary**:

1. restore/start the dedicated Executor browser session for the already-registered Executor conversation;
2. restore/start its dedicated BrowserRelay/runtime owner so `127.0.0.1:9444` is listening;
3. do not alter worker registration/authority unless the actual conversation/session identity changes;
4. do not touch Architect port `9333` or protected AFFOTECH ports `9222/9223`.

After restoration, run ORCH-000197: a strictly read-only readiness verification. It must prove a listener exists on `9444`, the listener/runtime corresponds to the registered Executor boundary, and the registered browser-session process is available, while making zero browser sends and zero durable mutations.

Only after ORCH-000197 acceptance may a fresh live-delivery qualification be authorized.

## 7. Documentation / future intent

ORCH-000196: `documentationImpact=STATE`; `futureIdeaImpact=NONE`.

`IDEA-0001 — Deterministic Architect documentation-closure marker` remains `ADOPTED_FOR_FUTURE`, deferred until core unattended transport reaches production-candidate qualification.
