import * as React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useState, useEffect, useCallback } from "react";
import { Box, Flex, FlexList, NavButtonLink, NavLink } from "./ui";
import Caret from "./caret";

interface NavItem {
    id: string;
    href: string;
    icon: {
        alt: string;
        gatsbyImageData: any; // Replace with actual type
    };
    text: string;
    description?: string;
}

interface NavItemGroupProps {
    name: string;
    navItems: NavItem[];
}

export default function NavItemGroup({ name, navItems }: NavItemGroupProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [popupVisible, setPopupVisible] = useState(false);

    const isSmallScreen = () => {
        return !window.matchMedia("(max-width: 640px)").matches;
    };

    const onGroupButtonClick = useCallback(() => {
        if (!isOpen) {
            setIsOpen(true);
            setPopupVisible(true);
        } else {
            if (isSmallScreen()) {
                setIsOpen(false);
            }
            setPopupVisible(false);
        }
    }, [isOpen]);

    useEffect(() => {
        const popupBox = document.querySelector(
            `[data-id="${name}-popup-box"]`
        );
        const onAnimationEnd = ({ animationName }) => {
            if (animationName === `zoomOutDown`) {
                setIsOpen(false);
            }
        };
        if (popupBox) {
            popupBox.addEventListener("animationend", onAnimationEnd);
            return () => {
                popupBox.removeEventListener("animationend", onAnimationEnd);
            };
        }
    }, [isOpen, name]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            const wrapper = document.querySelector(
                `[data-id="${name}-group-wrapper"]`
            );
            if (
                !isSmallScreen() &&
                isOpen &&
                wrapper &&
                !wrapper.contains(event.target)
            ) {
                onGroupButtonClick();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [name, isOpen, onGroupButtonClick]);

    return (
        <Flex data-id={`${name}-group-wrapper`} className="relative">
            <NavButtonLink
                onClick={onGroupButtonClick}
                className="hover:bg-background"
            >
                <Flex className="hover:color-active">
                    {name}
                    <Caret direction={isOpen ? "up" : "down"} />
                </Flex>
            </NavButtonLink>
            {isOpen && (
                <Box
                    data-id={`${name}-popup-box`}
                    className={`${popupVisible ? "opened" : "closed"}`}
                >
                    <FlexList className="column-start gap-2">
                        {navItems.map((navItem) => (
                            <li key={navItem.id}>
                                <NavLink
                                    to={navItem.href}
                                    className="nav-link-list-link"
                                >
                                    <Flex className="start gap-3">
                                        {navItem.icon && (
                                            <GatsbyImage
                                                alt={navItem.icon.alt}
                                                image={
                                                    getImage(
                                                        navItem.icon
                                                            .gatsbyImageData
                                                    )!
                                                }
                                                className="nav-icon"
                                            />
                                        )}
                                        <Flex className="column-start my-1 gap-0">
                                            <Box className="nav-link-title">
                                                {navItem.text}
                                            </Box>
                                            {!!navItem.description && (
                                                <Box className="nav-link-description">
                                                    {navItem.description}
                                                </Box>
                                            )}
                                        </Flex>
                                    </Flex>
                                </NavLink>
                            </li>
                        ))}
                    </FlexList>
                </Box>
            )}
        </Flex>
    );
}
