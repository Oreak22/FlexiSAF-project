# Mobile-First Dashboard

## Goal

Refactor or implement the supplied dashboard so its most important workflow is usable on small screens first, then progressively enhanced for tablet and desktop without losing data, actions, or context.

## Stack/Context

- Target React 19, TypeScript 6, Vite, and Tailwind CSS v4 using project theme tokens and shared components.
- Design for a 320 CSS-pixel minimum viewport and WCAG 2.1 AA; use mobile-first styles and explicit, content-driven breakpoints rather than assuming a device category.
- Preserve existing data, routes, and state ownership. Do not add charting, icon, or layout dependencies unless already present in pasted context.

## Existing Code

```tsx
[PASTE CODE HERE]
```

## Constraints

- Put the primary task and key status metrics first in DOM order; use a single-column mobile layout and progressively add columns at the point where content fits.
- At 320 CSS px and 400% zoom, avoid page-level horizontal overflow. Dense tables/charts must provide a labeled, usable alternative or a clearly bounded horizontal scroll region that preserves relationships.
- Use semantic headings and landmarks, accessible names for icon controls, visible keyboard focus, and touch targets at least 24 by 24 CSS px unless spacing exceptions in WCAG 2.5.8 apply; target 44 by 44 where practical.
- Maintain text contrast of 4.5:1 for normal text and 3:1 for large text and meaningful UI boundaries; do not use color alone for status.
- Respect reduced motion, reduced data considerations for remote media, and existing loading/empty/error states. Do not change business logic or invent metrics.
- Use Tailwind v4 utilities/design tokens already defined by the project; no fixed-width canvas assumptions, `any`, or unnecessary card nesting.

## Acceptance Criteria

- At 320, 375, 768, and 1280 CSS px, primary content and actions are readable and do not overlap or disappear.
- Layout reflows based on available space; mobile does not merely shrink desktop columns.
- Keyboard order follows visual/content order, focus is visible, and every action remains reachable.
- Tables, charts, navigation, and status indicators have accessible equivalents or semantics.
- Existing application behavior is preserved and the implementation passes the project's lint and production build checks.

## Output Format

Return the revised page/component in full or as a focused diff, then summarize mobile, tablet, and desktop layout decisions. Include a viewport/accessibility verification checklist and explicitly identify any supplied content that cannot be made responsive without a product decision.
