"use client";

import { useSplash } from "../contexts/SplashContext";

// Extend the Window interface to include __SHOW_SPLASH__
declare global {
  interface Window {
    __SHOW_SPLASH__?: boolean;
  }
}

import Link from "next/link";
import { useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { showSplash } = useSplash();

  // Check for splash param in URL (optional, if you want to control via URL)
  // const isSplash = searchParams.get("splash") === "1";

  // Check for splash state via window (for client-side state, see below)
  if (showSplash) return null;

  const isActive = (path: string) => pathname === path;

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-sm fixed w-full top-0 z-30">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center text-xl font-bold text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300"
          >
            <Image
              src="/logo.png"
              alt="Logo"
              width={60}
              height={70}
              className="rounded-full mr-2"
            />
            <span>Jomari Divinagracia</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${
                  isActive(link.href)
                    ? "text-blue-600 dark:text-blue-400 font-semibold"
                    : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <ThemeToggle />
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 dark:text-gray-300"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block py-2 ${
                  isActive(link.href)
                    ? "text-blue-600 dark:text-blue-400 font-semibold"
                    : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4">
              <ThemeToggle />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;