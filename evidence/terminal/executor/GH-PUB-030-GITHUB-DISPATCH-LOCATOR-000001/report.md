# ORCH.P0.WORKER.RELAY.GITHUB.DISPATCH.LOCATOR.TRANSPORT.1A

Result: PASS
Classification: WORKER_RELAY_GITHUB_DISPATCH_LOCATOR_TRANSPORT_READY_FOR_ARCHITECT_REVIEW

Dispatch: DISPATCH-000030 / ORCH-000030
Fresh GitHub parent: 363caf840e7bf791a283ad1d26951d282d5617f6
Canonical prompt SHA-256: 110bd1f0afed1de31db6d0fa0bd1c04d36c15680576f2a10175965ba5873408d

Implementation scope:
- src/browser-relay/worker-relay.js
- test/worker-relay.test.js
- exactly two authorized files modified; no other source/test/config files changed
- isolated accepted workspace; canonical quarantined root untouched

GITHUB_DISPATCH_LOCATOR_V1:
execute github dispatch <repository> <dispatchId>

The locator is transport only. Recipient validation requires immutable dispatch identity, current dispatch pointer, target-role match, canonical prompt path/hash, current Architect prompt pointer, current Architect decision, and exact canonical prompt SHA before execution.

Locator delivery intent fields:
deliveryPayloadKind, deliveryPayloadText, deliveryPayloadSha256, deliveryPayloadByteCount.
Locator payloads are ASCII, single-line, repository-bound, dispatch-bound, <=160 UTF-8 bytes, and hash-bound. Canonical prompt path/hash remain in the durable intent. Legacy full-prompt intents remain valid.

Delivery confirmation:
one send action is required; an empty composer confirms SENT structurally. A non-empty composer yields RECONCILIATION_REQUIRED with retryAuthorized=false. Response DOM is never used.

Validation:
- node --check src/browser-relay/worker-relay.js: PASS
- node --check test/worker-relay.test.js: PASS
- node --test test/worker-relay.test.js: 35 passed, 0 failed, 0 skipped
- npm test: 237 passed, 0 failed, 0 skipped

Sanitized snapshot:
- filename: orchestrator-source-snapshot-p0-github-dispatch-locator-1a.tar.gz
- size: 48035 bytes
- SHA-256: db0ae6ce35ca02839d6f018842a48aff7a83254ff801d478434a4da797aba389
- regular source/config/test files: 66
- path-sorted manifest SHA-256: 290c40a3d96d127dd3e1dfe56eb1e86f3dc92d6a6b55d2aa97028e0e1f2df77a
- base64 encoded length: 64048
- immutable parts: 9; metadata: evidence/artifacts/github-dispatch-locator-1a/parts.json

The unresolved delivery WORKER-DELIVERY-EXECUTOR-000002 remains AMBIGUOUS. The stale composer was not contacted or changed. Delivery 000003, LATEST_RESULT, and Architect trigger 000002 were not created.

No browser contact occurred. Ports 9444, 9333, 9222, and 9223 were untouched. AFFOTECH, Drive, Curator, and accepted pointers were untouched.
