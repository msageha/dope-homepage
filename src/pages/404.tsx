import * as React from 'react';
import { HeadFC, Link, PageProps } from 'gatsby';
import { graphql } from 'gatsby';
import SEOHead from '@/components/head';

interface NotFoundProps {
    data: {
        site: {
            siteMetadata: {
                siteUrl: string;
            };
        };
    };
}

const NotFoundPage: React.FC<PageProps> = () => {
    return (
        <main className="text-gray-900 p-24 font-sans">
            <h1 className="mt-0 mb-16 max-w-xs text-4xl font-bold">
                Page not found
            </h1>
            <p className="mb-12">
                Sorry, we couldn’t find what you were looking for.
                <br />
                <Link to="/" className="text-blue-600 underline">
                    Go home
                </Link>
                .
            </p>
        </main>
    );
};

export default NotFoundPage;

export const Head = (props: NotFoundProps) => {
    const { siteMetadata } = props.data.site;
    return (
        <SEOHead
            title="404: Not Found"
            description={undefined}
            image={undefined}
            url={siteMetadata.siteUrl}
        />
    );
};

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
