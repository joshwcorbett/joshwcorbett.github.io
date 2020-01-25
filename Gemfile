source "https://rubygems.org"

gem "jekyll", "~> 4.0.0"

group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"
  gem 'sprockets-sass', '~> 1.3', '>= 1.3.1'
  gem 'jekyll-sitemap', '~> 1.4'
  gem 'jekyll-minifier', '~> 0.1.10'
  gem 'jekyll-autoprefixer'
end

install_if -> { RUBY_PLATFORM =~ %r!mingw|mswin|java! } do
  gem "tzinfo", "~> 1.2"
  gem "tzinfo-data"
end

gem "wdm", "~> 0.1.1", :install_if => Gem.win_platform?
