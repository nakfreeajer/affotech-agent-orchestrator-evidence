Project: affotech-agent-orchestrator
Documentation sync boundary: through Architect-classified ORCH-000164 and canonical ORCH-000165 repair dispatch
Status: CURRENT HUMAN-READABLE PROJECTION
Machine authority: immutable Architect decision records under `evidence/decisions/architect/`

# Architect Decisions

## Decision model

Architect classifications are exactly:

- `ACCEPTED`
- `BLOCKED`
- `INCONCLUSIVE`
- `NO NEW REPORT`

Executor PASS/COMPLETED is evidence only. It never becomes acceptance until Architect independently verifies durable state and publishes an Architect decision.

Human-readable decision summaries are maintained directly by Architect and never replace immutable decision records.

## Permanent strategic decisions

1. Rony remains final human authority.
2. Architect is the central reasoning/governance/verification/decision authority.
3. Executor performs bounded implementation/runtime/test/transport work only.
4. The Orchestrator remains deterministic and non-AI.
5. GitHub durable evidence is machine authority.
6. BrowserRelay is transport only and may not read assistant response text for authority.
7. Important external mutations use durable intent/result/reconciliation and no blind retry.
8. Local git commit/push is not runtime state transport.
9. AFFOTECH System V2 Hybrid and the existing AFFOTECH relay remain separate/protected.
10. Documentation is `ARCHITECT_DIRECT`; Curator is not an active required role.
11. Historical evidence is immutable in meaning; compatibility repairs must not rewrite old results merely to satisfy a newer reader.

## Current accepted source

### ORCH-000130 — ACCEPTED

Decision:

`GH-DEC-130-PROVEN-NOT-SENT-RECONCILIATION-CONTRACT-ACCEPTED`

Accepted source:

`GH-PUB-130-PROVEN-NOT-SENT-DELIVERY-RECONCILIATION-CONTRACT-REPAIR-READY-000001`

Qualification: 101 source files, full sharded suite `813/0`, manifest `0f8916a74a1275be90f2ff1a10704f8f9c79793e1a63d8da81c7906e318ee5ad`, archive `79c36abd1ea108003baa737550210a71008a9a70a887c9a14c04aa533235f103`.

This remains the accepted source until Architect accepts a later candidate.

## Material runtime decisions

### ORCH-000131 — ACCEPTED

Safely reconciled a prior unresolved worker delivery as `PROVEN_NOT_SENT`; accepted source unchanged.

### ORCH-000132 — BLOCKED

Temporary launcher omitted required integer `input.nowMs`.

### ORCH-000133 — BLOCKED

Stale local-git runtime persistence was rejected; GitHub Contents became the required durable runtime seam.

### ORCH-000134 — BLOCKED

Spawned process could not resolve the qualified GitHub CLI executable.

### ORCH-000135 — INCONCLUSIVE

Temporary live composition used a no-op worker-persistence adapter; browser contact occurred without a real durable delivery intent.

### ORCH-000136 — ACCEPTED

Reconciled the lease and proved the defect was temporary composition, not accepted source ordering.

### ORCH-000137 — INCONCLUSIVE

Real durable delivery intent existed before browser contact, but pre-send observation failed before any send.

### ORCH-000138 — ACCEPTED

Decision:

`GH-DEC-138-WORKER-DELIVERY-000007-PROVEN-NOT-SENT-RECONCILIATION-ACCEPTED`

Zero exact probe occurrences proved delivery `000007` not sent; it was reconciled to `PROVEN_NOT_SENT`, its lease to `EXPIRED`, with no retry.

### ORCH-000139 — ACCEPTED documentation catch-up

Historical documentation projection catch-up through ORCH-000138 under the then-current documentation process.

### ORCH-000140 through ORCH-000152 — bounded live-composition/recovery chain

Resolved mutation-envelope, project-profile, GitHub CLI body, lease-acquisition, stale-lease, and recovery-binding defects without advancing accepted source.

### ORCH-000153 — ACCEPTED forward delivery

Decision:

`GH-DEC-153-FRESH-EXECUTOR-FORWARD-DELIVERY-000013-ACCEPTED`

Verified `WORKER-DELIVERY-EXECUTOR-000013 / SENT`, exactly one browser send, duplicate replay additional send `0`, retry false, active lease count returned to zero.

### ORCH-000154 through ORCH-000161 — Architect relay/trigger hardening

Diagnosed missing 9333 listener, rejected wrong-browser recovery, established dedicated Brave 9333 relay, separated relay health from exact target readiness, and preserved fail-closed trigger ambiguity handling.

### ORCH-000162 — ACCEPTED reconciliation

Decision:

`GH-DEC-162-ARCHITECT-TRIGGER-000004-PROVEN-NOT-SENT-RECONCILIATION-ACCEPTED`

Historical trigger `000004` was conclusively proven not sent. The old trigger was not retried; fresh trigger identity `000005` was authorized.

### ORCH-000163 — ACCEPTED automatic Architect wake

Decision:

`GH-DEC-163-AUTOMATIC-ARCHITECT-DOORBELL-TRIGGER-000005-ACCEPTED`

Verified trigger `000005 / SENT`, USER boundary `2 → 3`, matching exact payload `1 → 2`, attempted/confirmed `1/1`, second send `0`, duplicate replay additional send `0`, no response DOM/assistant-text read.

This closed the independent Architect-doorbell proof.

## ORCH-000164 — BLOCKED unattended-host bootstrap

Decision:

`GH-DEC-164-UNATTENDED-HOST-BOOTSTRAP-LINEAGE-CONFLICT-BLOCKED`

Reviewed publication:

`GH-PUB-164-AUTOMATIC-HOST-000025-BOOTSTRAP-BLOCKED-LINEAGE-CONFLICT-000001`

Verified facts:

- host identity `000025` and explicit bootstrap boundary for `DISPATCH-000164` were created/read back;
- one polling iteration was reached but zero valid iterations completed;
- host did not remain running;
- browser contact/send `0/0`;
- delivery/trigger/lease mutations `0/0/0`;
- failure code `WORKER_DELIVERY_LINEAGE_CONFLICT`.

Root cause accepted by Architect:

- immutable delivery `000013` intent contains `ORCH-000153 / DISPATCH-000153` and intent SHA `579ffd5c1b37aa9990e85060deff29c76f2c1f71d844ca97fefc242f86e23f03`;
- immutable delivery result binds to that exact intent SHA, same delivery ID and worker role, but omits explicit `messageId`/`dispatchId`;
- the accepted durable-snapshot hydrator requires explicit result lineage and therefore rejects the legacy result.

Repair policy:

**Do not rewrite historical delivery evidence.** Add a fail-closed backward-compatible hydration rule tied to the exact immutable intent, and persist explicit lineage on future results.

## Current next authority — ORCH-000165

Canonical milestone:

`ORCH.P0.SANDBOX.OPERATIONAL.WORKER.DELIVERY.LEGACY.RESULT.LINEAGE.HYDRATION.REPAIR.1A`

Dispatch:

`DISPATCH-000165`

This is a source/test repair only. It authorizes no host start, browser contact/send, delivery/trigger mutation, lease mutation, documentation mutation by Executor, or accepted-source pointer change.

If the candidate passes focused/relevant/full deterministic validation plus read-only hydration of real delivery `000013`, Executor must publish an immutable complete source snapshot for Architect acceptance.

Only after that repair is accepted should unattended-host bootstrap be retried under a fresh identity.
