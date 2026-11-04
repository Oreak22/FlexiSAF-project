# Behavior-Preserving Refactor

## Goal

Refactor the supplied frontend code for clarity, reuse, or maintainability while preserving all externally observable behavior: rendered content, user interactions, state transitions, routes, network requests, accessibility semantics, and responsive layout.

## Stack/Context

- Work within React 19, TypeScript 6, Vite, Tailwind CSS v4, and the libraries already present in the supplied repository context.
- Treat the current implementation and its tests as behavioral evidence. If behavior is ambiguous, ask for a decision or explicitly list the assumption rather than silently changing it.
- Keep the patch minimal and compatible with strict type checking and existing lint rules.

## Existing Code

```tsx
[PASTE CODE HERE]
```

## Constraints

- Do not alter user-visible copy, public prop contracts, route behavior, request timing, validation rules, state ownership, DOM semantics, or breakpoint behavior unless explicitly requested.
- Before changing state logic, enumerate its current inputs, transitions, and side effects. Preserve reducer/action semantics and derived-value calculations.
- Do not add dependencies, general-purpose abstractions, speculative optimizations, or broad formatting churn. Do not use `any`, suppress diagnostics, or weaken types.
- Preserve stable keys, effect cleanup, cancellation, focus behavior, and accessible names. Keep side effects out of render and avoid stale closures.
- If extracting a component/helper, keep its API typed and include all affected call-site updates. If behavior equivalence cannot be established from the pasted code, identify the missing evidence.

## Acceptance Criteria

- Existing tests pass unchanged; add or update focused tests only where needed to demonstrate preserved behavior.
- Before/after behavior is equivalent for all enumerated states and interactions.
- The refactor improves a concrete maintainability issue and does not widen scope into unrelated defects.
- TypeScript and lint checks pass without new warnings or suppressions.
- Final output explicitly records any non-equivalence or unresolved assumption; do not claim perfect equivalence without sufficient evidence.

## Output Format

Return a concise behavior inventory, then the minimal unified diff or complete changed modules. Follow with a behavior-preservation checklist, validation commands/results if available, and any unavoidable differences or assumptions.
