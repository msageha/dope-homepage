import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '@/components/Layout';
import SEOHead from '@/components/head';
import { getColor } from '@/utils/color';
import { getSize } from '@/utils/size';

interface HomepageProps {
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

export const Head = (props: HomepageProps) => {
    const { siteMetadata } = props.data.site;
    const description =
        '株式会社Dopeは、先進のデータ駆動技術を活用し、お客様のビジネスを効果的に支援します。革新的なアプローチにより、パフォーマンス最適化や事業成長を促進し、ニーズに合わせたカスタムソリューションを提供します。データサイエンスとテクノロジーを融合し、お客様の可能性を最大限に引き出します。';
    return (
        <SEOHead
            title={siteMetadata.title}
            description={description}
            image={siteMetadata.image}
            url={siteMetadata.siteUrl}
        />
    );
};

const titleClasses = `mb-4 ${getSize('large')} ${getColor('primary')}`;
const subTitleClasses = `mb-4 ${getSize('medium')} ${getColor('primary')}`;
const descriptionClasses = `mb-8 ${getSize('small')} ${getColor('primary')}`;

const CompanyMission = () => {
    const description =
        '　私たちの会社は、最新のデータ駆動型技術を活用し、お客様のビジネスを効果的にサポートします。データから導き出される革新的なアプローチにより、パフォーマンスの最適化や事業の成長を促進し、エクセレンスを切り拓きます。人工知能を中心に据え、お客様のニーズに合わせたカスタムソリューションの提供やビジネスのデータ駆動型意思決定の支援を行います。\n　私たちは、データサイエンスとテクノロジーの力で、お客様が持つ可能性を最大限に引き出すお手伝いをいたします。';

    return (
        <div className="container mx-auto my-8 px-10">
            <h1 className={titleClasses}>Mission</h1>
            <p
                className={descriptionClasses}
                style={{ whiteSpace: 'pre-line' }}
            >
                {description}
            </p>
        </div>
    );
};

const CompanyValues = () => {
    const values = [
        {
            title: 'Discover Innovation',
            description:
                'データを使ったイノベーションの発見、新しい可能性を提供',
        },
        {
            title: 'Optimize Performance',
            description:
                '最適化されたパフォーマンスにより、効率的で高い業績を達成',
        },
        {
            title: 'Pioneer Excellence',
            description: '卓越性を追求し、ビジネスにおいて先駆的な存在となる',
        },
        {
            title: 'Empower Growth',
            description: '成長を促進し、お客様の事業を力強くサポート',
        },
    ];

    return (
        <div className="container mx-auto my-8 px-10">
            <h1 className={titleClasses}>Values</h1>

            <p className={descriptionClasses}>
                　我々はDopeという社名の４つの頭文字を使った企業バリューを掲げています。
                <br />
                <span className="font-semibold">Discover（発見する）</span>、
                <span className="font-semibold">Optimize（最適化する）</span>、
                <span className="font-semibold">Pioneer（先駆ける）</span>、
                <span className="font-semibold">Empower（力を与える）</span>
                の4つの価値を象徴しています。これらの価値を大切にし、世の中に最高のサービスを提供することをお約束します。
            </p>
            <ul className="mb-8">
                {values.map((policy, index) => (
                    <li key={index}>
                        <p className={`mb-2 italic ${subTitleClasses}`}>
                            ・
                            <span className="font-bold">{policy.title[0]}</span>
                            {policy.title.substring(1)}
                        </p>
                        <p className={`mb-6 ${descriptionClasses}`}>
                            {policy.description}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default function Homepage(props: HomepageProps) {
    const { siteMetadata } = props.data.site;

    return (
        <Layout>
            <div className="mx-auto max-w-screen-md">
                <CompanyMission />
                <CompanyValues />
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
                siteUrl
            }
        }
    }
`;
