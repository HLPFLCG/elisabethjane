"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { NAV_LINKS, SITE_NAME } from "@/lib/constants";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/97 backdrop-blur-md shadow-[0_1px_0_var(--color-border)] py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-[1100px] items-center justify-between px-6">
        <Link
          href="/"
          className="font-heading text-2xl font-normal text-green-dark"
        >
          {SITE_NAME}
        </Link>

        {/* Desktop nav */}
        <ul className="hidden gap-9 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="group relative text-xs font-normal uppercase tracking-[0.12em] text-green-dark"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-green-dark transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-col gap-[5px] p-1 md:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-[1.5px] w-6 bg-green-dark transition-all duration-300 ${
              menuOpen ? "translate-y-[6.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-[1.5px] w-6 bg-green-dark transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-[1.5px] w-6 bg-green-dark transition-all duration-300 ${
              menuOpen ? "-translate-y-[6.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-3/4 max-w-[300px] bg-cream shadow-[-4px_0_20px_rgba(0,0,0,0.08)] transition-transform duration-300 md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-6 px-8 pt-20">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm uppercase tracking-[0.12em] text-green-dark"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-[-1] bg-black/20 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </nav>
  );
}
