Project: affotech-agent-orchestrator
Documentation sync boundary: through ORCH-000194 Architect review
Status: CURRENT HUMAN-READABLE PROJECTION
Machine authority: durable GitHub evidence and Architect decisions

# Architecture

## 1. Core purpose

AFFOTECH Agent Orchestrator is a governed deterministic message-routing and durable-state layer. AI roles think; the Orchestrator carries exact governed envelopes and observes durable state. It does not approve work, infer authority from browser text, or interpret project semantics.

## 2. Active topology

```text
Rony — final human authority
  ↕
Architect 9333 — govern / verify / decide / document
  ↓ durable dispatch
Persistent deterministic Orchestrator
  ↓ exact lease + durable worker intent + exact delivery
Executor 9444 — bounded work
  ↓ durable terminal
Persistent deterministic Orchestrator
  ↓ durable Architect trigger + exact wake
Architect 9333
```

Curator is not part of the active model.

## 3. Accepted source

`GH-PUB-165-WORKER-DELIVERY-LEGACY-LINEAGE-HYDRATION-REPAIR-READY-000001`

101 files; focused `65/65`; GitHub runtime ports `43/43`; BrowserRelay transport ports `22/22`; full deterministic `817/817`.

## 4. Worker-delivery contract

Accepted ordering:

`observe dispatch → acquire WORKER_DELIVERY lease → construct transient action-specific authorization → prepareWorkerDeliveryIntent → durable intent readback → send/reconcile result → durable result readback → release/reconcile lease`

Preparation uses an explicit `workerDeliveryId` and transient `actionKind=WORKER_DELIVERY`; the durable lease itself is not rewritten merely to add `actionKind`.

The persistent delivery intent record uses canonical state `ARMED`; accepted preparation returns status `PREPARED` only after that immutable intent is durably recorded/read back.

## 5. ORCH-000194 accepted preflight capability

ORCH-000194 proves the current recovered runtime can execute in one process:

`ACQUIRE → transient actionKind enrichment → PREPARE → PROVEN_NOT_SENT → RELEASE`

for `WORKER-DELIVERY-EXECUTOR-000014`, with browser contact/send `0/0`.

Accepted facts:

- epoch-190 lease acquired exactly once;
- index `378 → 379` on acquisition;
- next epoch `190 → 191`;
- transient `actionKind=WORKER_DELIVERY` constructed without durable lease rewrite;
- immutable delivery intent durably recorded/read back;
- preparation status `PREPARED`;
- durable result `PROVEN_NOT_SENT` with attempted/confirmed send counts `0/0`;
- normal lease release exactly once;
- index `379 → 380` on release;
- final `activeLeases=[]`;
- `LATEST_DELIVERY` remains the last successful SENT delivery `000013`.

A `PROVEN_NOT_SENT` delivery is terminal evidence and is not reused for a later live send. Live delivery qualification therefore requires a fresh delivery identity.

## 6. Exactly-once live delivery contract

The accepted precedent from ORCH-000153 requires:

1. one fresh delivery identity;
2. one bounded WORKER_DELIVERY lease acquisition attempt;
3. durable delivery intent before any BrowserRelay contact;
4. pre-send observation;
5. at most one exact USER send to the registered Executor target on port `9444`;
6. attempted/confirmed counts `1/1` for success;
7. durable `SENT` result readback before advancing `LATEST_DELIVERY`;
8. normal lease release with original lease lineage;
9. one duplicate-suppression replay proving second-send count `0`;
10. no synthesis of `SENT` under ambiguity.

ORCH-000195 will requalify this live boundary with fresh `WORKER-DELIVERY-EXECUTOR-000015` after the ORCH-000194 zero-browser preflight acceptance.

## 7. Lease and GitHub transport contracts

- index `activeLeases` entries are reduced locators; full-schema work hydrates the exact immutable revision first;
- canonical semantic SHA-256 and Git blob SHA remain separate typed identities;
- GitHub Contents adapters preserve semantic HTTP status and map `404 → NOT_FOUND`;
- accepted `createJson` uses `precheck → at most one PUT → exact post-write readback`;
- durable readback is final mutation authority;
- no blind retry after ambiguous external mutation or browser send.

## 8. Recovery boundary

Epoch-189 recovery closed under `GH-DEC-193-EXPIRED-WORKER-LEASE-RECOVERY-ACCEPTED`; immutable revision `000002` is `EXPIRED`, index advanced to `378`, and the stale lease no longer blocks delivery qualification.

## 9. Documentation governance

Architect directly owns canonical human-readable documentation. `documentationImpact=NONE|STATE|FULL`; future intent is separately classified `NONE|CAPTURE|PROMOTE`.

ORCH-000194 is `documentationImpact=FULL` because it establishes the current accepted zero-browser worker-delivery preparation/reconciliation capability after recovery.

## 10. Protected boundaries

Architect session `9333`; Executor session `9444`; AFFOTECH protected ports `9222/9223`. AFFOTECH source/worktrees, Drive, Apps Script, tenant resources, deployments, and business/private data remain unauthorized absent explicit authority.
