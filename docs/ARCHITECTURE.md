Project: affotech-agent-orchestrator
Documentation sync boundary: through Architect-accepted ORCH-000172 and canonical ORCH-000173
Status: CURRENT HUMAN-READABLE PROJECTION
Machine authority: durable GitHub evidence and Architect decisions

# Architecture

## 1. Core purpose

AFFOTECH Agent Orchestrator is a governed deterministic message-routing and durable-state layer. AI roles think; the Orchestrator carries exact governed envelopes and observes durable state. It does not approve work, interpret business semantics, scrape assistant decisions, or synthesize authority from browser text.

## 2. Active topology

```text
Architect 9333
  ↓ durable dispatch
Persistent deterministic Orchestrator
  ↓ exact lease + durable worker intent + exact delivery
Executor 9444
  ↓ durable terminal
Persistent deterministic Orchestrator
  ↓ durable Architect trigger + exact wake
Architect 9333
```

Documentation policy is `ARCHITECT_DIRECT`.

## 3. Accepted source

Current accepted source:

`GH-PUB-165-WORKER-DELIVERY-LEGACY-LINEAGE-HYDRATION-REPAIR-READY-000001`

Qualification: 101 files; focused `65/65`; GitHub runtime ports `43/43`; BrowserRelay transport ports `22/22`; full deterministic `817/817`.

## 4. Worker-delivery preparation contract

Accepted action chain:

`observe dispatch → derive/acquire exact WORKER_DELIVERY lease → HOST_DELIVERY_READY → prepareWorkerDeliveryIntent → durable canonical intent/readback → PREPARED → sendWorkerDelivery`.

ORCH-000170 proved host `000027` failed because its disposable composition supplied neither `expectedFreshWorkerDeliveryId` nor factory `workerDeliveryId`; accepted preparation returned `WORKER_DELIVERY_ID_REQUIRED`. The later preparation fix remains disposable launcher injection of `workerDeliveryId=WORKER-DELIVERY-EXECUTOR-000014`; no tracked source repair is currently proven necessary for that seam.

## 5. Expired-lease create/readback seam

Target lease:

`MUTATION-LEASE-HOST-97e204bd87c1b341df79b1d787987f98`, epoch `185`, revision `1`, bound to `ORCH-000169 / DISPATCH-000169`, expired but indexed `ACTIVE` at index revision `369`.

ORCH-000171 executed one exact accepted reconciliation and reproduced `EXPIRED_LEASE_RECONCILIATION_RECORD_AMBIGUOUS` with no revision `000002` and no index advancement.

ORCH-000172 then traced the concrete path. Architect accepted:

- ORCH-000171 used accepted `createGitHubContentsRuntimeClient` and accepted `createJson`;
- revision `000002` uses accepted lease-revision path and deterministic schema-valid expired projection;
- the path uses normal GitHub Contents GET → PUT → GET readback and the same repository/branch/auth/base64 model as known-good creates;
- no path, payload, schema, auth, or accepted `createJson` defect is proven;
- the client normalizes the unproven mutation to `AMBIGUOUS / POST_MUTATION_ABSENT`;
- runtime reconciliation then collapses that to `EXPIRED_LEASE_RECONCILIATION_RECORD_AMBIGUOUS`;
- the disposable request wrapper did not preserve the underlying `gh`/HTTP failure.

Classification: `ERROR_PROPAGATION_ONLY_GAP`.

## 6. Current authority — ORCH-000173

ORCH-000173 performs one instrumented exact reconciliation with the immutable lease binding and unchanged accepted request semantics.

Only the disposable injected request wrapper may add non-sensitive diagnostics. It must preserve method, endpoint, branch, body, encoding, authentication, sequencing, accepted normalization, and retry count exactly.

If revision `000002` is durably created/read back, one index CAS may remove only the target lease. If the call is not proven successful, no retry is allowed; the concrete PUT/readback transport error must be reported.

No new lease, preparation, host, browser, delivery, trigger, source, AFFOTECH, Drive, deployment, tenant, or private-data mutation is authorized.

## 7. Protected boundaries

Architect session: `9333`; Executor session: `9444`; protected AFFOTECH ports: `9222/9223`. AFFOTECH source/worktrees, relay, Drive, Apps Script, tenant resources, deployments, and business/private data remain unauthorized absent explicit Rony authority.
