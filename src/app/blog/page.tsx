import type { Metadata } from "next";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import { BLOG_POSTS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Stories, inspiration, and tips from Elisabeth Jane — behind the scenes of hand-painted recipe boxes, family traditions, and cottagecore living.",
};

function formatDate(dateString: string): string {
  return new Date(dateString + "T00:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <header className="flex min-h-[50vh] items-center justify-center bg-ivory bg-[radial-gradient(ellipse_at_70%_40%,rgba(200,169,110,0.05)_0%,transparent_50%)] px-6 pb-16 pt-32 text-center">
        <div className="max-w-[660px]">
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.25em] text-green-muted">
            Journal
          </p>
          <h1 className="mb-6 font-heading text-5xl font-light text-green-dark md:text-6xl">
            The Blog
          </h1>
          <p className="mx-auto max-w-[480px] text-lg leading-loose text-text-light">
            Stories, inspiration, and a behind-the-scenes look at life with
            Elisabeth Jane.
          </p>
        </div>
      </header>

      {/* Posts grid */}
      <section className="bg-cream px-6 py-24 lg:py-28">
        <div className="mx-auto max-w-[1100px]">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {BLOG_POSTS.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block overflow-hidden border border-border bg-warm-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(59,74,58,0.08)]"
              >
                <div className="flex h-48 items-center justify-center bg-gradient-to-br from-ivory to-[#E8E2D6]">
                  <span className="font-heading text-lg italic text-green-muted/60">
                    {post.category}
                  </span>
                </div>
                <div className="p-6">
                  <p className="mb-2 text-xs font-medium uppercase tracking-[0.15em] text-green-muted">
                    {post.category} &middot; {formatDate(post.date)}
                  </p>
                  <h2 className="mb-3 font-heading text-xl font-medium text-green-dark transition-colors duration-300 group-hover:text-green">
                    {post.title}
                  </h2>
                  <p className="text-sm leading-relaxed text-text-light">
                    {post.excerpt}
                  </p>
                  <span className="mt-4 inline-block text-xs font-medium uppercase tracking-[0.12em] text-green-dark underline underline-offset-4">
                    Read more
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
