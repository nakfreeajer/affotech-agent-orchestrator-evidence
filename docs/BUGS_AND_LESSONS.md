Project: affotech-agent-orchestrator
Documentation sync boundary: through Architect-classified ORCH-000167 and canonical ORCH-000168
Status: CURRENT HUMAN-READABLE PROJECTION
Machine authority: durable GitHub evidence and Architect decisions

# Bugs and Lessons

## Permanent governance lessons

- Executor PASS is evidence, never acceptance.
- Never blind-retry an ambiguous external mutation; reconcile read-only first.
- Historical evidence remains immutable in meaning.
- Architect owns relevant documentation directly under `ARCHITECT_DIRECT`.
- Orchestrator is deterministic transport only; it never reads assistant decisions for authority.
- Local git commit/push is not runtime state transport.

## Durable worker-delivery ordering

Required order:

`observe governed dispatch → exact lease if required → durable worker-delivery intent/readback → BrowserRelay pre-send observation → one send → durable result → duplicate suppression/reconciliation`.

Skipping or merely announcing the intent-preparation action is not equivalent to preparing the intent.

## ORCH-000153 / ORCH-000163

Forward delivery and Architect wake are independently proven exactly once. Durable intent/result plus duplicate suppression—not visible UI alone—is the proof standard.

## ORCH-000164 / ORCH-000165

A stricter reader rejected historical delivery `000013` because its old result lacked explicit lineage despite exact immutable intent binding. The accepted ORCH-000165 repair added fail-closed legacy hydration and future explicit lineage without rewriting historical evidence.

## ORCH-000166 — persistent idle proof

Host `000026` was accepted only after one process start, consumed bootstrap watermark readback, three valid idle polls, bootstrap suppression x3, zero transport side effects, and liveness at terminal publication.

Lesson: process existence is not enough; repeated safe durable observation is required.

## ORCH-000167 — automatic observation is not automatic delivery

The first full-cycle probe cleanly separated two capabilities that had previously been grouped together.

Proven automatically:

- host `000026` observed `DISPATCH-000167` without manual relay;
- it derived a WORKER_DELIVERY lease requirement;
- it reached `HOST_DELIVERY_READY`.

Not yet automatic:

- durable `prepareWorkerDeliveryIntent` execution;
- delivery `000014` creation;
- Executor BrowserRelay send;
- corresponding terminal observation and Architect trigger.

The host stopped with:

`WORKER_DELIVERY_INTENT_PREPARATION_REQUIRED`

and `nextAction=PREPARE_WORKER_DELIVERY_INTENT`.

Lesson: a deterministic state machine returning a required next action is not the same thing as the persistent runner/composition executing that action. Full unattended operation requires every action boundary to be wired to the accepted durable side-effect adapter and readback before advancing.

## Lease metadata lesson from ORCH-000167

DISPATCH-000167 declared `mutationLeaseRequired=false` / `liveMutationLeaseAuthorized=false`, but the host deterministically emitted `LEASE_REQUIRED` for WORKER_DELIVERY. That inconsistency must be diagnosed rather than silently normalized.

The next diagnostic must establish whether lease necessity is canonically derived from operation/action/resource semantics—in which case the dispatch booleans were Architect metadata mistakes—or whether the host ignored authoritative dispatch flags.

Do not repair the wrong layer until that contract is proven from accepted code.

## Current diagnostic rule

ORCH-000168 is read-only. It must distinguish:

- `COMPOSITION_WIRING_DEFECT`;
- `ACCEPTED_SOURCE_AUTOMATION_GAP`;
- `DISPATCH_AUTHORITY_METADATA_CONFLICT`;
- multiple causes;
- or another exact seam.

Only after that should Architect authorize source changes, launcher-composition changes, dispatch-metadata correction, host replacement, or any combination.

## Current success criterion

The target remains:

`Architect dispatch → persistent Orchestrator → durable intent → Executor exactly once → durable terminal → persistent Orchestrator → durable trigger → Architect wake exactly once`.

No source, AFFOTECH, Drive, deployment, tenant, or business/private-data mutation is necessary to prove the transport loop itself.
