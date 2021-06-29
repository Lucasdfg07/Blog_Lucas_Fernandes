# Set the host name for URL creation
SitemapGenerator::Sitemap.default_host = "https://lucas-dev.com"

SitemapGenerator::Sitemap.create do
  add posts_path, :priority => 0.7, :changefreq => 'daily'
  Post.all.each do |post|
    add post_path(post), :lastmod => post.updated_at
  end
end

SitemapGenerator::Sitemap.ping_search_engines