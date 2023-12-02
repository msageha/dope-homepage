// src/components/product-list.tsx

import * as React from "react";
import { graphql } from "gatsby";
import {
    Container,
    Section,
    FlexList,
    Text,
    Kicker,
    Heading,
    Subhead,
    Box,
    Icon,
    LinkList,
} from "./ui";

interface ProductProps {
    image: {
        alt: string;
        gatsbyImageData: any;
    };
    heading: string;
    text: string;
    links: Array<{ id: string; href: string; text: string }>;
}

function Product(props: ProductProps) {
    return (
        <Box center>
            {props.image && (
                <Icon
                    alt={props.image.alt}
                    image={props.image.gatsbyImageData}
                    size="large"
                />
            )}
            <Subhead>{props.heading}</Subhead>
            <Text>{props.text}</Text>
            <LinkList links={props.links} />
        </Box>
    );
}

interface ProductListProps {
    kicker?: string;
    heading: string;
    text?: string;
    content: Array<ProductProps & { id: string }>;
}

export default function ProductList(props: ProductListProps) {
    return (
        <Section>
            <Container>
                <Box center paddingY={4}>
                    <Heading>
                        {props.kicker && <Kicker>{props.kicker}</Kicker>}
                        {props.heading}
                    </Heading>
                    {props.text && <Text>{props.text}</Text>}
                </Box>
                <FlexList gap={4} variant="responsive">
                    {props.content.map((product) => (
                        <li key={product.id}>
                            <Product {...product} />
                        </li>
                    ))}
                </FlexList>
            </Container>
        </Section>
    );
}

export const query = graphql`
    fragment HomepageProductListContent on HomepageProductList {
        id
        kicker
        heading
        text
        content {
            id
            heading
            text
            image {
                alt
                id
                gatsbyImageData
            }
            links {
                id
                href
                text
            }
        }
    }
`;
