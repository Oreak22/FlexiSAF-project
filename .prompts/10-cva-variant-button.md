# Typed Button Variants

## Goal

Refactor the supplied button into a small, reusable, strongly typed variant API that keeps visual variants, sizes, and interaction states consistent without changing its behavior or introducing needless abstraction.

## Stack/Context

- Target React 19, TypeScript 6, Vite, and Tailwind CSS v4. The repository currently expresses shared component variants through typed props and utility classes.
- Use `class-variance-authority` only if it is already installed or the user explicitly authorizes adding it; otherwise implement the same typed variant composition with existing project patterns.
- Meet WCAG 2.1 AA, especially 1.4.3, 2.1.1, 2.4.7, 2.5.8, and 4.1.2.

## Existing Code

```tsx
[PASTE CODE HERE]
```

## Constraints

- Preserve native `<button>` behavior, including `type` defaulting safely to `button` when the component is not specifically a submit control. Forward appropriate native button attributes and event handlers.
- Define finite variant and size unions; support `className` composition without allowing caller classes to silently erase required focus/disabled styles. Do not use `any` or broad string index signatures.
- Model loading and disabled states explicitly: prevent repeat activation, expose `aria-busy` while loading, and keep an accessible label for icon-only buttons. Do not add `aria-disabled` when native `disabled` is appropriate.
- Provide visible focus, sufficient contrast, minimum target size, and disabled/loading distinctions that do not rely only on color. Include reduced-motion-safe transitions.
- Avoid polymorphic `as` APIs unless the existing code already uses one; use a separate link component for navigation instead of rendering anchors with button semantics.
- Keep the API small and preserve call sites or include the minimal typed migrations required.

## Acceptance Criteria

- TypeScript rejects unsupported variants/sizes and correctly types native button props and refs if the existing project forwards refs.
- Primary, secondary/outline, and destructive treatments (only when required by the supplied code) have consistent focus, hover, disabled, and loading behavior.
- Loading does not permit duplicate submissions and remains understandable to assistive technology.
- Existing callers continue to build, or every required call-site change is included.
- No dependency is added unless explicitly approved; project lint/build checks pass.

## Output Format

Return the variant API and complete button implementation, plus a short usage example for each supported variant. State whether CVA was already available or avoided, and list the accessibility states covered.
