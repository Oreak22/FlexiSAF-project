# Modal Focus Trap

## Goal

Implement or fix a modal dialog that has correct initial focus, contained keyboard navigation, Escape handling, background inertness, and focus restoration while preserving the trigger's context.

## Stack/Context

- Use React 19, TypeScript 6, Vite, and the repository's existing styling approach (Tailwind CSS v4 where applicable).
- Prefer the native `<dialog>` element with `showModal()` where it fits the supplied design and browser targets; otherwise use a small, well-defined custom dialog implementation. Do not install a dialog dependency.
- Meet WCAG 2.1 AA, especially 2.1.1, 2.1.2, 2.4.3, 2.4.7, and 4.1.2. A modal must have a clear accessible name and modal state.

## Existing Code

```tsx
[PASTE CODE HERE]
```

## Constraints

- The dialog must be rendered with `role="dialog"` and `aria-modal="true"` when not using native modal semantics, and must be labelled by a visible title using `aria-labelledby`. Use `aria-describedby` only for concise explanatory text.
- On open, move focus to a deliberate initial target (often the heading with `tabIndex={-1}` for long content, or the first control for short forms). Keep Tab and Shift+Tab within the open modal.
- Escape closes the modal unless the product requirement explicitly prevents dismissal; provide a visible close button with an accessible name.
- On close, restore focus to the opener if it still exists; if not, focus a documented logical fallback. Prevent background interaction while modal is open and clean up listeners on close/unmount.
- Do not query arbitrary DOM nodes during render, use stale opener references, or swallow unrelated key events. Ensure Strict Mode-safe effects and typed refs.
- Support reduced motion and visible focus; do not use color alone to distinguish dialog actions.

## Acceptance Criteria

- Opening the dialog moves focus inside; repeated Tab/Shift+Tab never reaches background controls.
- Escape and the close button dismiss the dialog and restore focus appropriately.
- Background content is not operable while open; focus listeners and document state are cleaned up reliably.
- Dialog title and modal state are exposed to assistive technology; the dialog works at mobile widths and 200% zoom.
- The implementation avoids duplicate dialogs/listeners and type-checks without new dependencies.

## Output Format

Return the complete dialog implementation and any minimal integration changes. Explain the chosen initial-focus target, containment strategy, and focus-return fallback, then provide a manual test matrix for keyboard, screen reader, mobile, and reduced-motion behavior.
