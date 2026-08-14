# Architect registration contract qualification

Classification: `ARCHITECT_REGISTRATION_CONTRACT_READY_FOR_ARCHITECT_REVIEW`

## Authority

- Prompt: `ORCH-000008`
- Dispatch: `DISPATCH-000008`
- Parent: `ORCH-000007`
- Evidence HEAD before publication: `dd857e8d75ade1a77ea290f1888d36934908d568`
- Canonical prompt SHA-256: `a361d452add5e74f2d3f1649556e39ce196af7989e0b1dba939457891490ba83`
- Architect decision: `GH-DEC-bf4a91e2c6d73a8051f9e4b7c2a6d310` (`BLOCKED` predecessor)

## Implementation

Changed only the isolated BrowserRelay workspace:

- Added `src/browser-relay/registration.js`.
- Modified `test/browser-relay.test.js` with 12 focused contract tests.

The contract defines immutable records and deterministic paths:

- Generation authority: `evidence/architect-sessions/authorities/<authorityId>.json`
- Conversation registration: `evidence/architect-sessions/registrations/<registrationId>.json`
- Current authority pointer: `evidence/current/LATEST_ARCHITECT_SESSION_AUTHORITY.json`
- Current registration pointer: `evidence/current/LATEST_ARCHITECT_SESSION_REGISTRATION.json`
- Current control pointer: `evidence/current/RELAY_CONTROL.json`

Generation authority is Architect-authored, versioned, hashed, and carries
mission, generation, decision, and supersession lineage. Registration binds
the exact authority ID/hash to the exact `chatgpt.com/c/<conversationId>` URL,
conversation ID, mission, generation, and allowed relay port `9333`.
Pointers are indexes only; immutable record hashes are checked on readback.
Superseded or consumed registrations fail closed. Control state supports
`ACTIVE`, `PAUSED_BY_RONY`, `STOP`, `ABORT_CURRENT_WORKER`,
`RECONCILIATION_REQUIRED`, and `CIRCUIT_OPEN`; every suppressing state blocks
registration use. Registration readiness never authorizes a send.

No Architect generation or live conversation registration was fabricated.
No live registration or ChatGPT message was performed.

## Validation

- `node --check src/browser-relay/registration.js`: PASS
- `node --check test/browser-relay.test.js`: PASS
- `npm test`: **198 passed, 0 failed, 0 skipped**
- Live send count: `0`
- Ports `9222` and `9223`: untouched
- Assistant response DOM: not read or parsed

The existing 186 tests remained passing; 12 new registration-contract tests
passed. Coverage includes hash integrity, missing/mismatched authority,
conversation mismatch, stale/consumed registration, pointer integrity,
control precedence, explicit ACTIVE state, forbidden ports, no-send
semantics, and no response-text authority.

## Snapshot

- File: `orchestrator-source-snapshot-browser-relay-registration-contract-1a.tar.gz`
- Size: `38815` bytes
- SHA-256: `0f55ad8f9779fa5a57b3f28e9a32d45777da35287a16192ee2b6146f7ed5e7bb`
- Regular non-evidence files: `64`
- Path-sorted manifest SHA-256: `ba0660f824e77e8aad8accc2af9e8be908f8c81c96efb21a34a1dc05490b718e`
- Added path versus the 63-file BrowserRelay baseline: `src/browser-relay/registration.js`
- Modified path: `test/browser-relay.test.js`
- Deleted paths: none

## Mutation accounting

Isolated source mutation: one file added and one test file modified.
Canonical Orchestrator mutation: `0`. AFFOTECH mutation: `0`. Drive
mutation: `0`. Live browser send: `0`. Curator, P0.1C, and P0.1D work: `0`.
`LATEST_EXECUTOR_ACCEPTED` is not advanced.