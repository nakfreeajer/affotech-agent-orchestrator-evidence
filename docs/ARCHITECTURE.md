Project: affotech-agent-orchestrator
Documentation sync boundary: through Architect-accepted ORCH-000163 and Rony documentation-ownership directive of 2026-08-26
Status: CURRENT HUMAN-READABLE PROJECTION
Machine authority: durable GitHub evidence and Architect decisions

# Architecture

## 1. Core purpose

The AFFOTECH Agent Orchestrator is a governed **message-routing and durable-state layer** between the active AI roles. It is not another AI reasoning agent.

The governing principle remains:

> AI roles think. The Orchestrator carries exact governed envelopes.

The Orchestrator must not understand AFFOTECH business logic, approve work, classify milestones, reinterpret prompts, scrape assistant decisions, or synthesize authority from browser text.

## 2. Authority and role model

Current authority:

```text
Rony
  ↕
Architect
  ↓ bounded durable instruction
Orchestrator
  ↓ exact/opaque delivery
Executor
  ↓ durable evidence
Orchestrator
  ↓ exact one-way wake
Architect
```

Role responsibilities:

- **Rony** — final human authority.
- **Architect** — THINK / GOVERN / VERIFY / DECIDE and directly maintain all relevant project documentation.
- **Executor** — implementation/runtime/validation/transport work inside the exact mutation envelope.
- **Orchestrator** — deterministic relay and observer only.

Architect classifications are exactly `ACCEPTED`, `BLOCKED`, `INCONCLUSIVE`, `NO NEW REPORT`.

Executor PASS/COMPLETED is evidence, not Architect acceptance.

### Documentation ownership

Documentation is no longer a separate normal role hop for this project.

Architect directly owns:

- governance/policy;
- architecture;
- accepted current state;
- decision summaries/rationale;
- project history;
- reusable bugs/lessons;
- README/entrypoint and handover/recovery material.

A separate Documentation Curator is not required and no Curator relay proof is part of the active completion trajectory. Historical Curator evidence remains valid historical evidence.

## 3. Operational topology

```text
                     GitHub evidence repo
                    durable mailbox/state
                          ▲      │
                          │      ▼
Architect browser 9333 ◄── Local Orchestrator ──► Executor browser 9444
```

The operational daemon should remain small, deterministic, long-running, locally hosted, and non-AI.

Current qualified implementation direction:

- Node/JavaScript Orchestrator modules;
- independent process launched from PowerShell;
- GitHub Contents runtime for durable host, lease, delivery and trigger evidence;
- BrowserRelay/CDP for exact message transport;
- durable duplicate suppression and ambiguity reconciliation in GitHub.

A small Python daemon remains only a possible future packaging simplification. No Python migration is currently accepted or deployed.

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
- Architect trigger intents/results/reconciliations;
- current pointers for discovery.

Human-readable Markdown is an Architect-maintained projection only. Browser-visible text and terminal screen output are not machine authority.

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

For BrowserRelay transport, exactly-once proof requires a durable pre-attempt boundary/correlation identity, one attempt, a durable result, and no second send. Repeated equal text by itself is not sufficient proof.

## 6. Current accepted source

Current Architect-accepted source remains ORCH-000130:

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

Later milestones through ORCH-000163 qualified/reconciled live runtime behavior without changing accepted source.

## 7. Forward delivery proof

ORCH-000153 proved the first fresh forward Executor delivery in this hardening chain:

- host `HOST-INSTANCE-SANDBOX-000024`;
- delivery `WORKER-DELIVERY-EXECUTOR-000013`;
- state `SENT`;
- intent/result durable;
- browser send count `1`;
- duplicate replay second send `0`;
- exact delivery payload was the governed dispatch locator;
- no Architect trigger occurred in that milestone;
- protected boundaries remained clean.

That closed the forward-delivery objective without advancing accepted source.

## 8. Architect relay and return-path proof

ORCH-000154 through ORCH-000162 hardened the dedicated Architect return path.

Key outcomes:

- port `9333` was initially unavailable;
- an incorrect Chrome recovery attempt was rejected;
- Windows/Brave diagnostics proved no existing 9333 listener;
- a Brave launch-composition defect was isolated;
- ORCH-000158 successfully established one dedicated Brave process owning `127.0.0.1:9333` with the exact dedicated profile;
- subsequent milestones reconciled target/trigger ambiguity without blind resend;
- ORCH-000162 proved historical trigger `000004` had not been sent and preserved the exact residual draft for a fresh attempt.

ORCH-000163 then completed the fresh trigger:

- trigger `ARCH-TRIGGER-9333-000005`;
- state `SENT`;
- exact payload `verify & next`;
- USER boundary `2 → 3`;
- matching payload count `1 → 2`;
- attempted/confirmed `1/1`;
- second send `0`;
- duplicate replay additional send `0`;
- composer empty after send;
- retry false;
- reconciliation false;
- assistant response text/DOM not read;
- no source/test/config/AFFOTECH/Drive/deployment/protected-port mutation.

Architect acceptance:

`GH-DEC-163-AUTOMATIC-ARCHITECT-DOORBELL-TRIGGER-000005-ACCEPTED`

This proves the Executor-result → automatic Architect wake leg exactly once.

## 9. Browser/session boundaries

Current registered control-plane endpoints:

- Architect: CDP port `9333`;
- Executor: CDP port `9444`.

Protected AFFOTECH ports:

- `9222`;
- `9223`.

BrowserRelay is transport only. The Architect doorbell must never parse or scrape Architect assistant responses.

## 10. Protected AFFOTECH boundary

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

## 11. Current completion trajectory

The transport architecture has now proven both critical message legs independently:

1. Architect-governed dispatch reaches Executor exactly once with durable `SENT` evidence — proven by ORCH-000153.
2. Executor durable completion can drive an exact automatic Architect wake on 9333 without response scraping — proven by ORCH-000163.

The next work should focus on converting these qualified pieces into the smallest reliable unattended governed cycle and operational daemon. Do **not** add a Curator transport leg merely for documentation continuity; Architect now updates documentation directly.
