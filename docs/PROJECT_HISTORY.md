Project: affotech-agent-orchestrator
Documentation sync boundary: through Rony transport-identity correction on 2026-09-02; no new ORCH dispatch after ORCH-000197
Status: CURRENT HUMAN-READABLE PROJECTION
Machine authority: durable GitHub evidence and Architect decisions

# Project History

## Foundation through ORCH-000165

The project established Rony as final authority, Architect as governor/decision-maker, Executor as bounded worker, GitHub as durable evidence authority, exact lineage, no blind retry, and separation from AFFOTECH.

Key accepted foundations:

- ORCH-000153: worker forward delivery `WORKER-DELIVERY-EXECUTOR-000013/SENT` exactly once through the then-registered BrowserRelay path;
- ORCH-000163: Architect wake `ARCH-TRIGGER-9333-000005/SENT` exactly once;
- ORCH-000165: lineage compatibility repair accepted with full deterministic `817/817`.

## ORCH-000166 through ORCH-000193 — persistent-host work and epoch-189 recovery

Persistent-host bootstrap and dispatch observation were established. The recovery chain established full immutable lease hydration, typed hash identities, corrected reconciliation caller shape, exact `createJson` readback semantics, and semantic GitHub `404 → NOT_FOUND` handling.

ORCH-000193 reconciled epoch 189 to immutable revision 2 / `EXPIRED` and advanced the lease index to `378` with no active leases.

## ORCH-000194 — zero-browser delivery preflight accepted

ORCH-000194 proved one in-process sequence:

`ACQUIRE → transient actionKind=WORKER_DELIVERY → PREPARE → PROVEN_NOT_SENT → RELEASE`

for `WORKER-DELIVERY-EXECUTOR-000014`, with browser contact/send `0/0`. The lease index closed at `380`, next epoch `191`, and zero active leases.

Decision:

`GH-DEC-194-WORKER-DELIVERY-000014-PREFLIGHT-ACCEPTED`.

## ORCH-000195 — historical live delivery stopped before preparation

Fresh delivery `WORKER-DELIVERY-EXECUTOR-000015` was attempted against the registered endpoint `127.0.0.1:9444`, but it returned `ECONNREFUSED` before delivery intent creation or browser contact.

The epoch-191 lease was released normally. Final state: index `382`, `nextLeaseEpoch=192`, zero active leases, delivery `000015` absent, latest successful delivery still `000013/SENT`.

Decision:

`GH-DEC-195-EXECUTOR-RELAY-PORT-UNAVAILABLE-INCONCLUSIVE`.

## ORCH-000196 — historical BrowserRelay absence diagnosed

ORCH-000196 ran read-only and confirmed the historical worker registration/authority remained marked ACTIVE while port `9444` had no listener/owner and the expected browser/relay runtime was absent.

Architect accepted the diagnostic under:

`GH-DEC-196-EXECUTOR-RELAY-PROCESS-ABSENT-DIAGNOSTIC-ACCEPTED`.

At this point the project assumed that the registered BrowserRelay target was still the active route to the Executor.

## ORCH-000197 — historical post-restoration readiness blocked

ORCH-000197 was a read-only readiness verification intended to run after manual restoration. It confirmed restoration had not occurred and preserved clean durable state:

- port `9444` no listener;
- no owner process;
- no delivery `000015` intent/result;
- lease index `382`, `nextLeaseEpoch=192`, zero active leases;
- latest successful delivery `000013/SENT`;
- no lease/delivery/browser/process/registration/source/AFFOTECH/Drive mutation.

Architect decision:

`GH-DEC-197-EXECUTOR-RELAY-STILL-NOT-RUNNING-BLOCKED`.

Classification: `BLOCKED`.

The then-documented next action was to manually restore the “Executor browser” and BrowserRelay on `9444`.

## 2026-09-02 — Executor runtime/transport identity correction

During manual troubleshooting, Rony challenged the premise: the actual operational Executor is the **Codex terminal in VS Code**, not a browser-based Executor.

This exposed a documentation/governance defect rather than a new runtime failure. The project had collapsed several different identities because a historical BrowserRelay registration used `workerRole=executor`:

- Executor role;
- Codex execution runtime;
- BrowserRelay transport;
- ChatGPT browser conversation;
- network/CDP/relay port.

That collapse caused Architect to spend ORCH-000195 through ORCH-000197 trying to restore a historical transport component before proving it was still required by the current Codex topology.

The BrowserRelay history was real and those milestones remain valid historical evidence. The mistake was treating historical transport registration as proof of current execution architecture.

Rony directed that documentation be corrected so this mistake cannot recur.

Permanent correction:

`role ≠ runtime ≠ transport ≠ browser/session ≠ endpoint`

Project policy advanced to v1.5. Before future transport repair/restoration/retry, Architect must first prove the current execution runtime, intended transport, endpoint owner, continued necessity, and exact runtime↔transport binding.

The ORCH-000197 future-action instruction to restore an “Executor browser and relay 9444” is superseded for future action. Historical evidence remains untouched.

`documentationImpact=FULL`; `futureIdeaImpact=NONE`.

## Current target

There is **no current next dispatch**.

Do not rerun `DISPATCH-000197`, do not restore `9444` merely because the historical registration exists, and do not retry delivery `000015`.

The next legal technical step, when separately authorized, is a read-only current-topology reconciliation answering how the Orchestrator is supposed to deliver a governed dispatch to the Codex terminal and whether BrowserRelay remains part of that path.

AFFOTECH remains separate/protected until later explicit Rony-authorized integration.
