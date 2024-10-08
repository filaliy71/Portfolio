"use client";
import { useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import Link from "next/link";
import { motion } from "framer-motion";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1.2,
        ease: [0.6, -0.05, 0.01, 0.99],
      }}
      className="mx-auto px-4 sm:px-6 lg:px-8 w-full backdrop-filter backdrop-blur bg-opacity-25 sticky top-0 z-50"
    >
      <div className="flex items-center justify-between h-16 md:h-24">
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            {!isOpen ? (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            ) : (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>
        <div id="logo" className="text-2xl md:text-3xl font-bold -tracking-3">
          <div>
            <Link href={"/"}>
              <h1>Yusuf.dev</h1>
            </Link>
          </div>
        </div>
        <div className="hidden md:flex md:items-center md:space-x-8">
          <ul className="flex space-x-8 font-semibold -tracking-2 text-xl">
            <li>
              <Link href="/#home" className="hover:text-blue-500">
                Home
              </Link>
            </li>
            <li>
              <Link href="/#about" className="hover:text-blue-500">
                About
              </Link>
            </li>
            <li>
              <Link href="/project" className="hover:text-blue-500">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/#contact" className="hover:text-blue-500">
                Contact
              </Link>
            </li>
          </ul>
          <div className="hidden md:block">
            <ThemeSwitcher />
          </div>
        </div>
        <div className="block md:hidden">
          <ThemeSwitcher />
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/#home"
              className="block text-base font-semibold -tracking-2 hover:text-blue-500"
            >
              Home
            </Link>
            <Link
              href="/#about"
              className="block text-base font-semibold -tracking-2 hover:text-blue-500"
            >
              About
            </Link>
            <Link
              href="/project"
              className="block text-base font-semibold -tracking-2 hover:text-blue-500"
            >
              Projects
            </Link>
            <Link
              href="/#contact"
              className="block text-base font-semibold -tracking-2 hover:text-blue-500"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </motion.nav>
  );
}

export default NavBar;
