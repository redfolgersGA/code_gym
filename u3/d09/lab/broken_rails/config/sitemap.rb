# Set the host name for URL creation
SitemapGenerator::Sitemap.default_host = ""
#
# # pick a place safe to write the files
SitemapGenerator::Sitemap.public_path = 'tmp/'
#
# # store on S3 using Fog
SitemapGenerator::Sitemap.adapter = SitemapGenerator::S3Adapter.new
#
# # inform the map cross-linking where to find the other maps
SitemapGenerator::Sitemap.sitemaps_host = "http://#{ENV['FOG_DIRECTORY']}.s3.amazonaws.com/"
#
# # pick a namespace within your bucket to organize your maps
SitemapGenerator::Sitemap.sitemaps_path = 'sitemaps/'

SitemapGenerator::Sitemap.create do
  add '/'
  add '/about'
  add '/visual'
  Post.find_each do |post|
    add post_path(post), lastmod: post.updated_at
  end
end
