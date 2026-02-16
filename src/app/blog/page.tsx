import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import { BLOG_POSTS } from "@/lib/constants";
import { formatDate, estimateReadingTime } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Stories, inspiration, and tips from Elisabeth Jane — behind the scenes of hand-painted recipe boxes, family traditions, and cottagecore living.",
};

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <header className="flex min-h-[50vh] items-center justify-center bg-ivory bg-[radial-gradient(ellipse_at_70%_40%,rgba(200,169,110,0.05)_0%,transparent_50%)] px-6 pb-16 pt-32 text-center">
        <div className="max-w-[660px] animate-fade-up">
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
            {BLOG_POSTS.map((post, i) => (
              <FadeIn key={post.slug} delay={i * 100}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block h-full overflow-hidden border border-border bg-warm-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(59,74,58,0.08)]"
                >
                  <div className="flex h-48 items-center justify-center bg-gradient-to-br from-ivory to-[#E8E2D6] transition-transform duration-700 group-hover:scale-[1.02]">
                    <span className="font-heading text-lg italic text-green-muted/60">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="mb-2 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.15em] text-green-muted">
                      <span>{post.category}</span>
                      <span className="text-border">&middot;</span>
                      <span>{formatDate(post.date)}</span>
                    </div>
                    <h2 className="mb-3 font-heading text-xl font-medium text-green-dark transition-colors duration-300 group-hover:text-green">
                      {post.title}
                    </h2>
                    <p className="text-sm leading-relaxed text-text-light">
                      {post.excerpt}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-xs font-medium uppercase tracking-[0.12em] text-green-dark underline underline-offset-4">
                        Read more
                      </span>
                      <span className="text-[0.65rem] text-text-light">
                        {estimateReadingTime(post.content)} min read
                      </span>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
