Project: affotech-agent-orchestrator
Documentation sync boundary: through ORCH-000200 Architect acceptance on 2026-09-02
Status: CURRENT HUMAN-READABLE PROJECTION
Machine authority: durable GitHub evidence, governing policy, immutable Architect decisions, and explicit current Rony authority as defined by precedence

# Architect Decisions

Architect classifications are exactly `ACCEPTED`, `BLOCKED`, `INCONCLUSIVE`, `NO NEW REPORT`. Executor PASS/READY is evidence only.

## Permanent authority decisions

- Rony is final human authority.
- Architect governs, verifies, decides, defines next bounded authority, and owns canonical documentation.
- Executor performs bounded runtime/source/validation work and publishes first-hand evidence.
- The operational Executor runtime is the Codex terminal/runtime in VS Code unless later durable authority explicitly replaces it.
- Orchestrator is deterministic transport/state infrastructure, never semantic authority.
- GitHub durable evidence is machine authority.
- No blind retry after ambiguous external mutation or send.
- Historical evidence is immutable in meaning.
- AFFOTECH and protected resources remain separate until explicitly authorized.

## Permanent identity-separation decision — 2026-09-02

`role identity ≠ execution runtime ≠ transport adapter ≠ browser/session identity ≠ network endpoint`

A historical BrowserRelay registration labeled `executor` is not proof that BrowserRelay is the current Codex execution transport. Current topology requires first-hand proof.

## Accepted recovery and transport foundation

- `GH-DEC-184-EXPIRED-LEASE-CALLER-ARGUMENT-CONTRACT-ACCEPTED`: hydrate the full immutable lease for full-schema work.
- `GH-DEC-187-CORRECTED-CALLER-PROJECTION-BOUNDARY-ACCEPTED`: full immutable lease + exact binding + integer `nowMs` is the proven reconciliation caller.
- `GH-DEC-188-PRECONDITION-HASH-NAMESPACE-MISMATCH-BLOCKED`: canonical SHA-256 and Git blob SHA are distinct typed identities.
- `GH-DEC-190-PRECALL-CREATEJSON-TRANSPORT-AMBIGUITY-DIAGNOSTIC-ACCEPTED`: durable readback is final `createJson` authority.
- `GH-DEC-192-DISPOSABLE-ADAPTER-404-MAPPING-DEFECT-ACCEPTED`: GitHub Contents reads preserve semantic HTTP status and map `404 → NOT_FOUND`.
- `GH-DEC-193-EXPIRED-WORKER-LEASE-RECOVERY-ACCEPTED`: epoch-189 stale lease closed.
- `GH-DEC-194-WORKER-DELIVERY-000014-PREFLIGHT-ACCEPTED`: zero-browser ACQUIRE → PREPARE → PROVEN_NOT_SENT → RELEASE capability proven after recovery.

## ORCH-000195 through ORCH-000197 — historical BrowserRelay branch

These milestones validly diagnosed the old `9444` BrowserRelay target but did not prove that it remained the current Codex path. Their future restoration assumption was superseded after topology reconciliation.

## ORCH-000198 — ACCEPTED current Codex topology

`GH-DEC-198-CODEX-DIRECT-MANUAL-TOPOLOGY-ACCEPTED`

Accepted current path:

`Architect durable dispatch → manual user locator/message → Codex terminal/runtime → direct GitHub terminal publication → Architect review`

BrowserRelay `9444` is legacy relative to this current manual path.

## ORCH-000199 — ACCEPTED Codex non-interactive capability discovery

`GH-DEC-199-CODEX-NONINTERACTIVE-CAPABILITY-DISCOVERY-ACCEPTED`

Accepted: `codex-cli 0.151.0` exposes supported non-interactive `codex exec` with prompt, workdir, sandbox/approval, structured output and ephemeral controls. Child authentication reuse remained unproven at that stage.

## ORCH-000200 — ACCEPTED one-shot direct Codex qualification

Decision:

`GH-DEC-200-CODEX-DIRECT-AUTH-REUSE-QUALIFICATION-ACCEPTED`

Executor terminal:

`GH-PUB-200-CODEX-DIRECT-AUTH-REUSE-QUALIFICATION-000001`

Architect classification: `ACCEPTED`.

Independently verified facts:

- preconditions passed;
- immutable qualification intent was durably ARMED before child invocation;
- correlation token `ORCH200_OK_89F8188224F4F81CB444F1A3` was bound before invocation;
- child `codex exec` invocation count exactly `1`;
- child exit code `0`;
- `timedOut=false`;
- child termination count `0`;
- exact bounded output matched the correlation token;
- child reuse of the current ChatGPT authentication is proven;
- retryAttempted=false;
- durable qualification result outcome `QUALIFIED` was written/read back;
- one authorized disposable temp last-message file was deleted only after result readback;
- lease state stayed `382 / 192 / 0`;
- latest historical BrowserRelay delivery stayed `000013/SENT`;
- delivery `000015` remained absent;
- BrowserRelay/registration/source/AFFOTECH/Drive mutations were zero.

The result snapshot itself records temp deletion count `0` because that immutable result precedes cleanup; the terminal/receipt record one authorized post-result deletion. This matches the authorized ordering and is not contradictory.

This acceptance proves a one-shot authenticated direct-Codex runtime primitive. It does not yet accept a production unattended adapter.

## Next decision boundary — ORCH-000201

Architect may authorize bounded source/test implementation of a governed direct-Codex adapter against the GH-PUB-165 accepted source layout.

Required properties:

- new direct-Codex invocation namespace/identity; do not reuse BrowserRelay delivery `000015`;
- durable intent before child spawn;
- at-most-one spawn per invocation identity;
- duplicate suppression;
- explicit canonical dispatch/prompt correlation;
- explicit workdir, sandbox/approval and ephemeral controls;
- machine-observable exit/output;
- durable result readback;
- separate timeout/auth/nonzero/output-mismatch/ambiguous outcomes;
- no blind retry;
- persistent-host integration without BrowserRelay;
- historical worker registration remains untouched;
- AFFOTECH/Drive remain protected.

ORCH-000201 implementation must be independently tested and reviewed before any live unattended production qualification.

Documentation decision for ORCH-000200:

- `documentationImpact=FULL`;
- `futureIdeaImpact=NONE`.
