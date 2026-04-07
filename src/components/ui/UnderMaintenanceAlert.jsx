"use client";

"use client";

// src/components/ui/UnderMaintenanceAlert.jsx

import { useEffect } from "react";

/**
 * UnderMaintenanceAlert
 *
 * A centered modal-style alert shown when a feature is not yet available.
 *
 * Props:
 *  - isOpen      {boolean}  — controls visibility
 *  - onClose     {function} — called when the user dismisses the alert
 *  - title       {string}   — optional custom title
 *  - message     {string}   — optional custom message
 *  - autoDismiss {number}   — ms before auto-close (0 = never, default 4000)
 */
export function UnderMaintenanceAlert({
  isOpen,
  onClose,
  title = "Under Maintenance",
  message = "This feature is currently under maintenance. Please try again later.",
  autoDismiss = 4000,
}) {
  // Auto-dismiss timer
  useEffect(() => {
    if (!isOpen || autoDismiss === 0) return;
    const timer = setTimeout(() => {
      onClose?.();
    }, autoDismiss);
    return () => clearTimeout(timer);
  }, [isOpen, autoDismiss, onClose]);

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    /* Backdrop — sits above everything, centered */
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-live="assertive"
    >
      {/* Dark backdrop — click to dismiss */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Alert card */}
      <div
        className="
          relative z-10
          w-full max-w-sm mx-4
          bg-white border border-border
          rounded-2xl shadow-2xl
          px-6 py-8
          flex flex-col items-center text-center gap-4
          animate-fade-in-up
        "
      >
        {/* Icon */}
        <div className="w-16 h-16 rounded-full bg-sky-accent/30 flex items-center justify-center">
          <svg
            className="w-8 h-8 text-primary-blue"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.8}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
            />
          </svg>
        </div>

        {/* Text */}
        <div className="flex flex-col gap-2">
          <p className="text-xl font-bold text-navy font-display">{title}</p>
          <p className="text-sm text-muted-foreground leading-relaxed font-sans">
            {message}
          </p>
        </div>

        {/* Auto-dismiss progress bar */}
        {autoDismiss > 0 && (
          <div className="w-full h-1 rounded-full bg-border overflow-hidden">
            <div
              className="h-full bg-primary-blue rounded-full"
              style={{
                animation: `shrink ${autoDismiss}ms linear forwards`,
              }}
            />
          </div>
        )}

        {/* Dismiss button */}
        <button
          type="button"
          onClick={onClose}
          className="mt-1 w-full py-2.5 rounded-xl bg-navy text-white text-sm font-semibold font-display hover:bg-primary-blue transition-colors"
        >
          OK, Got it
        </button>

        {/* Close X — top right corner */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Dismiss alert"
          className="absolute top-3 right-3 w-7 h-7 flex items-center justify-center rounded-full text-muted-foreground hover:text-navy hover:bg-muted transition-colors"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      {/* Keyframe for progress bar shrink */}
      <style>{`
        @keyframes shrink {
          from { width: 100%; }
          to   { width: 0%; }
        }
      `}</style>
    </div>
  );
}
