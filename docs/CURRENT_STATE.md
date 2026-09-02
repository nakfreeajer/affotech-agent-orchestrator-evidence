Project: affotech-agent-orchestrator
Documentation sync boundary: through ORCH-000200 / DISPATCH-000200 publication on 2026-09-02
Status: CURRENT HUMAN-READABLE PROJECTION
Machine authority: durable GitHub evidence and Architect decisions

# Current State

## 1. Accepted source

`GH-PUB-165-WORKER-DELIVERY-LEGACY-LINEAGE-HYDRATION-REPAIR-READY-000001`

Qualification: 101 files; focused `65/65`; GitHub runtime ports `43/43`; BrowserRelay transport ports `22/22`; full deterministic `817/817`.

Accepted source did not change through ORCH-000200 dispatch publication.

## 2. Accepted current Codex topology

ORCH-000198 remains accepted under:

`GH-DEC-198-CODEX-DIRECT-MANUAL-TOPOLOGY-ACCEPTED`

Proven current path:

`Architect durable dispatch → manual user locator/message → Codex terminal/runtime in VS Code → direct GitHub authority reads/work → direct GitHub terminal publication → Architect review`.

Historical BrowserRelay `9444` remains legacy relative to this proven path.

## 3. ORCH-000199 — ACCEPTED Codex non-interactive capability discovery

Executor terminal:

`GH-PUB-199-CODEX-NONINTERACTIVE-CAPABILITY-DISCOVERY-000001`

Architect decision:

`GH-DEC-199-CODEX-NONINTERACTIVE-CAPABILITY-DISCOVERY-ACCEPTED`

Accepted facts:

- installed runtime `codex-cli 0.151.0`;
- supported non-interactive interface `codex exec`;
- prompt by argument/stdin;
- working-directory, model/profile/config, sandbox/approval and structured output controls;
- ephemeral execution support;
- current CLI reports `Logged in using ChatGPT`;
- separately spawned child auth reuse remains unproven;
- accepted source has no direct Codex spawn adapter yet;
- BrowserRelay restoration is not required for the direct-Codex qualification chain.

## 4. Durable state

- lease index revision `382`;
- `nextLeaseEpoch=192`;
- `activeLeases=[]`;
- latest successful historical BrowserRelay delivery `WORKER-DELIVERY-EXECUTOR-000013/SENT`;
- delivery `000014/PROVEN_NOT_SENT` preserved;
- delivery `000015` intent/result absent and retry unauthorized;
- historical worker registration remains ACTIVE but no mutation is authorized;
- latest Architect trigger `ARCH-TRIGGER-9333-000005/SENT`.

## 5. Current missing proof

`CHILD_CODEX_EXEC_CHATGPT_AUTH_REUSE_AND_OBSERVABLE_EXIT_OUTPUT_NOT_YET_PROVEN`

## 6. ORCH-000200 — current legal milestone

Current canonical prompt/dispatch:

- `ORCH-000200`
- `DISPATCH-000200`
- milestone `ORCH.P0.SANDBOX.OPERATIONAL.UNATTENDED.CYCLE.CODEX.DIRECT.ONE.SHOT.AUTH.REUSE.QUALIFICATION.2S`
- operation class `ONE_SHOT_CODEX_EXEC_AUTH_REUSE_QUALIFICATION`
- dispatch state `MANUAL_TRIGGER_REQUIRED`
- correlation token `ORCH200_OK_89F8188224F4F81CB444F1A3`

ORCH-000200 authorizes exactly one isolated child `codex exec` invocation solely to prove ChatGPT-auth reuse and machine-observable exit/output behavior.

Before the child invocation it must create/read back one durable correlation intent. After the one invocation it must create/read back one durable qualification result. Timeout, auth failure, nonzero exit, output mismatch, or ambiguity must stop with **no retry**.

Authorized child controls are bounded to the ORCH-000199-proven interface: read-only sandbox, ephemeral execution, explicit working directory and exact last-message output capture.

The child prompt is harmless and requires exactly one pre-bound token response; it contains no project implementation task.

## 7. Current required action

Run in the current Codex terminal:

`execute github dispatch nakfreeajer/affotech-agent-orchestrator-evidence DISPATCH-000200`

After its terminal/report/receipt is published, return to Architect with `verify & next`.

Until ORCH-000200 is independently reviewed:

- manual user handoff remains the current inbound execution path;
- no production/direct Codex adapter is accepted;
- do not restore Brave/BrowserRelay `9444`;
- do not mutate/supersede the historical registration;
- do not create/retry delivery `000015`.

## 8. Protected zero for ORCH-000200

- child `codex exec` invocation count ≤ 1;
- child termination ≤ 1 and only on bounded timeout;
- lease/worker-delivery/browser/registration/source/docs/AFFOTECH/Drive mutation = 0;
- qualification intent create ≤ 1;
- qualification result create ≤ 1;
- one exact disposable temp last-message file may be created and deleted only within this milestone;
- credential/secret read = 0.

## 9. Documentation / future intent

ORCH-000199 acceptance: `documentationImpact=FULL`; `futureIdeaImpact=NONE`.

ORCH-000200 publication: `documentationImpact=STATE`; `futureIdeaImpact=NONE`.

`IDEA-0001 — Deterministic Architect documentation-closure marker` remains `ADOPTED_FOR_FUTURE`, deferred until core unattended transport reaches production-candidate qualification.
