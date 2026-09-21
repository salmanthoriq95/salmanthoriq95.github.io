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

- `src/data/experience.ts`: all localized Experience content. Homepage previews
  and the Experience page must derive from this file.
- `src/data/projects.ts`: all localized Project content, stacks, featured state,
  slugs, and optional media. Project routes and homepage previews derive from it.
- `src/content.config.ts`: Writing collection schema. Only `publish/` is loaded.
- `src/content/writing/publish/`: public `.md` and `.mdx` articles.
- `src/content/writing/private/`: notes excluded from the generated website.
  This is not secret storage because the repository itself is public.
- `src/lib/writing.ts`: article/topic routing, folder labels, filtering, date
  formatting, and translation lookup.
- `src/i18n/ui.ts`: localized interface copy.
- `src/i18n/index.ts`: supported locales and localized path construction.
- `src/layouts/BaseLayout.astro`: canonical metadata, alternate-language links,
  Open Graph metadata, favicon, and sitemap discovery.
- `src/styles/global.css`: global design tokens and reduced-motion behavior.

## Routing and i18n

Indonesian (`id`) is the default locale and has no prefix. English (`en`) uses
the `/en` prefix. Route wrappers under `src/pages/en/` should remain equivalent
to their Indonesian counterparts.

When changing visible interface copy:

1. Update both locale objects in `src/i18n/ui.ts` or the relevant localized data
   object.
2. Build links with `getLocalizedPath()` rather than manually adding `/en`.
3. Preserve the current locale through index, topic, detail, header, footer, and
   404 navigation.
4. Keep titles, descriptions, aria labels, and empty states localized too.

An article's `language` describes the article body, not the interface locale.
Articles can be Indonesian-only, English-only, or paired using the same
`translationKey`.

## Writing content model

Folder segments below `publish/` are topic hierarchy. Do not replace this with
manual tags. Adding a file must automatically update the article index, topic
pages, homepage preview, related content, and sitemap.

Required frontmatter:

```yaml
title: "Article title"
description: "Short summary"
publishedAt: 2026-09-22
language: id
draft: false
featured: false
```

Optional fields are `updatedAt` and `translationKey`.

- `draft: true`: exclude from public pages and generated routes.
- `featured: true`: show in the featured Writing section while keeping the item
  in the complete archive.
- `translationKey`: pair two language versions even when filenames differ.

If a new folder slug needs a deliberate localized label, update `topicLabels`
in `src/lib/writing.ts`. Unknown folder names intentionally fall back to a
title-cased label.

## Experience and project data

Experience and Projects are intentionally hardcoded typed data, not content
collections. Always add or revise both `id` and `en` content.

- Experience anchors are derived with `getExperienceId(company)`. Homepage
  experience cards link to these anchors; preserve this connection.
- Project `slug` values are public URLs and should be treated as stable.
- Project `featured` controls its index grouping.
- Project `media` supports multiple horizontally scrollable images. Every media
  item needs localized alt text; captions are optional.

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

- Use `Header.astro` and `Footer.astro` for standard pages.
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
has Indonesian/English annotations and excludes `/404`. `src/pages/robots.txt.ts`
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
- Internationalization: https://docs.astro.build/en/guides/internationalization/
- Sitemap integration: https://docs.astro.build/en/guides/integrations-guide/sitemap/
