Project: affotech-agent-orchestrator
Documentation sync boundary: through ORCH-000199 Architect acceptance on 2026-09-02
Status: CURRENT HUMAN-READABLE PROJECTION
Machine authority: durable GitHub evidence and Architect decisions

# Project History

## Foundation through ORCH-000165

The project established Rony as final authority, Architect as governor/decision-maker, Executor as bounded worker, GitHub as durable evidence authority, exact lineage, no blind retry, and separation from AFFOTECH.

Key accepted foundations:

- ORCH-000153: worker forward delivery `WORKER-DELIVERY-EXECUTOR-000013/SENT` exactly once through the then-registered BrowserRelay path;
- ORCH-000163: Architect wake `ARCH-TRIGGER-9333-000005/SENT` exactly once;
- ORCH-000165: lineage compatibility repair accepted with full deterministic `817/817`.

## ORCH-000166 through ORCH-000194 — persistent-host recovery foundation

Persistent-host bootstrap, dispatch observation, full immutable lease hydration, typed hash identities, exact create/readback semantics and semantic GitHub `404 → NOT_FOUND` handling were established. ORCH-000193 closed the stale epoch-189 lease; ORCH-000194 proved zero-browser ACQUIRE → PREPARE → PROVEN_NOT_SENT → RELEASE.

## ORCH-000195 through ORCH-000197 — historical 9444 recovery branch

ORCH-000195 found registered endpoint `9444` unavailable before delivery `000015` preparation. ORCH-000196 diagnosed no listener/owner and ORCH-000197 confirmed the expected restoration had not occurred. The branch remained mutation-clean.

At that time the project incorrectly assumed the historical BrowserRelay registration represented the active Executor runtime path.

## 2026-09-02 — runtime/transport identity correction

Rony confirmed that the operational Executor is the Codex terminal/runtime in VS Code, exposing the governance defect of collapsing role/runtime/transport/browser/endpoint identity.

Permanent correction:

`role ≠ runtime ≠ transport ≠ browser/session ≠ endpoint`

Project policy advanced to v1.5 and the `9444` restoration instruction was superseded for future action.

## ORCH-000198 — current Codex topology accepted

Decision:

`GH-DEC-198-CODEX-DIRECT-MANUAL-TOPOLOGY-ACCEPTED`

Proven current path:

```text
Architect durable dispatch
  → manual user locator/message
  → Codex terminal/runtime in VS Code
  → direct GitHub authority reads
  → bounded Executor work
  → direct GitHub terminal/report/receipt publication
  → Architect review
```

BrowserRelay `9444` was accepted as legacy relative to this current manual path. No persistent automatic Orchestrator/GitHub → Codex bridge was found.

## ORCH-000199 — non-interactive Codex capability discovered and accepted

Executor terminal:

`GH-PUB-199-CODEX-NONINTERACTIVE-CAPABILITY-DISCOVERY-000001`

Architect decision:

`GH-DEC-199-CODEX-NONINTERACTIVE-CAPABILITY-DISCOVERY-ACCEPTED`

Read-only discovery proved:

- installed CLI `codex-cli 0.151.0`;
- executable binding through `C:\Users\nitro\AppData\Roaming\npm\codex.ps1`;
- supported non-interactive `codex exec` interface;
- prompt argument/stdin input;
- working-directory/model/profile/config/sandbox/approval controls;
- structured/machine-readable output surfaces;
- ephemeral execution support;
- current CLI reports `Logged in using ChatGPT`.

No child/model invocation occurred, so child `codex exec` reuse of the current ChatGPT login remains unproven. The accepted source has no direct Codex child-spawn adapter yet.

This milestone redirected the unattended architecture toward a direct Codex CLI path rather than BrowserRelay restoration.

No lease, worker delivery, browser, process, registration, source, AFFOTECH or Drive mutation occurred.

`documentationImpact=FULL`; `futureIdeaImpact=NONE`.

## Current target

The next bounded proof is ORCH-000200: exactly one isolated, read-only, ephemeral child `codex exec` invocation using a harmless deterministic correlation prompt, solely to prove authentication reuse plus observable exit/output semantics.

No production adapter, BrowserRelay restoration, historical registration mutation, delivery `000015` retry or application implementation is authorized by that qualification.

If ORCH-000200 succeeds, a later bounded milestone may design/implement a governed direct-Codex adapter with durable intent/result, exactly-once child invocation, timeout reconciliation and duplicate suppression.

AFFOTECH remains separate/protected until later explicit Rony-authorized integration.
