Project: affotech-agent-orchestrator
Documentation sync boundary: through ORCH-000200 Architect acceptance on 2026-09-02
Status: CURRENT HUMAN-READABLE PROJECTION
Machine authority: durable GitHub evidence and Architect decisions

# Current State

## 1. Accepted source

`GH-PUB-165-WORKER-DELIVERY-LEGACY-LINEAGE-HYDRATION-REPAIR-READY-000001`

Qualification: 101 files; focused `65/65`; GitHub runtime ports `43/43`; BrowserRelay transport ports `22/22`; full deterministic `817/817`.

Accepted source did not change through ORCH-000200.

## 2. Accepted current Codex topology

ORCH-000198 remains accepted under:

`GH-DEC-198-CODEX-DIRECT-MANUAL-TOPOLOGY-ACCEPTED`

Current accepted production path remains:

`Architect durable dispatch → manual user locator/message → Codex terminal/runtime in VS Code → direct GitHub authority reads/work → direct GitHub terminal publication → Architect review`.

Historical BrowserRelay `9444` remains legacy relative to this path.

## 3. ORCH-000199 — ACCEPTED capability discovery

`GH-DEC-199-CODEX-NONINTERACTIVE-CAPABILITY-DISCOVERY-ACCEPTED`

Accepted: installed `codex-cli 0.151.0` exposes supported non-interactive `codex exec` with prompt argument/stdin, explicit workdir, sandbox/approval controls, structured output and ephemeral execution.

## 4. ORCH-000200 — ACCEPTED direct Codex one-shot qualification

Executor terminal:

`GH-PUB-200-CODEX-DIRECT-AUTH-REUSE-QUALIFICATION-000001`

Architect decision:

`GH-DEC-200-CODEX-DIRECT-AUTH-REUSE-QUALIFICATION-ACCEPTED`

Verified qualification facts:

- durable intent `evidence/codex-direct-qualifications/ORCH-000200/intent.json` was ARMED before invocation;
- exactly one child `codex exec` invocation occurred;
- current ChatGPT authentication was successfully reused by the child;
- child exit code `0`;
- timeout=false;
- termination attempt count `0`;
- exact correlation token `ORCH200_OK_89F8188224F4F81CB444F1A3` matched the bounded last-message output;
- retryAttempted=false;
- durable result `evidence/codex-direct-qualifications/ORCH-000200/result.json` recorded `QUALIFIED`;
- the one authorized disposable temp output was cleaned after durable result readback;
- lease/worker-delivery/browser/registration/source/docs-by-Executor/AFFOTECH/Drive mutations remained zero.

This proves a one-shot direct authenticated `codex exec` primitive. It does **not** yet make unattended dispatch production-ready.

## 5. Durable state

- lease index revision `382`;
- `nextLeaseEpoch=192`;
- `activeLeases=[]`;
- latest successful historical BrowserRelay delivery `WORKER-DELIVERY-EXECUTOR-000013/SENT`;
- delivery `000014/PROVEN_NOT_SENT` preserved;
- delivery `000015` intent/result absent and must not be reused for direct Codex;
- historical worker registration `WORKER-REG-EXECUTOR-000001` remains ACTIVE but no mutation is authorized;
- latest Architect trigger `ARCH-TRIGGER-9333-000005/SENT`.

## 6. Current missing capability

`GOVERNED_DIRECT_CODEX_ADAPTER_NOT_YET_IMPLEMENTED_OR_QUALIFIED`

The runtime primitive is proven. The remaining implementation gap is the deterministic adapter that lets the persistent Orchestrator invoke Codex under the same governance quality already required elsewhere.

Required properties include durable pre-spawn intent, fresh direct-Codex identity, at-most-once child spawn, duplicate suppression, explicit workdir/sandbox, bounded output/exit reconciliation, timeout/auth/nonzero/mismatch/ambiguity states, durable result, and no blind retry.

## 7. Accepted source placement

The GH-PUB-165 accepted source is preserved at:

- `evidence/artifacts/orch-000165/manifest.json`
- `evidence/artifacts/orch-000165/source.tar.gz`

The manifest confirms the actual project layout, including:

- `src/host/persistent-host-runner.js`
- `src/host/automatic-dispatch-host.js`
- `src/host/github-runtime-ports.js`
- `src/recovery/exactly-once.js`
- `src/evidence/publish-evidence.js`
- corresponding `test/` paths.

## 8. Required next action

The next legal milestone is ORCH-000201: bounded source/test implementation of the governed direct-Codex adapter against the accepted project source.

It must not use BrowserRelay, mutate the historical registration, reuse delivery `000015`, or touch AFFOTECH/Drive.

A live unattended production dispatch is **not** authorized by implementation alone; the new adapter must be independently tested and then live-qualified under a later bounded milestone.

## 9. Documentation / future intent

ORCH-000200: `documentationImpact=FULL`; `futureIdeaImpact=NONE`.

`IDEA-0001 — Deterministic Architect documentation-closure marker` remains `ADOPTED_FOR_FUTURE`, deferred until core unattended transport reaches production-candidate qualification.
