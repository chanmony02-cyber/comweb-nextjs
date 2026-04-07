"use client";

import { useEffect, useRef, useState } from "react";

export function DeferredSection({
  children,
  fallback = null,
  className = "",
  minHeight = "auto",
  rootMargin = "240px 0px",
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return undefined;
    }

    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <div
      ref={ref}
      className={className}
      style={!isVisible && minHeight !== "auto" ? { minHeight } : undefined}
    >
      {isVisible ? children : fallback}
    </div>
  );
}
"use client";
