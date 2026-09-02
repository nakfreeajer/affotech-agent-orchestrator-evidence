# AFFOTECH Agent Orchestrator Evidence

This repository is the machine-authoritative control/evidence plane for `affotech-agent-orchestrator`. Durable prompts, dispatches, Architect decisions, Executor terminals, transport records, host/lease state, source snapshots, and current pointers are authority. Human-readable documentation is maintained directly by Architect and never overrides machine evidence.

## Active authority model

```text
Rony (final human authority)
  ↕
Architect AI — think / govern / verify / decide / document
  ↓ durable authority/dispatch
Persistent deterministic Orchestrator — independent control-plane service
  ↓ proven current delivery path
Codex Executor terminal/runtime in VS Code — bounded work
  ↓ durable terminal/evidence
Persistent deterministic Orchestrator
  ↓ durable trigger/wake where qualified
Architect AI
```

There is **no active Curator role**.

### Critical identity rule

Never collapse these identities:

`Executor role ≠ Codex runtime ≠ BrowserRelay transport ≠ browser conversation ≠ CDP/relay port`

Historical evidence contains an `executor` worker registration associated with a ChatGPT conversation and port `9444`. That proves a historical BrowserRelay delivery/control-plane target. It does **not** prove that Codex itself is browser-based, listens on `9444`, or still requires that BrowserRelay today.

Before any transport repair/restart/restoration/retry, first prove the current runtime, intended transport, endpoint owner, continued necessity, and exact runtime↔transport binding.

## Documentation and future-idea continuity

Architect independently classifies after every review/material Rony directive:

```text
documentationImpact = NONE | STATE | FULL
futureIdeaImpact    = NONE | CAPTURE | PROMOTE
```

Documentation impact is decided by `governance/ARCHITECT_DOCUMENTATION_SEMANTIC_TEST.md`. For `STATE`/`FULL`, materially affected documents are updated/read back before the next mutating implementation dispatch.

Canonical governance:

- `governance/ORCHESTRATOR_BOOTSTRAP.md` v1.3
- `governance/PROJECT_ORCHESTRATION_POLICY.md` v1.5
- `governance/ARCHITECT_DOCUMENTATION_SEMANTIC_TEST.md` v1.0
- `governance/PROJECT_MEMORY_EVENT_LEDGER_POLICY.md` v1.4

## Current accepted source

`GH-PUB-165-WORKER-DELIVERY-LEGACY-LINEAGE-HYDRATION-REPAIR-READY-000001`

Qualification: 101 files; focused `65/65`; GitHub runtime ports `43/43`; BrowserRelay transport ports `22/22`; full deterministic `817/817`.

Accepted source has not changed through ORCH-000197 or the 2026-09-02 documentation/governance correction.

## Proven foundations

- ORCH-000153: exactly-once historical BrowserRelay forward delivery `WORKER-DELIVERY-EXECUTOR-000013/SENT`.
- ORCH-000163: exactly-once Architect wake `ARCH-TRIGGER-9333-000005/SENT`.
- ORCH-000193: epoch-189 expired worker lease recovery closed.
- ORCH-000194: zero-browser ACQUIRE → PREPARE → PROVEN_NOT_SENT → RELEASE capability accepted.

## ORCH-000195 through ORCH-000197

These milestones validly diagnosed the registered historical `9444` BrowserRelay path as unavailable. They did not mutate delivery `000015`; lease state closed cleanly at index `382`, next epoch `192`, zero active leases.

The mistake was architectural: the project then assumed this historical BrowserRelay target was still the required route to the active Executor.

On 2026-09-02 Rony confirmed the operational Executor is the **Codex terminal in VS Code**. The project policy was corrected to v1.5. The old future-action instruction to restore an “Executor browser and relay 9444” is superseded for future action; historical evidence remains unchanged.

## Current legal next boundary

There is **no current next dispatch**.

Do not rerun `DISPATCH-000197`, do not restore/start Brave or BrowserRelay merely to satisfy `9444`, and do not retry `WORKER-DELIVERY-EXECUTOR-000015`.

The next legal technical step, when separately authorized, is a **read-only current Codex-delivery topology reconciliation** to determine how the Orchestrator should reach the Codex terminal and whether BrowserRelay remains part of that path.

For exact current state use `docs/CURRENT_STATE.md`.

## Protected boundary

AFFOTECH System V2 Hybrid, AFFOTECH relay, ports `9222/9223`, Drive/business/private data, deployments, tenant resources, and protected project boundaries remain unauthorized absent explicit later authority.
