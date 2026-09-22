# Salman Thoriq — Personal Archive

Personal portfolio and writing archive for Salman Thoriq Al Farisyi. The site
collects professional experience, selected projects, and long-form notes in a
single English-language website.

Live site: [salmanthoriq95.github.io](https://salmanthoriq95.github.io)

## What is included

- Experience timeline sourced from a typed TypeScript data file.
- Project archive with featured projects and detail pages generated from slugs.
- Markdown and MDX writing archive with folder-derived topics and subtopics.
- Featured writing, topic breadcrumbs, and related articles.
- Responsive, mobile-first layout with reduced-motion support.
- Canonical URLs, XML sitemap, and `robots.txt`.
- Static deployment to GitHub Pages without a CMS or database.

## Technology

- [Astro](https://astro.build/) for static site generation and routing.
- [Astro Content Collections](https://docs.astro.build/en/guides/content-collections/)
  for writing validation and loading.
- [MDX](https://docs.astro.build/en/guides/integrations-guide/mdx/) for articles.
- TypeScript for experience and project data.
- Plain scoped CSS and browser JavaScript; no client UI framework.
- GitHub Actions and GitHub Pages for deployment.

## Project structure

```text
src/
├── components/          Reusable page sections and complete page compositions
├── content/writing/
│   ├── publish/         Public Markdown and MDX articles
│   └── private/         Personal notes excluded from the Astro collection
├── data/
│   ├── experience.ts    Experience timeline
│   ├── projects.ts      Project archive and project media
│   ├── site.ts          Shared identity, contact, greeting, and social data
│   └── ui.ts            Shared English interface copy
├── layouts/             Shared document metadata and standard site shell
├── lib/                 Writing helpers and shared static-path generators
├── pages/               Static and generated public routes
├── scripts/             Shared, framework-free browser interactions
└── styles/global.css    Design tokens and global foundations
```

The website and all public articles use English without a locale URL prefix.

## Local development

Requirements:

- Node.js 22 or a compatible current LTS release.
- npm.

Install the dependencies:

```sh
npm install
```

Start Astro in background mode:

```sh
npx astro dev --background
```

Manage the background server with:

```sh
npx astro dev status
npx astro dev logs
npx astro dev stop
```

Other useful commands:

| Command                  | Action                                 |
| ------------------------ | -------------------------------------- |
| `npm run build`          | Build the production site into `dist/` |
| `npm run preview`        | Preview the production build locally   |
| `npm run astro -- check` | Run Astro and TypeScript diagnostics   |

## Managing content

All visible copy is version-controlled rather than embedded in page components.
Shared interface text lives in `src/data/ui.ts`; section-specific Experience
and Project text stays beside its typed data; folder labels are derived
automatically in `src/lib/writing.ts`; and identity, contact, greeting,
location, and social data live in `src/data/site.ts`.

### Experience

Edit [`src/data/experience.ts`](src/data/experience.ts). Add the corresponding
content there. The homepage experience carousel and the Experience page read
from this same source.

### Projects

Edit [`src/data/projects.ts`](src/data/projects.ts). Every project needs a unique
`slug`, English `content`, its stack, and a `featured` value. Project detail
routes are generated automatically at `/projects/<slug>`.

Optional project images are declared through the `media` field. Store the
actual assets in a publicly available location and provide alternative text
for every image.

### Writing

Only `.md` and `.mdx` files inside `src/content/writing/publish/` are loaded and
published. Folder names become hierarchical topics automatically. For example:

```text
publish/programming/algorithms/fundamentals/binary-search.mdx
```

creates the topic trail `Programming / Algorithms / Fundamentals`.

Use this frontmatter for new articles:

```yaml
---
title: "Article title"
description: "A short summary of the article."
publishedAt: 2026-09-22
# updatedAt: 2026-09-23
draft: false
featured: false
---
```

- `draft: true` keeps an article out of generated public routes.
- `featured: true` also places it in the featured section on the Writing page.

See [`src/content/writing/README.md`](src/content/writing/README.md) for the
short content-specific guide.

The `private/` folder is excluded from the public site, but this repository is
public. Never store credentials, secrets, or genuinely sensitive notes there.

## SEO and indexing

The production origin is configured in `astro.config.mjs`. A production build
generates:

- `/sitemap-index.xml`
- `/sitemap-0.xml`
- `/robots.txt`

The sitemap contains the static and generated routes and excludes the 404
page. `BaseLayout.astro` provides canonical, Open Graph, description, and
sitemap metadata.

After deployment, submit `sitemap-index.xml` in Google Search Console.

## Deployment

The workflow in `.github/workflows/deploy.yml` builds and deploys the site to
GitHub Pages whenever a commit is pushed to `master`. Work done on another
branch must be merged into `master` before it reaches production.

The deployment uses `npm ci` followed by `npm run build`, so keep
`package-lock.json` synchronized with `package.json`.
