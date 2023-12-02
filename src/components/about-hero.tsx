import * as React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Container, Section, Text, SuperHeading } from "./ui";

interface AboutHeroProps {
    heading: string;
    text?: string;
    image?: {
        alt: string;
        gatsbyImageData: any; // Replace with the actual type of gatsbyImageData
    };
}

export default function AboutHero(props: AboutHeroProps) {
    return (
        <Section>
            <Container>
                <SuperHeading className="max-w-1108">
                    {props.heading}
                </SuperHeading>
                {props.text && (
                    <Text className="text-lg mb-5 max-w-798">{props.text}</Text>
                )}
            </Container>
            <Container width="wide">
                {props.image && (
                    <GatsbyImage
                        alt={props.image.alt}
                        image={getImage(props.image.gatsbyImageData)}
                        className="w-full"
                    />
                )}
            </Container>
        </Section>
    );
}

export const query = graphql`
    fragment AboutHeroContent on AboutHero {
        id
        heading
        text
        image {
            id
            gatsbyImageData
            alt
        }
    }
`;
