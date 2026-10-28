import { useEffect, useState, useCallback } from "react";

/**
 * WelcomeCurtain — Luxury Himalayan Opening Splash Screen
 * 
 * Runs for ~3.4 seconds on the user's first visit in a browser session.
 * Features:
 * - Deep Royal Emerald & Champagne Gold aesthetic
 * - Elegant Cormorant Garamond typography ("Negi Cottage", "Home Stay")
 * - Himalayan mountain peaks silhouette
 * - Smooth 3.2s golden progress indicator
 * - Instant "Enter / Skip →" button and tap-to-dismiss
 * - Smooth upward curtain slide transition
 * - Session storage persistence (won't annoyingly repeat during regular navigation)
 * - Testable anytime via ?intro=1 query parameter
 */
export function WelcomeCurtain() {
  const [shouldRender, setShouldRender] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [progress, setProgress] = useState(0);

  const dismiss = useCallback(() => {
    setIsExiting(true);
    if (typeof window !== "undefined") {
      try {
        window.sessionStorage.setItem("negi_intro_shown", "true");
      } catch {
        // Ignore session storage errors (e.g. private browsing restrictions)
      }
    }
    // Remove from DOM after transition completes (850ms)
    setTimeout(() => {
      setShouldRender(false);
    }, 850);
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
      return;
    }

    setShouldRender(true);

    // Smoothly animate progress bar from 0 to 100 over ~3200ms
    const startTime = performance.now();
    const duration = 3200; // 3.2 seconds
    let animationFrameId: number;

    const updateProgress = (now: number) => {
      const elapsed = now - startTime;
      const pct = Math.min(Math.floor((elapsed / duration) * 100), 100);
      setProgress(pct);

      if (elapsed < duration) {
        animationFrameId = requestAnimationFrame(updateProgress);
      } else {
        // Automatically start curtain exit when loading reaches 100%
        setTimeout(() => {
          dismiss();
        }, 200);
      }
    };

    animationFrameId = requestAnimationFrame(updateProgress);

    // Safety timeout to ensure curtain closes even on slow ticks (3800ms)
    const timer = setTimeout(() => {
      dismiss();
    }, 3800);

    // Keyboard ESC to skip
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "Enter" || e.key === " ") {
        dismiss();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearTimeout(timer);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [dismiss]);

  if (!shouldRender) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Welcome to Negi Cottage Home Stay"
      onClick={dismiss}
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-between overflow-hidden select-none cursor-pointer transition-all duration-800 ${
        isExiting
          ? "-translate-y-full opacity-0 pointer-events-none scale-100"
          : "translate-y-0 opacity-100"
      }`}
      style={{
        background: "radial-gradient(circle at 50% 40%, #0F382B 0%, #08241B 50%, #04120D 100%)",
        transitionTimingFunction: "cubic-bezier(0.8, 0, 0.2, 1)",
      }}
    >
      {/* Background Mountain Peaks Silhouette (Himalayas) */}
      <div className="absolute inset-x-0 bottom-0 pointer-events-none opacity-20 sm:opacity-25">
        <svg
          viewBox="0 0 1440 380"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          {/* Back distant range */}
          <path
            d="M0 380L120 220L280 310L480 160L640 260L820 120L980 240L1160 140L1320 270L1440 180V380H0Z"
            fill="#D4AF37"
            fillOpacity="0.08"
          />
          {/* Mid jagged peaks */}
          <path
            d="M0 380L160 260L340 330L520 200L700 290L880 180L1060 270L1240 190L1380 290L1440 240V380H0Z"
            fill="#D4AF37"
            fillOpacity="0.14"
          />
          {/* Front range outline */}
          <path
            d="M0 380L220 290L420 350L600 240L780 320L960 220L1140 310L1340 230L1440 300V380H0Z"
            fill="#04120D"
            stroke="#D4AF37"
            strokeWidth="1.2"
            strokeOpacity="0.25"
          />
        </svg>
      </div>

      {/* Floating Ambient Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[28rem] h-[28rem] rounded-full pointer-events-none opacity-40 blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(212, 175, 55, 0.22) 0%, rgba(13, 51, 39, 0) 70%)",
        }}
      />

      {/* Top Header: Brand Eyebrow + Skip Button */}
      <div className="relative z-10 flex w-full max-w-5xl items-center justify-between px-6 pt-8 sm:px-10 sm:pt-10">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-gold/80">
            Sangla Valley · Himachal Pradesh
          </span>
        </div>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            dismiss();
          }}
          className="group flex items-center gap-1.5 rounded-full border border-white/20 bg-white/5 px-3.5 py-1.5 text-[11px] font-medium tracking-wider text-white/80 backdrop-blur-sm transition-all hover:border-gold/50 hover:bg-white/10 hover:text-white"
        >
          <span>Enter Retreat</span>
          <span className="transition-transform group-hover:translate-x-0.5">→</span>
        </button>
      </div>

      {/* Centerpiece: Welcome to Negi Cottage Home Stay */}
      <div className="relative z-10 flex flex-col items-center px-6 text-center max-w-2xl my-auto animate-hero-in">
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2.5 rounded-full border border-gold/30 bg-gold/10 px-4 py-1 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.3em] text-gold shadow-sm">
          <span>✦</span>
          <span>Welcome to the Himalayas</span>
          <span>✦</span>
        </div>

        {/* Main Title: Negi Cottage */}
        <h1 className="mt-5 font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-white drop-shadow-lg">
          Negi Cottage
        </h1>

        {/* Home Stay subtitle */}
        <div className="mt-1 sm:mt-2 font-display italic text-2xl sm:text-4xl md:text-5xl font-light text-transparent bg-clip-text bg-gradient-to-r from-[#F7E7CE] via-[#E5B566] to-[#D4AF37] tracking-wider drop-shadow">
          Home Stay
        </div>

        {/* Elegant diamond divider */}
        <div className="flex items-center justify-center gap-3 my-5 sm:my-6 text-gold/60">
          <span className="h-px w-12 sm:w-20 bg-gradient-to-r from-transparent to-gold/60" />
          <span className="text-xs text-gold">✦</span>
          <span className="h-px w-12 sm:w-20 bg-gradient-to-l from-transparent to-gold/60" />
        </div>

        {/* Location & Authentic Mountain Vibe */}
        <p className="text-xs sm:text-sm font-medium uppercase tracking-[0.24em] text-white/85 font-sans">
          Kupa · Sangla Valley · Kinnaur
        </p>

        <p className="mt-2 text-[11px] sm:text-xs text-white/55 tracking-[0.18em] uppercase font-sans">
          Alt. 2,600m · Apple Orchards · Snow Peak Vistas · Riverside Serenity
        </p>

        {/* Progress bar (fills across 3.2s) */}
        <div className="w-56 sm:w-72 max-w-[80vw] mx-auto mt-8 sm:mt-10">
          <div className="h-[3px] w-full overflow-hidden rounded-full bg-white/10 p-[0.5px]">
            <div
              className="h-full rounded-full transition-all duration-75 ease-out shadow-sm"
              style={{
                width: `${progress}%`,
                background: "linear-gradient(90deg, #B8860B 0%, #D4AF37 50%, #F5E6C8 100%)",
              }}
            />
          </div>
          <div className="mt-2.5 flex items-center justify-between text-[10px] font-sans font-medium uppercase tracking-widest text-white/45">
            <span>Entering Sanctuary</span>
            <span>{progress}%</span>
          </div>
        </div>
      </div>

      {/* Bottom Footer Hint */}
      <div className="relative z-10 pb-8 sm:pb-10 text-center">
        <p className="text-[11px] font-sans tracking-widest uppercase text-white/40 flex items-center justify-center gap-1.5">
          <span>Click or tap anywhere to explore</span>
          <span className="inline-block animate-bounce">↓</span>
        </p>
      </div>
    </div>
  );
}

