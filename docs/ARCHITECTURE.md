Project: affotech-agent-orchestrator
Documentation sync boundary: through ORCH-000187 Architect review
Status: CURRENT HUMAN-READABLE PROJECTION
Machine authority: durable GitHub evidence and Architect decisions

# Architecture

## 1. Core purpose

AFFOTECH Agent Orchestrator is a governed deterministic message-routing and durable-state layer. AI roles think; the Orchestrator carries exact governed envelopes and observes durable state. It does not approve work, interpret business semantics, scrape assistant decisions, or synthesize authority from browser text.

## 2. Active topology

```text
Rony — final human authority
  ↕
Architect 9333 — think / govern / verify / decide / document / preserve future intent
  ↓ durable dispatch
Persistent deterministic Orchestrator — independent control-plane service
  ↓ exact lease + durable worker intent + exact delivery
Executor 9444 — bounded work
  ↓ durable terminal
Persistent deterministic Orchestrator
  ↓ durable Architect trigger + exact wake
Architect 9333
```

Curator is not part of the active model. Historical Curator evidence remains history only.

## 3. Knowledge-plane separation

```text
CURRENT_STATE = what is true/current now
ARCHITECTURE  = accepted system design/contracts
IDEA_INBOX    = useful future concepts that may be built later
ROADMAP       = adopted/scheduled intended future work
DISPATCH      = what is authorized to execute now
```

Idea/roadmap entries create zero implementation authority.

## 4. Accepted source

`GH-PUB-165-WORKER-DELIVERY-LEGACY-LINEAGE-HYDRATION-REPAIR-READY-000001`

Qualification: 101 files; focused `65/65`; GitHub runtime ports `43/43`; BrowserRelay transport ports `22/22`; full deterministic `817/817`.

## 5. Worker-delivery chain

Accepted target order:

`observe dispatch → acquire WORKER_DELIVERY lease → construct transient action-specific authorization → prepareWorkerDeliveryIntent → durable PREPARED intent/readback → send/reconcile result → release/reconcile lease`

Known qualification composition requirements include explicit `workerDeliveryId=WORKER-DELIVERY-EXECUTOR-000014` and transient `actionKind=WORKER_DELIVERY` while leaving the durable lease record unchanged.

## 6. Mutation-lease index vs immutable lease contract

The mutation-lease index and immutable mutation-lease records are different representations.

The `activeLeases` entry in the index is a reduced locator/projection. The immutable revision under:

`evidence/host-runtime/mutation-leases/<leaseId>/revisions/<revision>.json`

is the complete canonical `MUTATION_LEASE` record.

Permanent caller rule accepted at ORCH-000184:

> When validation/projection/reconciliation requires a complete lease, use the index entry only to locate the canonical immutable revision, verify identity/revision/hash/lineage/scope/envelope binding, and pass the full immutable record. A reduced index entry must not substitute for the immutable record.

## 7. Proven expired-lease reconciliation caller contract

ORCH-000187 adds a durable, reusable recovery contract on top of ORCH-000184.

A mutation-disabled reproduction proved the accepted reconciliation runtime succeeds through validation and expiry projection when called with one object containing:

- `lease`: the full immutable current revision;
- `reconciliationBinding`: the exact identity/holder/message/dispatch/milestone/scope/envelope binding expected by the accepted runtime;
- `nowMs`: an integer current time.

For epoch 189, the captured lease argument semantically equaled immutable revision `000001` and had SHA-256:

`320a5ba0e85ac77a5c0f6f6314b9d32d7aafb08b676688d316b4918fd2d83069`

The accepted runtime then:

1. validated the full immutable lease;
2. constructed a valid `leaseRevision=2 / state=EXPIRED` projection;
3. awaited the reconciliation path correctly; and
4. reached the first external mutation boundary: creation of immutable revision `000002`.

Therefore accepted source is not shown to require a patch for this recovery path.

A future real reconciliation retry must preserve this proven caller shape and bounded observability around caller input, projector output, awaited resolution/rejection, first external mutation, and durable readback.

## 8. Historical-causation boundary

The historical ORCH-000185 launcher no longer exists. Durable evidence is insufficient to prove its exact caller arguments field-by-field.

Permanent rule:

> Do not convert a successful corrected reproduction into an invented historical root cause. Preserve the distinction between what the corrected caller proves and what the missing historical launcher prevents us from proving.

The accepted conclusion is that the corrected caller shape works through projection; the exact ORCH-000185 mismatch remains unproven.

## 9. Expired-lease recovery invariant

An expired indexed lease must be reconciled/closed before any new conflicting worker-delivery lease or preparation is allowed.

A bounded recovery caller must:

1. read the reduced index entry;
2. hydrate the exact immutable current revision;
3. verify exact immutable/index/authority binding;
4. use the ORCH-000187-proven caller shape;
5. preserve caller/projector/await mutation-boundary observability;
6. invoke real reconciliation at most once under explicit authority; and
7. determine outcome from durable revision/index readback, not stdout alone.

If result or completion is ambiguous, no blind retry is allowed.

## 10. Documentation governance

Architect directly owns canonical human-readable documentation. `documentationImpact=NONE|STATE|FULL` is decided under `governance/ARCHITECT_DOCUMENTATION_SEMANTIC_TEST.md`; future intent is separately classified `NONE|CAPTURE|PROMOTE`.

ORCH-000187 is `documentationImpact=FULL` because it established a reusable caller/observability contract and permanent historical-causation boundary.

## 11. Protected boundaries

Architect session `9333`; Executor session `9444`; AFFOTECH protected ports `9222/9223`. AFFOTECH source/worktrees, relay, Drive, Apps Script, tenant resources, deployments, and business/private data remain unauthorized absent explicit Rony authority.
