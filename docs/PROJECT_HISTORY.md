Project: affotech-agent-orchestrator
Documentation sync boundary: through ORCH-000194 Architect review
Status: CURRENT HUMAN-READABLE PROJECTION
Machine authority: durable GitHub evidence and Architect decisions

# Project History

## Foundation through ORCH-000165

The project established Rony as final authority, Architect as governor/decision-maker, Executor as bounded worker, GitHub as durable evidence authority, exact lineage, no blind retry, and separation from AFFOTECH.

Key accepted foundations:

- ORCH-000153: worker forward delivery `WORKER-DELIVERY-EXECUTOR-000013/SENT` exactly once;
- ORCH-000163: Architect wake `ARCH-TRIGGER-9333-000005/SENT` exactly once;
- ORCH-000165: lineage compatibility repair accepted with full deterministic `817/817`.

## ORCH-000166 through ORCH-000181

Persistent-host bootstrap and dispatch observation were established. Lease acquire/release and HTTP semantic-status handling were qualified. ORCH-000181 acquired epoch `189` but terminated before delivery preparation; the lease expired while indexed ACTIVE at revision `377`.

## ORCH-000182 through ORCH-000193 — epoch-189 recovery

The recovery chain established, in order:

- index entries are reduced locators and full immutable lease hydration is required;
- canonical SHA-256 and Git blob SHA are separate typed identities;
- the corrected reconciliation caller shape is full immutable lease + exact binding + integer `nowMs`;
- `createJson` uses precheck → at most one PUT → exact post-write readback;
- separate prerequisite evidence writes must not become ambiguity blockers;
- disposable GitHub read adapters must preserve semantic HTTP status and map `404 → NOT_FOUND`.

ORCH-000193 finally reconciled epoch 189 to immutable revision 2 / `EXPIRED` and advanced the lease index `377 → 378` with zero active leases.

Architect decision:

`GH-DEC-193-EXPIRED-WORKER-LEASE-RECOVERY-ACCEPTED`.

## ORCH-000194 — worker-delivery 000014 zero-browser preflight accepted

ORCH-000194 resumed the worker-delivery path after recovery using one in-process sequence.

Executor terminal:

`GH-PUB-194-WORKER-DELIVERY-000014-PREFLIGHT-COMPLETE-000001`

Verified sequence:

- status-preserving adapter gate passed;
- one epoch-190 lease acquired;
- index `378 → 379`, next epoch `190 → 191`;
- transient authorization added `actionKind=WORKER_DELIVERY` without durable lease rewrite;
- preparation returned `PREPARED` for fresh `WORKER-DELIVERY-EXECUTOR-000014`;
- immutable ARMED intent was durably recorded/read back;
- browser contact/send remained `0/0`;
- one durable `PROVEN_NOT_SENT` result recorded attempted/confirmed sends `0/0`;
- one normal release completed;
- final index `379 → 380`, `nextLeaseEpoch=191`, `activeLeases=[]`;
- `LATEST_DELIVERY` remained `WORKER-DELIVERY-EXECUTOR-000013/SENT`;
- no unrelated protected mutation occurred.

Architect accepted the milestone under:

`GH-DEC-194-WORKER-DELIVERY-000014-PREFLIGHT-ACCEPTED`.

This closes the post-recovery zero-browser preflight qualification. Delivery `000014` remains terminal `PROVEN_NOT_SENT` evidence and is not a live-send candidate.

`documentationImpact=FULL`; `futureIdeaImpact=NONE`.

## Current target

The next legal milestone is ORCH-000195: one separately bounded live exactly-once Executor-browser delivery qualification using fresh identity:

`WORKER-DELIVERY-EXECUTOR-000015`.

Pre-state:

- lease index revision `380`;
- `nextLeaseEpoch=191`;
- `activeLeases=[]`;
- latest successful delivery `WORKER-DELIVERY-EXECUTOR-000013/SENT`;
- `WORKER-DELIVERY-EXECUTOR-000014/PROVEN_NOT_SENT` preserved;
- Architect trigger `ARCH-TRIGGER-9333-000005/SENT`;
- accepted source GH-PUB-165.

The live qualification must durably prepare `000015` before browser contact, send at most one exact USER message to the registered Executor target on port `9444`, record/read back `SENT` only on confirmed send, advance `LATEST_DELIVERY` only after result readback, release the lease normally, and prove duplicate replay sends nothing a second time.

After that delivery qualification is independently accepted, the project may arm a fresh persistent host and prove the full unattended canary:

`Architect durable dispatch → persistent Orchestrator → durable worker intent → Executor exactly once → durable terminal → persistent Orchestrator → durable Architect trigger → Architect wake exactly once`.

AFFOTECH remains separate/protected until later explicit Rony-authorized integration.
