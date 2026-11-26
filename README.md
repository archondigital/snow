# Snow

A responsive Jekyll starter theme built on [Yeti](https://foundationcss.com/yeti/), the native-first successor to Foundation for Sites.

> **Yeti is in alpha** (`7.0.0-alpha.2` is vendored). Class names, attributes and tokens can still change before its first beta.

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

## Styles and scripts

No build step. Snow loads three files:

- `assets/vendor/yeti/yeti.min.css` and `yeti.min.js`: Yeti, vendored as-is with its licence and `llms.txt`.
- `assets/css/snow.css`: the theme. Brand hue, fonts and spacing are `--yeti-*` tokens on `:root`; change those before writing rules.
- `assets/js/snow.js`: the gallery lightbox, on Yeti's native `dialog`. Without JavaScript, gallery links open the full image.

Markup uses Yeti's layouts (`shell`, `center`, `stack`, `sidebar`, `grid`, `cover`, `frame`) and components (`nav`, `card`, `badge`, `pagination`, `dialog`, `field`). The reference is `assets/vendor/yeti/llms.txt` or [foundationcss.com/yeti](https://foundationcss.com/yeti/).

To update Yeti, replace the files in `assets/vendor/yeti/` with the ones from a newer release (`npm pack @foundation/yeti@next`, then copy `dist/yeti.min.*`, `dist/llms.txt` and `LICENSE`).

To check your pages against Yeti's attribute rules, build the site and run Yeti's validator from a clone of [foundation/yeti](https://github.com/foundation/yeti):

```bash
node bin/validate-html.js /path/to/snow/_site --manifest dist/yeti.manifest.json
```

## Licences

Snow's own code is yours to reuse. Yeti is under the [Functional Source License 1.1, MIT future](assets/vendor/yeti/LICENSE): free to use for any site, but not to offer as a competing framework; each release becomes MIT two years after it ships.

## Deploying to GitHub Pages

The `github-pages` gem is pinned to Jekyll 3, so deploy with the official
[Jekyll GitHub Actions workflow](https://jekyllrb.com/docs/continuous-integration/github-actions/)
(Settings → Pages → Source: GitHub Actions).

See [CHANGELOG.md](CHANGELOG.md) for what changed.
