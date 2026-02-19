"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS, SITE_NAME } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll spy: track which section is in view on the home page
  useEffect(() => {
    if (pathname !== "/") return;

    const sectionIds = NAV_LINKS
      .filter((link) => link.href.startsWith("/#"))
      .map((link) => link.href.slice(2));

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    sections.forEach((section) => observer.observe(section));

    const onScroll = () => {
      if (window.scrollY < 200) setActiveSection("");
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  const isActive = (href: string): boolean => {
    if (pathname === "/") {
      if (href === "/") return !activeSection;
      if (href.startsWith("/#")) return activeSection === href.slice(2);
      return false;
    }
    if (href === "/") return false;
    if (href.startsWith("/#")) return false;
    return pathname.startsWith(href);
  };

  const handleNavClick = useCallback(
    (href: string) => {
      closeMenu();
      if (href.startsWith("/#") && pathname === "/") {
        const id = href.slice(2);
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    },
    [pathname, closeMenu]
  );

  return (
    <nav
      aria-label="Main navigation"
      className={cn(
        "fixed top-0 right-0 left-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-cream/97 py-3.5 shadow-[0_1px_0_var(--color-border)] backdrop-blur-md"
          : "bg-transparent py-5"
      )}
    >
      <div className="mx-auto flex max-w-[1100px] items-center justify-between px-6">
        <Link
          href="/"
          className="font-heading text-2xl font-normal text-green-dark"
          aria-label="Elisabeth Jane home"
        >
          {SITE_NAME}
        </Link>

        <ul className="hidden gap-5 lg:flex" role="menubar">
          {NAV_LINKS.map((link) => (
            <li key={link.href} role="none">
              <Link
                href={link.href}
                role="menuitem"
                onClick={() => handleNavClick(link.href)}
                className={cn(
                  "group relative text-xs font-normal uppercase tracking-[0.12em]",
                  isActive(link.href)
                    ? "text-green-dark"
                    : "text-green-dark/70 hover:text-green-dark"
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 h-px bg-green-dark transition-all duration-300",
                    isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"
                  )}
                />
              </Link>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="relative z-50 flex flex-col gap-[5px] p-2 lg:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span
            className={cn(
              "block h-[1.5px] w-6 bg-green-dark transition-all duration-300",
              menuOpen && "translate-y-[6.5px] rotate-45"
            )}
          />
          <span
            className={cn(
              "block h-[1.5px] w-6 bg-green-dark transition-all duration-300",
              menuOpen && "opacity-0"
            )}
          />
          <span
            className={cn(
              "block h-[1.5px] w-6 bg-green-dark transition-all duration-300",
              menuOpen && "-translate-y-[6.5px] -rotate-45"
            )}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed top-0 right-0 h-dvh w-3/4 max-w-[300px] bg-cream shadow-[-4px_0_20px_rgba(0,0,0,0.08)] transition-transform duration-300 lg:hidden",
          menuOpen ? "translate-x-0" : "translate-x-full"
        )}
        aria-hidden={!menuOpen}
      >
        <div className="flex h-full flex-col justify-between px-8 pt-24 pb-12">
          <div className="flex flex-col gap-6">
            {NAV_LINKS.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                className={cn(
                  "text-sm uppercase tracking-[0.12em] transition-all duration-300",
                  isActive(link.href)
                    ? "text-green-dark"
                    : "text-green-dark/60 hover:text-green-dark"
                )}
                style={{
                  transitionDelay: menuOpen ? `${i * 50}ms` : "0ms",
                  opacity: menuOpen ? 1 : 0,
                  transform: menuOpen ? "translateX(0)" : "translateX(12px)",
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <p className="text-[0.65rem] tracking-[0.1em] text-green-muted">
            {SITE_NAME}
          </p>
        </div>
      </div>

      {menuOpen && (
        <div
          className="fixed inset-0 z-[-1] bg-black/20 backdrop-blur-[2px] lg:hidden"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
    </nav>
  );
}
