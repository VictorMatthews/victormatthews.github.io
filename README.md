# victormatthews.github.io

My personal website — a static site built with [Astro](https://astro.build).

Deployed to GitHub Pages at <https://victormmatthews.me> (with a custom
domain configured via `CNAME`).

## Stack

- **Astro** (static output) for the pages and layouts
- **TypeScript** for type-safe content and component props
- **[@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)** for `sitemap-index.xml`
- Self-hosted fonts (**Inter**, **JetBrains Mono** via [`@fontsource`](https://fontsource.org))

## Requirements

- **Node.js ≥ 22.23.4** (Astro 7 requirement). This repo pins the recommended
  version in `.nvmrc` — run `nvm use` to pick it up.

## Getting started

```sh
nvm use        # or: nvm install && nvm use   (reads .nvmrc → Node 26)
npm install
npm run dev    # http://localhost:4321
```

## Build & preview

```sh
npm run build  # → dist/
npm run preview # serve the production build locally
```

## Deployment

Deploys are handled by GitHub Actions (`.github/workflows/deploy.yml`). On every
push to `master` it builds the site and publishes it to GitHub Pages via the
official `withastro/action` + `actions/deploy-pages` workflow. No local deploy
command is needed.

You can also trigger a deploy manually from the **Actions** tab
(`workflow_dispatch`).

## Project structure

```
src/
  content/profile/index.ts   Single source of truth: name, title, socials,
                            experience, education, skills, beer fund, etc.
  content.config.ts          Content collection schema + loader
  layouts/BaseLayout.astro   Shared <html> shell: meta, canonical, Open Graph,
                            Twitter cards, JSON-LD Person, theme-color, icons
  components/                Header, Footer, Section, SocialIcons, Button
  pages/                     index (home), resume, beer-fund
  styles/global.css          Theme tokens (colors, fonts, spacing)
public/                      Static assets (avatar, icons, résumé PDF)
```

## Editing content

Almost everything that renders is driven by the single `profile` entry in
`src/content/profile/index.ts`. Update that file to change the site's copy,
links, résumé data, and the beer-fund buttons — no page markup edits needed.

The `site` URL in `astro.config.mjs` is the canonical origin used for
`<link rel="canonical">` and Open Graph / Twitter card URLs.
