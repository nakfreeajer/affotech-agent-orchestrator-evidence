# AFFOTECH Agent Orchestrator Evidence

This repository is the machine-authoritative control/evidence plane for `affotech-agent-orchestrator`. Durable prompts, dispatches, Architect decisions, Executor terminals, transport records, host/lease state, source snapshots, and current pointers are authority. Human-readable documentation is maintained directly by Architect and never overrides machine evidence.

## Active authority model

The currently accepted production path remains:

```text
Rony / Architect durable dispatch
  ↓
manual user locator/message
  ↓
Codex Executor terminal/runtime in VS Code
  ↓ direct GitHub authority reads
bounded work
  ↓ direct GitHub terminal/report/receipt publication
Architect review
```

Manual inbound remains production authority until direct-Codex transport is live-qualified.

## Direct Codex status

- ORCH-000199: supported non-interactive `codex exec` accepted.
- ORCH-000200: authenticated one-shot child primitive accepted.
- ORCH-000201: governed direct-Codex adapter and persistent-host direct route source accepted.
- ORCH-000202: first live adapter qualification INCONCLUSIVE before child spawn.
- ORCH-000203: create/readback ambiguity diagnostic ACCEPTED.
- ORCH-000204: typed pre-spawn create/readback observability repair ACCEPTED.
- ORCH-000205: abandoned ORCH-000202 identity zero-spawn reconciliation ACCEPTED.
- ORCH-000206: fresh live child launch BLOCKED because the required durable child probe terminal was not observed.

## Current accepted source

`GH-PUB-204-DIRECT-CODEX-INTENT-OBSERVABILITY-REPAIR-READY-000001`

Decision:

`GH-DEC-204-DIRECT-CODEX-INTENT-OBSERVABILITY-REPAIR-ACCEPTED`

Qualification: 103 files; focused/relevant `142/142`; full deterministic `844/844`; manifest `ee7aca2665853e8ebb9d0e0de99b510d84b7fa41282ebed88a1fa6b3c49bf3bf`; archive `34c4dd17b3475932de7513a4f0f395b0cb285229413128b357a6566da0134521`.

## Current live blocker

ORCH-000206 successfully passed direct-Codex intent create/readback and launched exactly one real child `codex exec`. The child exited `0` without timeout, but `GH-PUB-206-DIRECT-CODEX-LIVE-PROBE-000001` was never published/observed.

The direct-Codex result is durably `TERMINAL_NOT_OBSERVED` with retry disabled. This fresh invocation must not be retried or reused.

Permanent distinction:

`child exit 0 ≠ child dispatch execution ≠ durable probe terminal publication ≠ transport success ≠ Architect acceptance`.

The next problem is specifically the child/publication capability boundary, not BrowserRelay and not pre-spawn create/readback.

## Critical identity rule

`Executor role ≠ Codex runtime ≠ direct-Codex transport ≠ BrowserRelay transport ≠ browser conversation ≠ CDP/relay port`

Historical `WORKER-REG-EXECUTOR-000001` and relay port `9444` remain historical evidence, not current transport authority. Historical BrowserRelay delivery `WORKER-DELIVERY-EXECUTOR-000015` must never be reused as a direct-Codex identity.

## Canonical governance

- `governance/ORCHESTRATOR_BOOTSTRAP.md` v1.3
- `governance/PROJECT_ORCHESTRATION_POLICY.md` v1.5
- `governance/ARCHITECT_DOCUMENTATION_SEMANTIC_TEST.md` v1.0
- `governance/PROJECT_MEMORY_EVENT_LEDGER_POLICY.md` v1.4

## Current legal next boundary

ORCH-000207 is the next bounded read-only diagnostic of the completed ORCH-000206 child/publication boundary.

It must run zero new Codex/model children, perform no retry, and inspect only narrowly correlated accepted command construction and existing local child session/output evidence. It must determine whether the child received/interpreted the dispatch locator, had a GitHub publication mechanism/network/tooling available, or merely exited successfully with text output. If that evidence is not recoverable, it must identify the minimum bounded child-output-capture repair before any fresh live attempt.

For exact state use `docs/CURRENT_STATE.md`.

## Protected boundary

AFFOTECH System V2 Hybrid, ports `9222/9223`, Drive/business/private data, deployments, tenant resources, historical BrowserRelay state, and unrelated protected resources remain unauthorized absent explicit later authority.
