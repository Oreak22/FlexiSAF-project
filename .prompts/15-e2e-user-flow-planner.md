# E2E User Flow Planner

## Goal

Produce an end-to-end test plan, and implementation-ready tests when the existing test stack is supplied, for a high-value user journey through the application. Verify outcomes through the UI rather than implementation internals.

## Stack/Context

- Inspect the supplied package/config before selecting tools. Use the already-installed E2E framework and scripts; do not assume Playwright or Cypress is available and do not add dependencies without authorization.
- Target the project's real routes, forms, async APIs, responsive behavior, and accessibility requirements. Apply WCAG 2.1 AA to the user flow.
- Use stable user-facing selectors (role/name/label) and deterministic API boundaries consistent with the existing test environment.

## Existing Code

```tsx
[PASTE CODE HERE]
```

## Constraints

- Define user persona, entry route, prerequisites, steps, expected outcomes, and recovery path before writing automation. Cover the primary happy path plus the most consequential failure/empty state.
- Assert navigation, visible content, form validation, submission outcome, and async state completion. Do not assert internal React state, private selectors, or incidental layout implementation.
- Keep tests isolated and repeatable: control network responses/time, clean created data, and avoid reliance on shared production services or nondeterministic content.
- Include keyboard-only operation and at least one narrow viewport flow where responsive controls materially differ. Use WCAG-oriented assertions for labels, names, focus, and error feedback.
- Avoid fixed sleeps. Wait for a user-visible condition, use framework-native retries, and capture useful diagnostics on failure without leaking secrets or personal data.
- If a needed route, API contract, or test framework is missing, provide a runnable-when-configured plan and list the exact prerequisite rather than inventing it.

## Acceptance Criteria

- The flow can be followed by a user and has measurable preconditions and postconditions.
- At least one success scenario and one meaningful error/recovery scenario are specified.
- Tests are deterministic, use accessible selectors, and do not depend on execution order.
- Keyboard and mobile variants cover only workflows where their interaction differs meaningfully.
- The test command and setup are grounded in the supplied project configuration; unverified assumptions are clearly marked.

## Output Format

Return (1) a compact flow table with setup, action, and expected result, (2) the test code if framework details are known or framework-neutral pseudocode otherwise, and (3) a run/setup checklist including network fixtures and accessibility checks.
