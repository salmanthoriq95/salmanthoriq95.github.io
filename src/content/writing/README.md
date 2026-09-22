# Writing

Only Markdown and MDX files inside `publish/` are loaded by Astro and shown on
the website. Files inside `private/` stay outside the generated website.

Because this repository is public, `private/` is **not secret storage**. Never
put passwords, access tokens, private keys, or genuinely sensitive information
there. Use a private repository or a local ignored directory for those.

Folder names below `publish/` become hierarchical topics automatically:

```text
publish/programming/algorithms/fundamentals/binary-search.mdx
```

The example above creates the topics `Programming`, `Algorithms`, and
`Fundamentals`, plus the article route ending in `/binary-search`.

Use this frontmatter for a new article:

```yaml
---
title: "Article title"
description: "A short summary of the article."
publishedAt: 2026-09-21
draft: false
featured: false
---
```

Set `draft: true` to keep a file in `publish/` without generating a public
page. Set `featured: true` to also show the article in the featured section on
the Writing page; it will remain available in the complete archive. All public
articles and interface copy are written in English.
