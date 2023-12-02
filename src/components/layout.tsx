import * as React from "react";
import "tailwindcss/tailwind.css";
import { graphql, useStaticQuery } from "gatsby";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return (
        <div className="flex flex-col min-h-screen text-gray-900">
            <header className="p-4 bg-blue-500 text-white">
                <h1 className="text-xl">{data.site.siteMetadata.title}</h1>
            </header>
            <main className="flex-grow p-4">{children}</main>
            <footer className="p-4 bg-blue-500 text-white">
                <p>© {new Date().getFullYear()}, Built with Gatsby</p>
            </footer>
        </div>
    );
};

export default Layout;
