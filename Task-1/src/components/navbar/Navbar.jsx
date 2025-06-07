import React, { useState, useEffect, useRef } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const NAVBAR_HEIGHT = 64;

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const ticking = useRef(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const scrollToSection = (id) => {
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - NAVBAR_HEIGHT,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const sections = ["home", "about", "experience", "projects", "contact"];

    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const scrollPos = window.pageYOffset + NAVBAR_HEIGHT + 15;
          let current = activeSection;

          for (let i = sections.length - 1; i >= 0; i--) {
            const section = document.getElementById(sections[i]);
            if (section && section.offsetTop <= scrollPos) {
              current = sections[i];
              break;
            }
          }

          if (current !== activeSection) {
            setActiveSection(current);
          }
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  const navSections = ["about", "experience", "projects", "contact"];

  return (
    <div>
      <nav
        role="navigation"
        aria-label="Main navigation"
        className="bg-white border-gray-200 fixed w-full dark:bg-gray-900 z-50"
        style={{ height: NAVBAR_HEIGHT }}
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="#home"
            className="flex items-center space-x-3 rtl:space-x-reverse group cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("home");
            }}
          >
            <img
              src="./react.svg"
              className="h-8 transition-transform duration-300 group-hover:scale-110"
              alt="react Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white transition-transform duration-300 transform group-hover:text-cyan-500 group-hover:scale-110">
              Portfolio
            </span>
          </a>

          <button
            onClick={toggleMenu}
            className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white flex items-center justify-center focus:outline-none hover:bg-gray-300 dark:hover:bg-gray-600 lg:hidden"
            aria-label="Toggle Menu"
          >
            {menuOpen ? (
              <IoClose className="text-2xl" />
            ) : (
              <GiHamburgerMenu className="text-xl" />
            )}
          </button>

          <div
            className={`absolute top-full right-4 mt-2 w-40 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg z-50 transition-all duration-300 overflow-hidden ${
              menuOpen
                ? "max-h-96 opacity-100 visible"
                : "max-h-0 opacity-0 invisible"
            } lg:hidden`}
          >
            <ul className="py-1">
              {navSections.map((section) => (
                <li key={section}>
                  <a
                    href={`#${section}`}
                    className={`block px-4 py-2 transition-all duration-300 transform hover:scale-105 ${
                      activeSection === section
                        ? "bg-gray-700 text-cyan-500 font-semibold"
                        : "hover:bg-gray-700 text-gray-700 dark:text-white hover:text-cyan-500"
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(section);
                    }}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <ul className="hidden lg:flex space-x-8 font-medium text-gray-700 dark:text-white">
            {navSections.map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  className={`block px-4 py-2 transition-all duration-300 transform hover:scale-105 ${
                    activeSection === section
                      ? "text-cyan-500 font-semibold"
                      : "text-gray-700 dark:text-white hover:text-cyan-500"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(section);
                  }}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}
