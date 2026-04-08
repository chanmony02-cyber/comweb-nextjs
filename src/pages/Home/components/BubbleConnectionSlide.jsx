const BUBBLE_LAYOUT = [
  {
    x: 7,
    y: 19,
    size: "clamp(11.6rem, 14.4vw, 14rem)",
    labelLines: ["Enhancing", "System", "Reliability"],
    delay: "0ms",
    glow: "radial-gradient(circle at 50% 50%, rgba(92, 199, 255, 0.34), rgba(92, 199, 255, 0.12) 42%, transparent 72%)",
  },
  {
    x: 46,
    y: 10,
    size: "clamp(11.4rem, 14vw, 13.6rem)",
    labelLines: ["Improving", "Operational", "Efficiency"],
    delay: "180ms",
    glow: "radial-gradient(circle at 50% 50%, rgba(110, 216, 255, 0.3), rgba(110, 216, 255, 0.1) 42%, transparent 72%)",
  },
  {
    x: 95,
    y: 22,
    size: "clamp(11.6rem, 14.2vw, 13.8rem)",
    labelLines: ["Strengthening", "Resiliency"],
    delay: "360ms",
    glow: "radial-gradient(circle at 50% 50%, rgba(82, 190, 255, 0.3), rgba(82, 190, 255, 0.1) 42%, transparent 72%)",
  },
  {
    x: 15,
    y: 81,
    size: "clamp(10.9rem, 13.5vw, 13.1rem)",
    labelLines: ["Ensuring", "Safety"],
    delay: "540ms",
    glow: "radial-gradient(circle at 50% 50%, rgba(116, 178, 255, 0.24), rgba(116, 178, 255, 0.08) 42%, transparent 72%)",
  },
  {
    x: 85,
    y: 80,
    size: "clamp(15rem, 18.4vw, 17.5rem)",
    labelLines: [
      "Elevating\u00A0Customer",
      "Engagement And",
      "Service Quality",
    ],
    delay: "720ms",
    glow: "radial-gradient(circle at 50% 50%, rgba(121, 211, 255, 0.28), rgba(121, 211, 255, 0.1) 42%, transparent 72%)",
  },
];

const CONNECTIONS = [
  { nodes: [0, 1], bend: -1 },
  { nodes: [1, 2], bend: 1 },
  { nodes: [0, 3], bend: 1 },
  { nodes: [1, 3], bend: -1 },
  { nodes: [1, 4], bend: -1 },
  { nodes: [2, 4], bend: 1 },
  { nodes: [3, 4], bend: -1 },
];

const MESH_LINES = [
  { points: "14,35 34,18 58,26 76,16" },
  { points: "16,60 35,44 52,56 76,46" },
  { points: "20,72 38,68 56,80 72,70" },
  { points: "28,20 34,44 48,28 60,52 78,34" },
];

const MESH_POINTS = [
  { x: 18, y: 34, size: 2.8 },
  { x: 34, y: 18, size: 2.2 },
  { x: 58, y: 27, size: 2.4 },
  { x: 75, y: 16, size: 2.2 },
  { x: 20, y: 61, size: 2.2 },
  { x: 38, y: 43, size: 2.3 },
  { x: 52, y: 56, size: 2.1 },
  { x: 76, y: 46, size: 2.6 },
  { x: 55, y: 80, size: 2.4 },
  { x: 72, y: 69, size: 2.1 },
];

const RING_SPARKLES = [
  { x: "10%", y: "66%", size: "0.28rem" },
  { x: "17%", y: "78%", size: "0.22rem" },
  { x: "28%", y: "87%", size: "0.18rem" },
  { x: "72%", y: "8%", size: "0.24rem" },
  { x: "82%", y: "18%", size: "0.2rem" },
  { x: "89%", y: "32%", size: "0.18rem" },
];

function getConnectionPath(from, to, bend) {
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const length = Math.sqrt(dx * dx + dy * dy) || 1;
  const offset = Math.min(12, length * 0.2) * bend;
  const midX = (from.x + to.x) / 2;
  const midY = (from.y + to.y) / 2;
  const normalX = -dy / length;
  const normalY = dx / length;
  const controlX = midX + normalX * offset;
  const controlY = midY + normalY * offset;

  return `M ${from.x} ${from.y} Q ${controlX} ${controlY} ${to.x} ${to.y}`;
}

function BubbleLabel({ bubble, className = "" }) {
  return (
    <span className={className}>
      {bubble.labelLines.map((line, index) => (
        <span key={`${bubble.id}-line-${index}`}>
          {line}
          {index < bubble.labelLines.length - 1 ? "\n" : null}
        </span>
      ))}
    </span>
  );
}

function BubbleNode({ bubble }) {
  const clipId = `bubble-clip-${bubble.id}`;

  return (
    <div
      className="absolute"
      style={{
        left: `${bubble.x}%`,
        top: `${bubble.y}%`,
      }}
    >
      <div className="relative -translate-x-1/2 -translate-y-1/2">
        <div
          className="absolute inset-[-16%] rounded-full blur-3xl"
          style={{ background: bubble.glow }}
        />
        <div
          className="relative isolate flex items-center justify-center rounded-full px-5 text-center text-primary-foreground animate-[bubbleFloat_9s_ease-in-out_infinite]"
          style={{
            width: bubble.size,
            height: bubble.size,
            animationDelay: bubble.delay,
          }}
        >
          <div className="absolute inset-[2%] rounded-full bg-[radial-gradient(circle_at_50%_48%,rgba(10,30,70,0.92)_0%,rgba(8,25,56,0.9)_50%,rgba(7,19,41,0.84)_69%,rgba(6,15,34,0.25)_82%,rgba(6,15,34,0)_100%)]" />
          <div
            className="absolute inset-[1%] rounded-full opacity-95 animate-[orbitalSpin_18s_linear_infinite]"
            style={{
              background:
                "conic-gradient(from 210deg, rgba(130,239,255,0.95), rgba(67,195,255,0.72), rgba(67,195,255,0.22) 30%, rgba(0,0,0,0) 52%, rgba(219,126,255,0.9) 74%, rgba(117,223,255,0.96) 100%)",
              WebkitMask:
                "radial-gradient(farthest-side, transparent calc(100% - 12px), #000 calc(100% - 8px))",
              mask: "radial-gradient(farthest-side, transparent calc(100% - 12px), #000 calc(100% - 8px))",
              filter:
                "drop-shadow(0 0 18px rgba(91, 223, 255, 0.35)) drop-shadow(0 0 22px rgba(206, 117, 255, 0.22))",
            }}
          />
          <div
            className="absolute inset-[6%] rounded-full border border-white/14"
            style={{
              boxShadow:
                "inset 0 0 24px rgba(127, 218, 255, 0.1), 0 0 26px rgba(75, 179, 255, 0.08)",
            }}
          />
          <svg
            className="absolute inset-[7%] h-[86%] w-[86%] opacity-65 mix-blend-screen"
            viewBox="0 0 100 100"
            aria-hidden="true"
          >
            <defs>
              <clipPath id={clipId}>
                <circle cx="50" cy="50" r="46" />
              </clipPath>
            </defs>
            <g clipPath={`url(#${clipId})`}>
              {MESH_LINES.map((line) => (
                <polyline
                  key={line.points}
                  points={line.points}
                  fill="none"
                  stroke="rgba(138, 224, 255, 0.2)"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              ))}
              {MESH_POINTS.map((point, index) => (
                <circle
                  key={`${bubble.id}-${index}`}
                  cx={point.x}
                  cy={point.y}
                  r={point.size / 2}
                  fill="rgba(149, 234, 255, 0.85)"
                />
              ))}
            </g>
          </svg>
          {RING_SPARKLES.map((sparkle, index) => (
            <span
              key={`${bubble.id}-sparkle-${index}`}
              className="absolute rounded-full bg-white/80 shadow-[0_0_12px_rgba(123,225,255,0.75)] animate-[sparkPulse_3.6s_ease-in-out_infinite]"
              style={{
                left: sparkle.x,
                top: sparkle.y,
                width: sparkle.size,
                height: sparkle.size,
                animationDelay: `${index * 240}ms`,
              }}
            />
          ))}
          <span className="absolute left-[17%] top-[15%] h-[12%] w-[12%] rounded-full bg-white/55 blur-[1px]" />
          <span className="absolute right-[16%] top-[21%] h-[8%] w-[8%] rounded-full bg-cyan-200/45 blur-[2px]" />
          <span className="absolute inset-0 z-10 flex items-center justify-center px-4 pointer-events-none">
            <span className="block max-w-[76%] text-center text-[1.12rem] md:text-[1.16rem] font-semibold leading-[1.06] uppercase font-display whitespace-pre-line">
              <BubbleLabel bubble={bubble} />
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}

export function BubbleConnectionSlide({ slide }) {
  const bubbles = slide.bubbles
    .map((label, index) => ({ ...BUBBLE_LAYOUT[index], label, id: index }))
    .filter(Boolean);

  return (
    <div className="relative h-full w-full overflow-hidden bg-[#04111f]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(159,204,255,0.22),transparent_28%),radial-gradient(circle_at_78%_30%,rgba(42,140,213,0.24),transparent_34%),radial-gradient(circle_at_70%_82%,rgba(255,255,255,0.08),transparent_28%),linear-gradient(135deg,#04111f_0%,#08233d_48%,#0b4165_100%)]" />
      <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:64px_64px]" />

      <div className="relative z-10 flex h-full items-center">
        <div className="w-full max-w-7xl mx-auto px-6 py-10 md:px-16 lg:mx-[130px] lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="relative z-20 max-w-[540px]">
              <p className="mb-3 text-sm tracking-[0.15em] text-sky-accent font-display md:text-base">
                {slide.eyebrow}
              </p>
              <h1
                className="mb-5 text-4xl font-bold leading-[1.05] text-primary-foreground font-display md:text-5xl lg:text-[3.25rem]"
                style={{ whiteSpace: "pre-line" }}
              >
                {slide.title}
              </h1>
              <p className="mb-8 max-w-[470px] text-base leading-relaxed text-primary-foreground/85 font-sans md:text-[1.05rem]">
                {slide.description}
              </p>
              <div className="flex flex-wrap gap-3">
                {slide.buttons.map((btn) =>
                  btn.variant === "primary" ? (
                    <a
                      key={btn.label}
                      href={btn.href}
                      className="inline-flex items-center justify-center rounded bg-primary-blue px-7 py-[11px] text-[0.95rem] font-semibold text-accent-foreground transition-colors duration-200 hover:bg-primary-blue/90 font-display"
                    >
                      {btn.label}
                    </a>
                  ) : (
                    <a
                      key={btn.label}
                      href={btn.href}
                      className="inline-flex items-center justify-center rounded border border-primary-foreground/65 px-7 py-[11px] text-[0.95rem] font-semibold text-primary-foreground transition-all duration-200 hover:border-primary-foreground hover:bg-primary-foreground/15 font-display"
                    >
                      {btn.label}
                    </a>
                  ),
                )}
              </div>
            </div>

            <div className="relative z-10 min-h-[390px] lg:min-h-[570px]">
              <div className="hidden sm:block absolute inset-0 z-0">
                <svg
                  className="absolute inset-0 h-full w-full"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <defs>
                    <filter
                      id="atom-connection-glow"
                      x="-60%"
                      y="-60%"
                      width="220%"
                      height="220%"
                    >
                      <feGaussianBlur stdDeviation="1.4" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>
                  {CONNECTIONS.map(({ nodes: [start, end], bend }, index) => {
                    const from = bubbles[start];
                    const to = bubbles[end];
                    if (!from || !to) return null;
                    const path = getConnectionPath(from, to, bend);

                    return (
                      <g key={`${start}-${end}`}>
                        <path
                          d={path}
                          fill="none"
                          stroke="rgba(151, 230, 255, 0.12)"
                          strokeWidth="1.4"
                          strokeLinecap="round"
                          filter="url(#atom-connection-glow)"
                        />
                        <path
                          d={path}
                          fill="none"
                          stroke="rgba(90, 203, 255, 0.5)"
                          strokeWidth="0.38"
                          strokeLinecap="round"
                        />
                        <path
                          d={path}
                          fill="none"
                          stroke="rgba(214, 130, 255, 0.42)"
                          strokeWidth="0.22"
                          strokeLinecap="round"
                          strokeDasharray="1.5 2.8"
                          className="animate-[orbitDash_10s_linear_infinite]"
                        />
                        <circle r="0.9" fill="rgba(169, 240, 255, 0.95)">
                          <animateMotion
                            dur={`${5.5 + index * 0.45}s`}
                            repeatCount="indefinite"
                            path={path}
                          />
                        </circle>
                        <circle r="0.65" fill="rgba(233, 146, 255, 0.95)">
                          <animateMotion
                            dur={`${6.8 + index * 0.35}s`}
                            repeatCount="indefinite"
                            path={path}
                          />
                        </circle>
                      </g>
                    );
                  })}
                </svg>

                {bubbles.map((bubble) => (
                  <BubbleNode key={bubble.label} bubble={bubble} />
                ))}
              </div>

              <div className="sm:hidden relative z-0 grid gap-4">
                {bubbles.map((bubble) => (
                  <div
                    key={bubble.label}
                    className="relative overflow-hidden rounded-[30px] border border-white/10 px-5 py-5 text-center text-primary-foreground shadow-[0_0_30px_rgba(42,140,213,0.12)] backdrop-blur-md"
                    style={{
                      background:
                        "radial-gradient(circle_at_15%_18%, rgba(112,224,255,0.22), transparent 18%), radial-gradient(circle_at_86%_86%, rgba(208,124,255,0.18), transparent 24%), linear-gradient(160deg, rgba(8,25,56,0.9), rgba(5,16,34,0.86))",
                    }}
                  >
                    <div
                      className="absolute inset-0 opacity-90"
                      style={{
                        background:
                          "conic-gradient(from 220deg, rgba(121,236,255,0.9), rgba(54,188,255,0.42), rgba(0,0,0,0) 45%, rgba(216,130,255,0.78) 75%, rgba(121,236,255,0.92) 100%)",
                        WebkitMask:
                          "radial-gradient(farthest-side, transparent calc(100% - 8px), #000 calc(100% - 6px))",
                        mask: "radial-gradient(farthest-side, transparent calc(100% - 8px), #000 calc(100% - 6px))",
                      }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center px-4 pointer-events-none">
                      <div className="block max-w-[78%] text-center text-[1.08rem] font-semibold leading-[1.06] uppercase font-display whitespace-pre-line">
                        <BubbleLabel bubble={bubble} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes bubbleFloat {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-8px) scale(1.02); }
        }

        @keyframes orbitalSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes orbitDash {
          from { stroke-dashoffset: 0; }
          to { stroke-dashoffset: -22; }
        }

        @keyframes sparkPulse {
          0%, 100% { opacity: 0.35; transform: scale(0.85); }
          50% { opacity: 1; transform: scale(1.3); }
        }
      `}</style>
    </div>
  );
}
