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

export function OfficialWhatsAppLogo({
  size = 32,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "inline-block", verticalAlign: "middle", flexShrink: 0 }}
      aria-hidden="true"
    >
      <circle cx="16" cy="16" r="16" fill="#25D366" />
      <path
        fill="#FFFFFF"
        d="M16 4.8C9.82 4.8 4.8 9.82 4.8 16c0 2.14.6 4.14 1.63 5.86L5 27l5.32-1.4a11.16 11.16 0 0 0 5.68 1.54c6.18 0 11.2-5.02 11.2-11.2S22.18 4.8 16 4.8zm0 2.05c5.05 0 9.15 4.1 9.15 9.15s-4.1 9.15-9.15 9.15c-1.74 0-3.37-.49-4.75-1.34l-.34-.2-3.52.92.94-3.43-.22-.35A9.11 9.11 0 0 1 6.85 16c0-5.05 4.1-9.15 9.15-9.15zm-3.64 4.09c-.2 0-.44.07-.67.33-.23.26-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.12.18 1.76 2.69 4.26 3.77.6.26 1.06.41 1.43.53.6.19 1.15.16 1.57.1.48-.07 1.48-.6 1.69-1.19.21-.59.21-1.1.15-1.2-.06-.11-.23-.17-.48-.3-.25-.12-1.48-.73-1.71-.82-.23-.08-.4-.13-.57.13-.17.25-.65.82-.8 1-.15.17-.29.19-.54.07-.25-.12-1.06-.39-2.02-1.25-.75-.67-1.26-1.51-1.41-1.76-.15-.26-.02-.4.11-.53.11-.11.25-.29.38-.44.13-.14.17-.25.26-.42.08-.17.04-.32-.02-.44-.06-.12-.57-1.36-.78-1.87-.2-.49-.41-.43-.57-.44-.14-.01-.31-.01-.48-.01z"
      />
    </svg>
  );
}

export function WhatsAppIcon({
  className = "h-5 w-5",
  size = 20,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "inline-block", verticalAlign: "middle", flexShrink: 0 }}
      aria-hidden="true"
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.04 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.16 12.04 20.16C10.66 20.16 9.3 19.81 8.1 19.14L7.81 18.97L4.69 19.79L5.52 16.75L5.34 16.45C4.6 15.28 4.21 13.91 4.21 11.91C4.21 7.37 7.91 3.67 12.04 3.67ZM8.79 7.35C8.63 7.35 8.41 7.41 8.22 7.62C8.03 7.83 7.49 8.34 7.49 9.37C7.49 10.4 8.24 11.39 8.35 11.53C8.45 11.67 9.8 13.75 11.88 14.65C12.38 14.86 12.76 14.99 13.06 15.08C13.56 15.24 14.02 15.22 14.38 15.16C14.79 15.1 15.63 14.65 15.8 14.16C15.98 13.67 15.98 13.25 15.92 13.16C15.87 13.07 15.73 13.01 15.52 12.91C15.31 12.8 14.26 12.28 14.06 12.21C13.87 12.14 13.73 12.1 13.59 12.31C13.45 12.52 13.05 13 12.93 13.14C12.81 13.28 12.69 13.3 12.48 13.19C12.27 13.09 11.59 12.87 10.79 12.15C10.16 11.59 9.74 10.9 9.61 10.69C9.49 10.48 9.6 10.37 9.71 10.27C9.8 10.18 9.91 10.03 10.02 9.91C10.12 9.79 10.16 9.7 10.23 9.56C10.3 9.42 10.26 9.3 10.21 9.2C10.16 9.1 9.75 8.09 9.58 7.67C9.41 7.27 9.24 7.32 9.11 7.32C8.99 7.31 8.84 7.31 8.79 7.31L8.79 7.35Z" />
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
            className="inline-flex items-center gap-2 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white text-xs py-2 px-5 font-bold uppercase tracking-wider shadow-md transition-all hover:scale-105 shrink-0"
          >
            <OfficialWhatsAppLogo size={20} />
            <span>WhatsApp</span>
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
      {/* Real Official Circular Floating WhatsApp Button (Pure real WhatsApp icon, no text) */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="floating-whatsapp"
        aria-label="Chat with Negi Cottage on WhatsApp"
        title="Chat on WhatsApp"
      >
        <OfficialWhatsAppLogo size={36} />
      </a>

      {/* Mobile Fixed Bottom Action Bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 flex items-center gap-2.5 border-t border-forest-border/40 bg-forest/98 p-2.5 shadow-2xl backdrop-blur-lg lg:hidden">
        <a
          href={phoneUrl}
          className="flex-1 flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 py-3 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-white/20"
        >
          <Phone className="h-4 w-4 text-gold" />
          <span>Call Host</span>
        </a>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="flex-1 flex items-center justify-center gap-2 rounded-full bg-[#25D366] hover:bg-[#20BA5A] py-3 text-xs font-bold uppercase tracking-wider text-white shadow-lg transition"
        >
          <OfficialWhatsAppLogo size={20} />
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