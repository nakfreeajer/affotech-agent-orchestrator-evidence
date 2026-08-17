Project: affotech-agent-orchestrator
Projection input boundary: fed93e71ec117121374a0f26e72be63143ffa792
Covered event range: 1-15
Status: PENDING_ARCHITECT_SEMANTIC_ACCEPTANCE
Human-readable projection only; durable GitHub evidence and Architect decisions remain machine authority.

# Bugs and Lessons

## Accepted root causes

- SOURCE_ACCEPTED identity collision: decisionId was selected before acceptedSourcePublicationId.
- Stored-record self-hash validation defect: validateStored hashed a record containing recordSha256.

## Accepted countermeasures

- SOURCE_ACCEPTED uses a distinct deterministic identity binding.
- Stored-record validation excludes recordSha256 from its canonical self-hash.

## Fail-closed lessons

- Do not blindly retry after an ambiguous mutation.
- Reconcile read-only first.
- Preserve a valid canonical prefix.

Evidence: evidence/terminal/executor/GH-PUB-064-PROJECT-MEMORY-LIVE-EVENT-CUTOVER-ROOT-CAUSE-RECONCILIATION-000001/terminal.json; evidence/terminal/executor/GH-PUB-065-PROJECT-MEMORY-LIVE-EVENT-CUTOVER-REPAIR-000001/terminal.json.
