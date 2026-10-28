import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  ChevronDown,
  ChevronRight,
  HelpCircle,
  ExternalLink,
  Flame,
  Heart,
  MapPin,
  Menu,
  Mountain,
  Phone,
  Sparkles,
  Star,
  Trees,
  Utensils,
  Users,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

import balconyImage from "@/assets/negi-cottage-balcony.png";
import roomViewImage from "@/assets/negi-cottage-room-view.png";
import diningImage from "@/assets/negi-cottage-dining.png";
import roomImage from "@/assets/room.png";
import orchardImage from "@/assets/negi-cottage-orchard.png";
import familyRoomImage from "@/assets/family-room.png";
import mountainImage from "@/assets/negi-cottage-mountains.png";
import exteriorImage from "@/assets/negi-cottage-exterior.png";
import entranceImage from "@/assets/negi-cottage-entrance.png";
import sunriseImage from "@/assets/negi-retreat-sunrise.jpg";
import snowImage from "@/assets/snow-view.png";
import bornfireImage from "@/assets/bornfire.png";
import nightView1 from "@/assets/night-view1.png";
import balconyRoom from "@/assets/balcony-room.png";
import gardanImage from "@/assets/gardan.png";
import dinnerarea1Image from "@/assets/dinnerarea1.png";
import SEO from "@/components/SEO";

const whatsappMessage = encodeURIComponent(
  "Hello, I would like to enquire about booking a stay at Negi Cottage, Kupa.",
);
const whatsappUrl = `https://wa.me/917807215761?text=${whatsappMessage}`;
const phoneUrl = "tel:+917807215761";
const directionsUrl =
  "https://www.google.com/maps/dir/?api=1&destination=Negi+Cottage+Kupa+Himachal+Pradesh+172106";

const heroSlides = [
  {
    image: mountainImage,
    eyebrow: "Kupa · Sangla Valley · Himachal Pradesh",
    title: "Stay at Negi Cottage in\nSangla Valley, Kinnaur",
    copy: "Plan your peaceful mountain stay in Kupa, Sangla Valley. Wake up to snow-clad peaks, wander through private apple orchards, and experience authentic Kinnauri homestay hospitality.",
  },
  {
    image: sunriseImage,
    eyebrow: "Golden Hour · Kinner Kailash Peaks",
    title: "Awaken to Light\nOver the Summits.",
    copy: "Watch the first amber rays of Himalayan sunrise illuminate the holy Kinner Kailash ridge directly across the valley.",
  },
  {
    image: snowImage,
    eyebrow: "Winter Wonder · Pure White Snow",
    title: "Snow-Dusted Roofs\nand Quiet Orchards.",
    copy: "Experience the magic of peaceful winter snowfalls with hot chai, crackling evening fires, and warm heated rooms.",
  },
  {
    image: orchardImage,
    eyebrow: "Orchard Trails · Crisp Mountain Breeze",
    title: "Where the Valley\nSets the Rhythm.",
    copy: "Follow winding orchard paths among blooming apple trees, breathe in fragrant cedar air, and slow down your days.",
  },
];

const featuredPreviewPhotos = [
  {
    src: mountainImage,
    title: "Kinner Kailash Range Vista",
    category: "Mountain Views",
    alt: "Snow-covered Himalayan mountains and orchards surrounding Negi Cottage in Kupa",
  },
  {
    src: bornfireImage,
    title: "Evening Bonfire Gathering",
    category: "Experience",
    alt: "Warm campfire under starry Himalayan night skies at Negi Cottage",
  },
  {
    src: balconyRoom,
    title: "Balcony Mountain Room",
    category: "Accommodation",
    alt: "Deluxe guest room with private wooden balcony overlooking the valley",
  },
  {
    src: snowImage,
    title: "Winter Snowfall Wonderland",
    category: "Winter",
    alt: "Crisp white snow blanketing the cottage roof and orchards in Kupa",
  },
  {
    src: diningImage,
    title: "Wood-Panelled Dining Room",
    category: "Dining",
    alt: "Warm wood-panelled dining hall serving homemade Himachali delicacies",
  },
  {
    src: orchardImage,
    title: "Fragrant Apple Orchards",
    category: "Outdoor",
    alt: "Apple orchards and forested Himalayan slopes surrounding the retreat",
  },
  {
    src: familyRoomImage,
    title: "Grand Family Suite",
    category: "Accommodation",
    alt: "Spacious multi-bed family suite with panoramic valley windows",
  },
  {
    src: nightView1,
    title: "Illuminated Twilight Glow",
    category: "Experience",
    alt: "Warm glowing cottage lights at dusk against the deep blue Himalayas",
  },
];

const navItems = [
  { label: "Home", to: "/" },
  { label: "Stay", to: "/stay" },
  { label: "Reviews", to: "/reviews" },
  { label: "Experience", to: "/experience" },
  { label: "Dining", to: "/dining" },
  { label: "Gallery", to: "/gallery" },
  { label: "Location", to: "/location" },
  { label: "Contact", to: "/contact" },
];


const homeFaqs = [
  {
    q: "What are the check-in and check-out timings at Negi Cottage?",
    a: "Check-in time is from 12:00 PM onwards, and check-out time is until 11:00 AM. Early check-in or late check-out can usually be accommodated based on room availability upon prior intimation.",
  },
  {
    q: "How can I check room availability and book my stay?",
    a: "You can check real-time availability and confirm your booking directly via WhatsApp or phone call at +91 78072 15761. Direct bookings carry zero middleman commission, best available tariffs, and instant confirmation from Mr. Negi.",
  },
  {
    q: "What meals and dining options are available at the homestay?",
    a: "We serve wholesome, home-cooked Himachali thalis, hot parathas, local dal, and fresh rotis prepared using clean mountain spring water and organic vegetables harvested from our adjacent garden. Pure vegetarian and Jain food requirements are lovingly catered upon advance request.",
  },
  {
    q: "Is vehicle parking available at the property?",
    a: "Yes, safe roadside parking for cars, SUVs, and motorcycles is available directly adjacent to the cottage entrance beside Kuppa Bus Stand with easy drive-in access.",
  },
  {
    q: "How are the road conditions and road accessibility to Negi Cottage in Kupa?",
    a: "Negi Cottage is situated directly on the paved Sangla Valley road at Kuppa Bus Stand (2 km before Sangla town). The road is smoothly accessible for all types of vehicles including hatchbacks, sedans, SUVs, and tempo travellers without any steep off-road tracks.",
  },
  {
    q: "What is the best time of year to visit Sangla Valley and Kinnaur?",
    a: "April to June brings pleasant summer weather (15°C–25°C) and fragrant white apple blossoms; August to October is the vibrant apple harvest season with crisp mountain air; and December to February offers a magical winter snowfall wonderland with snow-covered pine trees and cozy heated rooms.",
  },
  {
    q: "Is hot water and room heating available during cold weather?",
    a: "Yes, every private bedroom is equipped with an attached ensuite bathroom featuring a dedicated 24/7 electric geyser. In addition, we provide heavy Himalayan wool quilts, warm blankets, and electric room heaters on chill nights.",
  },
];

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: homeFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Negi Cottage, Sangla Valley | Stay in Kinnaur, Himachal" },
      {
        name: "description",
        content:
          "Plan your stay at Negi Cottage in Kupa, Sangla Valley, Kinnaur, Himachal Pradesh. Explore the local mountains, discover the valley and contact us for room availability and bookings.",
      },
      {
        name: "keywords",
        content:
          "Negi Cottage Sangla Valley, Stay in Kinnaur Himachal, Negi Cottage Kupa, Homestay in Sangla Valley, Cottage in Kinnaur Himachal Pradesh, Best homestay in Sangla, Hotel in Sangla Valley, Budget homestay in Sangla",
      },
      { property: "og:title", content: "Negi Cottage, Sangla Valley | Stay in Kinnaur, Himachal" },
      {
        property: "og:description",
        content:
          "Plan your stay at Negi Cottage in Kupa, Sangla Valley, Kinnaur, Himachal Pradesh. Explore the local mountains, discover the valley and contact us for room availability and bookings.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.negicottage.in/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://www.negicottage.in/" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqStructuredData) },
    ],
  }),
  component: Index,
});

function OfficialWhatsAppLogo({
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

function WhatsAppIcon({
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

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`reveal ${className}`}>{children}</div>;
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (entry) => entry.isIntersecting && entry.target.classList.add("is-visible"),
        ),
      { threshold: 0.12 },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = window.setInterval(
      () => setActiveSlide((slide) => (slide + 1) % heroSlides.length),
      6200,
    );
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = lightboxIndex === null ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxIndex]);

  const moveLightbox = (direction: number) => {
    setLightboxIndex((current) =>
      current === null
        ? null
        : (current + direction + featuredPreviewPhotos.length) % featuredPreviewPhotos.length,
    );
  };

  const activeImage =
    lightboxIndex === null ? null : (featuredPreviewPhotos.at(lightboxIndex) ?? null);

  return (
    <main id="home" className="min-h-screen bg-background text-foreground pb-16 lg:pb-0">
      <SEO
        title="Negi Cottage, Sangla Valley | Stay in Kinnaur, Himachal"
        description="Plan your stay at Negi Cottage in Kupa, Sangla Valley, Kinnaur, Himachal Pradesh. Explore the local mountains, discover the valley and contact us for room availability and bookings."
        path="/"
        image="/images/negi-cottage-cover.png"
      />
      {/* Editorial Fixed Navbar */}
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-forest/95 text-forest-foreground backdrop-blur-md shadow-md py-3.5 border-b border-forest-border/40"
            : "bg-transparent text-hero-foreground py-4 lg:py-6 border-b border-hero-foreground/15"
        }`}
      >
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 md:px-10 lg:px-12">
          {/* Logo / Wordmark */}
          <Link to="/" className="min-w-0 flex flex-col" aria-label="Negi Cottage Homepage">
            <span className="font-display text-xl sm:text-2xl font-medium tracking-[0.16em] uppercase">
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
                key={item.label}
                to={item.to}
                className="nav-link text-xs uppercase tracking-[0.14em] text-hero-foreground/90 transition hover:text-terracotta"
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

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="grid h-11 w-11 place-items-center rounded-full border border-white/20 text-current lg:hidden"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Nav Drawer */}
        {menuOpen && (
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
                  key={item.label}
                  to={item.to}
                  onClick={() => setMenuOpen(false)}
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
                  className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white text-xs py-3.5 px-6 font-bold uppercase tracking-wider shadow-lg transition-all w-full"
                >
                  <OfficialWhatsAppLogo size={22} />
                  <span>WhatsApp</span>
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

      {/* Cinematic Hero Section (~88vh / 100svh) */}
      <section className="hero-section relative min-h-[720px] h-[92vh] max-h-[1080px] overflow-hidden text-hero-foreground">
        {heroSlides.map((slide, index) => (
          <img
            key={slide.image}
            src={slide.image}
            alt="Himalayan landscape around Negi Cottage"
            className={`hero-image absolute inset-0 h-full w-full object-cover object-center ${
              index === activeSlide ? "hero-slide-active" : "hero-slide-hidden"
            }`}
          />
        ))}

        {/* Refined gradient overlay */}
        <div className="hero-overlay absolute inset-0" />

        <div className="relative z-10 mx-auto flex h-full max-w-[1440px] flex-col justify-end px-6 pb-16 pt-32 sm:px-10 sm:pb-20 lg:px-12 lg:pb-20">
          <div className="max-w-3xl animate-hero-in">
            {/* Location Label */}
            <p
              className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.24em] text-terracotta"
              key={`eyebrow-${activeSlide}`}
            >
              <span className="h-px w-8 bg-terracotta" /> {heroSlides[activeSlide].eyebrow}
            </p>

            {/* Main Headline */}
            <h1
              className="font-display text-4xl sm:text-6xl lg:text-[4.75rem] font-normal leading-[1.03] tracking-tight whitespace-pre-line text-white"
              key={`title-${activeSlide}`}
            >
              {heroSlides[activeSlide].title}
            </h1>

            {/* Supporting Copy */}
            <p
              className="mt-6 max-w-xl text-base leading-relaxed text-hero-foreground/90 sm:text-lg font-sans"
              key={`copy-${activeSlide}`}
            >
              {heroSlides[activeSlide].copy}
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white text-xs sm:text-sm py-3.5 px-8 font-bold uppercase tracking-wider shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <OfficialWhatsAppLogo size={24} />
                <span>WhatsApp</span>
              </a>
              <a href="#stay" className="button-glass text-xs py-3.5 px-6">
                Explore the Cottage
              </a>
            </div>

            {/* Verified Trust Badge */}
            <div className="mt-8 flex items-center gap-3 pt-2 text-xs text-hero-foreground/80">
              <div className="flex items-center text-terracotta">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
              <span className="font-semibold text-white">4.6 / 5 Rating</span>
              <span className="opacity-70">· 279 Verified Google Reviews</span>
            </div>
          </div>

          {/* Slider Indicators & Scroll Indicator */}
          <div className="absolute bottom-8 left-6 flex items-center gap-2 sm:left-10 lg:left-12">
            {heroSlides.map((slide, index) => (
              <button
                key={slide.eyebrow}
                type="button"
                onClick={() => setActiveSlide(index)}
                className={`hero-dot ${index === activeSlide ? "hero-dot-active" : ""}`}
                aria-label={`Show slide ${index + 1}`}
              />
            ))}
            <span className="ml-3 text-[11px] uppercase tracking-[0.2em] text-hero-foreground/75 font-sans font-semibold">
              {String(activeSlide + 1).padStart(2, "0")} / {String(heroSlides.length).padStart(2, "0")}
            </span>
          </div>

          <a
            href="#story"
            className="absolute bottom-8 right-6 hidden items-center gap-3 text-[11px] uppercase tracking-[0.24em] text-hero-foreground/75 sm:flex lg:right-12 hover:text-white transition-colors"
            aria-label="Scroll to introduction story"
          >
            <span>Discover</span>
            <span className="grid h-9 w-9 place-items-center rounded-full border border-hero-foreground/30 bg-black/15 backdrop-blur-xs">
              <ArrowDown className="h-3.5 w-3.5" />
            </span>
          </a>
        </div>
      </section>

      {/* 2. Introductory Story Section (Editorial Two-Column) */}
      <section id="story" className="section-pad bg-background">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
            {/* Visual Side */}
            <Reveal className="relative">
              <div className="editorial-frame aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-xl border border-border">
                <img
                  src={exteriorImage}
                  alt="Negi Cottage set amongst apple orchards in Kupa"
                  className="h-full w-full object-cover object-center"
                />
              </div>

              {/* Overlapping entrance accent badge */}
              <div className="mt-4 sm:absolute sm:-bottom-8 sm:-right-8 sm:mt-0 sm:w-1/2 rounded-xl overflow-hidden shadow-2xl border-4 border-background bg-card">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={entranceImage}
                    alt="Handcrafted carved wooden entrance at Negi Cottage"
                    className="h-full w-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-3.5 bg-card">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-terracotta">
                    Kinnauri Craft
                  </p>
                  <p className="text-xs text-charcoal font-medium">Hand-carved wooden entrance</p>
                </div>
              </div>
            </Reveal>

            {/* Editorial Copy Side */}
            <Reveal className="lg:pl-6">
              <span className="eyebrow">Negi Cottage Sangla · Kinnaur, Himachal Pradesh</span>
              <h2 className="section-title mt-3">The Best Homestay in Sangla Valley for Apple Orchards & Mountain Peace.</h2>

              <p className="mt-6 text-base text-muted-foreground leading-relaxed sm:text-lg">
                Nestled peacefully in Kupa just 2 km before Sangla town, Negi Cottage Sangla is widely cherished as one of the best homestays in Sangla Valley. A traditional wooden cottage in Kinnaur Himachal Pradesh surrounded by private apple orchards and unobstructed snow-capped Himalayan peaks.
              </p>
              <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                Run by Mr. Ajit Negi and his family, this is not an impersonal commercial hotel, but a warm, authentic homestay in Sangla Valley where you wake to birdsong, breathe in pure pine air, and enjoy home-cooked Himachali meals prepared with organic garden vegetables.
              </p>

              {/* Verified Highlight Metrics Row */}
              <div className="mt-10 grid grid-cols-3 border-y border-border py-6">
                <div>
                  <strong className="stat">4.6</strong>
                  <span className="stat-label">
                    <Star className="h-3 w-3 fill-current text-terracotta" /> Google Rating
                  </span>
                </div>
                <div className="border-x border-border px-4 sm:px-6">
                  <strong className="stat">279</strong>
                  <span className="stat-label">Verified Reviews</span>
                </div>
                <div className="pl-4 sm:pl-6">
                  <strong className="stat">₹1,500</strong>
                  <span className="stat-label">From / Night</span>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a href={whatsappUrl} target="_blank" rel="noreferrer" className="button-forest">
                  <WhatsAppIcon className="h-4 w-4 text-terracotta" />
                  <span>Enquire on WhatsApp</span>
                </a>
                <Link to="/experience" className="button-outline-forest">
                  Discover the Experience
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3. Signature Experiences (Asymmetric Editorial Layout) */}
      <section id="experiences" className="section-pad bg-soft-sand/70">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-12">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-14 border-b border-border/80 pb-8">
            <div>
              <p className="eyebrow">Signature Experiences</p>
              <h2 className="section-title mt-2">Days shaped by nature and warmth.</h2>
            </div>
            <p className="max-w-md text-sm text-muted-foreground leading-relaxed">
              Every moment here reflects authentic Kinnauri mountain life—unhurried, peaceful, and surrounded by alpine beauty.
            </p>
          </div>

          {/* Asymmetric Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
            {/* Feature Card 1: Apple Orchard Walks (Spans 7 cols) */}
            <div className="group md:col-span-7 flex flex-col justify-between rounded-2xl border border-border bg-card overflow-hidden shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
              <div className="aspect-[16/10] overflow-hidden bg-muted">
                <img
                  src={orchardImage}
                  alt="Apple orchard walks around Negi Cottage"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-7">
                <span className="text-[11px] font-bold uppercase tracking-wider text-terracotta">
                  Nature & Harvest
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-semibold text-charcoal mt-1.5">
                  Apple Orchard Walks
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Step straight from your room into heritage apple groves. In spring, white blossoms fill the air; in autumn, trees hang heavy with world-famous sweet Kinnauri apples.
                </p>
              </div>
            </div>

            {/* Feature Card 2: Kinner Kailash Views (Spans 5 cols) */}
            <div className="group md:col-span-5 flex flex-col justify-between rounded-2xl border border-border bg-card overflow-hidden shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={mountainImage}
                  alt="Kinner Kailash mountain views from Negi Cottage"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-7">
                <span className="text-[11px] font-bold uppercase tracking-wider text-terracotta">
                  Sacred Peaks
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-semibold text-charcoal mt-1.5">
                  Kinner Kailash Views
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Watch early morning sunlight crown the holy snow peaks directly across the valley from our open rooftop terrace.
                </p>
              </div>
            </div>

            {/* Feature Card 3: Evening Bonfires (Spans 4 cols) */}
            <div className="group md:col-span-4 flex flex-col justify-between rounded-2xl border border-border bg-card overflow-hidden shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={bornfireImage}
                  alt="Evening campfire and bonfire at Negi Cottage"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <span className="text-[11px] font-bold uppercase tracking-wider text-terracotta">
                  Evening Magic
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-semibold text-charcoal mt-1">
                  Evening Bonfires
                </h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  Gather under crisp starlit skies around crackling firewood with warm cups of chai and mountain stories.
                </p>
              </div>
            </div>

            {/* Feature Card 4: Homemade Himachali Cuisine (Spans 4 cols) */}
            <div className="group md:col-span-4 flex flex-col justify-between rounded-2xl border border-border bg-card overflow-hidden shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={diningImage}
                  alt="Wood-panelled dining room at Negi Cottage"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <span className="text-[11px] font-bold uppercase tracking-wider text-terracotta">
                  Homestyle Kitchen
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-semibold text-charcoal mt-1">
                  Himachali Dining
                </h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  Fresh, comforting meals prepared on the spot using garden-fresh vegetables and regional spices. Jain food available upon request.
                </p>
              </div>
            </div>

            {/* Feature Card 5: Family & Group Accommodation (Spans 4 cols) */}
            <div className="group md:col-span-4 flex flex-col justify-between rounded-2xl border border-border bg-card overflow-hidden shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={familyRoomImage}
                  alt="Grand Family Suite at Negi Cottage"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <span className="text-[11px] font-bold uppercase tracking-wider text-terracotta">
                  Spacious Suites
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-semibold text-charcoal mt-1">
                  Family Accommodation
                </h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  Generously sized rooms with multiple large beds, clean attached washrooms, and dual-aspect mountain views.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Accommodation Showcase (Spacious & Refined) */}
      <section id="stay" className="section-pad bg-background">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-12">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-16 border-b border-border pb-8">
            <div>
              <p className="eyebrow">Accommodation</p>
              <h2 className="section-title mt-2">Rest, with an unobstructed view.</h2>
            </div>
            <Link to="/stay" className="button-forest shrink-0 text-xs">
              View All Room Details & Amenities &rarr;
            </Link>
          </div>

          {/* 3 Verified Room Categories */}
          <div className="space-y-12">
            {[
              {
                title: "Balcony Mountain Room",
                tag: "Most Popular",
                price: "From ₹1,800 / night",
                image: balconyRoom,
                desc: "Bright, morning-facing bedroom featuring direct access to a private wooden veranda looking out across the apple orchards and snow-clad valley.",
                amenities: [
                  "Private wooden balcony with mountain view",
                  "Attached clean washroom with 24/7 hot water",
                  "Warm Himalayan woollen quilts & blankets",
                  "Morning tea served to the room",
                ],
              },
              {
                title: "Grand Family Suite",
                tag: "Spacious Group Comfort",
                price: "From ₹2,500 / night",
                image: familyRoomImage,
                desc: "Specially designed for parents traveling with children or small trekking groups. Features two large beds, wide dual-aspect windows, and ample luggage space.",
                amenities: [
                  "Accommodates up to 4–5 guests in comfort",
                  "Ensuite bathroom with high-capacity geyser",
                  "Dual-side views: orchard & snowy mountains",
                  "Peaceful, child-friendly homestay setting",
                ],
              },
              {
                title: "Classic Double Room",
                tag: "Cozy Mountain Rest",
                price: "From ₹1,500 / night",
                image: roomImage,
                desc: "Traditional pine-trimmed double bedroom celebrating the rustic simplicity and comfort of an authentic Himalayan homestay. Peaceful and warm through chill mountain nights.",
                amenities: [
                  "Comfortable double spring bed with fresh linen",
                  "Attached hygienic washroom with geyser",
                  "Heated blankets & electric kettle on request",
                  "Quick access to garden and dining hall",
                ],
              },
            ].map((room, idx) => (
              <div
                key={room.title}
                className={`grid gap-8 lg:grid-cols-12 items-center rounded-3xl border border-border/80 bg-card p-6 sm:p-10 shadow-xs transition-all hover:shadow-md ${
                  idx % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Image side (7 cols) */}
                <div
                  className={`lg:col-span-7 overflow-hidden rounded-2xl bg-muted aspect-[16/10] ${
                    idx % 2 === 1 ? "lg:col-start-6" : ""
                  }`}
                >
                  <img
                    src={room.image}
                    alt={room.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>

                {/* Text side (5 cols) */}
                <div className={`lg:col-span-5 ${idx % 2 === 1 ? "lg:col-start-1" : ""}`}>
                  <div className="flex items-center gap-2.5">
                    <span className="rounded-full bg-forest px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-terracotta">
                      {room.tag}
                    </span>
                    <span className="text-xs font-semibold text-terracotta font-sans">
                      {room.price}
                    </span>
                  </div>

                  <h3 className="font-display text-3xl sm:text-4xl font-bold text-charcoal mt-3">
                    {room.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {room.desc}
                  </p>

                  <ul className="mt-6 space-y-2 border-t border-border pt-4">
                    {room.amenities.map((am) => (
                      <li key={am} className="flex items-center gap-2.5 text-xs text-charcoal font-medium">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-terracotta" />
                        <span>{am}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="button-forest text-xs py-3 px-6"
                    >
                      <WhatsAppIcon className="h-4 w-4 text-terracotta" />
                      <span>Book on WhatsApp</span>
                    </a>
                    <Link to="/stay" className="button-outline-forest text-xs py-3 px-5">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Dining & Local Flavours */}
      <section id="dining" className="section-pad bg-soft-sand/80">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Left Copy */}
            <div>
              <p className="eyebrow">From the Homestay Kitchen</p>
              <h2 className="section-title mt-2">Authentic Himachali Flavours.</h2>
              <p className="mt-5 text-base text-muted-foreground leading-relaxed sm:text-lg">
                Gather in our warm, wood-lined dining room for comforting, homemade mountain meals. We cook on the spot using clean spring water and fresh vegetables harvested right from our adjacent garden.
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-xl border border-border bg-card p-4">
                  <Utensils className="h-5 w-5 text-terracotta" />
                  <h4 className="font-display text-lg font-bold text-charcoal mt-2">
                    Home-Cooked Thalis
                  </h4>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                    Local dal, seasonal organic sabzi, fresh rotis, and mountain chutneys.
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-card p-4">
                  <Sparkles className="h-5 w-5 text-terracotta" />
                  <h4 className="font-display text-lg font-bold text-charcoal mt-2">
                    Jain Food Available
                  </h4>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                    Custom pure vegetarian & Jain dietary requirements catered upon advance request.
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <Link to="/dining" className="button-forest text-xs">
                  Read Dining Details & Food Menu &rarr;
                </Link>
              </div>
            </div>

            {/* Right Images */}
            <div className="grid grid-cols-2 gap-4">
              <div className="editorial-frame aspect-[3/4] rounded-2xl overflow-hidden shadow-md">
                <img
                  src={diningImage}
                  alt="Wood panelled dining hall at Negi Cottage"
                  className="h-full w-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="editorial-frame aspect-[3/4] rounded-2xl overflow-hidden shadow-md mt-8">
                <img
                  src={dinnerarea1Image}
                  alt="Cozy traditional dining lounge and seating"
                  className="h-full w-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Curated Visual Gallery */}
      <section id="gallery" className="section-pad bg-background">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="eyebrow">Kinnaur in Frames · Authentic Homestay</p>
            <h2 className="section-title mt-2">Every Corner, Captured.</h2>
            <p className="mt-3 text-base text-muted-foreground">
              Explore authentic photographs of our rooms, bathrooms, snowy balconies, apple orchards, and peaceful mountain moments.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featuredPreviewPhotos.map((photo, index) => (
              <figure
                key={photo.title}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-xs transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl"
              >
                <button
                  type="button"
                  onClick={() => setLightboxIndex(index)}
                  className="block h-full w-full text-left cursor-pointer"
                  aria-label={`Open ${photo.title} in lightbox`}
                >
                  <div className="aspect-[4/3] overflow-hidden bg-muted">
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-terracotta">
                      {photo.category}
                    </span>
                    <h3 className="font-display text-lg font-semibold text-charcoal mt-0.5">
                      {photo.title}
                    </h3>
                  </div>
                </button>
              </figure>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/gallery"
              className="button-forest inline-flex items-center gap-2 px-8 py-3.5 text-xs font-bold tracking-wider"
            >
              Browse Complete Photo Gallery &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Guest Reviews & Trust */}
      <section id="reviews" className="section-pad bg-soft-sand/70" aria-labelledby="reviews-title">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-12">
          <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-end">
            <div>
              <p className="eyebrow">Verified Guest Feedback</p>
              <h2 id="reviews-title" className="section-title mt-2">
                The kind of stay guests remember.
              </h2>
            </div>
            <div className="md:justify-self-end md:max-w-md">
              <div
                className="flex items-center gap-1.5 text-terracotta"
                aria-label="4.6 out of 5 stars"
              >
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-4 w-4 fill-current" />
                ))}
                <span className="ml-2 text-xs font-bold uppercase tracking-[0.14em] text-charcoal">
                  4.6 · 279 Google Reviews
                </span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Reflections from travelers who came for the mountains and experienced the slow magic of Negi Cottage.
              </p>
            </div>
          </div>

          {/* Google Topic Pills */}
          <div className="mt-8 flex flex-wrap items-center gap-2 border-y border-border py-4">
            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground mr-2">
              Popular Mentions:
            </span>
            {[
              "Apple Orchards (28)",
              "Mountain View (10)",
              "Cozy Rooms (7)",
              "Homely Atmosphere (6)",
              "Cottage (5)",
              "Clean Toilet (4)",
              "Humble Host (4)",
              "Bonfire (3)",
            ].map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-card border border-border/80 px-3 py-1 text-xs font-medium text-charcoal shadow-xs"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* 3 Real Review Excerpts */}
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                quote:
                  "Awesome experience received by our group of 9 senior citizens! Checked in late at night, the owner helped carry luggage from the road. Welcomed with hot tea & veg pakoras followed by delicious dinner. Greeted next morning with snow-capped Kinnar-Kailash range and golden apple orchards. Strongly recommend!",
                name: "Anup Chaudhuri",
                detail: "Local Guide · 26 reviews · October 2026",
                highlight: "Senior Citizens Group",
              },
              {
                quote:
                  "One of the most scenic stays of our Kinnaur trip. Family room with two large beds and two bathrooms, exceptionally neat and clean. Views of apple orchards on one side and snow mountains on the other. Open rooftop terrace offers a 360-degree view. Friendly hosts!",
                name: "Rupesh Kumar",
                detail: "Local Guide · 112 reviews · Family Vacation",
                highlight: "Family Suite with 2 Bathrooms",
              },
              {
                quote:
                  "One of my dreams came to life smelling apple fragrance everywhere. Surrounded by apple and pear trees—just like heaven. 10 out of 10 for cleanliness and hygiene. Clean western washroom, delicious food, and super humble staff.",
                name: "Avinash Devadiga",
                detail: "Local Guide · 23 reviews · Family Stay",
                highlight: "10/10 Cleanliness & Food",
              },
            ].map((r) => (
              <div
                key={r.name}
                className="group flex flex-col justify-between bg-card border border-border p-7 sm:p-8 rounded-2xl shadow-xs hover:border-terracotta/40 transition-all duration-300 hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-1 text-terracotta" aria-label="5 out of 5 stars">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-3.5 w-3.5 fill-current" />
                      ))}
                    </div>
                    <span className="rounded-full bg-soft-sand px-2.5 py-0.5 text-[10px] font-semibold text-charcoal">
                      {r.highlight}
                    </span>
                  </div>
                  <blockquote className="mt-5 text-sm leading-relaxed text-charcoal/90 italic">
                    “{r.quote}”
                  </blockquote>
                </div>
                <div className="mt-6 border-t border-border pt-4">
                  <p className="text-sm font-bold text-charcoal">{r.name}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">{r.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/reviews"
              className="button-forest inline-flex items-center gap-2 px-8 py-3.5 text-xs font-bold tracking-wider"
            >
              Read All 279+ Google Reviews with Topics & Filters &rarr;
            </Link>
          </div>
        </div>
      </section>


      {/* 7. Frequently Asked Questions (SEO & Traveler Information) */}
      <section id="faqs" className="section-pad bg-background border-t border-border" aria-labelledby="faqs-title">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="eyebrow">Clear Guest Information · Negi Cottage</span>
            <h2 id="faqs-title" className="mt-2 font-display text-4xl sm:text-5xl lg:text-6xl text-foreground font-normal">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              Everything you need to know about planning your stay at Negi Cottage in Kupa, Sangla Valley — check-in timings, meals, road accessibility, and seasonal tips.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {homeFaqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={faq.q}
                  className="rounded-2xl border border-border bg-card transition-all duration-300 overflow-hidden shadow-xs hover:border-gold/50"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left transition-colors hover:bg-muted/40"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-lg sm:text-xl font-medium text-foreground pr-2">
                      {faq.q}
                    </span>
                    <span
                      className={`flex items-center justify-center h-8 w-8 rounded-full border border-border bg-muted/50 text-foreground shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180 bg-forest text-gold border-forest" : ""
                      }`}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-6 text-sm sm:text-base text-muted-foreground leading-relaxed border-t border-border/40 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <p className="text-xs sm:text-sm text-muted-foreground">
              Have a specific requirement or planning a group trip? Ask Mr. Negi directly on WhatsApp:
            </p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="button-forest text-xs font-bold"
              >
                <WhatsAppIcon className="h-4 w-4 text-terracotta" />
                <span>Chat with Host on WhatsApp</span>
              </a>
              <a href={phoneUrl} className="button-outline-forest text-xs font-bold">
                <Phone className="h-3.5 w-3.5 text-gold" />
                <span>Call +91 78072 15761</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Location Section */}
      <section id="location" className="bg-forest text-forest-foreground">
        <div className="grid lg:grid-cols-[0.72fr_1.28fr]">
          <div className="flex flex-col justify-center px-6 py-16 md:px-12 lg:px-16 lg:py-24">
            <p className="eyebrow text-terracotta">Location & Directions</p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl text-forest-foreground font-normal">
              In the heart of Kupa.
            </h2>
            <div className="mt-8 flex gap-4">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-terracotta" />
              <address className="not-italic leading-relaxed text-forest-foreground/80 text-sm">
                <strong className="block text-forest-foreground font-display text-xl mb-1">
                  Negi Cottage
                </strong>
                Kuppa Bus Stand, Kupa
                <br />
                Himachal Pradesh 172106, India
              </address>
            </div>

            <p className="mt-5 text-xs text-forest-foreground/70 leading-relaxed max-w-sm">
              Conveniently located just 2.5 km before Sangla town, making it easy to visit Kamru Fort, Chitkul, and Rakchham.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href={directionsUrl} target="_blank" rel="noreferrer" className="button-gold text-xs py-3 px-6">
                Get Directions <ExternalLink className="h-4 w-4" />
              </a>
              <a href={phoneUrl} className="button-outline-light text-xs py-3 px-6">
                <Phone className="h-4 w-4" /> Call Host
              </a>
            </div>
          </div>

          <div className="min-h-[420px] bg-muted lg:min-h-[600px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.2618068319944!2d78.24440711086206!3d31.43445865127477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390614d8c0b2125d%3A0x55fdf9e8aad17a56!2sNegi%20Cottage!5e0!3m2!1sen!2sin!4v1789809051469!5m2!1sen!2sin"
              width="600"
              height="450"
              className="h-full min-h-[420px] w-full border-0 lg:min-h-[600px]"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Negi Cottage location on Google Maps"
            />
          </div>
        </div>
      </section>

      {/* 9. Premium Final Booking CTA */}
      <section className="relative overflow-hidden bg-forest text-forest-foreground py-24 sm:py-32">
        <img
          src={mountainImage}
          alt="Snow-capped Himalayan peaks of Sangla Valley"
          className="absolute inset-0 h-full w-full object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/80 to-forest/90" />

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center md:px-10">
          <p className="eyebrow text-terracotta">Begin Your Journey</p>
          <h2 className="font-display text-4xl sm:text-6xl font-normal text-white mt-3 leading-tight">
            Your Himalayan Escape Awaits.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base text-forest-foreground/80 leading-relaxed font-sans">
            Enquire about seasonal room availability, apple harvest experiences, and custom travel guidance for your journey across Kinnaur.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="button-gold text-xs py-3.5 px-8"
            >
              <WhatsAppIcon className="h-4 w-4" /> Book Your Stay
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="button-outline-light text-xs py-3.5 px-8"
            >
              Chat on WhatsApp
            </a>
          </div>
          <div className="mt-8">
            <a
              href={phoneUrl}
              className="text-xs font-semibold tracking-wider text-forest-foreground/80 hover:text-white underline decoration-terracotta underline-offset-8"
            >
              Direct Host Line: +91 78072 15761
            </a>
          </div>
        </div>
      </section>

      {/* 10. Footer */}
      <footer className="bg-forest px-6 py-14 text-forest-foreground md:px-12 lg:px-16 border-t border-forest-border">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-12 border-b border-forest-border pb-12 sm:grid-cols-2 lg:grid-cols-4">
            <div className="lg:col-span-2">
              <span className="font-display text-3xl sm:text-4xl uppercase tracking-[0.14em] text-forest-foreground">
                Negi Cottage
              </span>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.24em] text-terracotta">
                Boutique Himalayan Homestay · Kupa
              </p>
              <p className="mt-4 max-w-md text-sm text-forest-foreground/75 leading-relaxed">
                Surrounded by heritage apple orchards and snow-clad Kinner Kailash mountain horizons in Sangla Valley, Kinnaur, Himachal Pradesh.
              </p>

              <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-black/25 px-4 py-1.5 border border-white/10 text-xs">
                <Star className="h-3.5 w-3.5 fill-current text-terracotta" />
                <span className="font-semibold text-white">4.6 / 5 Rating</span>
                <span className="opacity-60">· 279 Verified Google Reviews</span>
              </div>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-terracotta mb-4">
                Explore
              </p>
              <div className="flex flex-col gap-2.5 text-xs tracking-wider text-forest-foreground/80">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.to}
                    className="hover:text-terracotta transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Travel Guides & Local Sightseeing */}
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-terracotta mb-4">
                Sangla Guides
              </p>
              <div className="flex flex-col gap-2.5 text-xs tracking-wider text-forest-foreground/80">
                <Link to="/rooms" className="hover:text-terracotta transition-colors">
                  Rooms & Suites
                </Link>
                <Link to="/things-to-do-in-sangla" className="hover:text-terracotta transition-colors">
                  Things to Do in Sangla
                </Link>
                <Link to="/travel-guide-to-sangla" className="hover:text-terracotta transition-colors">
                  Sangla Travel Guide
                </Link>
              </div>
            </div>

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
                    <WhatsAppIcon className="h-4 w-4" /> Message on WhatsApp &rarr;
                  </a>
                </div>
              </address>
            </div>
          </div>

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

      {/* Lightbox Modal */}
      {activeImage && lightboxIndex !== null && (
        <div
          className="lightbox fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            type="button"
            onClick={() => setLightboxIndex(null)}
            className="absolute right-5 top-5 z-20 grid h-11 w-11 place-items-center rounded-full bg-black/60 text-white hover:bg-black/80 transition"
            aria-label="Close Lightbox"
          >
            <X className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              moveLightbox(-1);
            }}
            className="absolute left-4 sm:left-8 z-20 grid h-12 w-12 place-items-center rounded-full bg-black/60 text-white hover:bg-black/90 transition hover:scale-110"
            aria-label="Previous Photo"
          >
            <ChevronLeft className="h-7 w-7" />
          </button>

          <div
            className="max-w-4xl text-center text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activeImage.src}
              alt={activeImage.title}
              className="max-h-[75vh] max-w-full rounded-2xl object-contain mx-auto shadow-2xl"
            />
            <div className="mt-4">
              <span className="text-[11px] font-bold uppercase tracking-widest text-terracotta">
                {activeImage.category}
              </span>
              <h3 className="font-display text-2xl font-bold mt-1">{activeImage.title}</h3>
              <p className="text-xs text-white/70 mt-1">{activeImage.alt}</p>
            </div>
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              moveLightbox(1);
            }}
            className="absolute right-4 sm:right-8 z-20 grid h-12 w-12 place-items-center rounded-full bg-black/60 text-white hover:bg-black/90 transition hover:scale-110"
            aria-label="Next Photo"
          >
            <ChevronRight className="h-7 w-7" />
          </button>
        </div>
      )}
    </main>
  );
}
