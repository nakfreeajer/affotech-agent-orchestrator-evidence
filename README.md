# AFFOTECH Agent Orchestrator Evidence

This repository is the machine-authoritative control/evidence plane for `affotech-agent-orchestrator`. Durable prompts, dispatches, Architect decisions, Executor terminals, transport records, host/lease state, source snapshots, and current pointers are authority. Human-readable documentation is maintained directly by Architect and never overrides machine evidence.

## Active authority model

The currently **proven** execution path is:

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

The remaining automation gap is the inbound edge: an unattended persistent-Orchestrator → Codex invocation mechanism is not yet proven.

### Critical identity rule

Never collapse these identities:

`Executor role ≠ Codex runtime ≠ BrowserRelay transport ≠ browser conversation ≠ CDP/relay port`

Historical evidence contains `WORKER-REG-EXECUTOR-000001`, an ACTIVE registration associated with a ChatGPT conversation and port `9444`. ORCH-000198 accepted that this is historical/legacy control-plane evidence relative to the proven current manual Codex path. It does **not** prove that Codex itself is browser-based, listens on `9444`, or requires BrowserRelay today.

Before any transport repair/restart/restoration/retry, first prove the current runtime, intended transport, endpoint owner, continued necessity, and exact runtime↔transport binding.

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

Accepted source has not changed through ORCH-000198.

## Proven foundations

- ORCH-000153: exactly-once historical BrowserRelay forward delivery `WORKER-DELIVERY-EXECUTOR-000013/SENT`.
- ORCH-000163: exactly-once Architect wake `ARCH-TRIGGER-9333-000005/SENT`.
- ORCH-000193: epoch-189 expired worker lease recovery closed.
- ORCH-000194: zero-browser ACQUIRE → PREPARE → PROVEN_NOT_SENT → RELEASE capability accepted.
- ORCH-000198: current manual-to-Codex inbound path plus direct Codex→GitHub terminal publication accepted.

## ORCH-000198 accepted topology

Decision:

`GH-DEC-198-CODEX-DIRECT-MANUAL-TOPOLOGY-ACCEPTED`

Accepted facts:

- current Executor runtime: Codex terminal/runtime in VS Code;
- current inbound: manual user locator/message;
- current outbound: direct Codex GitHub evidence publication;
- persistent automatic Codex bridge: not proven;
- historical BrowserRelay `9444`: legacy relative to this proven current path;
- delivery `000015`: absent and not authorized for retry;
- lease state: index `382`, next epoch `192`, zero active leases.

## Current legal next boundary

The next bounded technical step is read-only discovery of the **direct non-interactive Codex invocation contract** available on the installed runtime.

The investigation must determine whether the persistent Orchestrator can safely invoke Codex directly, how input/workdir/model/auth/result semantics work, and what smallest live qualification would be required.

It must not invoke a second model run merely to test discovery, restore BrowserRelay, mutate the historical registration, acquire a worker-delivery lease, retry delivery `000015`, or touch AFFOTECH/Drive.

For exact current state use `docs/CURRENT_STATE.md`.

## Protected boundary

AFFOTECH System V2 Hybrid, AFFOTECH relay, ports `9222/9223`, Drive/business/private data, deployments, tenant resources, and protected project boundaries remain unauthorized absent explicit later authority.
