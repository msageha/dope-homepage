// src/components/header.tsx
import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Menu, X } from "react-feather";
import { useState, useEffect } from "react";
import {
    Container,
    Flex,
    FlexList,
    Space,
    NavLink,
    Button,
    VisuallyHidden,
} from "./ui";
import NavItemGroup from "./nav-item-group";
import BrandLogo from "./brand-logo";

const Header: React.FC = () => {
    const data = useStaticQuery(graphql`
        query {
            layout {
                header {
                    id
                    navItems {
                        id
                        navItemType
                        ... on NavItem {
                            href
                            text
                        }
                        ... on NavItemGroup {
                            name
                            navItems {
                                id
                                href
                                text
                                description
                                icon {
                                    alt
                                    gatsbyImageData
                                }
                            }
                        }
                    }
                    cta {
                        id
                        href
                        text
                    }
                }
            }
        }
    `);

    const { navItems, cta } = data.layout.header;
    const [isOpen, setOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflowY = "hidden";
        } else {
            document.body.style.overflowY = "visible";
        }
    }, [isOpen]);

    return (
        <header>
            <Container className="relative">
                <Space size={2} />
                <Flex variant="spaceBetween">
                    <NavLink to="/">
                        <VisuallyHidden>Home</VisuallyHidden>
                        <BrandLogo />
                    </NavLink>
                    <nav>
                        <FlexList gap={4}>
                            {navItems &&
                                navItems.map((navItem) => (
                                    <li key={navItem.id}>
                                        {navItem.navItemType === "Group" ? (
                                            <NavItemGroup
                                                name={navItem.name}
                                                navItems={navItem.navItems}
                                            />
                                        ) : (
                                            <NavLink to={navItem.href}>
                                                {navItem.text}
                                            </NavLink>
                                        )}
                                    </li>
                                ))}
                        </FlexList>
                    </nav>
                    <div>
                        {cta && <Button to={cta.href}>{cta.text}</Button>}
                    </div>
                </Flex>
            </Container>
            <Container
                className={`block relative pt-3 ${isOpen ? "bg-primary" : ""}`}
            >
                <Space size={2} />
                <Flex variant="spaceBetween">
                    <span
                        className={`${
                            isOpen ? "text-background" : "text-primary"
                        }`}
                    >
                        <NavLink to="/">
                            <VisuallyHidden>Home</VisuallyHidden>
                            <BrandLogo />
                        </NavLink>
                    </span>
                    <Flex>
                        <Space />
                        <div>
                            {cta && (
                                <Button
                                    to={cta.href}
                                    variant={isOpen ? "reversed" : "primary"}
                                >
                                    {cta.text}
                                </Button>
                            )}
                        </div>
                        <Nudge right={3}>
                            <InteractiveIcon
                                title="Toggle menu"
                                onClick={() => setOpen(!isOpen)}
                                className={`${
                                    isOpen ? "text-background" : "text-primary"
                                }`}
                            >
                                {isOpen ? <X /> : <Menu />}
                            </InteractiveIcon>
                        </Nudge>
                    </Flex>
                </Flex>
            </Container>
            {isOpen && (
                <div className="absolute w-full h-full pt-4 bg-primary">
                    <nav>
                        <FlexList responsive variant="stretch">
                            {navItems?.map((navItem) => (
                                <li key={navItem.id}>
                                    {navItem.navItemType === "Group" ? (
                                        <NavItemGroup
                                            name={navItem.name}
                                            navItems={navItem.navItems}
                                        />
                                    ) : (
                                        <NavLink
                                            to={navItem.href}
                                            className="block text-background text-lg py-2 px-4"
                                        >
                                            {navItem.text}
                                        </NavLink>
                                    )}
                                </li>
                            ))}
                        </FlexList>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
