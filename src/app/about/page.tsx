import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import FadeIn from "@/components/FadeIn";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story behind Elisabeth Jane hand-painted recipe boxes.",
};

const VALUES: readonly [string, string][] = [
  [
    "Handmade, Always",
    "Every step is done by hand — sketch, paint, seal. No shortcuts.",
  ],
  [
    "Built to Last",
    "These are meant to be used in a real kitchen, not just displayed. Sealed and finished to hold up.",
  ],
  [
    "Nature-Inspired",
    "Wildflowers, herbs, garden roses. The designs come from what's growing outside.",
  ],
  [
    "One at a Time",
    "No batch production. Each box gets individual attention from start to finish.",
  ],
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <header className="flex min-h-[60vh] items-center justify-center bg-ivory bg-[radial-gradient(ellipse_at_30%_40%,rgba(107,127,107,0.06)_0%,transparent_60%)] px-6 pb-16 pt-32 text-center">
        <div className="max-w-[660px] animate-fade-up">
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.25em] text-green-muted">
            Our Story
          </p>
          <h1 className="mb-6 font-heading text-5xl font-light text-green-dark md:text-6xl">
            About Elisabeth Jane
          </h1>
          <p className="mx-auto max-w-[520px] text-lg leading-loose text-text-light">
            It started with one recipe box, made as a gift.
          </p>
        </div>
      </header>

      {/* Story */}
      <section className="bg-cream px-6 py-24 lg:py-28">
        <div className="mx-auto max-w-[720px]">
          <FadeIn className="space-y-6 text-base leading-loose text-text-light">
            <p>
              I painted a recipe box for a friend and she asked if I could make
              one for her sister. Then her mum wanted one. It grew from there.
            </p>
            <p>
              Every box is still hand-painted from start to finish &mdash; no
              stencils, no assembly line. The designs are inspired by the things
              I see in my garden and in old botanical prints. No two are exactly
              the same.
            </p>
            <p>
              I like the idea that something I painted might end up in
              someone&rsquo;s kitchen for years, holding the recipes they
              actually cook from. That&rsquo;s the goal.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Values */}
      <section className="bg-ivory px-6 py-24 lg:py-28">
        <div className="mx-auto max-w-[1100px]">
          <SectionHeader label="What We Believe" title="Our Values" />
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {VALUES.map(([title, desc], i) => (
              <FadeIn
                key={title}
                delay={i * 80}
                className="border-t-[3px] border-green-muted/40 bg-cream p-8"
              >
                <h3 className="mb-3 font-heading text-xl font-medium text-green-dark">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-text-light">{desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* The Artist */}
      <section className="bg-cream px-6 py-24 lg:py-28">
        <div className="mx-auto max-w-[720px]">
          <SectionHeader label="The Artist" title="Behind the Brush" />
          <FadeIn className="space-y-6 text-base leading-loose text-text-light">
            <p>
              I&rsquo;ve always been drawn to making everyday things look nicer
              than they need to. A recipe box felt like a natural fit &mdash;
              something practical that could also be beautiful.
            </p>
            <p>
              Most of my inspiration comes from my garden and from old botanical
              illustrations. I like the looseness of hand-painted work &mdash;
              the slight imperfections are what make each piece feel real.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-dark px-6 py-20 text-center">
        <FadeIn className="mx-auto max-w-[600px]">
          <h2 className="mb-6 font-heading text-3xl font-light text-cream md:text-4xl">
            Ready to Start Your Collection?
          </h2>
          <p className="mb-8 text-base leading-relaxed text-cream/70">
            Browse the current collection and find one you love.
          </p>
          <Button href="/#shop" variant="inverse">
            Shop Now
          </Button>
        </FadeIn>
      </section>
    </>
  );
}
