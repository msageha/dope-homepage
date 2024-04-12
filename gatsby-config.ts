import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Dope, inc.`,
    siteUrl: `https://www.yourdomain.tld`,
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
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    `gatsby-plugin-sitemap`,
  ],
}

export default config
