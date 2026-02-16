import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Stockists",
  description: "Find Elisabeth Jane hand-painted recipe boxes in stores.",
};

const STOCKISTS = [
  {
    state: "Michigan",
    stores: [
      {
        name: "Stoffer Home",
        city: "Grand Rapids",
      },
    ],
  },
];

export default function StockistsPage() {
  return (
    <>
      {/* Hero */}
      <header className="flex min-h-[60vh] items-center justify-center bg-ivory bg-[radial-gradient(ellipse_at_30%_40%,rgba(107,127,107,0.06)_0%,transparent_60%)] px-6 pb-16 pt-32 text-center">
        <div className="max-w-[660px] animate-fade-up">
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.25em] text-green-muted">
            Find Us
          </p>
          <h1 className="mb-6 font-heading text-5xl font-light text-green-dark md:text-6xl">
            Stockists
          </h1>
          <p className="mx-auto max-w-[520px] text-lg leading-loose text-text-light">
            Shops that carry Elisabeth Jane recipe boxes.
          </p>
        </div>
      </header>

      {/* Stockist list */}
      <section className="bg-cream px-6 py-24 lg:py-28">
        <div className="mx-auto max-w-[700px]">
          {STOCKISTS.map((region) => (
            <FadeIn key={region.state}>
              <h2 className="mb-6 font-heading text-2xl font-light text-green-dark md:text-3xl">
                {region.state}
              </h2>
              <div className="space-y-4">
                {region.stores.map((store) => (
                  <div
                    key={store.name}
                    className="border-l-[3px] border-green-muted/40 bg-ivory p-6"
                  >
                    <h3 className="font-heading text-lg font-medium text-green-dark">
                      {store.name}
                    </h3>
                    <p className="mt-1 text-sm text-text-light">
                      {store.city}, {region.state}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  );
}
