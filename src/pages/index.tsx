import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
// import * as sections from "../components/sections";
// import Fallback from "../components/fallback";
import SEOHead from "../components/head";

interface HomepageProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
        description: string;
        image: string;
        siteUrl: string;
      };
    };
  };
}
export default function Homepage(props: HomepageProps) {
  const { siteMetadata } = props.data.site;
  return <Layout>test</Layout>;
}

// export const Head = (props: HomepageProps) => {
//     const { siteMetadata } = props.data.site;
//     return <SEOHead {...siteMetadata} />;
// };

export const query = graphql`
  query SiteMetaData {
    site {
      siteMetadata {
        title
        description
        image
        siteUrl
      }
    }
  }
`;
