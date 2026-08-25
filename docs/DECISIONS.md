Project: affotech-agent-orchestrator
Documentation sync boundary: through Architect-accepted ORCH-000138 recovery
Status: CURRENT HUMAN-READABLE PROJECTION
Machine authority: immutable Architect decision records under `evidence/decisions/architect/`

# Architect Decisions

## Decision model

Architect classifications are exactly:

- `ACCEPTED`
- `BLOCKED`
- `INCONCLUSIVE`
- `NO NEW REPORT`

Executor PASS/COMPLETED is evidence only. It never becomes acceptance until Architect independently verifies the durable state and publishes an Architect decision.

The canonical early decision/event history remains preserved in the immutable event/evidence chain through sequence 51. This document focuses on the current material decision chain and does not replace those records.

## Earlier accepted foundations

Material earlier decisions established:

- durable GitHub evidence as machine authority;
- project-event/cursor/documentation projection rules;
- lineage-first persistent-host selection after the ORCH-000076 stale-lineage defect;
- fail-closed documentation semantic checks;
- no blind retry after ambiguity;
- exact worker/Architect authority/session binding;
- AFFOTECH separation/protection.

The human-readable documentation catch-up through ORCH-000087 was Architect-accepted under the prior Curator projection chain.

## Recent operational decisions

### ORCH-000123 candidate → later ACCEPTED source foundation

Expired mutation-lease reconciliation was implemented and subsequently validated/accepted after full sharded qualification. This created the recovery contract later used on stale live leases.

### ORCH-000129 — ACCEPTED diagnostic

Read-only reconciliation proved the affected live probe had not been sent and identified a missing durable non-send reconciliation operation for ARMED deliveries.

The diagnostic was accepted; it did not change accepted source.

### ORCH-000130 — ACCEPTED

Decision:

`GH-DEC-130-PROVEN-NOT-SENT-RECONCILIATION-CONTRACT-ACCEPTED`

Accepted source:

`GH-PUB-130-PROVEN-NOT-SENT-DELIVERY-RECONCILIATION-CONTRACT-REPAIR-READY-000001`

Reason:

- explicit recovery-only `PROVEN_NOT_SENT` contract validated;
- ordinary ARMED/SENT semantics preserved;
- exact-repeat idempotence and conflict fail-closed behavior validated;
- no send/result/pointer success synthesized;
- full sharded suite: 813/0.

This remains the current accepted source.

### ORCH-000131 — ACCEPTED

Decision:

`GH-DEC-131-WORKER-DELIVERY-000006-PROVEN-NOT-SENT-RECONCILIATION-ACCEPTED`

Reason:

- unresolved delivery `000006` was safely terminalized as proven-not-sent using the accepted recovery contract;
- zero browser/host/source mutation;
- `LATEST_DELIVERY` remained on `000004 / SENT`.

Accepted-source pointer remained ORCH-000130 because ORCH-000131 was live-state cleanup only.

### ORCH-000132 — BLOCKED

Decision:

`GH-DEC-132-HOST-RUNNER-NOWMS-LAUNCH-COMPOSITION-BLOCKED`

Reason:

- temporary launcher omitted required integer `input.nowMs`;
- failure occurred before lease/delivery/browser activity.

Next action was a launcher-only retry.

### ORCH-000133 — BLOCKED

Decision:

`GH-DEC-133-LOCAL-GIT-RUNTIME-PERSISTENCE-BLOCKED`

Reason:

- corrected launcher reached host identity persistence;
- temporary runtime used a stale local evidence git worktree;
- push became ambiguous/non-fast-forward;
- remote readback proved no durable host identity mutation;
- local git commit/push was rejected as the runtime persistence strategy.

### ORCH-000134 — BLOCKED

Decision:

`GH-DEC-134-GITHUB-CONTENTS-GHCLI-PATH-COMPOSITION-BLOCKED`

Reason:

- GitHub Contents runtime was the correct composition;
- the spawned process could not resolve `gh` on PATH;
- known qualified executable existed at `C:\Program Files\GitHub CLI\gh.exe`;
- no host/browser/delivery side effect occurred.

### ORCH-000135 — INCONCLUSIVE

Decision:

`GH-DEC-135-PRE-SEND-INTENT-ORDERING-INCONCLUSIVE`

Reason:

- GitHub Contents runtime and exact GitHub CLI path worked;
- host and lease were durably created;
- BrowserRelay reached pre-send observation;
- no send occurred;
- no durable delivery intent existed even though browser contact had occurred;
- the live composition therefore required reconciliation/diagnosis before retry.

### ORCH-000136 — ACCEPTED

Decision:

`GH-DEC-136-PRE-SEND-COMPOSITION-DEFECT-DIAGNOSIS-ACCEPTED`

Reason:

- the expired ORCH-000135 lease was reconciled;
- read-only diagnosis proved the accepted runner ordering was correct;
- defect was isolated to temporary launcher composition;
- browser transport had been configured with a no-op `workerPersistence.persistAndReadBack` that falsely returned `durableRecorded=true`;
- source repair was not required.

Next action: retry with genuine GitHub Contents-backed worker persistence.

### ORCH-000137 — INCONCLUSIVE

Decision:

`GH-DEC-137-PRE-SEND-OBSERVATION-INCONCLUSIVE`

Verified facts:

- real delivery intent `WORKER-DELIVERY-EXECUTOR-000007` existed;
- intent was durably written and read back before BrowserRelay contact;
- BrowserRelay contact count: 1;
- browser send count: 0;
- attempted/confirmed sends: 0/0;
- no delivery result yet;
- `LATEST_DELIVERY` remained `000004 / SENT`;
- associated lease remained unresolved at terminal time;
- failure phase remained `PRE_SEND_OBSERVATION / WORKER_PRE_SEND_OBSERVATION_FAILED`.

Reason code:

`PRE_SEND_OBSERVATION_FAILED_AFTER_DURABLE_INTENT_BEFORE_ANY_SEND`

Next action:

read-only exact-probe occurrence reconciliation, then conditional accepted recovery only if proven not sent.

## ORCH-000138 — ACCEPTED

Latest Executor publication:

`GH-PUB-138-WORKER-DELIVERY-000007-PROVEN-NOT-SENT-RECONCILED-000001`

Executor reports:

- exact probe occurrence count: 0;
- `transportReconciliation = PROVEN_NOT_SENT`;
- delivery `000007`: `ARMED → PROVEN_NOT_SENT`;
- attempted/confirmed sends remain 0/0;
- epoch-9 lease: terminal `EXPIRED`, inactive;
- `LATEST_DELIVERY` remains `000004 / SENT`;
- no retry;
- no source/test/config mutation.

Architect decision:

`GH-DEC-138-WORKER-DELIVERY-000007-PROVEN-NOT-SENT-RECONCILIATION-ACCEPTED`

The decision accepted the exact zero-occurrence probe reconciliation, the
expired lease terminalization, and the distinct `PROVEN_NOT_SENT` delivery
result. It did not accept a successful forward delivery or advance the
accepted source pointer.

## Current strategic decisions

The current architecture direction is:

1. keep Architect judgment human-governed and AI-assisted;
2. keep Executor and Curator role-separated;
3. keep the Orchestrator deterministic and non-AI;
4. use GitHub as durable mailbox/state authority;
5. use BrowserRelay only as a transport adapter;
6. preserve durable intent/result/reconciliation and duplicate suppression;
7. never blind-retry after ambiguous external mutation;
8. do not let local git commit/push become runtime transport;
9. prove one actual forward delivery before adding more abstractions;
10. simplify/package the final local messenger after proof; Python is a preferred option, not yet an accepted implementation.

Machine decision records remain authoritative if any human-readable summary differs.
