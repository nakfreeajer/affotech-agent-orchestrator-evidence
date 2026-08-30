Project: affotech-agent-orchestrator
Status: FUTURE-INTENT / INTENDED-SEQUENCE PROJECTION — NOT IMPLEMENTATION AUTHORITY
Owner: Architect
Machine authority: durable GitHub evidence and canonical Architect dispatches

# Roadmap

## Purpose

This roadmap records adopted or scheduled future work so intended direction survives cold start without being confused with current accepted behavior.

A roadmap entry creates **zero implementation authority**. Only a canonical Architect dispatch may authorize Executor work or mutation.

Current truth remains in `docs/CURRENT_STATE.md` and accepted architecture in `docs/ARCHITECTURE.md`.

## Current governed sequence

### 1. Restore clean lease boundary

Current authority remains ORCH-000182 recovery-only.

Goal:

- reconcile the expired ORCH-000181 epoch-189 lease;
- return the mutation-lease index to zero active leases;
- preserve `LATEST_DELIVERY=WORKER-DELIVERY-EXECUTOR-000013/SENT` and zero unauthorized side effects.

This item is governed by current machine authority, not by this roadmap.

### 2. Close worker-delivery preparation proof

After clean recovery is independently accepted, return to the unresolved preparation seam from a clean boundary.

Required proof remains:

`ACQUIRE → transient actionKind=WORKER_DELIVERY → PREPARE → durable PREPARED intent → zero-browser PROVEN_NOT_SENT → RELEASE`

Avoid creating additional disposable launcher layers unless new evidence proves they are necessary.

### 3. Arm a fresh persistent Orchestrator host

After preparation composition is accepted, arm a fresh persistent host using the proven composition and prove clean idle/bootstrap behavior without forwarding its own bootstrap dispatch.

### 4. Full unattended canary

Publish a strictly newer canary dispatch and prove the complete automatic cycle without manual forwarding:

`Architect durable dispatch → persistent Orchestrator → durable worker intent → Executor exactly once → durable terminal → persistent Orchestrator → durable Architect trigger → Architect wake exactly once`

This is the core production-candidate threshold for the transport loop.

## Adopted post-core future work

### IDEA-0001 — Deterministic Architect documentation-closure marker

**Lifecycle:** `ADOPTED_FOR_FUTURE`  
**Source:** `docs/IDEA_INBOX.md#idea-0001--deterministic-architect-documentation-closure-marker`

After the core unattended transport reaches production-candidate qualification, define and implement a machine-readable Architect documentation-closure contract so the Orchestrator may deterministically gate a later mutating dispatch on closure-marker identity/existence.

The Orchestrator must not interpret documentation semantics or author documentation.

Promotion to `SCHEDULED` requires an Architect decision that places this work into an authorized future milestone sequence. Promotion to `IMPLEMENTED` requires independently accepted implementation evidence.

## Roadmap lifecycle rule

- `ADOPTED_FOR_FUTURE` means intended direction, not scheduled work.
- `SCHEDULED` means intended sequence, not authorization.
- `IMPLEMENTED` means accepted implementation; resulting truth is then reflected in normal current-state/architecture/history documentation.

Roadmap entries must never be used as substitutes for canonical prompts, dispatches, mutation envelopes, human authority, leases, or accepted evidence.
