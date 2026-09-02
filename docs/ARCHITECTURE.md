Project: affotech-agent-orchestrator
Documentation sync boundary: through Rony transport-identity correction on 2026-09-02; no new ORCH dispatch after ORCH-000197
Status: CURRENT HUMAN-READABLE PROJECTION
Machine authority: durable GitHub evidence, governing policy, and Architect decisions; explicit current Rony instruction has higher precedence where governance defines it

# Architecture

## 1. Core purpose

AFFOTECH Agent Orchestrator is a governed deterministic message-routing and durable-state layer. AI roles think; the Orchestrator carries exact governed envelopes and observes durable state. It does not approve work, infer authority from browser text, or interpret project semantics.

## 2. Active authority topology

```text
Rony — final human authority
  ↕
Architect — govern / verify / decide / document
  ↓ durable dispatch
Persistent deterministic Orchestrator
  ↓ governed delivery path — exact current transport must be proven
Codex Executor terminal/runtime in VS Code — bounded work
  ↓ durable terminal/evidence
Persistent deterministic Orchestrator
  ↓ durable Architect trigger/wake where qualified
Architect
```

Curator is not part of the active model.

The Executor **execution engine** is the Codex terminal/runtime in VS Code. A browser conversation, BrowserRelay registration, CDP port, or relay endpoint is a transport/control-plane resource only unless durable evidence explicitly proves a current binding to the execution runtime.

## 3. Permanent identity-separation contract

These are separate identities:

- role identity: `executor`;
- execution runtime: the process/session that performs bounded work;
- transport adapter: e.g. BrowserRelay, if currently required;
- browser/session identity: e.g. a ChatGPT conversation used by a transport;
- network endpoint: listener/CDP/relay port owned by a particular component.

Never infer one identity from another merely because a historical record uses `workerRole=executor`.

Before any transport repair/restart/restoration/retry, Architect must prove:

1. current Executor runtime;
2. current intended delivery path;
3. owner/purpose of every relevant port;
4. whether the transport remains required;
5. exact runtime↔transport binding if one exists.

## 4. Historical BrowserRelay qualification

Historical accepted transport work remains valid evidence:

- ORCH-000153 proved exactly-once worker forward delivery `WORKER-DELIVERY-EXECUTOR-000013/SENT` through the then-registered BrowserRelay path;
- ORCH-000194 proved zero-browser preparation/reconciliation for `000014`;
- ORCH-000195 through ORCH-000197 investigated missing port `9444` under the assumption that the historical BrowserRelay target remained the active Executor delivery boundary.

Those records prove the behavior of that historical transport path. They do **not** prove that Codex itself runs in a browser, listens on `9444`, or requires that BrowserRelay today.

On 2026-09-02 Rony confirmed the operational Executor is the Codex terminal in VS Code. Therefore the prior future-action instruction to restore an “Executor browser” on `9444` is superseded pending topology reconciliation.

## 5. Accepted source

`GH-PUB-165-WORKER-DELIVERY-LEGACY-LINEAGE-HYDRATION-REPAIR-READY-000001`

101 files; focused `65/65`; GitHub runtime ports `43/43`; BrowserRelay transport ports `22/22`; full deterministic `817/817`.

Accepted source has not changed through ORCH-000197 or this documentation correction.

## 6. Worker-delivery contract

Accepted historical ordering:

`observe dispatch → acquire WORKER_DELIVERY lease → construct transient action-specific authorization → prepareWorkerDeliveryIntent → durable intent readback → send/reconcile result → durable result readback → release/reconcile lease`

Preparation uses an explicit `workerDeliveryId` and transient `actionKind=WORKER_DELIVERY`; the durable lease itself is not rewritten merely to add `actionKind`.

The persistent delivery intent record uses canonical state `ARMED`; accepted preparation returns status `PREPARED` only after that immutable intent is durably recorded/read back.

This contract remains valid when BrowserRelay is the proven delivery transport. It does not by itself select BrowserRelay as the current transport.

## 7. Exactly-once transport contract

Where a BrowserRelay live-send path is explicitly proven and authorized, the accepted ORCH-000153 precedent requires:

1. one fresh delivery identity;
2. one bounded WORKER_DELIVERY lease acquisition attempt;
3. durable delivery intent before any transport contact;
4. pre-send observation;
5. at most one exact governed send to the proven target;
6. attempted/confirmed counts `1/1` for success;
7. durable `SENT` result readback before advancing `LATEST_DELIVERY`;
8. normal lease release with original lease lineage;
9. duplicate-suppression proof of second-send count `0`;
10. no synthesis of `SENT` under ambiguity.

Do not apply this browser-specific live-send sequence to Codex until the current Codex delivery path is reconciled and explicitly authorized.

## 8. Lease and GitHub transport contracts

- index `activeLeases` entries are reduced locators; full-schema work hydrates the exact immutable revision first;
- canonical semantic SHA-256 and Git blob SHA remain separate typed identities;
- GitHub Contents adapters preserve semantic HTTP status and map `404 → NOT_FOUND`;
- accepted `createJson` uses `precheck → at most one PUT → exact post-write readback`;
- durable readback is final mutation authority;
- no blind retry after ambiguous external mutation or send.

## 9. Current recovery boundary

Epoch-189 recovery closed under `GH-DEC-193-EXPIRED-WORKER-LEASE-RECOVERY-ACCEPTED`.

Current durable state after ORCH-000197 remains:

- lease index `382`;
- `nextLeaseEpoch=192`;
- `activeLeases=[]`;
- latest successful worker delivery `WORKER-DELIVERY-EXECUTOR-000013/SENT`;
- delivery `000014/PROVEN_NOT_SENT` preserved;
- delivery `000015` absent.

No further `9444` restoration or live-delivery retry is authorized until topology reconciliation establishes whether that BrowserRelay path is still part of the active system.

## 10. Documentation governance

Architect directly owns canonical human-readable documentation. `documentationImpact=NONE|STATE|FULL`; future intent is separately classified `NONE|CAPTURE|PROMOTE`.

The 2026-09-02 transport-identity correction is `documentationImpact=FULL` because it changes governing architecture, terminology, recovery behavior, and a reusable engineering lesson.

## 11. Protected boundaries

Architect BrowserRelay/session port `9333`, where used, remains separate from AFFOTECH protected ports `9222/9223`. Historical `9444` evidence is a BrowserRelay delivery endpoint, not proof of a Codex/CDP port. AFFOTECH source/worktrees, Drive, Apps Script, tenant resources, deployments, and business/private data remain unauthorized absent explicit authority.
