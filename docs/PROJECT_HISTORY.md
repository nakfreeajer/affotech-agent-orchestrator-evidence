Project: affotech-agent-orchestrator
Documentation sync boundary: through ORCH-000195 Architect review
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

Persistent-host bootstrap and dispatch observation were established. The recovery chain then established full immutable lease hydration, typed hash identities, corrected reconciliation caller shape, exact `createJson` readback semantics, and semantic GitHub `404 → NOT_FOUND` handling.

ORCH-000193 reconciled epoch 189 to immutable revision 2 / `EXPIRED` and advanced the lease index to `378` with no active leases.

## ORCH-000194 — zero-browser delivery preflight accepted

ORCH-000194 proved one in-process sequence:

`ACQUIRE → transient actionKind=WORKER_DELIVERY → PREPARE → PROVEN_NOT_SENT → RELEASE`

for `WORKER-DELIVERY-EXECUTOR-000014`, with browser contact/send `0/0`.

The lease index closed at `380`, next epoch `191`, zero active leases, and `LATEST_DELIVERY` remained `000013/SENT`.

Architect decision:

`GH-DEC-194-WORKER-DELIVERY-000014-PREFLIGHT-ACCEPTED`.

## ORCH-000195 — live delivery stopped at unavailable Executor relay

ORCH-000195 attempted the fresh exactly-once live qualification for `WORKER-DELIVERY-EXECUTOR-000015`.

Observed sequence:

- canonical preconditions passed;
- status-preserving GitHub gates passed;
- epoch-191 lease acquired once;
- lease index advanced `380 → 381`;
- local registered endpoint `127.0.0.1:9444` refused the connection;
- no delivery `000015` intent/result was created;
- browser contact/send and attempted/confirmed sends remained `0`;
- no retry occurred;
- the exact lease was normally released once;
- final index advanced `381 → 382`;
- `nextLeaseEpoch=192`;
- `activeLeases=[]`;
- `LATEST_DELIVERY` remained `WORKER-DELIVERY-EXECUTOR-000013/SENT`.

Architect decision:

`GH-DEC-195-EXECUTOR-RELAY-PORT-UNAVAILABLE-INCONCLUSIVE`.

Classification: `INCONCLUSIVE`.

The worker registration itself remains durable ACTIVE and still binds the Executor conversation to relay port `9444`; the live endpoint was unavailable during ORCH-000195.

`documentationImpact=STATE`; `futureIdeaImpact=NONE`.

## Current target

The next legal milestone is ORCH-000196: a read-only/no-mutation diagnosis of the Executor relay/session availability boundary.

It must determine why port `9444` has no accepting listener and identify the smallest safe restoration action without launching/stopping processes, mutating registration, acquiring a lease, creating delivery evidence, or sending to a browser.

Only after that diagnosis is independently accepted may the project authorize relay restoration and/or a fresh live exactly-once delivery attempt.

AFFOTECH remains separate/protected until later explicit Rony-authorized integration.
