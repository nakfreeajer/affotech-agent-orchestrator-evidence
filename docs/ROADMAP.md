Project: affotech-agent-orchestrator
Status: FUTURE-INTENT / INTENDED-SEQUENCE PROJECTION — NOT IMPLEMENTATION AUTHORITY
Owner: Architect
Machine authority: durable GitHub evidence and canonical Architect dispatches

# Roadmap

## Purpose

This roadmap records adopted or scheduled future work so intended direction survives cold start without being confused with current accepted behavior.

A roadmap entry creates **zero implementation authority**. Only a canonical Architect dispatch may authorize Executor work or mutation.

## Current governed sequence

### 1. Diagnose the remaining epoch-189 reconciliation invocation mismatch

ORCH-000184 accepted the permanent full-record caller contract. ORCH-000185 then hydrated and validated the full immutable epoch-189 revision but accepted reconciliation still returned:

`DENIED / EXPIRED_LEASE_RECONCILIATION_PROJECTION_INVALID`

before any external write.

Durable state remains unchanged: revision `000002` absent, index revision `377`, `nextLeaseEpoch=190`, same sole expired ACTIVE target lease, delivery `000013/SENT`, Architect trigger `000005/SENT`.

The next legal milestone is read-only ORCH-000186. It must compare the pure/preflight projection path with the actual reconciliation invocation field-for-field, including function arguments, time/releaser/previous-record/index bindings and Promise/await/error serialization behavior.

No reconciliation call is authorized in this diagnostic.

### 2. Close the expired epoch-189 lease

Only after the invocation-parity diagnostic is independently accepted may Architect authorize the smallest justified correction and one bounded recovery attempt.

Eventual closure remains:

- target revision `000002=EXPIRED` durable/read back;
- index advances from `377` to the accepted next revision removing only the target;
- `nextLeaseEpoch=190` unless a separately accepted contract says otherwise;
- `activeLeases=[]`;
- latest delivery remains `WORKER-DELIVERY-EXECUTOR-000013/SENT` during recovery;
- no unauthorized preparation/browser/host/trigger/source/protected-resource side effects.

### 3. Close worker-delivery preparation proof

After clean lease recovery is independently accepted, return to:

`ACQUIRE → transient actionKind=WORKER_DELIVERY → PREPARE → durable PREPARED intent → zero-browser PROVEN_NOT_SENT → RELEASE`

Avoid adding disposable launcher layers unless new evidence proves they are necessary.

### 4. Arm a fresh persistent Orchestrator host

After preparation composition is accepted, arm a fresh persistent host using the proven composition and prove clean idle/bootstrap behavior without forwarding its own bootstrap dispatch.

### 5. Full unattended canary

Publish a strictly newer canary dispatch and prove:

`Architect durable dispatch → persistent Orchestrator → durable worker intent → Executor exactly once → durable terminal → persistent Orchestrator → durable Architect trigger → Architect wake exactly once`

This is the core production-candidate threshold for the transport loop.

## Adopted post-core future work

### IDEA-0001 — Deterministic Architect documentation-closure marker

**Lifecycle:** `ADOPTED_FOR_FUTURE`

After core unattended transport reaches production-candidate qualification, define and implement a machine-readable Architect documentation-closure contract so the Orchestrator may deterministically gate a later mutating dispatch on closure-marker identity/existence.

The Orchestrator must not interpret documentation semantics or author documentation.

Promotion to `SCHEDULED` requires an Architect decision that places this work into an authorized future milestone sequence. Promotion to `IMPLEMENTED` requires independently accepted implementation evidence.

## Roadmap lifecycle rule

- `ADOPTED_FOR_FUTURE` means intended direction, not scheduled work.
- `SCHEDULED` means intended sequence, not authorization.
- `IMPLEMENTED` means accepted implementation; resulting truth is then reflected in normal current-state/architecture/history documentation.

Roadmap entries must never substitute for canonical prompts, dispatches, mutation envelopes, human authority, leases, or accepted evidence.
