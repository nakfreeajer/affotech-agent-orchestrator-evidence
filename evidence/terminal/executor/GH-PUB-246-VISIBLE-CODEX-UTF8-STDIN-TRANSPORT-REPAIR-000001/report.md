# ORCH.VISIBLE.CODEX.UTF8.STDIN.TRANSPORT.REPAIR.1A

The visible Windows launcher now preflights the complete assembled prompt as strict UTF-8 and writes UTF-8 bytes to a binary stdin pipe. The non-visible path also specifies UTF-8 text encoding. The Node console host decodes stdin as UTF-8 before forwarding the exact prompt to Codex.

Regression tests prove exact ASCII, multiline Markdown, Unicode arrow, and dash round trips; encoding failure is fail-closed before execution. The unchanged relay idle path reuses its existing bridge and performs zero additional Architect browser attachments or composer interactions.

The failed PUB-78 attempt created only the host wrapper; zero prompt bytes reached stdin, no Codex task began, and no correlated result was produced. Its stale pre-stdin markers were reconciled locally. PUB-78 was not executed during qualification.
