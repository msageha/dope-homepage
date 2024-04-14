// src/components/footer.tsx
import * as React from 'react';
import { graphql } from 'gatsby';
import { getSize } from '@/utils/size';

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
            <p
                className={`text-white md:flex md:justify-between ${getSize('small')}`}
            >
                <p>
                    <a href="/sitepolicy">免責事項</a>
                </p>
                <p>
                    &copy; 2023 <a href="/">{companyName} </a>All rights
                    reserved.
                </p>
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
