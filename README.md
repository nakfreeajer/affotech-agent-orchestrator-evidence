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

Accepted source is now:

`GH-PUB-165-WORKER-DELIVERY-LEGACY-LINEAGE-HYDRATION-REPAIR-READY-000001`

Architect decision:

`GH-DEC-165-WORKER-DELIVERY-LEGACY-LINEAGE-HYDRATION-REPAIR-ACCEPTED`

Qualification:

- source files: `101`
- focused tests: `65/65`
- full deterministic suite: `817/817`
- GitHub runtime ports: `43/43`
- BrowserRelay transport ports: `22/22`
- manifest SHA-256: `3a5f046056cf1b94b6ec1685d3c18b754625727eb296f3a07df298f9732abf28`
- archive SHA-256: `e07ef7e0775de6e500568d3e813800a2750c5b4e0e56befb676ce3d259cd80ba`

ORCH-000165 repaired the exact compatibility seam exposed by the first unattended-host bootstrap. Legacy worker-delivery results that omit explicit message/dispatch lineage may hydrate only through an exact immutable intent binding; explicit conflicts still fail closed. Future results persist explicit `messageId` and `dispatchId`. Historical delivery `000013` was not rewritten.

## Proven transport legs

ORCH-000153 proved fresh exactly-once Executor delivery with `WORKER-DELIVERY-EXECUTOR-000013 / SENT` and duplicate additional send `0`.

ORCH-000163 proved the automatic Architect doorbell with `ARCH-TRIGGER-9333-000005 / SENT`, USER boundary `2→3`, attempted/confirmed `1/1`, second send `0`, and no assistant-response scraping.

## Unattended-cycle status

ORCH-000164 attempted the first persistent-host bootstrap. Its self-echo boundary worked, but the host failed closed before browser contact because the prior accepted reader required explicit result lineage fields that historical delivery `000013` did not contain. Browser sends, delivery/trigger mutations, and leases remained zero; the partial host was stopped.

ORCH-000165 is the accepted source repair for that defect.

Current canonical next milestone is ORCH-000166 / DISPATCH-000166 using fresh host:

`HOST-INSTANCE-SANDBOX-000026 / HOST-GEN-SANDBOX-000026`

It must perform a read-only compatibility probe first, create exactly one OS host process, mark `DISPATCH-000166` already handled, complete at least two valid idle polls with zero browser contact/send, and leave the host running. If accepted, the next Architect dispatch must be picked up automatically rather than manually relayed.

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
