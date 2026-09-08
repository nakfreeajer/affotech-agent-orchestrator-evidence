# ORCH_DOCUMENTATION_ACCEPTED_STATE_AUTO_TRIGGER_IMPLEMENTED

The Orchestrator now evaluates structured Architect acceptance records and sends one deterministic documentation doorbell per `milestoneId:acceptedPublicationId`. Implementation, repair, recovery, architecture, governance, incident-closure, explicit-required, and discovered/resolved-problem cases become pending; diagnostic, blocked, inconclusive, and explicit-none cases do not trigger. Restart and repeated polling are deduplicated durably.

The Orchestrator does not inspect prose, select documentation files, or invoke the Curator directly. Python: 82 passed, 0 failed. Node: 158 passed, 0 failed. Compile: PASS. No AFFOTECH execution or mutation occurred; the watcher remained stopped.
