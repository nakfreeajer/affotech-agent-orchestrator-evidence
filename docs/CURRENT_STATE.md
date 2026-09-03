Project: affotech-agent-orchestrator
Documentation sync boundary: through ORCH-000206 Architect review on 2026-09-04
Status: CURRENT HUMAN-READABLE PROJECTION
Machine authority: durable GitHub evidence and Architect decisions

# Current State

## 1. Accepted source

Current accepted source:

`GH-PUB-204-DIRECT-CODEX-INTENT-OBSERVABILITY-REPAIR-READY-000001`

Architect decision:

`GH-DEC-204-DIRECT-CODEX-INTENT-OBSERVABILITY-REPAIR-ACCEPTED`

Qualification:

- 103 files;
- focused/relevant tests `142/142`;
- full deterministic suite `844/844`, 0 failed/skipped/cancelled;
- manifest SHA-256 `ee7aca2665853e8ebb9d0e0de99b510d84b7fa41282ebed88a1fa6b3c49bf3bf`;
- archive SHA-256 `34c4dd17b3475932de7513a4f0f395b0cb285229413128b357a6566da0134521`.

## 2. Current production topology

The proven production path remains manual inbound:

`Architect durable dispatch → manual user locator/message → Codex terminal/runtime in VS Code → direct GitHub authority reads/work → direct GitHub terminal publication → Architect review`.

Direct-Codex transport is not yet live-qualified for unattended production use.

## 3. Accepted direct-Codex foundation

- ORCH-000199: supported non-interactive `codex exec` accepted.
- ORCH-000200: one-shot authenticated child primitive accepted.
- ORCH-000201: governed direct-Codex adapter and persistent-host direct route source accepted.
- ORCH-000203: create/readback ambiguity observability diagnostic accepted.
- ORCH-000204: typed pre-spawn create/readback observability repair accepted.
- ORCH-000205: abandoned ORCH-000202 identity zero-spawn reconciliation accepted.

The reconciled ORCH-000202 invocation is closed for reuse and remains historically INCONCLUSIVE.

## 4. ORCH-000206 — BLOCKED fresh live adapter qualification

Executor terminal:

`GH-PUB-206-GOVERNED-DIRECT-CODEX-ADAPTER-LIVE-QUALIFIED-000001`

Architect decision:

`GH-DEC-206-DIRECT-CODEX-FRESH-TERMINAL-NOT-OBSERVED-BLOCKED`

Classification:

`DIRECT_CODEX_ADAPTER_FRESH_TERMINAL_NOT_OBSERVED`

Fresh invocation:

`CODEX-DIRECT-INVOCATION-EXECUTOR-DISPATCH-000206-PROBE-000001`

Verified facts:

- fresh intent was created and exactly read back before spawn;
- typed pre-spawn ambiguity phase = `NONE`;
- exactly one real child `codex exec` was launched;
- child exit code = `0`;
- timeout = `false`;
- required probe terminal `GH-PUB-206-DIRECT-CODEX-LIVE-PROBE-000001` was not observed and was not published;
- adapter durably created/read back a result with `outcome=TERMINAL_NOT_OBSERVED`, `terminalObserved=false`, and retry disabled;
- duplicate replay was not performed because first-call success was not reached;
- second spawn count = `0`;
- reconciled ORCH-000202 identity mutation = `0`;
- source/docs/browser/host/worker-delivery/registration/lease/trigger/AFFOTECH/Drive mutation remained `0`.

The fresh ORCH-000206 invocation is terminalized as a failed transport observation and must not be retried or reused for another live attempt.

## 5. Current missing proof

`ORCH_000206_CHILD_PROBE_PUBLICATION_FAILURE_ROOT_CAUSE_NOT_YET_PROVEN`

The create/readback and child-process launch boundaries are now proven healthy for this attempt. The unresolved boundary is **inside or after the completed child runtime**:

- whether the child actually received/interpreted the canonical locator as intended;
- whether the child had a GitHub dispatch/publication mechanism available;
- whether sandbox/network/tool restrictions prevented GitHub access;
- whether the child emitted a text-only response instead of performing publication;
- whether a publication attempt failed but its bounded output was not preserved.

A child exit code of `0` is not proof of durable Executor work or terminal publication.

## 6. Durable protected state

- mutation-lease index revision `382`;
- `nextLeaseEpoch=192`;
- `activeLeases=[]`;
- historical BrowserRelay delivery `WORKER-DELIVERY-EXECUTOR-000013/SENT` unchanged;
- historical delivery `000015` remains outside direct-Codex namespace;
- historical worker registration unchanged;
- latest Architect trigger `ARCH-TRIGGER-9333-000005/SENT`;
- BrowserRelay/9444 remains historical and is not involved in ORCH-000206.

## 7. Next legal milestone

ORCH-000207 is the next bounded read-only diagnostic.

It must inspect the already-completed ORCH-000206 child/publication boundary without launching another Codex/model child. It may inspect only narrowly correlated local Codex session/output metadata and accepted adapter command construction needed to determine what the child received, what tools/network/publication mechanism were available, and what it emitted.

It must:

- perform real child/model invocation `0`;
- perform no retry/replay of ORCH-000206;
- leave ORCH-000206 intent/result immutable;
- leave reconciled ORCH-000202 identity untouched;
- not start the persistent host;
- not touch BrowserRelay/9444, worker delivery, registration, lease, trigger, AFFOTECH or Drive;
- never expose credentials, tokens, unrelated Codex sessions, or private data;
- if the exact completed-child evidence is not recoverable, classify observability insufficient and name the minimum bounded output-capture repair required before any fresh live attempt.

No fresh live qualification is authorized until ORCH-000207 is independently reviewed.

## 8. Documentation / future intent

ORCH-000206: `documentationImpact=STATE`; `futureIdeaImpact=NONE`.

`IDEA-0001 — Deterministic Architect documentation-closure marker` remains `ADOPTED_FOR_FUTURE`, deferred until core unattended transport reaches production-candidate qualification.
