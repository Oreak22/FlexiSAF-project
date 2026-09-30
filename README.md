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

Open the local URL printed by Vite. The available pages are `/` (Our table), `/menu` (The menu), and `/contact` (Find us).

## Checks

```sh
npm run lint
npm run build
npm run preview
```

`npm run build` type-checks the TypeScript app and creates the production site in `dist/`. `npm run preview` serves that production build locally.

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

## Deploy with Vercel

1. Push this repository to GitHub.
2. Sign in to [Vercel](https://vercel.com/) with GitHub and authorize repository access.
3. Choose **Add New... → Project**, import this GitHub repository, and deploy. Vercel detects Vite; use `npm run build` as the build command and `dist` as the output directory if asked.
4. Vercel creates a deployment for each push. The production branch (normally `main`) updates the production URL; other branches get preview deployments.

`vercel.json` rewrites client-side routes to the app entry point so direct visits and refreshes work on `/menu` and `/contact`.
