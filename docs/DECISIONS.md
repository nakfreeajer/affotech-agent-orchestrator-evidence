Project: affotech-agent-orchestrator
Documentation sync boundary: through Architect-accepted ORCH-000163 and Rony documentation-ownership directive of 2026-08-26
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

Human-readable decision summaries are maintained directly by Architect and never replace immutable decision records.

## Permanent strategic decisions

The project continues under these accepted strategic rules:

1. Rony remains final human authority.
2. Architect is the central reasoning/governance/verification/decision authority.
3. Executor performs bounded implementation/runtime/test/transport work only.
4. The Orchestrator remains deterministic and non-AI.
5. GitHub durable evidence is machine authority.
6. BrowserRelay is transport only and may not read assistant response text for authority.
7. Important external mutations use durable intent/result/reconciliation and no blind retry.
8. Local git commit/push is not runtime state transport.
9. AFFOTECH System V2 Hybrid and the existing AFFOTECH relay remain separate/protected.
10. Documentation for this project is now maintained directly by Architect; a Curator is not a required active role.

## Current accepted source decision

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
- full sharded suite: `813/0`.

This remains the current accepted source.

## Runtime qualification decisions after ORCH-000130

### ORCH-000131 — ACCEPTED

Safely reconciled the prior unresolved worker delivery as `PROVEN_NOT_SENT` with zero browser/host/source mutation. Accepted source remained ORCH-000130.

### ORCH-000132 — BLOCKED

Temporary launcher omitted required integer `input.nowMs`; stopped before lease/delivery/browser work.

### ORCH-000133 — BLOCKED

Temporary runtime used stale local-git evidence persistence; remote readback proved no durable host mutation. Local git commit/push was rejected as runtime persistence.

### ORCH-000134 — BLOCKED

GitHub Contents composition was correct in principle, but the spawned environment could not resolve the GitHub CLI executable.

### ORCH-000135 — INCONCLUSIVE

GitHub Contents runtime worked, but temporary browser transport composition used a no-op worker-persistence adapter; browser contact occurred without a real durable delivery intent.

### ORCH-000136 — ACCEPTED

Reconciled the expired lease and proved the defect was temporary composition rather than accepted source ordering.

### ORCH-000137 — INCONCLUSIVE

Real GitHub Contents-backed delivery intent was durably written before BrowserRelay contact, but pre-send observation failed before any send.

### ORCH-000138 — ACCEPTED

Decision:

`GH-DEC-138-WORKER-DELIVERY-000007-PROVEN-NOT-SENT-RECONCILIATION-ACCEPTED`

The exact probe had zero occurrences; delivery `000007` became `PROVEN_NOT_SENT`; its lease became terminal `EXPIRED`; no retry or source change occurred.

## Forward-delivery qualification

### ORCH-000139 — ACCEPTED documentation catch-up

Human-readable documentation was caught up through ORCH-000138 under the then-current documentation process. This is historical; current documentation ownership is Architect-direct.

### ORCH-000140 through ORCH-000152 — bounded failure/reconciliation chain

This chain exposed and resolved several live-composition/runtime-state issues without changing accepted source, including:

- missing mutation-envelope hash;
- invalid temporary project profile;
- GitHub Contents host/lease composition defects;
- missing GitHub CLI `--input -` JSON stdin contract;
- lease acquisition ambiguity;
- stale active lease recovery binding mismatch;
- exact stale-lease reconciliation.

ORCH-000152 accepted the exact stale ORCH-000148 lease reconciliation and returned active lease count to zero.

### ORCH-000153 — ACCEPTED

Decision:

`GH-DEC-153-FRESH-EXECUTOR-FORWARD-DELIVERY-000013-ACCEPTED`

Verified result:

- fresh host `HOST-INSTANCE-SANDBOX-000024`;
- delivery `WORKER-DELIVERY-EXECUTOR-000013`;
- delivery state `SENT`;
- intent/result durable;
- browser send count `1`;
- duplicate replay second send `0`;
- retry false;
- no Architect trigger in this milestone;
- no protected/source mutation.

This proved the fresh forward delivery leg.

## Architect relay/doorbell qualification

### ORCH-000154 — BLOCKED

Architect port `9333` was unavailable; no trigger intent or send occurred.

### ORCH-000155 — BLOCKED

Recovery incorrectly selected Chrome and still failed to establish port `9333`; this was rejected because Brave ownership had not been proven.

### ORCH-000156 — ACCEPTED diagnostic

Proved no listener on 9333 and no Brave process carrying `--remote-debugging-port=9333`.

### ORCH-000157 — BLOCKED

Exact Brave executable was selected but launch composition failed; the process exited and no listener remained.

### ORCH-000158 — BLOCKED with technical repair achieved

A dedicated Brave process successfully owned `127.0.0.1:9333`, `/json/version` and `/json/list` were healthy, but the exact registered Architect conversation was not yet present as the required target. This was blocked for manual target registration, not for relay health.

### ORCH-000159 through ORCH-000161 — trigger/target qualification and ambiguity handling

These milestones reused the existing Brave relay, preserved launch/restart/kill count zero where required, and handled target/send ambiguity fail-closed without blind resend.

### ORCH-000162 — ACCEPTED reconciliation

Decision:

`GH-DEC-162-ARCHITECT-TRIGGER-000004-PROVEN-NOT-SENT-RECONCILIATION-ACCEPTED`

Read-only reconciliation proved historical trigger `ARCH-TRIGGER-9333-000004` was not sent. The existing exact residual `verify & next` draft remained, but retry of trigger `000004` was not authorized. The next action was a fresh trigger identity `000005` adopting that proven-unsent draft.

### ORCH-000163 — ACCEPTED

Decision:

`GH-DEC-163-AUTOMATIC-ARCHITECT-DOORBELL-TRIGGER-000005-ACCEPTED`

Reviewed publication:

`GH-PUB-163-ARCHITECT-TRIGGER-000005-SENT-000001`

Verified result:

- trigger `ARCH-TRIGGER-9333-000005` durably `SENT`;
- pre-send USER count `2`, post-send `3`;
- matching payload count `1 → 2`;
- newly appended USER message exact `verify & next`;
- composer empty after send;
- attempted/confirmed `1/1`;
- second send `0`;
- duplicate replay additional send `0`;
- retry false;
- reconciliation false;
- response DOM/assistant text not read;
- browser launch/navigation `0/0`;
- source/test/config/AFFOTECH/Drive/deployment/protected-port mutations/contact `0`.

Reason code:

`TRIGGER_000005_DURABLY_SENT_EXACTLY_ONCE_WITH_USER_BOUNDARY_DELTA_AND_DUPLICATE_SUPPRESSION`

This is the accepted proof of the automatic Architect doorbell.

## Rony directive — 2026-08-26: Architect-direct documentation

Rony explicitly directed that **Architect needs to update all relevant documents directly**.

This is now reflected in governing project policy and documentation:

- project documentation policy is `ARCHITECT_DIRECT`;
- Architect updates all materially affected project documents after accepted milestones or material Rony directives;
- Curator is not an active required role or transport leg;
- historical Curator evidence remains valid;
- a Curator may return only through a future explicit Rony policy change.

## Current next direction

Do not reopen the proven 9333 repair chain and do not create a Curator relay proof merely for documentation continuity.

The next productive objective is the smallest reliable unattended governed cycle built from the already-proven legs:

`Architect dispatch → Executor exactly-once delivery → durable Executor result → automatic Architect wake → Architect decision → next cycle`.
