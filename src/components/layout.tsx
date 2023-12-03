import * as React from "react";
import { Slice } from "gatsby";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Slice alias="Header" />
      <main>{children}</main>
      <Slice alias="Footer" />
    </>
  );
};

export default Layout;
