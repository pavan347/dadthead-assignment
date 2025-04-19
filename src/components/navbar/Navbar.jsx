import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { navLinks } from "../../data";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left Section: Logo */}
          <div className="flex-shrink-0">
            <NavLink to="/" className="text-3xl font-medium flex">
              <img
                src="./logo.png"
                alt="logo"
                className="h-10 w-auto object-contain mr-1"
              />
              <span>Dad The Ad</span>
            </NavLink>
          </div>

          {/* Right Section: Links */}
          <div className="flex items-center">
            <div className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    isActive ? "text-yellow-500 font-bold" : "hover:text-yellow-500"
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Hamburger Menu */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none crusor-pointer"
              aria-label="Toggle navigation"
            >
              <svg
                className="h-6 w-6 cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-700 absolute top-16 left-0 w-full z-50">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? "block px-3 py-2 rounded-md text-yellow-500 font-bold"
                    : "block px-3 py-2 rounded-md hover:bg-yellow-500"
                }
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
