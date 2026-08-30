# AFFOTECH Agent Orchestrator Evidence

This repository is the machine-authoritative control/evidence plane for `affotech-agent-orchestrator`. Durable prompts, dispatches, Architect decisions, Executor terminals, transport records, host/lease state, source snapshots, and current pointers are authority. Human-readable documentation is maintained directly by Architect and never overrides machine evidence.

## Active model

```text
Rony (final human authority)
  ↕
Architect AI — think / govern / verify / decide / document — port 9333
  ↓ durable authority/dispatch
Persistent deterministic Orchestrator — independent control-plane service
  ↓ exact lease + durable intent + exact delivery
Executor AI — bounded work — port 9444
  ↓ durable terminal
Persistent deterministic Orchestrator
  ↓ durable trigger + exact wake
Architect AI
```

There is **no active Curator role**. Historical Curator evidence remains valid history, but no Curator terminal, relay, cursor, browser session, or approval hop is required.

## Documentation closure

Documentation ownership is `ARCHITECT_DIRECT`.

After every Architect review or material Rony directive, Architect classifies documentation impact:

- `NONE` — no lasting human-readable project truth changed;
- `STATE` — current operational/recovery boundary materially changed;
- `FULL` — accepted capability, architecture, governance, contract, production behavior, or reusable lesson materially changed.

For `STATE` or `FULL`, Architect must update every materially affected canonical document and read it back successfully **before publishing the next mutating implementation dispatch**.

This is a governance invariant, not a Curator workflow. The Orchestrator does not decide document meaning and does not author documentation. A future accepted machine contract may let it enforce a documentation-closure marker mechanically, but semantic ownership remains Architect.

Canonical governance:

- `governance/ORCHESTRATOR_BOOTSTRAP.md` v1.2
- `governance/PROJECT_ORCHESTRATION_POLICY.md` v1.2
- `governance/PROJECT_MEMORY_EVENT_LEDGER_POLICY.md` v1.2

## Current accepted source

`GH-PUB-165-WORKER-DELIVERY-LEGACY-LINEAGE-HYDRATION-REPAIR-READY-000001`

Qualification: 101 files; focused `65/65`; GitHub runtime ports `43/43`; BrowserRelay transport ports `22/22`; full deterministic `817/817`.

## Proven foundations

- ORCH-000153: exactly-once Executor forward delivery `WORKER-DELIVERY-EXECUTOR-000013/SENT`.
- ORCH-000163: exactly-once Architect wake `ARCH-TRIGGER-9333-000005/SENT`.
- ORCH-000166: persistent host `000026` safely armed/idle.
- ORCH-000167: persistent host automatically detected a newer Architect dispatch.
- ORCH-000170: preparation needs explicit disposable `workerDeliveryId=WORKER-DELIVERY-EXECUTOR-000014`.
- ORCH-000173: prior expired lease durably closed.
- ORCH-000177/178: disposable HTTP-status mapping fixed; accepted lease acquisition and normal release proven.
- ORCH-000179: continuous preflight reached preparation and proved the transient transport authorization must contain `actionKind=WORKER_DELIVERY`.

## Current recovery — ORCH-000182

ORCH-000181 acquired and indexed epoch `189` and constructed transient `actionKind=WORKER_DELIVERY`, but its process terminated before `prepareWorkerDeliveryIntent`. Preparation count remained `0`; delivery `000014` was not created; browser contact/send remained `0/0`.

The epoch-189 lease expired while still indexed ACTIVE at lease-index revision `377`. Architect classified ORCH-000181 BLOCKED and published recovery-only `ORCH-000182 / DISPATCH-000182`.

ORCH-000182 authorizes exactly one expired-lease reconciliation for:

`MUTATION-LEASE-HOST-8af1857f183a9d267184b29c1a5eb1e0 / epoch 189 / revision 1`

Expected recovery:

`revision 000002 = EXPIRED → index 377→378 → nextLeaseEpoch remains 190 → activeLeases=[]`

No new lease, preparation, delivery `000014`, browser contact, host activity, Architect trigger, tracked source mutation, AFFOTECH, Drive, deployment, tenant, or private-data access is authorized in ORCH-000182.

## Protected boundary

AFFOTECH System V2 Hybrid, AFFOTECH relay, ports `9222/9223`, Drive/business/private data, deployments, tenant resources, and protected project boundaries remain unauthorized absent explicit later authority.
