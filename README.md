# AFFOTECH Agent Orchestrator Evidence

This repository is the machine-authoritative control/evidence plane for `affotech-agent-orchestrator`. Immutable prompts, dispatches, Architect decisions, Executor terminals, delivery/trigger records, source snapshots/manifests, host events, and current pointers are durable authority. Human-readable documentation is maintained directly by Architect and never overrides machine evidence.

## Active model

The Orchestrator is a **deterministic messenger, not an AI agent**.

```text
Rony (final human authority)
  ↕
Architect AI — govern / verify / decide / document — port 9333
  ↓ durable dispatch
Persistent deterministic Orchestrator
  ↓ durable intent + exact governed delivery
Executor AI — bounded work — port 9444
  ↓ durable terminal
Persistent deterministic Orchestrator
  ↓ durable trigger + exact wake
Architect AI
```

Documentation policy is `ARCHITECT_DIRECT`; Curator is not an active required role.

## Current accepted source

`GH-PUB-165-WORKER-DELIVERY-LEGACY-LINEAGE-HYDRATION-REPAIR-READY-000001`

Decision: `GH-DEC-165-WORKER-DELIVERY-LEGACY-LINEAGE-HYDRATION-REPAIR-ACCEPTED`.

Qualification: 101 files; focused `65/65`; GitHub runtime ports `43/43`; BrowserRelay transport ports `22/22`; full deterministic `817/817`.

## Proven foundations

- ORCH-000153 proved exactly-once forward delivery: `WORKER-DELIVERY-EXECUTOR-000013 / SENT`.
- ORCH-000163 proved exactly-once Architect wake: `ARCH-TRIGGER-9333-000005 / SENT`.
- ORCH-000166 accepted persistent host `000026` after safe idle qualification.
- ORCH-000167 proved a persistent host can automatically detect a strictly newer Architect dispatch without manual forwarding.
- ORCH-000168 proved the accepted source already calls `prepareWorkerDeliveryIntent`; the immediate failure was the effective injected persistence/composition seam, not a missing state-machine action.

## ORCH-000169 — BLOCKED before durable preparation

Architect decision:

`GH-DEC-169-PREPARATION-PREFLIGHT-AND-LEASE-AMBIGUITY-BLOCKED`

The composition-only recovery corrected the disposable GitHub-backed adapter enough to reach the real accepted preparation method, but the call still returned:

- `FAILED_BEFORE_SEND`;
- `durableRecorded=false`;
- delivery `WORKER-DELIVERY-EXECUTOR-000014` intent/result absent;
- browser contact/send `0/0`.

Host `000026` was already absent. Fresh host `000027` identity was created and one launch attempt occurred, but the process did not remain running and completed zero idle polls. It is **not an accepted or armed host**.

The preflight worker-delivery lease also expired during cleanup. Its exact expiry reconciliation became ambiguous with `EXPIRED_LEASE_RECONCILIATION_RECORD_AMBIGUOUS`, and the lease remains indexed `ACTIVE` even though it is expired. No new mutation is authorized while that ambiguity remains unresolved.

Current transport baseline therefore remains:

- `LATEST_DELIVERY = WORKER-DELIVERY-EXECUTOR-000013 / SENT`;
- `LATEST_ARCHITECT_TRIGGER = ARCH-TRIGGER-9333-000005 / SENT`;
- delivery `000014` absent;
- trigger `000006` absent;
- no running accepted replacement host.

## Current next — ORCH-000170

`DISPATCH-000170` is a manual **read-only diagnostic**. It must independently determine:

1. the exact lower-level reason the accepted preparation path still failed to create/read back a durable intent under host-000027 composition; and
2. why the exact expired ORCH-000169 lease reconciliation became ambiguous and what single later mutation, if any, can close it safely.

ORCH-000170 authorizes no host/process mutation, no source patch, no browser contact, no delivery/trigger mutation, and no lease/index/reconciliation mutation.

## Protected boundary

AFFOTECH System V2 Hybrid, the existing AFFOTECH relay, ports `9222/9223`, Drive/business/private data, deployments, and tenant resources remain separate and unauthorized unless Rony explicitly authorizes a later integration milestone.
