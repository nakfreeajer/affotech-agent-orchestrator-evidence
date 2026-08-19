# Orchestrator GitHub Evidence Transport

This isolated foundation defines a private GitHub evidence transport for the
Supervisor Orchestrator. Immutable terminal publications are separate from
mutable terminal indexes and Architect acceptance indexes. A terminal result
does not self-accept.

The transport preserves local first-write spool capture, expected-parent
fencing, immutable publication paths, read-only reconciliation after
ambiguous push outcomes, and wrapper fallback evidence when a worker exits
without publishing a terminal record.

Repository creation and live GitHub publication require an explicitly
authorized private repository target. This workspace does not contain
credentials and does not perform a repository creation fallback.
