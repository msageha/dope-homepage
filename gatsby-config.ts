import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Dope, inc.`,
    siteUrl: `https://dope-inc.com`,
    author: `mzk`,
    description: `Welcome to "Dope, inc." homepage`,
    image: "/images/logo.jpg",
    companyName: "Dope, inc.",
  },
  // graphqlTypegen: true,
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-S03DGSJDKT" // Google Analytics / GA
        ],
        pluginConfig: {
          head: true,
          origin: "https://dope-inc.com",
        },
      }
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    `gatsby-plugin-sitemap`,
  ],
}

export default config


