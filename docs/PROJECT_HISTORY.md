Project: affotech-agent-orchestrator
Documentation sync boundary: through Architect-accepted ORCH-000168 and canonical ORCH-000169
Status: CURRENT HUMAN-READABLE PROJECTION
Machine authority: durable GitHub evidence and Architect decisions

# Project History

## Foundation through ORCH-000165

The project established Rony as final authority, Architect as governor/decision-maker, Executor as bounded worker, GitHub as durable evidence authority, exact lineage, no blind retry, and separation from AFFOTECH.

Key accepted milestones:

- ORCH-000153: forward delivery `WORKER-DELIVERY-EXECUTOR-000013 / SENT` exactly once.
- ORCH-000163: Architect wake `ARCH-TRIGGER-9333-000005 / SENT` exactly once.
- ORCH-000165: legacy worker-delivery lineage compatibility repair accepted with full deterministic `817/817`; historical delivery `000013` remained untouched.

On 2026-08-26 Rony changed documentation ownership to `ARCHITECT_DIRECT`; Curator is not an active required role.

## ORCH-000166 — persistent automatic host armed

Architect accepted `GH-DEC-166-UNATTENDED-AUTOMATIC-HOST-000026-ARMED-ACCEPTED`.

Host `000026` started exactly once, established `DISPATCH-000166` as consumed bootstrap, completed three valid idle polls, suppressed the bootstrap dispatch, produced zero browser/delivery/trigger/lease side effects, remained alive as PID `16880`, and was intentionally left running.

## ORCH-000167 — first automatic full-cycle probe

Architect published `DISPATCH-000167` directly to GitHub and did not manually forward it.

Host `000026` automatically detected it and progressed through:

`LEASE_REQUIRED → LEASE_ACQUIRED → HOST_DELIVERY_READY / PREPARE_WORKER_DELIVERY_INTENT`.

It then emitted `RECONCILIATION_REQUIRED / WORKER_DELIVERY_INTENT_PREPARATION_REQUIRED` before creating delivery `000014` or contacting the Executor browser.

Architect classified `GH-DEC-167-AUTOMATIC-HOST-WORKER-DELIVERY-INTENT-PREPARATION-BLOCKED`.

This proved automatic durable dispatch observation while isolating the next missing operational seam.

## ORCH-000168 — accepted read-only composition diagnostic

Executor inspected accepted source, host-000026 launcher/log composition, and durable host events without mutation.

Publication:

`GH-PUB-168-WORKER-DELIVERY-INTENT-PREPARATION-SEAM-DIAGNOSTIC-000001`

Architect decision:

`GH-DEC-168-WORKER-DELIVERY-INTENT-PREPARATION-COMPOSITION-DIAGNOSTIC-ACCEPTED`

The diagnostic proved:

- accepted source already contains automatic `prepareWorkerDeliveryIntent` invocation after lease acquisition;
- accepted transport requires durable intent create/readback and returns `PREPARED` before any send;
- host-000026 launcher statically bound the method;
- the effective injected persistence composition nevertheless failed to return a durable prepared intent;
- runner safely released/reconciled and never reached `sendWorkerDelivery`;
- exact lower-level failure was not propagated into the stable host event;
- worker-delivery lease need is action-derived and the earlier dispatch booleans were metadata-inconsistent, not a reason to weaken the lease contract.

Host `000026` remained running after the diagnostic and repeatedly reconciled rather than progressing.

## ORCH-000169 — current composition repair and replacement host

Architect chose a composition-first repair rather than a source patch.

ORCH-000169 must safely retire exact host `000026`, repair only disposable untracked worker-persistence composition, prepare real delivery `000014` durably with zero browser contact, reconcile that preflight to `PROVEN_NOT_SENT`, return active leases to zero, then start fresh host `000027` exactly once and prove at least two safe idle polls.

If composition-only repair cannot satisfy the accepted preparation contract, Executor must stop with `SOURCE_CONTRACT_REPAIR_REQUIRED`; any tracked source repair will require a new Architect milestone.

## Current target

After host `000027` is accepted, publish a strictly newer Architect dispatch and prove:

`automatic dispatch observation → exact lease → durable worker intent → Executor exactly once → durable terminal → automatic terminal observation → durable Architect trigger → Architect wake exactly once`.

AFFOTECH remains separate/protected and no Curator relay is required.
