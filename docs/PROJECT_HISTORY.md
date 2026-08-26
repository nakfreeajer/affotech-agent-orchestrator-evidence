Project: affotech-agent-orchestrator
Documentation sync boundary: through Architect-accepted ORCH-000163 and Rony documentation-ownership directive of 2026-08-26
Status: CURRENT HUMAN-READABLE PROJECTION
Machine authority: durable GitHub evidence and Architect decisions

# Project History

## 1. Foundational governance and project memory

The early project established the permanent foundations:

- Rony as final human authority;
- Architect as central orchestration authority;
- Executor as bounded implementation/runtime worker;
- durable GitHub evidence as machine authority;
- immutable prompts/dispatches/decisions/terminals and current pointers;
- project-event/project-memory mechanics;
- no blind retry after ambiguous external mutation;
- exact role/session/lineage binding;
- protected separation from AFFOTECH System V2 Hybrid and the existing AFFOTECH relay.

Historical Curator/documentation projection work was useful during the earlier project-memory phase. That history remains valid, but the active documentation policy changed on 2026-08-26: Architect now updates all relevant documents directly.

## 2. Shift to operational messenger hardening

The project then concentrated on the actual operational objective:

```text
Architect → durable dispatch → local deterministic Orchestrator → Executor
Executor → durable result → local deterministic Orchestrator → Architect wake
```

The Orchestrator remains deterministic and non-AI.

## 3. Delivery-intent and ambiguity foundations

Material milestones established that:

- delivery intent must be durable before BrowserRelay contact;
- BrowserRelay must reject unprepared transport;
- mutation leases protect shared runtime state;
- ambiguous transport must stop and reconcile read-only before retry;
- host generation, delivery identity and target authority must remain exact;
- assistant response text/DOM is never authority.

ORCH-000113 through ORCH-000130 hardened this chain.

ORCH-000130 became the accepted source baseline after implementing the recovery-only `PROVEN_NOT_SENT` contract.

Accepted source:

`GH-PUB-130-PROVEN-NOT-SENT-DELIVERY-RECONCILIATION-CONTRACT-REPAIR-READY-000001`

Qualification:

- 101 source files;
- 813/0 full sharded tests;
- worker relay 148;
- BrowserRelay transport ports 21;
- persistent host runner 36;
- GitHub runtime ports 40.

## 4. Live runtime composition hardening — ORCH-000131 through ORCH-000138

ORCH-000131 safely reconciled a prior unresolved delivery as `PROVEN_NOT_SENT`.

ORCH-000132 exposed a missing `input.nowMs` in temporary launcher composition.

ORCH-000133 proved local git commit/push was the wrong runtime persistence strategy.

ORCH-000134 exposed missing GitHub CLI resolution in the spawned process.

ORCH-000135 proved GitHub Contents runtime worked but uncovered a dangerous no-op worker-persistence adapter in temporary live composition.

ORCH-000136 reconciled the resulting lease and proved accepted source ordering was correct; the defect was composition, not source.

ORCH-000137 used real GitHub Contents-backed delivery persistence and wrote the delivery intent before browser contact, but pre-send observation still failed before any send.

ORCH-000138 was Architect-accepted recovery: zero exact probe occurrences, delivery `000007` reconciled to `PROVEN_NOT_SENT`, associated lease terminalized `EXPIRED`, no retry.

## 5. Documentation catch-up — ORCH-000139

ORCH-000139 accepted a documentation catch-up through ORCH-000138 under the then-current documentation process.

This was the last major stale-document boundary before the current Architect-direct refresh.

## 6. Forward-delivery qualification — ORCH-000140 through ORCH-000153

ORCH-000140 through ORCH-000152 exposed and resolved a series of bounded live-composition/state issues:

- missing mutation-envelope hash;
- invalid temporary project profile;
- host GitHub Contents seam failures;
- GitHub CLI JSON stdin composition missing `--input -`;
- lease acquisition ambiguity;
- stale active lease and recovery-binding mismatch;
- exact stale-lease reconciliation.

The key lesson was to diagnose the concrete runtime seam rather than modify accepted source without evidence.

### ORCH-000153 — accepted fresh forward delivery

ORCH-000153 finally proved a fresh exactly-once Executor delivery:

- host `HOST-INSTANCE-SANDBOX-000024`;
- delivery `WORKER-DELIVERY-EXECUTOR-000013`;
- intent/result durable;
- state `SENT`;
- one browser send;
- duplicate replay additional send `0`;
- retry false;
- active lease count returned to zero;
- source/test/config/docs/governance/accepted source remained unchanged;
- AFFOTECH/Drive/deploy/protected boundaries remained untouched.

Decision:

`GH-DEC-153-FRESH-EXECUTOR-FORWARD-DELIVERY-000013-ACCEPTED`

This closed the forward-delivery proof.

## 7. Architect return-path repair — ORCH-000154 through ORCH-000158

ORCH-000154 found Architect port `9333` unavailable.

ORCH-000155 attempted recovery but selected Chrome; this was rejected because the intended relay was Brave and ownership was not proven.

ORCH-000156 performed the correct read-only diagnostic and proved there was no 9333 listener and no Brave process carrying the remote-debugging switch.

ORCH-000157 launched the exact Brave executable/profile but exposed a launch-composition defect: the process did not remain alive and the profile path was observed as a positional file URL.

ORCH-000158 repaired the launch composition and established the first healthy dedicated Brave relay on `127.0.0.1:9333` with the exact dedicated profile. `/json/version` and `/json/list` were healthy, but the exact registered Architect conversation was not yet present as the required target.

This was an important distinction: relay health was solved before target registration was solved.

## 8. Trigger qualification and reconciliation — ORCH-000159 through ORCH-000162

The next milestones reused the existing healthy relay instead of repeatedly launching browsers.

They enforced:

- launch/restart/kill count zero when required;
- exact registered target/composer gates;
- durable trigger intent/result semantics;
- no blind resend after ambiguity;
- USER-message boundary correlation rather than assistant-response scraping.

ORCH-000162 produced the decisive reconciliation for historical trigger `ARCH-TRIGGER-9333-000004`:

- proven not sent;
- no retry of trigger `000004` authorized;
- residual exact `verify & next` draft remained;
- fresh trigger identity `000005` became the only legal next send attempt.

Decision:

`GH-DEC-162-ARCHITECT-TRIGGER-000004-PROVEN-NOT-SENT-RECONCILIATION-ACCEPTED`

## 9. ORCH-000163 — automatic Architect doorbell accepted

ORCH-000163 adopted the proven-unsent existing draft under fresh trigger identity `ARCH-TRIGGER-9333-000005`.

Verified result:

- trigger intent durable;
- trigger result durable;
- current trigger pointer advanced/read back;
- USER count `2 → 3`;
- matching payload count `1 → 2`;
- newly appended USER message exact `verify & next`;
- composer emptied after send;
- attempted/confirmed `1/1`;
- second send `0`;
- duplicate replay additional send `0`;
- retry false;
- reconciliation false;
- assistant response text/DOM not read;
- browser launch/navigation `0/0`;
- source/test/config/AFFOTECH/Drive/deployment/protected-port mutations/contact `0`.

Executor publication:

`GH-PUB-163-ARCHITECT-TRIGGER-000005-SENT-000001`

Architect decision:

`GH-DEC-163-AUTOMATIC-ARCHITECT-DOORBELL-TRIGGER-000005-ACCEPTED`

This is the first fully confirmed automatic Architect wake in the current chain.

## 10. Documentation governance change — 2026-08-26

Rony explicitly directed:

**Architect needs to update all relevant documents directly.**

The project policy was strengthened accordingly:

- documentation policy is `ARCHITECT_DIRECT`;
- Architect directly maintains governance, architecture, current state, decision summaries, project history, reusable lessons and entrypoint/handover documentation;
- documentation closure occurs after accepted milestones/material Rony directives;
- Curator is no longer an active required role or transport leg;
- historical Curator evidence remains immutable and valid;
- reintroducing Curator requires a future explicit Rony policy change.

This documentation refresh itself brings the human-readable projection from the old ORCH-000138 boundary through accepted ORCH-000163.

## 11. Current trajectory

Two critical transport legs are now independently proven:

1. governed forward delivery to Executor exactly once — ORCH-000153;
2. automatic Architect wake exactly once — ORCH-000163.

The next project objective should combine these into the smallest reliable unattended governed cycle:

`Architect decision/dispatch → Orchestrator → Executor → durable terminal → Orchestrator → Architect wake → Architect decision → next cycle`

Do not add a Curator relay merely for documentation continuity. Do not reopen accepted 9333 repair milestones without regression evidence. AFFOTECH remains separate/protected.
