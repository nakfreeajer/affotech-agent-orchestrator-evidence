# Local Python watcher history container repair

Classification: `LOCAL_PYTHON_WATCHER_HISTORY_CONTAINER_SELECTION_REPAIR`

The nearest-assistant-ancestor heuristic was replaced by a bounded scored selector. Incidental overflow is rejected; large-range, viewport-sized candidates are preferred, with an active `group/scroll-root` signal preferred for the live conversation viewport. Each bounded step captures assistant IDs, moves the selected viewport upward, waits, and reports scroll/count metrics without exposing conversation text.

Deterministic validation: 21 focused Python tests passed, 0 failed; Python compilation passed; the relevant Node suite passed 157/157. Coverage includes tiny-overflow rejection, active scroll-root selection, upward movement, virtualized assistant-ID appearance, fresh launch candidacy, suppression guards, and no live Codex child.

Live read-only validation on Architect port 9333 selected the `group/scroll-root` container with `scrollHeight=28682`, `clientHeight=782`, and moved `scrollTop=26699.2` to `26034.4`. Assistant count remained 3 and no older IDs appeared during that single bounded step, so additional history was not exposed in this window. No message was sent, no Codex child launched, and the pending AFFOTECH OCR task was not executed.

No AFFOTECH, Drive, deployment, production/private-data, BrowserRelay/9444, or protected-port access occurred. No durable authority/current pointer was changed.
