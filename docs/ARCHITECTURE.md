Project: affotech-agent-orchestrator
Documentation sync boundary: through ORCH-000192 Architect review
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

## 3. Accepted source

`GH-PUB-165-WORKER-DELIVERY-LEGACY-LINEAGE-HYDRATION-REPAIR-READY-000001`

Qualification: 101 files; focused `65/65`; GitHub runtime ports `43/43`; BrowserRelay transport ports `22/22`; full deterministic `817/817`.

## 4. Worker-delivery chain

Accepted target order:

`observe dispatch → acquire WORKER_DELIVERY lease → construct transient action-specific authorization → prepareWorkerDeliveryIntent → durable PREPARED intent/readback → send/reconcile result → release/reconcile lease`

Known qualification composition requirements include explicit `workerDeliveryId=WORKER-DELIVERY-EXECUTOR-000014` and transient `actionKind=WORKER_DELIVERY` while leaving the durable lease record unchanged.

## 5. Mutation-lease index vs immutable lease contract

The `activeLeases` entry in the mutation-lease index is a reduced locator/projection. The immutable revision under:

`evidence/host-runtime/mutation-leases/<leaseId>/revisions/<revision>.json`

is the complete canonical `MUTATION_LEASE` record.

Permanent caller rule from ORCH-000184:

> When validation/projection/reconciliation requires a complete lease, use the index only to locate the exact immutable revision, verify identity/revision/hash/lineage/scope/envelope binding, and pass the full immutable record. A reduced index entry must not substitute for the immutable record.

## 6. Proven expired-lease reconciliation caller contract

ORCH-000187 proved under mutation-disabled stubs that accepted reconciliation succeeds through validation/projection when called with one object containing:

- `lease`: full immutable current revision;
- `reconciliationBinding`: exact accepted identity/holder/message/dispatch/milestone/scope/envelope binding;
- `nowMs`: integer current time.

For epoch 189 the canonical lease SHA-256 is:

`320a5ba0e85ac77a5c0f6f6314b9d32d7aafb08b676688d316b4918fd2d83069`

The runtime validated the lease, constructed a valid `leaseRevision=2 / state=EXPIRED` projection, awaited correctly, and reached the first external mutation boundary: creation of immutable revision `000002`.

## 7. Typed hash identity contract

Canonical semantic/content SHA-256 and Git blob SHA are independent typed identities.

For epoch-189 revision `000001`:

- canonical lease SHA-256 = `320a5ba0e85ac77a5c0f6f6314b9d32d7aafb08b676688d316b4918fd2d83069`;
- Git blob SHA = `514e37fddd80cfceae87d260e73acebd34526c28`.

Permanent rule from ORCH-000188:

> Never compare a Git blob SHA directly to a project canonical SHA-256. Canonical SHA-256 binds immutable record semantics to the Orchestrator index; Git blob SHA is used only for GitHub object identity/CAS semantics.

## 8. `createJson` mutation reconciliation semantics

Accepted `createJson` semantics from ORCH-000190 are:

1. read/precheck the target path;
2. issue at most one PUT create request;
3. perform an exact current-ref post-write readback;
4. decide durable creation from that readback, not from the PUT response body alone.

A missing/throwing/non-success PUT response can still normalize to `CREATED` if exact readback proves the expected object exists. An absent post-write readback can normalize to `AMBIGUOUS / POST_MUTATION_ABSENT` for multiple transport branches.

Permanent observability rule:

> Buffer bounded non-sensitive adapter/projector/await diagnostics in the same execution context and reconcile outcome from durable target-state readback. Do not add a separate prerequisite external evidence write whose own ambiguity can block the target operation.

## 9. GitHub contents read-adapter semantic-status contract — ORCH-000192

ORCH-000192 established a permanent boundary for disposable/read-only GitHub Contents adapters used by governed recovery flows.

Observed control probes:

- existing immutable revision `000001` → HTTP `200`, parseable JSON;
- absent revision `000002` → HTTP `404`, parseable JSON error.

The ORCH-000191 disposable `gh` subprocess surfaced only process exit code `1`, not the semantic HTTP `404`, and therefore normalized an expected absent path to `GITHUB_API_ERROR`. Accepted `createJson` then failed closed with `CREATE_PRECHECK_FAILED` before any PUT.

Corrected adapter contract:

> Use an awaited HTTP-capable GitHub Contents request path that preserves semantic HTTP status. Map `404` to `NOT_FOUND`, preserve successful `200` JSON reads as existing content, and keep transport/auth failures distinct from semantic absence.

The accepted client already normalizes a status-preserving absent-path result correctly as `NOT_FOUND`; no accepted-source patch is required. The defect belonged to the disposable adapter composition.

## 10. Historical-causation boundary

The historical ORCH-000185 launcher no longer exists. Do not convert later corrected reproductions into an invented exact ORCH-000185 root cause.

Likewise, the exact live transport branch behind ORCH-000189 cannot be recreated after the fact because those request/response details were not preserved.

## 11. Expired-lease recovery invariant

An expired indexed lease must be reconciled/closed before any new conflicting worker-delivery lease or preparation is allowed.

A bounded recovery caller must:

1. hydrate and verify the exact immutable lease;
2. keep canonical SHA-256 and Git blob SHA separately typed;
3. use the ORCH-000187-proven caller shape;
4. use a status-preserving GitHub read adapter that maps semantic `404 → NOT_FOUND`;
5. capture bounded adapter/projector/await diagnostics in memory without a separate pre-call external evidence write;
6. invoke real reconciliation at most once under explicit authority;
7. determine outcome from durable revision/index readback;
8. if result or completion is ambiguous, make no second call under the same authority.

## 12. Documentation governance

Architect directly owns canonical human-readable documentation. `documentationImpact=NONE|STATE|FULL` is decided under `governance/ARCHITECT_DOCUMENTATION_SEMANTIC_TEST.md`; future intent is separately classified `NONE|CAPTURE|PROMOTE`.

ORCH-000192 is `documentationImpact=FULL` because it established the exact disposable-adapter root cause and reusable semantic-status preservation contract.

## 13. Protected boundaries

Architect session `9333`; Executor session `9444`; AFFOTECH protected ports `9222/9223`. AFFOTECH source/worktrees, relay, Drive, Apps Script, tenant resources, deployments, and business/private data remain unauthorized absent explicit Rony authority.
