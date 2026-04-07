"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { VHTLogo } from "@/data/shared/images";

const DASHBOARD_CARDS = [
  { label: "Active Devices", value: "10", tone: "bg-green-400/90" },
  { label: "Active Gateways", value: "5", tone: "bg-orange-400/90" },
];

const DASHBOARD_TREND = [28, 54, 42, 70, 60, 86, 64];

const APPLICATION_ITEMS = [
  { name: "A1", meta: "0 Device" },
  { name: "A2", meta: "0 Device" },
  { name: "APP003", meta: "0 Device" },
];

const GATEWAY_ITEMS = [
  { name: "A1", status: "Never seen" },
  { name: "A2", status: "Never seen" },
  { name: "A3", status: "Never seen" },
];

function useLowPowerExperience() {
  const [isLowPower, setIsLowPower] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const viewportQuery = window.matchMedia("(max-width: 767px)");
    const connection =
      navigator.connection ||
      navigator.mozConnection ||
      navigator.webkitConnection ||
      null;

    const updatePreference = () => {
      setIsLowPower(
        Boolean(
          motionQuery.matches ||
          viewportQuery.matches ||
          (connection &&
            (connection.saveData ||
              connection.effectiveType === "slow-2g" ||
              connection.effectiveType === "2g")),
        ),
      );
    };

    updatePreference();

    if (motionQuery.addEventListener) {
      motionQuery.addEventListener("change", updatePreference);
    } else {
      motionQuery.addListener(updatePreference);
    }

    if (viewportQuery.addEventListener) {
      viewportQuery.addEventListener("change", updatePreference);
    } else {
      viewportQuery.addListener(updatePreference);
    }

    if (connection?.addEventListener) {
      connection.addEventListener("change", updatePreference);
    }

    return () => {
      if (motionQuery.removeEventListener) {
        motionQuery.removeEventListener("change", updatePreference);
      } else {
        motionQuery.removeListener(updatePreference);
      }

      if (viewportQuery.removeEventListener) {
        viewportQuery.removeEventListener("change", updatePreference);
      } else {
        viewportQuery.removeListener(updatePreference);
      }

      if (connection?.removeEventListener) {
        connection.removeEventListener("change", updatePreference);
      }
    };
  }, []);

  return isLowPower;
}

function PhoneLoginScreen() {
  return (
    <div className="flex h-full flex-col rounded-[28px] bg-gradient-to-br from-white via-[#f5f7fb] to-white p-4 text-navy shadow-inner">
      <div className="flex items-center justify-between text-[10px] text-muted-foreground">
        <span>9:41</span>
        <div className="flex items-center gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-primary-blue" />
          <span className="h-1.5 w-1.5 rounded-full bg-primary-blue/70" />
          <span className="h-1.5 w-1.5 rounded-full bg-primary-blue/40" />
        </div>
      </div>
      <div className="mt-5 flex flex-1 flex-col items-center justify-center text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-[22px] bg-sky-accent/20 shadow-sm">
                    <Image
            src={VHTLogo?.src || VHTLogo}
            alt="VHT logo"
            width={940}
            height={940}
            className="h-10 w-10 object-contain"
            loading="lazy"
            decoding="async"
          />
        </div>
        <h3 className="mt-4 text-lg font-semibold">Welcome back</h3>
        <p className="mt-1 text-[11px] text-muted-foreground">
          Select your tenant to continue.
        </p>
        <div className="mt-5 w-full space-y-3">
          <div className="flex h-11 items-center rounded-2xl border border-border/70 bg-white px-4 text-left text-[11px] text-muted-foreground">
            Tenant selection
          </div>
          <div className="flex h-11 items-center justify-center rounded-2xl bg-navy text-[11px] font-semibold tracking-wide text-white shadow-md shadow-navy/20">
            LOGIN
          </div>
        </div>
      </div>
    </div>
  );
}

function PhoneDashboardScreen({ reducedMotion = false }) {
  return (
    <div className="flex h-full flex-col rounded-[28px] bg-gradient-to-br from-navy via-primary-blue to-sky-accent p-4 text-white shadow-inner">
      <div className="flex items-center justify-between text-[10px] text-white/70">
        <span>Dashboard</span>
        <span>9:41</span>
      </div>
      <div className="mt-5 grid gap-3">
        {DASHBOARD_CARDS.map((card) => (
          <div
            key={card.label}
            className="rounded-3xl border border-white/20 bg-white/10 p-3 backdrop-blur-sm"
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-[0.18em] text-white/75">
                {card.label}
              </span>
              <div
                className={`flex h-11 w-11 items-center justify-center rounded-full border-4 border-white/20 ${card.tone} text-[11px] font-semibold text-navy`}
              >
                {card.value}
              </div>
            </div>
            <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/15">
              {reducedMotion ? (
                <div className="h-full w-[72%] rounded-full bg-white/85" />
              ) : (
                <div
                  className="dashboard-bar h-full rounded-full bg-white/85"
                  style={{ width: "72%" }}
                />
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 rounded-3xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm">
        <div className="flex items-center justify-between text-[10px] text-white/75">
          <span>Health trend</span>
          <span>Live</span>
        </div>
        <div className="mt-3 flex items-end gap-2">
          {DASHBOARD_TREND.map((height, index) => (
            <span
              key={`${height}-${index}`}
              className={`flex-1 rounded-t-full bg-white/80 ${
                reducedMotion ? "" : "trend-bar"
              }`}
              style={{
                height,
                minHeight: 18,
                animationDelay: `${index * 0.12}s`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function PhoneApplicationScreen({ reducedMotion = false }) {
  return (
    <div className="flex h-full flex-col rounded-[28px] bg-gradient-to-br from-[#f8fbff] via-white to-[#eef7ff] p-4 text-navy shadow-inner">
      <div className="flex items-center justify-between text-[10px] text-muted-foreground">
        <span>Applications</span>
        <span>9:41</span>
      </div>
      <div className="mt-5 rounded-2xl border border-border/70 bg-white px-4 py-3 text-[11px] text-muted-foreground shadow-sm">
        Search applications
      </div>
      <div className="mt-4 space-y-3">
        {APPLICATION_ITEMS.map((item, index) => (
          <div
            key={item.name}
            className={`rounded-2xl border border-white bg-sky-accent/25 px-4 py-3 shadow-sm ${
              reducedMotion ? "" : "app-row"
            }`}
            style={{ animationDelay: `${index * 0.08}s` }}
          >
            <div className="flex items-center justify-between text-[11px] font-semibold">
              <span>Name: {item.name}</span>
              <span className="text-muted-foreground">{item.meta}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PhoneGatewayScreen() {
  return (
    <div className="flex h-full flex-col rounded-[28px] bg-gradient-to-br from-[#eff6ff] via-white to-[#f3f8ff] p-4 text-navy shadow-inner">
      <div className="flex items-center justify-between text-[10px] text-muted-foreground">
        <span>Gateway</span>
        <span>9:41</span>
      </div>
      <div className="mt-5 space-y-3">
        {GATEWAY_ITEMS.map((item) => (
          <div
            key={item.name}
            className="rounded-2xl border border-border/70 bg-white px-4 py-3 shadow-sm"
          >
            <div className="flex items-center justify-between text-[11px] font-semibold">
              <span>{item.name}</span>
              <span className="flex items-center gap-1 text-muted-foreground">
                <span className="h-2 w-2 rounded-full bg-orange-400" />
                {item.status}
              </span>
            </div>
            <div className="mt-2 text-[10px] text-muted-foreground">
              ID: **** ****
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function renderPhoneScreen(id, reducedMotion) {
  switch (id) {
    case "login":
      return <PhoneLoginScreen />;
    case "dashboard":
      return <PhoneDashboardScreen reducedMotion={reducedMotion} />;
    case "application":
      return <PhoneApplicationScreen reducedMotion={reducedMotion} />;
    case "gateway":
      return <PhoneGatewayScreen />;
    default:
      return <PhoneLoginScreen />;
  }
}

export function MobileExperienceSection({ mobileExperience }) {
  const slides = mobileExperience?.slides ?? [];
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const reduceMotion = useLowPowerExperience();
  const activeSlide = slides[activeSlideIndex] ?? slides[0] ?? null;

  useEffect(() => {
    if (reduceMotion || slides.length <= 1) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActiveSlideIndex((current) => (current + 1) % slides.length);
    }, 3600);

    return () => window.clearInterval(timer);
  }, [slides.length, reduceMotion]);

  return (
    <section className="relative overflow-hidden bg-section-alt py-16 md:py-24">
      <div className="absolute left-0 top-0 hidden h-64 w-64 rounded-full bg-white/50 blur-3xl md:block" />
      <div className="absolute bottom-0 right-0 hidden h-80 w-80 rounded-full bg-sky-accent/20 blur-3xl md:block" />
      <div className="container relative grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center">
        <div>
          <SectionHeader
            label={mobileExperience?.label}
            title={mobileExperience?.title}
            subtitle={mobileExperience?.subtitle}
            align="left"
            titleClassName="text-3xl md:text-4xl lg:text-5xl"
          />
          <div className="mt-8 grid gap-3 text-base text-muted-foreground">
            {(mobileExperience?.highlights ?? []).map((item, index) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-white/70 bg-white/75 px-4 py-3 shadow-sm backdrop-blur-sm"
              >
                <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary-blue/10 text-[11px] font-semibold text-primary-blue">
                  0{index + 1}
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {slides.map((slide, index) => {
              const isActive = slide.id === activeSlide?.id;
              return (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => setActiveSlideIndex(index)}
                  className={`rounded-full border px-4 py-2 text-sm transition-all ${
                    isActive
                      ? "border-primary-blue bg-primary-blue text-white shadow-md shadow-primary-blue/20"
                      : "border-border bg-white text-muted-foreground hover:border-primary-blue/40 hover:text-navy"
                  }`}
                >
                  {slide.title}
                </button>
              );
            })}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[420px]">
          {!reduceMotion ? (
            <>
              <div className="absolute -left-10 top-10 h-36 w-36 rounded-full bg-primary-blue/20 blur-3xl" />
              <div className="absolute -right-8 bottom-16 h-32 w-32 rounded-full bg-sky-accent/30 blur-3xl" />
            </>
          ) : null}

          <div
            className={`relative mx-auto w-full max-w-[320px] rounded-[3rem] border border-white/50 bg-navy p-3 shadow-[0_28px_90px_rgba(3,18,43,0.35)] ${
              reduceMotion ? "" : "phone-float"
            }`}
          >
            <div className="mb-3 flex items-center justify-between px-4 text-[10px] text-white/70">
              <span>9:41</span>
              <div className="flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-white/80" />
                <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
                <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
              </div>
            </div>
            <div className="overflow-hidden rounded-[2.2rem] border border-white/20 bg-white p-3">
              <div
                key={activeSlide?.id || "login"}
                className={`h-[540px] ${reduceMotion ? "" : "screen-swap"}`}
              >
                {renderPhoneScreen(activeSlide?.id || "login", reduceMotion)}
              </div>
            </div>
            <div className="mx-auto mt-3 h-1.5 w-28 rounded-full bg-white/40" />
          </div>

          {activeSlide ? (
            <div
              className={`absolute -left-4 bottom-10 hidden rounded-2xl border border-white/60 bg-white/90 px-4 py-3 text-left shadow-lg md:block ${
                reduceMotion ? "" : "live-card-pop"
              }`}
            >
              <p className="text-[10px] uppercase tracking-[0.2em] text-primary-blue">
                Live state
              </p>
              <p className="mt-1 text-sm font-semibold text-navy">
                {activeSlide.title}
              </p>
              <p className="mt-1 max-w-[180px] text-xs text-muted-foreground">
                {activeSlide.description}
              </p>
            </div>
          ) : null}
        </div>
      </div>

      <style jsx>{`
        @keyframes phone-float {
          0%,
          100% {
            transform: translateY(0) rotate(-1deg);
          }
          50% {
            transform: translateY(-10px) rotate(1deg);
          }
        }

        @keyframes screen-swap {
          from {
            opacity: 0;
            transform: translateY(18px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes live-card-pop {
          from {
            opacity: 0;
            transform: translateY(14px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes dashboard-bar {
          0%,
          100% {
            transform: scaleY(0.88);
            opacity: 0.78;
          }
          50% {
            transform: scaleY(1.08);
            opacity: 1;
          }
        }

        @keyframes trend-bar {
          0%,
          100% {
            transform: translateY(0) scaleY(0.92);
          }
          50% {
            transform: translateY(-2px) scaleY(1.05);
          }
        }

        @keyframes app-row {
          from {
            opacity: 0;
            transform: translateX(12px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .phone-float {
          animation: phone-float 6s ease-in-out infinite;
        }

        .screen-swap {
          animation: screen-swap 360ms ease-out;
        }

        .live-card-pop {
          animation: live-card-pop 420ms ease-out 80ms both;
        }

        .dashboard-bar {
          transform-origin: left center;
          animation: dashboard-bar 3.2s ease-in-out infinite;
        }

        .trend-bar {
          transform-origin: bottom center;
          animation: trend-bar 2.8s ease-in-out infinite;
        }

        .app-row {
          animation: app-row 320ms ease-out both;
        }
      `}</style>
    </section>
  );
}
