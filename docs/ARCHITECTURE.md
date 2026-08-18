Project: affotech-agent-orchestrator
Projection input boundary: cecc570ae3f7ebe6a81d6c23f15c97be5e45e762
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

This does not claim continuous automatic Curator operation or a live cursor.
