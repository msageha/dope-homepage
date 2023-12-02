import { graphql } from "gatsby";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import * as React from "react";
import {
    Box,
    ButtonList,
    Container,
    Flex,
    Heading,
    Kicker,
    Section,
    Subhead,
    Text,
} from "../components/ui";

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

interface HeroProps {
    kicker?: string;
    h1: string;
    subhead: string;
    text: string;
    links: Link[];
    image?: Image;
}

export default function Hero(props: HeroProps) {
    return (
        <Section>
            <Container>
                <Flex gap={4} variant="responsive">
                    <Box width="half">
                        {props.image && (
                            <GatsbyImage
                                alt={props.image.alt}
                                image={props.image.gatsbyImageData}
                            />
                        )}
                    </Box>
                    <Box width="half">
                        <Heading as="h1">
                            {props.kicker && <Kicker>{props.kicker}</Kicker>}
                            {props.h1}
                        </Heading>
                        <Subhead as="h2">{props.subhead}</Subhead>
                        <Text as="p">{props.text}</Text>
                        <ButtonList links={props.links} />
                    </Box>
                </Flex>
            </Container>
        </Section>
    );
}

export const query = graphql`
    fragment HomepageHeroContent on HomepageHero {
        id
        kicker
        h1: heading
        subhead
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
