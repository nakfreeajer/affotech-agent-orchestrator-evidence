Project: affotech-agent-orchestrator
Documentation sync boundary: through ORCH-000198 / DISPATCH-000198 publication on 2026-09-02
Status: CURRENT HUMAN-READABLE PROJECTION
Machine authority: durable GitHub evidence, governing policy, immutable Architect decisions, and explicit current Rony authority as defined by precedence

# Architect Decisions

Architect classifications are exactly `ACCEPTED`, `BLOCKED`, `INCONCLUSIVE`, `NO NEW REPORT`. Executor PASS/READY is evidence only.

## Permanent authority decisions

- Rony is final human authority.
- Architect governs, verifies, decides, defines next bounded authority, and owns canonical documentation.
- Executor performs bounded runtime/source/validation work and publishes first-hand evidence.
- The operational Executor execution runtime is currently the Codex terminal/runtime in VS Code unless later durable authority explicitly replaces it.
- Orchestrator is deterministic transport/state infrastructure, never semantic authority.
- GitHub durable evidence is machine authority.
- No blind retry after ambiguous external mutation or send.
- Historical evidence is immutable in meaning.
- AFFOTECH and protected resources remain separate until explicitly authorized.

## Permanent identity-separation decision — 2026-09-02

Rony identified a governance/architecture defect: the project-specific documentation had conflated a historical BrowserRelay worker registration labeled `executor` with the actual Executor execution runtime.

Permanent rule:

`role identity ≠ execution runtime ≠ transport adapter ≠ browser/session identity ≠ network endpoint`

Consequences:

- `workerRole=executor` is not proof that a browser conversation is the Executor execution engine;
- a registered BrowserRelay endpoint is not proof that Codex runs on that port;
- `9444` historical evidence must not be described as a Codex CDP/runtime port without an explicit proven binding;
- before repair/restart/restoration/retry of a missing endpoint, Architect must first prove the current execution runtime, intended delivery transport, endpoint owner, and continued necessity of that transport;
- historical successful transport qualification proves that historical path only; it does not prove the path is still current.

Project policy advanced from v1.4 to v1.5 with a mandatory runtime/transport topology reconciliation gate.

This correction was `documentationImpact=FULL` and `futureIdeaImpact=NONE`.

## Accepted recovery and preflight foundation

- `GH-DEC-184-EXPIRED-LEASE-CALLER-ARGUMENT-CONTRACT-ACCEPTED`: hydrate the full immutable lease for full-schema work.
- `GH-DEC-187-CORRECTED-CALLER-PROJECTION-BOUNDARY-ACCEPTED`: full immutable lease + exact binding + integer `nowMs` is the proven reconciliation caller.
- `GH-DEC-188-PRECONDITION-HASH-NAMESPACE-MISMATCH-BLOCKED`: canonical SHA-256 and Git blob SHA are distinct typed identities.
- `GH-DEC-190-PRECALL-CREATEJSON-TRANSPORT-AMBIGUITY-DIAGNOSTIC-ACCEPTED`: durable readback is final `createJson` authority.
- `GH-DEC-192-DISPOSABLE-ADAPTER-404-MAPPING-DEFECT-ACCEPTED`: GitHub Contents reads preserve semantic HTTP status and map `404 → NOT_FOUND`.
- `GH-DEC-193-EXPIRED-WORKER-LEASE-RECOVERY-ACCEPTED`: epoch-189 stale lease closed.
- `GH-DEC-194-WORKER-DELIVERY-000014-PREFLIGHT-ACCEPTED`: zero-browser ACQUIRE → PREPARE → PROVEN_NOT_SENT → RELEASE capability proven after recovery.

## ORCH-000195 — INCONCLUSIVE historical live-delivery attempt

Decision:

`GH-DEC-195-EXECUTOR-RELAY-PORT-UNAVAILABLE-INCONCLUSIVE`

The live qualification stopped before delivery preparation/contact because `127.0.0.1:9444` returned `ECONNREFUSED`. Delivery `000015` remained absent, send counts remained zero, and the epoch-191 lease was normally released to index `382 / nextEpoch 192 / activeLeases=[]`.

This remains valid evidence about the then-targeted BrowserRelay path.

## ORCH-000196 — ACCEPTED historical relay/runtime diagnosis

Decision:

`GH-DEC-196-EXECUTOR-RELAY-PROCESS-ABSENT-DIAGNOSTIC-ACCEPTED`

The diagnostic validly proved that the registered historical `9444` transport target had no listener/owner and that the expected browser/relay process was absent under the then-assumed topology.

It did **not** prove that this transport remained necessary to reach the current Codex Executor.

## ORCH-000197 — BLOCKED historical post-restoration readiness

Executor terminal:

`GH-PUB-197-EXECUTOR-RELAY-STILL-NOT-RUNNING-000001`

Architect decision:

`GH-DEC-197-EXECUTOR-RELAY-STILL-NOT-RUNNING-BLOCKED`

Architect classification at that time: `BLOCKED`.

Verified historical facts remain:

- ORCH-000197 preconditions passed;
- the historical registration/authority bindings were valid and ACTIVE;
- `127.0.0.1:9444` had `NO_LISTENER` and no owner process;
- the expected browser/relay runtime was not running/present;
- delivery `000015` remained absent;
- lease index remained `382`, `nextLeaseEpoch=192`, `activeLeases=[]`;
- latest successful worker delivery remained `000013/SENT`;
- no lease, delivery, browser, process, registration, source, AFFOTECH, or Drive mutation occurred.

The ORCH-000197 future-action instruction to restore an “Executor browser and relay 9444” is superseded for future action by Rony's explicit 2026-09-02 clarification and project policy v1.5. Historical evidence and the old decision are not rewritten.

## GH-DEC-198 — NO NEW REPORT / topology reconciliation authorized

Decision:

`GH-DEC-198-NO-NEW-REPORT-CODEX-TOPOLOGY-RECONCILIATION-AUTHORIZED`

Classification: `NO NEW REPORT`.

Fresh verification found no Executor terminal newer than GH-PUB-197. Accepted source remains GH-PUB-165; lease state remains index `382`, next epoch `192`, zero active leases; latest delivery remains `000013/SENT`; delivery `000015` remains absent.

Rony's `next` directive after the v1.5 documentation correction authorizes the next legal step:

- canonical message `ORCH-000198`;
- dispatch `DISPATCH-000198`;
- operation `READ_ONLY_TOPOLOGY_RECONCILIATION`;
- target runtime `CODEX_TERMINAL_RUNTIME_IN_VSCODE`;
- BrowserRelay/Brave restoration is explicitly not authorized;
- browser contact/send is zero;
- lease/delivery/registration/source mutation is zero;
- delivery `000015` retry remains unauthorized.

ORCH-000198 must establish the actual current inbound and outbound Codex execution topology, classify the historical BrowserRelay path as required/indirect/legacy/conflicting/unprovable from evidence, identify endpoint ownership, and recommend only the smallest next bounded step.

Current manual trigger:

`execute github dispatch nakfreeajer/affotech-agent-orchestrator-evidence DISPATCH-000198`

This publication changes current operational state only:

- `documentationImpact=STATE`;
- `futureIdeaImpact=NONE`.
