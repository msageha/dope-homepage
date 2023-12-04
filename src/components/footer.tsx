// src/components/footer.tsx
import * as React from "react";
import { graphql } from "gatsby";
import { getSize } from "../utils/size";

interface FooterProps {
    data: {
        site: {
            siteMetadata: {
                companyName: string;
            };
        };
    };
}

export default function Footer(props: FooterProps) {
    const companyName = props.data.site.siteMetadata.companyName;
    return (
        <footer className="bg-gray-800 p-10">
            <p className={`text-white text-center ${getSize("small")}`}>
                &copy; 2023 {companyName} All rights reserved.
            </p>
        </footer>
    );
}

export const query = graphql`
    query SiteMetaData {
        site {
            siteMetadata {
                companyName
            }
        }
    }
`;
