# Agent context

This repository is Salman Thoriq Al Farisyi's personal portfolio and writing
archive. It is an Astro static site deployed to GitHub Pages. The owner prefers
hardcoded, version-controlled content and explicitly does not want a CMS.

Communicate with the owner in Indonesian unless they use another language.
Keep implementation names, code, and technical documentation in clear English.

## Product structure

The public site has three primary areas:

- Experience: professional history and selected work.
- Projects: an index plus one generated detail route per project.
- Writing: Markdown/MDX articles organized by folder-derived topics.

Contact information lives in the shared footer rather than a separate page.
There is also a themed 404 page.

## Technical baseline

- Astro 7 static output.
- TypeScript with strict Astro checks.
- MDX and Astro Content Collections for writing.
- Plain Astro components, scoped CSS, and small browser scripts.
- No React, Vue, Svelte, Tailwind, CMS, API server, or database.
- `site` is `https://salmanthoriq95.github.io`.
- GitHub Actions deploys only pushes to `master`.

Do not introduce a framework, CMS, CSS system, or runtime service unless the
owner explicitly requests it.

## Source-of-truth map

- `src/data/experience.ts`: all Experience content. Homepage previews
  and the Experience page must derive from this file.
- `src/data/projects.ts`: all Project content, stacks, featured state,
  slugs, and optional media. Project routes and homepage previews derive from it.
- `src/data/site.ts`: shared identity, contact, location, greeting, and social
  data used across the shell and homepage.
- `src/content.config.ts`: Writing collection schema. Only `publish/` is loaded.
- `src/content/writing/publish/`: public `.md` and `.mdx` articles.
- `src/content/writing/private/`: notes excluded from the generated website.
  This is not secret storage because the repository itself is public.
- `src/lib/writing.ts`: article/topic routing, folder labels, filtering, and date
  formatting.
- `src/data/ui.ts`: all shared English interface copy.
- `src/layouts/BaseLayout.astro`: canonical metadata,
  Open Graph metadata, favicon, and sitemap discovery.
- `src/layouts/SiteLayout.astro`: standard page shell with the shared header and
  footer. Use it for normal public pages.
- `src/lib/staticPaths.ts`: shared generators for dynamic routes.
- `src/scripts/`: shared browser interactions for details and horizontal drag.
- `src/styles/global.css`: global design tokens and reduced-motion behavior.

## Language and routing

The website and all public articles use English only. Routes do not use a
locale prefix.

When changing visible interface copy:

1. Update `src/data/ui.ts` or the relevant data object.
2. Use direct root-relative links such as `/projects` and `/writing`.
3. Keep titles, descriptions, aria labels, and empty states in English too.

## Writing content model

Folder segments below `publish/` are topic hierarchy. Do not replace this with
manual tags. Adding a file must automatically update the article index, topic
pages, homepage preview, related content, and sitemap.

Required frontmatter:

```yaml
title: "Article title"
description: "Short summary"
publishedAt: 2026-09-22
draft: false
featured: false
```

The optional field is `updatedAt`.

- `draft: true`: exclude from public pages and generated routes.
- `featured: true`: show in the featured Writing section while keeping the item
  in the complete archive.

Folder names are displayed through the automatic title-cased fallback in
`src/lib/writing.ts`; topic labels are not localized separately.

## Experience and project data

Experience and Projects are intentionally hardcoded typed data, not content
collections. Keep all public content in English.

- Experience anchors are derived with `getExperienceId(company)`. Homepage
  experience cards link to these anchors; preserve this connection.
- Project `slug` values are public URLs and should be treated as stable.
- Project `featured` controls its index grouping.
- Project `media` supports multiple horizontally scrollable images. Every media
  item needs alt text; captions are optional.

## Design system and interaction rules

The visual direction is editorial, minimal, mobile-first, and intentionally
high-contrast. Preserve the existing design language unless a redesign is
explicitly requested.

Core tokens live in `src/styles/global.css`:

- paper `#f2f2ef`
- ink `#0a0a0a`
- accent red-orange `#ff4c2e`
- night purple-black `#281e2b`
- electric pink `#e879f1`
- shared content width `52rem`

Important conventions:

- Use `SiteLayout.astro` for standard pages; it owns `Header.astro` and
  `Footer.astro`.
- Use `HeroScrollCue.astro` for top-level hero-to-body navigation.
- Keep the square red period as the primary identity accent.
- Top-level hero sections do not use eyebrow labels.
- Article/topic breadcrumbs are clickable and may use eyebrow styling.
- Writing/archive rows use an asterisk accent rather than ordinal numbering.
- Horizontal media or card rows must remain manually scrollable by mouse and
  touch. Do not add automatic scrolling unless explicitly requested.
- Motion must be smooth, avoid layout jumps, and respect
  `prefers-reduced-motion`.
- Start styling from mobile and add desktop behavior with min-width queries.
- Reuse existing components and tokens before introducing near-duplicates.

## SEO

`@astrojs/sitemap` generates `sitemap-index.xml` and chunk files. The sitemap
excludes `/404`. `src/pages/robots.txt.ts`
allows crawling and points to the sitemap. The 404 page must remain `noindex`.

If the production domain changes, update both:

- `site` in `astro.config.mjs`
- the fallback site in `src/pages/robots.txt.ts`

Then verify canonical URLs, alternate links, sitemap output, and robots output
with a production build.

## Development commands

Install dependencies with `npm install`.

When starting the dev server, always use background mode:

```sh
npx astro dev --background
```

Manage it with:

```sh
npx astro dev status
npx astro dev logs
npx astro dev stop
```

Do not start a second dev server when one is already running.

## Verification

Use the smallest check proportionate to the change:

- Content/CSS-only change: `git diff --check` and, when relevant,
  `npm run astro -- check`.
- Component, TypeScript, route, or collection change:
  `npm run astro -- check`.
- Routing, content generation, dependency, SEO, or deployment change:
  `npm run build` and inspect the relevant files in `dist/`.

There is currently no separate unit-test suite. Do not claim browser behavior
was visually tested unless it actually was.

## Git and deployment

- Preserve unrelated user changes in a dirty worktree.
- Do not commit or push unless explicitly requested.
- The production workflow runs only from `master`; pushing another branch does
  not deploy the site.
- Keep `package-lock.json` synchronized whenever dependencies change.
- Do not commit `dist/`, `.astro/`, secrets, or environment files.

## Documentation

Primary Astro documentation: https://docs.astro.build

Consult the relevant official guide before changing these areas:

- Routing: https://docs.astro.build/en/guides/routing/
- Astro components: https://docs.astro.build/en/basics/astro-components/
- Content collections: https://docs.astro.build/en/guides/content-collections/
- Styling: https://docs.astro.build/en/guides/styling/
- Sitemap integration: https://docs.astro.build/en/guides/integrations-guide/sitemap/
