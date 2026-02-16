import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Editing Guide",
  description:
    "A complete guide on how to edit and customize the Elisabeth Jane website — update products, Stripe links, blog posts, and more.",
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

export default function GuidePage() {
  return (
    <>
      {/* Hero */}
      <header className="flex min-h-[45vh] items-center justify-center bg-ivory px-6 pb-16 pt-32 text-center">
        <div className="max-w-[660px]">
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.25em] text-green-muted">
            Documentation
          </p>
          <h1 className="mb-6 font-heading text-5xl font-light text-green-dark md:text-6xl">
            How to Edit This Site
          </h1>
          <p className="mx-auto max-w-[500px] text-lg leading-loose text-text-light">
            A complete guide to updating products, Stripe links, blog posts,
            styles, and more.
          </p>
        </div>
      </header>

      {/* Guide content */}
      <article className="bg-cream px-6 py-24 lg:py-28">
        <div className="mx-auto max-w-[760px] space-y-16">
          {/* Overview */}
          <section>
            <h2 className="mb-6 font-heading text-3xl font-normal text-green-dark">
              Overview
            </h2>
            <p className="mb-4 text-base leading-loose text-text-light">
              This website is built with <strong>Next.js</strong> (App Router),{" "}
              <strong>TypeScript</strong>, and <strong>Tailwind CSS</strong>. It
              exports as a fully static site, so it can be hosted anywhere
              (Netlify, Vercel, GitHub Pages, etc.) with zero server costs.
            </p>
            <p className="text-base leading-loose text-text-light">
              The key files you&rsquo;ll need to edit are organized into a clean
              structure. Here&rsquo;s a quick map:
            </p>
          </section>

          {/* File structure */}
          <section>
            <h2 className="mb-6 font-heading text-3xl font-normal text-green-dark">
              Project Structure
            </h2>
            <CodeBlock>{`src/
├── app/
│   ├── layout.tsx          # Global layout (header, footer, fonts, metadata)
│   ├── globals.css         # Global styles and Tailwind theme colors
│   ├── page.tsx            # Home page
│   ├── about/page.tsx      # About page
│   ├── blog/page.tsx       # Blog listing page
│   ├── blog/[slug]/page.tsx # Individual blog post page
│   └── guide/page.tsx      # This guide page
├── components/
│   ├── Header.tsx          # Navigation bar
│   ├── Footer.tsx          # Site footer
│   ├── ProductCard.tsx     # Product card component
│   └── SectionHeader.tsx   # Reusable section header
└── lib/
    └── constants.ts        # Products, blog posts, nav links, site info`}</CodeBlock>
          </section>

          {/* Stripe Links */}
          <section>
            <h2 className="mb-6 font-heading text-3xl font-normal text-green-dark">
              1. Updating Stripe Payment Links
            </h2>
            <p className="mb-4 text-base leading-loose text-text-light">
              All product data and Stripe links live in one file:{" "}
              <InlineCode>src/lib/constants.ts</InlineCode>
            </p>
            <p className="mb-4 text-base leading-loose text-text-light">
              Find the <InlineCode>PRODUCTS</InlineCode> and{" "}
              <InlineCode>EXTRAS</InlineCode> arrays and replace the{" "}
              <InlineCode>stripeLink</InlineCode> values with your actual Stripe
              Payment Link URLs:
            </p>
            <CodeBlock>{`// src/lib/constants.ts

export const PRODUCTS = [
  {
    id: "classic-floral",
    name: "Classic Floral Recipe Box",
    description: "A timeless floral design...",
    price: "$85.00",
    stripeLink: "https://buy.stripe.com/YOUR_ACTUAL_LINK", // ← Replace this
    tag: "Hand-Painted Floral",
  },
  // ... more products
];`}</CodeBlock>
            <div className="mt-6 border-l-[3px] border-accent bg-ivory p-6">
              <p className="text-sm leading-relaxed text-text-light">
                <strong>How to get Stripe Payment Links:</strong> Log into your{" "}
                <a
                  href="https://dashboard.stripe.com/payment-links"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-dark underline underline-offset-2"
                >
                  Stripe Dashboard
                </a>
                , go to Payment Links, create a new link for each product, and
                paste the URL into the <InlineCode>stripeLink</InlineCode> field.
              </p>
            </div>
          </section>

          {/* Products */}
          <section>
            <h2 className="mb-6 font-heading text-3xl font-normal text-green-dark">
              2. Adding or Editing Products
            </h2>
            <p className="mb-4 text-base leading-loose text-text-light">
              To add a new product, add a new object to the{" "}
              <InlineCode>PRODUCTS</InlineCode> or{" "}
              <InlineCode>EXTRAS</InlineCode> array in{" "}
              <InlineCode>src/lib/constants.ts</InlineCode>:
            </p>
            <CodeBlock>{`{
  id: "new-product-id",        // Unique ID (no spaces)
  name: "My New Recipe Box",   // Display name
  description: "Description here...",  // For main products
  price: "$95.00",             // Display price
  stripeLink: "https://buy.stripe.com/...",  // Stripe link
  tag: "Display Tag",          // Short label shown on image
}`}</CodeBlock>
            <p className="mt-4 text-base leading-loose text-text-light">
              To change prices, simply update the <InlineCode>price</InlineCode>{" "}
              string. Remember to update your Stripe Payment Link price too — the
              price shown on the site is just for display; the actual charge
              happens through Stripe.
            </p>
          </section>

          {/* Blog posts */}
          <section>
            <h2 className="mb-6 font-heading text-3xl font-normal text-green-dark">
              3. Adding Blog Posts
            </h2>
            <p className="mb-4 text-base leading-loose text-text-light">
              Blog posts also live in{" "}
              <InlineCode>src/lib/constants.ts</InlineCode> in the{" "}
              <InlineCode>BLOG_POSTS</InlineCode> array. Add a new entry:
            </p>
            <CodeBlock>{`{
  slug: "my-new-post",                   // URL-friendly name
  title: "My New Blog Post Title",       // Full title
  excerpt: "A short summary...",          // Shown on blog listing
  date: "2026-03-01",                    // YYYY-MM-DD format
  category: "Behind the Scenes",         // Category label
  content: \`
Your blog post content goes here.

## Use Headings Like This

Regular paragraphs are separated by blank lines.
Use *asterisks* for italic text.
  \`,
}`}</CodeBlock>
            <div className="mt-6 border-l-[3px] border-accent bg-ivory p-6">
              <p className="text-sm leading-relaxed text-text-light">
                <strong>Formatting:</strong> Use{" "}
                <InlineCode>## Heading</InlineCode> for section headings and{" "}
                <InlineCode>*text*</InlineCode> for italics. Separate paragraphs
                with a blank line.
              </p>
            </div>
          </section>

          {/* Colors and fonts */}
          <section>
            <h2 className="mb-6 font-heading text-3xl font-normal text-green-dark">
              4. Changing Colors &amp; Fonts
            </h2>
            <p className="mb-4 text-base leading-loose text-text-light">
              The color palette is defined in{" "}
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
              Fonts are loaded in{" "}
              <InlineCode>src/app/layout.tsx</InlineCode> using Next.js
              Google Fonts integration — swap them by changing the import.
            </p>
          </section>

          {/* Navigation */}
          <section>
            <h2 className="mb-6 font-heading text-3xl font-normal text-green-dark">
              5. Editing Navigation Links
            </h2>
            <p className="mb-4 text-base leading-loose text-text-light">
              Navigation links are in{" "}
              <InlineCode>src/lib/constants.ts</InlineCode>:
            </p>
            <CodeBlock>{`export const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Shop", href: "/#shop" },
  { label: "Blog", href: "/blog" },
  { label: "Guide", href: "/guide" },
];`}</CodeBlock>
            <p className="mt-4 text-base leading-loose text-text-light">
              Add, remove, or reorder links here. Use{" "}
              <InlineCode>/page-name</InlineCode> for pages or{" "}
              <InlineCode>/#section-id</InlineCode> for on-page scroll targets.
            </p>
          </section>

          {/* Images */}
          <section>
            <h2 className="mb-6 font-heading text-3xl font-normal text-green-dark">
              6. Adding Product Images
            </h2>
            <p className="mb-4 text-base leading-loose text-text-light">
              Currently, products show placeholder gradients. To add real images:
            </p>
            <ol className="list-inside list-decimal space-y-3 text-base leading-loose text-text-light">
              <li>
                Place your images in the <InlineCode>public/</InlineCode> folder
                (e.g., <InlineCode>public/products/classic-floral.jpg</InlineCode>)
              </li>
              <li>
                Add an <InlineCode>image</InlineCode> field to each product in{" "}
                <InlineCode>constants.ts</InlineCode>
              </li>
              <li>
                Update <InlineCode>ProductCard.tsx</InlineCode> to use{" "}
                <InlineCode>next/image</InlineCode> with the image path
              </li>
            </ol>
            <div className="mt-6 border-l-[3px] border-accent bg-ivory p-6">
              <p className="text-sm leading-relaxed text-text-light">
                <strong>Image tips:</strong> Use square images (1:1 ratio) at
                least 800x800px. Optimize with tools like{" "}
                <a
                  href="https://squoosh.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-dark underline underline-offset-2"
                >
                  Squoosh
                </a>{" "}
                before uploading. WebP format is recommended for best
                performance.
              </p>
            </div>
          </section>

          {/* Site info */}
          <section>
            <h2 className="mb-6 font-heading text-3xl font-normal text-green-dark">
              7. Updating Site Info &amp; Metadata
            </h2>
            <p className="mb-4 text-base leading-loose text-text-light">
              Site name, description, and URL are in{" "}
              <InlineCode>src/lib/constants.ts</InlineCode>:
            </p>
            <CodeBlock>{`export const SITE_NAME = "Elisabeth Jane";
export const SITE_DESCRIPTION = "Hand-painted recipe boxes...";
export const SITE_URL = "https://elisabethjane.com";`}</CodeBlock>
            <p className="mt-4 text-base leading-loose text-text-light">
              The contact email is in the Contact section of{" "}
              <InlineCode>src/app/page.tsx</InlineCode>. Search for{" "}
              <InlineCode>mailto:</InlineCode> to find it.
            </p>
          </section>

          {/* Building and deploying */}
          <section>
            <h2 className="mb-6 font-heading text-3xl font-normal text-green-dark">
              8. Building &amp; Deploying
            </h2>
            <p className="mb-4 text-base leading-loose text-text-light">
              To build the site for production:
            </p>
            <CodeBlock>{`npm run build`}</CodeBlock>
            <p className="my-4 text-base leading-loose text-text-light">
              This generates a static <InlineCode>out/</InlineCode> folder with
              all the HTML, CSS, and JavaScript files. Upload this folder to any
              static hosting provider:
            </p>
            <ul className="list-inside list-disc space-y-2 text-base leading-loose text-text-light">
              <li>
                <strong>Netlify:</strong> Drag the{" "}
                <InlineCode>out/</InlineCode> folder into the Netlify dashboard,
                or connect your Git repo
              </li>
              <li>
                <strong>Vercel:</strong> Connect your Git repo and it
                auto-deploys on push
              </li>
              <li>
                <strong>GitHub Pages:</strong> Push the{" "}
                <InlineCode>out/</InlineCode> folder to a{" "}
                <InlineCode>gh-pages</InlineCode> branch
              </li>
            </ul>
            <p className="mt-4 text-base leading-loose text-text-light">
              For local development, run:
            </p>
            <CodeBlock>{`npm run dev`}</CodeBlock>
            <p className="mt-4 text-base leading-loose text-text-light">
              This starts a development server at{" "}
              <InlineCode>http://localhost:3000</InlineCode> with hot reloading —
              changes appear instantly as you edit files.
            </p>
          </section>

          {/* Quick reference */}
          <section className="border-t border-border pt-16">
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
                  <tr className="border-b border-border/60">
                    <td className="py-3 pr-6">Update Stripe links</td>
                    <td className="py-3">
                      <InlineCode>src/lib/constants.ts</InlineCode> &rarr;{" "}
                      <InlineCode>stripeLink</InlineCode>
                    </td>
                  </tr>
                  <tr className="border-b border-border/60">
                    <td className="py-3 pr-6">Add/edit products</td>
                    <td className="py-3">
                      <InlineCode>src/lib/constants.ts</InlineCode> &rarr;{" "}
                      <InlineCode>PRODUCTS</InlineCode> /{" "}
                      <InlineCode>EXTRAS</InlineCode>
                    </td>
                  </tr>
                  <tr className="border-b border-border/60">
                    <td className="py-3 pr-6">Add a blog post</td>
                    <td className="py-3">
                      <InlineCode>src/lib/constants.ts</InlineCode> &rarr;{" "}
                      <InlineCode>BLOG_POSTS</InlineCode>
                    </td>
                  </tr>
                  <tr className="border-b border-border/60">
                    <td className="py-3 pr-6">Change colors</td>
                    <td className="py-3">
                      <InlineCode>src/app/globals.css</InlineCode> &rarr;{" "}
                      <InlineCode>@theme</InlineCode>
                    </td>
                  </tr>
                  <tr className="border-b border-border/60">
                    <td className="py-3 pr-6">Change fonts</td>
                    <td className="py-3">
                      <InlineCode>src/app/layout.tsx</InlineCode>
                    </td>
                  </tr>
                  <tr className="border-b border-border/60">
                    <td className="py-3 pr-6">Edit nav links</td>
                    <td className="py-3">
                      <InlineCode>src/lib/constants.ts</InlineCode> &rarr;{" "}
                      <InlineCode>NAV_LINKS</InlineCode>
                    </td>
                  </tr>
                  <tr className="border-b border-border/60">
                    <td className="py-3 pr-6">Edit home page content</td>
                    <td className="py-3">
                      <InlineCode>src/app/page.tsx</InlineCode>
                    </td>
                  </tr>
                  <tr className="border-b border-border/60">
                    <td className="py-3 pr-6">Edit about page</td>
                    <td className="py-3">
                      <InlineCode>src/app/about/page.tsx</InlineCode>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-6">Update site name / SEO</td>
                    <td className="py-3">
                      <InlineCode>src/lib/constants.ts</InlineCode> +{" "}
                      <InlineCode>src/app/layout.tsx</InlineCode>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
