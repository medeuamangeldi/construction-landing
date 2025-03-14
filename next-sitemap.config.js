/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.bright-alim.com", // Replace with your website's URL
  generateRobotsTxt: true, // Generates robots.txt automatically
  changefreq: "daily",
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ["/admin", "/api"], // Exclude pages you don't want in the sitemap
};
