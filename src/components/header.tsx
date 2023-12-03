import * as React from "react";
import { Logo } from "../components/Logo";

const Header: React.FC = () => {
  return (
    <header className="mx-auto p-4 md:p-12 items-center justify-between bg-gray-200">
      <div className="flex items-center justify-around">
        <div className="w-1/3 md:w-1/6">
          <a href="/">
            <Logo />
          </a>
        </div>
        <nav className="hidden gap-16 md:flex text-lg font-semibold">
          <a
            href="/"
            className="text-gray-600 hover:text-indigo-500 active:text-indigo-700"
          >
            Home
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-indigo-500 active:text-indigo-700"
          >
            About
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-indigo-500 active:text-indigo-700"
          >
            Products
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-indigo-500 active:text-indigo-700"
          >
            Contact
          </a>
        </nav>
        <button className="inline-flex items-center gap-2 rounded-lg bg-gray-200 p-2 font-semibold text-gray-500 hover:bg-gray-300 active:text-gray-700 md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
          </svg>
          Menu
        </button>
      </div>
      <div className="tracking-wider text-center italic my-4 text-gray-700">
        <span className="font-bold">D</span>ata-driven innovation,
        <span className="font-bold"> O</span>ptimizing performance,
        <span className="font-bold"> P</span>ioneering excellence,{" "}
        <span className="font-bold"> E</span>mpowering growth
      </div>
    </header>
  );
};

export default Header;
