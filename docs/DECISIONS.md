Project: affotech-agent-orchestrator
Documentation sync boundary: through ORCH-000194 Architect review
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

## Recovery decisions

### ORCH-000184 — ACCEPTED
`GH-DEC-184-EXPIRED-LEASE-CALLER-ARGUMENT-CONTRACT-ACCEPTED`

Reduced index entries cannot substitute for full immutable `MUTATION_LEASE` records when full-schema validation/projection/reconciliation is required.

### ORCH-000187 — ACCEPTED
`GH-DEC-187-CORRECTED-CALLER-PROJECTION-BOUNDARY-ACCEPTED`

Full immutable lease + exact reconciliation binding + integer `nowMs` is the proven reconciliation caller shape.

### ORCH-000188 — BLOCKED
`GH-DEC-188-PRECONDITION-HASH-NAMESPACE-MISMATCH-BLOCKED`

Canonical semantic SHA-256 and Git blob SHA are separate typed values.

### ORCH-000190 — ACCEPTED
`GH-DEC-190-PRECALL-CREATEJSON-TRANSPORT-AMBIGUITY-DIAGNOSTIC-ACCEPTED`

Accepted `createJson` uses precheck, at most one PUT, and exact post-write readback; durable readback is final authority.

### ORCH-000192 — ACCEPTED
`GH-DEC-192-DISPOSABLE-ADAPTER-404-MAPPING-DEFECT-ACCEPTED`

GitHub Contents read adapters must preserve semantic HTTP status and map `404 → NOT_FOUND`; accepted source required no patch.

### ORCH-000193 — ACCEPTED
`GH-DEC-193-EXPIRED-WORKER-LEASE-RECOVERY-ACCEPTED`

Epoch-189 stale lease was reconciled to immutable revision 2 / `EXPIRED`; index advanced `377 → 378`; `activeLeases=[]`.

## ORCH-000194 — ACCEPTED worker-delivery 000014 zero-browser preflight

Executor terminal:

`GH-PUB-194-WORKER-DELIVERY-000014-PREFLIGHT-COMPLETE-000001`

Architect decision:

`GH-DEC-194-WORKER-DELIVERY-000014-PREFLIGHT-ACCEPTED`

Architect classification: `ACCEPTED`.

Verified facts:

- status-preserving read gate passed;
- one epoch-190 WORKER_DELIVERY lease acquisition succeeded;
- index advanced `378 → 379` and next epoch `190 → 191`;
- transient `actionKind=WORKER_DELIVERY` was used without rewriting the durable lease;
- accepted preparation returned `PREPARED` for `WORKER-DELIVERY-EXECUTOR-000014`;
- immutable intent exists/readback and uses canonical persistent state `ARMED`;
- browser contact/send remained `0/0`;
- durable result is `PROVEN_NOT_SENT` with attempted/confirmed sends `0/0`;
- normal release occurred exactly once;
- final index advanced `379 → 380`, `nextLeaseEpoch=191`, `activeLeases=[]`;
- `LATEST_DELIVERY` remains `WORKER-DELIVERY-EXECUTOR-000013/SENT`;
- Architect trigger remains `ARCH-TRIGGER-9333-000005/SENT`;
- source, host-process, Architect-trigger, AFFOTECH, and Drive mutations remained zero.

Capability decision:

The current recovered system has accepted proof of the complete zero-browser preflight:

`ACQUIRE → transient actionKind enrichment → PREPARE → PROVEN_NOT_SENT → RELEASE`.

Delivery `000014` is terminal `PROVEN_NOT_SENT` evidence and must not be reused for a live send.

Documentation decision:

- `documentationImpact=FULL` — the current accepted worker-delivery preflight capability is now proven after recovery;
- `futureIdeaImpact=NONE`.

## Next legal action

ORCH-000195 may perform one separately bounded live exactly-once Executor-browser delivery qualification with fresh identity `WORKER-DELIVERY-EXECUTOR-000015`.

Required order:

`ACQUIRE → transient actionKind=WORKER_DELIVERY → PREPARE → pre-send observation → at most one USER send to Executor port 9444 → durable SENT result/readback → LATEST_DELIVERY advance → normal RELEASE → duplicate-suppression replay`.

Success requires attempted/confirmed sends `1/1`, `LATEST_DELIVERY=000015/SENT`, second-send count `0`, clean final lease state, and no Architect-browser contact/trigger or unrelated source/AFFOTECH/Drive mutation.

No synthetic `SENT`, no blind retry, and no second browser send are authorized under ambiguity.
