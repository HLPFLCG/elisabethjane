import Link from "next/link";
import { NAV_LINKS, SITE_NAME } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-green-dark px-6 pb-10 pt-16 text-cream">
      <div className="mx-auto max-w-[1100px] text-center">
        <p className="font-heading text-3xl font-light">{SITE_NAME}</p>
        <p className="mt-2 text-xs tracking-[0.1em] text-cream/60">
          Hand-painted recipe boxes &middot; Made with love
        </p>

        <nav className="mt-7 flex flex-wrap justify-center gap-7">
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

        <p className="mt-9 text-[0.7rem] tracking-[0.05em] text-cream/40">
          &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
