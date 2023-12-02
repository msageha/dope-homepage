import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Dope, inc.`,
    siteUrl: `https://www.yourdomain.tld`,
    author: `mzk`,
    description: `Welcome to "Dope, inc." homepage`,
  },
  graphqlTypegen: true,
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    "gatsby-plugin-image",
  ],
}

export default config
