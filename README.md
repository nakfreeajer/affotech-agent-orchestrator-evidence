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
- ORCH-000166 accepted persistent host `HOST-INSTANCE-SANDBOX-000026 / HOST-GEN-SANDBOX-000026` after one start, three valid idle polls, self-echo suppression, zero transport side effects, and liveness at publication.
- ORCH-000167 proved the persistent host automatically detects a strictly newer Architect dispatch without manual forwarding.

## ORCH-000167 / ORCH-000168 finding

The first unattended full-cycle probe stopped before browser contact with `WORKER_DELIVERY_INTENT_PREPARATION_REQUIRED`. Delivery `000014` was never created and no browser send occurred.

ORCH-000168 was accepted as a read-only diagnostic under:

`GH-DEC-168-WORKER-DELIVERY-INTENT-PREPARATION-COMPOSITION-DIAGNOSTIC-ACCEPTED`

It proved the accepted source already contains the automatic call chain:

`observe dispatch → derive/acquire worker-delivery lease → HOST_DELIVERY_READY → persistent runner calls prepareWorkerDeliveryIntent → require durable PREPARED intent → sendWorkerDelivery`.

The defect is therefore the **effective disposable host-000026 preparation/persistence composition**, not a missing action in the accepted state machine. The launcher bound the method statically, but its injected persistence seam failed to return a durably read-back `PREPARED` intent. The runner then released/reconciled safely before any send.

The worker-delivery lease is action-derived by the accepted host contract; dispatch booleans that said otherwise were metadata-inconsistent and must not be used to weaken the lease boundary.

Host `000026` remained running as PID `16880` after the diagnostic and is not a safe candidate for further mutation without explicit replacement authority.

## Current next — ORCH-000169

`DISPATCH-000169` is a bounded composition-only recovery. It must:

1. verify and safely stop only host `000026`;
2. repair only disposable untracked host-launcher/persistence wiring;
3. prove one real durable worker-delivery intent (`000014`) reaches `PREPARED` with **zero browser contact/send**;
4. reconcile that preflight delivery to `PROVEN_NOT_SENT` and leave `LATEST_DELIVERY` at `000013/SENT`;
5. start fresh host `000027` exactly once using the same corrected composition;
6. complete at least two valid idle polls and leave host `000027` running.

Tracked source changes are prohibited. If composition-only repair cannot satisfy the accepted preparation contract, Executor must stop with `SOURCE_CONTRACT_REPAIR_REQUIRED` rather than patching source opportunistically.

## Protected boundary

AFFOTECH System V2 Hybrid, the existing AFFOTECH relay, ports `9222/9223`, Drive/business/private data, deployments, and tenant resources remain separate and unauthorized unless Rony explicitly authorizes a later integration milestone.
