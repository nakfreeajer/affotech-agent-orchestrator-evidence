Project: affotech-agent-orchestrator
Documentation sync boundary: through Architect-classified ORCH-000164 and canonical ORCH-000165 repair dispatch
Status: CURRENT HUMAN-READABLE PROJECTION
Machine authority: durable GitHub evidence and Architect decisions

# Project History

## 1. Foundational governance and project memory

The project established:

- Rony as final human authority;
- Architect as central orchestration authority;
- Executor as bounded implementation/runtime worker;
- durable GitHub evidence as machine authority;
- immutable prompts/dispatches/decisions/terminals and current pointers;
- no blind retry after ambiguous external mutation;
- exact role/session/lineage binding;
- protected separation from AFFOTECH System V2 Hybrid and the existing AFFOTECH relay.

Historical Curator/documentation work remains valid history. On 2026-08-26 Rony changed active documentation ownership to `ARCHITECT_DIRECT`.

## 2. Operational messenger hardening

The operating target became:

```text
Architect → durable dispatch → local deterministic Orchestrator → Executor
Executor → durable result → local deterministic Orchestrator → Architect wake
```

The Orchestrator remains deterministic and non-AI.

## 3. ORCH-000113 through ORCH-000130 — delivery ordering and recovery foundation

This chain established durable delivery intent before browser contact, mutation-lease protection, fail-closed ambiguity handling, exact authority/lineage binding, and explicit recovery-only `PROVEN_NOT_SENT` semantics.

ORCH-000130 became the accepted source baseline:

`GH-PUB-130-PROVEN-NOT-SENT-DELIVERY-RECONCILIATION-CONTRACT-REPAIR-READY-000001`

Qualification:

- 101 source files;
- full deterministic sharded suite `813/0`;
- worker relay 148;
- BrowserRelay transport ports 21;
- persistent host runner 36;
- GitHub runtime ports 40.

## 4. ORCH-000131 through ORCH-000138 — live runtime composition hardening

This phase safely reconciled unresolved delivery state and exposed several temporary launcher/composition problems, including missing `input.nowMs`, stale local-git runtime persistence, missing GitHub CLI path, and a no-op worker-persistence adapter.

ORCH-000138 was accepted recovery: delivery `000007` was proven not sent and reconciled to `PROVEN_NOT_SENT`; its lease became `EXPIRED`; no retry occurred.

## 5. ORCH-000139 — documentation catch-up

ORCH-000139 accepted a human-readable documentation catch-up through ORCH-000138 under the historical documentation process.

## 6. ORCH-000140 through ORCH-000153 — forward delivery qualification

The live chain resolved:

- missing mutation-envelope hash;
- invalid temporary project profile;
- GitHub Contents host/lease composition defects;
- missing GitHub CLI `--input -` JSON stdin behavior;
- lease acquisition ambiguity;
- stale active lease and exact recovery-binding mismatch.

### ORCH-000153 — accepted fresh forward delivery

Decision:

`GH-DEC-153-FRESH-EXECUTOR-FORWARD-DELIVERY-000013-ACCEPTED`

Proven state:

- host `HOST-INSTANCE-SANDBOX-000024`;
- delivery `WORKER-DELIVERY-EXECUTOR-000013 / SENT`;
- durable intent/result;
- one browser send;
- duplicate replay additional send `0`;
- retry false;
- active lease count returned to zero.

This closed the forward-delivery proof.

## 7. ORCH-000154 through ORCH-000163 — Architect return-path proof

The project then hardened the Architect relay:

- diagnosed missing port `9333` listener;
- rejected wrong-browser Chrome recovery;
- proved Brave process/listener ownership requirements;
- repaired exact Brave argv/profile composition;
- separated relay health from exact registered conversation readiness;
- reconciled trigger ambiguity without blind resend.

ORCH-000162 proved trigger `000004` was not sent and required a fresh trigger identity.

### ORCH-000163 — accepted automatic Architect doorbell

Decision:

`GH-DEC-163-AUTOMATIC-ARCHITECT-DOORBELL-TRIGGER-000005-ACCEPTED`

Proven state:

- trigger `ARCH-TRIGGER-9333-000005 / SENT`;
- USER count `2 → 3`;
- matching `verify & next` count `1 → 2`;
- attempted/confirmed `1/1`;
- second send `0`;
- duplicate replay additional send `0`;
- no assistant response text/DOM read.

This closed the independent automatic Architect-wake proof.

## 8. 2026-08-26 — Architect-direct documentation governance

Rony explicitly directed:

**Architect needs to update all relevant documents directly.**

Project governance was changed so:

- documentation policy is `ARCHITECT_DIRECT`;
- Architect directly maintains governance, architecture, current state, decision summaries, history, reusable lessons, README and recovery/handover material as applicable;
- Curator is not an active required role or transport leg;
- historical Curator evidence remains immutable and valid.

## 9. ORCH-000164 — first unattended-host bootstrap attempt BLOCKED

Goal:

Start one persistent automatic host, mark `DISPATCH-000164` already handled, poll safely with zero sends, and leave the host armed for the next Architect dispatch.

Executor publication:

`GH-PUB-164-AUTOMATIC-HOST-000025-BOOTSTRAP-BLOCKED-LINEAGE-CONFLICT-000001`

Architect decision:

`GH-DEC-164-UNATTENDED-HOST-BOOTSTRAP-LINEAGE-CONFLICT-BLOCKED`

What succeeded:

- host identity `HOST-INSTANCE-SANDBOX-000025` created;
- explicit bootstrap boundary for `DISPATCH-000164` created/read back;
- one polling iteration reached;
- zero browser contacts/sends;
- no delivery/trigger/lease mutation;
- protected boundaries stayed clean.

What failed:

`createGitHubRuntimePorts.readDurableSnapshot -> hydrateWorkerPointers.hydrateDelivery`

returned:

`WORKER_DELIVERY_LINEAGE_CONFLICT`

because the immutable result for accepted forward delivery `000013` does not contain explicit `messageId` or `dispatchId`, while the accepted hydrator requires those fields.

The immutable intent does contain `ORCH-000153 / DISPATCH-000153`; the result binds to the exact same immutable intent SHA, delivery ID, and worker role.

The host was stopped. No browser retry occurred.

## 10. ORCH-000165 — current source repair

Architect chose not to rewrite historical delivery evidence.

Canonical repair:

`ORCH.P0.SANDBOX.OPERATIONAL.WORKER.DELIVERY.LEGACY.RESULT.LINEAGE.HYDRATION.REPAIR.1A`

Dispatch:

`DISPATCH-000165`

Required repair direction:

- legacy result without explicit message/dispatch lineage may hydrate only through the exact immutable bound intent;
- exact `intentSha256`, delivery ID, and worker-role binding are mandatory;
- explicit result lineage mismatch remains a hard conflict;
- future results must persist explicit `messageId` and `dispatchId`;
- delivery `000013` and all historical evidence remain untouched;
- source/test validation plus a read-only real-000013 hydration check are required;
- successful candidate source must be preserved as a complete immutable snapshot for Architect review.

## 11. Current trajectory

After ORCH-000165 is accepted, retry persistent-host bootstrap under a fresh host identity/dispatch. Do not reuse ORCH-000164 or host `000025` as a successful bootstrap.

The end goal remains:

`Architect decision/dispatch → persistent Orchestrator → Executor exactly once → durable terminal → automatic Architect wake exactly once → Architect decision → repeat`

Do not add a Curator relay. Do not reopen 9333 repair without regression evidence. AFFOTECH remains separate/protected.
