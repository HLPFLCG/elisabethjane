import Link from "next/link";
import { NAV_LINKS, SITE_NAME, CONTACT_EMAIL } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-green-dark px-6 pb-10 pt-16 text-cream">
      <div className="mx-auto max-w-[1100px]">
        <div className="grid gap-12 md:grid-cols-3 md:gap-8">
          {/* Brand */}
          <div>
            <p className="font-heading text-3xl font-light">{SITE_NAME}</p>
            <p className="mt-2 text-xs leading-relaxed tracking-[0.05em] text-cream/50">
              Hand-painted recipe boxes crafted to hold your most treasured
              family recipes and become a timeless heirloom.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="mb-4 text-[0.65rem] font-medium uppercase tracking-[0.2em] text-cream/40">
              Navigate
            </p>
            <nav className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs uppercase tracking-[0.12em] text-cream/60 hover:text-cream"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-4 text-[0.65rem] font-medium uppercase tracking-[0.2em] text-cream/40">
              Get in Touch
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-xs tracking-[0.05em] text-cream/60 hover:text-cream"
            >
              {CONTACT_EMAIL}
            </a>
            <div className="mt-4 flex gap-5">
              <a
                href="#"
                className="text-xs uppercase tracking-[0.12em] text-cream/60 hover:text-cream"
                aria-label="Instagram"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-cream/10 pt-8 text-center">
          <p className="text-[0.65rem] tracking-[0.05em] text-cream/30">
            &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
            &middot; Hand-painted with love.
          </p>
        </div>
      </div>
    </footer>
  );
}
