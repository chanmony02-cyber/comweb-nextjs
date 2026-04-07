"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { getLanguages } from "@/services/languages";

export function LanguageSelector({ variant = "default" }) {
  const languages = getLanguages();
  const [selected, setSelected] = useState(languages[0]);
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isMobile = variant === "mobile";
  const isCompact = variant === "compact";

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={
          isCompact
            ? "flex items-center justify-center h-10 w-10 border border-border rounded-lg hover:bg-muted transition-colors"
            : isMobile
              ? "flex items-center gap-2 py-2 px-4 text-sm font-medium text-foreground border border-border rounded-lg h-10"
              : "flex items-center gap-2 border border-border rounded-lg px-4 h-10 text-xs font-medium hover:bg-muted transition-colors shadow-sm"
        }
      >
        {selected.flag}
        {!isCompact && selected.label}
        {!isCompact && (
          <ChevronDown
            className={`w-3 h-3 text-muted-foreground transition-transform ${open ? "rotate-180" : ""} ${isMobile ? "ml-auto" : ""}`}
          />
        )}
      </button>

      {open && (
        <div
          className={`absolute z-50 mt-1 bg-popover border border-border rounded-md shadow-md overflow-hidden ${isMobile ? "left-0 right-0" : "right-0 min-w-36"}`}
        >
          {languages.map((lang) => (
            <button
              key={lang.code}
              type="button"
              onClick={() => {
                setSelected(lang);
                setOpen(false);
              }}
              className={`flex items-center gap-2 w-full px-4 py-2.5 text-sm hover:bg-muted transition-colors ${selected.code === lang.code ? "bg-muted font-medium" : ""}`}
            >
              {lang.flag}
              <span>{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
