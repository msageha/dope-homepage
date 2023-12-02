import * as React from "react";
import { graphql } from "gatsby";
import {
    Container,
    Section,
    FlexList,
    Box,
    Icon,
    Heading,
    Text,
    Space,
} from "./ui";
import { GatsbyImageProps } from "gatsby-plugin-image";

interface BenefitProps {
    image?: {
        alt: string;
        gatsbyImageData: GatsbyImageProps;
    };
    heading: string;
    text: string;
}

function Benefit({ image, heading, text }: BenefitProps) {
    return (
        <Box as="li" width="third" padding={4} paddingY={3}>
            {image && (
                <Icon
                    alt={image.alt}
                    image={image.gatsbyImageData}
                    size="small"
                />
            )}
            <Space size={2} />
            <Heading variant="subheadSmall">{heading}</Heading>
            <Text>{text}</Text>
        </Box>
    );
}

interface BenefitListProps {
    heading?: string;
    text?: string;
    content: BenefitProps[];
}

const BenefitList: React.FC<BenefitListProps> = ({
    heading,
    text,
    content,
}) => {
    return (
        <Section>
            <Container>
                <Box center>
                    {heading && <Heading>{heading}</Heading>}
                    {text && <Text variant="lead">{text}</Text>}
                </Box>
                <Space size={3} />
                <FlexList gutter={3} variant="start" responsive wrap>
                    {content.map((benefit) => (
                        <Benefit key={benefit.heading} {...benefit} />
                    ))}
                </FlexList>
            </Container>
        </Section>
    );
};

export default BenefitList;

export const query = graphql`
    fragment HomepageBenefitListContent on HomepageBenefitList {
        id
        heading
        text
        content {
            id
            heading
            text
            image {
                id
                gatsbyImageData
                alt
            }
        }
    }
`;
