import type { Metadata } from "next";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Elisabeth Jane — the story, the artist, and the love behind every hand-painted recipe box.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <header className="flex min-h-[60vh] items-center justify-center bg-ivory bg-[radial-gradient(ellipse_at_30%_40%,rgba(107,127,107,0.06)_0%,transparent_60%)] px-6 pb-16 pt-32 text-center">
        <div className="max-w-[660px]">
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.25em] text-green-muted">
            Our Story
          </p>
          <h1 className="mb-6 font-heading text-5xl font-light text-green-dark md:text-6xl">
            About Elisabeth Jane
          </h1>
          <p className="mx-auto max-w-[520px] text-lg leading-loose text-text-light">
            Born from a love of nostalgia, homestead living, and the art of
            slowing down.
          </p>
        </div>
      </header>

      {/* Story */}
      <section className="bg-cream px-6 py-24 lg:py-28">
        <div className="mx-auto max-w-[720px]">
          <div className="space-y-6 text-base leading-loose text-text-light">
            <p>
              Elisabeth Jane started as a kitchen-table dream &mdash; a single
              hand-painted recipe box, made as a gift, that sparked something
              much bigger. What began as one box for a friend quickly became a
              passion for creating beautiful, meaningful keepsakes that honor the
              art of cooking and the love woven into family recipes.
            </p>
            <p>
              Every Elisabeth Jane recipe box is hand-painted from start to
              finish. There are no shortcuts, no assembly lines, no two boxes
              that look exactly the same. Each one is a small work of art,
              created with the same care and intention you pour into your
              favorite family recipes.
            </p>
            <p>
              The aesthetic is rooted in whimsy, cottagecore, and the beauty of
              the natural world. Think wildflower meadows, cottage gardens, and
              sun-drenched herb patches. Think the feeling of flipping through
              your grandmother&rsquo;s handwritten recipe cards on a Sunday
              afternoon. That warmth, that nostalgia &mdash; that&rsquo;s what
              Elisabeth Jane is all about.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-ivory px-6 py-24 lg:py-28">
        <div className="mx-auto max-w-[1100px]">
          <SectionHeader label="What We Believe" title="Our Values" />
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {(
              [
                [
                  "Slow & Intentional",
                  "We believe in the beauty of slowing down. Every box is painted with patience and care — never rushed, never mass-produced.",
                ],
                [
                  "Handmade Always",
                  "From sketch to seal, every step is done by hand. This is what gives each box its soul, its character, its one-of-a-kind beauty.",
                ],
                [
                  "Rooted in Nostalgia",
                  "We draw inspiration from the past — vintage botanicals, grandmother's kitchens, the timeless ritual of cooking for the people you love.",
                ],
                [
                  "Built to Last",
                  "These aren't decorative trinkets. They're heirloom-quality keepsakes designed to be used, loved, and passed down through generations.",
                ],
                [
                  "Nature-Inspired",
                  "Wildflowers, herbs, garden roses — the natural world is our palette. Every design is a love letter to the beauty growing right outside your door.",
                ],
                [
                  "Made with Love",
                  "At the heart of everything we do is love — for the craft, for the tradition of family cooking, and for the people who trust us with their stories.",
                ],
              ] as const
            ).map(([title, desc]) => (
              <div
                key={title}
                className="border-t-[3px] border-green-muted/40 bg-cream p-8"
              >
                <h3 className="mb-3 font-heading text-xl font-medium text-green-dark">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-text-light">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Artist */}
      <section className="bg-cream px-6 py-24 lg:py-28">
        <div className="mx-auto max-w-[720px]">
          <SectionHeader label="The Artist" title="Behind the Brush" />
          <div className="space-y-6 text-base leading-loose text-text-light">
            <p>
              Elisabeth Jane is the creative vision of an artist who believes
              that everyday objects should be beautiful. Inspired by cottage
              gardens, vintage flora, and the warmth of a well-loved kitchen,
              she set out to create something that lives at the intersection of
              art and home.
            </p>
            <p>
              Her work is influenced by the hand-painted flora and elegant
              typography of brands she admires &mdash; the delicate artistry
              that turns a simple object into something you want to display,
              touch, and treasure.
            </p>
            <p>
              When she&rsquo;s not painting, you can find her tending her
              garden, testing new recipes, and dreaming up new designs for the
              next collection.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-dark px-6 py-20 text-center">
        <div className="mx-auto max-w-[600px]">
          <h2 className="mb-6 font-heading text-3xl font-light text-cream md:text-4xl">
            Ready to Start Your Collection?
          </h2>
          <p className="mb-8 text-base leading-relaxed text-cream/70">
            Browse our hand-painted recipe boxes and find the perfect home for
            your family&rsquo;s most treasured recipes.
          </p>
          <Link
            href="/#shop"
            className="inline-block bg-cream px-9 py-4 text-xs font-medium uppercase tracking-[0.12em] text-green-dark transition-all duration-300 hover:-translate-y-0.5 hover:bg-ivory"
          >
            Shop Now
          </Link>
        </div>
      </section>
    </>
  );
}
