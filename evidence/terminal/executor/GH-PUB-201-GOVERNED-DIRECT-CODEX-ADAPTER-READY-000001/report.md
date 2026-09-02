# ORCH-000201 Executor terminal report

Classification: `GOVERNED_DIRECT_CODEX_ADAPTER_READY_FOR_ARCHITECT_REVIEW`

Implemented and deterministically tested the injectable direct-Codex transport on the accepted ORCH-000165 source baseline. The adapter derives deterministic `CODEX-DIRECT-INVOCATION-EXECUTOR-<DISPATCH_ID>` identities, binds the exact compact GitHub dispatch locator, persists and reads back durable intent before spawn, observes the exact durable Executor terminal, persists and reads back the result, and suppresses duplicate or ambiguous re-spawn. Failure classes remain distinct and retry is never authorized.

Persistent host integration exposes the direct transport as an optional runtime-port route and skips legacy worker-delivery preparation in direct mode. BrowserRelay remains compatible but is not required. No live child Codex/model invocation was performed in this milestone.

Validation: focused host/direct transport tests 95/95 passed; full deterministic suite 833/833 passed; zero skipped/cancelled/unexpected tests.

Candidate source artifacts:

- `evidence/artifacts/orch-000201/manifest.json` — 103 files, SHA-256 `42f37c4fcd4b291e2edf4c14725b03287dc0150e9e2e4cca614d0f56ea2239b8`
- `evidence/artifacts/orch-000201/source.tar.gz` — SHA-256 `b6d87a5a041be0615a143965bb2cc8c5c35080633c74d70e4600d636a4503878`

The candidate is not accepted-source authority; Architect review is required. AFFOTECH, Drive, deployment, production/private data, BrowserRelay, browser ports, worker delivery, Architect trigger, lease, host runtime, and documentation state were not accessed or mutated.
