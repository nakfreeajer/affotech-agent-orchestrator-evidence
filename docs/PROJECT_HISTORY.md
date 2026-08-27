Project: affotech-agent-orchestrator
Documentation sync boundary: through Architect-classified ORCH-000167 and canonical ORCH-000168
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

Architect accepted:

`GH-DEC-166-UNATTENDED-AUTOMATIC-HOST-000026-ARMED-ACCEPTED`.

Host `HOST-INSTANCE-SANDBOX-000026 / HOST-GEN-SANDBOX-000026` started exactly once, established `DISPATCH-000166` as a consumed bootstrap watermark, completed three valid idle polls, suppressed the bootstrap dispatch three times, produced zero browser/delivery/trigger/lease side effects, remained alive at terminal publication as PID `16880`, and was intentionally left running.

This proved persistent safe idle operation and made a strictly newer dispatch eligible for automatic observation.

## ORCH-000167 — first full-cycle probe

Architect published `DISPATCH-000167` directly to GitHub and did not manually forward it.

The running host automatically detected it. Durable host events prove:

1. `LEASE_REQUIRED` for `WORKER_DELIVERY`;
2. `LEASE_ACQUIRED` telemetry;
3. transition to `HOST_DELIVERY_READY`;
4. `nextAction=PREPARE_WORKER_DELIVERY_INTENT`;
5. `RECONCILIATION_REQUIRED` with reason `WORKER_DELIVERY_INTENT_PREPARATION_REQUIRED`.

No `WORKER-DELIVERY-EXECUTOR-000014` intent/result was created; no browser send occurred; no ORCH-000167 Executor terminal was published; no `ARCH-TRIGGER-9333-000006` was created. Current active mutation leases are empty.

Architect classified:

`GH-DEC-167-AUTOMATIC-HOST-WORKER-DELIVERY-INTENT-PREPARATION-BLOCKED`.

This is meaningful progress: **automatic durable dispatch observation is now proven in the persistent host**. The missing piece is the automatic execution/wiring of durable worker-delivery intent preparation after the lease stage.

## ORCH-000168 — current diagnostic

The next milestone is read-only. It must inspect accepted source plus host-000026 launcher/log composition and identify whether the missing step belongs to source automation, runtime launcher wiring, dispatch lease metadata, or multiple causes.

It must not patch source, restart/replace/stop the host, contact a browser, or mutate deliveries, triggers, leases, AFFOTECH, Drive, deployment, tenant, or private data.

After the diagnostic, Architect will authorize only the smallest repair boundary supported by evidence.
