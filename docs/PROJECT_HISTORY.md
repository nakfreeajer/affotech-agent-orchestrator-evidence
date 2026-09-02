Project: affotech-agent-orchestrator
Documentation sync boundary: through ORCH-000198 Architect acceptance on 2026-09-02
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

ORCH-000194 proved:

`ACQUIRE → transient actionKind=WORKER_DELIVERY → PREPARE → PROVEN_NOT_SENT → RELEASE`

for delivery `000014`, with browser contact/send `0/0`.

## ORCH-000195 through ORCH-000197 — historical 9444 recovery branch

ORCH-000195 attempted fresh delivery `000015` against registered endpoint `127.0.0.1:9444`; the endpoint was unavailable before delivery preparation/contact. The lease closed cleanly at index `382`, next epoch `192`, zero active leases.

ORCH-000196 diagnosed no listener/owner and no identified expected browser/relay runtime. ORCH-000197 verified that the expected manual restoration had still not occurred.

At that time the project assumed the registered BrowserRelay target was the active path to the Executor.

## 2026-09-02 — runtime/transport identity correction

Rony challenged the premise and confirmed that the operational Executor is the **Codex terminal/runtime in VS Code**, not a browser-based Executor.

This exposed a governance/documentation defect: historical `workerRole=executor` BrowserRelay registration had been allowed to substitute for proof of current execution topology.

Permanent correction:

`role ≠ runtime ≠ transport ≠ browser/session ≠ endpoint`

Project policy advanced to v1.5. The ORCH-000197 future-action instruction to restore an “Executor browser and relay 9444” was superseded for future action while historical evidence remained unchanged.

## ORCH-000198 — current Codex topology reconciled and accepted

ORCH-000198 executed from the Codex terminal/runtime in VS Code and traced both directions read-only.

Accepted result:

`GH-DEC-198-CODEX-DIRECT-MANUAL-TOPOLOGY-ACCEPTED`

Proven current path:

```text
Architect durable dispatch
  → manual user locator/message
  → Codex terminal/runtime in VS Code
  → direct GitHub authority reads
  → bounded Executor work
  → direct GitHub terminal/report/receipt publication
  → Architect review
```

The run found no proven persistent automatic GitHub/Orchestrator → Codex bridge. The historical registration `WORKER-REG-EXECUTOR-000001` remains ACTIVE and bound to ChatGPT/port `9444`, but that path is legacy relative to the proven current manual Codex route and is not required for it.

No BrowserRelay restoration, registration mutation, delivery `000015` retry, lease mutation, source mutation, AFFOTECH access, or Drive mutation occurred.

`documentationImpact=FULL`; `futureIdeaImpact=NONE`.

## Current target

The manual inbound handoff and direct GitHub outbound publication are now understood. The remaining orchestration gap is unattended **direct Codex invocation**.

The next bounded work is read-only discovery of the installed Codex runtime's supported non-interactive invocation surface, authentication mode, input/output semantics, and suitability for persistent-Orchestrator spawning under governed exactly-once intent/result rules.

Do not restore `9444`, mutate the historical worker registration, or retry delivery `000015` before that direct Codex contract is understood and separately qualified.

AFFOTECH remains separate/protected until later explicit Rony-authorized integration.
