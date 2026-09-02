Project: affotech-agent-orchestrator
Documentation sync boundary: through ORCH-000202 / DISPATCH-000202 publication on 2026-09-02
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

## 2. Current production topology

The currently proven production path remains manual inbound:

`Architect durable dispatch → manual user locator/message → Codex terminal/runtime in VS Code → direct GitHub authority reads/work → direct GitHub terminal publication → Architect review`.

Do not claim unattended production operation yet.

## 3. Accepted direct Codex chain

- ORCH-000199: supported non-interactive `codex exec` capability accepted.
- ORCH-000200: one-shot authenticated child execution accepted.
- ORCH-000201: governed direct-Codex adapter and persistent-host direct route source accepted.

The adapter provides deterministic direct-Codex identities, durable intent before spawn, at-most-one child spawn, duplicate suppression, fail-closed reconciliation, explicit workdir/sandbox/ephemeral controls, exact durable Executor-terminal observation before transport success, durable result readback, distinct failure states and no blind retry.

ORCH-000201 used fake/injected child launchers only; no real child/model invocation occurred.

## 4. Durable protected state before ORCH-000202 execution

- mutation-lease index revision `382`;
- `nextLeaseEpoch=192`;
- `activeLeases=[]`;
- latest historical BrowserRelay delivery `WORKER-DELIVERY-EXECUTOR-000013/SENT`;
- delivery `000014/PROVEN_NOT_SENT` preserved;
- delivery `000015` intent/result absent and not reusable by direct Codex;
- historical worker registration unchanged;
- latest Architect trigger `ARCH-TRIGGER-9333-000005/SENT`;
- latest Executor terminal before ORCH-000202 execution remains `GH-PUB-201-GOVERNED-DIRECT-CODEX-ADAPTER-READY-000001`.

## 5. ORCH-000202 — current legal milestone

Current canonical parent prompt/dispatch:

- `ORCH-000202`;
- `DISPATCH-000202`;
- prompt SHA-256 `6394dda625e08c12554c14e14ef4606c593fa13b27dee119d975404dce4eeda8`;
- mutation-envelope SHA-256 `3139b2867e2dd8b1aef54f437ae7a90b26bc096a524c99962fc6cca6856ede84`;
- operation class `LIVE_DIRECT_CODEX_ADAPTER_QUALIFICATION`;
- dispatch state `MANUAL_TRIGGER_REQUIRED`.

Dedicated internal child probe:

- message `ORCH-000202-PROBE-000001`;
- dispatch `DISPATCH-000202-PROBE-000001`;
- prompt SHA-256 `54e75381603a9ecd4be0fd5d1f4401b3bffc71864ebc9db2eae31f9e4ad8d942`;
- expected probe terminal `GH-PUB-202-DIRECT-CODEX-LIVE-PROBE-000001`.

The probe is deliberately not the current dispatch and is not for manual forwarding. It is reachable only as the target of the accepted direct-Codex adapter during ORCH-000202.

## 6. ORCH-000202 authorized proof

ORCH-000202 may:

1. create/read back one direct-Codex invocation intent for `CODEX-DIRECT-INVOCATION-EXECUTOR-DISPATCH-000202-PROBE-000001`;
2. invoke exactly one real authenticated child `codex exec`;
3. allow that child to resolve the dedicated probe dispatch and publish one bounded probe terminal;
4. have the accepted adapter observe the exact probe terminal and create/read back one direct-Codex result;
5. perform one duplicate-suppression replay using the same invocation identity with second child spawn count `0`;
6. publish the normal parent ORCH-000202 terminal/report/receipt.

Success requires total real child/model invocation count exactly `1` and second spawn count `0`.

## 7. ORCH-000202 protected zero

- tracked source/test/config/package/docs/governance mutation=0;
- persistent-host start/stop=0;
- BrowserRelay/Brave/ChatGPT browser contact/send=0;
- worker-delivery mutation=0;
- historical registration/authority mutation=0;
- mutation-lease acquire/release=0;
- Architect-trigger mutation=0;
- accepted-source pointer mutation=0;
- `WORKER-DELIVERY-EXECUTOR-000015` reuse/mutation=0;
- AFFOTECH/Drive/deployment/tenant/business/private-data access or mutation=0;
- credential/secret read=0.

No retry is authorized after timeout/auth/process/terminal/lineage/intent/result ambiguity.

## 8. Current required action

Run in the current Codex terminal:

`execute github dispatch nakfreeajer/affotech-agent-orchestrator-evidence DISPATCH-000202`

After the parent ORCH-000202 terminal/report/receipt is published, return to Architect with `verify & next`.

Only after ORCH-000202 live qualification is independently accepted may the project move to persistent-host automatic dispatch observation → direct Codex qualification.

## 9. Documentation / future intent

ORCH-000201 acceptance: `documentationImpact=FULL`; `futureIdeaImpact=NONE`.

ORCH-000202 publication: `documentationImpact=STATE`; `futureIdeaImpact=NONE`.

`IDEA-0001 — Deterministic Architect documentation-closure marker` remains `ADOPTED_FOR_FUTURE`, deferred until core unattended transport reaches production-candidate qualification.
