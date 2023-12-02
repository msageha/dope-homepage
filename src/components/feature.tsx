import * as React from "react";
import { graphql, PageProps } from "gatsby";
import { GatsbyImage, IGatsbyImageData, getImage } from "gatsby-plugin-image";
import {
    Container,
    Section,
    Flex,
    Box,
    Subhead,
    Kicker,
    Text,
    ButtonList,
} from "./ui";

interface Link {
    id: string;
    href: string;
    text: string;
}

interface Image {
    id: string;
    gatsbyImageData: IGatsbyImageData;
    alt: string;
}

export interface FeatureProps extends PageProps {
    kicker?: string;
    heading: string;
    text: string;
    links: Link[];
    image?: Image;
    flip?: boolean;
}

const Feature: React.FC<FeatureProps> = (props) => {
    return (
        <Section padding={4} background="muted">
            <Container>
                <Flex gap={4} variant="responsive">
                    <Box width="half" order={props.flip ? 1 : undefined}>
                        {props.image && (
                            <GatsbyImage
                                alt={props.image.alt}
                                image={getImage(props.image.gatsbyImageData)!}
                            />
                        )}
                    </Box>
                    <Box width="half">
                        <Subhead>
                            {props.kicker && <Kicker>{props.kicker}</Kicker>}
                            {props.heading}
                        </Subhead>
                        <Text variant="lead">{props.text}</Text>
                        <ButtonList links={props.links} />
                    </Box>
                </Flex>
            </Container>
        </Section>
    );
};

export default Feature;

export const query = graphql`
    fragment HomepageFeatureContent on HomepageFeature {
        id
        kicker
        heading
        text
        links {
            id
            href
            text
        }
        image {
            id
            gatsbyImageData
            alt
        }
    }
`;
