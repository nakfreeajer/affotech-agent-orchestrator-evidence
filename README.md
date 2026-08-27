# AFFOTECH Agent Orchestrator Evidence

This repository is the machine-authoritative control/evidence plane for `affotech-agent-orchestrator`. Immutable prompts, dispatches, Architect decisions, Executor terminals, delivery/trigger records, source snapshots/manifests, and current pointers are durable authority. Human-readable documentation is maintained directly by Architect and never overrides machine evidence.

## Active model

The Orchestrator is a **deterministic messenger, not an AI agent**.

```text
Rony (final human authority)
  ↕
Architect AI — govern / verify / decide / document — port 9333
  ↓ durable dispatch
Persistent deterministic Orchestrator
  ↓ exact governed delivery
Executor AI — bounded work — port 9444
  ↓ durable terminal
Persistent deterministic Orchestrator
  ↓ exact one-way wake
Architect AI
```

Curator is not an active required role. Documentation policy is `ARCHITECT_DIRECT`.

## Current accepted source

`GH-PUB-165-WORKER-DELIVERY-LEGACY-LINEAGE-HYDRATION-REPAIR-READY-000001`

Decision: `GH-DEC-165-WORKER-DELIVERY-LEGACY-LINEAGE-HYDRATION-REPAIR-ACCEPTED`.

Qualification: 101 files; focused `65/65`; GitHub runtime ports `43/43`; BrowserRelay transport ports `22/22`; full deterministic suite `817/817`; manifest `3a5f046056cf1b94b6ec1685d3c18b754625727eb296f3a07df298f9732abf28`; archive `e07ef7e0775de6e500568d3e813800a2750c5b4e0e56befb676ce3d259cd80ba`.

ORCH-000165 added fail-closed compatibility for legacy worker-delivery results without rewriting historical evidence and makes future results persist explicit message/dispatch lineage.

## Proven transport legs

- ORCH-000153: `WORKER-DELIVERY-EXECUTOR-000013 / SENT` exactly once; duplicate additional send `0`.
- ORCH-000163: `ARCH-TRIGGER-9333-000005 / SENT`; attempted/confirmed `1/1`; second send `0`; no assistant-response scraping.

## Persistent host — ORCH-000166 ACCEPTED

Decision: `GH-DEC-166-UNATTENDED-AUTOMATIC-HOST-000026-ARMED-ACCEPTED`.

Host `HOST-INSTANCE-SANDBOX-000026 / HOST-GEN-SANDBOX-000026` started with exactly one OS process-creation attempt, established `DISPATCH-000166` as an already-handled bootstrap watermark, completed three valid idle polling iterations, suppressed the bootstrap dispatch on all three, performed zero browser/delivery/trigger/lease activity, remained alive at terminal publication as PID `16880`, and was intentionally left running.

The next dispatch must therefore be published by Architect into GitHub and picked up by the running host automatically. Manual forwarding is no longer the expected path.

## Next objective

ORCH-000167 is the first full unattended-cycle probe:

`new Architect dispatch → host automatic Executor delivery exactly once → Executor no-op durable terminal → host automatic Architect wake exactly once`.

No source, AFFOTECH, Drive, deployment, tenant, or business/private-data mutation is part of that probe.

## Governing entrypoints

- `governance/ORCHESTRATOR_BOOTSTRAP.md`
- `governance/PROJECT_ORCHESTRATION_POLICY.md`
- `governance/PROJECT_MEMORY_EVENT_LEDGER_POLICY.md`
- `docs/CURRENT_STATE.md`
- `docs/ARCHITECTURE.md`
- `docs/DECISIONS.md`
- `docs/PROJECT_HISTORY.md`
- `docs/BUGS_AND_LESSONS.md`

## Protected boundary

AFFOTECH System V2 Hybrid, the existing AFFOTECH relay, ports `9222/9223`, Drive/business/private data, deployments, and tenant resources remain separate and unauthorized unless Rony explicitly authorizes a later integration milestone.
