# Roving Tabindex Toolbar

## Goal

Create or repair a toolbar whose interactive controls form one Tab stop and support arrow-key movement, while preserving each control's native activation behavior and accessible name.

## Stack/Context

- Target React 19, TypeScript 6, Vite, and Tailwind CSS v4; follow current component conventions and avoid adding packages.
- Use the WAI-ARIA toolbar pattern and WCAG 2.1 AA, especially 2.1.1, 2.4.3, 2.4.7, and 4.1.2.
- Confirm whether controls are horizontally or vertically arranged and whether they wrap; use that decision to define arrow-key behavior.

## Existing Code

```tsx
[PASTE CODE HERE]
```

## Constraints

- Use a labelled container with `role="toolbar"` and `aria-label` or `aria-labelledby`; every icon-only action must have a meaningful accessible name and a tooltip where the surrounding design uses tooltips.
- Use roving `tabIndex`: exactly one enabled toolbar item has `tabIndex={0}`, other enabled items have `-1`, and disabled controls follow the established disabled-item policy.
- Support arrow movement according to orientation; support Home/End only if consistent with the chosen interaction pattern. Do not intercept keys in editable controls or unrelated nested widgets.
- Move actual DOM focus to the newly active control and keep the active index valid when items are added, removed, disabled, or reordered. Avoid stale refs and index identity bugs where stable item IDs are available.
- Keep button semantics and native activation (Enter/Space). Do not use positive `tabIndex`, `role="application"`, or `aria-pressed` unless the action is truly a toggle.
- Provide visible focus and distinct selected/toggled states; preserve responsive layout and reduced-motion preferences.

## Acceptance Criteria

- Tab enters the toolbar at one item and exits the toolbar in one additional Tab; arrow keys move focus as specified.
- Home/End and wrap/no-wrap behavior match the written interaction model.
- Disabled and dynamically changing items never leave focus lost or the roving tab stop invalid.
- Each control has a correct accessible name/state and remains operable with keyboard and pointer.
- TypeScript strict checks pass and no unrelated key handling is disrupted.

## Output Format

Provide the revised toolbar and any small supporting hook/helper in full. Include an interaction table by key, explain dynamic-item focus behavior, and provide keyboard/screen-reader test steps.
