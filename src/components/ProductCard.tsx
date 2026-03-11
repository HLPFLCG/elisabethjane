"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import type { Product } from "@/lib/types";
import { cn } from "@/lib/utils";

interface ProductCardProps extends Product {
  compact?: boolean;
}

export default function ProductCard({
  name,
  description,
  price,
  checkoutLink,
  tag,
  dimensions,
  details,
  images,
  compact = false,
}: ProductCardProps) {
  const [activeImage, setActiveImage] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = useCallback(() => setLightboxOpen(false), []);

  const lightboxPrev = useCallback(() => {
    if (!images) return;
    setLightboxIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images]);

  const lightboxNext = useCallback(() => {
    if (!images) return;
    setLightboxIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images]);

  useEffect(() => {
    if (!lightboxOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") lightboxPrev();
      if (e.key === "ArrowRight") lightboxNext();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [lightboxOpen, closeLightbox, lightboxPrev, lightboxNext]);

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
        <p className="mt-2 font-heading text-xl font-medium text-green-dark">
          {price}
        </p>
        <a
          href={checkoutLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block w-full border border-green-dark bg-transparent px-9 py-3.5 text-center text-xs font-medium uppercase tracking-[0.12em] text-green-dark transition-all duration-300 hover:bg-green-dark hover:text-cream"
        >
          Purchase
        </a>
      </div>
    );
  }

  return (
    <div className="group overflow-hidden border border-border bg-cream transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(59,74,58,0.08)]">
      <div className="aspect-square overflow-hidden">
        {images && images.length > 0 ? (
          <div className="relative h-full w-full">
            <Image
              src={images[activeImage]}
              alt={`${name} - photo ${activeImage + 1}`}
              fill
              className="cursor-pointer object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              sizes="(max-width: 640px) 100vw, (max-width: 900px) 50vw, 450px"
              onClick={() => openLightbox(activeImage)}
            />
            {images.length > 1 && (
              <>
                {/* Left arrow */}
                <button
                  onClick={() =>
                    setActiveImage((prev) =>
                      prev === 0 ? images.length - 1 : prev - 1
                    )
                  }
                  aria-label="Previous photo"
                  className="absolute left-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-cream/80 text-green-dark shadow-sm backdrop-blur-sm transition-all duration-200 hover:bg-cream hover:shadow-md"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {/* Right arrow */}
                <button
                  onClick={() =>
                    setActiveImage((prev) =>
                      prev === images.length - 1 ? 0 : prev + 1
                    )
                  }
                  aria-label="Next photo"
                  className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-cream/80 text-green-dark shadow-sm backdrop-blur-sm transition-all duration-200 hover:bg-cream hover:shadow-md"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {/* Dots */}
                <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
                  {images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImage(i)}
                      aria-label={`View photo ${i + 1}`}
                      className={cn(
                        "h-2 w-2 rounded-full transition-all duration-300",
                        i === activeImage
                          ? "scale-110 bg-green-dark"
                          : "bg-green-dark/30 hover:bg-green-dark/60"
                      )}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-ivory to-[#E8E2D6] transition-transform duration-700 group-hover:scale-[1.03]">
            <span className="font-heading text-xl italic text-green-muted transition-opacity duration-300 group-hover:opacity-70">
              {tag}
            </span>
          </div>
        )}
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
          <div className="mt-3">
            <p className="text-[0.65rem] font-medium uppercase tracking-[0.1em] text-green-muted">
              Dimensions
            </p>
            <p className="mt-1 text-xs leading-relaxed text-text-light">
              {dimensions}
            </p>
          </div>
        )}
        {details && details.length > 0 && (
          <div className="mt-3">
            <p className="text-[0.65rem] font-medium uppercase tracking-[0.1em] text-green-muted">
              Details
            </p>
            <ul className="mt-1 space-y-0.5">
              {details.map((detail) => (
                <li key={detail} className="text-xs leading-relaxed text-text-light">
                  &bull; {detail}
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className={cn("mt-4 flex items-center justify-between", !description && "mt-3")}>
          <p className="font-heading text-xl font-medium text-green-dark">
            {price}
          </p>
        </div>
        <a
          href={checkoutLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block w-full bg-green-dark px-9 py-3.5 text-center text-xs font-medium uppercase tracking-[0.12em] text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-green"
        >
          Purchase
        </a>
        <p className="mt-2 text-center text-[0.65rem] tracking-[0.05em] text-text-light">
          Secure checkout via Stripe
        </p>
      </div>

      {/* Lightbox */}
      {lightboxOpen && images && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            aria-label="Close lightbox"
            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-cream/90 text-green-dark shadow-md transition-colors hover:bg-cream"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
              <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
            </svg>
          </button>

          {/* Image */}
          <div
            className="relative mx-4 max-h-[85vh] max-w-[90vw] sm:max-w-[80vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[lightboxIndex]}
              alt={`${name} - photo ${lightboxIndex + 1}`}
              width={1200}
              height={1200}
              className="max-h-[85vh] w-auto rounded object-contain"
              sizes="90vw"
              priority
            />

            {/* Counter */}
            <p className="mt-3 text-center text-sm text-cream/70">
              {lightboxIndex + 1} / {images.length}
            </p>
          </div>

          {/* Prev / Next arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); lightboxPrev(); }}
                aria-label="Previous photo"
                className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-cream/80 text-green-dark shadow-md transition-colors hover:bg-cream sm:left-6"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                  <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
                </svg>
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); lightboxNext(); }}
                aria-label="Next photo"
                className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-cream/80 text-green-dark shadow-md transition-colors hover:bg-cream sm:right-6"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                  <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                </svg>
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}
