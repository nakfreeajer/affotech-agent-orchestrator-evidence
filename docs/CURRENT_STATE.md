Project: affotech-agent-orchestrator
Documentation sync boundary: through ORCH-000201 Architect acceptance on 2026-09-02
Status: CURRENT HUMAN-READABLE PROJECTION
Machine authority: durable GitHub evidence and Architect decisions

# Current State

## 1. Accepted source

Current accepted source:

`GH-PUB-201-GOVERNED-DIRECT-CODEX-ADAPTER-READY-000001`

Qualification:

- 103 files;
- focused tests `95/95`;
- full deterministic suite `833/833`, 0 failed, 0 skipped/cancelled;
- manifest SHA-256 `42f37c4fcd4b291e2edf4c14725b03287dc0150e9e2e4cca614d0f56ea2239b8`;
- archive SHA-256 `b6d87a5a041be0615a143965bb2cc8c5c35080633c74d70e4600d636a4503878`.

Architect decision:

`GH-DEC-201-GOVERNED-DIRECT-CODEX-ADAPTER-ACCEPTED`

Accepted changed paths:

- `src/host/codex-direct-transport.js`;
- `src/host/persistent-host-runner.js`;
- `src/host/github-runtime-ports.js`;
- `test/codex-direct-transport.test.js`.

Previous GH-PUB-165 remains historical accepted evidence but is no longer the current accepted source pointer.

## 2. Current production topology

The currently proven production path remains manual inbound:

`Architect durable dispatch → manual user locator/message → Codex terminal/runtime in VS Code → direct GitHub authority reads/work → direct GitHub terminal publication → Architect review`.

Do not claim unattended production operation yet.

## 3. Proven direct Codex chain

ORCH-000199 accepted supported non-interactive `codex exec` capability.

ORCH-000200 accepted one-shot authenticated child execution with durable correlation, exit/output observability and no retry.

ORCH-000201 accepted the governed direct-Codex adapter implementation with:

- deterministic `CODEX-DIRECT-INVOCATION-EXECUTOR-<DISPATCH_ID>` identities;
- compact canonical GitHub dispatch locator;
- durable intent readback before spawn;
- at-most-one child spawn;
- duplicate suppression;
- fail-closed reconciliation when intent exists without result;
- explicit workdir/sandbox/ephemeral controls;
- exact durable Executor-terminal observation before transport success;
- durable result readback;
- distinct auth/timeout/nonzero/process/terminal/lineage/ambiguity states;
- persistent-host direct-Codex route that does not require BrowserRelay.

ORCH-000201 itself used fake/injected child launchers only. Real child Codex/model invocation count was `0`.

## 4. Durable state

- mutation-lease index revision `382`;
- `nextLeaseEpoch=192`;
- `activeLeases=[]`;
- latest historical BrowserRelay delivery `WORKER-DELIVERY-EXECUTOR-000013/SENT`;
- delivery `000014/PROVEN_NOT_SENT` preserved;
- delivery `000015` intent/result absent and must not be reused by direct Codex;
- historical worker registration remains unchanged;
- latest Architect trigger `ARCH-TRIGGER-9333-000005/SENT`.

## 5. Current missing proof

`GOVERNED_DIRECT_CODEX_ADAPTER_LIVE_END_TO_END_QUALIFICATION_NOT_YET_PROVEN`

Source implementation and deterministic semantics are accepted, but one real adapter-driven child invocation has not yet been performed.

## 6. Next legal milestone

The next bounded milestone is ORCH-000202: one live adapter qualification with a dedicated harmless child probe dispatch.

Required proof:

1. fresh direct-Codex invocation identity, not a BrowserRelay delivery ID;
2. immutable intent durably read back before child spawn;
3. exactly one real authenticated child `codex exec` invocation;
4. child receives only the canonical GitHub locator for a bounded probe dispatch;
5. child publishes an exact durable Executor probe terminal with `requiresArchitectDecision=true`;
6. parent adapter observes the exact terminal lineage;
7. adapter persists/readbacks a terminalized transport result;
8. one bounded duplicate replay produces zero second child spawn;
9. no blind retry on ambiguity/failure;
10. BrowserRelay, worker delivery `000015`, registration, lease state, AFFOTECH and Drive remain untouched.

This live qualification must not start the persistent host. Persistent-host automatic dispatch observation is a later separate proof.

## 7. Protected boundary

AFFOTECH System V2 Hybrid, ports `9222/9223`, Drive/business/private data, deployment, tenant resources and unrelated worktrees remain unauthorized.

BrowserRelay `9444` restoration is not part of the direct-Codex path.

## 8. Documentation / future intent

ORCH-000201: `documentationImpact=FULL`; `futureIdeaImpact=NONE`.

`IDEA-0001 — Deterministic Architect documentation-closure marker` remains `ADOPTED_FOR_FUTURE`, deferred until core unattended transport reaches production-candidate qualification.
