interface ProductCardProps {
  name: string;
  description?: string;
  price: string;
  stripeLink: string;
  tag: string;
  compact?: boolean;
}

export default function ProductCard({
  name,
  description,
  price,
  stripeLink,
  tag,
  compact = false,
}: ProductCardProps) {
  if (compact) {
    return (
      <div className="group border border-border bg-cream p-8 text-center transition-transform duration-300 hover:-translate-y-1">
        <div className="mx-auto mb-5 flex h-[120px] w-[120px] items-center justify-center rounded-full bg-gradient-to-br from-ivory to-[#E8E2D6]">
          <span className="font-heading text-sm italic text-green-muted">
            {tag}
          </span>
        </div>
        <h4 className="font-heading text-lg font-medium text-green-dark">
          {name}
        </h4>
        <p className="mt-2 font-heading text-xl font-medium text-green-dark">
          {price}
        </p>
        <a
          href={stripeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block w-full border border-green-dark bg-transparent px-9 py-3.5 text-center text-xs font-medium uppercase tracking-[0.12em] text-green-dark transition-all duration-300 hover:bg-green-dark hover:text-cream"
        >
          Purchase
        </a>
      </div>
    );
  }

  return (
    <div className="group overflow-hidden border border-border bg-cream transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(59,74,58,0.08)]">
      <div className="aspect-square overflow-hidden">
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-ivory to-[#E8E2D6]">
          <span className="font-heading text-xl italic text-green-muted">
            {tag}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-heading text-lg font-medium text-green-dark">
          {name}
        </h3>
        {description && (
          <p className="mt-2.5 text-sm leading-relaxed text-text-light">
            {description}
          </p>
        )}
        <p className="mt-4 font-heading text-xl font-medium text-green-dark">
          {price}
        </p>
        <a
          href={stripeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block w-full bg-green-dark px-9 py-3.5 text-center text-xs font-medium uppercase tracking-[0.12em] text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-green"
        >
          Purchase
        </a>
        <p className="mt-2 text-center text-[0.7rem] tracking-[0.05em] text-text-light">
          Secure checkout powered by Stripe
        </p>
      </div>
    </div>
  );
}
