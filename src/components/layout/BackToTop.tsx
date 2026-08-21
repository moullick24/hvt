"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => setVisible(window.scrollY > 480);

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });

    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  function scrollToTop() {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`header-outline-action fixed bottom-5 right-5 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full border-[1.5px] border-transparent shadow-[0_10px_30px_rgba(29,49,95,0.14)] transition-[opacity,transform] duration-200 sm:bottom-7 sm:right-7 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
      aria-label="Back to top"
      title="Back to top"
    >
      <ArrowUp className="h-5 w-5" aria-hidden="true" />
    </button>
  );
}
