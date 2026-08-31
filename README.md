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

Documentation impact is decided by the mandatory procedure in `governance/ARCHITECT_DOCUMENTATION_SEMANTIC_TEST.md`, not by milestone status or intuition. For `STATE`/`FULL`, only documents that fail the per-document semantic test are updated/read back before the next mutating implementation dispatch.

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
- ORCH-000166/167: persistent-host idle/bootstrap and automatic newer-dispatch observation.
- ORCH-000173: expired worker-delivery lease reconciliation succeeded using the full immutable lease record plus bounded request-level instrumentation.
- ORCH-000177/178: HTTP semantic-status handling and accepted lease acquire/release were proven.
- ORCH-000179: preparation was reached and proved transient `actionKind=WORKER_DELIVERY` is required.

## Current recovery summary

ORCH-000184 is **ACCEPTED** as a read-only root-cause diagnostic.

It proved the epoch-189 lease itself is valid and accepted reconciliation source does not require a patch. The ORCH-000183 caller passed the reduced `activeLeases` index entry where the reconciliation projection requires a full immutable `MUTATION_LEASE` revision. The reduced entry therefore failed `validateMutationLease` with `RECORD_FIELDS_INVALID` before an EXPIRED revision could be constructed.

Permanent caller contract:

> Mutation-lease index entries are locator/projection records. When expiry reconciliation requires a `validateMutationLease`-compatible lease argument, the caller must hydrate, verify, and pass the full immutable lease revision from its canonical `recordPath` rather than the reduced index entry.

Current durable lease state remains unchanged: index revision `377`, `nextLeaseEpoch=190`, one expired epoch-189 lease indexed ACTIVE, revision `000002` absent, latest delivery `000013/SENT`, and Architect trigger `000005/SENT`.

Current Architect decision:

`GH-DEC-184-EXPIRED-LEASE-CALLER-ARGUMENT-CONTRACT-ACCEPTED`

The next legal recovery is one separately authorized corrected reconciliation attempt: hydrate and verify the exact immutable revision `000001`, prove the EXPIRED projection validates before mutation, then invoke the accepted reconciliation path exactly once and determine outcome from durable revision/index readback.

For detailed live state and exact next authority, use `docs/CURRENT_STATE.md`.

## Current adopted future idea

`IDEA-0001 — Deterministic Architect documentation-closure marker` remains `ADOPTED_FOR_FUTURE`. It is deferred until core unattended transport reaches production-candidate qualification and creates no implementation authority today.

## Protected boundary

AFFOTECH System V2 Hybrid, AFFOTECH relay, ports `9222/9223`, Drive/business/private data, deployments, tenant resources, and protected project boundaries remain unauthorized absent explicit later authority.
