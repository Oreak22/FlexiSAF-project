# Prompt Library

## Before vs. After Prompt Transformation

### Before

> Make a responsive dropdown component that handles keyboard navigation and looks good on mobile.

### After

The vague request becomes [Prompt #05: Combobox Keyboard Navigation](05-combobox-keyboard-nav.md). It first resolves what “dropdown” means (editable or select-only, single or multi-select, and whether free text is valid), then specifies the ARIA pattern, keyboard behavior, focus management, dismissal policy, mobile constraints, acceptance criteria, and the expected output. That turns a visual request into a testable implementation brief without assuming that every dropdown should be a custom combobox.

### Refactor Example

#### Before

> Refactor this component so it is cleaner, but don't break anything.

#### After

> Refactor the supplied component for clarity while preserving its rendered content, interactions, state transitions, routes, network requests, accessibility semantics, and responsive layout. First inventory its current behavior and relevant tests. Keep the patch minimal, avoid unrelated changes or new dependencies, and report any assumptions or behavior that cannot be verified.

This becomes [Prompt #13: Behavior-Preserving Refactor](13-behavior-preserving-refactor.md), which adds concrete constraints, acceptance criteria, and a required behavior-preservation checklist so “don't break anything” can be evaluated.

## Prompt Index

| #   | Prompt                       | File                                                                     |
| --- | ---------------------------- | ------------------------------------------------------------------------ |
| 01  | Semantic Landmark Audit      | [01-semantic-landmark-audit.md](01-semantic-landmark-audit.md)           |
| 02  | Accessible Form Structure    | [02-accessible-form-structure.md](02-accessible-form-structure.md)       |
| 03  | Accessible Data Table        | [03-accessible-data-table.md](03-accessible-data-table.md)               |
| 04  | Modal Focus Trap             | [04-modal-focus-trap.md](04-modal-focus-trap.md)                         |
| 05  | Combobox Keyboard Navigation | [05-combobox-keyboard-nav.md](05-combobox-keyboard-nav.md)               |
| 06  | Roving Tabindex Toolbar      | [06-roving-tabindex-toolbar.md](06-roving-tabindex-toolbar.md)           |
| 07  | Mobile-First Dashboard       | [07-mobile-first-dashboard.md](07-mobile-first-dashboard.md)             |
| 08  | Adaptive Navbar Drawer       | [08-adaptive-navbar-drawer.md](08-adaptive-navbar-drawer.md)             |
| 09  | Fluid Typography Container   | [09-fluid-typography-container.md](09-fluid-typography-container.md)     |
| 10  | CVA Variant Button           | [10-cva-variant-button.md](10-cva-variant-button.md)                     |
| 11  | Async Skeleton States        | [11-async-skeleton-states.md](11-async-skeleton-states.md)               |
| 12  | Form Validation States       | [12-form-validation-states.md](12-form-validation-states.md)             |
| 13  | Behavior-Preserving Refactor | [13-behavior-preserving-refactor.md](13-behavior-preserving-refactor.md) |
| 14  | RTL Unit Test Generator      | [14-rtl-unit-test-generator.md](14-rtl-unit-test-generator.md)           |
| 15  | E2E User Flow Planner        | [15-e2e-user-flow-planner.md](15-e2e-user-flow-planner.md)               |
