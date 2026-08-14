# Relay-control durability repair blocked

Dispatch: DISPATCH-000010
Canonical prompt: ORCH-000010
Milestone: ORCH.P0.BROWSER.RELAY.ARCHITECT.SESSION.REGISTRATION.1B.CONTROL.EVIDENCE.REPAIR.1A

## Classification
RELAY_CONTROL_DURABILITY_CONTRACT_DEFECT

The canonical prompt and dispatch were verified from immutable GitHub objects. The accepted BrowserRelay registration contract was inspected read-only. Its path contract defines authorityDirectory, registrationDirectory, authorityPointer, registrationPointer, and controlPointer, but no immutable control-record directory or path.

The current pointer evidence/current/RELAY_CONTROL.json references recordId RELAY-CONTROL-9333-000001 and SHA-256 71743d0412070b7d92c5bf852d1ce7db5c02f254a773d9d6659d19c17b9cae11. The authoritative tree contains only evidence/architect-sessions/authorities/ and evidence/architect-sessions/registrations/; no immutable relay-control record is present. Creating an invented second control model is prohibited, so the repair fails closed.

## Preserved identities
Authority ARCH-AUTH-9333-000001 and registration ARCH-REG-9333-000001 were not changed. No BrowserRelay source or tests were modified. No new authority, generation, or registration was created.

## Safety
No ChatGPT send was attempted; verify & next was not sent. Ports 9222 and 9223 were not touched. The live registration readiness gate was not advanced because durable ACTIVE control evidence could not be independently proven.

## Mutation accounting
- Immutable control record created: 0
- BrowserRelay source/test mutation: 0
- Canonical Orchestrator mutation: 0
- AFFOTECH mutation: 0
- Drive mutation: 0
- Curator/P0.1C/P0.1D mutation: 0
- Live send count: 0
