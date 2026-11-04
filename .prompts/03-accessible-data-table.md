# Accessible Data Table

## Goal

Build or repair a data table for genuinely tabular information, ensuring row/column relationships, captions, headers, sorting state, and responsive presentation are understandable to keyboard and screen-reader users.

## Stack/Context

- Target React 19, TypeScript 6, Vite, and Tailwind CSS v4; retain the project's existing component and data-model conventions.
- Apply WCAG 2.1 AA, especially 1.3.1, 1.4.10, 2.1.1, 2.4.6, and 4.1.2.
- Use native HTML table semantics unless the supplied interaction genuinely requires an ARIA grid. Do not add a table library.

## Existing Code

```tsx
[PASTE CODE HERE]
```

## Constraints

- Use `<table>`, a meaningful `<caption>`, `<thead>`, `<tbody>`, `<tr>`, and `<th>`/`<td>` with correct scope. Use `scope="col"` or `scope="row"` for simple headers; use explicit `id`/`headers` only for complex header associations.
- A sortable column's header contains a real button. Put `aria-sort` on the corresponding header cell and expose the current direction; do not use clickable `<th>` elements.
- Keep row actions as named buttons/links and include row context in accessible names when labels would otherwise be ambiguous.
- At narrow widths, preserve data relationships: use a scrollable table region with an accessible name and visible scroll affordance, or a separately designed equivalent that retains labels. Do not hide essential columns without an explicit alternate path.
- Do not apply `role="grid"` to a native table or add unnecessary ARIA that conflicts with native semantics. Use strict data types, stable keys, and no `any`.

## Acceptance Criteria

- A screen reader can identify the table caption, row and column headers, and each data cell's header relationship.
- Sort controls are keyboard-operable and their current sort state is conveyed programmatically and visibly.
- Horizontal overflow on mobile does not clip content silently or trap keyboard focus.
- Empty, loading, and error states are clearly distinct from an empty table body.
- Existing table data and actions remain correct, with no dependency additions or TypeScript errors.

## Output Format

Provide the revised component in full (or a focused unified diff if the input is a large file), then describe header associations, sorting semantics, and narrow-screen behavior. End with a short keyboard/screen-reader test checklist.
