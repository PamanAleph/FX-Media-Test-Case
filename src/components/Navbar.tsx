"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useRef } from "react";
import LOGO from "@/assets/Logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);

  const handleSearchClick = () => {
    setShowInput(true);
  };

  const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
    if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
      setShowInput(false);
    }
  };

  const links = [
    { href: "#", label: "About Us" },
    { href: "#", label: "Club Buzz" },
    { href: "#", label: "Membership" },
    { href: "#", label: "Wine & Dine" },
    { href: "#", label: "Facilities" },
    { href: "#", label: "Banquet" },
    { href: "#", label: "Gallery" },
    { href: "#", label: "What's New" },
  ];

  return (
    <header
      className="p-2 bg-yellow-400 sticky top-0 z-50"
      onClick={handleClickOutside}
    >
      <div className="flex justify-between h-16 mx-auto items-center md:justify-center md:space-x-8">
        <Image
          src={LOGO}
          width={250}
          height={250}
          alt="Logo"
          className="h-16 w-16"
        />

        <ul className="hidden space-x-4 sm:flex items-center">
          {links.map((link, index) => (
            <li key={index} className="flex">
              <Link
                rel="noopener noreferrer"
                href={link.href}
                className="flex items-center px-4 text-black font-semibold"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="flex items-center">
            {showInput ? (
              <input
                ref={searchRef}
                type="search"
                name="Search"
                placeholder="Search..."
                className="w-32 p-2 text-sm rounded-md sm:w-auto focus:outline-none dark:bg-gray-100 dark:text-gray-800 focus:dark:bg-gray-50 focus:dark:border-blue-600"
                onBlur={() => setShowInput(false)}
              />
            ) : (
              <svg
                onClick={handleSearchClick}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            )}
          </li>
        </ul>

        <button
          title="Button"
          type="button"
          className="p-4 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 dark:text-gray-800"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-yellow-400">
          <ul className="flex flex-col items-center space-y-4 py-4">
            {links.map((link, index) => (
              <li key={index}>
                <Link
                  rel="noopener noreferrer"
                  href={link.href}
                  className="text-black font-semibold"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="w-full px-4">
              {showInput ? (
                <input
                  ref={searchRef}
                  type="search"
                  name="Search"
                  placeholder="Search..."
                  className="w-full p-2 text-sm rounded-md focus:outline-none dark:bg-gray-100 dark:text-gray-800 focus:dark:bg-gray-50 focus:dark:border-blue-600"
                  onBlur={() => setShowInput(false)}
                />
              ) : (
                <button
                  onClick={handleSearchClick}
                  className="w-full text-black font-semibold text-center bg-yellow-500 rounded-md p-2"
                >
                  Search
                </button>
              )}
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
