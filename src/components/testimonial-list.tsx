import * as React from "react";
import { graphql } from "gatsby";
import {
    Container,
    Section,
    Heading,
    Kicker,
    Flex,
    Box,
    FlexList,
    Blockquote,
    Text,
    Avatar,
} from "./ui";

interface AvatarProps {
    alt: string;
    gatsbyImageData: any;
}

interface TestimonialProps {
    quote: string;
    source: string;
    avatar?: AvatarProps;
}

function Testimonial({ quote, source, avatar }: TestimonialProps) {
    return (
        <Flex variant="start">
            {avatar && (
                <Avatar alt={avatar.alt} image={avatar.gatsbyImageData} />
            )}
            <Blockquote>
                <Text as="p" variant="lead">
                    {quote}
                </Text>
                <figcaption>
                    <Text as="cite" bold variant="caps">
                        {source}
                    </Text>
                </figcaption>
            </Blockquote>
        </Flex>
    );
}

interface TestimonialListProps {
    kicker?: string;
    heading: string;
    content: TestimonialProps[];
}

export default function TestimonialList({
    kicker,
    heading,
    content,
}: TestimonialListProps) {
    return (
        <Section>
            <Container>
                <Box center>
                    <Heading>
                        {kicker && <Kicker>{kicker}</Kicker>}
                        {heading}
                    </Heading>
                </Box>
                <FlexList gutter={3} variant="start" responsive wrap>
                    {content.map((testimonial, index) => (
                        <Box
                            as="li"
                            key={testimonial.id + index}
                            width="half"
                            padding={3}
                        >
                            <Testimonial {...testimonial} />
                        </Box>
                    ))}
                </FlexList>
            </Container>
        </Section>
    );
}

export const query = graphql`
    fragment HomepageTestimonialListContent on HomepageTestimonialList {
        id
        kicker
        heading
        content {
            id
            quote
            source
            avatar {
                id
                gatsbyImageData
                alt
            }
        }
    }
`;
