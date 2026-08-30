Project: affotech-agent-orchestrator
Status: FUTURE-INTENT PROJECTION — NOT CURRENT AUTHORITY
Owner: Architect
Machine authority: durable GitHub evidence and canonical Architect dispatches

# Idea Inbox

## Purpose

This document preserves material future ideas that would be costly to lose after Architect/session/machine cold start.

It is **not** current-state documentation and creates **zero implementation authority**.

An entry in this file does not mean the capability exists, is accepted architecture, is scheduled, or may be implemented without a canonical Architect dispatch.

Canonical lifecycle:

`PROPOSED → ADOPTED_FOR_FUTURE → SCHEDULED → IMPLEMENTED`

- `PROPOSED` — worth remembering, not yet adopted as project direction.
- `ADOPTED_FOR_FUTURE` — deliberately retained as intended future direction, not current authority.
- `SCHEDULED` — placed into the intended roadmap/sequence, still not implementation authority.
- `IMPLEMENTED` — implementation independently accepted; resulting truth must be promoted to normal project documentation.

Before creating a new idea, Architect checks this file and `docs/ROADMAP.md` for an equivalent item. Duplicate ideas are updated/promoted rather than recreated.

---

## IDEA-0001 — Deterministic Architect documentation-closure marker

**Status:** `ADOPTED_FOR_FUTURE`  
**Origin:** Rony/Architect documentation-governance discussion, 2026-08-30/31  
**Authority boundary:** `NOT IMPLEMENTATION AUTHORITY`

### Problem

Architect-direct documentation closure is now a mandatory governance invariant, but the accepted Orchestrator source does not yet contain a dedicated machine-readable `DOCUMENTATION_CLOSURE` contract that the persistent Orchestrator can validate mechanically before routing a later mutating dispatch.

Current enforcement is Architect ordering:

`STATE/FULL documentation update → durable readback → next mutating implementation dispatch`

### Concept

Introduce a governed machine-readable Architect documentation-closure record/marker that binds the reviewed decision/directive, documentation-impact class, required documentation boundary, and durable closure identity.

Once separately implemented and accepted, the Orchestrator may deterministically check marker identity/existence before routing a next mutating implementation dispatch.

The Orchestrator must never decide documentation meaning, choose affected documents, judge prose sufficiency, or author documentation.

### Revisit / promotion condition

Revisit after the core unattended Orchestrator transport reaches production-candidate qualification. Before implementation, Architect must define the exact schema, authority boundary, compatibility behavior, and failure semantics in a separately governed milestone.

### Relationship

Governance source:

- `governance/ORCHESTRATOR_BOOTSTRAP.md` v1.3
- `governance/PROJECT_ORCHESTRATION_POLICY.md` v1.3
- `governance/PROJECT_MEMORY_EVENT_LEDGER_POLICY.md` v1.3

Roadmap placement: post core unattended-cycle qualification; see `docs/ROADMAP.md`.
