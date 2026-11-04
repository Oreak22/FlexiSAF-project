# Async Skeleton and Request States

## Goal

Implement a complete asynchronous content lifecycle for the supplied UI: loading, success, empty, error, and retry states, with skeletons that preserve layout and do not mislead assistive technology.

## Stack/Context

- Use React 19, TypeScript 6, Vite, and existing request/state utilities (Axios if already used). Do not add a data-fetching dependency.
- Follow existing effect/request ownership patterns and treat network responses as untrusted input. Meet WCAG 2.1 AA, especially 1.3.1, 2.2.2, 4.1.2, and 4.1.3.
- Preserve supplied API contracts, pagination/filter state, and design tokens.

## Existing Code

```tsx
[PASTE CODE HERE]
```

## Constraints

- Represent mutually exclusive request phases with a discriminated union where appropriate; avoid impossible boolean combinations. Type and validate external response data before rendering.
- Prevent stale responses from overwriting newer requests. Cancel with `AbortController` when supported and handle aborts separately from failures; clean up effects correctly under React Strict Mode.
- Skeletons must match the eventual content geometry, be hidden from the accessibility tree (`aria-hidden="true"`), and never contain fake focusable controls or fabricated content labels.
- Expose loading with a concise `role="status"`/`aria-live="polite"` message when needed; announce important completion/error changes without repeatedly announcing large result sets. Use `role="alert"` sparingly for urgent errors.
- Provide a real empty state distinct from loading and error, an actionable retry where recovery is possible, and preserve filters/page context where appropriate.
- Respect reduced motion. Do not make animation the only loading cue or use `setTimeout` to simulate network completion.

## Acceptance Criteria

- Each request phase renders a distinct, useful UI and transitions correctly on success, empty response, validation error, network error, retry, and cancellation.
- Out-of-order responses cannot replace current results; effect cleanup and retries do not leak requests or state updates.
- Screen-reader announcements are concise; skeleton decoration is not announced as content.
- Layout does not jump excessively when content arrives and responsive content remains readable.
- No unvalidated response fields, `any` types, or new dependencies; focused checks and project build pass.

## Output Format

Return the revised request logic and rendering code. Include the request-state transition table, describe cancellation/stale-response handling, and provide test cases for every state and retry/cancel behavior.
