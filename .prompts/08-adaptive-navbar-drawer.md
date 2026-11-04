# Adaptive Navbar Drawer

## Goal

Build an adaptive site navigation that presents a clear desktop navigation and a usable mobile disclosure/drawer, with correct link semantics, keyboard behavior, current-page state, and reliable focus handling.

## Stack/Context

- Use React 19, TypeScript 6, React Router 7 when present, Vite, and Tailwind CSS v4. Preserve the existing route and navigation-item model.
- Meet WCAG 2.1 AA, especially 1.4.10, 2.1.1, 2.4.3, 2.4.7, 2.4.11, and 4.1.2.
- Do not add a menu/dialog dependency. Decide whether the mobile UI is a disclosure or a modal drawer based on whether the page is made inert and focus is contained.

## Existing Code

```tsx
[PASTE CODE HERE]
```

## Constraints

- Use a labelled `<nav>` landmark and real links for navigation. Mark the current route with `aria-current="page"`; do not infer current state from styling alone.
- The mobile trigger is a button with an accessible name and synchronized `aria-expanded`/`aria-controls`. Preserve logical DOM and focus order when changing responsive presentation.
- For a non-modal disclosure, do not trap focus or claim modal semantics. For a modal drawer, implement initial focus, focus containment, Escape close, background inertness, and focus restoration.
- Close the mobile navigation after route selection when appropriate; ensure route transitions do not restore focus to a removed element. Support outside dismissal only if it does not conflict with expected interaction.
- Avoid duplicate desktop/mobile links being simultaneously focusable or announced. Use CSS visibility/display and component state deliberately, and test at the breakpoint boundary.
- Provide visible focus, adequate contrast and touch targets, reduced-motion support, and no horizontal overflow. Keep strict TS types and do not add dependencies.

## Acceptance Criteria

- Navigation is discoverable as a named landmark and every destination is a genuine link with accurate current-page state.
- Mobile menu opens/closes by button, Escape if applicable, and route selection; `aria-expanded` always matches visibility.
- Keyboard order is predictable across breakpoint changes; no hidden focusable links remain.
- Modal focus rules are fully implemented if and only if the drawer is modal; non-modal disclosure leaves normal page navigation intact.
- At narrow, boundary, and desktop widths the menu remains usable without clipping, overlap, or focus loss.

## Output Format

Return the complete navigation component and minimal integration changes. State whether the mobile presentation is modal or non-modal, provide a key interaction table, and finish with responsive and keyboard test steps.
