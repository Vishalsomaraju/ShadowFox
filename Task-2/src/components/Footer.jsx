import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitterSquare,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-12">
        {/* Info */}
        <div>
          <Link to="/">
            <h1 className="text-red-500 text-2xl font-bold">Zaptro</h1>
          </Link>
          <p className="mt-2 text-sm">
            Powering Your World with the Best in Electronics.
          </p>
          <p className="mt-2 text-sm">
            123 Electronics St, Style City, NY 10001
          </p>
          <p className="text-sm">Email: support@Zaptro.com</p>
          <p className="text-sm">Phone: (123) 456-7890</p>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Customer Service</h3>
          <ul className="text-sm space-y-2">
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/shipping-returns">Shipping & Returns</Link>
            </li>
            <li>
              <Link to="/faqs">FAQs</Link>
            </li>
            <li>
              <Link to="/order-tracking">Order Tracking</Link>
            </li>
            <li>
              <Link to="/size-guide">Size Guide</Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4 mt-2 text-2xl">
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-red-500 hover:scale-110"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-red-500 hover:scale-110"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="hover:text-red-500 hover:scale-110"
            >
              <FaTwitterSquare />
            </a>
            <a
              href="#"
              aria-label="Pinterest"
              className="hover:text-red-500 hover:scale-110"
            >
              <FaPinterest />
            </a>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Stay in the Loop</h3>
          <p className="text-sm">
            Subscribe to get special offers, free giveaways, and more.
          </p>
          <form className="mt-4 flex flex-col sm:flex-row">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full p-2 rounded-md text-white cursor-pointer mb-2 sm:mb-0 sm:rounded-l-md sm:rounded-r-none focus:outline-none focus:ring-1 focus:ring-white"
            />
            <button
              type="submit"
              className="bg-red-600 text-white px-4 py-2 rounded-md sm:rounded-l-none sm:rounded-r-md hover:bg-red-700 hover:scale-105 transition cursor-pointer"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t border-gray-700 pt-6 text-center text-sm">
        <p>
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-red-500">Zaptro</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
