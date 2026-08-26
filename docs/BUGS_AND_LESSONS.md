Project: affotech-agent-orchestrator
Documentation sync boundary: through Architect-classified ORCH-000164 and canonical ORCH-000165 repair dispatch
Status: CURRENT HUMAN-READABLE PROJECTION
Machine authority: durable GitHub evidence and Architect decisions

# Bugs and Lessons

## 1. Permanent governance lessons

### Executor PASS is not acceptance

Executor terminal status is evidence only. Architect independently verifies and classifies exactly `ACCEPTED`, `BLOCKED`, `INCONCLUSIVE`, or `NO NEW REPORT`.

### No blind retry

For ambiguity-prone external mutation:

```text
pre-attempt boundary
→ durable intent/readback
→ one attempt
→ durable result OR AMBIGUOUS
→ read-only reconciliation
```

Never resend/retry merely because an attempt did not return clean success.

### Historical evidence must not be rewritten

A later repair or compatibility layer may explain or consume older evidence, but immutable historical evidence remains immutable in meaning. Do not backfill old records merely to satisfy a newer reader when the original binding can be proven safely another way.

### Architect owns documentation truth directly

For this project:

- Architect decides;
- Executor implements/runs/validates;
- Architect directly updates materially affected human-readable documentation;
- Orchestrator carries messages only.

Curator is not an active required role.

## 2. Delivery intent must exist before browser contact

Required order:

```text
prepareWorkerDeliveryIntent
→ durable GitHub write
→ exact readback/identity verification
→ BrowserRelay pre-send observation
→ send if eligible
```

Live composition must not bypass this ordering.

## 3. Runtime persistence and launch composition

Permanent lessons from ORCH-000118 through ORCH-000153:

- Orchestrator should run independently from the Executor terminal;
- PowerShell is launcher glue only;
- local git commit/push is the wrong runtime state transport;
- GitHub Contents/CAS semantics are the durable runtime seam;
- temporary launch glue is operational code and must satisfy accepted contracts exactly;
- missing `input.nowMs`, missing GitHub CLI resolution, missing `--input -`, invalid profiles, and no-op persistence adapters can all invalidate otherwise-correct source.

## 4. `PROVEN_NOT_SENT` is a first-class recovery state

The ORCH-000129/130 contract established:

- zero send counts remain zero;
- `LATEST_DELIVERY` does not advance to a non-sent delivery;
- exact-repeat recovery may be idempotent only with exact readback;
- conflict fails closed;
- `PROVEN_NOT_SENT` never means `SENT`.

## 5. Lease expiry is not mutation authority

Expired/stale leases require explicit reconciliation with exact identity/epoch/revision/scope/envelope binding. Recovery identity may not substitute for the original lease lineage.

## 6. Forward delivery requires durable result plus duplicate suppression

ORCH-000153 proved the worker-delivery pattern:

- fresh host/delivery identity;
- durable intent before browser contact;
- exactly one send;
- durable `SENT` result;
- duplicate replay additional send `0`;
- retry false;
- protected boundaries untouched.

A visible browser message alone is never sufficient proof.

## 7. Browser ownership and target readiness are separate gates

The Architect relay chain proved:

1. listener/process ownership;
2. CDP endpoint health;
3. exact registered conversation target;
4. usable composer;
5. durable trigger intent/readback;
6. exactly one send.

A visible browser window does not prove CDP health or governed target readiness.

## 8. Repeated text is not sufficient correlation

The repeated Architect wake payload `verify & next` cannot identify an attempt by content alone.

Required evidence includes durable trigger identity, pre-send USER boundary, matching-payload count, exact target binding, one-attempt semantics, and read-only reconciliation after ambiguity.

## 9. Fresh operation identity after proven non-send

After trigger `000004` was proven not sent, the residual exact draft did not authorize retry of the old trigger. A fresh trigger identity `000005` was required.

Future mutation authority always comes from a current authorized operation identity, not residual UI state.

## 10. ORCH-000163 — exact automatic Architect wake proof

Accepted proof:

- trigger `ARCH-TRIGGER-9333-000005 / SENT`;
- USER count `2 → 3`;
- matching exact payload `1 → 2`;
- attempted/confirmed `1/1`;
- second send `0`;
- duplicate replay additional send `0`;
- no assistant response text/DOM read.

The Orchestrator only rings the doorbell; Architect remains the decision-maker.

## 11. Documentation must not lag operational truth

Rony changed this project to `ARCHITECT_DIRECT` documentation ownership on 2026-08-26.

Documentation continuity is part of Architect closure and must not depend on a separate relay worker.

## 12. ORCH-000164 — reader/writer schema compatibility must be explicit

The first unattended-host bootstrap exposed a new class of defect.

Facts:

- worker delivery `000013` is accepted `SENT` evidence;
- its immutable intent contains `messageId=ORCH-000153`, `dispatchId=DISPATCH-000153`, and intent SHA `579ffd5c1b37aa9990e85060deff29c76f2c1f71d844ca97fefc242f86e23f03`;
- its immutable result contains the exact same `intentSha256`, delivery ID and worker role, but omits explicit `messageId`/`dispatchId`;
- the accepted durable-snapshot hydrator requires explicit result lineage and returned `WORKER_DELIVERY_LINEAGE_CONFLICT`;
- the persistent host therefore failed before any browser contact/send.

Lesson:

A durable format produced by an accepted writer and a stricter later reader must have an explicit compatibility rule. Do not repair this by rewriting historical records.

Safe compatibility rule:

- if legacy result lineage fields are absent, resolve lineage only from the exact immutable intent;
- require exact `intentSha256`, delivery ID, and worker-role binding;
- require valid intent message/dispatch lineage;
- never infer from timestamps, current pointers, payload text, or another delivery;
- explicit conflicting result lineage remains a hard conflict;
- future writers should persist explicit lineage fields so the compatibility path remains legacy-only.

## 13. Bootstrap boundary success does not imply host readiness

ORCH-000164 successfully created/read back the `DISPATCH-000164` bootstrap boundary, but the host still was not ready because durable snapshot hydration failed immediately afterward.

Lesson:

Persistent-host readiness requires the whole read-only polling snapshot to hydrate cleanly. A correct self-echo watermark is necessary but not sufficient.

Do not claim an unattended host is armed until multiple valid polling iterations complete with zero unauthorized side effects.

## 14. Current repair direction

ORCH-000165 is intentionally source/test-only:

- backward-compatible legacy result hydration;
- explicit future result lineage persistence;
- no historical evidence rewrite;
- no host/browser/delivery/trigger/lease mutation;
- read-only real-000013 compatibility check;
- complete immutable candidate source preservation for Architect review.

Only after this repair is accepted should persistent-host bootstrap be retried under a fresh host identity.

## 15. Current operational success criterion

Two transport legs are independently proven:

1. forward delivery to Executor exactly once — ORCH-000153;
2. automatic Architect wake exactly once — ORCH-000163.

Remaining success means combining them into a reliable unattended governed cycle while preserving durable authority, exact identity/hashes, duplicate suppression, no blind retry, protected project boundaries, zero response scraping, and Architect-direct documentation closure.
