import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import ProductCard from "@/components/ProductCard";
import FadeIn from "@/components/FadeIn";
import Button from "@/components/Button";
import { PRODUCTS, CONTACT_EMAIL, INSTAGRAM_URL } from "@/lib/constants";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <header className="relative flex min-h-svh items-center justify-center overflow-hidden bg-ivory px-6 pb-20 pt-32 text-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/hero.png')",
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-ivory/80" aria-hidden="true" />
        <div className="relative z-10 max-w-[700px] animate-fade-up">
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.25em] text-green-muted">
            Hand-Painted Recipe Boxes
          </p>
          <h1 className="mb-6 font-heading text-5xl font-light tracking-wide text-green-dark md:text-6xl lg:text-7xl">
            Elisabeth Jane
          </h1>
          <p className="mx-auto mb-10 max-w-[560px] text-lg leading-loose text-text-light">
            Hand-painted recipe boxes made to be used, loved, and passed down.
          </p>
          <Button href="#shop">Shop Recipe Boxes</Button>
        </div>
      </header>

      {/* Shop — immediately after hero */}
      <section id="shop" className="scroll-mt-20 bg-warm-white px-6 py-24 lg:py-28">
        <div className="mx-auto max-w-[1100px]">
          <SectionHeader label="The Collection" title="Shop Recipe Boxes" />

          <FadeIn className="mx-auto -mt-4 mb-14 max-w-[540px] text-center text-sm italic leading-relaxed text-text-light">
            Each box is hand-painted and will have slight variations &mdash;
            this is what makes it uniquely yours.
          </FadeIn>

          <div className="mx-auto grid max-w-[960px] gap-10 lg:grid-cols-2">
            {PRODUCTS.map((product, i) => (
              <FadeIn key={product.id} delay={i * 120}>
                <ProductCard {...product} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="relative overflow-hidden bg-green-dark px-6 py-20 lg:py-24">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage:
              "url('https://unsplash.com/photos/a-pile-of-ripe-strawberries-with-a-single-white-flower-gA4DGA0nL5s')",
          }}
          aria-hidden="true"
        />
        <FadeIn className="relative z-10 mx-auto max-w-[800px]">
          <blockquote className="text-center font-heading text-lg font-light italic leading-relaxed text-cream md:text-xl lg:text-2xl">
            &ldquo;In a world of screens and bookmarked links, a recipe box is
            easily overlooked&mdash;until it&rsquo;s your grandmother&rsquo;s.
            Then, it&rsquo;s no longer just a box; it&rsquo;s a legacy.
            It&rsquo;s the scent of fresh morning coffee and the secret to her
            homemade cinnamon rolls, captured on paper. This is more than a
            kitchen staple; it&rsquo;s an heirloom meant to be filled with your
            own &lsquo;slow&rsquo; moments and passed down to the next
            generation.&rdquo;
          </blockquote>
        </FadeIn>
      </section>

      {/* About preview */}
      <section id="about" className="scroll-mt-20 bg-cream px-6 py-24 lg:py-28">
        <div className="mx-auto max-w-[1100px]">
          <SectionHeader label="Our Story" title="About Elisabeth Jane" />
          <div className="grid gap-14 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
            <FadeIn className="space-y-5 text-base leading-loose text-text-light">
              <p>
                Elisabeth Jane started with a single recipe box &mdash;
                hand-painted as a gift &mdash; that turned into something much
                bigger. Now every box is still painted one at a time, start to
                finish, by hand.
              </p>
              <p>
                The designs pull from nature &mdash; wildflowers, garden herbs,
                vintage botanicals &mdash; and no two are exactly alike. That's
                the whole point.
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
                  ["One of a Kind", "Every box is painted individually. No stamps, no stencils, no two the same."],
                  ["Made to Last", "Sealed and finished so they hold up to real, everyday use."],
                  ["Nature-Inspired", "Florals, herbs, and botanicals drawn from the garden."],
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

      {/* Process */}
      <section className="relative overflow-hidden bg-ivory px-6 py-24 lg:py-28">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://unsplash.com/photos/a-close-up-of-strawberries-and-flowers-on-a-table-uSMGVzeRUX0",
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-ivory/90" aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-[1100px]">
          <SectionHeader label="How It's Made" title="The Process" />
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {(
              [
                ["01", "Sketch", "Each design starts as a loose pencil sketch \u2014 mapping out where the florals and greenery will go."],
                ["02", "Paint", "Base colours are layered in first, then the details: fine lines, small buds, and the shadows that bring everything together."],
                ["03", "Seal", "A protective finish goes on last so the box can handle real kitchen life, not just sit on a shelf."],
                ["04", "Ship", "Carefully wrapped and sent out to you."],
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

      {/* Stockists */}
      <section id="stockists" className="scroll-mt-20 bg-cream px-6 py-24 lg:py-28">
        <div className="mx-auto max-w-[700px] text-center">
          <SectionHeader label="Find Us" title="Stockists" />
          <FadeIn>
            <div className="border border-border bg-warm-white p-10">
              <h3 className="font-heading text-xl font-medium text-green-dark">
                Stoffer Home
              </h3>
              <h3 className="font-heading text-xl font-medium text-green-dark">
                Spring Sweet
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-light">
                Grand Rapids, Michigan
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Shipping & Policies */}
      <section id="policies" className="scroll-mt-20 bg-warm-white px-6 py-24 lg:py-28">
        <div className="mx-auto max-w-[800px]">
          <SectionHeader label="Good to Know" title="Shipping &amp; Policies" />
          <div className="grid gap-10 md:grid-cols-2">
            <FadeIn className="space-y-4">
              <h3 className="font-heading text-lg font-medium text-green-dark">
                Shipping
              </h3>
              <div className="space-y-3 text-sm leading-relaxed text-text-light">
                <p>
                  Every recipe box is carefully wrapped and shipped in a small
                  cardboard box to ensure it arrives safely.
                </p>
                <p>
                  Orders are typically shipped within 5&ndash;7 business days, as
                  each box is hand-painted to order.
                </p>
                <p>
                  <span className="font-medium text-green-dark">Free local pick up</span>{" "}
                  is available in the Grand Rapids, Michigan area.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={100} className="space-y-4">
              <h3 className="font-heading text-lg font-medium text-green-dark">
                Policies
              </h3>
              <div className="space-y-3 text-sm leading-relaxed text-text-light">
                <p>
                  Because each box is hand-painted and made to order, all sales
                  are final. I am unable to accept returns or exchanges.
                </p>
                <p>
                  If your box arrives damaged during shipping, please reach out
                  within 7 days of delivery and I will do my best to make it
                  right.
                </p>
                <p>
                  Please note that due to the nature of each recipe box being
                  hand-painted, slight variations in color and design are
                  normal&mdash;this is what makes each box uniquely yours.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-20 bg-ivory px-6 py-24 lg:py-28">
        <div className="mx-auto max-w-[500px] text-center">
          <SectionHeader label="Get in Touch" title="Contact" />
          <FadeIn>
            <p className="mb-7 text-base leading-loose text-text-light">
              Questions about custom orders or collaborations or just want to
              say hello? Connect with me here!
            </p>
            <Button href={`mailto:${CONTACT_EMAIL}`}>Email Me</Button>
            <p className="mt-4 text-sm text-text-light">{CONTACT_EMAIL}</p>
            <div className="mt-7">
              <a
                href={INSTAGRAM_URL}
                target="https://www.instagram.com/elisabeth.jane.c/"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-[0.12em] text-green-muted hover:text-green-dark"
                aria-label="Instagram"
              >
                @elisabeth.jane.c
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
