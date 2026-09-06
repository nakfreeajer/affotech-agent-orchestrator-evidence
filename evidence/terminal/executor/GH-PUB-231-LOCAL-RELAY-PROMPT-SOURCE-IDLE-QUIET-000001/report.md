# Executor terminal report

Follow-up to the relay-source qualification: repeated `STATE=IDLE` output is now suppressed in the persistent relay polling loop. The first idle transition remains visible, while relay detection and authority errors continue to report immediately.

Validation remains: focused Python tests 45 passed, 0 failed; deterministic Node suite 157 passed, 0 failed; Python compile passed. The real relay publication `PUB-e90356a8ceca44428a31090b042e80b4` remains pending and unconsumed; no Codex child was launched.
