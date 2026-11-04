# Form Validation States

## Goal

Design and implement validation behavior for the supplied form, covering pristine, editing, invalid, submitting, success, and server-error states with clear accessible feedback and no loss of user-entered data.

## Stack/Context

- Use React 19, TypeScript 6, Vite, and existing form components/state conventions. Use native browser constraints where suitable; do not introduce a validation package unless already installed.
- Target WCAG 2.1 AA, especially 3.3.1 Error Identification, 3.3.2 Labels or Instructions, 3.3.3 Error Suggestion, 3.3.4 Error Prevention where applicable, and 4.1.3 Status Messages.
- Keep client validation aligned with any supplied server contract; client validation is not a security boundary.

## Existing Code

```tsx
[PASTE CODE HERE]
```

## Constraints

- Define validation rules explicitly for each field; trim and normalize only where the domain permits. Never rely on placeholder text or color to indicate invalid state.
- Prefer native input types and attributes for format/required constraints, with custom validation for domain rules. Avoid contradictory browser and custom error messaging.
- Associate field errors and hints via stable IDs and `aria-describedby`, set `aria-invalid` only when an error is present, and provide a visible error summary when multiple fields fail.
- Choose and document validation timing (submit, blur, or both). Do not surface errors on pristine fields or announce each character typed.
- On submit, prevent duplicates, expose submitting status, handle server rejection separately, preserve valid values, and focus the summary/first invalid field when submission fails.
- Use strict discriminated state types where useful; do not store derivable validity redundantly or use `any`.

## Acceptance Criteria

- Every invalid field has a specific, actionable message connected to its control, with errors discoverable without relying on visual color.
- Validation timing is predictable; correction clears or updates the error at the documented point.
- Submitting, success, client error, and server error states are visibly distinct and appropriately announced.
- Double submission is prevented while in flight; user values are retained after failure.
- Native keyboard interaction and autofill remain functional, and TypeScript/lint/build checks pass.

## Output Format

Return the complete form validation logic and relevant JSX. Include a field/rule/error table, state transition summary, and focused tests covering valid submit, each validation failure, server failure, and repeated submit.
