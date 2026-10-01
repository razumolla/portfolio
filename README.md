# Razu Molla — Portfolio

Personal portfolio built with Next.js (App Router), TypeScript and Tailwind CSS v4.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts: `npm run build`, `npm run start`, `npm run lint`, `npm run typecheck`.

## Structure

```
src/
  app/            layout, page and globals.css (all colors/fonts live here)
  components/
    ui/           reusable primitives (button, badge, card, toaster)
    shared/       building blocks used by several sections
    layout/       navbar, footer
    sections/     one file per page section
  data/           all content — edit these files to update the site
  lib/            helpers
  types/          shared TypeScript types
public/
  images/         profile photo
  skills/         skill logos
```

## Editing

- **Content**: update the files in `src/data`.
- **Colors / theme**: change the tokens at the top of `src/app/globals.css`. Components only use those tokens.
