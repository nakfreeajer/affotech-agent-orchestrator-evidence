# AFFOTECH Agent Orchestrator Evidence

This repository is the machine-authoritative control/evidence plane for `affotech-agent-orchestrator`. Durable GitHub prompts, dispatches, Architect decisions, Executor terminals, transport records, source snapshots, host events, and current pointers are authority. Human-readable documentation is maintained directly by Architect and never overrides machine evidence.

## Active model

```text
Rony (final human authority)
  ↕
Architect AI — govern / verify / decide / document — port 9333
  ↓ durable dispatch
Persistent deterministic Orchestrator
  ↓ exact lease + durable intent + exact delivery
Executor AI — bounded work — port 9444
  ↓ durable terminal
Persistent deterministic Orchestrator
  ↓ durable trigger + exact wake
Architect AI
```

The Orchestrator is deterministic transport, not an AI decision-maker. Documentation policy is `ARCHITECT_DIRECT`; Curator is not an active required role.

## Current accepted source

`GH-PUB-165-WORKER-DELIVERY-LEGACY-LINEAGE-HYDRATION-REPAIR-READY-000001`

Decision: `GH-DEC-165-WORKER-DELIVERY-LEGACY-LINEAGE-HYDRATION-REPAIR-ACCEPTED`.

Qualification: 101 files; focused `65/65`; GitHub runtime ports `43/43`; BrowserRelay transport ports `22/22`; full deterministic `817/817`.

## Proven foundations

- ORCH-000153: exactly-once Executor forward delivery `WORKER-DELIVERY-EXECUTOR-000013 / SENT`.
- ORCH-000163: exactly-once Architect wake `ARCH-TRIGGER-9333-000005 / SENT`.
- ORCH-000166: persistent host `000026` safely armed/idle.
- ORCH-000167: persistent host automatically detected a newer Architect dispatch without manual forwarding.
- ORCH-000170: preparation failure classified `COMPOSITION_ADAPTER_DEFECT`; host `000027` omitted accepted `workerDeliveryId`; no tracked source repair is currently required.

## ORCH-000171 — exact lease recovery INCONCLUSIVE

One correctly bound accepted `reconcileExpiredMutationLease` call repeated:

`AMBIGUOUS / EXPIRED_LEASE_RECONCILIATION_RECORD_AMBIGUOUS`.

Revision `000002` remained absent, index revision remained `369`, the expired ORCH-000169 lease remained the sole ACTIVE entry, and no browser/host/delivery/trigger/source side effect occurred.

Architect decision:

`GH-DEC-171-EXPIRED-WORKER-DELIVERY-LEASE-RECONCILIATION-INCONCLUSIVE`.

## ORCH-000172 — ACCEPTED error-propagation diagnostic

Architect decision:

`GH-DEC-172-EXPIRED-LEASE-CREATE-READBACK-ERROR-PROPAGATION-DIAGNOSTIC-ACCEPTED`.

The accepted GitHub Contents client and accepted `createJson` path were used by ORCH-000171. The projected revision path, payload, schema, repository, branch, base64 encoding, and authentication model are not proven defective and match known-good durable creates.

The concrete accepted normalized failure is:

`AMBIGUOUS / POST_MUTATION_ABSENT`

which is then collapsed by runtime reconciliation to:

`EXPIRED_LEASE_RECONCILIATION_RECORD_AMBIGUOUS`.

The lower-level `gh`/HTTP failure was not preserved by the disposable request wrapper. Classification: `ERROR_PROPAGATION_ONLY_GAP`. No tracked source repair is currently proven necessary.

Current lease state is still unchanged: revision `000002` absent; index revision `369`; one expired ACTIVE target lease.

## Current next — ORCH-000173

`DISPATCH-000173` authorizes one **instrumented exact reconciliation**. It uses the same accepted reconciliation/client semantics and same immutable lease binding, but wraps only the disposable injected request function to preserve non-sensitive transport diagnostics such as operation, method/path, exit code, HTTP status, stable error reason, redacted stderr, JSON parseability, and accepted normalized result.

The wrapper must not change request method, endpoint, branch, body, encoding, authentication, sequencing, accepted normalization, or retry count.

If revision `000002` and the index CAS succeed, the lease may close to `activeLeases=[]`. If not, no retry is permitted; the concrete transport failure must be published for Architect review.

No new lease, preparation retry, delivery `000014`, host action, browser contact, source patch, trigger action, AFFOTECH, Drive, deployment, tenant, or private-data mutation is authorized.

## Protected boundary

AFFOTECH System V2 Hybrid, the existing AFFOTECH relay, ports `9222/9223`, Drive/business/private data, deployments, tenant resources, and protected project boundaries remain unauthorized absent explicit later authority.
