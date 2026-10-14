# Olive & Ember

A responsive restaurant website built with React, TypeScript, Vite, React Router, and Tailwind CSS v4.

## Requirements

- Node.js 20.19+ or 22.12+
- npm

## Run locally

```sh
npm install
npm run dev
```

Open the local URL printed by Vite. The available pages are `/` (Our table), `/menu` (The menu), `/reserve` (Reserve), and `/contact` (Find us).

## Checks

```sh
npm run lint
npm run build
npm run preview
```

`npm run build` type-checks the TypeScript app and creates the production site in `dist/`. `npm run preview` serves that production build locally.

## UI system

The app uses **Tailwind CSS v4 utility classes** in its React components, with shared theme tokens defined in `src/styles/tailwind.css`. Component variants are expressed as typed props instead of repeated page-specific class strings; CSS Modules are not used.

### Tokens

| Category   | Tokens                                                                                                          |
| ---------- | --------------------------------------------------------------------------------------------------------------- |
| Color      | `paper`, `ink`, `muted`, `olive`, `olive-dark`, `clay`, `line`, `surface-soft`, `success`, `danger`, `disabled` |
| Spacing    | Tailwind's spacing scale, plus `page` (12.1%) and `page-mobile` (8%) for shared content gutters                 |
| Typography | `font-sans` (DM Sans), `font-serif` (Playfair Display), `text-label`, `text-body-sm`                            |
| Radius     | `rounded-control` (2px), `rounded-card` (4px)                                                                   |
| Shadow     | `shadow-active`, `shadow-focus`                                                                                 |

### Components and states

- `SiteLayout` owns the shared header, main region, and footer. `PrimaryNavigation` accepts an `items` array and optional accessible `label`; active links get an active underline.
- `Button` and `ButtonLink` accept `primary`, `light`, or `outline` variants. Defaults use the primary treatment. Hover and keyboard-focus styles are shared; native `disabled` styling is available, and `loading` disables the button, exposes `aria-busy`, and shows progress text.
- `Card` accepts `soft` (default) or `paper` tone and optional layout classes.
- `Input` and `TextArea` take a required `label`, native field props, and optional `hint` or `error`. Focus is visible, disabled fields are muted, and errors set `aria-invalid` and connect the message to the field.
- `List` takes `items`, `getKey`, and `renderItem`; an empty array shows its configurable empty message.
- `Feedback` takes `loading`, `empty`, `error`, or `success`. It uses live status announcements, with assertive alerts for errors.

| State    | Treatment                                                                                      |
| -------- | ---------------------------------------------------------------------------------------------- |
| Default  | Neutral fields, primary buttons, inactive navigation, and the selected card tone               |
| Hover    | Buttons and navigation links change color; buttons lift slightly                               |
| Focus    | Keyboard focus is visible on navigation, buttons, and fields                                   |
| Disabled | Buttons and fields communicate unavailable interaction; disabled buttons cannot be submitted   |
| Loading  | Button progress label or the shared loading feedback indicator                                 |
| Empty    | `List` renders its empty message through `Feedback`                                            |
| Error    | `Input`/`TextArea` display an associated field error; `Feedback` announces form or page errors |

## State-driven feature

The reserve page includes an interactive table-planning flow. `ReservePage` owns the shared reservation state, passes the current draft into the form and live preview, and sends add/edit/delete events through `reservationReducer`. The reducer handles the complex list updates while the contact note form demonstrates simpler local `useState`.

Derived values are calculated during render instead of stored separately:

- `reservationReady` controls whether the reservation form can submit.
- `totalGuests` is reduced from the saved request list.
- `depositEstimate` is derived from `totalGuests`.
- Preview labels are derived from the current draft.

## Controlled forms

Both guest-facing forms use controlled inputs:

- The note form stores `name`, `email`, and `message` in `useState`.
- The table request form stores the active draft in reducer state.
- Every input receives a `value` and `onChange` handler.
- Submit handlers call `event.preventDefault()` and update React state instead of reading directly from the DOM.

## State-flow diagram

```text
ContactPage
  useState(noteForm)
    -> Note form inputs
    -> handleNoteSubmit()
    -> submitted feedback

ReservePage
  useReducer(reservationReducer)
    -> reservationState.draft
       -> Table request form
       -> Live preview
    -> reservationState.requests
       -> Request board
       -> derived totalGuests + depositEstimate

User events
  input change -> dispatch(updateField)
  submit form  -> dispatch(submitDraft)
  edit item    -> dispatch(editRequest)
  delete item  -> dispatch(deleteRequest)
```

### Reference screen

The Module 1 home screen is the visual reference: the hero image and overlay, editorial type hierarchy, paired calls to action, and alternating content sections remain in working markup, while repeated navigation and button treatments now use shared components. No separate Figma file or mockup was included. No AI design-to-code tool was used; without the source design and its measurements, such a tool could not reliably recover exact spacing or responsive behavior, so the existing screen was translated and componentized manually.

## Project layout

```text
src/
  assets/       Imported image and static assets
  components/   Shared page chrome and reusable UI
  data/         Menu content
  hooks/        Shared React hooks
  pages/        Route-level page components
  styles/       Tailwind entry point and theme tokens
  utils/        Small formatting helpers
```

## Live Link

[https://flexisafproject.vercel.app/](https://flexisafproject.vercel.app/)
