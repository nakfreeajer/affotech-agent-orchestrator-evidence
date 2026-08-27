Project: affotech-agent-orchestrator
Documentation sync boundary: through Architect-accepted ORCH-000166
Status: CURRENT HUMAN-READABLE PROJECTION
Machine authority: durable GitHub evidence and Architect decisions

# Project History

## 1. Foundation

The project established Rony as final authority, Architect as central governor/decision-maker, Executor as bounded worker, GitHub as durable evidence authority, exact role/session/lineage binding, no blind retry, and separation from AFFOTECH System V2 Hybrid.

Target shape:

`Architect → durable dispatch → persistent deterministic Orchestrator → Executor → durable terminal → persistent Orchestrator → Architect wake`

## 2. Delivery/recovery foundation — through ORCH-000130

ORCH-000113 through ORCH-000130 established durable delivery intent before browser contact, leases, exactly-once behavior, ambiguity reconciliation, and recovery-only `PROVEN_NOT_SENT` semantics. ORCH-000130 became the source baseline with 101 files and `813/813` tests.

## 3. Live composition hardening — ORCH-000131 through ORCH-000152

Resolved launcher/runtime issues including missing `input.nowMs`, stale local-git persistence, GitHub CLI resolution/body composition, no-op persistence, lease ambiguity, and stale-lease recovery binding.

## 4. ORCH-000153 — accepted forward delivery

Decision: `GH-DEC-153-FRESH-EXECUTOR-FORWARD-DELIVERY-000013-ACCEPTED`.

Proved `WORKER-DELIVERY-EXECUTOR-000013 / SENT` with one browser send, duplicate additional send `0`, and lease returned inactive.

## 5. ORCH-000154 through ORCH-000163 — Architect return path

The chain established the dedicated Brave relay on port `9333`, separated relay health from target readiness, reconciled trigger ambiguity without blind resend, and ORCH-000163 proved fresh trigger `000005 / SENT` exactly once with no assistant-response scraping.

## 6. Documentation governance — 2026-08-26

Rony directed Architect to update all relevant documentation directly. Project policy became `ARCHITECT_DIRECT`; Curator is no longer an active required role or transport leg.

## 7. ORCH-000164 — first persistent-host bootstrap BLOCKED

The explicit bootstrap boundary for `DISPATCH-000164` succeeded, but durable snapshot hydration rejected historical delivery `000013` because its old result omitted explicit message/dispatch lineage. The host stopped before browser contact/send.

## 8. ORCH-000165 — accepted compatibility repair

Changed only the two runtime-port modules and their tests. Legacy results may hydrate missing lineage only through exact immutable intent binding; explicit conflicts remain hard failures; future results persist explicit lineage. Historical delivery `000013` remains untouched.

Validation: focused `65/65`, runtime ports `43/43`, BrowserRelay transport ports `22/22`, full deterministic `817/817`, live read-only hydration writes `0`.

Accepted source:

`GH-PUB-165-WORKER-DELIVERY-LEGACY-LINEAGE-HYDRATION-REPAIR-READY-000001`.

## 9. ORCH-000166 — persistent automatic host ARMED and ACCEPTED

Decision:

`GH-DEC-166-UNATTENDED-AUTOMATIC-HOST-000026-ARMED-ACCEPTED`

Host:

`HOST-INSTANCE-SANDBOX-000026 / HOST-GEN-SANDBOX-000026`

Accepted proof:

- one OS process-creation attempt;
- PID `16880` alive at terminal publication;
- `leaveRunning=true`;
- consumed watermark `DISPATCH-000166` created/read back;
- three valid idle polls;
- bootstrap dispatch suppressed three times;
- browser contact/send `0/0`;
- worker-delivery/Architect-trigger mutation `0/0`;
- lease acquisition `0`;
- latest delivery and trigger unchanged;
- protected boundaries clean.

This is the first accepted persistent host armed for a strictly newer Architect dispatch.

## 10. ORCH-000167 — first full unattended-cycle probe

The next dispatch is not to be manually forwarded. Architect publishes it to GitHub and host `000026` must pick it up automatically.

The probe is intentionally no-op/read-only at Executor. Its only purpose is to prove, in one cycle:

`new Architect dispatch → automatic fresh worker delivery exactly once → Executor durable terminal → automatic fresh Architect wake exactly once`.

Success closes the transport-loop proof. Any ambiguous send must stop without retry and require read-only reconciliation.

## 11. Current target

After full-cycle proof, focus shifts from proving individual transport legs to hardening steady-state repetition/packaging while preserving durable authority, exact identities, duplicate suppression, fail-closed ambiguity, and protected boundaries.
