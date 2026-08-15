# ORCH.P0.WORKER.RELAY.AUTHORITY.AND.EXACTLY.ONCE.CONTRACT.1A.TESTED.STATE.RECOVERY.1A

## Result

PASS — `WORKER_RELAY_TESTED_STATE_RECOVERED_FOR_ARCHITECT_REVIEW`

This is evidence recovery only. No source/test file was modified, no Executor or Documentation Curator session was registered, no worker browser was connected, no worker prompt or Architect doorbell was sent, and ports 9222/9223 were untouched.

## Authority and reconciliation

- Repository: `nakfreeajer/affotech-agent-orchestrator-evidence`, branch `main`.
- Fresh parent used: `1de7bb1fac82f24f66569a55805d3f20b28e28ee`.
- Dispatch: `DISPATCH-000021`; canonical prompt: `ORCH-000021`.
- Canonical prompt SHA-256: `5fff161a863ce1171d60559e48cdca62ff09f3a4b67b4203dd5e1aab5725de8f`.
- Accepted pointer remained `GH-PUB-1523df677bcea85f743d9f51e67c4f52`.
- The previous blocked terminal `GH-PUB-a516a004cb90e206d55d6b2bb4e49582` was preserved.

## 66-file manifest recovery

The immutable `manifest.txt` was parsed using only lines matching exactly `<64 lowercase hex SHA-256><two spaces><relative path>`. The transport wrapper lines were ignored as non-entry lines; they were not treated as source data.

- Parsed entries: 66.
- Unique paths: 66.
- Workspace paths: 66.
- Missing: 0.
- Extra: 0.
- Changed hashes: 0.
- Normalized LF manifest SHA-256: `b5a98c579fb17f6bd81e894f5e4e5b31df3a38c954558246d2b6b4574ec59117`.
- `src/browser-relay/worker-relay.js`: `0b16efd3aec9b424391b6f6f96b00008a0be0a82aa7c503eb14c4c0af6bf58a2`.
- `test/worker-relay.test.js`: `331d3b8166be45c6b29a1017f7d47ef5dffb048554438d6a7336fa2220a9c3f5`.

## Literal worker-relay contract

Supported role enum is exactly: `executor`, `documentation_curator`. They are distinct exact values and cannot alias.

### Worker authority

- Immutable path: `evidence/worker-sessions/authorities/<workerRole>/<authorityId>.json`.
- Current pointer: `evidence/current/worker/<workerRole>/LATEST_AUTHORITY.json`.
- `recordType`: `WORKER_AUTHORITY`.
- Fields: `schemaVersion`, `recordType`, `workerRole`, `authorityId`, `generationId`, `missionId`, `state`, `createdAt`, `createdByRole`, `supersedesAuthorityId`, `authoritySha256`.
- Hash: SHA-256 of UTF-8 `JSON.stringify` of the authority payload fields in insertion order, excluding `authoritySha256`.
- Source-allowed state: `ACTIVE`; provenance is `createdByRole = architect`.
- Fail closed on unsupported role, missing/invalid IDs or mission, non-ACTIVE state, invalid time, non-Architect provenance, invalid supersession lineage, or hash/pointer mismatch.

### Worker registration

- Immutable path: `evidence/worker-sessions/registrations/<workerRole>/<registrationId>.json`.
- Current pointer: `evidence/current/worker/<workerRole>/LATEST_REGISTRATION.json`.
- `recordType`: `WORKER_REGISTRATION`.
- Fields: `schemaVersion`, `recordType`, `workerRole`, `registrationId`, `authorityId`, `authoritySha256`, `generationId`, `missionId`, `conversationId`, `conversationUrl`, `relayPort`, `state`, `createdAt`, `createdByRole`, `supersededBy`, `consumed`, `registrationSha256`.
- Hash: SHA-256 of UTF-8 `JSON.stringify` of the registration payload fields in insertion order, excluding `registrationSha256`.
- Registration must exactly bind authority ID/hash, role, generation, mission, conversation ID/URL, and relay port. `state = ACTIVE`, `consumed = false`, and `supersededBy = null` are required.
- Fail closed on any binding, field, hash, pointer, provenance, port, time, consumed, or supersession defect.

### Canonical prompt resolution

The verified dispatch fields consumed are `dispatchState`, `dispatchId`, `messageId`, `targetRole`, `canonicalPromptPath`, and `canonicalPromptSha256`. Dispatch must be READY; targetRole must equal the registered workerRole; prompt path must be under `evidence/prompts/` without traversal/backslashes; exact GitHub prompt bytes are fetched and hashed before use. Only those canonical bytes become payload. Issue text/comments, DOM, clipboard, assistant responses, and invented identities/ports are forbidden authorities.

### Worker delivery

- Source-defined base path: `evidence/worker-deliveries/<workerRole>/<deliveryId>`.
- The verified source does not define separate intent-path, result-path, or current-delivery-pointer helper formulas; no such formulas are invented in this recovery evidence. The source exports only the shared `workerDeliveryPath(workerRole, deliveryId)` base formula.
- Intent `recordType`: `WORKER_DELIVERY_INTENT`.
- Intent fields: `schemaVersion`, `recordType`, `deliveryId`, `workerRole`, `dispatchId`, `messageId`, `canonicalPromptPath`, `canonicalPromptSha256`, `authorityId`, `authoritySha256`, `registrationId`, `registrationSha256`, `conversationId`, `conversationUrl`, `relayPort`, `intendedSendCount`, `state`, `createdAt`, `intentSha256`.
- Result `recordType`: `WORKER_DELIVERY_RESULT`.
- Result fields: `schemaVersion`, `recordType`, `deliveryId`, `intentSha256`, `workerRole`, `outcome`, `attemptedSendCount`, `confirmedSendCount`, `browserDisconnected`, `responseDomRead`, `resultRecordedAt`, `resultSha256`.
- Each hash is SHA-256 of UTF-8 `JSON.stringify` of its payload in insertion order, excluding its hash field.
- Outcomes: `SENT`, `FAILED_BEFORE_SEND`, `AMBIGUOUS`.
- Intent is `ARMED` before send with `intendedSendCount = 1`; `SENT` requires attempted=1 and confirmed=1; `FAILED_BEFORE_SEND` confirms zero; `AMBIGUOUS` requires `RECONCILIATION_REQUIRED`, retry false, and confirmed zero; `responseDomRead = false`.

Suppressing controls are exactly `PAUSED_BY_RONY`, `STOP`, `ABORT_CURRENT_WORKER`, `RECONCILIATION_REQUIRED`, and `CIRCUIT_OPEN`. Role, mission, authority, registration, dispatch, prompt, conversation, port, state, lineage, and hash checks are exact; no parallel shared-state worker mutation is authorized.

## Validation and archive preservation

- `node --check src/browser-relay/worker-relay.js`: PASS.
- `node --check test/worker-relay.test.js`: PASS.
- Full suite: 219 passed, 0 failed.
- New archive: `orchestrator-source-snapshot-worker-relay-tested-state-recovery-1a.zip`.
- Archive size: 69,505 bytes.
- Archive SHA-256: `da86d97d01071a80a808995bbe7d033491263448e084da00aebfae0bcde4890c`.
- Archive file count: 66.
- Base64 encoding: 92,676 characters, exactly `4 * ceil(69,505 / 3)`.
- GitHub readback: all 7 chunks present, raw payload only, lengths `14000,14000,14000,14000,14000,14000,8676`.
- Decode/extract readback: 69,505 bytes, SHA-256 matched, 66 extracted files, 0 hash/path mismatches.

## Mutation accounting

- Source/tests: 0 modified.
- Live Executor registrations: 0.
- Live Documentation Curator registrations: 0.
- Worker sends/browser connections: 0.
- Architect authority/registration/control/trigger mutation: 0.
- Architect doorbells: 0.
- Canonical Orchestrator: 0.
- AFFOTECH: 0.
- Drive: 0.
- `LATEST_EXECUTOR_ACCEPTED`: unchanged.
- P0.1C/P0.1D/Curator work: not started.
- No force push, history rewrite, or blind retry.
