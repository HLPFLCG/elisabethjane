import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import ProductCard from "@/components/ProductCard";
import FadeIn from "@/components/FadeIn";
import Button from "@/components/Button";
import { PRODUCTS, EXTRAS, BLOG_POSTS, CONTACT_EMAIL } from "@/lib/constants";
import { formatDate } from "@/lib/utils";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <header className="flex min-h-svh items-center justify-center bg-ivory bg-[radial-gradient(ellipse_at_20%_50%,rgba(107,127,107,0.06)_0%,transparent_60%),radial-gradient(ellipse_at_80%_30%,rgba(200,169,110,0.05)_0%,transparent_50%)] px-6 pb-20 pt-32 text-center">
        <div className="max-w-[700px] animate-fade-up">
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.25em] text-green-muted">
            Hand-Painted &middot; Heirloom Quality
          </p>
          <h1 className="mb-6 font-heading text-5xl font-light tracking-wide text-green-dark md:text-6xl lg:text-7xl">
            Elisabeth Jane
          </h1>
          <p className="mx-auto mb-10 max-w-[560px] text-lg leading-loose text-text-light">
            Whimsical, hand-painted recipe boxes crafted to hold your most
            treasured family recipes &mdash; and become a timeless heirloom in
            your home.
          </p>
          <Button href="#shop">Shop Recipe Boxes</Button>
        </div>
      </header>

      {/* About preview */}
      <section className="bg-cream px-6 py-24 lg:py-28">
        <div className="mx-auto max-w-[1100px]">
          <SectionHeader label="Our Story" title="A Little About Elisabeth Jane" />
          <div className="grid gap-14 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
            <FadeIn className="space-y-5 text-base leading-loose text-text-light">
              <p>
                Elisabeth Jane was born from a love of nostalgia, homestead
                living, and the art of slowing down. Each recipe box is
                hand-painted with care &mdash; inspired by whimsical florals,
                cottagecore aesthetics, and the timeless beauty of heirloom
                keepsakes.
              </p>
              <p>
                We believe that recipes are more than instructions &mdash; they
                are memories, traditions, and love passed down through
                generations. Our hand-painted recipe boxes are designed to be a
                beautiful home for those stories.
              </p>
              <p>
                Every brushstroke carries intention. Every box is made to be
                cherished, gifted, and handed down.
              </p>
              <Link
                href="/about"
                className="mt-2 inline-block text-xs font-medium uppercase tracking-[0.12em] text-green-dark underline underline-offset-4 hover:text-green"
              >
                Read more about us &rarr;
              </Link>
            </FadeIn>
            <div className="flex flex-col gap-8">
              {(
                [
                  ["Whimsical", "Playful floral designs inspired by nature and nostalgia."],
                  ["Handmade", "Each box is individually hand-painted, making every piece one of a kind."],
                  ["Heirloom", "Crafted to last and be passed down through generations."],
                ] as const
              ).map(([title, desc], i) => (
                <FadeIn
                  key={title}
                  delay={i * 100}
                  className="border-l-[3px] border-green-muted bg-ivory p-7"
                >
                  <h3 className="mb-2 font-heading text-lg font-medium text-green-dark">
                    {title}
                  </h3>
                  <p className="text-sm text-text-light">{desc}</p>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Shop */}
      <section id="shop" className="scroll-mt-20 bg-warm-white px-6 py-24 lg:py-28">
        <div className="mx-auto max-w-[1100px]">
          <SectionHeader label="The Collection" title="Shop Recipe Boxes" />

          <FadeIn className="mx-auto -mt-6 mb-12 max-w-[700px] border border-border bg-ivory px-7 py-5 text-center text-sm italic leading-relaxed text-text-light">
            Please know that due to the nature of each recipe box being hand
            painted, it will have slight variations in look and expression. This
            is what makes each box uniquely yours.
          </FadeIn>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS.map((product, i) => (
              <FadeIn key={product.id} delay={i * 100}>
                <ProductCard {...product} />
              </FadeIn>
            ))}
          </div>

          {/* You Might Also Like */}
          <div className="mt-20 border-t border-border pt-16">
            <FadeIn>
              <h3 className="mb-10 text-center font-heading text-3xl font-normal text-green-dark">
                You Might Also Like
              </h3>
            </FadeIn>
            <div className="mx-auto grid max-w-[700px] gap-8 sm:grid-cols-2">
              {EXTRAS.map((extra, i) => (
                <FadeIn key={extra.id} delay={i * 100}>
                  <ProductCard {...extra} compact />
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-ivory px-6 py-24 lg:py-28">
        <div className="mx-auto max-w-[1100px]">
          <SectionHeader label="Behind the Brush" title="The Process" />
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {(
              [
                ["01", "Design", "Each floral motif is designed by hand, drawing inspiration from vintage botanicals, cottage gardens, and the beauty of the natural world."],
                ["02", "Paint", "Every recipe box is individually hand-painted with care and attention to detail. No two boxes are exactly alike — each one carries its own character."],
                ["03", "Seal & Finish", "Each box is sealed with a protective finish to ensure your heirloom recipe box lasts for generations to come."],
                ["04", "Ship with Love", "Carefully packaged and shipped to your doorstep, ready to hold your most cherished recipes and family traditions."],
              ] as const
            ).map(([num, title, desc], i) => (
              <FadeIn key={num} delay={i * 100} className="p-5 text-center">
                <div className="mb-4 font-heading text-4xl font-light text-green-muted/60">
                  {num}
                </div>
                <h3 className="mb-3 font-heading text-lg font-medium text-green-dark">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-text-light">{desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="bg-green-dark px-6 py-20 lg:py-24">
        <FadeIn className="mx-auto max-w-[800px]">
          <blockquote className="text-center font-heading text-xl font-light italic leading-relaxed text-cream md:text-2xl lg:text-3xl">
            &ldquo;Recipes are more than ingredients and instructions &mdash;
            they are stories, memories, and love. Elisabeth Jane recipe boxes are
            crafted to hold all of it.&rdquo;
          </blockquote>
        </FadeIn>
      </section>

      {/* Latest from the blog */}
      <section className="bg-cream px-6 py-24 lg:py-28">
        <div className="mx-auto max-w-[1100px]">
          <SectionHeader
            label="Journal"
            title="From the Blog"
            description="Stories, inspiration, and a behind-the-scenes look at life with Elisabeth Jane."
          />
          <div className="grid gap-8 md:grid-cols-3">
            {BLOG_POSTS.slice(0, 3).map((post, i) => (
              <FadeIn key={post.slug} delay={i * 100}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block h-full border border-border bg-warm-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(59,74,58,0.08)]"
                >
                  <div className="flex h-36 items-center justify-center bg-gradient-to-br from-ivory to-[#E8E2D6]">
                    <span className="font-heading text-base italic text-green-muted/60">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <p className="mb-2 text-[0.65rem] font-medium uppercase tracking-[0.15em] text-green-muted">
                      {formatDate(post.date)}
                    </p>
                    <h3 className="font-heading text-lg font-medium text-green-dark transition-colors duration-300 group-hover:text-green">
                      {post.title}
                    </h3>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
          <FadeIn className="mt-10 text-center">
            <Button href="/blog" variant="secondary">
              View All Posts
            </Button>
          </FadeIn>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-ivory px-6 py-24 lg:py-28">
        <div className="mx-auto max-w-[500px] text-center">
          <SectionHeader label="Get in Touch" title="Contact" />
          <FadeIn>
            <p className="mb-7 text-base leading-loose text-text-light">
              For custom orders, wholesale inquiries, or just to say hello
              &mdash; we&rsquo;d love to hear from you.
            </p>
            <Button href={`mailto:${CONTACT_EMAIL}`}>Email Us</Button>
            <div className="mt-7">
              <a
                href="#"
                className="text-xs uppercase tracking-[0.12em] text-green-muted hover:text-green-dark"
                aria-label="Instagram"
              >
                Instagram
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
