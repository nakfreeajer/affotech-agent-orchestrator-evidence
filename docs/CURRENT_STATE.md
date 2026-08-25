Project: affotech-agent-orchestrator
Documentation sync boundary: through ORCH-000137 Architect decision plus ORCH-000138 Executor reconciliation terminal
Status: CURRENT HUMAN-READABLE PROJECTION
Machine authority: durable GitHub evidence and Architect decisions

# Current State

## 1. Accepted source baseline

Current Architect-accepted source:

`GH-PUB-130-PROVEN-NOT-SENT-DELIVERY-RECONCILIATION-CONTRACT-REPAIR-READY-000001`

Accepted qualification:

- source files: `101`;
- worker relay: `148`;
- BrowserRelay transport ports: `21`;
- persistent host runner: `36`;
- GitHub runtime ports: `40`;
- full sharded suite: `813 passed / 0 failed / 0 skipped / 0 cancelled`;
- manifest SHA-256: `0f8916a74a1275be90f2ff1a10704f8f9c79793e1a63d8da81c7906e318ee5ad`;
- archive SHA-256: `79c36abd1ea108003baa737550210a71008a9a70a887c9a14c04aa533235f103`.

The accepted source pointer has not advanced beyond ORCH-000130 because later milestones have been live qualification, recovery, diagnosis or composition work rather than accepted source changes.

## 2. Current operational authority state

Latest Architect decision at this documentation sync boundary:

- ORCH-000137: `INCONCLUSIVE`;
- decision: `GH-DEC-137-PRE-SEND-OBSERVATION-INCONCLUSIVE`;
- reason: durable delivery intent existed before BrowserRelay contact, but pre-send observation failed before any send.

Latest Executor terminal:

- ORCH-000138 / `DISPATCH-000138`;
- publication: `GH-PUB-138-WORKER-DELIVERY-000007-PROVEN-NOT-SENT-RECONCILED-000001`;
- status: `COMPLETED`;
- Executor classification: `ORCHESTRATOR_WORKER_DELIVERY_000007_PROVEN_NOT_SENT_AND_RECONCILED_READY_FOR_ARCHITECT_REVIEW`;
- Architect acceptance: **pending at this documentation sync boundary**.

## 3. Delivery 000007 state

ORCH-000137 proved the corrected ordering:

- delivery intent `WORKER-DELIVERY-EXECUTOR-000007` was created durably;
- intent state was `ARMED`;
- exact ORCH-000137 locator was bound to the current Executor authority, registration, conversation and port `9444`;
- the intent was read back before any BrowserRelay observation/contact;
- BrowserRelay contact count: `1`;
- browser send count: `0`;
- attempted send count: `0`;
- confirmed send count: `0`;
- no delivery result existed at ORCH-000137 terminal;
- `LATEST_DELIVERY` remained `WORKER-DELIVERY-EXECUTOR-000004 / SENT`.

ORCH-000138 Executor reconciliation reports:

- exact probe occurrence count in the registered Executor conversation: `0`;
- transport reconciliation: `PROVEN_NOT_SENT`;
- delivery `000007` state transitioned from `ARMED` to `PROVEN_NOT_SENT`;
- attempted send count remained `0`;
- confirmed send count remained `0`;
- retry remained unauthorized;
- `LATEST_DELIVERY` was **not** advanced to `000007`;
- the associated epoch-9 lease was reconciled from expired-active state to terminal `EXPIRED` and removed from the active lease set.

Because ORCH-000138 is still awaiting Architect review, these are Executor-reported durable facts, not yet an Architect acceptance classification.

## 4. What has been proven

The project has now proven the following important pieces independently:

- a genuinely separate local Orchestrator process can be launched;
- GitHub Contents can be used as durable runtime persistence instead of local git commit/push;
- the exact GitHub CLI path can be exposed only to the child process without mutating machine/user PATH;
- host identity and mutation-lease state can be durably persisted;
- delivery intent can be persisted/read back before browser contact;
- stale/expired leases can be reconciled explicitly;
- a delivery can be durably reconciled as `PROVEN_NOT_SENT` without synthesizing `SENT`;
- no blind retry occurs after ambiguous transport;
- BrowserRelay phase/reason telemetry distinguishes pre-send observation from send invocation/completion;
- Architect/Executor authority/session binding remains separate from the transport mechanism;
- the Orchestrator does not need AI reasoning.

## 5. What is not yet proven

The main operational goal is **not complete**.

Still required:

1. a fresh independent Orchestrator instance records a fresh delivery intent;
2. BrowserRelay pre-send observation succeeds against the registered Executor session on `9444`;
3. exactly one real USER message is sent;
4. durable delivery result becomes `SENT` with attempted/confirmed send counts `1/1`;
5. `LATEST_DELIVERY` advances to that exact delivery;
6. a subsequent iteration proves duplicate suppression with zero second send;
7. Executor completion is detected from durable evidence;
8. Orchestrator wakes Architect on `9333` exactly once with governed wake text and without parsing Architect response DOM/text;
9. Curator relay is proven when documentation work is requested;
10. then the operational runtime can be simplified/packaged.

## 6. Operational implementation direction

Current implementation under qualification:

- Node/JavaScript Orchestrator engine;
- PowerShell used to launch/prove an independent Windows process;
- GitHub Contents durable mailbox/state;
- BrowserRelay/CDP transport.

Target simplification:

- a small local deterministic daemon;
- no AI model inside the Orchestrator;
- no acceptance/business logic inside the Orchestrator;
- Python is a preferred future packaging/runtime option, but no Python migration has been implemented or accepted yet.

## 7. Current role/session boundaries

- Architect registered control session: port `9333`.
- Executor registered control session: port `9444`.
- Protected AFFOTECH ports: `9222`, `9223`.

The Orchestrator is permitted to carry exact governed messages only. It must not scrape assistant responses for decisions or authority.

## 8. Documentation state

This documentation refresh supersedes the stale ORCH-000087-era human-readable projection. The machine-authoritative project-event/evidence chain remains immutable and is not rewritten by this documentation update.

## 9. AFFOTECH boundary

AFFOTECH System V2 Hybrid remains separate and protected. No current Orchestrator milestone authorizes AFFOTECH source, relay, Drive, tenant, deployment, business/private-data or protected-port mutation/access.
