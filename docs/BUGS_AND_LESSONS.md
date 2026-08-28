Project: affotech-agent-orchestrator
Documentation sync boundary: through Architect-accepted ORCH-000175 and canonical ORCH-000176
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

## Preparation lesson

The known preparation composition defect remains precise: accepted preparation needs exact factory option `workerDeliveryId=WORKER-DELIVERY-EXECUTOR-000014` when accepted dispatch metadata does not supply `expectedFreshWorkerDeliveryId`.

ORCH-000174 did not test this fix because execution never crossed lease acquisition.

## ORCH-000175 — clean index plus namespace scan closes the orphan question

A clean current index alone is not enough after ambiguous candidate creation. ORCH-000175 therefore also inspected the durable lease namespace.

It proved both:

- current index revision `370` has `activeLeases=[]`; and
- no immutable lease candidate matching ORCH-000174 / DISPATCH-000174 / delivery `000014` exists outside the index.

Lesson: **after ambiguous acquisition, require both index readback and candidate-namespace reconciliation before authorizing another acquisition**.

## Error propagation at lease acquisition

The accepted acquisition path creates an immutable candidate and only then activates it through index CAS/readback. It may correctly return `AMBIGUOUS` if candidate creation or reconciliation cannot be proven.

ORCH-000174's disposable launcher discarded the accepted `reconciliationDescriptor` and lower request details, leaving the exact request outcome unrecoverable retrospectively.

Classification from ORCH-000175: `ERROR_PROPAGATION_ONLY_GAP`.

Lesson: semantically inert diagnostics should preserve bounded method/path/status/error plus accepted reconciliation descriptors at disposable external-mutation boundaries. They must not change method, payload, auth, sequencing, normalization, or retry behavior.

## No source patch without source evidence

ORCH-000175 found no orphan candidate, no index CAS, and no durable source-contract contradiction. Therefore do not patch accepted lease logic simply because a disposable wrapper returned `LEASE_AMBIGUOUS`.

Instrument the boundary first and retry only under fresh Architect authority.

## ORCH-000176 rule

One fresh instrumented worker-delivery lease acquisition is authorized from exact pre-state:

- index revision `370`;
- next epoch `186`;
- zero active leases;
- no ORCH-000174 orphan candidate.

If acquisition is ambiguous, stop without retry and preserve the concrete diagnostics.

Only after acquisition is durably proven ACTIVE/indexed may the milestone exercise `workerDeliveryId=WORKER-DELIVERY-EXECUTOR-000014`, require durable PREPARED, reconcile the delivery as PROVEN_NOT_SENT without browser contact, and normally release the lease.

## Recovery ordering

1. perform one instrumented fresh acquisition;
2. prove ACTIVE candidate plus index membership;
3. exercise exact explicit-ID preparation;
4. prove durable PREPARED and PROVEN_NOT_SENT with browser contact/send zero;
5. normally release the lease and verify active lease count zero;
6. only then arm a fresh persistent host and resume unattended full-cycle qualification.

## Current success criterion

`Architect dispatch → persistent Orchestrator → durable intent → Executor exactly once → durable terminal → persistent Orchestrator → durable trigger → Architect wake exactly once`.

AFFOTECH, Drive, deployment, tenant, and business/private-data mutation are not required to prove the transport loop.
