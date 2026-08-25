# AFFOTECH Agent Orchestrator Evidence

This private repository is the machine-authoritative control/evidence plane for `affotech-agent-orchestrator`.

Immutable prompts, dispatches, Architect decisions, Executor terminals, worker delivery records, mutation-lease records, source snapshots, manifests, and current pointers are the durable project authority. Human-readable documentation is a projection of that evidence and never overrides it.

## Current project direction

The Orchestrator is a **deterministic messenger, not an AI agent**.

AI reasoning belongs to the governed roles:

- **Architect** — THINK / GOVERN / VERIFY / DECIDE.
- **Executor** — DO bounded implementation, validation, runtime and transport work.
- **Documentation Curator** — maintain human-readable documentation when explicitly used.
- **Orchestrator** — carry exact messages, observe durable results, suppress duplicates, and wake the next governed role. It must not decide acceptance, reinterpret prompts, or derive authority from assistant response text.

Target operational shape:

```text
Rony
  ↕
Architect AI (registered browser, port 9333)
  ↓ bounded durable dispatch
Local deterministic Orchestrator daemon
  ↓ exact opaque delivery
Executor AI (registered browser, port 9444)
  ↓ durable terminal/result
Local Orchestrator
  ↓ wake/notify only
Architect AI
```

The current qualified implementation is still Node/JavaScript launched as an independent local process from PowerShell. A small Python daemon is a preferred future simplification/packaging option after the transport contract is proven; no Python migration is currently accepted or deployed.

## Current accepted source

- Accepted source publication: `GH-PUB-130-PROVEN-NOT-SENT-DELIVERY-RECONCILIATION-CONTRACT-REPAIR-READY-000001`
- Source files: `101`
- Sharded full tests: `813 passed / 0 failed`
- Worker relay: `148`
- BrowserRelay transport ports: `21`
- Persistent host runner: `36`
- GitHub runtime ports: `40`
- Manifest SHA-256: `0f8916a74a1275be90f2ff1a10704f8f9c79793e1a63d8da81c7906e318ee5ad`
- Archive SHA-256: `79c36abd1ea108003baa737550210a71008a9a70a887c9a14c04aa533235f103`

## Latest operational state

- ORCH-000137 proved that delivery `WORKER-DELIVERY-EXECUTOR-000007` was durably written and read back before any BrowserRelay contact, but the live attempt stopped at `PRE_SEND_OBSERVATION / WORKER_PRE_SEND_OBSERVATION_FAILED` before any send.
- ORCH-000138 has now published an Executor reconciliation reporting `PROVEN_NOT_SENT`, exact probe occurrence count `0`, the delivery reconciled to `PROVEN_NOT_SENT`, and the associated lease reconciled to `EXPIRED`.
- ORCH-000138 still requires Architect review/acceptance; its Executor terminal is evidence, not acceptance.
- `LATEST_DELIVERY` remains `WORKER-DELIVERY-EXECUTOR-000004 / SENT`; delivery `000007` was not advanced as sent.

## Governing entrypoints

- [`governance/ORCHESTRATOR_BOOTSTRAP.md`](governance/ORCHESTRATOR_BOOTSTRAP.md) — reusable governed-project kernel.
- [`governance/PROJECT_ORCHESTRATION_POLICY.md`](governance/PROJECT_ORCHESTRATION_POLICY.md) — project-specific authority and protected-boundary policy.

## Human-readable documentation

- [`docs/CURRENT_STATE.md`](docs/CURRENT_STATE.md)
- [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md)
- [`docs/PROJECT_HISTORY.md`](docs/PROJECT_HISTORY.md)
- [`docs/DECISIONS.md`](docs/DECISIONS.md)
- [`docs/BUGS_AND_LESSONS.md`](docs/BUGS_AND_LESSONS.md)

## Protected boundary

AFFOTECH System V2 Hybrid, the existing AFFOTECH relay, ports `9222/9223`, Drive/business/private data, deployments, and tenant resources remain separate and unauthorized unless Rony explicitly authorizes a later integration milestone.
