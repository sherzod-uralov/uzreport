/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://academy.nordicuniversity.org",
  generateRobotsTxt: true,
  changefreq: "daily",
  priority: 0.7,
  sitemapSize: 7000,
  additionalPaths: async (config) => {
    return [
      { loc: "/uz", changefreq: "daily", priority: 0.7 },
      { loc: "/ru", changefreq: "daily", priority: 0.7 },
      { loc: "/en", changefreq: "daily", priority: 0.7 },
    ];
  },
};
