// src/components/footer.tsx
import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import {
  Twitter,
  Twitch,
  Instagram,
  Facebook,
  Youtube,
  GitHub,
} from "react-feather";
import {
  Container,
  Flex,
  FlexList,
  Box,
  Space,
  NavLink,
  Text,
  IconLink,
  VisuallyHidden,
} from "./ui";

export default function Footer() {
  return <footer>This is footer</footer>;
}
