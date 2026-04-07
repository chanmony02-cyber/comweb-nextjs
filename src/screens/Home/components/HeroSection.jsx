"use client";

import Link from "next/link";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { heroSlides } from "@/data/heroSlides/heroSlides";

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef(null);
  const touchStartX = useRef(0);
  const AUTO_PLAY = 5000;

  const goTo = useCallback(
    (i) => setCurrent((i + heroSlides.length) % heroSlides.length),
    [],
  );
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);
  const next = useCallback(() => goTo(current + 1), [current, goTo]);

  useEffect(() => {
    if (paused) return undefined;

    intervalRef.current = setInterval(next, AUTO_PLAY);

    return () => clearInterval(intervalRef.current);
  }, [paused, next]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    setPaused(true);
  };

  const handleTouchEnd = (e) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;

    if (diff > 50) next();
    else if (diff < -50) prev();

    setPaused(false);
  };

  const renderButton = (btn) => {
    const baseClasses =
      "inline-flex items-center justify-center rounded font-semibold transition-all duration-200";

    if (btn.variant === "primary") {
      return (
        <Link
          key={btn.label}
          href={btn.href}
          className={`${baseClasses} bg-primary-blue px-7 py-[11px] text-[0.95rem] text-accent-foreground hover:bg-primary-blue/90 font-display`}
        >
          {btn.label}
        </Link>
      );
    }

    return (
      <Link
        key={btn.label}
        href={btn.href}
        className={`${baseClasses} border border-primary-foreground/65 px-7 py-[11px] text-[0.95rem] text-primary-foreground hover:border-primary-foreground hover:bg-primary-foreground/15 font-display`}
      >
        {btn.label}
      </Link>
    );
  };

  return (
    <section
      className="relative h-[500px] w-full select-none overflow-hidden bg-navy md:h-[600px] lg:h-[680px]"
      aria-label="Hero Slider"
      onMouseEnter={() => setPaused(false)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="absolute inset-0 hidden xl:block">
        {heroSlides.map((slide, i) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ${
              i === current
                ? "pointer-events-auto opacity-100"
                : "pointer-events-none opacity-0"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.title.replace("\n", " ")}
              fill
              className="object-cover"
              sizes="100vw"
            />

            <div
              className={`absolute inset-0 bg-gradient-to-r ${slide.overlay}`}
            />

            <div className="relative z-10 flex h-full items-center">
              <div className="mx-[130px] w-full max-w-7xl px-8 md:px-16">
                <div className="max-w-[800px]">
                  <p
                    className={`mb-3 text-sm tracking-[0.15em] text-sky-accent font-display transition-all duration-700 delay-100 md:text-base ${
                      i === current
                        ? "translate-y-0 opacity-100"
                        : "translate-y-5 opacity-0"
                    }`}
                  >
                    {slide.eyebrow}
                  </p>
                  <h1
                    className={`mb-5 text-4xl font-bold leading-[1.05] text-primary-foreground font-display transition-all duration-700 delay-150 md:text-5xl lg:text-[3.25rem] ${
                      i === current
                        ? "translate-y-0 opacity-100"
                        : "translate-y-5 opacity-0"
                    }`}
                    style={{ whiteSpace: "pre-line" }}
                  >
                    {slide.title}
                  </h1>
                  <p
                    className={`mb-8 max-w-[470px] text-base leading-relaxed text-primary-foreground/85 font-sans transition-all duration-700 delay-200 md:text-[1.05rem] ${
                      i === current
                        ? "translate-y-0 opacity-100"
                        : "translate-y-5 opacity-0"
                    }`}
                  >
                    {slide.description}
                  </p>
                  <div
                    className={`flex flex-wrap gap-3 transition-all duration-700 delay-300 ${
                      i === current
                        ? "translate-y-0 opacity-100"
                        : "translate-y-5 opacity-0"
                    }`}
                  >
                    {slide.buttons.map(renderButton)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div
        className="absolute inset-0 xl:hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {heroSlides.map((slide, i) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ${
              i === current
                ? "pointer-events-auto opacity-100"
                : "pointer-events-none opacity-0"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.title.replace("\n", " ")}
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div
              className={`absolute inset-0 bg-gradient-to-r ${slide.overlay}`}
            />
            <div className="relative z-10 flex h-full items-center">
              <div className="mx-auto w-full max-w-7xl px-6">
                <div className="max-w-[580px]">
                  <p className="mb-3 text-sm tracking-[0.15em] text-sky-accent font-display">
                    {slide.eyebrow}
                  </p>
                  <h1
                    className="mb-5 text-3xl font-bold leading-[1.05] text-primary-foreground font-display"
                    style={{ whiteSpace: "pre-line" }}
                  >
                    {slide.title}
                  </h1>
                  <p className="mb-6 max-w-[470px] text-sm leading-relaxed text-primary-foreground/85 font-sans">
                    {slide.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {slide.buttons.map((btn) =>
                      btn.variant === "primary" ? (
                        <Link
                          key={btn.label}
                          href={btn.href}
                          className="inline-flex items-center justify-center rounded bg-primary-blue px-6 py-[10px] text-sm font-semibold text-accent-foreground font-display"
                        >
                          {btn.label}
                        </Link>
                      ) : (
                        <Link
                          key={btn.label}
                          href={btn.href}
                          className="inline-flex items-center justify-center rounded border border-primary-foreground/65 px-6 py-[10px] text-sm font-semibold text-primary-foreground font-display"
                        >
                          {btn.label}
                        </Link>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {[
        ["prev", prev],
        ["next", next],
      ].map(([dir, fn]) => (
        <div
          key={dir}
          className={`absolute top-1/2 z-20 hidden -translate-y-1/2 xl:block ${
            dir === "prev" ? "left-4 md:left-6" : "right-4 md:right-6"
          }`}
        >
          <button
            type="button"
            onClick={fn}
            aria-label={`${dir === "prev" ? "Previous" : "Next"} slide`}
            className="mx-[80px] flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/40 bg-primary-foreground/10 px-px text-primary-foreground backdrop-blur-sm transition-all duration-200 hover:border-primary-foreground/70 hover:bg-primary-foreground/25"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {dir === "prev" ? (
                <polyline points="15 18 9 12 15 6" />
              ) : (
                <polyline points="9 18 15 12 9 6" />
              )}
            </svg>
          </button>
        </div>
      ))}

      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
        {heroSlides.map((_, i) => (
          <button
            type="button"
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === current
                ? "h-2.5 w-8 bg-primary-blue"
                : "h-2.5 w-2.5 bg-primary-foreground/50 hover:bg-primary-foreground/80"
            }`}
          />
        ))}
      </div>

      {!paused && (
        <div
          key={`bar-${current}`}
          className="absolute bottom-0 left-0 z-30 h-[3px] bg-primary-blue"
          style={{ animation: `heroBar ${AUTO_PLAY}ms linear forwards` }}
        />
      )}

      <style>{`
        @keyframes heroBar {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
