import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
function Footer() {
  return (
    <footer className="bg-[#0a0b0b] text-white py-10">
      {/* Top Section */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 italic">
        {/* Company Info */}
        <div className="flex flex-col items-center md:items-start sm:items-center">
          <img src={logo} alt="MainImg"  className="sm:w-64" />
          <p className="text-sm text-gray-400 mb-5  text-center md:text-left">
            Shop amazing products at unbeatable prices!
          </p>
          <div className="flex space-x-3 sm:ml-16">
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-facebook text-yellow-400 hover:text-yellow-500 fa-lg"></i>
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-instagram text-yellow-400 hover:text-yellow-500 fa-lg"></i>
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-twitter text-yellow-400 hover:text-yellow-500 fa-lg"></i>
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-linkedin text-yellow-400 hover:text-yellow-500 fa-lg"></i>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-2xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-base text-gray-400">
            <li>
              <Link
                to="/"
                className="hover:text-gray-200 transition duration-300 ease-in-out"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-gray-200 transition duration-300 ease-in-out"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-gray-200 transition duration-300 ease-in-out"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Subscribe Section */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-2xl font-semibold mb-3">Subscribe</h3>
          <p className="text-sm text-gray-400 mb-4 text-center md:text-left">
            Stay updated with our latest deals!
          </p>
          <div className="flex w-full md:w-auto">
            <input
              type="email"
              placeholder="Your email"
              className="w-full p-2 rounded-l-lg text-black focus:ring-2 focus:ring-yellow-400"
            />
            <button className="bg-yellow-400 text-black p-2 rounded-r-lg hover:bg-yellow-500 transition duration-300 ease-in-out">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-8 pt-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
          <p className="text-sm text-gray-400">
            © 2024 ShoppyGlobe. All Rights Reserved.
          </p>
          <p className="text-xs text-gray-500 mt-2 md:mt-0">
            Designed by{" "}
            <span className="text-yellow-400 font-semibold">
              Ashmita Shrivas
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
