Project: affotech-agent-orchestrator
Documentation sync boundary: through Architect-accepted ORCH-000165 and canonical ORCH-000166
Status: CURRENT HUMAN-READABLE PROJECTION
Machine authority: durable GitHub evidence and Architect decisions

# Project History

## 1. Foundation

The project established Rony as final authority, Architect as central governor/decision-maker, Executor as bounded worker, GitHub as durable evidence authority, exact role/session/lineage binding, no blind retry, and separation from AFFOTECH System V2 Hybrid.

The Orchestrator target is a small deterministic messenger:

`Architect → durable dispatch → Orchestrator → Executor → durable terminal → Orchestrator → Architect wake`

## 2. Delivery/recovery foundation — through ORCH-000130

ORCH-000113 through ORCH-000130 established durable delivery intent before browser contact, leases, exactly-once behavior, ambiguity reconciliation, and recovery-only `PROVEN_NOT_SENT` semantics.

ORCH-000130 became the accepted source baseline with 101 files and `813/813` tests.

## 3. Live composition hardening — ORCH-000131 through ORCH-000152

This phase exposed and resolved launcher/runtime issues including missing `input.nowMs`, stale local-git persistence, GitHub CLI resolution/body composition, no-op persistence, lease ambiguity, and stale-lease recovery binding. These were handled fail-closed without inventing source defects.

## 4. ORCH-000153 — accepted forward delivery

Decision: `GH-DEC-153-FRESH-EXECUTOR-FORWARD-DELIVERY-000013-ACCEPTED`.

Proved `WORKER-DELIVERY-EXECUTOR-000013 / SENT` with one browser send, duplicate additional send `0`, and lease returned inactive.

## 5. ORCH-000154 through ORCH-000163 — Architect return path

The chain diagnosed missing 9333 listener, rejected wrong-browser recovery, established the dedicated Brave relay, separated relay health from registered-target readiness, and reconciled trigger ambiguity without blind resend.

ORCH-000162 proved trigger `000004` was not sent.

ORCH-000163 then proved fresh trigger `000005 / SENT` exactly once with USER boundary `2→3`, attempted/confirmed `1/1`, second send `0`, duplicate additional send `0`, and no assistant-response scraping.

## 6. Documentation governance — 2026-08-26

Rony directed Architect to update all relevant documentation directly. Project policy became `ARCHITECT_DIRECT`; Curator is no longer an active required role or transport leg.

## 7. ORCH-000164 — first persistent unattended-host bootstrap

Goal: start a long-running host, mark `DISPATCH-000164` already handled, poll safely with zero send, and leave it armed.

What worked:

- host identity `HOST-INSTANCE-SANDBOX-000025` created;
- explicit bootstrap boundary for `DISPATCH-000164` created/read back;
- zero browser contacts/sends;
- no delivery/trigger/lease mutation.

What failed:

The first durable polling snapshot returned `WORKER_DELIVERY_LINEAGE_CONFLICT`. Accepted delivery `000013` had exact immutable intent binding, but its historical result omitted explicit `messageId`/`dispatchId`, while the then-accepted reader required them.

The host was stopped before transport activity. Architect classified ORCH-000164 `BLOCKED` and explicitly prohibited rewriting historical evidence.

## 8. ORCH-000165 — accepted legacy-lineage compatibility repair

ORCH-000165 changed only:

- `src/host/github-runtime-ports.js`;
- `src/host/browser-relay-transport-ports.js`;
- their two focused test files.

Accepted behavior:

- legacy result without explicit message/dispatch lineage may hydrate only from its exact immutable intent;
- exact `intentSha256`, delivery ID and worker role are mandatory;
- any explicit lineage conflict remains a hard failure;
- future worker-delivery results persist explicit `messageId` and `dispatchId`;
- historical result `000013` remains untouched.

Validation:

- focused `65/65`;
- GitHub runtime ports `43/43`;
- BrowserRelay transport ports `22/22`;
- full deterministic `817/817`;
- read-only real delivery `000013` hydration = `SENT / ORCH-000153 / DISPATCH-000153`, writes `0`.

Architect accepted publication:

`GH-PUB-165-WORKER-DELIVERY-LEGACY-LINEAGE-HYDRATION-REPAIR-READY-000001`

under decision:

`GH-DEC-165-WORKER-DELIVERY-LEGACY-LINEAGE-HYDRATION-REPAIR-ACCEPTED`.

This is now the accepted source baseline.

## 9. ORCH-000166 — current persistent-host retry

Fresh host identity:

`HOST-INSTANCE-SANDBOX-000026 / HOST-GEN-SANDBOX-000026`

`DISPATCH-000166` is the new manual bootstrap boundary. It must be marked already handled, never echoed to Executor, and only a strictly newer dispatch may be automatically forwarded.

The milestone must perform the repaired delivery-000013 hydration probe before launch, make exactly one OS process-creation attempt, complete at least two valid idle polls with zero browser contact/send, and leave the host running.

If accepted, the next Architect dispatch after `000166` must be picked up automatically by the running host. That next cycle is intended to prove the combined unattended path rather than another independent transport leg.

## 10. Current target

`Architect decision/dispatch → persistent Orchestrator → Executor exactly once → durable terminal → persistent Orchestrator → Architect wake exactly once → Architect decision → repeat`

Do not add a Curator relay. Do not reopen 9333 repair without regression evidence. AFFOTECH remains separate/protected.
