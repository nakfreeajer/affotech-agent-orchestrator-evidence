Project: affotech-agent-orchestrator
Documentation sync boundary: through Architect-accepted ORCH-000163 and Rony documentation-ownership directive of 2026-08-26
Status: CURRENT HUMAN-READABLE PROJECTION
Machine authority: durable GitHub evidence and Architect decisions

# Bugs and Lessons

## 1. Permanent governance lessons

### Executor PASS is not acceptance

Executor terminal status is evidence only. Architect must independently verify important claims and classify exactly `ACCEPTED`, `BLOCKED`, `INCONCLUSIVE`, or `NO NEW REPORT`.

### No blind retry

For ambiguity-prone external mutation:

```text
pre-attempt boundary
→ durable intent/readback
→ one attempt
→ durable result OR AMBIGUOUS
→ read-only reconciliation
```

Never resend/retry merely because the previous attempt did not return a clean success.

### Historical ambiguity must not be rewritten

A later reconciliation may prove `SENT` or `PROVEN_NOT_SENT`, but historical ambiguous evidence remains historically ambiguous. Recovery is a new durable record/state transition, not retroactive rewriting.

### Architect owns documentation truth directly

For this project:

- Architect decides;
- Executor implements/runs/validates;
- Architect directly updates all relevant human-readable project documentation;
- Orchestrator carries messages only.

Do not create a separate documentation relay merely to keep project truth current. Historical Curator evidence remains valid, but Curator is not an active required role under current policy.

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

## 3. Independent process and runtime persistence

A real separate local Orchestrator process was proven operationally possible.

Permanent lessons:

- Orchestrator should run independently from Executor terminal state;
- PowerShell is launcher glue only;
- Orchestrator does not need an AI model;
- local git commit/push is the wrong runtime state transport;
- GitHub Contents/CAS semantics are the durable runtime seam.

## 4. Launch glue is operational code

Several failures came from temporary composition rather than accepted source:

- omitted `input.nowMs`;
- missing `gh` executable resolution;
- missing GitHub CLI `--input -` JSON stdin behavior;
- invalid temporary project profile;
- no-op worker-persistence adapter;
- malformed Brave launch composition.

Lesson:

Treat live launcher/adapter composition as production-grade behavior. Satisfying an interface shape is not enough; the exact durable side effect and readback must occur.

## 5. `PROVEN_NOT_SENT` is a first-class recovery state

ORCH-000129/130 established the recovery-only contract for a delivery that is durably ARMED but later proven not sent.

Required semantics:

- zero send counts remain zero;
- `LATEST_DELIVERY` must not advance to a non-sent delivery;
- exact-repeat recovery may be idempotent only with exact readback;
- conflict fails closed;
- `PROVEN_NOT_SENT` must never be reported as `SENT`.

ORCH-000131 and ORCH-000138 applied this safely.

## 6. Lease expiry is not mutation authority

Expired/stale leases require explicit reconciliation with exact identity/epoch/revision/scope/envelope binding.

ORCH-000148 through ORCH-000152 reinforced this lesson: a recovery binding mismatch must fail closed until the exact stale lease lineage is used.

## 7. Forward delivery must be proven by durable result plus duplicate suppression

ORCH-000153 established the successful worker-delivery pattern:

- fresh host identity;
- fresh delivery identity;
- durable intent/readback before browser send;
- exactly one send;
- durable `SENT` result;
- duplicate replay additional sends `0`;
- no retry;
- protected boundaries untouched.

Lesson:

A visible message alone is not enough. Exactly-once transport requires durable intent/result state plus a duplicate-replay proof.

## 8. Browser ownership must be diagnosed, not guessed

The Architect relay hardening chain exposed multiple browser-control mistakes:

- ORCH-000154: port 9333 unavailable;
- ORCH-000155: Chrome was launched even though Brave was the intended relay;
- ORCH-000156: read-only process/listener diagnostics correctly proved no 9333 listener and no Brave process with the debug-port switch;
- ORCH-000157: malformed Brave launch composition caused process exit and a profile path to appear as a positional file URL;
- ORCH-000158: exact Brave argv/profile composition finally produced a healthy dedicated 9333 listener.

Lesson:

Do not infer CDP health from a visible browser window. Prove listener ownership, executable lineage, debug-port switch, dedicated profile, `/json/version`, and `/json/list`.

## 9. Healthy relay is different from correct target registration

ORCH-000158 proved a healthy Brave 9333 relay while the registered Architect conversation target was still absent.

Lesson:

Separate these gates:

1. process/listener ownership;
2. CDP endpoint health;
3. exact registered conversation target present uniquely;
4. usable visible empty composer;
5. durable trigger intent/readback;
6. exactly one send.

Do not conflate a healthy port with a ready governed target.

## 10. Repeated text is not sufficient correlation

The Architect doorbell payload `verify & next` is intentionally repeated across cycles. Therefore payload equality alone cannot prove which attempt produced which visible message.

ORCH-000159 through ORCH-000162 reinforced the need for:

- durable trigger identity;
- pre-send USER boundary;
- matching-payload count;
- exact target binding;
- one-attempt semantics;
- read-only reconciliation after ambiguity;
- no assistant-response scraping.

Historical trigger `000004` was ultimately proven not sent rather than blindly retried.

## 11. Fresh trigger identity after proven non-send

After ORCH-000162 proved trigger `000004` not sent, the residual exact `verify & next` draft could not simply be treated as permission to retry the old trigger.

A fresh trigger identity `000005` was required.

Lesson:

When an old ambiguous intent is resolved `PROVEN_NOT_SENT`, future mutation authority comes from a fresh Architect-authorized operation identity, not from the old intent or from residual browser state.

## 12. ORCH-000163 — exact automatic Architect wake proof

ORCH-000163 is the accepted doorbell proof:

- trigger `ARCH-TRIGGER-9333-000005`;
- state `SENT`;
- USER count `2 → 3`;
- matching exact payload count `1 → 2`;
- newly appended USER message exact `verify & next`;
- composer empty after send;
- attempted/confirmed `1/1`;
- second send `0`;
- duplicate replay additional send `0`;
- retry false;
- reconciliation false;
- assistant response text/DOM not read;
- browser launch/navigation `0/0`;
- protected/source mutations `0`.

Lesson:

The return path can be proven exactly once without reading Architect response content. The Orchestrator only needs to ring the doorbell; Architect remains the decision-maker.

## 13. Documentation must not lag operational truth

The human-readable docs remained at the ORCH-000138 boundary even though the project had advanced through forward delivery and automatic Architect wake proof.

Rony corrected the governance model on 2026-08-26: Architect must update all relevant documents directly.

Lesson:

Documentation continuity is part of Architect closure. Do not allow a separate worker dependency to make architecture/current-state/history stale after accepted milestones.

## 14. Over-engineering lesson

The user's core need remains simple:

```text
observe durable governed dispatch
→ deliver exact message once
→ observe durable result
→ wake Architect once
→ Architect verifies/decides
```

Keep the durable guarantees that prevent corruption/duplicate side effects, but do not turn the messenger into another application platform.

Simplify only after the end-to-end governed cycle is reliable.

## 15. Current operational success criterion

Two critical legs are now proven independently:

1. fresh forward delivery to Executor exactly once — ORCH-000153;
2. automatic Architect wake exactly once — ORCH-000163.

The remaining success criterion is to combine them into a reliable unattended governed cycle while preserving:

- durable authority;
- exact IDs/hashes;
- duplicate suppression;
- no blind retry;
- protected role/project boundaries;
- zero assistant-response scraping;
- Architect-direct documentation closure.
