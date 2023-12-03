import { Link as GatsbyLink } from "gatsby";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import isAbsoluteURL from "is-absolute-url";
import * as React from "react";
import {
  FC,
  ReactNode,
  HTMLAttributes,
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
} from "react";
import "tailwindcss/tailwind.css";

interface BaseProps {
  as?: React.ElementType;
  cx?: string[];
  className?: string;
  [x: string]: any;
}

export const Base: React.FC<BaseProps> = ({
  as: Component = "div",
  cx: _cx = [],
  className,
  ...props
}) => {
  return <Component className={[_cx, className].join(" ")} {...props} />;
};

interface ContainerProps {
  width?: "normal";
  [x: string]: any;
}

export const Container: React.FC<ContainerProps> = ({
  width = "normal",
  ...props
}) => {
  return (
    <Base cx={[width === "normal" ? "max-w-md mx-auto px-4" : ""]} {...props} />
  );
};

interface FlexProps {
  variant?: string;
  gap?: number;
  gutter?: string;
  wrap?: string;
  responsive?: string;
  marginY?: string;
  alignItems?: string;
  className?: string;
  children: ReactNode;
}

export const Flex: FC<FlexProps> = ({
  variant,
  gap = 3,
  gutter,
  wrap,
  responsive,
  marginY,
  alignItems,
  className,
  children,
  ...props
}) => {
  const classes = [
    "flex",
    variant && `flex-${variant}`,
    responsive && `flex-${responsive}`,
    wrap && `flex-${wrap}`,
    gutter && `gutter-${gutter}`,
    gutter ? `gap-0` : `gap-${gap}`,
    marginY && `my-${marginY}`,
    alignItems && `items-${alignItems}`,
    className,
  ].join(" ");

  return (
    <Base className={classes} {...props}>
      {children}
    </Base>
  );
};

interface BoxProps {
  width?: string;
  background?: string;
  padding?: string;
  paddingY?: string;
  radius?: string;
  center?: boolean;
  order?: string;
  className?: string;
  children: ReactNode;
}

export const Box: FC<BoxProps> = ({
  width = "full",
  background,
  padding,
  paddingY,
  radius,
  center = false,
  order,
  className,
  children,
  ...props
}) => {
  const classes = [
    `w-${width}`,
    background && `bg-${background}`,
    padding && `p-${padding}`,
    paddingY && `py-${paddingY}`,
    radius && `rounded-${radius}`,
    center && "text-center",
    order && `order-${order}`,
    className,
  ].join(" ");

  return (
    <Base className={classes} {...props}>
      {children}
    </Base>
  );
};

interface FlexListProps extends React.HTMLAttributes<HTMLUListElement> {}
export const FlexList: React.FC<FlexListProps> = (props) => {
  return <Flex as="ul" className="list-none p-0 m-0" {...props} />;
};

interface ListProps extends React.HTMLAttributes<HTMLUListElement> {}

export const List: React.FC<ListProps> = (props) => {
  return <Base as="ul" className="list-none p-0 m-0" {...props} />;
};
interface SpaceProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: string;
}

export const Space: React.FC<SpaceProps> = ({ size = "auto", ...props }) => {
  return <Base className={`m-${size}`} {...props} />;
};
interface NudgeProps extends React.HTMLAttributes<HTMLDivElement> {
  left?: number;
  right?: number;
  top?: number;
  bottom?: number;
}

export const Nudge: React.FC<NudgeProps> = ({
  left,
  right,
  top,
  bottom,
  ...props
}) => {
  return (
    <Base
      className={`
          ${left ? `-ml-${left}` : ""}
          ${right ? `-mr-${right}` : ""}
          ${top ? `-mt-${top}` : ""}
          ${bottom ? `-mb-${bottom}` : ""}
        `}
      {...props}
    />
  );
};
interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Section: React.FC<SectionProps> = (props) => {
  return <Box as="section" className="section" {...props} />;
};

interface TextProps extends HTMLAttributes<HTMLDivElement> {
  variant?: string;
  center?: boolean;
  bold?: boolean;
}

export const Text: FC<TextProps> = ({
  variant = "body",
  center = false,
  bold = false,
  ...props
}) => {
  const classes = `text-${variant} ${center ? "text-center" : ""} ${
    bold ? "font-bold" : ""
  }`;
  return <Base className={classes} {...props} />;
};

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {}

export const SuperHeading: FC<HeadingProps> = (props) => {
  return <Text as="h1" variant="superHeading" {...props} />;
};

export const Heading: FC<HeadingProps> = (props) => {
  return <Text as="h2" variant="heading" {...props} />;
};

export const Subhead: FC<HeadingProps> = (props) => {
  return <Text as="h3" variant="subhead" {...props} />;
};

interface KickerProps extends HTMLAttributes<HTMLDivElement> {}

export const Kicker: FC<KickerProps> = (props) => {
  return <Text variant="kicker" {...props} />;
};

interface LinkProps extends HTMLAttributes<HTMLAnchorElement> {
  to?: string;
  href?: string;
}

export const Link: FC<LinkProps> = ({ to, href, ...props }) => {
  const url = href || to || "";
  if (isAbsoluteURL(url)) {
    return <a href={url} className="link" {...props} />;
  }
  return <GatsbyLink to={url} className="link" {...props} />;
};
interface NavLinkProps {
  to?: string;
  href?: string;
  [x: string]: any;
}

export const NavLink: React.FC<NavLinkProps> = ({ to, href, ...props }) => {
  const url = href || to || "";
  return (
    <GatsbyLink
      to={url}
      className="text-inherit hover:text-active transition-colors duration-200 ease-in-out"
      {...props}
    />
  );
};
interface NavButtonLinkProps {
  [x: string]: any;
}

export const NavButtonLink: React.FC<NavButtonLinkProps> = (props) => {
  return (
    <button
      className="text-inherit font-text p-0 bg-transparent border-none text-decoration-none transition-colors duration-200 ease-in-out hover:text-active hover:cursor-pointer"
      {...props}
    />
  );
};
interface ButtonProps {
  variant?: "primary" | "reversed" | "link" | "linkReversed";
  to?: string;
  href?: string;
  [x: string]: any;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  to,
  href,
  ...props
}) => {
  const url = href || to || "";
  return (
    <GatsbyLink
      to={url}
      className={`inline-flex text-decoration-none font-bold text-base leading-solid py-3 px-3 rounded-button ${variant}`}
      {...props}
    />
  );
};

interface ButtonListProps {
  links?: { id: string; href: string; text: string }[];
  reversed?: boolean;
  [x: string]: any;
}

export const ButtonList: React.FC<ButtonListProps> = ({
  links = [],
  reversed = false,
  ...props
}) => {
  const getVariant = (i: number) => {
    if (reversed) {
      return i === 0 ? "reversed" : "linkReversed";
    }
    return i === 0 ? "primary" : "link";
  };
  return (
    <ul className="flex my-4" {...props}>
      {links &&
        links.map((link, i) => (
          <li key={link.id}>
            <Button href={link.href} variant={getVariant(i)}>
              {link.text}
            </Button>
          </li>
        ))}
    </ul>
  );
};
interface CTALinkProps {
  to?: string;
  href?: string;
  [x: string]: any;
}

export const CTALink: React.FC<CTALinkProps> = ({ to, href, ...props }) => {
  const url = href || to || "";
  return (
    <GatsbyLink
      to={url}
      className="text-inherit font-bold hover:text-active"
      {...props}
    />
  );
};
interface LinkListProps {
  links?: { id: string; href: string; text: string }[];
  [x: string]: any;
}

export const LinkList: React.FC<LinkListProps> = ({ links = [], ...props }) => {
  return (
    <ul className="flex" {...props}>
      {links &&
        links.map((link, i) => (
          <li key={link.id}>
            <CTALink href={link.href}>{link.text}</CTALink>
          </li>
        ))}
    </ul>
  );
};
interface BlockquoteProps extends HTMLAttributes<HTMLQuoteElement> {}

export const Blockquote: FC<BlockquoteProps> = ({ children, ...props }) => (
  <blockquote {...props} className="blockquote-class">
    {children}
  </blockquote>
);

interface AvatarProps {
  alt: string;
  image: IGatsbyImageData;
}

export const Avatar: FC<AvatarProps> = ({ alt, image }) => (
  <GatsbyImage alt={alt} image={image} className="avatar-class" />
);
interface LogoProps {
  alt: string;
  image: IGatsbyImageData;
  size?: "small" | "medium" | "large";
}

export const Logo: FC<LogoProps> = ({ alt, image, size = "small" }) => (
  <GatsbyImage alt={alt} image={image} className={`logo-class ${size}`} />
);

interface IconProps {
  alt: string;
  image: IGatsbyImageData;
  size?: "small" | "medium" | "large";
}

export const Icon: FC<IconProps> = ({ alt, image, size = "medium" }) => (
  <GatsbyImage alt={alt} image={image} className={`icon-class ${size}`} />
);
interface IconLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {}

export const IconLink: FC<IconLinkProps> = ({ children, ...props }) => (
  <a {...props} className="icon-link-class">
    {children}
  </a>
);
interface InteractiveIconProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const InteractiveIcon: FC<InteractiveIconProps> = ({
  children,
  ...props
}) => (
  <button {...props} className="interactive-icon-class">
    {children}
  </button>
);

interface VisuallyHiddenProps extends HTMLAttributes<HTMLSpanElement> {}

export const VisuallyHidden: FC<VisuallyHiddenProps> = ({
  children,
  ...props
}) => (
  <span {...props} className="visually-hidden-class">
    {children}
  </span>
);
interface BlockLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {}

export const BlockLink: FC<BlockLinkProps> = ({ children, ...props }) => (
  <a {...props} className="block-link-class">
    {children}
  </a>
);
