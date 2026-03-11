"use client";

import { useState, useEffect, useCallback, useRef } from "react";
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

  // Touch swipe state for lightbox
  const touchStartX = useRef(0);
  const touchDeltaX = useRef(0);

  useEffect(() => {
    if (!lightboxOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") lightboxPrev();
      if (e.key === "ArrowRight") lightboxNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => {
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
      {/* Image area — contains both normal view and expanded lightbox */}
      <div
        className={cn(
          "relative overflow-hidden transition-[aspect-ratio] duration-300",
          lightboxOpen ? "aspect-[3/4]" : "aspect-square"
        )}
        onTouchStart={(e) => {
          if (!lightboxOpen) return;
          touchStartX.current = e.touches[0].clientX;
          touchDeltaX.current = 0;
        }}
        onTouchMove={(e) => {
          if (!lightboxOpen) return;
          touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
        }}
        onTouchEnd={() => {
          if (!lightboxOpen) return;
          if (Math.abs(touchDeltaX.current) > 50) {
            if (touchDeltaX.current > 0) lightboxPrev();
            else lightboxNext();
          }
          touchDeltaX.current = 0;
        }}
      >
        {images && images.length > 0 ? (
          <div className="relative h-full w-full">
            <Image
              src={lightboxOpen ? images[lightboxIndex] : images[activeImage]}
              alt={`${name} - photo ${(lightboxOpen ? lightboxIndex : activeImage) + 1}`}
              fill
              className={cn(
                "cursor-pointer transition-transform duration-700",
                lightboxOpen
                  ? "bg-black object-contain"
                  : "object-cover group-hover:scale-[1.03]"
              )}
              sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 400px"
              onClick={() => {
                if (lightboxOpen) return;
                openLightbox(activeImage);
              }}
            />

            {/* Close button — only in lightbox mode */}
            {lightboxOpen && (
              <button
                onClick={closeLightbox}
                aria-label="Close expanded view"
                className="absolute right-2 top-2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white shadow-md transition-colors hover:bg-white/40"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                  <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                </svg>
              </button>
            )}

            {images.length > 1 && (
              <>
                {/* Left arrow */}
                <button
                  onClick={() => {
                    if (lightboxOpen) lightboxPrev();
                    else setActiveImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
                  }}
                  aria-label="Previous photo"
                  className={cn(
                    "absolute left-2 top-1/2 flex -translate-y-1/2 items-center justify-center rounded-full shadow-sm transition-all duration-200",
                    lightboxOpen
                      ? "h-10 w-10 bg-white/20 text-white hover:bg-white/40"
                      : "h-8 w-8 bg-cream/80 text-green-dark backdrop-blur-sm hover:bg-cream hover:shadow-md"
                  )}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                    <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
                  </svg>
                </button>
                {/* Right arrow */}
                <button
                  onClick={() => {
                    if (lightboxOpen) lightboxNext();
                    else setActiveImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
                  }}
                  aria-label="Next photo"
                  className={cn(
                    "absolute right-2 top-1/2 flex -translate-y-1/2 items-center justify-center rounded-full shadow-sm transition-all duration-200",
                    lightboxOpen
                      ? "h-10 w-10 bg-white/20 text-white hover:bg-white/40"
                      : "h-8 w-8 bg-cream/80 text-green-dark backdrop-blur-sm hover:bg-cream hover:shadow-md"
                  )}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                    <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                  </svg>
                </button>
                {/* Dots / Counter */}
                <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
                  {lightboxOpen ? (
                    <span className="text-xs text-white/70">
                      {lightboxIndex + 1} / {images.length}
                    </span>
                  ) : (
                    images.map((_, i) => (
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
                    ))
                  )}
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

    </div>
  );
}
