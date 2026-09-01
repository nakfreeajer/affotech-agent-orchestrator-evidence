Project: affotech-agent-orchestrator
Documentation sync boundary: through ORCH-000195 Architect review
Status: CURRENT HUMAN-READABLE PROJECTION
Machine authority: durable GitHub evidence, governing policy, and immutable Architect decisions

# Architect Decisions

Architect classifications are exactly `ACCEPTED`, `BLOCKED`, `INCONCLUSIVE`, `NO NEW REPORT`. Executor PASS/READY is evidence only.

## Permanent authority decisions

- Rony is final human authority.
- Architect governs, verifies, decides, defines next bounded authority, and owns canonical documentation.
- Executor performs bounded runtime/source/validation work and publishes first-hand evidence.
- Orchestrator is deterministic transport/state infrastructure, never semantic authority.
- GitHub durable evidence is machine authority.
- No blind retry after ambiguous external mutation or browser send.
- Historical evidence is immutable in meaning.
- AFFOTECH and protected resources remain separate until explicitly authorized.

## Accepted recovery and preflight foundation

- `GH-DEC-184-EXPIRED-LEASE-CALLER-ARGUMENT-CONTRACT-ACCEPTED`: full immutable lease is required for full-schema reconciliation.
- `GH-DEC-187-CORRECTED-CALLER-PROJECTION-BOUNDARY-ACCEPTED`: full immutable lease + exact binding + integer `nowMs` is the proven reconciliation caller.
- `GH-DEC-188-PRECONDITION-HASH-NAMESPACE-MISMATCH-BLOCKED`: canonical SHA-256 and Git blob SHA are distinct typed identities.
- `GH-DEC-190-PRECALL-CREATEJSON-TRANSPORT-AMBIGUITY-DIAGNOSTIC-ACCEPTED`: durable readback is final `createJson` authority.
- `GH-DEC-192-DISPOSABLE-ADAPTER-404-MAPPING-DEFECT-ACCEPTED`: GitHub Contents reads preserve semantic HTTP status and map `404 → NOT_FOUND`.
- `GH-DEC-193-EXPIRED-WORKER-LEASE-RECOVERY-ACCEPTED`: epoch-189 stale lease closed.
- `GH-DEC-194-WORKER-DELIVERY-000014-PREFLIGHT-ACCEPTED`: zero-browser ACQUIRE → PREPARE → PROVEN_NOT_SENT → RELEASE capability proven after recovery.

## ORCH-000195 — INCONCLUSIVE Executor relay port unavailable

Executor terminal:

`GH-PUB-195-EXECUTOR-BROWSER-UNAVAILABLE-000001`

Architect decision:

`GH-DEC-195-EXECUTOR-RELAY-PORT-UNAVAILABLE-INCONCLUSIVE`

Architect classification: `INCONCLUSIVE`.

Verified facts:

- ORCH-000195 preconditions and read-adapter gate passed;
- one epoch-191 lease was acquired and later released normally;
- the registered Executor relay endpoint `127.0.0.1:9444` returned `ECONNREFUSED`;
- no delivery `000015` intent or result exists;
- attempted/confirmed sends `0/0`;
- browser contact/send `0/0`;
- no retry;
- final lease index `382`, `nextLeaseEpoch=192`, `activeLeases=[]`;
- `LATEST_DELIVERY` remains `000013/SENT`;
- accepted source unchanged;
- worker registration `WORKER-REG-EXECUTOR-000001` remains durable ACTIVE and still binds the Executor conversation to relay port `9444`.

Interpretation:

The live delivery semantics were not exercised. The attempt stopped at runtime transport availability before durable preparation or BrowserRelay contact. The clean lease release means there is no ambiguous external mutation to reconcile.

Retry decision:

`retryAuthorized=false`. Do not consume another live-delivery attempt until the `9444` relay/session availability boundary is diagnosed.

Documentation decision:

- `documentationImpact=STATE`;
- `futureIdeaImpact=NONE`.

## Next legal action

ORCH-000196 is a strictly non-mutating diagnostic of the Executor relay/session availability boundary.

It may verify durable worker authority/registration; inspect local listener/process/session state for port `9444`; and identify whether the blocker is relay-process absence, browser/session absence, stale registration, port conflict, or insufficient observability.

It must not acquire a lease, create delivery evidence, contact/send a ChatGPT browser, launch/stop a host or browser/relay process, mutate worker registration/authority, mutate source/tests/docs, create an Architect trigger, or access AFFOTECH/Drive.

A later Architect decision may authorize the smallest restoration action or a fresh live-delivery retry only after this diagnostic is accepted.
