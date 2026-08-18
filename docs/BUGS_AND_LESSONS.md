Project: affotech-agent-orchestrator
Projection input boundary: 10e3fba6ab2f55f8957509d500e38120629072aa
Covered event range: 1-51
Status: PENDING_ARCHITECT_SEMANTIC_ACCEPTANCE
Human-readable projection only; durable GitHub evidence and Architect decisions remain machine authority.

# Bugs and Lessons

## Accepted root causes

- SOURCE_ACCEPTED identity-collision defect: distinct producer identity binding is the accepted repair.
- Stored-record self-hash defect: validation excludes the stored self-hash field.

## Fail-closed lessons

- Do not blindly retry after an ambiguous mutation.
- Reconcile read-only first.
- Preserve a valid canonical prefix.
- SOURCE_ACCEPTED identity collision and distinct identity repair
- stored-record self-hash defect and accepted validation repair
- no blind retry; read-only reconciliation first
- ORCH-000076 stale-lineage and immutable terminal evidence lessons
- ORCH-000078 fixed-final-sequence and ORCH-000079 variable-range repair
- ORCH-000080 semantic omission and Sequence 0 lesson
- ORCH-000081 authority-hash ambiguity
- ORCH-000083 checkpoint countermeasure
- ORCH-000084 multi-overlay fail-closed-before-write
- ORCH-000085 variable-length overlay repair
- ORCH-000078: BLOCKED; evidence evidence/decisions/GH-DEC-078f2c4a9d1e6b37c805a4f2d9b761e3/decision.json.
- ORCH-000079: ACCEPTED; evidence evidence/decisions/GH-DEC-079a5c7e2d1b4f6380e9a52c7d31b846/decision.json.
- ORCH-000080: BLOCKED; evidence evidence/decisions/GH-DEC-080d6b4e1a9c3752f8e40b7a61c293d5/decision.json.
- ORCH-000081: INCONCLUSIVE; evidence evidence/decisions/GH-DEC-081c4e7b2a9d6f1380b5c4e7a2d961f3/decision.json.
- ORCH-000082: INCONCLUSIVE; evidence evidence/decisions/GH-DEC-082b7e4a1c9d5630f8a2c41e7b695d30/decision.json.
- ORCH-000083: ACCEPTED; evidence evidence/decisions/GH-DEC-083e6a1c4b7d29f5083a61e2c9f4b735/decision.json.
- ORCH-000084: BLOCKED; evidence evidence/decisions/GH-DEC-084c5a8e2d7b1f63409e5a72c8d31b46/decision.json.
- ORCH-000085: ACCEPTED; evidence evidence/decisions/GH-DEC-085a4f7c2e9d1b6305a8c41f7d26e983/decision.json.
