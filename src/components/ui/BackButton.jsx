"use client";

import { useRouter } from "next/navigation";

export function BackButton({ label = "Back", className = "" }) {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.back()}
      className={`inline-flex items-center gap-2 rounded-md px-3 py-2 text-md font-semibold text-foreground hover:text-cyan-500 ${className}`}
    >
      <span aria-hidden="true">&lt;-</span>
      {label}
    </button>
  );
}
