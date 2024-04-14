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

const pageStyles = {
    color: '#232129',
    padding: '96px',
    fontFamily: '-apple-system, Roboto, sans-serif, serif',
};
const headingStyles = {
    marginTop: 0,
    marginBottom: 64,
    maxWidth: 320,
};

const paragraphStyles = {
    marginBottom: 48,
};
const codeStyles = {
    color: '#8A6534',
    padding: 4,
    backgroundColor: '#FFF4DB',
    fontSize: '1.25rem',
    borderRadius: 4,
};

const NotFoundPage: React.FC<PageProps> = () => {
    return (
        <main style={pageStyles}>
            <h1 style={headingStyles}>Page not found</h1>
            <p style={paragraphStyles}>
                Sorry 😔, we couldn’t find what you were looking for.
                <br />
                {process.env.NODE_ENV === 'development' ? (
                    <>
                        <br />
                        Try creating a page in{' '}
                        <code style={codeStyles}>src/pages/</code>.
                        <br />
                    </>
                ) : null}
                <br />
                <Link to="/">Go home</Link>.
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
