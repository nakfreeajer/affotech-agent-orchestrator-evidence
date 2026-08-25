Project: affotech-agent-orchestrator
Documentation sync boundary: through ORCH-000137 Architect decision plus ORCH-000138 Executor reconciliation terminal
Status: CURRENT HUMAN-READABLE PROJECTION
Machine authority: durable GitHub evidence and Architect decisions

# Architecture

## 1. Core purpose

The AFFOTECH Agent Orchestrator is a governed **message-routing and durable-state layer** between AI roles. It is not intended to be another AI reasoning agent.

The governing principle is:

> AI agents think. The Orchestrator carries envelopes.

The Orchestrator must not understand AFFOTECH business logic, approve work, classify milestones, reinterpret prompts, scrape assistant decisions, or synthesize authority from browser text.

## 2. Authority and role model

Normal authority remains:

```text
Rony
  ↕
Architect
  ↓ bounded instruction
Orchestrator
  ↓ exact/opaque delivery
Executor
  ↓ durable evidence
Orchestrator
  ↓ notify/wake only
Architect
```

Documentation is separate:

```text
Architect → Documentation Curator → Architect
```

Role responsibilities:

- **Rony** — final human authority.
- **Architect** — THINK / GOVERN / VERIFY / DECIDE. Classifications are exactly `ACCEPTED`, `BLOCKED`, `INCONCLUSIVE`, `NO NEW REPORT`.
- **Executor** — implementation/runtime/validation/transport work inside the exact mutation envelope.
- **Documentation Curator** — human-readable documentation only when requested or when a substantial documentation projection benefits from a separate bounded worker.
- **Orchestrator** — deterministic relay and observer only.

Executor PASS is evidence, not Architect acceptance.

## 3. Target operational topology

```text
                     GitHub evidence repo
                    durable mailbox/state
                          ▲      │
                          │      ▼
Architect browser 9333 ◄── Local Orchestrator ──► Executor browser 9444
                          │
                          └────► Curator when used
```

The final operational daemon should be small, deterministic, long-running, locally hosted, and non-AI.

### Current implementation vs target packaging

Current qualified implementation:

- Node/JavaScript Orchestrator modules;
- independent process launched from PowerShell;
- GitHub Contents runtime for durable host, lease and delivery evidence;
- BrowserRelay/CDP for exact message transport;
- durable state and duplicate suppression in GitHub.

Preferred future simplification after transport proof:

- package the local messenger as a very small daemon;
- Python is a preferred option for local process ownership, polling, subprocess/session management and simple state handling;
- Python is **not** currently implemented or accepted as the production Orchestrator runtime;
- the protocol/evidence invariants should survive any language/runtime simplification.

## 4. Durable authority model

GitHub is the machine-authoritative mailbox and audit trail.

Durable objects include:

- canonical `ORCH-*` prompts;
- `DISPATCH-*` records;
- Architect `GH-DEC-*` decisions;
- Executor terminal/report/receipt publications;
- accepted-source pointers and immutable source snapshots/manifests;
- worker delivery intents/results/reconciliations;
- mutation leases and lease-index state;
- host identity/events;
- Architect trigger records;
- current pointers for convenient discovery.

Browser-visible text, terminal screen output and human-readable Markdown are not machine authority.

## 5. External-mutation contract

Ambiguity-prone external operations follow:

```text
read-only pre-boundary
    ↓
durable intent + readback
    ↓
exactly one attempt
    ↓
durable result
    OR
AMBIGUOUS
    ↓
read-only reconciliation before any retry
```

No blind retry is allowed.

For worker browser delivery specifically:

1. acquire/verify the correct mutation lease when required;
2. create the exact worker-delivery intent;
3. read it back from GitHub and verify identity/hash;
4. only then perform BrowserRelay pre-send observation/contact;
5. send exactly once only if preconditions hold;
6. persist `SENT` only after confirmed send;
7. advance `LATEST_DELIVERY` only after the exact result is durably verified;
8. suppress duplicate delivery on later iterations.

Recovery states such as `PROVEN_NOT_SENT` remain distinct from `SENT`.

## 6. Current accepted source

Current Architect-accepted source is ORCH-000130:

`GH-PUB-130-PROVEN-NOT-SENT-DELIVERY-RECONCILIATION-CONTRACT-REPAIR-READY-000001`

Qualified baseline:

- source files: 101;
- full sharded suite: 813 passed / 0 failed / 0 skipped / 0 cancelled;
- worker relay: 148;
- BrowserRelay transport ports: 21;
- persistent host runner: 36;
- GitHub runtime ports: 40;
- manifest SHA-256: `0f8916a74a1275be90f2ff1a10704f8f9c79793e1a63d8da81c7906e318ee5ad`;
- archive SHA-256: `79c36abd1ea108003baa737550210a71008a9a70a887c9a14c04aa533235f103`.

ORCH-000130 added the explicit recovery-only durable `PROVEN_NOT_SENT` delivery reconciliation contract without weakening ordinary ARMED/SENT semantics.

## 7. Independent-host qualification progress

Material live-transport progress:

- ORCH-000118 proved a real separate PowerShell-hosted Orchestrator process could be launched independently.
- ORCH-000121 established transport-phase observability.
- ORCH-000123 repaired expired mutation-lease reconciliation and was later accepted/validated.
- ORCH-000126 safely applied stale-lease reconciliation.
- ORCH-000127 exposed missing Architect target-binding composition before send.
- ORCH-000128 reached an independent host and durable worker state but failed at pre-send observation.
- ORCH-000129 proved the affected probe had not been sent and exposed the missing durable non-send reconciliation operation.
- ORCH-000130 implemented and validated that recovery contract.
- ORCH-000131 safely reconciled the prior delivery as `PROVEN_NOT_SENT`.
- ORCH-000132 exposed missing `input.nowMs` in temporary launcher composition.
- ORCH-000133 exposed stale local-git runtime persistence and established that local git commit/push is the wrong runtime transport.
- ORCH-000134 required GitHub Contents runtime but exposed the missing `gh` CLI path in the spawned environment.
- ORCH-000135 proved GitHub Contents runtime and reached BrowserRelay, but its temporary launcher used a no-op worker persistence adapter.
- ORCH-000136 reconciled the lease and proved the accepted runner ordering was correct; the defect was temporary composition, not source.
- ORCH-000137 used real GitHub Contents-backed worker persistence and durably recorded delivery `000007` before BrowserRelay contact. It still stopped at `PRE_SEND_OBSERVATION / WORKER_PRE_SEND_OBSERVATION_FAILED` with zero attempted/confirmed sends.
- ORCH-000138 Executor reconciliation now reports exact probe occurrence count `0`, `PROVEN_NOT_SENT`, delivery `000007` reconciled to `PROVEN_NOT_SENT`, and its lease reconciled to `EXPIRED`. This result still awaits Architect acceptance at this documentation sync boundary.

## 8. Browser/session boundaries

Current registered control-plane endpoints:

- Architect: CDP port `9333`;
- Executor: CDP port `9444`.

Protected AFFOTECH ports:

- `9222`;
- `9223`.

BrowserRelay is a transport adapter only. Architect wake-up must remain one-way and must not parse or scrape Architect assistant responses.

## 9. Protected AFFOTECH boundary

The Orchestrator project remains separate from AFFOTECH System V2 Hybrid.

Without a later explicit Rony-authorized integration milestone, the Orchestrator must not access or mutate:

- AFFOTECH source/worktrees;
- `nakfreeajer/affotech-agent-relay`;
- AFFOTECH relay authority/state;
- ports `9222/9223`;
- Google Drive evidence/state;
- Apps Script deployments;
- tenant spreadsheets/resources;
- business/private data.

## 10. Completion trajectory

The next meaningful success is not another abstraction. It is visible end-to-end transport:

1. fresh independent local Orchestrator starts;
2. durable worker intent is recorded;
3. exactly one real message is delivered to Executor `9444`;
4. exact durable `SENT` result and pointer update are proven;
5. duplicate delivery is suppressed;
6. Executor completion is detected durably;
7. Orchestrator wakes Architect `9333` exactly once with the governed wake message;
8. Curator delivery is proven when documentation work is requested;
9. only then package/simplify the operational daemon, potentially in Python, without weakening the proven protocol.
