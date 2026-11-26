# Snow

A responsive Jekyll starter theme built on [Foundation 5](https://get.foundation/sites/docs-v5/).

All sample content is [Beki Ipsum](https://bekiipsum.com) dummy text, and images come from
[Lorem Picsum](https://picsum.photos) and [placehold.co](https://placehold.co). Replace the files in
`_posts/` with your own.

## Requirements

- Ruby 3.x and Bundler
- Jekyll 4.3+ (installed via the `Gemfile`)

## Quick start

```bash
bundle install
bundle exec jekyll serve
# open http://localhost:4000
```

Production build (turns on analytics and ads if configured):

```bash
JEKYLL_ENV=production bundle exec jekyll build
```

## Configuration

Edit `_config.yml`:

| Key | Purpose |
|-----|---------|
| `url`, `baseurl` | Host and sub-path. For a GitHub Pages project site: `url: "https://<user>.github.io"`, `baseurl: "/snow"` |
| `github_username`, `twitter_username` | Footer links (blank hides them) |
| `default_image` | Social-card image for pages without a featured image |
| `google_analytics` | GA4 measurement ID (`G-…`) |
| `disqus_shortname` | Enables Disqus comments |
| `adsense.client`, `adsense.slot` | Enables the 300×250 ad unit; otherwise a placeholder shows |
| `contact_form_action` | Form endpoint for `/contact/` (e.g. Formspree) |

## Writing posts

Every post defaults to `layout: post` with comments on. Front matter the layouts understand:

```yaml
---
title: "Post title"
title_secondary: "Optional kicker"
layout: post            # post | post-photo | post-photo-full | post-gallery | post-video
excerpt: "One-line summary used on the homepage and social cards."
featured_image: https://picsum.photos/seed/my-post/1600/1067   # or /assets/images/...
featured_image_thumb: https://picsum.photos/seed/my-post/600/400
tags: [Photography, Travel]
gallery_content:        # post-photo / post-gallery / post-photo-full
  - url: https://picsum.photos/seed/my-post-1/1600/1067
    label: "Image title"
    caption: "Image caption"
video_id: aqz-KE-bpKQ   # post-video (YouTube ID)
intro_description: ""   # post-photo-full
intro_quote: ""
intro_cite: ""
---
```

Each tag needs a topic page in `topic/`:

```yaml
---
layout: blog_by_tag
tag: Travel
title: Travel
permalink: /topic/travel/
---
```

## Styles

`assets/css/app.css` is the compiled Foundation build and works as-is; site styles live in
`assets/css/style.css`. To rebuild Foundation after editing `_scss/_settings.scss`:

```bash
npx sass --no-source-map --load-path=_scss _scss/app.scss assets/css/app.css
```

## Deploying to GitHub Pages

The `github-pages` gem is pinned to Jekyll 3, so deploy with the official
[Jekyll GitHub Actions workflow](https://jekyllrb.com/docs/continuous-integration/github-actions/)
(Settings → Pages → Source: GitHub Actions).

See [CHANGELOG.md](CHANGELOG.md) for what changed.
