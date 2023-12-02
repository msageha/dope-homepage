import * as React from "react";
import { graphql } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";
import { Space, Container, Section, FlexList, Text, Logo } from "./ui";

interface LogoProps {
    alt: string;
    image: {
        gatsbyImageData: IGatsbyImageData;
    };
}

export function LogoItem(props: LogoProps) {
    if (!props.image) return null;

    return (
        <Logo
            alt={props.alt}
            image={props.image.gatsbyImageData}
            size="medium"
        />
    );
}

interface LogoListProps {
    text?: string;
    logos: Array<LogoProps & { id: string }>;
}

const LogoList: React.FC<LogoListProps> = (props) => {
    return (
        <Section paddingY={4}>
            <Container width="narrow">
                {props.text && (
                    <Text center variant="lead">
                        {props.text}
                    </Text>
                )}
                <Space size={4} />
                <FlexList gap={4} variant="center">
                    {props.logos.map(
                        (logo) =>
                            logo && (
                                <li key={logo.id}>
                                    <LogoItem {...logo} />
                                </li>
                            )
                    )}
                </FlexList>
            </Container>
        </Section>
    );
};

export default LogoList;

export const query = graphql`
    fragment HomepageLogoListContent on HomepageLogoList {
        id
        text
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
