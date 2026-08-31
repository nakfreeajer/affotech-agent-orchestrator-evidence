Project: affotech-agent-orchestrator
Status: FUTURE-INTENT / INTENDED-SEQUENCE PROJECTION — NOT IMPLEMENTATION AUTHORITY
Owner: Architect
Machine authority: durable GitHub evidence and canonical Architect dispatches

# Roadmap

## Purpose

This roadmap records adopted or scheduled future work so intended direction survives cold start without being confused with current accepted behavior.

A roadmap entry creates **zero implementation authority**. Only a canonical Architect dispatch may authorize Executor work or mutation.

## Current governed sequence

### 1. Close the expired epoch-189 lease with the corrected caller contract

ORCH-000184 accepted the root cause of ORCH-000183's projection denial:

`CALLER_ARGUMENT_DEFECT`

The reduced `activeLeases` index entry was passed where expiry reconciliation requires the full immutable `MUTATION_LEASE` revision. Accepted source does not require a patch.

The next bounded recovery must:

- require lease-index revision `377`, `nextLeaseEpoch=190`, exactly the epoch-189 target entry, and revision `000002` absent;
- hydrate the exact immutable revision `000001` from the target entry's canonical `recordPath`;
- verify identity/revision/hash/holder/lineage/scope/envelope/expiry bindings;
- pure-project and validate the EXPIRED transition before external mutation;
- invoke accepted `reconcileExpiredMutationLease` exactly once with the full immutable lease record;
- require durable revision `000002=EXPIRED` and index `377→378` removing only the target;
- require `nextLeaseEpoch=190` and `activeLeases=[]`;
- keep new lease/preparation/delivery/browser/host/trigger/source/protected-resource side effects zero.

This roadmap item is not the mutation authority; the canonical ORCH-000185 dispatch governs execution.

### 2. Close worker-delivery preparation proof

After clean lease recovery is independently accepted, return to:

`ACQUIRE → transient actionKind=WORKER_DELIVERY → PREPARE → durable PREPARED intent → zero-browser PROVEN_NOT_SENT → RELEASE`

Avoid adding disposable launcher layers unless new evidence proves they are necessary.

### 3. Arm a fresh persistent Orchestrator host

After preparation composition is accepted, arm a fresh persistent host using the proven composition and prove clean idle/bootstrap behavior without forwarding its own bootstrap dispatch.

### 4. Full unattended canary

Publish a strictly newer canary dispatch and prove:

`Architect durable dispatch → persistent Orchestrator → durable worker intent → Executor exactly once → durable terminal → persistent Orchestrator → durable Architect trigger → Architect wake exactly once`

This is the core production-candidate threshold for the transport loop.

## Adopted post-core future work

### IDEA-0001 — Deterministic Architect documentation-closure marker

**Lifecycle:** `ADOPTED_FOR_FUTURE`  
**Source:** `docs/IDEA_INBOX.md#idea-0001--deterministic-architect-documentation-closure-marker`

After core unattended transport reaches production-candidate qualification, define and implement a machine-readable Architect documentation-closure contract so the Orchestrator may deterministically gate a later mutating dispatch on closure-marker identity/existence.

The Orchestrator must not interpret documentation semantics or author documentation.

Promotion to `SCHEDULED` requires an Architect decision that places this work into an authorized future milestone sequence. Promotion to `IMPLEMENTED` requires independently accepted implementation evidence.

## Roadmap lifecycle rule

- `ADOPTED_FOR_FUTURE` means intended direction, not scheduled work.
- `SCHEDULED` means intended sequence, not authorization.
- `IMPLEMENTED` means accepted implementation; resulting truth is then reflected in normal current-state/architecture/history documentation.

Roadmap entries must never substitute for canonical prompts, dispatches, mutation envelopes, human authority, leases, or accepted evidence.
