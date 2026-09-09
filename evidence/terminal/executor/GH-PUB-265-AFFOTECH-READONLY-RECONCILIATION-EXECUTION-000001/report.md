# PUB-20281 controlled reconciliation

- publication: `PUB-20281b540a6049d0bfb25bf977877b63`
- relay snapshot: `4033eb9db3efd0a40b0f195a57a9c5713905ecfa`
- execution count: 1; Codex pid 5476; exit 0
- wrapper and child used the same validated publication and relay snapshot.
- `claspPushCountParent=1`; `claspPushCountThisPublication=0`.
- One read-only status and one read-only pull completed: 88 expected and 88 pulled files, with one content mismatch: `04_LoginSplash.html`.
- Classification: `CLASP_PUSH_RECONCILED_NOT_APPLIED_OR_DIVERGED`.
- No push retry, OAuth, browser, business, documentation, OCR, or source/worktree mutation occurred.
- Disposable reconciliation directory was cleaned.
- Architect delivery was not attempted because no bridge was attached; the captured result remains `RESULT_PENDING` for manual review.

controlledWatcherStopped=true
