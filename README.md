# tusharbabbar.github.io

Minimal Jekyll site, served by GitHub Pages. No build step to manage — push markdown, GitHub builds it.

## Structure

- `about.md` — About Me page
- `blog.md` — Blog index, grouped into General Thoughts / Ideas / Software
- `_posts/` — one file per post, filename format `YYYY-MM-DD-title.md`
- `_config.yml` — site title, nav pages, theme (`minima`)

## Writing a new post

Add a file to `_posts/` named `YYYY-MM-DD-slug.md`:

```markdown
---
layout: post
title: "Your title"
categories: [general]   # or [ideas] or [software]
---

Post content here.
```

It'll show up on `/blog/` automatically under the matching section.

## Local preview (optional)

```bash
bundle install
bundle exec jekyll serve
```

Then open http://localhost:4000

## Publishing

GitHub Pages rebuilds automatically on every push to `main`. Live at https://tusharbabbar.github.io
