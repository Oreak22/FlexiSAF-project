# RTL Unit Test Generator

## Goal

Create focused React Testing Library tests for the supplied component that verify user-observable behavior, accessibility semantics, and important state transitions without coupling tests to implementation details.

## Stack/Context

- First inspect the supplied package/test configuration. Use the repository's installed runner and versions (for this project, React 19 + TypeScript 6 are present); do not assume Jest, Vitest, `user-event`, or jest-dom is installed unless shown.
- Use React Testing Library principles: query by role/name/label, interact as a user would, and assert visible or accessible outcomes.
- Target WCAG 2.1 AA behaviors relevant to the component. Tests supplement, not replace, manual assistive-technology checks.

## Existing Code

```tsx
[PASTE CODE HERE]
```

## Constraints

- Do not use snapshots as the primary evidence, query internal component state, inspect private React props, or assert implementation-specific class names unless visual styling is explicitly under test.
- Prefer `getByRole`, `getByLabelText`, and `findBy...` queries with accessible names. Use `userEvent` only if installed; otherwise use supported `fireEvent` with realistic events and note the limitation.
- Cover the primary success path and meaningful edge states: invalid input, empty/loading/error, disabled, async completion, keyboard behavior, and focus management as relevant. Avoid redundant tests for static markup.
- Mock external boundaries, not the component under test. Restore mocks between tests; do not leave unresolved promises, timers, or leaked event listeners.
- Use correct async `await` patterns, typed test data, and deterministic assertions. Do not add dependencies or global test configuration without explicit evidence/configuration.
- Do not claim a test passed unless executed output is provided.

## Acceptance Criteria

- Tests express behavior through accessible queries and realistic user interactions.
- Each critical interaction/state has an assertion that would fail if behavior regressed.
- Tests are isolated, deterministic, and compatible with the visible test setup.
- Keyboard/focus assertions verify observable focus and accessible state, not private implementation details.
- Test code type-checks and uses only dependencies confirmed in the provided context.

## Output Format

Return the test file in full, the exact expected file path, and any minimal mock/setup requirements. List covered scenarios and the command to run based on supplied package scripts; label unverified runner assumptions clearly.
