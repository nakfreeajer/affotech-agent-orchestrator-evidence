# ORCH.P0.WORKER.RELAY.AUTHORITY.AND.EXACTLY.ONCE.CONTRACT.1A

## Result

PASS â€” WORKER_RELAY_AUTHORITY_EXACTLY_ONCE_CONTRACT_READY_FOR_ARCHITECT_REVIEW

This corrected immutable publication supersedes no history and preserves the prior publication. It is contract/source/test work only: no live worker session was registered, no worker prompt was sent, and no browser port was touched.

## Authority and boundaries

- Evidence repository: `nakfreeajer/affotech-agent-orchestrator-evidence`, private, branch `main`.
- Dispatch: `DISPATCH-000019`; canonical message: `ORCH-000019`; parent: `ORCH-000018`.
- Canonical prompt SHA-256: `ed17e90e9f177881fab7771fb97710de74913926901f72aea11af6b82bfbadf9`.
- Starting parent verified: `073b96f9d4ce02a05c6ca5a0fcdf1264194f867d`; corrected publication is based on the read-back first publication commit `b16683b8e8a9921deb89ab5853b67318b6f26996`.
- Accepted Architect decision: `GH-DEC-9767323d9058607c0b4f8a82e48ae5b1`.
- Accepted predecessor remains `GH-PUB-1523df677bcea85f743d9f51e67c4f52`; `LATEST_EXECUTOR_ACCEPTED` was not changed.
- Architect authority `ARCH-AUTH-9333-000001`, registration `ARCH-REG-9333-000001`, relay control `RELAY-CONTROL-9333-000001`, and Architect trigger `ARCH-TRIGGER-9333-000001` were read back unchanged.

## Implementation and contract

Isolated workspace: `C:\tmp\affotech-agent-orchestrator-github-evidence-transport-1a`. Added exactly:

- `src/browser-relay/worker-relay.js` â€” role-scoped authority/registration, deterministic hashes, canonical prompt/hash binding, durable delivery intent/result, control suppression, and reconciliation.
- `test/worker-relay.test.js` â€” 17 focused tests.

Exactly `executor` and `documentation_curator` are supported. Role, mission, authority, registration, dispatch, prompt path, prompt SHA, conversation, and relay-port bindings are strict. Canonical GitHub prompt bytes are the only payload source; issue text and browser/DOM content are not authority.

Delivery requires a durable `ARMED` intent before any send, `intendedSendCount = 1`, and a result afterward. `SENT` is terminal, `FAILED_BEFORE_SEND` is non-authorizing, and `AMBIGUOUS` is `RECONCILIATION_REQUIRED` with retry false. `responseDomRead` is false. PAUSED_BY_RONY, STOP, ABORT_CURRENT_WORKER, RECONCILIATION_REQUIRED, and CIRCUIT_OPEN suppress delivery.

## Qualification

- Pre-change isolated suite: 202 passed, 0 failed.
- Final full suite: 219 passed, 0 failed.
- `node --check src/browser-relay/worker-relay.js`: PASS.
- `node --check test/worker-relay.test.js`: PASS.
- Canonical Orchestrator source mutation: 0; AFFOTECH mutation: 0; Drive mutation: 0.
- Live worker registration: 0; live worker send: 0; ports touched: none; ports 9222/9223 untouched.

Focused coverage proves deterministic role-separated hashes; exact canonical prompt bytes; prompt-before-dispatch binding; intent-before-send; one-send result accounting; response-DOM prohibition; ambiguity without retry; strict mission/role/pointer bindings; stale registration rejection; control suppression; and closed reconciliation observations.

## Snapshot

- Filename: `orchestrator-source-snapshot-worker-relay-contract-1a.zip`
- Size: `69505` bytes
- SHA-256: `f496dda9990f8832670e9d4f92f43ea49a603f5f8877a9128add7c497e744c11`
- Regular source/test/config files: `66`
- Path-sorted raw-byte manifest SHA-256: `b5a98c579fb17f6bd81e894f5e4e5b31df3a38c954558246d2b6b4574ec59117`
- Base64 chunk readback: three parts, lengths 14000, 14000, 12066; concatenation is the recorded snapshot.

The accepted 64-file transport tree is byte-identical; only the two listed implementation/test files were added. Snapshot excludes `.git` and `.agent-work` and contains no credentials, tokens, private data, or live worker identity.

## Governance and mutation accounting

Only `LATEST_EXECUTOR_TERMINAL` and `LATEST_MILESTONE` advance to this corrected publication. `LATEST_EXECUTOR_ACCEPTED` remains the accepted Architect predecessor. The human Prompt Ledger remains observability only.

- Isolated source mutation: 2 files added; no existing isolated files modified.
- Canonical Orchestrator mutation: 0.
- AFFOTECH source/test/docs/runtime/live mutation: 0.
- Google Drive mutation/cutover: 0.
- Curator work: not started; P0.1C/P0.1D: not advanced.
- Browser actions, worker registrations, worker sends: 0.
- Historical evidence deletion/overwrite: 0; first publication preserved unchanged.
- No blind retry: the known first-publication content defect was not overwritten; this is a new corrected publication based on its read-back commit.
