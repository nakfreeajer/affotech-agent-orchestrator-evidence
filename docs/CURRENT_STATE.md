Project: affotech-agent-orchestrator
Documentation sync boundary: through ORCH-000191 Architect review
Status: CURRENT HUMAN-READABLE PROJECTION
Machine authority: durable GitHub evidence and Architect decisions

# Current State

## 1. Accepted source

`GH-PUB-165-WORKER-DELIVERY-LEGACY-LINEAGE-HYDRATION-REPAIR-READY-000001`

Qualification: 101 files; focused `65/65`; GitHub runtime ports `43/43`; BrowserRelay transport ports `22/22`; full deterministic `817/817`.

Accepted source did not change through ORCH-000191.

## 2. Permanent recovery contracts

- mutation-lease index entries are reduced locators; hydrate and verify the full immutable lease before full-schema reconciliation;
- canonical semantic SHA-256 and Git blob SHA are separately typed identities and must never be compared directly;
- the ORCH-000187-proven reconciliation caller uses one object containing full immutable `lease`, exact `reconciliationBinding`, and integer `nowMs`;
- `createJson` uses precheck → at most one PUT → exact post-write readback, with durable readback as final outcome authority;
- bounded adapter/projector/await diagnostics should remain in the target execution context rather than requiring a separate prerequisite external evidence write;
- historical ORCH-000185 exact causation remains unknown because its launcher is absent.

## 3. ORCH-000190 — ACCEPTED createJson ambiguity diagnostic

Architect decision:

`GH-DEC-190-PRECALL-CREATEJSON-TRANSPORT-AMBIGUITY-DIAGNOSTIC-ACCEPTED`

ORCH-000190 established accepted `createJson` ambiguity/reconciliation semantics without mutation. Accepted source patch required `false`. It authorized one real epoch-189 reconciliation attempt under ORCH-000191, using in-memory diagnostics and no separate pre-call evidence write.

## 4. ORCH-000191 — INCONCLUSIVE revision precheck transport classification

Executor terminal:

`GH-PUB-191-EXPIRED-LEASE-IN-MEMORY-RECONCILIATION-INCONCLUSIVE-000001`

Architect decision:

`GH-DEC-191-REVISION-PRECHECK-TRANSPORT-INCONCLUSIVE`

Verified facts:

- preconditions passed;
- typed-hash gate valid;
- pure projection gate valid;
- `reconcileExpiredMutationLease` real call count = `1`;
- therefore the ORCH-000191 one-real-call budget is consumed;
- the first inner failure occurred during the `createJson` pre-read for absent revision `000002`;
- the disposable GitHub read adapter observed `gh` exit code `1` but did not surface semantic HTTP `404/NOT_FOUND`;
- it normalized that read as `GITHUB_API_ERROR` rather than semantic `NOT_FOUND`;
- accepted `createJson` consequently returned `CREATE_PRECHECK_FAILED`;
- revision PUT count `0`;
- index CAS count `0`;
- revision `000002` remains absent;
- lease index remains revision `377`, `nextLeaseEpoch=190`, one ACTIVE-but-expired epoch-189 lease;
- delivery remains `WORKER-DELIVERY-EXECUTOR-000013/SENT`;
- Architect trigger remains `ARCH-TRIGGER-9333-000005/SENT`;
- lease/index, delivery, browser, host, source, AFFOTECH, and Drive mutations remained `0`.

Interpretation:

ORCH-000191 did not close epoch 189. The real call was consumed, but it failed before any target mutation because the disposable read adapter did not map the expected absent contents path to semantic `NOT_FOUND`. Accepted source is not yet shown defective, and no further real reconciliation retry is authorized.

## 5. Current durable lease boundary

Fresh verified state after ORCH-000191:

- lease `MUTATION-LEASE-HOST-8af1857f183a9d267184b29c1a5eb1e0`;
- epoch `189`;
- immutable revision `000001` remains ACTIVE but expired;
- revision `000002` absent;
- mutation-lease index revision `377`;
- `nextLeaseEpoch=190`;
- exactly one active index entry;
- latest delivery `WORKER-DELIVERY-EXECUTOR-000013/SENT`;
- latest Architect trigger `ARCH-TRIGGER-9333-000005/SENT`.

## 6. Next legal action — ORCH-000192

Canonical ORCH-000192 / DISPATCH-000192 is a strictly read-only GitHub read-adapter semantic-NOT_FOUND diagnostic.

It must:

1. recover the ORCH-000191 disposable read-adapter shape to the maximum supported extent;
2. perform bounded GET-only probes against one known-existing revision and the known-absent revision `000002`;
3. capture exit code, surfaced HTTP status if any, bounded stderr/error, body presence/parseability, and normalized adapter result;
4. determine why absent content became `GITHUB_API_ERROR` instead of semantic `NOT_FOUND`;
5. prove the smallest read-only adapter/command shape that correctly distinguishes existing versus absent content if possible;
6. run no PUT, no reconciliation, no lease/index mutation, no worker delivery, no browser, no host, no trigger, and no source mutation.

No real reconciliation retry is authorized until ORCH-000192 is independently reviewed.

## 7. Documentation / future intent

ORCH-000191: `documentationImpact=STATE`; `futureIdeaImpact=NONE`.

`IDEA-0001 — Deterministic Architect documentation-closure marker` remains `ADOPTED_FOR_FUTURE`, deferred until core unattended transport reaches production-candidate qualification and creates no current implementation authority.
