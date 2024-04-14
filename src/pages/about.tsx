import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '@/components/Layout';
import SEOHead from '@/components/head';
import { getColor } from '@/utils/color';
import { getSize } from '@/utils/size';

interface AboutProps {
    data: {
        site: {
            siteMetadata: {
                title: string;
                image: string;
                siteUrl: string;
            };
        };
    };
}

export const Head = (props: AboutProps) => {
    const { siteMetadata } = props.data.site;
    const description =
        '株式会社Dopeは、2023年11月22日に設立されたIT企業です。ITシステム開発、データ解析、コンサルティング業務を専門としています。革新的なソリューションを提供し、お客様のビジネスをサポートします。';
    return (
        <SEOHead
            title={siteMetadata.title}
            description={description}
            image={siteMetadata.image}
            url={siteMetadata.siteUrl + '/about'}
        />
    );
};

const titleClasses = `mb-4 ${getSize('large')} ${getColor('primary')}`;

const descriptionClasses = `mb-8 px-6 py-6 ${getSize('medium')} ${getColor(
    'primary',
)}`;

const CompanyInfo = () => {
    const companyData: {
        key: string;
        value: string;
    }[] = [
        {
            key: '社名',
            value: '株式会社 Dope',
        },
        {
            key: '設立日',
            value: '2023年11月22日',
        },
        {
            key: '資本金',
            value: '100万円',
        },
        {
            key: '事業内容',
            value: 'ITシステム開発、データ解析、コンサルティング業務',
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

export default function About(props: AboutProps) {
    const { siteMetadata } = props.data.site;

    return (
        <Layout>
            <CompanyInfo />
        </Layout>
    );
}

export const query = graphql`
    query SiteMetaData {
        site {
            siteMetadata {
                title
                image
                siteUrl
            }
        }
    }
`;
