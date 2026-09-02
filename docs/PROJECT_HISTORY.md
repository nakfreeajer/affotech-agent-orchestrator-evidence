Project: affotech-agent-orchestrator
Documentation sync boundary: through ORCH-000196 Architect review
Status: CURRENT HUMAN-READABLE PROJECTION
Machine authority: durable GitHub evidence and Architect decisions

# Project History

## Foundation through ORCH-000165

The project established Rony as final authority, Architect as governor/decision-maker, Executor as bounded worker, GitHub as durable evidence authority, exact lineage, no blind retry, and separation from AFFOTECH.

Key accepted foundations:

- ORCH-000153: worker forward delivery `WORKER-DELIVERY-EXECUTOR-000013/SENT` exactly once;
- ORCH-000163: Architect wake `ARCH-TRIGGER-9333-000005/SENT` exactly once;
- ORCH-000165: lineage compatibility repair accepted with full deterministic `817/817`.

## ORCH-000166 through ORCH-000193 — persistent-host work and epoch-189 recovery

Persistent-host bootstrap and dispatch observation were established. The recovery chain established full immutable lease hydration, typed hash identities, corrected reconciliation caller shape, exact `createJson` readback semantics, and semantic GitHub `404 → NOT_FOUND` handling.

ORCH-000193 reconciled epoch 189 to immutable revision 2 / `EXPIRED` and advanced the lease index to `378` with no active leases.

## ORCH-000194 — zero-browser delivery preflight accepted

ORCH-000194 proved one in-process sequence:

`ACQUIRE → transient actionKind=WORKER_DELIVERY → PREPARE → PROVEN_NOT_SENT → RELEASE`

for `WORKER-DELIVERY-EXECUTOR-000014`, with browser contact/send `0/0`. The lease index closed at `380`, next epoch `191`, and zero active leases.

Decision:

`GH-DEC-194-WORKER-DELIVERY-000014-PREFLIGHT-ACCEPTED`.

## ORCH-000195 — live delivery stopped before preparation

Fresh delivery `WORKER-DELIVERY-EXECUTOR-000015` was attempted, but the registered endpoint `127.0.0.1:9444` returned `ECONNREFUSED` before delivery intent creation or browser contact.

The epoch-191 lease was released normally. Final state: index `382`, `nextLeaseEpoch=192`, zero active leases, delivery `000015` absent, latest successful delivery still `000013/SENT`.

Decision:

`GH-DEC-195-EXECUTOR-RELAY-PORT-UNAVAILABLE-INCONCLUSIVE`.

## ORCH-000196 — Executor relay/runtime absence diagnosed

ORCH-000196 ran read-only and confirmed:

- existing worker authority/registration remain valid and ACTIVE;
- registration still correctly binds the existing Executor conversation to relay port `9444`;
- no listener exists on `127.0.0.1:9444`;
- no process owns the port;
- the dedicated Executor relay/runtime is not running/present;
- no registered Executor browser-session process was identified;
- source patch and registration refresh are not required;
- restoring the existing Executor browser session plus dedicated relay/runtime is required;
- restoration requires manual user action;
- no mutation occurred during the diagnostic.

Architect accepted the diagnostic under:

`GH-DEC-196-EXECUTOR-RELAY-PROCESS-ABSENT-DIAGNOSTIC-ACCEPTED`.

`documentationImpact=STATE`; `futureIdeaImpact=NONE`.

## Current target

Rony must manually restore the **existing registered** Executor browser session and its dedicated BrowserRelay/runtime owner so `127.0.0.1:9444` listens again. Registration/authority must remain unchanged unless the actual session/conversation identity changes.

After manual restoration, ORCH-000197 performs a zero-mutation readiness verification of port `9444`, the relay owner, and the registered Executor browser-session process. No live delivery retry is authorized before ORCH-000197 acceptance.

If ORCH-000197 is accepted, the next milestone may retry the fresh exactly-once delivery qualification using delivery `000015` because no intent/result/send was created by ORCH-000195.

AFFOTECH remains separate/protected until later explicit Rony-authorized integration.
