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

Documentation impact is decided by `governance/ARCHITECT_DOCUMENTATION_SEMANTIC_TEST.md`, not by milestone status or intuition. For `STATE`/`FULL`, only documents that fail the per-document semantic test are updated/read back before the next mutating implementation dispatch.

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

ORCH-000184 remains **ACCEPTED** and established the permanent caller contract: mutation-lease index entries are reduced locator/projection records, while expiry reconciliation requires the hydrated full immutable `MUTATION_LEASE` revision when `validateMutationLease`-compatible input is expected.

ORCH-000185 then hydrated and validated the full epoch-189 immutable revision and invoked accepted `reconcileExpiredMutationLease` exactly once. The call still returned:

`DENIED / EXPIRED_LEASE_RECONCILIATION_PROJECTION_INVALID`

before the first external write. Durable state remains unchanged: revision `000002` absent; index revision `377`; `nextLeaseEpoch=190`; one expired epoch-189 lease indexed ACTIVE; latest delivery `000013/SENT`; Architect trigger `000005/SENT`; protected side effects zero.

Architect decision:

`GH-DEC-185-FULL-IMMUTABLE-RECONCILIATION-PREMUTATION-DENIAL-BLOCKED`

The ORCH-000184 full-record contract is still valid, but it was not the entire cause. Another reconciliation attempt is not authorized yet.

The next legal action is a read-only ORCH-000186 diagnostic comparing the successful/pure preflight semantics with the actual reconciliation invocation field-for-field, including time/releaser/previous-record/index bindings and async Promise/await/error serialization behavior.

For detailed live state and exact next authority, use `docs/CURRENT_STATE.md`.

## Current adopted future idea

`IDEA-0001 — Deterministic Architect documentation-closure marker` remains `ADOPTED_FOR_FUTURE`. It is deferred until core unattended transport reaches production-candidate qualification and creates no implementation authority today.

## Protected boundary

AFFOTECH System V2 Hybrid, AFFOTECH relay, ports `9222/9223`, Drive/business/private data, deployments, tenant resources, and protected project boundaries remain unauthorized absent explicit later authority.
