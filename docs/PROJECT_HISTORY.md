Project: affotech-agent-orchestrator
Documentation sync boundary: through ORCH-000201 Architect acceptance on 2026-09-02
Status: CURRENT HUMAN-READABLE PROJECTION
Machine authority: durable GitHub evidence and Architect decisions

# Project History

## Foundation through ORCH-000165

The project established Rony as final authority, Architect as governor/decision-maker, Executor as bounded worker, GitHub as durable evidence authority, exact lineage, no blind retry, and separation from AFFOTECH.

Key accepted foundations:

- ORCH-000153: exactly-once historical BrowserRelay worker delivery `WORKER-DELIVERY-EXECUTOR-000013/SENT`;
- ORCH-000163: exactly-once Architect wake `ARCH-TRIGGER-9333-000005/SENT`;
- ORCH-000165: legacy worker-delivery lineage compatibility repair with full deterministic `817/817`.

## ORCH-000166 through ORCH-000194 — persistent-host recovery foundation

Persistent-host bootstrap, dispatch observation, full immutable lease hydration, typed hash identities, exact create/readback semantics and semantic GitHub `404 → NOT_FOUND` handling were established. ORCH-000193 closed the stale epoch-189 lease; ORCH-000194 proved zero-browser ACQUIRE → PREPARE → PROVEN_NOT_SENT → RELEASE.

## ORCH-000195 through ORCH-000197 — historical 9444 branch

The old BrowserRelay endpoint `9444` was found unavailable. That branch remained mutation-clean but was later superseded as the active transport direction after runtime identity was corrected.

## 2026-09-02 — runtime/transport identity correction

Rony confirmed the operational Executor is the Codex terminal/runtime in VS Code.

Permanent correction:

`role ≠ runtime ≠ transport ≠ browser/session ≠ endpoint`

BrowserRelay registration is historical evidence, not proof of current runtime transport.

## ORCH-000198 — current Codex topology accepted

Decision:

`GH-DEC-198-CODEX-DIRECT-MANUAL-TOPOLOGY-ACCEPTED`

Proven production path:

`Architect durable dispatch → manual user locator/message → Codex terminal/runtime → direct GitHub authority reads/work → direct GitHub terminal publication → Architect review`.

## ORCH-000199 — non-interactive Codex capability accepted

Decision:

`GH-DEC-199-CODEX-NONINTERACTIVE-CAPABILITY-DISCOVERY-ACCEPTED`

The installed `codex-cli 0.151.0` exposes supported non-interactive `codex exec` with prompt, workdir, model/profile/config, sandbox/approval, structured output and ephemeral controls.

## ORCH-000200 — authenticated child primitive accepted

Decision:

`GH-DEC-200-CODEX-DIRECT-AUTH-REUSE-QUALIFICATION-ACCEPTED`

A single isolated child `codex exec` reused current ChatGPT authentication, exited `0`, matched an exact correlation token, timed out `false`, required no termination/retry, and kept protected state unchanged.

## ORCH-000201 — governed direct-Codex adapter accepted

Executor terminal:

`GH-PUB-201-GOVERNED-DIRECT-CODEX-ADAPTER-READY-000001`

Architect decision:

`GH-DEC-201-GOVERNED-DIRECT-CODEX-ADAPTER-ACCEPTED`

The accepted candidate implemented the direct-Codex transport and host composition with deterministic tests only.

Accepted source became:

`GH-PUB-201-GOVERNED-DIRECT-CODEX-ADAPTER-READY-000001`

Source facts:

- 103 files;
- focused `95/95`;
- full deterministic `833/833`;
- manifest SHA-256 `42f37c4fcd4b291e2edf4c14725b03287dc0150e9e2e4cca614d0f56ea2239b8`;
- archive SHA-256 `b6d87a5a041be0615a143965bb2cc8c5c35080633c74d70e4600d636a4503878`.

Changed paths:

- new `src/host/codex-direct-transport.js`;
- modified `src/host/persistent-host-runner.js`;
- modified `src/host/github-runtime-ports.js`;
- new `test/codex-direct-transport.test.js`.

The implementation introduced:

- deterministic direct-Codex invocation identities separate from BrowserRelay delivery IDs;
- durable intent/readback before spawn;
- at-most-one child spawn and duplicate suppression;
- reconciliation-required intent-without-result handling;
- explicit workdir/sandbox/ephemeral/timeout controls;
- exact durable Executor-terminal observation before transport success;
- durable transport result readback;
- distinct fail-closed outcome classes and no blind retry;
- persistent-host routing that does not require BrowserRelay.

No real child/model invocation, host start, BrowserRelay contact, worker-delivery mutation, Architect-trigger mutation, registration mutation or lease mutation occurred during ORCH-000201.

`documentationImpact=FULL`; `futureIdeaImpact=NONE`.

## Current target

The next bounded proof is ORCH-000202: one live direct-Codex adapter qualification with a harmless child probe dispatch.

It must prove one real authenticated child spawn, exact durable probe terminal observation, durable adapter result readback, and a duplicate replay with second spawn count `0`. It must not start the persistent host or touch BrowserRelay, worker delivery `000015`, historical registration, AFFOTECH or Drive.

After ORCH-000202 acceptance, a later milestone may qualify the persistent host automatically observing a new dispatch and invoking Codex without the manual user handoff.
