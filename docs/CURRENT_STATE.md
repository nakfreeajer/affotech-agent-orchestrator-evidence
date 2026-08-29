Project: affotech-agent-orchestrator
Documentation sync boundary: through Architect-classified ORCH-000177 and canonical ORCH-000178
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
- ORCH-000173: prior expired lease closed; clean baseline `370 / nextEpoch 186 / activeLeases=[]`.
- ORCH-000175: no orphan candidate after ambiguous acquisition.

## 3. ORCH-000177 — BLOCKED with exact cause

Decision:

`GH-DEC-177-WORKER-DELIVERY-ACQUISITION-HTTP-STATUS-ADAPTER-BLOCKED`

Publication:

`GH-PUB-177-WORKER-DELIVERY-DURABLE-TRACE-FLUSH-ACQUISITION-BLOCKED-000001`

Verified facts:

- durable trace-flush qualification passed;
- one acquisition call ran;
- candidate precheck GET returned HTTP `404` and `ghExitCode=1`;
- disposable adapter supplied semantic status `1` instead of HTTP `404`;
- accepted NOT_FOUND predicate rejected the response;
- `createJson` returned `CREATE_PRECHECK_FAILED`;
- acquisition returned `AMBIGUOUS`;
- no candidate PUT, no index CAS, no active lease;
- index remains `370`, next epoch `186`, active leases `0`;
- preparation calls `0`;
- delivery `000014` absent;
- latest delivery `000013/SENT`;
- browser/host/trigger/source/protected-resource side effects zero.

No tracked source repair is currently required.

## 4. Current authority — ORCH-000178

Milestone:

`ORCH.P0.SANDBOX.OPERATIONAL.UNATTENDED.CYCLE.WORKER.DELIVERY.HTTP.STATUS.PRESERVING.ACQUISITION.EXPLICIT.ID.PREFLIGHT.1A`

ORCH-000178 corrects only the disposable adapter status mapping. For an actual GitHub 404, the accepted client must receive HTTP/status `404` or an accepted NOT_FOUND equivalent; `ghExitCode=1` must remain separate diagnostics and must never overwrite HTTP semantic status.

After a read-only qualification, exactly one fresh lease acquisition is permitted. If and only if that lease is durably ACTIVE/indexed, the milestone may continue to:

- exact `workerDeliveryId=WORKER-DELIVERY-EXECUTOR-000014`;
- one durable PREPARED intent;
- one zero-browser PROVEN_NOT_SENT/NOT_SENT result;
- one normal lease release;
- final `activeLeases=[]`;
- `LATEST_DELIVERY` remains `000013/SENT`.

No host process action or Architect trigger is authorized.

## 5. Current transport baseline

- latest delivery: `WORKER-DELIVERY-EXECUTOR-000013/SENT`;
- delivery `000014` absent;
- latest Architect trigger: `ARCH-TRIGGER-9333-000005/SENT`;
- trigger `000006` absent;
- lease index `370`, next epoch `186`, active leases `0`;
- no accepted persistent replacement host running.

## 6. Documentation ownership

Policy: `ARCHITECT_DIRECT`.
