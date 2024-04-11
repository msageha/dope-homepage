import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/Layout";
import SEOHead from "../components/head";
import { StaticImage } from "gatsby-plugin-image";
import { getSize } from "../utils/size";
import { getColor } from "../utils/color";
import { IGatsbyImageData } from "gatsby-plugin-image";
import { GatsbyImage } from "gatsby-plugin-image";

interface HomepageProps {
    data: {
        site: {
            siteMetadata: {
                title: string;
                description: string;
                image: string;
            };
        };
        ai: {
            childImageSharp: {
                gatsbyImageData: IGatsbyImageData;
            };
        };
        it: {
            childImageSharp: {
                gatsbyImageData: IGatsbyImageData;
            };
        };
        system: {
            childImageSharp: {
                gatsbyImageData: IGatsbyImageData;
            };
        };
    };
}

const titleClasses = `mb-4 ${getSize("large")} ${getColor("primary")}`;
const subTitleClasses = `mb-4 ${getSize("medium")} ${getColor("primary")}`;
const descriptionClasses = `mb-8 ${getSize("small")} ${getColor("primary")}`;

const ParagraphLayer = ({
    title,
    description,
    image,
}: {
    title: string;
    description: string;
    image: IGatsbyImageData;
}) => {
    return (
        <div className="container flex my-8 px-10">
            <div className="w-full md:w-1/3 ml-auto px-4">
                <GatsbyImage image={image} alt={title} />
            </div>
            <div className="w-full md:w-2/3 ml-auto px-4">
                <h2 className={subTitleClasses}>{title}</h2>
                <p
                    className={descriptionClasses}
                    style={{ whiteSpace: "pre-line" }}
                >
                    {description}
                </p>
            </div>
        </div>
    );
};

export default function Order(props: HomepageProps) {
    const { siteMetadata } = props.data.site;
    const aiImage = props.data.ai.childImageSharp.gatsbyImageData;
    const itImage = props.data.it.childImageSharp.gatsbyImageData;
    const systemImage = props.data.system.childImageSharp.gatsbyImageData;
    const values = [
        {
            title: "AIソリューション",
            description:
                "AI研究者・専門家による御社のサービスに沿ったAIシステム設計、開発",
            image: aiImage,
        },
        {
            title: "ITコンサルティング・データサイエンス",
            description: "ITやデータを活用した課題解決、サービス最適化",
            image: itImage,
        },
        {
            title: "Webサイト、スマホアプリ開発",
            description:
                "ユーザビリティを考慮しニーズに合わせたWebサイト、スマホアプリ開発",
            image: systemImage,
        },
    ];

    return (
        <Layout>
            <div className="text-center my-8">
                <h1 className={titleClasses}>受注開発</h1>
            </div>
            <div className=" mx-auto max-w-screen-md">
                {values.map(({ title, description, image }) => (
                    <ParagraphLayer
                        title={title}
                        description={description}
                        image={image}
                    />
                ))}
            </div>
        </Layout>
    );
}

export const query = graphql`
    query SiteMetaData {
        site {
            siteMetadata {
                title
                description
                image
            }
        }
        ai: file(relativePath: { eq: "images/ai.png" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        it: file(relativePath: { eq: "images/it.png" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        system: file(relativePath: { eq: "images/system.png" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
    }
`;
