import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import FadeIn from "@/components/FadeIn";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story behind Elisabeth Jane hand-painted recipe boxes.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <header className="flex min-h-[60vh] items-center justify-center bg-ivory bg-[radial-gradient(ellipse_at_30%_40%,rgba(107,127,107,0.06)_0%,transparent_60%)] px-6 pb-16 pt-32 text-center">
        <div className="max-w-[660px] animate-fade-up">
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.25em] text-green-muted">
            About
          </p>
          <h1 className="mb-6 font-heading text-5xl font-light text-green-dark md:text-6xl">
            About Elisabeth Jane
          </h1>
          <p className="mx-auto max-w-[520px] text-lg leading-loose text-text-light">
            Honoring the Creator by painting the beauty He tucked into the
            garden.
          </p>
        </div>
      </header>

      {/* Bio */}
      <section className="bg-cream px-6 py-24 lg:py-28">
        <div className="mx-auto max-w-[1100px]">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.3fr] lg:gap-16 lg:items-start">
            {/* Photo placeholder */}
            <FadeIn>
              <div className="flex aspect-[3/4] w-full items-center justify-center bg-gradient-to-br from-ivory to-[#E8E2D6] border border-border">
                <span className="font-heading text-sm italic text-green-muted/60">
                  Photo coming soon
                </span>
              </div>
            </FadeIn>

            {/* Text */}
            <FadeIn className="space-y-6 text-base leading-loose text-text-light">
              <h2 className="font-heading text-3xl font-light text-green-dark md:text-4xl">
                Hi, I&rsquo;m Emma!
              </h2>
              <p>
                Before I was painting recipe boxes, I was teaching high school
                art and loving every second of it. But when my daughter was born,
                I felt called to stay home with her &mdash; and that opened the
                door for Elisabeth Jane.
              </p>
              <p>
                I&rsquo;ve always loved working with my hands. Painting,
                arranging, creating &mdash; it&rsquo;s how I process the world.
                When I started painting recipe boxes as gifts for friends and
                family, something clicked. These little boxes became a way to
                combine the things I care about most: art, home, gathering
                around the table, and honoring the people we love through the
                meals we share.
              </p>
              <p>
                Every Elisabeth Jane recipe box is hand-painted by me in Grand
                Rapids, Michigan. No two are exactly the same. The designs are
                inspired by the beauty I see in my garden and the natural world
                around me &mdash; strawberries, wildflowers, herbs, and all the
                little details God tucked into creation.
              </p>
              <p>
                I believe that everyday things can be beautiful, that a recipe
                box can hold more than recipes &mdash; it can hold memories,
                traditions, and love. My hope is that an Elisabeth Jane box ends
                up in your kitchen, filled with the recipes your family turns to
                again and again, and that it gets passed down to someone who
                loves them just as much as you do.
              </p>
              <p>
                Thank you for being here and for supporting small, handmade
                businesses. It means more than you know.
              </p>
              <p className="font-heading text-lg italic text-green-dark">
                Yours ever, Emma Laureen
              </p>
            </FadeIn>
          </div>
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
