# Production watcher recovery startup qualification

The exact command `python local_orchestrator_watcher.py` was run from the production root and emitted `RELAY_CONNECTED`, the current relay publication `PUB-20281b540a6049d0bfb25bf977877b63`, and `STATE=RECOVERY_REQUIRED`.

The production checkout is at `e58cc7a168064ef166e48a6c7a36677bd8dcf024`, with the accepted recovery reconciliation repair present and ancestral. However, the actual persisted state contains an in-flight `PUB-d55` key, no explicit recovery terminal publication ID, and an unrelated `SUPERSEDED_UNRECOVERABLE` recovery marker. It cannot safely be matched to `GH-PUB-265` or `GH-DEC-266`.

The watcher therefore failed closed. No state was deleted or rewritten, no Codex child launched, and no AFFOTECH or relay publication was mutated. The qualification watcher was stopped after the bounded observation.
