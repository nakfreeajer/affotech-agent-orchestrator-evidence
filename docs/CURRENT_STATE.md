Project: affotech-agent-orchestrator
Documentation sync boundary: through Architect-accepted ORCH-000166
Status: CURRENT HUMAN-READABLE PROJECTION
Machine authority: durable GitHub evidence and Architect decisions

# Current State

## 1. Accepted source baseline

Current accepted source:

`GH-PUB-165-WORKER-DELIVERY-LEGACY-LINEAGE-HYDRATION-REPAIR-READY-000001`

Decision: `GH-DEC-165-WORKER-DELIVERY-LEGACY-LINEAGE-HYDRATION-REPAIR-ACCEPTED`.

Qualification: 101 files; focused `65/65`; GitHub runtime ports `43/43`; BrowserRelay transport ports `22/22`; full deterministic `817/817`; manifest `3a5f046056cf1b94b6ec1685d3c18b754625727eb296f3a07df298f9732abf28`; archive `e07ef7e0775de6e500568d3e813800a2750c5b4e0e56befb676ce3d259cd80ba`.

ORCH-000165 repaired legacy worker-delivery result lineage hydration without rewriting historical delivery `000013`.

## 2. Proven transport legs

- Forward delivery: ORCH-000153, `WORKER-DELIVERY-EXECUTOR-000013 / SENT`, one send, duplicate additional send `0`.
- Architect wake: ORCH-000163, `ARCH-TRIGGER-9333-000005 / SENT`, attempted/confirmed `1/1`, second send `0`, no response scraping.

## 3. Persistent automatic host — ORCH-000166 ACCEPTED

Decision:

`GH-DEC-166-UNATTENDED-AUTOMATIC-HOST-000026-ARMED-ACCEPTED`

Publication:

`GH-PUB-166-AUTOMATIC-HOST-000026-ARMED-000001`

Running host:

`HOST-INSTANCE-SANDBOX-000026 / HOST-GEN-SANDBOX-000026`

Verified bootstrap facts:

- process creation attempts: `1`;
- PID: `16880`;
- alive at terminal publication: yes;
- left running: yes;
- bootstrap boundary: explicit consumed watermark `DISPATCH-000166`;
- boundary readback: yes;
- valid idle iterations: `3` (required `2`);
- current dispatch suppressed: `3`;
- browser contact/send: `0/0`;
- worker-delivery mutation: `0`;
- Architect-trigger mutation: `0`;
- lease acquisition: `0`;
- latest delivery remains `000013 / SENT`;
- latest Architect trigger remains `000005 / SENT`;
- assistant response text/DOM read: false;
- source/test/config/docs/governance/AFFOTECH/Drive/deployment/protected-port side effects: zero.

ORCH-000166 closes the bootstrap/arming phase. A manual relay is no longer the expected next path.

## 4. Current next authority — ORCH-000167

The next milestone is the first full unattended-cycle probe. Architect will publish a strictly newer dispatch into GitHub; host `000026` must discover and forward it automatically.

Expected bounded cycle:

`Architect DISPATCH-000167 → host automatic fresh worker delivery → Executor no-op durable terminal → host automatic fresh Architect trigger → exact verify & next`

The probe must use fresh operation identities, exactly one Executor send and exactly one Architect wake, zero second sends, durable intent/result evidence on both legs, and zero source/AFFOTECH/Drive/deployment/private-data mutation.

If the host fails before a confirmed send, fail closed. If either send is ambiguous, do not retry; require read-only reconciliation.

## 5. Documentation ownership

Policy: `ARCHITECT_DIRECT`. Architect directly updates all materially affected human-readable documentation. Curator is not an active required role.

## 6. Boundaries

- Architect session: port `9333`.
- Executor session: port `9444`.
- protected AFFOTECH ports: `9222/9223`.
- AFFOTECH System V2 Hybrid, existing AFFOTECH relay, Drive/business/private data, deployments and tenant resources remain separate and unauthorized.
