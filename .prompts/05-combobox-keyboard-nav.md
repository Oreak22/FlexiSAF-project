# Combobox Keyboard Navigation

## Goal

Implement an accessible single-select combobox with a text input, filtered options, deterministic keyboard navigation, selection, dismissal, and announced state. Match the WAI-ARIA Authoring Practices combobox pattern for the supplied interaction model.

## Stack/Context

- React 19 + TypeScript 6 + Vite + Tailwind CSS v4; use native React state and typed data unless the repository already provides a relevant abstraction.
- Target WCAG 2.1 AA and ARIA Authoring Practices. Prefer a native `<select>` if the design does not require editable search; explain that choice rather than recreating native functionality.
- No new dependencies and no `any` types.

## Existing Code

```tsx
[PASTE CODE HERE]
```

## Constraints

- Define the exact interaction model: editable or select-only, single or multi-select, and whether free text is valid. Do not combine incompatible patterns.
- Use a visible label. For an editable combobox, place `role="combobox"`, `aria-expanded`, `aria-controls`, `aria-autocomplete`, and `aria-activedescendant` on the input as appropriate. Give the popup/listbox and options stable IDs and correct roles.
- Keep DOM focus on the input while moving the active option; scroll the active option into view without stealing focus. Use `aria-selected` for committed selection, distinct from the active descendant.
- Implement ArrowDown/ArrowUp, Enter, Escape, and Home/End only in accordance with the chosen pattern. Preserve normal text editing, Tab order, and browser shortcuts; do not intercept unrelated keys.
- Close on outside interaction and blur according to a documented policy. Handle empty results, async/loading data if present, duplicate labels, and stable identity safely.
- Ensure pointer selection and keyboard selection produce the same value and event behavior. Do not claim `aria-activedescendant` points to a missing option.

## Acceptance Criteria

- Every state transition updates the input value, expanded state, active descendant, and committed selection consistently.
- Keyboard users can open, navigate, select, dismiss, and continue tabbing without a keyboard trap.
- Screen readers receive the control label, popup state, active option, and empty/loading feedback without noisy announcements.
- Options remain operable under zoom and mobile viewport constraints, with visible focus/active distinction not based only on color.
- Code uses stable IDs and strict types and introduces no console warnings or dependency changes.

## Output Format

Return the complete component and a concise key-to-behavior table. Identify the selected ARIA pattern, state model, and assumptions; finish with keyboard and screen-reader verification steps.
