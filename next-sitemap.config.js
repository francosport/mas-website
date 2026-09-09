/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.metroappliances.net",
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
  exclude: [],
  additionalPaths: async (config) => {
    const services = [
      "refrigerator-repair",
      "washer-repair",
      "dryer-repair",
      "range-oven-repair",
      "cooktop-stove-repair",
      "dishwasher-repair",
      "garbage-disposal",
      "dryer-vent-cleaning",
    ];

    const locations = [
      "mitchellville",
      "bowie",
      "clinton",
      "upper-marlboro",
      "waldorf",
      "washington-dc",
      "largo",
      "riverdale",
      "silver-spring",
      "glenarden",
      "lanham",
      "hyattsville",
      "capitol-heights",
      "district-heights",
      "suitland",
      "college-park",
      "seat-pleasant",
    ];

    const servicePaths = services.map((slug) => ({
      loc: `/services/${slug}`,
      changefreq: "monthly",
      priority: 0.8,
    }));

    // Top 10 priority locations get highest priority
    const priorityLocations = locations.slice(0, 10).map((slug) => ({
      loc: `/service-areas/${slug}`,
      changefreq: "monthly",
      priority: 0.9,
    }));

    const standardLocations = locations.slice(10).map((slug) => ({
      loc: `/service-areas/${slug}`,
      changefreq: "monthly",
      priority: 0.7,
    }));

    return [...servicePaths, ...priorityLocations, ...standardLocations];
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    additionalSitemaps: [],
  },
  transform: async (config, path) => {
    // Homepage gets highest priority
    if (path === "/") {
      return { loc: path, changefreq: "weekly", priority: 1.0, lastmod: new Date().toISOString() };
    }
    // Services and areas index
    if (path === "/services" || path === "/service-areas") {
      return { loc: path, changefreq: "weekly", priority: 0.9, lastmod: new Date().toISOString() };
    }
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: new Date().toISOString(),
    };
  },
};
