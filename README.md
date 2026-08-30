# AFFOTECH Agent Orchestrator Evidence

This repository is the machine-authoritative control/evidence plane for `affotech-agent-orchestrator`. Durable prompts, dispatches, Architect decisions, Executor terminals, transport records, host/lease state, source snapshots, and current pointers are authority. Human-readable documentation is maintained directly by Architect and never overrides machine evidence.

## Active model

```text
Rony (final human authority)
  ↕
Architect AI — think / govern / verify / decide / document / preserve future intent — port 9333
  ↓ durable authority/dispatch
Persistent deterministic Orchestrator — independent control-plane service
  ↓ exact lease + durable intent + exact delivery
Executor AI — bounded work — port 9444
  ↓ durable terminal
Persistent deterministic Orchestrator
  ↓ durable trigger + exact wake
Architect AI
```

There is **no active Curator role**. Historical Curator evidence remains valid history, but no Curator terminal, relay, cursor, browser session, or approval hop is required.

## Documentation and future-idea continuity

Architect independently classifies after every review/material Rony directive:

```text
documentationImpact = NONE | STATE | FULL
futureIdeaImpact    = NONE | CAPTURE | PROMOTE
```

Documentation impact is decided by the mandatory fixed procedure in `governance/ARCHITECT_DOCUMENTATION_SEMANTIC_TEST.md`, not by milestone status or intuition. For `STATE`/`FULL`, only documents that fail the per-document semantic test are updated/read back before the next mutating implementation dispatch.

Future ideas are preserved separately through `docs/IDEA_INBOX.md` and `docs/ROADMAP.md`; they create zero implementation authority.

Canonical governance:

- `governance/ORCHESTRATOR_BOOTSTRAP.md` v1.3
- `governance/PROJECT_ORCHESTRATION_POLICY.md` v1.4
- `governance/ARCHITECT_DOCUMENTATION_SEMANTIC_TEST.md` v1.0
- `governance/PROJECT_MEMORY_EVENT_LEDGER_POLICY.md` v1.4

## Current accepted source

`GH-PUB-165-WORKER-DELIVERY-LEGACY-LINEAGE-HYDRATION-REPAIR-READY-000001`

Qualification: 101 files; focused `65/65`; GitHub runtime ports `43/43`; BrowserRelay transport ports `22/22`; full deterministic `817/817`.

## Proven foundations

- ORCH-000153: exactly-once Executor forward delivery `WORKER-DELIVERY-EXECUTOR-000013/SENT`.
- ORCH-000163: exactly-once Architect wake `ARCH-TRIGGER-9333-000005/SENT`.
- ORCH-000166: persistent host `000026` safely armed/idle.
- ORCH-000167: persistent host automatically detected a newer Architect dispatch.
- ORCH-000173: an expired worker-delivery lease was successfully reconciled using bounded request-level instrumentation.
- ORCH-000177/178: HTTP semantic status handling and accepted lease acquire/release were proven.
- ORCH-000179: preparation was reached and proved transient `actionKind=WORKER_DELIVERY` is required.

## ORCH-000182 — BLOCKED after independent no-effect reconciliation

ORCH-000182 made exactly one authorized `reconcileExpiredMutationLease` call, but its disposable launcher produced no observable completion output. Executor published `INCONCLUSIVE`.

Architect independently reconciled the durable GitHub namespace and proved the attempted recovery produced **no durable side effect**:

- target lease remains `MUTATION-LEASE-HOST-8af1857f183a9d267184b29c1a5eb1e0 / epoch 189 / revision 1`;
- revision `000002` remains absent;
- lease index remains revision `377`;
- `nextLeaseEpoch=190`;
- exactly one ACTIVE indexed lease remains;
- latest delivery remains `WORKER-DELIVERY-EXECUTOR-000013/SENT`;
- latest Architect trigger remains `ARCH-TRIGGER-9333-000005/SENT`;
- browser/host/source/protected-resource side effects remain zero.

Architect decision:

`GH-DEC-182-EXPIRED-WORKER-LEASE-RECONCILIATION-NO-DURABLE-EFFECT-BLOCKED`

This is not permission for blind retry. The prior mutation effect was first proven absent read-only. The next legal recovery is one new instrumented reconciliation attempt using the already successful ORCH-000173 request-trace pattern and durable readback as authority, not stdout.

## Current adopted future idea

`IDEA-0001 — Deterministic Architect documentation-closure marker` is `ADOPTED_FOR_FUTURE`. It is deferred until the core unattended transport reaches production-candidate qualification and creates no implementation authority today.

## Protected boundary

AFFOTECH System V2 Hybrid, AFFOTECH relay, ports `9222/9223`, Drive/business/private data, deployments, tenant resources, and protected project boundaries remain unauthorized absent explicit later authority.
