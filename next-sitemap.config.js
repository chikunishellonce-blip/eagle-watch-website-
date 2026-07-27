/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://www.eaglewatchsecurity.co.zw",
  generateRobotsTxt: true,
  changefreq: "monthly",
  priority: 0.7,
};
