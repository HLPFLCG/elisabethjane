import type { Product } from "@/lib/types";
import { cn } from "@/lib/utils";

interface ProductCardProps extends Product {
  compact?: boolean;
}

export default function ProductCard({
  name,
  description,
  price,
  stripeLink,
  tag,
  dimensions,
  details,
  comingSoon = false,
  compact = false,
}: ProductCardProps) {
  if (compact) {
    return (
      <div className="group border border-border bg-cream p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(59,74,58,0.06)]">
        <div className="mx-auto mb-5 flex h-[120px] w-[120px] items-center justify-center rounded-full bg-gradient-to-br from-ivory to-[#E8E2D6] transition-transform duration-500 group-hover:scale-105">
          <span className="font-heading text-sm italic text-green-muted">
            {tag}
          </span>
        </div>
        <h4 className="font-heading text-lg font-medium text-green-dark">
          {name}
        </h4>
        {comingSoon ? (
          <p className="mt-3 text-xs font-medium uppercase tracking-[0.12em] text-green-muted">
            Coming Soon
          </p>
        ) : (
          <>
            <p className="mt-2 font-heading text-xl font-medium text-green-dark">
              {price}
            </p>
            <a
              href={stripeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block w-full border border-green-dark bg-transparent px-9 py-3.5 text-center text-xs font-medium uppercase tracking-[0.12em] text-green-dark transition-all duration-300 hover:bg-green-dark hover:text-cream"
            >
              Purchase
            </a>
          </>
        )}
      </div>
    );
  }

  return (
    <div className="group overflow-hidden border border-border bg-cream transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(59,74,58,0.08)]">
      <div className="aspect-square overflow-hidden">
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-ivory to-[#E8E2D6] transition-transform duration-700 group-hover:scale-[1.03]">
          <span className="font-heading text-xl italic text-green-muted transition-opacity duration-300 group-hover:opacity-70">
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
        {dimensions && (
          <p className="mt-3 text-xs leading-relaxed text-text-light">
            <span className="font-medium text-green-dark">Dimensions:</span>{" "}
            {dimensions}
          </p>
        )}
        {details && details.length > 0 && (
          <ul className="mt-3 space-y-1">
            {details.map((detail) => (
              <li
                key={detail}
                className="text-xs leading-relaxed text-text-light"
              >
                &bull; {detail}
              </li>
            ))}
          </ul>
        )}
        <div className={cn("mt-4 flex items-center justify-between", !description && "mt-3")}>
          <p className="font-heading text-xl font-medium text-green-dark">
            {price}
          </p>
        </div>
        <a
          href={stripeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block w-full bg-green-dark px-9 py-3.5 text-center text-xs font-medium uppercase tracking-[0.12em] text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-green"
        >
          Purchase
        </a>
        <p className="mt-2 text-center text-[0.65rem] tracking-[0.05em] text-text-light">
          Secure checkout powered by Stripe
        </p>
      </div>
    </div>
  );
}
