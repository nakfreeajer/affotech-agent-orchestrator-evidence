# ORCH.PROJECT.BOUND.EXECUTION.EXACTLY.ONCE.LIFECYCLE.REPAIR.1A

The local Orchestrator now supports an explicit Codex child project boundary. Production LocalWatcher construction binds the child to `C:\Users\nitro\Projects\AffotechSystemV2Hybrid`; a read-only Git identity gate runs before process creation or prompt delivery, and the watcher cwd is never inherited as the child project by this path. Synthetic tests prove wrong-project fail-closed behavior and zero prompt delivery before verification.

Result-submission identity is durable as `publicationId:resultSha256`; an already acknowledged result is not resubmitted after restart. The Codex runner tracks one owned lifecycle and closes it after terminal completion, while avoiding ambiguous process termination.

The requested child directory is absent in this environment, so no real AFFOTECH child was launched. No AFFOTECH repository, relay, deployment, data, or browser state was mutated. Existing ORCH-000247 evidence remains untouched.
