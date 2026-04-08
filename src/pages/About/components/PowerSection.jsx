// src/pages/About/components/PowerSection.jsx

import { Link } from "react-router-dom";
import qualityIcon from "@/assets/icons/quality.svg";
import safetyIcon from "@/assets/icons/safety.svg";
import accuracyIcon from "@/assets/icons/accuracy.svg";
import relianceIcon from "@/assets/icons/reliance.svg";

// Icon map for the four pillars
const PILLAR_ICONS = {
  quality: qualityIcon,
  safety: safetyIcon,
  accuracy: accuracyIcon,
  reliance: relianceIcon,
};

export function PowerSection({
  eyebrow,
  title,
  highlight,
  description,
  cta,
  pillars,
}) {
  return (
    <section className="py-16 md:py-24 bg-navy">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* ── Left — headline + description + CTA ─────── */}
          <div>
            <p className="text-sky-accent text-md font-semibold tracking-widest uppercase mb-3 font-sans">
              {eyebrow}
            </p>
            <h2 className="text-white font-bold text-3xl md:text-4xl lg:text-5xl font-display leading-tight mb-3 whitespace-pre-line">
              {title}
            </h2>
            {/* Highlighted word on its own line with blue background pill */}
            <span className="inline-block bg-primary-blue text-white font-bold text-3xl md:text-4xl lg:text-5xl font-display px-3 py-1 rounded mb-6">
              {highlight}
            </span>
            <p className="text-white/70 text-md md:text-lg leading-relaxed font-sans mb-8 max-w-xl">
              {description}
            </p>
            <Link
              to={cta.href}
              className="inline-flex items-center gap-1 px-6 py-3 border border-white/50 text-white text-md font-semibold rounded-md hover:bg-primary-blue hover:text-white transition-colors font-display"
            >
              {cta.label}
            </Link>
          </div>

          {/* ── Right — 2×2 pillar cards ──────────────────── */}
          <div className="grid grid-cols-2 gap-4">
            {pillars.map((pillar) => (
              <div
                key={pillar.id}
                className="h-52 bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col justify-center items-center gap-3 text-center hover:bg-white/10 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-primary-blue/20 flex items-center justify-center">
                  <img
                    src={PILLAR_ICONS[pillar.icon]}
                    alt=""
                    className="w-7 h-7"
                  />
                </div>
                <p className="text-white font-semibold text-xl font-display">
                  {pillar.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
