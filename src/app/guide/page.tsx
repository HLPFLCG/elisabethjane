import type { Metadata } from "next";
import type { ReactNode } from "react";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Editing Guide",
  description:
    "A complete guide on how to edit and customize the Elisabeth Jane website — update products, payment links, and more.",
};

function CodeBlock({ children }: { children: string }) {
  return (
    <pre className="overflow-x-auto rounded bg-green-dark p-5 text-sm leading-relaxed text-cream/90">
      <code>{children}</code>
    </pre>
  );
}

function InlineCode({ children }: { children: string }) {
  return (
    <code className="rounded bg-ivory px-1.5 py-0.5 text-sm text-green-dark">
      {children}
    </code>
  );
}

function Callout({ children }: { children: ReactNode }) {
  return (
    <div className="mt-6 border-l-[3px] border-accent bg-ivory p-6">
      <div className="text-sm leading-relaxed text-text-light">{children}</div>
    </div>
  );
}

interface GuideSection {
  title: string;
  content: ReactNode;
}

const SECTIONS: GuideSection[] = [
  {
    title: "Overview",
    content: (
      <>
        <p className="mb-4 text-base leading-loose text-text-light">
          This website is built with <strong>Next.js</strong> (App Router),{" "}
          <strong>TypeScript</strong>, and <strong>Tailwind CSS</strong>. It
          exports as a fully static site and is deployed via{" "}
          <strong>Cloudflare Pages</strong> with zero server costs.
        </p>
        <p className="text-base leading-loose text-text-light">
          All data lives in TypeScript files &mdash; no database, no CMS. Edit
          the files, push to GitHub, and Cloudflare auto-deploys.
        </p>
      </>
    ),
  },
  {
    title: "Project Structure",
    content: (
      <CodeBlock>{`src/
├── app/
│   ├── layout.tsx            # Global layout (header, footer, fonts, SEO)
│   ├── globals.css           # Theme colors and base styles
│   ├── page.tsx              # Home page
│   ├── about/page.tsx        # About page
│   └── guide/page.tsx        # This guide page
├── components/
│   ├── Header.tsx            # Navigation bar
│   ├── Footer.tsx            # Site footer
│   ├── Button.tsx            # Reusable button component
│   ├── FadeIn.tsx            # Scroll animation wrapper
│   ├── ProductCard.tsx       # Product card component (with image gallery)
│   ├── ScrollToTop.tsx       # Scroll-to-top button
│   └── SectionHeader.tsx     # Reusable section header
└── lib/
    ├── constants.ts          # Products, nav links, site info
    ├── types.ts              # TypeScript type definitions
    └── utils.ts              # Utility functions`}</CodeBlock>
    ),
  },
  {
    title: "1. Updating the Venmo Payment Link",
    content: (
      <>
        <p className="mb-4 text-base leading-loose text-text-light">
          All product data and payment links live in one file:{" "}
          <InlineCode>src/lib/constants.ts</InlineCode>
        </p>
        <p className="mb-4 text-base leading-loose text-text-light">
          The Venmo URL is stored as a constant and on each product via the{" "}
          <InlineCode>venmoLink</InlineCode> field:
        </p>
        <CodeBlock>{`// src/lib/constants.ts

export const VENMO_URL = "https://venmo.com/u/Emma-Cole-724";

export const PRODUCTS: readonly Product[] = [
  {
    id: "strawberry-large",
    name: "Strawberry Hand-Painted Recipe Box: Large",
    description: "The classic and original...",
    price: "$30.00",
    venmoLink: "https://venmo.com/u/Emma-Cole-724",  // ← Replace if needed
    tag: "Strawberry",
    // ...
  },
];`}</CodeBlock>
        <Callout>
          <strong>Changing the Venmo link:</strong> Update the{" "}
          <InlineCode>VENMO_URL</InlineCode> constant and the{" "}
          <InlineCode>venmoLink</InlineCode> on each product in{" "}
          <InlineCode>src/lib/constants.ts</InlineCode>.
        </Callout>
      </>
    ),
  },
  {
    title: "2. Adding or Editing Products",
    content: (
      <>
        <p className="mb-4 text-base leading-loose text-text-light">
          Add a new object to the <InlineCode>PRODUCTS</InlineCode> array in{" "}
          <InlineCode>src/lib/constants.ts</InlineCode>:
        </p>
        <CodeBlock>{`{
  id: "new-product-id",        // Unique ID (no spaces)
  name: "My New Recipe Box",   // Display name
  description: "Description...",
  price: "$95.00",             // Display price
  venmoLink: "https://venmo.com/u/Emma-Cole-724",
  tag: "Display Tag",          // Short label shown on placeholder
  dimensions: '6.5" x 4.4" x 3.6"',  // Optional
  details: ["Fits a 4x6 card", ...],  // Optional bullet list
  images: ["/images/products/my-box-1.jpg", ...],  // Optional
}`}</CodeBlock>
        <Callout>
          The price shown on the site is display-only. The &ldquo;Purchase&rdquo;
          button links to Venmo for payment.
        </Callout>
      </>
    ),
  },
  {
    title: "3. Adding Product Images",
    content: (
      <>
        <p className="mb-4 text-base leading-loose text-text-light">
          Product images are stored in{" "}
          <InlineCode>public/images/products/</InlineCode> and referenced in
          the <InlineCode>images</InlineCode> array on each product:
        </p>
        <ol className="list-inside list-decimal space-y-3 text-base leading-loose text-text-light">
          <li>
            Place images in <InlineCode>public/images/products/</InlineCode>
          </li>
          <li>
            Add paths to the <InlineCode>images</InlineCode> array in{" "}
            <InlineCode>constants.ts</InlineCode> (e.g.{" "}
            <InlineCode>{`"/images/products/my-box-1.jpg"`}</InlineCode>)
          </li>
        </ol>
        <Callout>
          Use square images (1:1) at least 800x800px. The product card shows
          an image gallery with dot navigation when multiple images are
          provided. Products without images show a gradient placeholder.
        </Callout>
      </>
    ),
  },
  {
    title: "4. Changing Colors & Fonts",
    content: (
      <>
        <p className="mb-4 text-base leading-loose text-text-light">
          The color palette is in{" "}
          <InlineCode>src/app/globals.css</InlineCode> inside the{" "}
          <InlineCode>@theme</InlineCode> block:
        </p>
        <CodeBlock>{`@theme {
  --color-cream: #FAF7F2;       /* Main background */
  --color-ivory: #F5F0E8;       /* Secondary background */
  --color-green-dark: #3B4A3A;  /* Primary brand color */
  --color-green: #4E6150;       /* Hover states */
  --color-green-muted: #8A9B87; /* Labels and accents */
  --color-text: #3B3B3B;        /* Body text */
  --color-text-light: #6B6B6B;  /* Secondary text */
  --color-border: #E5DFD5;      /* Borders */
  --color-accent: #C8A96E;      /* Gold accent */
}`}</CodeBlock>
        <p className="mt-4 text-base leading-loose text-text-light">
          Change any hex value to update the color across the entire site.
          Fonts are loaded via Google Fonts in{" "}
          <InlineCode>src/app/layout.tsx</InlineCode>.
        </p>
      </>
    ),
  },
  {
    title: "5. Editing Navigation Links",
    content: (
      <>
        <p className="mb-4 text-base leading-loose text-text-light">
          Navigation links are in{" "}
          <InlineCode>src/lib/constants.ts</InlineCode>:
        </p>
        <CodeBlock>{`export const NAV_LINKS: readonly NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Shop", href: "/#shop" },
  { label: "Stockists", href: "/#stockists" },
  { label: "Shipping & Policies", href: "/#policies" },
  { label: "Contact", href: "/#contact" },
];`}</CodeBlock>
        <p className="mt-4 text-base leading-loose text-text-light">
          Use <InlineCode>/page-name</InlineCode> for separate pages or{" "}
          <InlineCode>/#section-id</InlineCode> for on-page scroll targets.
        </p>
      </>
    ),
  },
  {
    title: "6. Building & Deploying",
    content: (
      <>
        <p className="mb-4 text-base leading-loose text-text-light">
          This site deploys automatically via{" "}
          <strong>Cloudflare Pages</strong>. Every push to the main branch
          triggers a build.
        </p>
        <p className="mb-4 text-base leading-loose text-text-light">
          Cloudflare build settings:
        </p>
        <CodeBlock>{`Build command:     npm run build
Output directory:  out`}</CodeBlock>
        <p className="my-4 text-base leading-loose text-text-light">
          For local development:
        </p>
        <CodeBlock>{`npm run dev       # Start dev server at localhost:3000
npm run build     # Build static export to out/`}</CodeBlock>
      </>
    ),
  },
];

const QUICK_REF: [string, string][] = [
  ["Update Venmo link", "src/lib/constants.ts → venmoLink / VENMO_URL"],
  ["Add/edit products", "src/lib/constants.ts → PRODUCTS"],
  ["Add product images", "public/images/products/ + constants.ts → images"],
  ["Change colors", "src/app/globals.css → @theme"],
  ["Change fonts", "src/app/layout.tsx"],
  ["Edit nav links", "src/lib/constants.ts → NAV_LINKS"],
  ["Edit home page content", "src/app/page.tsx"],
  ["Edit about page", "src/app/about/page.tsx"],
  ["Update site name / SEO", "src/lib/constants.ts + src/app/layout.tsx"],
];

export default function GuidePage() {
  return (
    <>
      {/* Hero */}
      <header className="flex min-h-[45vh] items-center justify-center bg-ivory px-6 pb-16 pt-32 text-center">
        <div className="max-w-[660px] animate-fade-up">
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.25em] text-green-muted">
            Documentation
          </p>
          <h1 className="mb-6 font-heading text-5xl font-light text-green-dark md:text-6xl">
            How to Edit This Site
          </h1>
          <p className="mx-auto max-w-[500px] text-lg leading-loose text-text-light">
            A complete guide to updating products, payment links, styles, and
            more.
          </p>
        </div>
      </header>

      {/* Guide content */}
      <article className="bg-cream px-6 py-24 lg:py-28">
        <div className="mx-auto max-w-[760px] space-y-16">
          {SECTIONS.map((section, i) => (
            <FadeIn key={i}>
              <h2 className="mb-6 font-heading text-3xl font-normal text-green-dark">
                {section.title}
              </h2>
              {section.content}
            </FadeIn>
          ))}

          {/* Quick reference */}
          <FadeIn className="border-t border-border pt-16">
            <h2 className="mb-8 font-heading text-3xl font-normal text-green-dark">
              Quick Reference
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b border-border text-left">
                    <th className="pb-3 pr-6 font-medium text-green-dark">
                      I want to...
                    </th>
                    <th className="pb-3 font-medium text-green-dark">
                      Edit this file
                    </th>
                  </tr>
                </thead>
                <tbody className="text-text-light">
                  {QUICK_REF.map(([action, file], i) => (
                    <tr
                      key={i}
                      className={
                        i < QUICK_REF.length - 1
                          ? "border-b border-border/60"
                          : ""
                      }
                    >
                      <td className="py-3 pr-6">{action}</td>
                      <td className="py-3">
                        <InlineCode>{file}</InlineCode>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeIn>
        </div>
      </article>
    </>
  );
}
