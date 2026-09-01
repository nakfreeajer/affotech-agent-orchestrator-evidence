Project: affotech-agent-orchestrator
Documentation sync boundary: through ORCH-000188 Architect review
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

ORCH-000187 adds a reusable recovery contract on top of ORCH-000184.

A mutation-disabled reproduction proved the accepted reconciliation runtime succeeds through validation and expiry projection when called with one object containing:

- `lease`: the full immutable current revision;
- `reconciliationBinding`: exact accepted identity/holder/message/dispatch/milestone/scope/envelope binding;
- `nowMs`: integer current time.

For epoch 189 the canonical lease SHA-256 is:

`320a5ba0e85ac77a5c0f6f6314b9d32d7aafb08b676688d316b4918fd2d83069`

The accepted runtime validated the lease, constructed a valid `leaseRevision=2 / state=EXPIRED` projection, awaited the path correctly, and reached the first external mutation boundary: creation of immutable revision `000002`.

Accepted source is not shown to require a patch for this recovery path.

## 8. Typed hash identity contract — ORCH-000188

GitHub-backed immutable records have multiple independent hash identities that must remain explicitly typed.

For an immutable JSON lease:

- **canonical semantic/content SHA-256** is the project protocol hash, computed from the parsed record using compact JSON serialization in the accepted/stored field order, equivalent to `SHA256(JSON.stringify(parsedRecord))` for the accepted runtime object;
- **Git blob SHA** is the GitHub Contents API `sha` / Git object identity and is not the project canonical SHA-256.

For epoch-189 revision `000001`:

- canonical lease SHA-256 = `320a5ba0e85ac77a5c0f6f6314b9d32d7aafb08b676688d316b4918fd2d83069`;
- Git blob SHA = `514e37fddd80cfceae87d260e73acebd34526c28`.

Permanent rule:

> Never compare a Git blob SHA directly to a project canonical SHA-256. Carry and label them as separate typed values. Use canonical SHA-256 for immutable record/index semantic binding; use Git blob SHA only where GitHub object identity/CAS semantics require it.

ORCH-000188 falsely reported lease drift because those namespaces were conflated. The failure happened before mutation, so no recovery call was consumed and accepted source remains unchanged.

## 9. Historical-causation boundary

The historical ORCH-000185 launcher no longer exists. Durable evidence is insufficient to prove its exact caller arguments field-by-field.

Permanent rule:

> Do not convert a successful corrected reproduction into an invented historical root cause. Preserve the distinction between what the corrected caller proves and what missing historical evidence prevents us from proving.

## 10. Expired-lease recovery invariant

An expired indexed lease must be reconciled/closed before any new conflicting worker-delivery lease or preparation is allowed.

A bounded recovery caller must:

1. read the reduced index entry;
2. hydrate the exact immutable current revision;
3. verify canonical SHA-256 and Git blob SHA as separate typed values;
4. verify exact immutable/index/authority binding;
5. use the ORCH-000187-proven caller shape;
6. preserve caller/projector/await/request mutation-boundary observability;
7. invoke real reconciliation at most once under explicit authority; and
8. determine outcome from durable revision/index readback, not stdout alone.

If result or completion is ambiguous, no blind retry is allowed.

## 11. Documentation governance

Architect directly owns canonical human-readable documentation. `documentationImpact=NONE|STATE|FULL` is decided under `governance/ARCHITECT_DOCUMENTATION_SEMANTIC_TEST.md`; future intent is separately classified `NONE|CAPTURE|PROMOTE`.

ORCH-000188 is `documentationImpact=FULL` because it established the reusable typed-hash identity contract and countermeasure.

## 12. Protected boundaries

Architect session `9333`; Executor session `9444`; AFFOTECH protected ports `9222/9223`. AFFOTECH source/worktrees, relay, Drive, Apps Script, tenant resources, deployments, and business/private data remain unauthorized absent explicit Rony authority.
