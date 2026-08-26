# AFFOTECH Agent Orchestrator Evidence

This private repository is the machine-authoritative control/evidence plane for `affotech-agent-orchestrator`.

Immutable prompts, dispatches, Architect decisions, Executor terminals, worker delivery records, mutation-lease records, Architect trigger records, source snapshots/manifests, and current pointers are the durable project authority. Human-readable documentation is an Architect-maintained projection of that evidence and never overrides it.

## Current project direction

The Orchestrator is a **deterministic messenger, not an AI agent**.

Active governed roles:

- **Rony** — final human authority.
- **Architect** — THINK / GOVERN / VERIFY / DECIDE, and directly maintain all relevant project documentation.
- **Executor** — DO bounded implementation, validation, runtime and transport work.
- **Orchestrator** — carry exact messages, observe durable results, suppress duplicates, and wake the Architect. It must not decide acceptance, reinterpret prompts, or derive authority from assistant response text.

A separate Documentation Curator is not part of the current normal project workflow. Historical Curator evidence remains valid, but documentation is now Architect-owned unless Rony explicitly changes that policy later.

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
  ↓ exact one-way wake
Architect AI
```

## Current accepted source

Accepted source remains:

`GH-PUB-130-PROVEN-NOT-SENT-DELIVERY-RECONCILIATION-CONTRACT-REPAIR-READY-000001`

Qualification:

- source files: `101`
- sharded full tests: `813 passed / 0 failed`
- worker relay: `148`
- BrowserRelay transport ports: `21`
- persistent host runner: `36`
- GitHub runtime ports: `40`
- manifest SHA-256: `0f8916a74a1275be90f2ff1a10704f8f9c79793e1a63d8da81c7906e318ee5ad`
- archive SHA-256: `79c36abd1ea108003baa737550210a71008a9a70a887c9a14c04aa533235f103`

Later ORCH-000131 through ORCH-000163 work qualified/reconciled live runtime transport and did not advance accepted source.

## Latest accepted operational state

ORCH-000163 is Architect-accepted under:

`GH-DEC-163-AUTOMATIC-ARCHITECT-DOORBELL-TRIGGER-000005-ACCEPTED`

It proved the automatic Executor-result → Architect wake path exactly once:

- Architect trigger: `ARCH-TRIGGER-9333-000005`
- trigger state: `SENT`
- payload: exact `verify & next`
- USER message boundary: `2 → 3`
- matching payload count: `1 → 2`
- attempted/confirmed send: `1/1`
- second send: `0`
- duplicate replay additional sends: `0`
- retry: `false`
- reconciliation required: `false`
- assistant response text/DOM read: `false`
- source/test/config/AFFOTECH/Drive/deployment/protected-port mutations: `0`

This is the first fully confirmed automatic Architect doorbell in the current operational chain.

Previously, ORCH-000153 proved fresh forward delivery to Executor with delivery `WORKER-DELIVERY-EXECUTOR-000013 / SENT`. ORCH-000154 through ORCH-000162 hardened/repaired the dedicated Brave Architect relay on port `9333`, resolved historical trigger ambiguity, and prepared the exact fresh trigger that ORCH-000163 successfully sent.

## Documentation ownership

Project documentation policy is now `ARCHITECT_DIRECT`.

After an accepted milestone or material Rony directive, Architect directly updates every human-readable project document whose truth materially changed. Do not create a Curator relay milestone merely to keep documentation current.

## Governing entrypoints

- `governance/ORCHESTRATOR_BOOTSTRAP.md` — reusable governed-project kernel.
- `governance/PROJECT_ORCHESTRATION_POLICY.md` — project-specific authority, role, documentation and protected-boundary policy.
- `governance/PROJECT_MEMORY_EVENT_LEDGER_POLICY.md` — project-memory and Architect-direct documentation projection policy.

## Human-readable documentation

- `docs/CURRENT_STATE.md`
- `docs/ARCHITECTURE.md`
- `docs/PROJECT_HISTORY.md`
- `docs/DECISIONS.md`
- `docs/BUGS_AND_LESSONS.md`

## Protected boundary

AFFOTECH System V2 Hybrid, the existing AFFOTECH relay, ports `9222/9223`, Drive/business/private data, deployments, and tenant resources remain separate and unauthorized unless Rony explicitly authorizes a later integration milestone.
