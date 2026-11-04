# Semantic Landmark Audit

## Goal

Audit and improve the supplied page's semantic structure so its landmarks, headings, and navigation regions give keyboard and assistive-technology users a clear, useful outline without redundant or misleading roles.

## Stack/Context

- Target React 19, TypeScript 6, Vite, and Tailwind CSS v4; follow the repository's existing component and layout conventions.
- Apply WCAG 2.1 AA and relevant WAI-ARIA Authoring Practices for landmark and heading structure.
- Inspect the supplied page and its shared layout components before proposing changes. Do not add dependencies or use `any`.

## Existing Code

```tsx
[PASTE PAGE AND RELEVANT LAYOUT CODE HERE]
```

## Constraints

- Identify the page's main content, site header, navigation, complementary content, and footer based on their actual purpose. Use native `header`, `nav`, `main`, `aside`, and `footer` elements where appropriate.
- Ensure there is one clear main landmark per page. Do not create nested or duplicate landmarks just to style sections.
- Give multiple navigation or complementary landmarks distinct accessible names; do not label a lone landmark unnecessarily.
- Use headings to describe page and section hierarchy in a logical order. Do not choose heading levels for visual size or skip levels without a clear structural reason.
- Use ARIA landmark roles only when native HTML cannot express the intended structure, and never add redundant roles to native landmark elements.
- Preserve existing routes, content, visual design, and responsive behavior. Make the smallest changes needed to correct semantic issues.

## Acceptance Criteria

- Landmark navigation exposes a concise, non-redundant page outline with clear names where needed.
- The main content is easy to locate and each page region reflects its purpose.
- Heading hierarchy communicates section relationships and is independent of visual styling.
- Shared layout changes do not introduce duplicate landmarks across routes or break responsive layouts.
- No TypeScript errors, duplicate IDs, console warnings, or unnecessary ARIA are introduced.
- Call out assumptions when the supplied code does not show the full page or route structure.

## Output Format

Return a concise audit table listing each issue, its impact, and the recommended change, followed by the revised markup or focused diff. Include a short landmark and heading verification checklist for keyboard and screen-reader testing. Avoid unrelated refactors.
