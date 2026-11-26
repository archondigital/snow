source "https://rubygems.org"

gem "jekyll", "~> 4.3"

group :jekyll_plugins do
  gem "jekyll-paginate", "~> 1.1"
  gem "jekyll-feed", "~> 0.17"
  gem "jekyll-sitemap", "~> 1.4"
  gem "jekyll-redirect-from", "~> 0.16"
end

# Ruby 3.x no longer bundles these; `jekyll serve` and Liquid need them.
gem "webrick", "~> 1.8"
gem "csv"
gem "base64"
gem "bigdecimal"
gem "logger"

# Windows / JRuby helpers
platforms :windows, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end
gem "wdm", "~> 0.2", platforms: [:windows]
