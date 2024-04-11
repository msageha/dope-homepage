import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import SEOHead from "../components/head";
import { getSize } from "../utils/size";
import { getColor } from "../utils/color";

interface HomepageProps {
    data: {
        site: {
            siteMetadata: {
                companyName: string;
                title: string;
                description: string;
                image: string;
                siteUrl: string;
            };
        };
    };
}

const titleClasses = `mb-4 ${getSize("large")} ${getColor("primary")}`;

const descriptionClasses = `mb-8 px-6 py-6 ${getSize("small")} ${getColor(
    "primary"
)}`;

const CompanyInfo = ({ companyName }: { companyName: string }) => {
    const companyData: {
        key: string;
        value: string;
    }[] = [
        {
            key: "社名",
            value: "株式会社 Dope",
        },
        {
            key: "設立日",
            value: "2023年11月22日",
        },
        {
            key: "資本金",
            value: "100万円",
        },
        {
            key: "事業内容",
            value: "ITシステム開発、データ解析、コンサルティング業務",
        },
    ];

    return (
        <div className="max-w-3xl mx-auto py-10">
            <h1 className={titleClasses}>会社概要</h1>
            <table className="min-w-full divide-y divide-gray-200">
                <tbody className="divide-y divide-gray-400">
                    {companyData.map(({ key, value }) => (
                        <tr key={key}>
                            <td className={descriptionClasses}>{key}</td>
                            <td className={descriptionClasses}>{value}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default function Homepage(props: HomepageProps) {
    const { siteMetadata } = props.data.site;

    return (
        <Layout>
            <>
                <CompanyInfo companyName={siteMetadata.companyName} />
            </>
        </Layout>
    );
}

export const query = graphql`
    query SiteMetaData {
        site {
            siteMetadata {
                companyName
                title
                description
                image
                siteUrl
            }
        }
    }
`;
