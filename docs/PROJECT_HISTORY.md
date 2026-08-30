Project: affotech-agent-orchestrator
Documentation sync boundary: through Rony documentation-governance directive and canonical ORCH-000182
Status: CURRENT HUMAN-READABLE PROJECTION
Machine authority: durable GitHub evidence and Architect decisions

# Project History

## Foundation through ORCH-000165

The project established Rony as final authority, Architect as governor/decision-maker, Executor as bounded worker, GitHub as durable evidence authority, exact lineage, no blind retry, and separation from AFFOTECH.

Key accepted milestones:

- ORCH-000153: forward delivery `WORKER-DELIVERY-EXECUTOR-000013/SENT` exactly once.
- ORCH-000163: Architect wake `ARCH-TRIGGER-9333-000005/SENT` exactly once.
- ORCH-000165: lineage compatibility repair accepted with full deterministic `817/817`.

## ORCH-000166 through ORCH-000173

ORCH-000166 safely armed persistent host `000026`. ORCH-000167 proved automatic newer-dispatch observation. ORCH-000168/169/170 isolated preparation composition and the explicit worker-delivery ID requirement. ORCH-000171/172/173 isolated and then closed an expired-lease ambiguity.

## ORCH-000174 through ORCH-000178

Repeated bounded preflights isolated the disposable GitHub adapter defect: actual HTTP `404` had been overwritten by `ghExitCode=1`. ORCH-000178 corrected that boundary and proved accepted worker-delivery lease acquisition and normal release durably.

## ORCH-000179 — preparation reached

ORCH-000179 acquired epoch `187` and reached `prepareWorkerDeliveryIntent`. Preparation failed closed with `HOST_AUTHORIZATION_INVALID` because the disposable continuation passed the persisted lease directly instead of the accepted runner-equivalent transient authorization containing `actionKind=WORKER_DELIVERY`. The lease was normally released and state returned clean.

## ORCH-000180 — action-kind attempt stopped before preparation

ORCH-000180 intended to reproduce transient action-kind enrichment. It acquired epoch `188` successfully, but its bounded process stopped before issuing any preparation request. The exact lease was normally released. Final state was index revision `376`, next epoch `189`, active leases `0`, delivery `000014` absent, and zero browser/host/trigger/source side effects.

Architect classified:

`GH-DEC-180-WORKER-DELIVERY-ACTION-KIND-PREFLIGHT-OPERATIONAL-TIMEOUT-BLOCKED`.

## ORCH-000181 — in-process attempt leaves expired ACTIVE lease

ORCH-000181 removed the explicit child-process boundary. The single attempt acquired and indexed epoch `189` and constructed transient `actionKind=WORKER_DELIVERY`, but the process still terminated before `prepareWorkerDeliveryIntent` was called.

Consequences:

- preparation call count `0`;
- delivery `000014` intent/result absent;
- browser contact/send `0/0`;
- the lease expired before normal release;
- index remained revision `377` with the expired epoch-189 lease still indexed ACTIVE;
- no blind retry or expiry reconciliation occurred.

Architect classified:

`GH-DEC-181-WORKER-DELIVERY-IN-PROCESS-PREFLIGHT-EXPIRED-LEASE-BLOCKED`.

## ORCH-000182 — current exact recovery

ORCH-000182 authorizes only one expired-lease reconciliation for the exact ORCH-000181 lease:

`MUTATION-LEASE-HOST-8af1857f183a9d267184b29c1a5eb1e0 / epoch 189 / revision 1`

Expected recovery is immutable revision `000002=EXPIRED`, lease-index `377→378`, `nextLeaseEpoch=190`, and final `activeLeases=[]`. No preparation retry, new lease, delivery mutation, browser, host, trigger, source, or protected-resource work is authorized in this milestone.

## Rony documentation-governance directive — 2026-08-30

Rony clarified the long-term role model:

- Architect sees and interprets the complete governed process and is therefore the most accurate owner of canonical project documentation.
- Curator terminal/relay adds an unnecessary second interpretation layer and is eliminated from the active model.
- Architect documentation maintenance must nevertheless become persistent and non-optional so Rony does not need to remind Architect.

Architect promoted this directive into governance and human-readable project state.

Governance revisions:

- `ORCHESTRATOR_BOOTSTRAP.md` v1.1 → v1.2;
- `PROJECT_ORCHESTRATION_POLICY.md` v1.1 → v1.2;
- `PROJECT_MEMORY_EVENT_LEDGER_POLICY.md` v1.1 → v1.2.

New permanent invariant:

After every Architect review/material Rony directive, Architect classifies documentation impact as `NONE`, `STATE`, or `FULL`. For `STATE` or `FULL`, every materially affected canonical document must be written and durably read back before the next mutating implementation dispatch is published.

Curator is no longer required for closure. Historical Curator evidence remains valid history. Orchestrator remains independent deterministic infrastructure and does not author/interpret documentation.

## Current target

After ORCH-000182 restores a clean lease index, close the preparation proof without recreating unnecessary disposable harness layers, then arm a fresh persistent host and prove the full unattended chain:

`Architect durable dispatch → persistent Orchestrator → durable worker intent → Executor exactly once → durable terminal → persistent Orchestrator → durable Architect trigger → Architect wake exactly once`.

AFFOTECH remains separate/protected until later explicit Rony-authorized integration.
