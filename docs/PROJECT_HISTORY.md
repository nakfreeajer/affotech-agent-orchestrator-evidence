Project: affotech-agent-orchestrator
Documentation sync boundary: through ORCH-000200 Architect acceptance on 2026-09-02
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

`Architect durable dispatch → manual user locator/message → Codex terminal/runtime in VS Code → direct GitHub authority reads/work → direct GitHub terminal/report/receipt publication → Architect review`.

BrowserRelay `9444` was accepted as legacy relative to this current manual path.

## ORCH-000199 — non-interactive Codex capability accepted

Decision:

`GH-DEC-199-CODEX-NONINTERACTIVE-CAPABILITY-DISCOVERY-ACCEPTED`

Read-only discovery proved the installed `codex-cli 0.151.0` exposes supported `codex exec` with prompt argument/stdin, workdir, model/profile/config, sandbox/approval, structured output and ephemeral controls. The current CLI reported ChatGPT login, but child reuse remained unproven because child invocation was prohibited.

## ORCH-000200 — direct Codex auth/output qualification accepted

Executor terminal:

`GH-PUB-200-CODEX-DIRECT-AUTH-REUSE-QUALIFICATION-000001`

Architect decision:

`GH-DEC-200-CODEX-DIRECT-AUTH-REUSE-QUALIFICATION-ACCEPTED`

A single isolated qualification was performed with a pre-bound correlation token and durable intent.

Verified result:

- intent durably ARMED before child invocation;
- exactly one child `codex exec` run;
- child successfully reused the existing ChatGPT-authenticated CLI session;
- exit code `0`;
- no timeout and no termination;
- exact correlation output matched;
- no retry;
- durable result outcome `QUALIFIED`;
- post-result disposable temp output cleaned once;
- no lease/worker-delivery/browser/registration/source/AFFOTECH/Drive mutation.

ORCH-000200 therefore proves a one-shot authenticated direct Codex child-process primitive. It does not yet prove the persistent unattended adapter.

`documentationImpact=FULL`; `futureIdeaImpact=NONE`.

## Accepted source placement confirmed

The accepted GH-PUB-165 source is preserved under `evidence/artifacts/orch-000165/` as `manifest.json` plus `source.tar.gz`. The manifest confirms canonical project paths including host, recovery, evidence and test trees.

## Current target

The next bounded milestone is ORCH-000201: implement and test a governed direct-Codex adapter against the accepted source.

The adapter must provide durable pre-spawn intent, a fresh direct-Codex identity, at-most-once child spawn, duplicate suppression, explicit workdir/sandbox/ephemeral controls, bounded output/exit reconciliation, distinct failure states, durable result, and no blind retry.

BrowserRelay `9444` remains outside this path. Historical registration remains untouched. Delivery `000015` must not be reused. AFFOTECH remains protected.

After implementation acceptance, a later bounded milestone must live-qualify the adapter end-to-end before unattended production operation is claimed.
