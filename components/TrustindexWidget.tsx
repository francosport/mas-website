"use client";

import { useEffect, useRef } from "react";

const SRC = "https://cdn.trustindex.io/loader.js?c63efa723a3976010d062d27750";

export default function TrustindexWidget() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const load = () => {
      if (document.querySelector(`script[src="${SRC}"]`)) return;
      const script = document.createElement("script");
      script.src = SRC;
      script.defer = true;
      script.async = true;
      container.appendChild(script);
    };

    // Only load when section is near the viewport — keeps it off the critical path
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          load();
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return <div ref={containerRef} />;
}
