Project: affotech-agent-orchestrator
Projection input boundary: 9e27a6e862e8ff42bf0f6513785863090cb7ceff
Covered event range: 1-51
Status: PENDING_ARCHITECT_SEMANTIC_ACCEPTANCE
Human-readable projection only; durable GitHub evidence and Architect decisions remain machine authority.

# Architecture

- Durable detailed evidence remains machine authority.
- The project-event ledger is a chronological projection and index over that evidence.
- First-hand producer ownership and deterministic producerEventKey identity provide event integrity and idempotency.
- Immutable event records and a compare-and-swap index preserve the canonical chain.
- Curator is an optional, on-demand human-readable documentation projection.
- A Curator cursor can advance only after documentation preservation/readback and Architect semantic acceptance.
- The accepted event-ledger state ends at sequence 51.
- durable GitHub evidence and Architect decisions are machine authority
- chronological reconstructable event ledger through 51
- Curator is on-demand human-readable projection
- variable coherent ranges and variable-length post-ledger overlays
- canonical-history summaries preserve classifications without replacing event history
- post-ledger overlays do not rewrite history
- cursor advances only after docs preservation/readback and Architect acceptance
- mutating milestones require immutable pre-mutation authority checkpoints
- persistent host remains governed by current-lineage selection, exact binding, leases, exactly-once, no blind retry, control precedence, no assistant-response-text authority
- AFFOTECH remains separate/protected
- Post-ledger overlay ORCH-000078: BLOCKED; no canonical sequence is assigned.
- Post-ledger overlay ORCH-000079: ACCEPTED; no canonical sequence is assigned.
- Post-ledger overlay ORCH-000080: BLOCKED; no canonical sequence is assigned.
- Post-ledger overlay ORCH-000081: INCONCLUSIVE; no canonical sequence is assigned.
- Post-ledger overlay ORCH-000082: INCONCLUSIVE; no canonical sequence is assigned.
- Post-ledger overlay ORCH-000083: ACCEPTED; no canonical sequence is assigned.
- Post-ledger overlay ORCH-000084: BLOCKED; no canonical sequence is assigned.
- Post-ledger overlay ORCH-000085: ACCEPTED; no canonical sequence is assigned.
- Post-ledger overlay ORCH-000086: BLOCKED; no canonical sequence is assigned.
- Post-ledger overlay ORCH-000087: ACCEPTED; no canonical sequence is assigned.

This does not claim continuous automatic Curator operation or a live cursor.
