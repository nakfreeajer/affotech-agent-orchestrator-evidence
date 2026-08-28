Project: affotech-agent-orchestrator
Documentation sync boundary: through Architect-classified ORCH-000176 and canonical ORCH-000177
Status: CURRENT HUMAN-READABLE PROJECTION
Machine authority: durable GitHub evidence and Architect decisions

# Current State

## 1. Accepted source

`GH-PUB-165-WORKER-DELIVERY-LEGACY-LINEAGE-HYDRATION-REPAIR-READY-000001`

Qualification: 101 files; focused `65/65`; GitHub runtime ports `43/43`; BrowserRelay transport ports `22/22`; full deterministic `817/817`.

## 2. Proven foundations

- ORCH-000153: forward delivery `WORKER-DELIVERY-EXECUTOR-000013/SENT` exactly once.
- ORCH-000163: Architect wake `ARCH-TRIGGER-9333-000005/SENT` exactly once.
- ORCH-000166: persistent host `000026` safely armed/idle.
- ORCH-000167: automatic newer-dispatch observation proved.
- ORCH-000170: preparation defect classified `COMPOSITION_ADAPTER_DEFECT`.
- ORCH-000173: prior expired lease closed; current clean index baseline `370 / nextEpoch 186 / activeLeases=[]`.
- ORCH-000175: ORCH-000174 acquisition ambiguity left no candidate revision or index mutation; `ERROR_PROPAGATION_ONLY_GAP`.

## 3. ORCH-000176 — BLOCKED

Decision:

`GH-DEC-176-WORKER-DELIVERY-INSTRUMENTED-ACQUISITION-TRACE-PERSISTENCE-BLOCKED`

Publication:

`GH-PUB-176-WORKER-DELIVERY-INSTRUMENTED-LEASE-ACQUISITION-PREFLIGHT-BLOCKED-000001`

Verified facts:

- clean preconditions passed;
- one instrumented lease acquisition call ran;
- acquisition returned `AMBIGUOUS`;
- no candidate revision exists/read back;
- no lease-index CAS occurred;
- index remains revision `370`, next epoch `186`, active lease count `0`;
- wrapper collected diagnostics in process memory but launcher exited before flushing them;
- reconciliation descriptor was not persisted;
- preparation call count `0`;
- delivery `000014` intent/result absent;
- `LATEST_DELIVERY=000013/SENT`;
- browser contact/send `0/0`;
- no host, trigger, tracked-source, AFFOTECH, Drive, deployment, or private-data side effect.

The explicit worker-delivery ID preparation fix is still unproven because acquisition never became durable.

## 4. Current authority — ORCH-000177

Milestone:

`ORCH.P0.SANDBOX.OPERATIONAL.UNATTENDED.CYCLE.WORKER.DELIVERY.DURABLE.TRACE.FLUSH.INSTRUMENTED.ACQUISITION.EXPLICIT.ID.PREFLIGHT.1A`

Before any mutation, ORCH-000177 must prove a disposable diagnostic sink can append, flush, and read back a safe trace for a harmless read-only request through the same wrapper.

Only after that qualification may it call `acquireMutationLease` once.

If acquisition succeeds durably, it may continue to:

- exact `workerDeliveryId=WORKER-DELIVERY-EXECUTOR-000014`;
- one durable PREPARED intent;
- one zero-browser PROVEN_NOT_SENT/NOT_SENT result;
- one normal lease release;
- final `activeLeases=[]`;
- `LATEST_DELIVERY` remains `000013/SENT`.

Any ambiguity stops without retry; the already-flushed safe diagnostics and reconciliation descriptor must be published.

## 5. Current transport baseline

- latest delivery: `WORKER-DELIVERY-EXECUTOR-000013/SENT`;
- delivery `000014` absent;
- latest Architect trigger: `ARCH-TRIGGER-9333-000005/SENT`;
- trigger `000006` absent;
- lease index `370`, next epoch `186`, active leases `0`;
- no accepted persistent replacement host running.

## 6. Documentation ownership

Policy: `ARCHITECT_DIRECT`.
