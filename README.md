# AFFOTECH Agent Orchestrator Evidence

This repository is the machine-authoritative control/evidence plane for `affotech-agent-orchestrator`. Durable prompts, dispatches, Architect decisions, Executor terminals, transport records, host/lease state, source snapshots, and current pointers are authority. Human-readable documentation is maintained directly by Architect and never overrides machine evidence.

## Active authority model

The currently proven execution path is:

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

There is **no active Curator role**.

### Current unattended candidate

ORCH-000199 accepted that the installed `codex-cli 0.151.0` exposes a supported non-interactive interface:

`codex exec`

It supports prompt argument/stdin input, working-directory control, model/profile/config and sandbox/approval controls, structured output and ephemeral execution. The current CLI reports `Logged in using ChatGPT`.

The remaining proof is whether a separately spawned child `codex exec` reuses that authenticated ChatGPT session and returns clean machine-observable exit/output semantics. Until that one-shot qualification is accepted, manual user handoff remains the current inbound path.

### Critical identity rule

Never collapse these identities:

`Executor role ≠ Codex runtime ≠ BrowserRelay transport ≠ browser conversation ≠ CDP/relay port`

Historical `WORKER-REG-EXECUTOR-000001` remains associated with ChatGPT/port `9444`, but that BrowserRelay path is legacy relative to the proven current manual Codex path. Do not restore it merely because the registration remains ACTIVE.

## Canonical governance

- `governance/ORCHESTRATOR_BOOTSTRAP.md` v1.3
- `governance/PROJECT_ORCHESTRATION_POLICY.md` v1.5
- `governance/ARCHITECT_DOCUMENTATION_SEMANTIC_TEST.md` v1.0
- `governance/PROJECT_MEMORY_EVENT_LEDGER_POLICY.md` v1.4

Architect independently classifies:

```text
documentationImpact = NONE | STATE | FULL
futureIdeaImpact    = NONE | CAPTURE | PROMOTE
```

## Current accepted source

`GH-PUB-165-WORKER-DELIVERY-LEGACY-LINEAGE-HYDRATION-REPAIR-READY-000001`

Qualification: 101 files; focused `65/65`; GitHub runtime ports `43/43`; BrowserRelay transport ports `22/22`; full deterministic `817/817`.

Accepted source has not changed through ORCH-000199.

## Proven foundations

- ORCH-000153: exactly-once historical BrowserRelay forward delivery `WORKER-DELIVERY-EXECUTOR-000013/SENT`.
- ORCH-000163: exactly-once Architect wake `ARCH-TRIGGER-9333-000005/SENT`.
- ORCH-000193: epoch-189 expired worker lease recovery closed.
- ORCH-000194: zero-browser ACQUIRE → PREPARE → PROVEN_NOT_SENT → RELEASE capability accepted.
- ORCH-000198: current manual-to-Codex inbound path plus direct Codex→GitHub terminal publication accepted.
- ORCH-000199: direct non-interactive `codex exec` capability accepted; child auth reuse remains unproven.

## Current legal next boundary

The next bounded milestone is a single isolated `codex exec` authentication-reuse qualification.

It may invoke at most one child Codex/model run with a harmless correlation prompt, read-only sandbox and ephemeral execution, and must capture exact exit/output evidence. It must not restore BrowserRelay, mutate the historical registration, reuse delivery `000015`, modify project/source/config, read credentials/secrets, or touch AFFOTECH/Drive.

Only after that qualification succeeds may Architect consider a dedicated governed direct-Codex adapter.

For exact current state use `docs/CURRENT_STATE.md`.

## Protected boundary

AFFOTECH System V2 Hybrid, AFFOTECH relay, ports `9222/9223`, Drive/business/private data, deployments, tenant resources, and protected project boundaries remain unauthorized absent explicit later authority.
