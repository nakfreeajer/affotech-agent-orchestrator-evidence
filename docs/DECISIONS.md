Project: affotech-agent-orchestrator
Documentation sync boundary: through ORCH-000197 Architect review
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

Decision:

`GH-DEC-196-EXECUTOR-RELAY-PROCESS-ABSENT-DIAGNOSTIC-ACCEPTED`

The diagnostic proved that durable worker registration/authority remain correct and ACTIVE, while port `9444` has no listener or owner process and the dedicated Executor relay/browser runtime is absent. No source patch or registration refresh is required while identity remains unchanged. Manual runtime restoration is required before another live delivery.

## ORCH-000197 — BLOCKED post-restoration readiness

Executor terminal:

`GH-PUB-197-EXECUTOR-RELAY-STILL-NOT-RUNNING-000001`

Architect decision:

`GH-DEC-197-EXECUTOR-RELAY-STILL-NOT-RUNNING-BLOCKED`

Architect classification: `BLOCKED`.

Verified facts:

- ORCH-000197 preconditions passed;
- registration/authority bindings remain valid and ACTIVE;
- registered conversation/port binding still matches;
- `127.0.0.1:9444` still has `NO_LISTENER` and no owner process;
- Executor relay/runtime remains not running/present;
- registered Executor browser-session process remains absent/unidentified;
- delivery `000015` remains absent;
- lease index remains `382`, `nextLeaseEpoch=192`, `activeLeases=[]`;
- latest successful worker delivery remains `000013/SENT`;
- no lease, delivery, browser, process, registration, source, AFFOTECH, or Drive mutation occurred.

Interpretation:

The read-only readiness check itself was valid, but its success predicate was not met because the required manual restoration had not occurred. This is a deterministic operational blocker, not an ambiguous external mutation.

Retry / dispatch decision:

- `liveDeliveryRetryAuthorized=false`;
- do not acquire another worker-delivery lease;
- do not create delivery `000015` evidence;
- do not rerun DISPATCH-000197 before restoration;
- no next canonical dispatch is published while the required human runtime restoration remains outstanding.

Human restoration boundary:

Rony must restore the existing registered Executor browser session and dedicated BrowserRelay/runtime on port `9444`, preserving current worker registration/authority unless the actual conversation/session identity changes. Historical live-delivery prompts assume this BrowserRelay target is already running; they do not provide a canonical startup command, so host-launch evidence must not be misused as a relay/browser launcher.

After restoration is actually complete, Architect may publish a fresh read-only readiness verification. Only accepted readiness may unlock a fresh live-delivery attempt.

Documentation decision:

- `documentationImpact=STATE`;
- `futureIdeaImpact=NONE`.
