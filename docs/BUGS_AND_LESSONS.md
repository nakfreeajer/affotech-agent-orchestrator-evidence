Project: affotech-agent-orchestrator
Documentation sync boundary: through Architect-accepted ORCH-000138 recovery
Status: CURRENT HUMAN-READABLE PROJECTION
Machine authority: durable GitHub evidence and Architect decisions

# Bugs and Lessons

## 1. Governance lessons that remain permanent

### Executor PASS is not acceptance

Executor terminal status is evidence only. Architect must independently verify important claims and classify exactly `ACCEPTED`, `BLOCKED`, `INCONCLUSIVE`, or `NO NEW REPORT`.

### No blind retry

For ambiguity-prone external mutation:

```text
pre-attempt boundary
→ durable intent/readback
→ one attempt
→ durable result OR AMBIGUOUS
→ read-only reconciliation
```

Never resend/retry merely because the previous attempt did not return a clean success.

### Historical ambiguity must not be rewritten

A later reconciliation may prove `SENT` or `PROVEN_NOT_SENT`, but historical ambiguous evidence remains historically ambiguous. Recovery is a new durable record/state transition, not retroactive rewriting.

### Role separation matters

- Architect decides.
- Executor implements/runs/validates.
- Curator maintains documentation when used.
- Orchestrator carries messages only.

Putting AI reasoning into the Orchestrator would create another authority/interpretation layer and make the system harder to audit.

## 2. Early accepted defects/repairs

- SOURCE_ACCEPTED identity collision required distinct producer identity binding.
- Stored-record self-hash validation must exclude the stored self-hash field itself.
- ORCH-000076 exposed stale-lineage host selection and immutable-terminal evidence problems.
- ORCH-000077 accepted lineage-first selection as the repair.
- Documentation renderer/projection work proved that transport success is insufficient when required human-readable semantics are missing.

## 3. Delivery intent must exist before browser contact

A worker delivery must be durably prepared and read back before BrowserRelay observation/contact.

Required order:

```text
prepareWorkerDeliveryIntent
→ durable GitHub write
→ exact readback/identity verification
→ BrowserRelay pre-send observation
→ send if eligible
```

The runner/transport source now enforces this ordering; live composition must not bypass it.

## 4. ORCH-000118 — independent process proof

A real separate PowerShell-hosted Orchestrator process was successfully launched.

Lesson:

- the Orchestrator can and should run independently from the Executor terminal;
- PowerShell is only a Windows process launcher;
- the Orchestrator does not need an AI model.

## 5. ORCH-000121 — phase observability is essential

Before phase telemetry, a transport failure could be too coarse to distinguish whether the system failed before send, during send, after send or during result persistence.

Accepted phase/reason observability now distinguishes:

- pre-send observation;
- send invocation/completion boundary;
- post-send observation;
- cleanup/disconnect;
- durable result/current-pointer persistence.

Lesson:

Observability should identify the concrete failure seam without reading assistant response content.

## 6. ORCH-000122/123 — expired lease recovery gap

Problem:

- an expired mutation lease could remain in durable state without an accepted contract for terminalizing it safely.

Repair:

- explicit `reconcileExpiredMutationLease` contract;
- exact identity/epoch/revision/scope/envelope verification;
- immutable terminal revision plus lease-index CAS;
- ordinary expired release remains fail-closed;
- transport ambiguity is not silently converted to success.

Lesson:

Lease expiry is not itself permission to mutate or release. Recovery requires an explicit contract.

## 7. ORCH-000129/130 — ARMED proven-not-sent recovery gap

Problem:

- read-only reconciliation could prove a browser delivery did not occur, but there was no accepted durable operation to terminalize the ARMED intent as not sent.

Repair:

- recovery-only `PROVEN_NOT_SENT` delivery reconciliation;
- zero send counts preserved;
- `LATEST_DELIVERY` not advanced to a non-sent delivery;
- exact-repeat idempotence;
- conflict fail-closed behavior.

Lesson:

`PROVEN_NOT_SENT` is a first-class terminal recovery state and must remain distinct from `SENT`.

## 8. ORCH-000127 — required target binding missing

Problem:

The temporary launcher omitted required Architect target-binding metadata even though Architect contact/trigger was disabled for the worker-send qualification.

Outcome:

Fail-closed before delivery/browser mutation.

Lesson:

Constructor/runtime contracts may require complete metadata even when a particular side effect is disabled. Launcher composition must satisfy the accepted contract exactly rather than guessing which fields are unnecessary.

## 9. ORCH-000132 — `input.nowMs` omission

Problem:

The temporary launcher called the persistent host runner without required integer `input.nowMs`.

Outcome:

`HOST_RUNNER_INPUT_VALIDATION / HOST_IDENTITY_INVALID` before lease/delivery/browser work.

Lesson:

Live launch glue is production code in practice. Even when source is correct, ad-hoc launcher composition can invalidate the entire runtime.

## 10. ORCH-000133 — stale local git runtime persistence

Problem:

Host runtime persistence used a temporary local evidence git worktree and attempted commit/push. The worktree was stale behind `origin/main`, creating an ambiguous/non-fast-forward persistence outcome.

Outcome:

Remote readback proved no durable host identity mutation; unpublished local state was discarded.

Lesson:

**Do not use local git commit/push as runtime state transport.**

Runtime state must go through the accepted GitHub Contents client/CAS semantics so the independent daemon is not coupled to a clone's freshness.

## 11. ORCH-000134 — `gh` executable not on child PATH

Problem:

The accepted GitHub Contents runtime required an authenticated `gh api` request seam, but the spawned process could not resolve `gh` through PATH.

Known qualified executable:

`C:\Program Files\GitHub CLI\gh.exe`

Lesson:

Expose the exact executable or its directory only to the spawned process/command-runner seam. Do not mutate machine/user PATH, install software, or change authentication state merely to satisfy runtime composition.

## 12. ORCH-000135/136 — no-op worker persistence was a dangerous composition defect

Problem:

The temporary ORCH-000135 launcher composed BrowserRelay transport with a fake/no-op `workerPersistence.persistAndReadBack` adapter that returned `durableRecorded=true` without writing the delivery intent to GitHub.

Symptom:

- browser pre-send observation occurred;
- durable event still had `deliveryId=null`;
- actual intent did not exist.

ORCH-000136 diagnosis proved:

- accepted persistent runner order was correct;
- source repair was not required;
- the defect was entirely temporary runtime composition.

Lesson:

Never use a test/identity/no-op adapter in live composition merely because it satisfies an interface shape. `durableRecorded=true` must mean an actual durable write and exact readback occurred.

## 13. ORCH-000137 — corrected persistence exposed the real remaining transport failure

ORCH-000137 used genuine GitHub Contents-backed worker persistence.

It proved:

- real intent `WORKER-DELIVERY-EXECUTOR-000007` existed;
- intent was read back before browser contact;
- browser contact count was 1;
- browser send count was 0;
- attempted/confirmed send counts were 0/0;
- no result/pointer advance occurred.

Remaining failure:

`PRE_SEND_OBSERVATION / WORKER_PRE_SEND_OBSERVATION_FAILED`

Lesson:

Once persistence ordering is correct, do not invent another framework abstraction. Diagnose the concrete BrowserRelay target/composer observation on port 9444.

## 14. ORCH-000138 — zero-occurrence reconciliation

Latest Executor reconciliation reports:

- exact ORCH-000137 probe occurrence count: 0;
- transport proven not sent;
- delivery `000007` reconciled to `PROVEN_NOT_SENT`;
- epoch-9 lease reconciled to terminal `EXPIRED`;
- zero browser sends and zero retries;
- `LATEST_DELIVERY` remains the last truly SENT delivery, `000004`.

Architect accepted this recovery. A read-only target check plus accepted
recovery contracts can safely close ambiguous pre-send state without resend.

Lesson:

Recovery-only `PROVEN_NOT_SENT` records remain distinct from `SENT`; an
accepted cleanup result must never be used to claim that forward delivery
succeeded.

## 15. Documentation and messenger scope

- The Orchestrator is a deterministic messenger/router, not an AI decision agent.
- Keep semantic judgment in Architect, Executor and Curator roles.
- Do not add business logic or another application framework to the messenger merely to compensate for a qualification seam.
- A small local daemon, potentially packaged in Python, is a future simplification candidate only; no Python implementation is currently accepted.

## 16. Over-engineering lesson

The Orchestrator accumulated many distributed-systems-style mechanisms while the user's core need is simple:

```text
observe durable message
→ deliver exact message once
→ observe durable result
→ wake the governed next role
```

The durable guarantees are valuable, but the operational implementation should not become a second application platform.

Keep:

- registrations;
- durable GitHub mailbox;
- exact IDs/hashes;
- duplicate suppression;
- explicit ambiguity reconciliation;
- protected role boundaries.

Simplify after end-to-end proof:

- qualification-only launcher glue;
- unnecessary ceremony around the steady-state messenger;
- runtime packaging.

A small local deterministic daemon is the target. Python is a preferred future packaging option, not a reason to discard proven protocol/evidence rules.

## 17. Final operational lesson

Do not measure progress by how many contracts or tests exist. The visible success criterion is:

1. one fresh message actually reaches Executor exactly once;
2. the durable delivery result proves it;
3. duplicate suppression works;
4. Executor completion wakes Architect exactly once;
5. no response scraping or AI decision logic exists in the Orchestrator.

That is the milestone the remaining work should optimize toward.
