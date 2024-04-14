import * as React from 'react';
import { graphql } from 'gatsby';

interface HeadProps {
    title: string;
    description?: string;
    image?: string;
    url: string;
    companyName?: string;
}

const Head: React.FC<HeadProps> = ({
    title,
    description,
    image,
    url,
    companyName = '株式会社 Dope',
}) => {
    return (
        <>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta property="og:locale" content="ja_JP" />
            <meta property="og:site_name" content={companyName} />
            <meta property="og:url" content={url} />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
            {description && (
                <meta
                    name="description"
                    property="og:description"
                    content={description}
                />
            )}
            {image && <meta property="og:image" content={image} />}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
                rel="preconnect"
                href="https://fonts.gstatic.com"
                crossOrigin=""
            />
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css?family=Noto+Sans+JP:wght@400;700&display=swap"
            />
        </>
    );
};

export default Head;

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
