import * as React from "react";

interface HeadProps {
  title: string;
  description?: string;
  image?: string;
}

const Head: React.FC<HeadProps> = ({ title, description, image }) => {
  return (
    <>
      <meta charSet="utf-8" />
      <title>{title}</title>
      {description && (
        <meta
          name="description"
          property="og:description"
          content={description}
        />
      )}
      <meta property="og:title" content={title} />
      {image && <meta property="og:image" content={image} />}
    </>
  );
};

export default Head;
