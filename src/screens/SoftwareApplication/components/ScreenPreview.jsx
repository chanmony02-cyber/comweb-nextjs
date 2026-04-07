import Image from "next/image";
import { cn } from "@/lib/utils";
import { VHTLogo } from "@/data/shared/images";

const PANEL_CLASS =
  "rounded-[24px] bg-white/90 border border-white/80 p-4 text-navy shadow-sm";

export default function ScreenPreview({ type, className = "" }) {
  if (type === "login") {
    return (
      <div className={cn(PANEL_CLASS, className)}>
        <div className="flex items-center justify-center">
          <div className="h-14 w-14 rounded-full bg-sky-accent/70 flex items-center justify-center shadow-inner">
                        <Image
              src={VHTLogo?.src || VHTLogo}
              alt="VHT logo"
              width={940}
              height={940}
              className="h-8 w-8 object-contain"
            />
          </div>
        </div>
        <div className="mt-4 space-y-3">
          <div className="h-9 rounded-full bg-muted/70 border border-border/60 flex items-center px-3 text-[10px] text-muted-foreground">
            Select tenant
          </div>
          <div className="h-9 rounded-full bg-navy text-white text-[10px] font-semibold flex items-center justify-center tracking-wide">
            LOGIN
          </div>
          <div className="text-center text-[10px] text-muted-foreground">
            Version 1.x
          </div>
        </div>
      </div>
    );
  }

  if (type === "dashboard") {
    return (
      <div className={cn(PANEL_CLASS, className)}>
        <div className="h-6 rounded-lg bg-sky-accent/70 flex items-center justify-center text-[10px] font-semibold">
          Dashboard
        </div>
        <div className="mt-3 space-y-3">
          {[
            { title: "Active Devices", value: "10" },
            { title: "Active Gateways", value: "5" },
          ].map((card) => (
            <div
              key={card.title}
              className="rounded-2xl bg-section-alt p-3 border border-white"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-semibold">{card.title}</span>
                <div className="w-10 h-10 rounded-full border-[6px] border-orange-400 flex items-center justify-center text-[10px] font-semibold">
                  {card.value}
                </div>
              </div>
              <div className="mt-2 flex items-center gap-3 text-[9px] text-muted-foreground">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                  Active
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-red-500" />
                  Inactive
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-orange-400" />
                  Never seen
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (type === "application") {
    return (
      <div className={cn(PANEL_CLASS, className)}>
        <div className="h-6 rounded-lg bg-sky-accent/70 flex items-center justify-center text-[10px] font-semibold">
          Application
        </div>
        <div className="mt-3 space-y-2">
          <div className="h-8 rounded-full bg-muted/70 border border-border/60 flex items-center px-3 text-[10px] text-muted-foreground">
            Search
          </div>
          <div className="space-y-2">
            {['A1', 'A2', 'APP003'].map((item) => (
              <div
                key={item}
                className="h-8 rounded-xl bg-sky-accent/40 border border-white flex items-center justify-between px-3 text-[10px]"
              >
                <span className="font-semibold">Name: {item}</span>
                <span className="text-muted-foreground">0 Device</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (type === "gateway") {
    return (
      <div className={cn(PANEL_CLASS, className)}>
        <div className="h-6 rounded-lg bg-sky-accent/70 flex items-center justify-center text-[10px] font-semibold">
          Gateway
        </div>
        <div className="mt-3 space-y-2">
          <div className="h-8 rounded-full bg-muted/70 border border-border/60 flex items-center px-3 text-[10px] text-muted-foreground">
            Search
          </div>
          <div className="space-y-2">
            {['A1', 'A2', 'A3'].map((item) => (
              <div
                key={item}
                className="rounded-xl bg-sky-accent/40 border border-white px-3 py-2 text-[10px]"
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold">{item}</span>
                  <span className="flex items-center gap-1 text-muted-foreground">
                    <span className="w-2 h-2 rounded-full bg-orange-400" />
                    Never seen
                  </span>
                </div>
                <div className="mt-1 text-muted-foreground">ID: **** ****</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={cn(PANEL_CLASS, className)}>
      <div className="h-6 rounded-lg bg-sky-accent/70 flex items-center justify-center text-[10px] font-semibold">
        More
      </div>
      <div className="mt-3 space-y-2">
        <div className="rounded-2xl bg-section-alt border border-white p-3 flex items-center gap-2 text-[10px]">
          <div className="w-8 h-8 rounded-full bg-primary-blue/20" />
          <div className="flex-1">
            <div className="h-2.5 rounded bg-white/80 w-20" />
            <div className="h-2 rounded bg-white/60 w-28 mt-2" />
          </div>
        </div>
        <div className="rounded-2xl bg-section-alt border border-white px-3 py-2 flex items-center justify-between text-[10px]">
          <span>Dark mode</span>
          <span className="w-8 h-4 rounded-full bg-muted/80 border border-border/60" />
        </div>
        <div className="rounded-2xl bg-section-alt border border-white px-3 py-2 text-[10px] text-primary-blue">
          Help & support
        </div>
        <div className="rounded-2xl bg-white border border-border px-3 py-2 text-[10px] text-red-500">
          Log out
        </div>
      </div>
    </div>
  );
}
