import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { LuMapPin } from "react-icons/lu";
import { FaCaretDown, FaBars, FaTimes } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CgClose } from "react-icons/cg";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

export default function Navbar({
  location,
  getLocation,
  openDropdown,
  setOpenDropdown,
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDropdown = () => setOpenDropdown((prev) => !prev);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <div className="bg-white shadow-2xl">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Left: Logo + Location */}
        <div className="flex items-center gap-4">
          <Link to={"/"}>
            <h1 className="font-bold text-3xl">
              <span className="text-red-500 font-serif">Z</span>aptro
            </h1>
          </Link>
          <div className="hidden sm:flex gap-1 text-gray-700 items-center">
            <LuMapPin className="text-red-500 h-6 w-6" />
            <span className="font-semibold">
              {location ? (
                <div className="-space-y-2">
                  <p>{location.country}</p>
                  <p>{location.state}</p>
                </div>
              ) : (
                "Add Address"
              )}
            </span>
            <FaCaretDown
              onClick={toggleDropdown}
              className="text-red-500 cursor-pointer"
            />
          </div>
          {openDropdown ? (
            <div className="w-[250px] h-max shadow-2xl z-50 bg-white fixed top-16 left-60 border-2 p-5 border-gray-100 rounded-md">
              <h1 className="font-semibold mb-4 text-xl flex justify-between">
                Change Location
                <span onClick={toggleDropdown}>
                  <CgClose className="cursor-pointer" />
                </span>
              </h1>
              <button
                onClick={getLocation}
                className="bg-red-500 text-white px-3 py-1 rounded-md cursor-pointer hover:bg-red-600 transition-all"
              >
                Detect Location
              </button>
            </div>
          ) : null}
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          <ul className="flex gap-7 items-center text-xl font-semibold">
            {["/", "/products", "/about", "/contact"].map((path, i) => {
              const labels = ["Home", "Products", "About", "Contact"];
              return (
                <li key={path}>
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      `${
                        isActive ? "border-b-[3px] border-red-400" : ""
                      } text-gray-700 hover:text-red-500 transition-all`
                    }
                  >
                    {labels[i]}
                  </NavLink>
                </li>
              );
            })}
          </ul>

          <Link to="/cart" className="relative">
            <MdOutlineShoppingCart className="h-7 w-7 text-gray-700 hover:text-red-500" />
            <span className="bg-red-500 px-2 rounded-full absolute -top-3 -right-3 text-white text-sm">
              0
            </span>
          </Link>

          <div>
            <SignedOut>
              <SignInButton>
                <button className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition-all">
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </nav>

        {/* Mobile icons */}
        <div className="md:hidden flex items-center gap-4">
          <Link to="/cart" className="relative">
            <MdOutlineShoppingCart className="h-7 w-7 text-gray-700 hover:text-red-500" />
            <span className="bg-red-500 px-2 rounded-full absolute -top-2 -right-2 text-white text-sm">
              0
            </span>
          </Link>
          <button
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none"
          >
            {menuOpen ? (
              <FaTimes className="h-6 w-6" />
            ) : (
              <FaBars className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu with animation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen
            ? "max-h-96 opacity-100 visible"
            : "max-h-0 opacity-0 invisible"
        } bg-gray-50`}
      >
        <ul className="flex flex-col gap-3 px-4 text-lg font-semibold">
          <NavLink
            to="/"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `${
                isActive ? "text-red-500" : ""
              } text-gray-700 hover:text-red-500 transition-all`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `${
                isActive ? "text-red-500" : ""
              } text-gray-700 hover:text-red-500 transition-all`
            }
          >
            Products
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `${
                isActive ? "text-red-500" : ""
              } text-gray-700 hover:text-red-500 transition-all`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `${
                isActive ? "text-red-500" : ""
              } text-gray-700 hover:text-red-500 transition-all`
            }
          >
            Contact
          </NavLink>
          <div className="pt-2">
            <SignedOut>
              <SignInButton>
                <button className="bg-red-500 text-white w-full py-2 rounded-md hover:bg-red-600 transition-all">
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </ul>
      </div>
    </div>
  );
}
