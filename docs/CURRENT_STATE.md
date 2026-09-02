Project: affotech-agent-orchestrator
Documentation sync boundary: through ORCH-000198 / DISPATCH-000198 publication on 2026-09-02
Status: CURRENT HUMAN-READABLE PROJECTION
Machine authority: durable GitHub evidence and Architect decisions; explicit current Rony instruction governs where it supersedes an older next-action assumption

# Current State

## 1. Accepted source

`GH-PUB-165-WORKER-DELIVERY-LEGACY-LINEAGE-HYDRATION-REPAIR-READY-000001`

Qualification: 101 files; focused `65/65`; GitHub runtime ports `43/43`; BrowserRelay transport ports `22/22`; full deterministic `817/817`.

Accepted source has not changed through ORCH-000198 dispatch publication.

## 2. Current durable authority

Latest Executor terminal remains:

`GH-PUB-197-EXECUTOR-RELAY-STILL-NOT-RUNNING-000001`

No newer Executor terminal existed when ORCH-000198 was authorized.

Current Architect decision:

`GH-DEC-198-NO-NEW-REPORT-CODEX-TOPOLOGY-RECONCILIATION-AUTHORIZED`

Classification: `NO NEW REPORT`.

Current canonical prompt/dispatch:

- `ORCH-000198`
- `DISPATCH-000198`
- milestone `ORCH.P0.SANDBOX.OPERATIONAL.UNATTENDED.CYCLE.CODEX.EXECUTOR.CURRENT.DELIVERY.TOPOLOGY.RECONCILIATION.2Q`
- operation class `READ_ONLY_TOPOLOGY_RECONCILIATION`
- target execution runtime `CODEX_TERMINAL_RUNTIME_IN_VSCODE`
- dispatch state `MANUAL_TRIGGER_REQUIRED`

Current durable invariants:

- lease index revision `382`;
- `nextLeaseEpoch=192`;
- `activeLeases=[]`;
- latest successful delivery `WORKER-DELIVERY-EXECUTOR-000013/SENT`;
- delivery `000014/PROVEN_NOT_SENT` preserved;
- delivery `000015` intent/result absent;
- worker registration `WORKER-REG-EXECUTOR-000001` remains durable historical/current registration evidence but does not prove current Codex transport necessity;
- latest Architect trigger `ARCH-TRIGGER-9333-000005/SENT`.

## 3. What ORCH-000195 through ORCH-000197 actually established

Those milestones investigated the historical BrowserRelay delivery boundary associated with port `9444`:

- ORCH-000195 stopped before preparation because `127.0.0.1:9444` was unavailable;
- ORCH-000196 diagnosed no listener/owner and no identified registered browser/relay runtime;
- ORCH-000197 confirmed the expected manual restoration had not occurred.

The evidence remains valid history of that transport qualification. No browser contact/send or delivery `000015` intent/result was created.

The error was treating restoration of the historical `9444` BrowserRelay target as necessary before proving the current Codex delivery topology.

## 4. Permanent 2026-09-02 Executor identity correction

Rony explicitly confirmed that the operational Executor is the **Codex terminal/runtime in VS Code**.

Permanent rule:

`Executor role ≠ Codex runtime ≠ BrowserRelay transport ≠ browser conversation ≠ CDP/relay port`

Therefore:

- Codex Executor is not to be described as an “Executor browser”;
- `workerRole=executor` does not prove the registered browser/relay session is the execution engine;
- port `9444` is historical BrowserRelay delivery/control-plane evidence, not proof that Codex listens there;
- no browser/CDP/relay port may be inferred from the Executor role name;
- no missing transport may be restored until Architect first proves the current runtime↔transport topology and proves the transport is still required.

The ORCH-000197 instruction to restore an “Executor browser and relay 9444” is superseded for future action by Rony's higher-authority correction and project policy v1.5. Historical ORCH-000197 evidence is not rewritten.

## 5. ORCH-000198 — current topology reconciliation

ORCH-000198 is the current legal next milestone. It is strictly read-only and must determine from first-hand evidence:

1. what runtime/process/session performs Executor work now;
2. how a canonical ORCH/DISPATCH reaches the Codex terminal;
3. whether BrowserRelay is required, indirect, historical/legacy, conflicting, or unprovable in the current path;
4. which component owns every relevant port/endpoint;
5. how Codex publishes terminal/report/receipt back to durable GitHub evidence;
6. the smallest actual next qualification/repair.

It explicitly forbids:

- Brave/Chrome/BrowserRelay/Node/Codex/VS Code process launch, stop, restart, kill, or modification;
- BrowserRelay or ChatGPT DOM contact/send;
- mutation leases;
- delivery `000015` creation/retry;
- worker registration/authority mutation;
- source/test/config/docs/governance mutation by Executor;
- AFFOTECH/Drive access or mutation.

The audit must distinguish `PROVEN CURRENT`, `HISTORICAL ONLY`, `INFERRED`, and `UNKNOWN` for every topology edge.

## 6. Current required action

Run the current manual Executor dispatch in the **Codex terminal**, not in Brave:

`execute github dispatch nakfreeajer/affotech-agent-orchestrator-evidence DISPATCH-000198`

After the Executor publishes the ORCH-000198 terminal/report/receipt, return to Architect with `verify & next`.

Until ORCH-000198 is independently reviewed:

- do not rerun `DISPATCH-000197`;
- do not start Brave or BrowserRelay merely to satisfy `9444`;
- do not acquire a worker-delivery lease;
- do not create/retry `WORKER-DELIVERY-EXECUTOR-000015`;
- do not mutate the historical worker registration.

## 7. Permanent cold-start guard

Before troubleshooting a missing port, first answer:

**What component owns this port, what role does it serve, how is it bound to the current execution runtime, and is that component still required by the current architecture?**

Historical ACTIVE registration or historical successful transport evidence is insufficient by itself.

## 8. Documentation / future intent

ORCH-000198 publication changes current operational state only:

- `documentationImpact=STATE`;
- `futureIdeaImpact=NONE`.

`IDEA-0001 — Deterministic Architect documentation-closure marker` remains `ADOPTED_FOR_FUTURE`, deferred until core unattended transport reaches production-candidate qualification.
