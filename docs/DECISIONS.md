Project: affotech-agent-orchestrator
Documentation sync boundary: through ORCH-000196 Architect review
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

- `GH-DEC-184-EXPIRED-LEASE-CALLER-ARGUMENT-CONTRACT-ACCEPTED`: hydrate the full immutable lease for full-schema work.
- `GH-DEC-187-CORRECTED-CALLER-PROJECTION-BOUNDARY-ACCEPTED`: full immutable lease + exact binding + integer `nowMs` is the proven reconciliation caller.
- `GH-DEC-188-PRECONDITION-HASH-NAMESPACE-MISMATCH-BLOCKED`: canonical SHA-256 and Git blob SHA are distinct typed identities.
- `GH-DEC-190-PRECALL-CREATEJSON-TRANSPORT-AMBIGUITY-DIAGNOSTIC-ACCEPTED`: durable readback is final `createJson` authority.
- `GH-DEC-192-DISPOSABLE-ADAPTER-404-MAPPING-DEFECT-ACCEPTED`: GitHub Contents reads preserve semantic HTTP status and map `404 → NOT_FOUND`.
- `GH-DEC-193-EXPIRED-WORKER-LEASE-RECOVERY-ACCEPTED`: epoch-189 stale lease closed.
- `GH-DEC-194-WORKER-DELIVERY-000014-PREFLIGHT-ACCEPTED`: zero-browser ACQUIRE → PREPARE → PROVEN_NOT_SENT → RELEASE capability proven after recovery.

## ORCH-000195 — INCONCLUSIVE live delivery blocked by unavailable relay

Decision:

`GH-DEC-195-EXECUTOR-RELAY-PORT-UNAVAILABLE-INCONCLUSIVE`

The live qualification stopped before delivery preparation/browser contact because `127.0.0.1:9444` returned `ECONNREFUSED`. Delivery `000015` remained absent, send counts remained zero, and the epoch-191 lease was normally released to index `382 / nextEpoch 192 / activeLeases=[]`.

## ORCH-000196 — ACCEPTED Executor relay/runtime diagnosis

Executor terminal:

`GH-PUB-196-EXECUTOR-RELAY-9444-RUNTIME-DIAGNOSTIC-000001`

Architect decision:

`GH-DEC-196-EXECUTOR-RELAY-PROCESS-ABSENT-DIAGNOSTIC-ACCEPTED`

Architect classification: `ACCEPTED` for the diagnostic milestone.

Verified facts:

- durable Executor authority and registration bindings are valid and ACTIVE;
- the existing registration still targets the existing Executor conversation on port `9444`;
- port `9444` has no listener and no owning process;
- the dedicated Executor relay/runtime is not running/present;
- no registered Executor browser-session process was identified;
- source patch is not required;
- registration refresh is not required while identity remains unchanged;
- relay and Executor browser-session restoration are required;
- the restoration crosses a human session/authentication boundary and requires Rony manual action;
- ORCH-000196 made zero lease, delivery, browser-send, process, registration, source, AFFOTECH, or Drive mutations.

Interpretation:

The first deterministic unavailable boundary is operational runtime absence, not worker registration, accepted source, lease semantics, or delivery semantics.

Retry decision:

No new live-delivery attempt is authorized yet. After manual restoration, ORCH-000197 must verify the existing registered Executor browser/relay boundary read-only. Only an accepted readiness verification may unlock a fresh live-delivery dispatch.

Documentation decision:

- `documentationImpact=STATE`;
- `futureIdeaImpact=NONE`.

## Next legal action

Rony manually restores the existing registered Executor browser session and its dedicated BrowserRelay/runtime owner on `127.0.0.1:9444` without changing registration unless identity changes.

Then run ORCH-000197, a read-only readiness verification. It must not acquire a lease, create delivery evidence, send to a browser, mutate registration/source, or contact Architect/AFFOTECH boundaries.
