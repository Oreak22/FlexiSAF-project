# Shared Components

## Refactor Summary

- `Button.tsx`: Defaults native buttons to `type="button"` so ordinary actions cannot accidentally submit a surrounding form. Explicit submit buttons and the existing loading/disabled behavior remain supported.
- `buttonStyles.ts`: Keeps the existing typed variants and adds a reduced-motion transition override. Existing visual variants and focus treatment are unchanged.
- `Card.tsx`: Builds its class list from the tone, shared shape, and optional caller class without changing the rendered container or public props.
- `Feedback.tsx`: Relies on the implicit live-region behavior of `role="status"` and `role="alert"`, avoiding duplicate live-region semantics. Loading animation now stops for reduced-motion preferences.
- `Footer.tsx`: Identifies the footer links as a named navigation landmark.
- `Header.tsx`: Types the existing route list with the shared `NavigationItem` contract.
- `Input.tsx`: Uses React-generated IDs when callers do not provide one, preventing duplicate IDs across repeated instances. Hint/error descriptions are combined with caller-provided `aria-describedby`; an explicit caller `aria-invalid` value is retained unless an error is supplied. The visible label and native form-control behavior remain intact.
- `Layout.tsx`: Adds a keyboard-visible skip link to the page's single main landmark.
- `List.tsx`: Accepts readonly item arrays while retaining stable keys, caller rendering, and the existing empty state.
- `Navigation.tsx`: Exposes links as a semantic list inside the named navigation landmark. React Router continues to provide active-route state; the existing desktop links and mobile bottom bar behavior are preserved.

## Prompt Guidance Applied

- [01 Semantic Landmark Audit](../../.prompts/01-semantic-landmark-audit.md): Shared layout and header/footer navigation landmarks, plus a skip link.
- [02 Accessible Form Structure](../../.prompts/02-accessible-form-structure.md) and [12 Form Validation States](../../.prompts/12-form-validation-states.md): Persistent labels and stable, associated field hints/errors. Submit timing and validation flow remain owned by the page forms.
- [08 Adaptive Navbar Drawer](../../.prompts/08-adaptive-navbar-drawer.md): Real route links, named navigation, and current-route semantics. This UI is a fixed mobile bottom bar, not a drawer, so no disclosure or modal focus behavior was introduced.
- [09 Fluid Typography and Container Layout](../../.prompts/09-fluid-typography-container.md): Preserved existing type and responsive layout tokens; no new viewport-scaled typography or fixed content heights were added.
- [10 Typed Button Variants](../../.prompts/10-cva-variant-button.md): Preserved the existing typed variant API and native button attributes without adding CVA or another dependency.
- [11 Async Skeleton and Request States](../../.prompts/11-async-skeleton-states.md): Preserved existing feedback states and made the loading decoration respect reduced motion. Request lifecycle remains owned by the menu page.
- [13 Behavior-Preserving Refactor](../../.prompts/13-behavior-preserving-refactor.md): Kept the shared component prop contracts and existing visual/route behavior, except for the safer default button type and added skip-navigation affordance.


