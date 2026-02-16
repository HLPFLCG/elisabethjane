import SectionHeader from "@/components/SectionHeader";
import ProductCard from "@/components/ProductCard";
import FadeIn from "@/components/FadeIn";
import Button from "@/components/Button";
import { PRODUCTS, EXTRAS, CONTACT_EMAIL } from "@/lib/constants";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <header className="flex min-h-svh items-center justify-center bg-ivory bg-[radial-gradient(ellipse_at_20%_50%,rgba(107,127,107,0.06)_0%,transparent_60%),radial-gradient(ellipse_at_80%_30%,rgba(200,169,110,0.05)_0%,transparent_50%)] px-6 pb-20 pt-32 text-center">
        <div className="max-w-[700px] animate-fade-up">
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

      {/* About preview */}
      <section className="bg-cream px-6 py-24 lg:py-28">
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
                vintage botanicals &mdash; and no two are exactly alike.
                That&rsquo;s the whole point.
              </p>
              <a
                href="/about"
                className="mt-2 inline-block text-xs font-medium uppercase tracking-[0.12em] text-green-dark underline underline-offset-4 hover:text-green"
              >
                Read more about us &rarr;
              </a>
            </FadeIn>
            <div className="flex flex-col gap-8">
              {(
                [
                  ["One of a Kind", "Every box is painted individually &mdash; no stamps, no stencils, no two the same."],
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

      {/* Shop */}
      <section id="shop" className="scroll-mt-20 bg-warm-white px-6 py-24 lg:py-28">
        <div className="mx-auto max-w-[1100px]">
          <SectionHeader label="The Collection" title="Shop Recipe Boxes" />

          <FadeIn className="mx-auto -mt-6 mb-12 max-w-[700px] border border-border bg-ivory px-7 py-5 text-center text-sm italic leading-relaxed text-text-light">
            Please know that due to the nature of each recipe box being hand
            painted, it will have slight variations in look and expression. This
            is what makes each box uniquely yours.
          </FadeIn>

          <div className="mx-auto grid max-w-[800px] gap-8 sm:grid-cols-2">
            {PRODUCTS.map((product, i) => (
              <FadeIn key={product.id} delay={i * 100}>
                <ProductCard {...product} />
              </FadeIn>
            ))}
          </div>

          {/* You Might Also Like */}
          {EXTRAS.length > 0 && (
            <div className="mt-20 border-t border-border pt-16">
              <FadeIn>
                <h3 className="mb-10 text-center font-heading text-3xl font-normal text-green-dark">
                  You Might Also Like
                </h3>
              </FadeIn>
              <div className="mx-auto grid max-w-[400px] gap-8">
                {EXTRAS.map((extra, i) => (
                  <FadeIn key={extra.id} delay={i * 100}>
                    <ProductCard {...extra} compact />
                  </FadeIn>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Process */}
      <section className="bg-ivory px-6 py-24 lg:py-28">
        <div className="mx-auto max-w-[1100px]">
          <SectionHeader label="How It's Made" title="The Process" />
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {(
              [
                ["01", "Sketch", "Each design starts as a loose pencil sketch, mapping out where the florals and greenery will go."],
                ["02", "Paint", "Base colors are layered in first, then the details: fine lines, small buds, and the shadows that bring everything together."],
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

      {/* Quote */}
      <section className="bg-green-dark px-6 py-20 lg:py-24">
        <FadeIn className="mx-auto max-w-[800px]">
          <blockquote className="text-center font-heading text-xl font-light italic leading-relaxed text-cream md:text-2xl lg:text-3xl">
            &ldquo;In a world of screens and bookmarked links, a recipe box is
            easily overlooked &mdash; until it&rsquo;s your grandmother&rsquo;s.
            Then, it&rsquo;s no longer just a box; it&rsquo;s a legacy of meals
            shared, traditions honored, and love passed down through
            generations.&rdquo;
          </blockquote>
        </FadeIn>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-20 bg-ivory px-6 py-24 lg:py-28">
        <div className="mx-auto max-w-[500px] text-center">
          <SectionHeader label="Get in Touch" title="Contact" />
          <FadeIn>
            <p className="mb-7 text-base leading-loose text-text-light">
              Questions about custom orders or collaborations or just want to say
              hello? Connect with me here!
            </p>
            <Button href={`mailto:${CONTACT_EMAIL}`}>Email Us</Button>
            <div className="mt-7">
              <a
                href="https://instagram.com/elisabeth.jane.c"
                target="_blank"
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
