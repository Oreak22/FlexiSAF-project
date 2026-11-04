# Accessible Form Structure

## Goal

Implement or repair the supplied form so every control has a persistent, programmatic label; instructions and errors are associated with the right field; required state and grouping are clear; and the form remains operable with keyboard and assistive technology.

## Stack/Context

- Use React 19 function components, TypeScript 6 strict-compatible types, Vite, and Tailwind CSS v4.
- Follow the repository's shared `Input`/`TextArea` conventions if those components are in the pasted code. Do not bypass them without explaining a concrete limitation.
- Target WCAG 2.1 AA, especially 1.3.1, 1.3.5, 2.4.6, 3.3.1, 3.3.2, and 4.1.2.
- Keep native HTML form submission and browser semantics unless a supplied requirement explicitly needs custom behavior.

## Existing Code

```tsx
[PASTE CODE HERE]
```

## Constraints

- Give every input, select, and textarea a visible `<label>` associated by `htmlFor`/`id` or by valid nesting. Placeholder text is never the only label.
- Use `fieldset` and `legend` for logically grouped radio buttons or checkboxes. Use native `required`, suitable `type`, `name`, `autocomplete`, and input constraints where applicable.
- Associate hint and error text through `aria-describedby`; set `aria-invalid="true"` only for invalid fields. Keep IDs stable and unique, including for repeated form instances.
- Validation errors must identify the field and explain how to fix it. On failed submission, focus an error summary or the first invalid field without moving focus during ordinary typing.
- Use live regions only for dynamically updated feedback that needs announcement; avoid announcing every keystroke. Do not communicate status by color alone.
- Maintain controlled/uncontrolled consistency, strict event types, and existing design tokens. No `any`, custom fake controls, or new dependencies.

## Acceptance Criteria

- All fields have visible labels, correct accessible names, and any relevant instructions/errors are programmatically connected.
- Keyboard users can reach and operate every control in a logical order; focus remains visible.
- Required, invalid, disabled, and submitted states are represented accurately in DOM semantics and visual styling.
- Error feedback is specific, announced appropriately, and does not erase entered values.
- No console warnings, duplicate IDs, or TypeScript errors are introduced.
- State whether the supplied snippet is sufficient to verify validation timing and submit flow; list any assumptions.

## Output Format

Return the complete revised form component, followed by a compact field-to-label/error association summary and a manual verification checklist. If context is incomplete, call out assumptions before presenting code. Do not include unrelated refactors.
