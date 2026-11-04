# Fluid Typography and Container Layout

## Goal

Make the supplied page's type scale and content containers adapt smoothly to available viewport/container width while retaining readable line lengths, hierarchy, and zoom/reflow support.

## Stack/Context

- Target React 19, TypeScript 6, Vite, Tailwind CSS v4, and the existing design tokens/fonts.
- Use mobile-first responsive styling and clamp-based fluid sizing only where the repository's Tailwind/CSS approach supports it cleanly.
- Meet WCAG 2.1 AA, especially 1.4.4 Resize Text, 1.4.10 Reflow, and 1.4.12 Text Spacing.

## Existing Code

```tsx
[PASTE CODE HERE]
```

## Constraints

- Preserve the established type family, weights, and design tokens; do not introduce a font dependency or use viewport-width font scaling (`vw`) as the sole sizing mechanism.
- Use bounded fluid values with explicit minimum and maximum sizes; provide responsive fallbacks only when needed. Do not use negative letter spacing.
- Constrain long-form text to a comfortable measure (typically 60-75 characters) while allowing dashboards/forms to use the width their content needs.
- Avoid fixed heights that clip enlarged text. At 200% text resize and 400% zoom, content must remain available without two-dimensional page scrolling except for genuinely spatial content.
- Use mobile-first breakpoints based on where the layout needs more room; account for long words, localization, and browser text enlargement.
- Keep heading semantics intact and do not use CSS to reorder content in a way that contradicts DOM order.

## Acceptance Criteria

- Typography scales continuously within specified bounds and remains legible at minimum and maximum viewport widths.
- Text does not overlap, clip, or force unintended horizontal page scrolling at 320 CSS px or 400% zoom.
- Line length, heading hierarchy, and content gutters remain consistent with the supplied design system.
- Resizing text to 200% does not hide functionality or truncate labels.
- No new type dependencies, arbitrary global styles, or TypeScript/build errors are introduced.

## Output Format

Return the precise revised classes/CSS and the affected component context. Include the min/preferred/max values and breakpoint rationale, followed by a checklist for 320 px, 200% text resize, and 400% zoom.
