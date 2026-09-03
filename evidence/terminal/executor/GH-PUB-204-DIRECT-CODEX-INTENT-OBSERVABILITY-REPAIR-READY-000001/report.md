# ORCH-000204 Executor terminal report

Classification: `DIRECT_CODEX_INTENT_OBSERVABILITY_REPAIR_READY_FOR_ARCHITECT_REVIEW`

Implemented a bounded observability repair for the direct-Codex intent boundary. The GitHub contents client now preserves typed post-write readback status/reason fields and available HTTP status without changing the governing precheck → one PUT → exact readback semantics. The direct-Codex adapter reports typed create status/reason/HTTP status, readback attempted/status/reason/match, and an exact ambiguity phase (`CREATE`, `READBACK`, or `LINEAGE`) while remaining fail-closed and retry-free.

The stranded ORCH-000202 intent was read-only verified and not modified; no result or probe terminal was created. No live Codex child/model invocation occurred. Deterministic reproduction and tests confirm ambiguous create, missing/exceptional/mismatched readback, accepted exact readback, duplicate suppression, and no second create/retry behavior.

Validation: focused and relevant suites 142/142 passed; full deterministic suite 844/844 passed; zero failures, skips, or cancellations.

Candidate source artifacts:

- `evidence/artifacts/orch-000204/manifest.json` — 103 files, SHA-256 `ee7aca2665853e8ebb9d0e0de99b510d84b7fa41282ebed88a1fa6b3c49bf3bf`
- `evidence/artifacts/orch-000204/source.tar.gz` — SHA-256 `34c4dd17b3475932de7513a4f0f395b0cb285229413128b357a6566da0134521`

The candidate is not accepted-source authority; Architect review is required. Browser, host, worker-delivery, registration, lease, Architect-trigger, source outside the authorized paths, docs, governance, AFFOTECH, Drive, deployment, private-data, and protected-port activity remained zero.
