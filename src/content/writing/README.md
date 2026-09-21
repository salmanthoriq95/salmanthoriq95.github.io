# Writing

Only Markdown and MDX files inside `publish/` are loaded by Astro and shown on
the website. Files inside `private/` stay outside the generated website.

Because this repository is public, `private/` is **not secret storage**. Never
put passwords, access tokens, private keys, or genuinely sensitive information
there. Use a private repository or a local ignored directory for those.

Folder names below `publish/` become hierarchical topics automatically:

```text
publish/programming/algoritma/algoritma-dasar/binary-search.mdx
```

The example above creates the topics `Programming`, `Algoritma`, and
`Algoritma Dasar`, plus the article route ending in `/binary-search`.

Use this frontmatter for a new article:

```yaml
---
title: "Judul artikel"
description: "Ringkasan singkat artikel."
publishedAt: 2026-09-21
language: id
draft: false
featured: false
# translationKey: shared-key-for-translated-versions
---
```

Set `draft: true` to keep a file in `publish/` without generating a public
page. Use the same `translationKey` on Indonesian and English versions when
both translations exist.
