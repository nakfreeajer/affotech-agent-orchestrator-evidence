Project: affotech-agent-orchestrator
Documentation sync boundary: through Rony transport-identity correction on 2026-09-02; no new ORCH dispatch after ORCH-000197
Status: CURRENT HUMAN-READABLE PROJECTION
Machine authority: durable GitHub evidence and Architect decisions; explicit current Rony instruction governs where it supersedes an older next-action assumption

# Current State

## 1. Accepted source

`GH-PUB-165-WORKER-DELIVERY-LEGACY-LINEAGE-HYDRATION-REPAIR-READY-000001`

Qualification: 101 files; focused `65/65`; GitHub runtime ports `43/43`; BrowserRelay transport ports `22/22`; full deterministic `817/817`.

Accepted source did not change through ORCH-000197 or this documentation correction.

## 2. Durable machine state

Latest Executor terminal remains:

`GH-PUB-197-EXECUTOR-RELAY-STILL-NOT-RUNNING-000001`

Latest historical Architect machine decision remains:

`GH-DEC-197-EXECUTOR-RELAY-STILL-NOT-RUNNING-BLOCKED`

Current durable state remains:

- lease index revision `382`;
- `nextLeaseEpoch=192`;
- `activeLeases=[]`;
- latest successful delivery `WORKER-DELIVERY-EXECUTOR-000013/SENT`;
- delivery `000014/PROVEN_NOT_SENT` preserved;
- delivery `000015` intent/result absent;
- worker registration `WORKER-REG-EXECUTOR-000001` remains historical/current durable evidence marked ACTIVE;
- latest Architect trigger `ARCH-TRIGGER-9333-000005/SENT`;
- no new canonical dispatch after `DISPATCH-000197`.

## 3. What ORCH-000195 through ORCH-000197 actually established

Those milestones investigated the historical BrowserRelay delivery boundary associated with port `9444`:

- ORCH-000195 stopped before preparation because `127.0.0.1:9444` was unavailable;
- ORCH-000196 diagnosed no listener/owner and no identified registered browser/relay runtime;
- ORCH-000197 confirmed the expected manual restoration had not occurred.

The evidence is valid history of that transport qualification. No browser contact/send or delivery `000015` intent/result was created.

However, the milestones assumed that restoring the historical `9444` BrowserRelay target was necessary to reach the active Executor. That assumption has now been challenged by the actual operating topology.

## 4. 2026-09-02 Rony correction — Executor identity

Rony explicitly confirmed that the operational Executor is the **Codex terminal/runtime in VS Code**.

Therefore:

- Codex Executor is not to be described as an “Executor browser”;
- `workerRole=executor` does not prove the registered browser/relay session is the execution engine;
- port `9444` is historical BrowserRelay delivery/control-plane evidence, not proof that Codex listens there;
- no browser/CDP/relay port may be inferred from the Executor role name;
- no missing transport may be restored until Architect first proves the current runtime↔transport topology and proves the transport is still required.

The ORCH-000197 instruction to manually restore an “Executor browser and relay 9444” is **superseded for future action** by Rony's current higher-authority correction and project policy v1.5. Historical ORCH-000197 evidence is not rewritten.

## 5. Current operational blocker

The current blocker is **not** “port 9444 must be restored.”

The blocker is:

`CURRENT_CODEX_DELIVERY_TOPOLOGY_NOT_YET_RECONCILED`

Before any new live-delivery work, Architect must determine read-only:

1. how the current Orchestrator is intended to deliver a governed dispatch to the Codex terminal;
2. whether BrowserRelay is still part of that path;
3. if BrowserRelay is required, its exact browser/CDP/relay ownership and startup binding;
4. if BrowserRelay is obsolete, what durable registration/state must later be superseded under bounded authority;
5. how the Codex terminal publishes its durable terminal/result back into the Orchestrator evidence chain.

## 6. Required next action

No live delivery, BrowserRelay restoration, Brave launch, registration mutation, or new worker-delivery lease is currently authorized.

The next legal technical action, when Architect publishes it, is a **read-only current-topology reconciliation**. It must inspect current project source/config/evidence and current user-confirmed runtime arrangement without mutating BrowserRelay, registration, worker delivery, source, AFFOTECH, or Drive.

Do **not** rerun `DISPATCH-000197`.

Do **not** start Brave on `9444` merely to satisfy historical evidence.

Do **not** create or retry `WORKER-DELIVERY-EXECUTOR-000015` until topology reconciliation is accepted.

## 7. Permanent cold-start guard

A cold-start Architect must keep these identities separate:

`Executor role ≠ Codex runtime ≠ BrowserRelay transport ≠ browser conversation ≠ CDP/relay port`

Before troubleshooting a missing port, first answer: **what component owns this port, what role does it serve, and is that component still required by the current architecture?**

## 8. Documentation / future intent

2026-09-02 Rony transport-identity correction:

- `documentationImpact=FULL`;
- `futureIdeaImpact=NONE`.

`IDEA-0001 — Deterministic Architect documentation-closure marker` remains `ADOPTED_FOR_FUTURE`, deferred until core unattended transport reaches production-candidate qualification.
