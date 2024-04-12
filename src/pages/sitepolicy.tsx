import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import SEOHead from "../components/head";
import { getSize } from "../utils/size";
import { getColor } from "../utils/color";

interface SitePolicyProps {
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

export const Head = (props: SitePolicyProps) => {
    const { siteMetadata } = props.data.site;
    const description =
        "株式会社Dopeのウェブサイトは、利用規約に同意いただいた上でご利用ください。個人情報の取り扱いには厳重な注意を払っています。詳細については、以下のポリシーをご参照ください。。";
    return (
        <SEOHead
            title={siteMetadata.title}
            description={description}
            image={siteMetadata.image}
            url={siteMetadata.siteUrl + "/sitepolicy"}
        />
    );
};

const titleClasses = `mb-4 ${getSize("large")} ${getColor("primary")}`;
const subTitleClasses = `mb-4 ${getSize("medium")} ${getColor("primary")}`;
const descriptionClasses = `mb-8 ${getSize("small")} ${getColor("primary")}`;

const ParagraphLayer = ({
    title,
    description,
}: {
    title: string;
    description: string;
}) => {
    console.log(description);
    return (
        <div className="container mx-auto my-8 px-10">
            <h2 className={subTitleClasses}>{title}</h2>

            <p
                className={descriptionClasses}
                style={{ whiteSpace: "pre-line" }}
            >
                {description}
            </p>
        </div>
    );
};

export default function SitePolicy(props: SitePolicyProps) {
    const { siteMetadata } = props.data.site;
    const values = [
        {
            title: "利用規約",
            description:
                "株式会社Dope（以下、「当社」とします）のウェブサイトをご利用いただく際には、以下の免責事項に同意していただく必要があります。当社ウェブサイトの利用は、以下の条件に従うものとします。",
        },
        {
            title: "免責事項",
            description:
                "当社ウェブサイト上の情報は、最新の注意を払って掲載しておりますが、情報の正確性、完全性、有用性について、いかなる保証もいたしません。\n当社ウェブサイトに掲載された情報によって生じた、いかなる損失や損害に対しても責任を負いません。",
        },
        {
            title: "著作権および知的財産権",
            description:
                "当社ウェブサイト上のすべてのコンテンツ（テキスト、画像、ロゴ、デザイン等）は、当社または関連する第三者が所有しています。著作権法によって認められる場合を除き、著作権者の許可なく複製、転載、改変、または利用することは禁止されています。",
        },
        {
            title: "個人情報の取り扱い",
            description:
                "当社は、個人情報を厳重に管理し、個人情報の保護に努めます。お客様から提供いただいた個人情報は、当社のプライバシーポリシーに基づき、適切かつ安全に取り扱います。",
        },
    ];

    return (
        <Layout>
            <div className="text-center my-8">
                <h1 className={titleClasses}>サイトポリシー</h1>
            </div>
            <div className=" mx-auto max-w-screen-md">
                {values.map(({ title, description }) => (
                    <ParagraphLayer title={title} description={description} />
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
            }
        }
    }
`;
