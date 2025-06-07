import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <div className="">
      <nav
        role="navigation"
        aria-label="Main navigation"
        className="bg-white border-gray-200 fixed w-full dark:bg-gray-900 z-50"
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="./react.svg"
              className="h-8 transition-transform hover:scale-110"
              alt="react Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap hover:text-cyan-500 dark:text-white transition-transform duration-300 transform hover:scale-110">
              Portfolio
            </span>
          </a>
          <button
            onClick={toggleMenu}
            className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white flex items-center justify-center focus:outline-none hover:bg-gray-300 dark:hover:bg-gray-600 lg:hidden"
            aria-label="Toggle Menu"
          >
            <GiHamburgerMenu className="text-xl" />
          </button>
          <div
            className={`absolute top-full right-4 mt-2 w-40 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg z-50 transition-all duration-300 overflow-hidden
              ${
                menuOpen
                  ? "max-h-96 opacity-100 visible"
                  : "max-h-0 opacity-0 invisible"
              }
              lg:hidden`}
          >
            <ul className="py-1">
              <li>
                <a
                  href="#about"
                  className="block px-4 py-2 text-gray-700 dark:text-white hover:text-cyan-500 hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={() => setMenuOpen(false)}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/experience"
                  className="block px-4 py-2 text-gray-700 dark:text-white hover:text-cyan-500 hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={() => setMenuOpen(false)}
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="/projects"
                  className="block px-4 py-2 text-gray-700 dark:text-white hover:text-cyan-500 hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={() => setMenuOpen(false)}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="block px-4 py-2 text-gray-700 dark:text-white hover:text-cyan-500 hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={() => setMenuOpen(false)}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <ul className="hidden lg:flex space-x-8 font-medium text-gray-700 dark:text-white">
            <li>
              <a href="/about" className="hover:text-cyan-500 transition">
                About
              </a>
            </li>
            <li>
              <a href="/experience" className="hover:text-cyan-500 transition">
                Experience
              </a>
            </li>
            <li>
              <a href="/projects" className="hover:text-cyan-500 transition">
                Projects
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-cyan-500 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
