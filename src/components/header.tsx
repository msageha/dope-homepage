import * as React from "react";
import { Logo } from "../components/Logo";
import { getSize } from "../utils/size";
import { getColor } from "../utils/color";
import { useState } from "react";

const Header: React.FC = () => {
  const navItemClasses =
    getSize("medium") + " " + getColor("primary", true, true);

  const [openMenu, setOpenMenu] = useState(true);
  const clickMenuButton = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <header className="py-4 md:py-12 bg-indigo-100">
      <div className="flex items-center justify-around">
        <div className="w-1/3 md:w-1/6">
          <a href="/" className="">
            <Logo />
          </a>
        </div>
        <div>
          <nav className="hidden gap-16 md:flex">
            <a href="/" className={navItemClasses}>
              Home
            </a>
            <a className={navItemClasses} href="/about">
              About
            </a>
            <a className={navItemClasses} href="/product">
              Product
            </a>
            <a className={navItemClasses} href="/order">
              Order
            </a>
            <a className={navItemClasses} href="/contact">
              Contact
            </a>
          </nav>

          <button
            className="inline-flex items-center gap-2 rounded-lg bg-gray-200 p-2 font-semibold text-gray-500 hover:bg-gray-300 active:text-gray-700 md:hidden"
            onClick={clickMenuButton}
          >
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
          <div
            className={
              openMenu ? "hidden" : "md:hidden fixed start-0 end-0 w-full"
            }
          >
            <ul className="flex flex-col p-4 m-8 bg-gray-200 rounded-md font-semibold rtl:space-x-reverse text-gray-500 ">
              <li className="block rounded py-2 hover:bg-gray-300 active:text-gray-700">
                <a href="/" className="mx-2">
                  Home
                </a>
              </li>
              <li className="block rounded py-2 hover:bg-gray-300 active:text-gray-700">
                <a href="/about" className="mx-2">
                  About
                </a>
              </li>
              <li className="block rounded py-2 hover:bg-gray-300 active:text-gray-700">
                <a href="/product" className="mx-2">
                  Product
                </a>
              </li>
              <li className="block rounded py-2 hover:bg-gray-300 active:text-gray-700">
                <a href="/order" className="mx-2">
                  Order
                </a>
              </li>
              <li className="block rounded py-2 hover:bg-gray-300 active:text-gray-700">
                <a className="mx-2">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p
        className={`tracking-wider text-center italic my-4
                ${getSize("small")}
                ${getColor("primary")}`}
      >
        <span className="font-bold">D</span>iscover innovation,
        <span className="font-bold"> O</span>ptimize performance,
        <span className="font-bold"> P</span>ioneer excellence,{" "}
        <span className="font-bold"> E</span>mpower growth
      </p>
    </header>
  );
};

export default Header;
