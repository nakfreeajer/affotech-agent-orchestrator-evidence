# AFFOTECH Agent Orchestrator Evidence

This repository is the machine-authoritative control/evidence plane for `affotech-agent-orchestrator`. Durable prompts, dispatches, Architect decisions, Executor terminals, transport records, host/lease state, source snapshots, and current pointers are authority. Human-readable documentation is maintained directly by Architect and never overrides machine evidence.

## Active authority model

The currently accepted production execution path is:

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

### Qualified unattended primitive

ORCH-000199 established supported non-interactive `codex exec` on `codex-cli 0.151.0`.

ORCH-000200 then proved one separately spawned child `codex exec` can reuse the current ChatGPT-authenticated session and return a clean machine-observable result under strict correlation governance:

- immutable intent before spawn;
- exactly one child invocation;
- exit code `0`;
- exact correlation output match;
- no timeout, termination or retry;
- durable result readback;
- zero protected mutations.

Decision:

`GH-DEC-200-CODEX-DIRECT-AUTH-REUSE-QUALIFICATION-ACCEPTED`

This is a **qualified one-shot runtime primitive**, not yet a production unattended adapter.

### Current implementation gap

`GOVERNED_DIRECT_CODEX_ADAPTER_NOT_YET_IMPLEMENTED_OR_QUALIFIED`

The next implementation must connect the persistent Orchestrator to direct `codex exec` with a fresh direct-Codex identity, durable intent/result, at-most-once spawn, duplicate suppression, explicit workdir/sandbox/ephemeral controls, bounded exit/output reconciliation, distinct failure states and no blind retry.

### Critical identity rule

`Executor role ≠ Codex runtime ≠ BrowserRelay transport ≠ browser conversation ≠ CDP/relay port`

Historical `WORKER-REG-EXECUTOR-000001` remains associated with ChatGPT/port `9444`, but that BrowserRelay path is legacy relative to the current Codex path. Do not restore it merely because the registration remains ACTIVE.

Historical BrowserRelay delivery `WORKER-DELIVERY-EXECUTOR-000015` must not be reused as a direct-Codex invocation identity.

## Canonical governance

- `governance/ORCHESTRATOR_BOOTSTRAP.md` v1.3
- `governance/PROJECT_ORCHESTRATION_POLICY.md` v1.5
- `governance/ARCHITECT_DOCUMENTATION_SEMANTIC_TEST.md` v1.0
- `governance/PROJECT_MEMORY_EVENT_LEDGER_POLICY.md` v1.4

## Current accepted source

`GH-PUB-165-WORKER-DELIVERY-LEGACY-LINEAGE-HYDRATION-REPAIR-READY-000001`

Qualification: 101 files; focused `65/65`; GitHub runtime ports `43/43`; BrowserRelay transport ports `22/22`; full deterministic `817/817`.

Accepted source has not changed through ORCH-000200.

Canonical accepted-source artifact:

- `evidence/artifacts/orch-000165/manifest.json`
- `evidence/artifacts/orch-000165/source.tar.gz`

## Proven foundations

- ORCH-000153: exactly-once historical BrowserRelay forward delivery `WORKER-DELIVERY-EXECUTOR-000013/SENT`.
- ORCH-000163: exactly-once Architect wake `ARCH-TRIGGER-9333-000005/SENT`.
- ORCH-000193: epoch-189 expired worker lease recovery closed.
- ORCH-000194: zero-browser ACQUIRE → PREPARE → PROVEN_NOT_SENT → RELEASE capability accepted.
- ORCH-000198: current manual-to-Codex inbound path plus direct Codex→GitHub terminal publication accepted.
- ORCH-000199: supported direct non-interactive `codex exec` capability accepted.
- ORCH-000200: one-shot ChatGPT-authenticated child `codex exec` invocation and correlated exit/output accepted.

## Current legal next boundary

The next bounded milestone is ORCH-000201: source/test implementation of the governed direct-Codex adapter against the accepted source layout.

Implementation alone will not authorize unattended production use; a separate live qualification is required afterward.

For exact current state use `docs/CURRENT_STATE.md`.

## Protected boundary

AFFOTECH System V2 Hybrid, AFFOTECH relay, ports `9222/9223`, Drive/business/private data, deployments, tenant resources, and protected project boundaries remain unauthorized absent explicit later authority.
