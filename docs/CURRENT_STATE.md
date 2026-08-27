Project: affotech-agent-orchestrator
Documentation sync boundary: through Architect-accepted ORCH-000172 and canonical ORCH-000173
Status: CURRENT HUMAN-READABLE PROJECTION
Machine authority: durable GitHub evidence and Architect decisions

# Current State

## 1. Accepted source

`GH-PUB-165-WORKER-DELIVERY-LEGACY-LINEAGE-HYDRATION-REPAIR-READY-000001`

Qualification: 101 files; focused `65/65`; GitHub runtime ports `43/43`; BrowserRelay transport ports `22/22`; full deterministic `817/817`.

## 2. Proven foundations

- ORCH-000153: forward delivery `WORKER-DELIVERY-EXECUTOR-000013 / SENT` exactly once.
- ORCH-000163: Architect wake `ARCH-TRIGGER-9333-000005 / SENT` exactly once.
- ORCH-000166: persistent host `000026` safely armed/idle.
- ORCH-000167: automatic newer-dispatch observation proved.
- ORCH-000170: preparation blocker classified `COMPOSITION_ADAPTER_DEFECT`; accepted source does not currently require repair for that seam.

## 3. ORCH-000171 — INCONCLUSIVE exact lease recovery

One exact accepted `reconcileExpiredMutationLease` call ran after all prescribed preconditions passed and returned:

`AMBIGUOUS / EXPIRED_LEASE_RECONCILIATION_RECORD_AMBIGUOUS`.

Revision `000002` remained absent; lease-index revision stayed `369`; the target expired lease remained the sole ACTIVE entry; no durable side effect or unrelated mutation occurred.

Architect decision:

`GH-DEC-171-EXPIRED-WORKER-DELIVERY-LEASE-RECONCILIATION-INCONCLUSIVE`.

## 4. ORCH-000172 diagnostic — ACCEPTED

Decision:

`GH-DEC-172-EXPIRED-LEASE-CREATE-READBACK-ERROR-PROPAGATION-DIAGNOSTIC-ACCEPTED`

Publication:

`GH-PUB-172-EXPIRED-LEASE-REVISION-CREATE-READBACK-SEAM-DIAGNOSTIC-000001`

Accepted conclusion: `ERROR_PROPAGATION_ONLY_GAP`.

ORCH-000171 used accepted `createGitHubContentsRuntimeClient` / `createJson`. Revision `000002` path and deterministic EXPIRED projection are valid, and no material path/payload/schema/auth difference from known-good durable creates is proven.

The concrete accepted normalized result is `AMBIGUOUS / POST_MUTATION_ABSENT`, which runtime reconciliation collapses to `EXPIRED_LEASE_RECONCILIATION_RECORD_AMBIGUOUS`. The disposable request wrapper failed to preserve the underlying `gh`/HTTP status/error, so the concrete transport cause is not yet known.

No tracked source repair is currently proven necessary.

## 5. Current baseline

- `LATEST_DELIVERY = WORKER-DELIVERY-EXECUTOR-000013 / SENT`.
- delivery `000014` absent.
- `LATEST_ARCHITECT_TRIGGER = ARCH-TRIGGER-9333-000005 / SENT`.
- trigger `000006` absent.
- no accepted persistent host is running.
- target expired lease remains ACTIVE at index revision `369`.
- revision `000002` absent.

## 6. Current authority — ORCH-000173

Milestone:

`ORCH.P0.SANDBOX.OPERATIONAL.UNATTENDED.CYCLE.EXPIRED.LEASE.INSTRUMENTED.EXACT.RECONCILIATION.1A`

ORCH-000173 authorizes exactly one accepted reconciliation call using the unchanged immutable lease binding and accepted request semantics. Only a disposable wrapper may add safe diagnostics around the GitHub requests.

Success requires durable revision `000002`, exact readback, one index CAS removing only the target lease, and `activeLeases=[]`.

If the call is not proven successful, no retry is authorized; Executor must publish the concrete redacted PUT/readback/HTTP/gh diagnostics and unchanged post-state.

No new lease, preparation retry, delivery/trigger mutation, host process action, browser contact/send, source/test/config/docs/governance mutation, AFFOTECH, Drive, deployment or private/protected resource activity is authorized.

## 7. Documentation ownership

Policy: `ARCHITECT_DIRECT`.
