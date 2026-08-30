# ORCH-000179 blocked

The one continuous attempt passed the corrected adapter behavior, acquired
epoch 187 exactly once, and read back the active lease. Preparation was then
called exactly once and failed closed with `HOST_AUTHORIZATION_INVALID`.

The disposable continuation passed the persisted lease record directly. The
accepted persistent runner normally adds `actionKind=WORKER_DELIVERY` to the
transport lease before preparation; without that field the accepted
BrowserRelay binding rejects the request. No delivery 000014 intent or result
was created and no browser was contacted.

The exact lease was released once through the accepted normal path. GitHub
read-back shows release revision 2, index revision 374, next epoch 188, zero
active leases, and latest delivery `WORKER-DELIVERY-EXECUTOR-000013/SENT`.

No retry or second acquisition was performed. The defect is limited to the
disposable continuation composition; no tracked source was changed.
