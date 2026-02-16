import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOG_POSTS } from "@/lib/constants";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

function formatDate(dateString: string): string {
  return new Date(dateString + "T00:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function renderContent(content: string) {
  const lines = content.trim().split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) {
      i++;
      continue;
    }
    if (trimmed.startsWith("## ")) {
      elements.push(
        <h2
          key={i}
          className="mb-4 mt-10 font-heading text-2xl font-medium text-green-dark"
        >
          {trimmed.slice(3)}
        </h2>
      );
    } else {
      // Handle *italic* text
      const parts = trimmed.split(/(\*[^*]+\*)/g);
      const rendered = parts.map((part, j) => {
        if (part.startsWith("*") && part.endsWith("*")) {
          return <em key={j}>{part.slice(1, -1)}</em>;
        }
        return part;
      });
      elements.push(
        <p key={i} className="mb-5 text-base leading-loose text-text-light">
          {rendered}
        </p>
      );
    }
    i++;
  }
  return elements;
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const otherPosts = BLOG_POSTS.filter((p) => p.slug !== slug);

  return (
    <>
      {/* Header */}
      <header className="flex min-h-[45vh] items-center justify-center bg-ivory px-6 pb-16 pt-32 text-center">
        <div className="max-w-[700px]">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.15em] text-green-muted">
            {post.category} &middot; {formatDate(post.date)}
          </p>
          <h1 className="mb-6 font-heading text-4xl font-normal text-green-dark md:text-5xl">
            {post.title}
          </h1>
          <p className="mx-auto max-w-[540px] text-base leading-relaxed text-text-light">
            {post.excerpt}
          </p>
        </div>
      </header>

      {/* Content */}
      <article className="bg-cream px-6 py-24 lg:py-28">
        <div className="mx-auto max-w-[720px]">{renderContent(post.content)}</div>
      </article>

      {/* More posts */}
      {otherPosts.length > 0 && (
        <section className="border-t border-border bg-warm-white px-6 py-24">
          <div className="mx-auto max-w-[1100px]">
            <h2 className="mb-10 text-center font-heading text-3xl font-normal text-green-dark">
              More from the Blog
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              {otherPosts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group block border border-border bg-cream p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(59,74,58,0.06)]"
                >
                  <p className="mb-2 text-xs font-medium uppercase tracking-[0.15em] text-green-muted">
                    {p.category}
                  </p>
                  <h3 className="mb-2 font-heading text-xl font-medium text-green-dark group-hover:text-green">
                    {p.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-text-light">
                    {p.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back */}
      <div className="bg-cream px-6 pb-16 text-center">
        <Link
          href="/blog"
          className="text-xs font-medium uppercase tracking-[0.12em] text-green-dark underline underline-offset-4 hover:text-green"
        >
          &larr; Back to all posts
        </Link>
      </div>
    </>
  );
}
