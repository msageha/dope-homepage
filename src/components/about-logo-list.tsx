// src/components/about-logo-list.tsx
import * as React from "react";
import { graphql } from "gatsby";
import { Container, Heading, FlexList, LinkList, Section, Box } from "./ui";
import { LogoItem } from "./logo-list";

interface Logo {
    id: string;
    alt: string;
    image: {
        id: string;
        gatsbyImageData: any;
        alt: string;
    };
}

interface Link {
    id: string;
    href: string;
    text: string;
}

interface AboutLogoListProps {
    id: string;
    heading: string;
    links: Link[];
    logos: Logo[];
}

export default function AboutLogoList(props: AboutLogoListProps) {
    return (
        <Section>
            <Container>
                <Box center>
                    {props.heading && <Heading>{props.heading}</Heading>}
                    <LinkList links={props.links} />
                </Box>
            </Container>
            <Container width="narrow">
                <Box paddingY={6}>
                    <FlexList gap={5} variant="center">
                        {props.logos.map((logo, i) => (
                            <li key={`${logo.id}-${i}`}>
                                <LogoItem {...logo} />
                            </li>
                        ))}
                    </FlexList>
                </Box>
            </Container>
        </Section>
    );
}

export const query = graphql`
    fragment AboutLogoListContent on AboutLogoList {
        id
        heading
        links {
            id
            href
            text
        }
        logos {
            id
            alt
            image {
                id
                gatsbyImageData
                alt
            }
        }
    }
`;
