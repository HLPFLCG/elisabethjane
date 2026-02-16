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
          <p className="mx-auto max-w-[560px] text-lg leading-loose text-text-light">
            Honoring the Creator by painting the beauty He tucked into the
            garden.
          </p>
        </div>
      </header>

      {/* About Me */}
      <section className="bg-cream px-6 py-24 lg:py-28">
        <div className="mx-auto max-w-[720px]">
          <SectionHeader label="The Artist" title="Hi, I'm Emma!" />
          <FadeIn className="space-y-6 text-base leading-loose text-text-light">
            <p>
              I am the artist and designer behind this work, and I&rsquo;m truly
              so grateful you&rsquo;re here.
            </p>
            <p>
              I&rsquo;ve always been fueled by a desire to create. After
              teaching for seven years, I stepped down to be a stay-at-home mom
              and raise my daughter. While praying and asking God how He could
              use me, He led me here. He has placed me exactly where I am
              supposed to be in this season: creating to glorify Him. One of the
              greatest gifts of my life has been seeing how God takes our small
              seeds of creativity and grows them into something more.
            </p>
            <p>
              My journey with these recipe boxes began at a crossroads. As one
              chapter of my life was closing, another was opening. I found
              myself in a season of uncertainty, seeking work that honored Him
              and served others. It was in that quiet space of seeking His
              direction that the idea for these boxes was planted.
            </p>
            <p>
              Today, every box is still hand-painted from start to
              finish&mdash;no stencils, no assembly lines. I am endlessly
              inspired by the &ldquo;slow&rdquo; eras of the past, often
              finding designs tucked away in old botanical prints. I love the
              challenge of capturing the perfect, tiny details of a strawberry
              vine; because they are painted by hand, no two are ever exactly
              the same.
            </p>
            <p>
              I&rsquo;m drawn to the idea of &ldquo;functional
              art&rdquo;&mdash;the belief that the items we use every day
              should be as beautiful as they are useful. I&rsquo;ve found that
              bringing pieces of nature into the home through art fills a space
              with grace, joy, and light. I believe deeply in the purpose and
              value of home&mdash;in creating spaces filled with warmth,
              serenity, and nostalgia. My goal is for something I&rsquo;ve
              painted to sit in your kitchen for decades, holding the recipes
              you actually cook from and the legacy you&rsquo;ll one day pass
              down.
            </p>
            <p>
              Aside from painting, I grew up near a lake town in Michigan and
              now live in Grand Rapids with my little family. We hope to grow
              our family in the coming years and eventually move back toward the
              lakeshore. When I&rsquo;m not at my painting desk, you can
              usually find me in my kitchen cooking for my family, lost in the
              rhythmic clicking of my knitting needles, or simply soaking up
              time with the ones I love most.
            </p>
            <p>
              I hope that through this, you feel seen and connected. I count you
              all as friends&mdash;feel free to reach out with questions or just
              a hello, anytime!
            </p>
            <p className="font-heading text-lg italic text-green-dark">
              Yours ever,
              <br />
              Emma Laureen
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
