import * as React from "react";
import { graphql } from "gatsby";
import { Container, Section, FlexList, Box, Text } from "./ui";

interface Stat {
    id: string;
    value: string;
    label: string;
}

interface AboutStatListProps {
    content: Stat[];
}

function AboutStat(props: Stat) {
    return (
        <Box
            width="fitContent"
            className="flex flex-col items-center sm:items-start"
        >
            {props.value && <Text variant="stat">{props.value}</Text>}
            {props.label && <Text variant="statLabel">{props.label}</Text>}
        </Box>
    );
}

export default function AboutStatList(props: AboutStatListProps) {
    return (
        <Section>
            <Container>
                <FlexList
                    className="gap-6 sm:gap-8"
                    variant="center"
                    responsive
                >
                    {props.content.map((stat) => (
                        <AboutStat key={stat.id} {...stat} />
                    ))}
                </FlexList>
            </Container>
        </Section>
    );
}

export const query = graphql`
    fragment AboutStatListContent on AboutStatList {
        id
        content {
            id
            value
            label
        }
    }
`;
