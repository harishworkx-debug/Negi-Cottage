import { useEffect, useState, useCallback } from "react";

/**
 * WelcomeCurtain — Luxury Boutique Hotel Opening Screen
 *
 * Inspired by classic heritage mountain retreats (like Hotel Woodland).
 * Clean, minimalist, and royal:
 * - Solid rich deep woodland emerald (#0C3422)
 * - Ivory serif wordmark: "NEGI COTTAGE"
 * - Champagne gold subtitle: "HOMESTAY · SANGLA VALLEY · KINNAUR"
 * - Sleek golden center line that expands gracefully over 2 seconds
 * - Smooth upward curtain reveal to the website
 * - Tap / click anywhere to skip immediately
 */

// In-memory session tracking: plays on fresh page load/refresh, avoids popping up on SPA client routing
let hasShownIntroInSession = false;

export function WelcomeCurtain() {
  const [shouldRender, setShouldRender] = useState(() => {
    if (typeof window === "undefined") return true;
    try {
      const searchParams = new URLSearchParams(window.location.search);
      if (searchParams.get("intro") === "1" || searchParams.get("intro") === "true") {
        return true;
      }
      return !hasShownIntroInSession;
    } catch {
      return true;
    }
  });

  const [isExiting, setIsExiting] = useState(false);

  const dismiss = useCallback(() => {
    setIsExiting(true);
    hasShownIntroInSession = true;
    // Remove from DOM after smooth GPU-accelerated curtain slide (650ms)
    setTimeout(() => {
      setShouldRender(false);
    }, 650);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const searchParams = new URLSearchParams(window.location.search);
    const forceIntro = searchParams.get("intro") === "1" || searchParams.get("intro") === "true";

    if (hasShownIntroInSession && !forceIntro) {
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
      aria-label="Negi Cottage Homestay"
      data-exiting={isExiting ? "true" : "false"}
      onClick={dismiss}
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center overflow-hidden select-none cursor-pointer px-6 will-change-transform ${
        isExiting
          ? "-translate-y-full opacity-95 pointer-events-none transition-transform duration-650 ease-[cubic-bezier(0.76,0,0.24,1)]"
          : "translate-y-0 opacity-100"
      }`}
      style={{
        backgroundColor: "#0C3422",
      }}
    >
      <div className="flex flex-col items-center text-center max-w-4xl px-4 animate-hero-in">
        {/* Large Elegant Serif Title (Exact Hotel Woodland Style) */}
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0.18em] sm:tracking-[0.22em] uppercase text-[#F5F3ED] font-normal drop-shadow-sm">
          NEGI COTTAGE
        </h1>

        {/* Small Spaced Subtitle */}
        <p className="mt-3.5 sm:mt-5 text-[10px] sm:text-xs tracking-[0.32em] sm:tracking-[0.38em] uppercase text-[#C5A059] font-medium font-sans">
          HOMESTAY · SANGLA VALLEY · KINNAUR
        </p>

        {/* Elegant Center Line that Expands Outward Across 2 Seconds */}
        <div
          className="mt-6 sm:mt-8 w-28 sm:w-36 h-[1.5px] bg-[#C5A059] mx-auto animate-expand-line"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
