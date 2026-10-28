import { Link } from "@tanstack/react-router";
import { ArrowRight, MapPin, Menu, Phone, Star, X } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";

export const whatsappMessage = encodeURIComponent(
  "Hello, I would like to enquire about booking a stay at Negi Cottage, Kupa.",
);
export const whatsappUrl = `https://wa.me/917807215761?text=${whatsappMessage}`;
export const phoneUrl = "tel:+917807215761";
export const directionsUrl =
  "https://www.google.com/maps/dir/?api=1&destination=Negi+Cottage+Kupa+Himachal+Pradesh+172106";

export const navItems = [
  { label: "Home", to: "/" as const },
  { label: "Stay", to: "/stay" as const },
  { label: "Reviews", to: "/reviews" as const },
  { label: "Experience", to: "/experience" as const },
  { label: "Dining", to: "/dining" as const },
  { label: "Gallery", to: "/gallery" as const },
  { label: "Location", to: "/location" as const },
  { label: "Contact", to: "/contact" as const },
];

export function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.52 3.48A11.86 11.86 0 0 0 12.07 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.15 1.6 5.95L.06 24l6.3-1.65a11.9 11.9 0 0 0 5.7 1.45h.01C18.63 23.8 24 18.46 24 11.9c0-3.18-1.24-6.17-3.48-8.42ZM12.07 21.8h-.01a9.88 9.88 0 0 1-5.04-1.38l-.36-.21-3.74.98 1-3.64-.24-.37a9.87 9.87 0 0 1-1.52-5.28c0-5.46 4.45-9.9 9.92-9.9a9.84 9.84 0 0 1 7.01 2.9A9.83 9.83 0 0 1 22 11.9c0 5.46-4.46 9.9-9.93 9.9Zm5.44-7.42c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48a9.02 9.02 0 0 1-1.66-2.06c-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.27.5 1.7.63.72.23 1.36.2 1.88.12.57-.08 1.76-.72 2-1.42.25-.7.25-1.31.18-1.44-.08-.12-.28-.2-.58-.34Z" />
    </svg>
  );
}

export function SiteHeader({ overlay = false }: { overlay?: boolean }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 35);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine header classes based on scroll & overlay
  const headerBackground = scrolled
    ? "bg-forest/95 text-forest-foreground backdrop-blur-md shadow-md border-b border-forest-border/40 py-3"
    : overlay
      ? "bg-transparent text-hero-foreground border-b border-hero-foreground/15 py-4 lg:py-5"
      : "bg-forest text-forest-foreground border-b border-forest-border py-4";

  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${headerBackground}`}>
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 md:px-8 lg:px-12">
        {/* Brand Wordmark */}
        <Link to="/" className="group min-w-0 flex flex-col" aria-label="Negi Cottage Homepage">
          <span className="font-display text-xl sm:text-2xl font-medium tracking-[0.16em] uppercase transition-colors">
            Negi Cottage
          </span>
          <span className="text-[10px] uppercase tracking-[0.28em] opacity-75 font-sans font-medium -mt-0.5">
            Kupa · Sangla Valley · HP
          </span>
        </Link>

        {/* Desktop Nav Items */}
        <nav
          className="hidden items-center justify-center gap-7 lg:flex"
          aria-label="Main navigation"
        >
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeProps={{ className: "nav-active text-terracotta" }}
              activeOptions={{ exact: item.to === "/" }}
              className="nav-link text-xs uppercase tracking-[0.14em] opacity-90 transition-opacity hover:opacity-100 hover:text-terracotta"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="button-forest text-xs py-2.5 px-6 font-bold"
          >
            <WhatsAppIcon className="h-4 w-4 text-terracotta" />
            <span>Book Your Stay</span>
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="grid h-11 w-11 place-items-center rounded-full border border-white/20 text-current lg:hidden transition hover:bg-white/10"
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Nav Drawer */}
      {open && (
        <nav
          className="mobile-menu fixed inset-x-0 top-full max-h-[85vh] overflow-y-auto border-t border-forest-border/40 bg-forest/98 px-6 py-8 text-forest-foreground shadow-2xl backdrop-blur-2xl lg:hidden"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col gap-2">
            <p className="text-[10px] font-bold uppercase tracking-widest text-terracotta mb-2">
              Menu Navigation
            </p>
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="font-display text-2xl py-2 border-b border-white/10 tracking-wide text-forest-foreground hover:text-terracotta transition-colors"
              >
                {item.label}
              </Link>
            ))}

            <div className="mt-6 flex flex-col gap-3 pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="button-forest w-full justify-center text-xs py-3.5"
              >
                <WhatsAppIcon className="h-4 w-4 text-terracotta" /> Book on WhatsApp
              </a>
              <a
                href={phoneUrl}
                className="button-outline-light w-full justify-center text-xs py-3"
              >
                <Phone className="h-4 w-4" /> Call +91 78072 15761
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-forest px-6 py-14 text-forest-foreground md:px-12 lg:px-16 border-t border-forest-border">
      <div className="mx-auto max-w-[1440px]">
        {/* Top Grid */}
        <div className="grid gap-12 border-b border-forest-border pb-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand block */}
          <div className="lg:col-span-2">
            <span className="font-display text-3xl sm:text-4xl uppercase tracking-[0.14em] text-forest-foreground">
              Negi Cottage
            </span>
            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.24em] text-terracotta">
              Boutique Himalayan Homestay · Kupa
            </p>
            <p className="mt-4 max-w-md text-sm text-forest-foreground/75 leading-relaxed">
              Surrounded by heritage apple orchards and snow-clad Kinner Kailash mountain horizons in the heart of Sangla Valley, Kinnaur, Himachal Pradesh.
            </p>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-black/25 px-4 py-1.5 border border-white/10 text-xs">
              <Star className="h-3.5 w-3.5 fill-current text-terracotta" />
              <span className="font-semibold text-white">4.6 / 5 Rating</span>
              <span className="opacity-60">· 279 Verified Google Reviews</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-terracotta mb-4">
              Explore
            </p>
            <div className="flex flex-col gap-2.5 text-xs tracking-wider text-forest-foreground/80">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="hover:text-terracotta transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-terracotta mb-4">
              Direct Contact
            </p>
            <address className="not-italic text-xs text-forest-foreground/80 space-y-3 leading-relaxed">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 shrink-0 text-terracotta mt-0.5" />
                <span>Kuppa Bus Stand, Kupa, Himachal Pradesh 172106</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-terracotta" />
                <a href={phoneUrl} className="hover:text-terracotta transition-colors font-semibold">
                  +91 78072 15761
                </a>
              </div>
              <div className="pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-terracotta hover:underline"
                >
                  <WhatsAppIcon className="h-4 w-4" /> Message Host on WhatsApp &rarr;
                </a>
              </div>
            </address>
          </div>
        </div>

        {/* Bottom Attribution Bar */}
        <div className="mt-8 flex flex-col gap-3 text-xs text-forest-foreground/55 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Negi Cottage. All rights reserved.</span>
          <span>
            Powered by{" "}
            <a
              href="https://www.techhim.online/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-terracotta hover:underline transition-colors"
            >
              TechHim Solutions
            </a>
          </span>
          <span>Sangla Valley, Kinnaur, Himachal Pradesh</span>
        </div>
      </div>
    </footer>
  );
}

export function FloatingBooking() {
  return (
    <>
      {/* Desktop Floating WhatsApp Pill */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="floating-whatsapp hidden lg:inline-flex"
        aria-label="Book Negi Cottage on WhatsApp"
      >
        <WhatsAppIcon className="h-5 w-5 text-terracotta" />
        <span>Book on WhatsApp</span>
      </a>

      {/* Mobile Fixed Bottom Action Bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 flex items-center gap-2 border-t border-forest-border/40 bg-forest/98 p-2.5 shadow-2xl backdrop-blur-lg lg:hidden">
        <a
          href={phoneUrl}
          className="flex-1 flex items-center justify-center gap-2 rounded-full border border-white/20 bg-black/20 py-2.5 text-xs font-bold uppercase tracking-wider text-white"
        >
          <Phone className="h-3.5 w-3.5 text-terracotta" />
          <span>Call</span>
        </a>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="flex-1 flex items-center justify-center gap-2 rounded-full bg-terracotta py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-md"
        >
          <WhatsAppIcon className="h-4 w-4" />
          <span>WhatsApp</span>
        </a>
      </div>
    </>
  );
}

export function PageHero({
  image,
  eyebrow,
  title,
  copy,
  imageAlt,
}: {
  image: string;
  eyebrow: string;
  title: string;
  copy: string;
  imageAlt: string;
}) {
  return (
    <section className="relative flex min-h-[520px] sm:min-h-[620px] items-end overflow-hidden text-hero-foreground">
      <img
        src={image}
        alt={imageAlt}
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="hero-overlay absolute inset-0" />
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 pb-16 pt-36 md:px-10 lg:pb-20 lg:pt-44">
        <p className="eyebrow text-terracotta">{eyebrow}</p>
        <h1 className="mt-3 max-w-4xl font-display text-4xl sm:text-6xl lg:text-7xl font-normal leading-[1.05] tracking-tight">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base text-hero-foreground/85 leading-relaxed sm:text-lg">
          {copy}
        </p>
      </div>
    </section>
  );
}

export function PageFrame({
  children,
  overlayHeader = true,
}: {
  children: ReactNode;
  overlayHeader?: boolean;
}) {
  return (
    <main className="min-h-screen bg-background text-foreground pb-16 lg:pb-0">
      <SiteHeader overlay={overlayHeader} />
      {children}
      <SiteFooter />
      <FloatingBooking />
    </main>
  );
}
