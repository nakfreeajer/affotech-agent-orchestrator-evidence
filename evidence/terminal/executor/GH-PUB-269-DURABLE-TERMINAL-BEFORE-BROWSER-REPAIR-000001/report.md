# Durable terminal publication repair

- Completed Executor results now publish an immutable terminal and verify read-back before relay retirement or Architect browser notification.
- Browser/composer failure leaves notification pending without rerunning the Executor.
- Restart recovery reuses the durable terminal and retries notification only.
- Focused Python tests: 91 passed; Node tests: 158 passed; compile: PASS.
- Existing heartbeat evidence was used only read-only: heartbeat reruns 0 and new heartbeat publications 0.
- AFFOTECH, relay, browser, and business mutations: 0.

Implementation commit: `a859de52f4efb37b151c71ed85c6acce4d26e922`
