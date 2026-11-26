# Changelog

All notable changes to Snow are documented here. Format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [1.0.0] - 2026-11-26

A clean-up release: Snow is now a neutral starter theme that builds on current Jekyll, with every trace of the original personal site removed.

### ⚠️ Breaking changes

- **Jekyll 4.3+ required.** A `Gemfile` now pins Jekyll and its plugins; run `bundle install` then `bundle exec jekyll serve`.
- **Config keys changed.** `enable_disqus`, `enable_adsense` and `enable_analytics` are gone. Integrations now switch on by filling in `disqus_shortname`, `adsense.client` / `adsense.slot` and `google_analytics` (GA4). Analytics and ads only load when `JEKYLL_ENV=production`.
- **`baseurl` / `url` fixed.** `baseurl` was set to a full URL, which broke every asset path. Both now default to empty; set them for your host (see README).
- **Post URLs** are now `/:title/` instead of `/:year/:month/:day/:title/`.
- **Assets moved.** `assets/bower_components/foundation` → `assets/vendor/foundation`; Sass sources moved to `_scss/` (not published).
- **Removed layouts:** `home` (homepage now uses `default`) and `post-custom` (only used by the old Typeform modal).

### ✨ New

- **Beki Ipsum sample content.** Seven demo posts — one per layout (`post`, `post-photo`, `post-photo-full`, `post-gallery`, `post-video`) plus extras for pagination — written in [Beki Ipsum](https://bekiipsum.com) dummy text.
- **Placeholder images.** Photos come from [Lorem Picsum](https://picsum.photos) (seeded, so each post keeps the same image); ad slots use [placehold.co](https://placehold.co). Featured images accept either a site path or a full URL.
- **Automatic tag list.** The topics widget is generated from the tags your posts actually use, instead of a hard-coded list.
- **Contact form** driven by `contact_form_action` (works with Formspree and similar), with an email fallback.
- **404 page**, `jekyll-feed` RSS/Atom feed and `jekyll-sitemap` sitemap.
- Proper Open Graph / Twitter card tags, `lang` attribute, and `loading="lazy"` on images.

### 🔧 Improvements

- Gallery and post-list markup consolidated into reusable includes (`gallery-feature`, `gallery-thumbs`, `post-list`, `post-footer`), cutting layout duplication.
- Archives and tag pages group posts by year with `group_by_exp` instead of fragile manual loops (the archive previously hard-coded "2016").
- All links use `relative_url` / `absolute_url`, so the theme works from a sub-path such as GitHub Pages project sites.
- Theme JavaScript moved to `assets/js/snow.js`.
- YouTube embeds use `youtube-nocookie.com` over HTTPS; Font Awesome and Google Fonts load over HTTPS.
- Checked-out theme size cut from ~58 MB to ~2 MB.

### 🐛 Fixes

- `//` comments in `style.css` silently disabled the media-query rules that followed them.
- Unquoted `a[href*=#]` selector throws in newer jQuery; smooth scroll now looks targets up safely.
- Invalid front matter in `feed.xml` and an unparseable `lastmod` date in `sitemap.xml` (both replaced by plugins).
- Unclosed `</div` tag in the archives layout; broken `nav-main-home.html` include reference.
- `paginate` was configured without the `jekyll-paginate` plugin being declared.
- Paginated pages rendered an empty `<title>`.
- Clearing lightbox no longer reloads the page on hover after closing.

### 🗑️ Removed

- Personal content: the original post, 120+ personal photos, privacy policy, logo, Disqus/AdSense/GA IDs, site verification tags, Typeform form, blogroll.
- Defunct third-party scripts: Google+, StumbleUpon, BuySellAds, SumoMe, Facebook SDK and Pixel.
- Committed build output (`_site/`, `.sass-cache/`), Compass config, Bower manifests and unused vendor files (jQuery source, Modernizr test suite, Stellar, Waypoints).
- Unused or empty includes (`banner-main`, `snippet-featured`, `snippet-social`, `snippet-subscribe`, `modal-*`, etc.) and `_data/tags.yml`.

## [0.1.0] - 2016-01-06

- Initial theme extracted from the Archon Digital site.
