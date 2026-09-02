Project: affotech-agent-orchestrator
Documentation sync boundary: through ORCH-000201 / DISPATCH-000201 publication on 2026-09-02
Status: CURRENT HUMAN-READABLE PROJECTION
Machine authority: durable GitHub evidence and Architect decisions

# Current State

## 1. Accepted source

`GH-PUB-165-WORKER-DELIVERY-LEGACY-LINEAGE-HYDRATION-REPAIR-READY-000001`

Qualification: 101 files; focused `65/65`; GitHub runtime ports `43/43`; BrowserRelay transport ports `22/22`; full deterministic `817/817`.

Accepted source has not changed through ORCH-000201 dispatch publication.

## 2. Accepted current Codex topology

ORCH-000198 remains accepted under:

`GH-DEC-198-CODEX-DIRECT-MANUAL-TOPOLOGY-ACCEPTED`

Current accepted production path remains:

`Architect durable dispatch → manual user locator/message → Codex terminal/runtime in VS Code → direct GitHub authority reads/work → direct GitHub terminal publication → Architect review`.

Historical BrowserRelay `9444` remains legacy relative to this path.

## 3. ORCH-000199 — ACCEPTED capability discovery

`GH-DEC-199-CODEX-NONINTERACTIVE-CAPABILITY-DISCOVERY-ACCEPTED`

Installed `codex-cli 0.151.0` exposes supported non-interactive `codex exec` with prompt argument/stdin, explicit workdir, sandbox/approval controls, structured output and ephemeral execution.

## 4. ORCH-000200 — ACCEPTED one-shot direct Codex qualification

Executor terminal:

`GH-PUB-200-CODEX-DIRECT-AUTH-REUSE-QUALIFICATION-000001`

Architect decision:

`GH-DEC-200-CODEX-DIRECT-AUTH-REUSE-QUALIFICATION-ACCEPTED`

Verified:

- durable intent ARMED before invocation;
- exactly one child `codex exec` invocation;
- current ChatGPT authentication successfully reused;
- child exit code `0`;
- timeout=false, termination count `0`;
- exact correlation token matched;
- retryAttempted=false;
- durable result outcome `QUALIFIED`;
- exact disposable temp output cleaned after result readback;
- protected mutation counts zero.

This proves a one-shot authenticated direct `codex exec` primitive. It does not yet make unattended dispatch production-ready.

## 5. Durable state

- lease index revision `382`;
- `nextLeaseEpoch=192`;
- `activeLeases=[]`;
- latest successful historical BrowserRelay delivery `WORKER-DELIVERY-EXECUTOR-000013/SENT`;
- delivery `000014/PROVEN_NOT_SENT` preserved;
- delivery `000015` intent/result absent and must not be reused for direct Codex;
- historical worker registration `WORKER-REG-EXECUTOR-000001` remains ACTIVE but no mutation is authorized;
- latest Architect trigger `ARCH-TRIGGER-9333-000005/SENT`.

## 6. Current implementation gap

`GOVERNED_DIRECT_CODEX_ADAPTER_NOT_YET_IMPLEMENTED_OR_QUALIFIED`

The runtime primitive is proven. The remaining gap is the deterministic adapter that lets the persistent Orchestrator invoke Codex with durable pre-spawn intent, a fresh direct-Codex identity, at-most-once spawn, duplicate suppression, explicit workdir/sandbox, bounded terminal observation and output/exit reconciliation, distinct failure states, durable result, and no blind retry.

## 7. Accepted source placement

The GH-PUB-165 accepted source is preserved at:

- `evidence/artifacts/orch-000165/manifest.json`
- `evidence/artifacts/orch-000165/source.tar.gz`

The manifest confirms actual project paths including:

- `src/host/persistent-host-runner.js`
- `src/host/automatic-dispatch-host.js`
- `src/host/github-runtime-ports.js`
- `src/recovery/exactly-once.js`
- `src/evidence/publish-evidence.js`
- corresponding `test/` paths.

## 8. ORCH-000201 — current legal milestone

Current canonical prompt/dispatch:

- `ORCH-000201`
- `DISPATCH-000201`
- milestone `ORCH.P0.SANDBOX.OPERATIONAL.UNATTENDED.CYCLE.CODEX.DIRECT.GOVERNED.ADAPTER.IMPLEMENTATION.2T`
- operation class `SOURCE_MUTATION`
- candidate publication `GH-PUB-201-GOVERNED-DIRECT-CODEX-ADAPTER-READY-000001`
- dispatch state `MANUAL_TRIGGER_REQUIRED`.

ORCH-000201 authorizes source/test implementation only within seven explicit tracked paths. It requires a fresh `CODEX-DIRECT-INVOCATION-*` namespace, durable intent before child spawn, at-most-once child spawn, duplicate suppression, exact durable Executor-terminal observation before transport success, persistent-host composition without BrowserRelay, and distinct fail-closed outcome classes.

ORCH-000201 explicitly forbids:

- any real child Codex/model invocation;
- BrowserRelay/Brave/ChatGPT browser contact;
- host process start/stop;
- historical registration mutation;
- BrowserRelay delivery `000015` reuse/mutation;
- lease mutation;
- AFFOTECH/Drive access;
- Executor docs/governance mutation.

## 9. Current required action

Run in the current Codex terminal:

`execute github dispatch nakfreeajer/affotech-agent-orchestrator-evidence DISPATCH-000201`

After the candidate source terminal/report/receipt is published, return to Architect with `verify & next`.

Implementation acceptance will not by itself authorize unattended production use. A separate live qualification is required afterward.

## 10. Documentation / future intent

ORCH-000200 acceptance: `documentationImpact=FULL`; `futureIdeaImpact=NONE`.

ORCH-000201 publication: `documentationImpact=STATE`; `futureIdeaImpact=NONE`.

`IDEA-0001 — Deterministic Architect documentation-closure marker` remains `ADOPTED_FOR_FUTURE`, deferred until core unattended transport reaches production-candidate qualification.
