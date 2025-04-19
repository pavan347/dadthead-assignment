import React from "react";
import { navLinks } from "../../data";
import { NavLink } from "react-router";

import { socialIcons } from "../../data";

const Footer = () => {
return (
    <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-6">
                <img src="/logo.png" alt="Logo" className="h-12 mx-auto" />
            </div>
            <div className="mb-6">
                <ul className="flex flex-wrap justify-center space-x-4 sm:space-x-6">
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <NavLink
                                to={link.path}
                                className={({ isActive }) =>
                                    `text-gray-300 hover:text-yellow-500 transition-colors text-sm sm:text-base ${
                                        isActive ? "text-yellow-500" : ""
                                    }`
                                }
                            >
                                {link.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex flex-wrap justify-center space-x-4 sm:space-x-6">
                {socialIcons.map(({ platform, url, icon: Icon, color }) => (
                    <a
                        key={platform}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 transition-colors text-sm sm:text-base hover:opacity-75"
                        style={{ color }}
                    >
                        <Icon className="text-lg" />
                    </a>
                ))}
            </div>
            <div className="mt-6 text-center text-gray-400 text-xs sm:text-sm">
                © {new Date().getFullYear()} DadTheAd. All rights reserved.
            </div>
        </div>
    </footer>
);
};

export default Footer;
