import { useState } from "react";

export function ProductImageGallery({ images = [], name = "" }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="relative rounded-xl border border-border bg-white overflow-hidden flex items-center justify-center min-h-80 3xl:h-[750px] 3xl:w-[750px]">
        <img
          src={images[activeIndex]}
          alt={name}
          className="w-full h-full object-cover"
        />

        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full border border-border bg-white flex items-center justify-center text-navy hover:bg-navy hover:text-white transition-colors shadow-sm"
            >
              {"<-"}
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next image"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full border border-border bg-white flex items-center justify-center text-navy hover:bg-navy hover:text-white transition-colors shadow-sm"
            >
              {"->"}
            </button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent">
          {images.map((img, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`View image ${index + 1}`}
              className={`w-24 h-24 rounded-lg border-2 overflow-hidden flex-shrink-0 bg-white transition-colors ${
                activeIndex === index
                  ? "border-primary-blue"
                  : "border-border hover:border-primary-blue/50"
              }`}
            >
              <img
                src={img}
                alt={`${name} thumbnail ${index + 1}`}
                className="w-full h-full object-contain p-1"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
