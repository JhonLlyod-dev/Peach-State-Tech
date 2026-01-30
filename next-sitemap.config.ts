import type { IConfig } from 'next-sitemap';

const config: IConfig = {
  siteUrl: 'https://peachstate.tech', // your website URL
  generateRobotsTxt: true,            // generates robots.txt automatically
  sitemapSize: 5000,                  // max URLs per sitemap file
  changefreq: 'weekly',               // default change frequency
  priority: 0.7,                      // default priority
  // Optional: exclude pages you don't want indexed
  // exclude: ['/404', '/drafts/*'],
};

export default config;
