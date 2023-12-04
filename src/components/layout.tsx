import * as React from "react";
import { Slice } from "gatsby";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <body className="flex flex-col min-h-screen">
            <Slice alias="Header" />
            <main className="flex-grow">{children}</main>
            <Slice alias="Footer" />
        </body>
    );
};

export default Layout;
