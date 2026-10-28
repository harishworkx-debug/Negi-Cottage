import { useEffect, useState, useCallback } from "react";

/**
 * WelcomeCurtain — Luxury Boutique Hotel Opening Screen
 *
 * Inspired by classic heritage mountain retreats (like Hotel Woodland).
 * Clean, minimalist, and royal:
 * - Solid rich deep woodland emerald (#0A291E)
 * - Ivory serif wordmark: "NEGI COTTAGE"
 * - Small champagne gold subtitle: "HOMESTAY · SANGLA VALLEY · KINNAUR"
 * - Sleek golden center line that expands gracefully over ~3 seconds
 * - Smooth upward curtain reveal to the website
 * - Tap / click anywhere to skip immediately
 */
export function WelcomeCurtain() {
  const [shouldRender, setShouldRender] = useState(() => {
    if (typeof window === "undefined") return true;
    try {
      const searchParams = new URLSearchParams(window.location.search);
      if (searchParams.get("intro") === "1" || searchParams.get("intro") === "true") {
        return true;
      }
      return window.sessionStorage.getItem("negi_intro_shown") !== "true";
    } catch {
      return true;
    }
  });

  const [isExiting, setIsExiting] = useState(false);

  const dismiss = useCallback(() => {
    setIsExiting(true);
    if (typeof window !== "undefined") {
      try {
        window.sessionStorage.setItem("negi_intro_shown", "true");
        document.documentElement.classList.add("intro-seen");
      } catch {
        // Ignore session storage errors
      }
    }
    // Remove from DOM after smooth curtain slide (800ms)
    setTimeout(() => {
      setShouldRender(false);
    }, 800);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Check if user already saw the intro in this session
    const searchParams = new URLSearchParams(window.location.search);
    const forceIntro = searchParams.get("intro") === "1" || searchParams.get("intro") === "true";
    let alreadySeen = false;

    try {
      alreadySeen = window.sessionStorage.getItem("negi_intro_shown") === "true";
    } catch {
      alreadySeen = false;
    }

    if (alreadySeen && !forceIntro) {
      setShouldRender(false);
      return;
    }

    // Auto-dismiss smoothly after exactly 2 seconds when the line finishes expanding
    const timer = setTimeout(() => {
      dismiss();
    }, 2000);

    // Keyboard ESC/Enter/Space to skip immediately
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "Enter" || e.key === " ") {
        dismiss();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [dismiss]);

  if (!shouldRender) return null;

  return (
    <div
      id="negi-welcome-curtain"
      role="dialog"
      aria-modal="true"
      aria-label="Negi Cottage Home Stay"
      onClick={dismiss}
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center overflow-hidden select-none cursor-pointer px-6 transition-all duration-800 ${
        isExiting
          ? "-translate-y-full opacity-0 pointer-events-none scale-100"
          : "translate-y-0 opacity-100"
      }`}
      style={{
        backgroundColor: "#0A291E",
        transitionTimingFunction: "cubic-bezier(0.8, 0, 0.2, 1)",
      }}
    >
      <div className="flex flex-col items-center text-center max-w-4xl px-4 animate-hero-in">
        {/* Large Elegant Serif Title (Exact Hotel Woodland Style) */}
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0.16em] sm:tracking-[0.18em] uppercase text-[#F4F1EA] font-normal drop-shadow-sm">
          Negi Cottage
        </h1>

        {/* Small Spaced Subtitle */}
        <p className="mt-3.5 sm:mt-5 text-[10px] sm:text-xs tracking-[0.32em] sm:tracking-[0.38em] uppercase text-[#C5A059] font-medium font-sans">
          Homestay · Sangla Valley · Kinnaur
        </p>

        {/* Elegant Center Line that Expands Outward Across 3 Seconds */}
        <div
          className="mt-6 sm:mt-8 w-24 sm:w-28 h-[1.5px] bg-[#C5A059] mx-auto animate-expand-line"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
