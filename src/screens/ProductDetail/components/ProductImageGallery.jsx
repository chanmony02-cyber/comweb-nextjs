"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

export function ProductImageGallery({ images = [], name = "" }) {
  const normalizedImages = images.filter(Boolean);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setActiveIndex(0);
  }, [normalizedImages.length, normalizedImages[0]]);

  const src = normalizedImages[activeIndex] || normalizedImages[0] || "";
  const canNavigate = normalizedImages.length > 1;

  const goPrev = () => {
    if (!canNavigate) return;
    setActiveIndex((current) =>
      current === 0 ? normalizedImages.length - 1 : current - 1,
    );
  };

  const goNext = () => {
    if (!canNavigate) return;
    setActiveIndex((current) =>
      current === normalizedImages.length - 1 ? 0 : current + 1,
    );
  };

  return (
    <div className="space-y-4">
      <div className="relative aspect-square w-full overflow-hidden rounded-xl border border-border bg-white">
        {src ? (
          <Image
            src={src}
            alt={name}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 640px"
          />
        ) : (
          <div className="flex h-full items-center justify-center p-10 text-muted-foreground">
            No image available.
          </div>
        )}

        {canNavigate ? (
          <>
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white/95 text-navy shadow-sm transition-colors hover:bg-sky-accent hover:text-white"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="Next image"
              className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white/95 text-navy shadow-sm transition-colors hover:bg-sky-accent hover:text-white"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        ) : null}
      </div>

      {normalizedImages.length > 1 ? (
        <div className="flex flex-nowrap gap-3 overflow-x-auto pb-2 md:flex-wrap md:overflow-visible">
          {normalizedImages.map((image, index) => (
            <button
              key={`${image}-${index}`}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`h-16 w-16 md:h-20 md:w-20 shrink-0 overflow-hidden rounded-md border transition-colors ${
                index === activeIndex
                  ? "border-primary-blue ring-1 ring-primary-blue"
                  : "border-border hover:border-primary-blue"
              }`}
              aria-label={`View image ${index + 1}`}
            >
              <Image
                src={image}
                alt={`${name} thumbnail ${index + 1}`}
                width={64}
                height={64}
                className="h-full w-full object-contain bg-white"
              />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
