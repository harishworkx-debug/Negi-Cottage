import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
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
import roomImage from "@/assets/negi-cottage-room.png";
import orchardImage from "@/assets/negi-cottage-orchard.png";
import familyRoomImage from "@/assets/negi-cottage-family-room.png";
import mountainImage from "@/assets/negi-cottage-mountains.png";
import exteriorImage from "@/assets/negi-cottage-exterior.png";
import entranceImage from "@/assets/negi-cottage-entrance.png";
import sunriseImage from "@/assets/negi-retreat-sunrise.jpg";
import snowImage from "@/assets/snow-view.png";
import bornfireImage from "@/assets/bornfire.png";
import nightView1 from "@/assets/night-view1.png";
import balconyRoom from "@/assets/balcony-room.png";
import gardanImage from "@/assets/gardan.png";
import dinnerareaImage from "@/assets/dinnerarea.png";

const whatsappMessage = encodeURIComponent(
  "Hello, I would like to enquire about booking a stay at Negi Cottage, Kupa.",
);
const whatsappUrl = `https://wa.me/917807215761?text=${whatsappMessage}`;
const directionsUrl =
  "https://www.google.com/maps/dir/?api=1&destination=Negi+Cottage+Kupa+Himachal+Pradesh+172106";

const heroSlides = [
  {
    image: mountainImage,
    eyebrow: "Kupa · Sangla Valley · Himachal Pradesh",
    title: "Your Himalayan escape,\nframed by the mountains.",
    copy: "Wake up among apple orchards, slow down to the mountain rhythm, and make Negi Cottage your quiet sanctuary in Kinnaur.",
  },
  {
    image: sunriseImage,
    eyebrow: "Golden Hour · Kinner Kailash Peaks",
    title: "Awaken to light\nover the summits.",
    copy: "Watch the first amber rays of Himalayan sunrise illuminate the holy Kinner Kailash ridge directly across the valley.",
  },
  {
    image: snowImage,
    eyebrow: "Winter Fairy Tale · Pristine Snow",
    title: "Snow-covered roofs\nand quiet orchards.",
    copy: "Experience the magic of deep winter snowfall with steaming cups of chai and warm wood-panelled rooms.",
  },
  {
    image: orchardImage,
    eyebrow: "Orchard walks · Fresh valley breeze",
    title: "A slower rhythm\nstarts here.",
    copy: "Follow the apple orchard paths, breathe in cedar air, and let the Sangla Valley set the pace of your stay.",
  },
  {
    image: balconyImage,
    eyebrow: "Warm rooms · Local hospitality",
    title: "Come for the view.\nStay for the feeling.",
    copy: "Comfortable rooms, homemade Kinnauri flavours, and a genuine Himalayan welcome—just like a mountain home should feel.",
  },
];

const featuredPreviewPhotos = [
  {
    src: mountainImage,
    title: "Kinner Kailash Range",
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
  { label: "Experience", to: "/experience" },
  { label: "Dining", to: "/dining" },
  { label: "Gallery (36)", to: "/gallery" },
  { label: "Location", to: "/location" },
  { label: "Contact", to: "/contact" },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": ["Hotel", "LocalBusiness"],
  name: "Negi Cottage",
  description:
    "A premium boutique homestay in Kupa near Sangla Valley, surrounded by apple orchards with Himalayan and Kinner Kailash views.",
  telephone: "+91 78072 15761",
  priceRange: "₹1,500+",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Kuppa Bus Stand, Kupa",
    addressRegion: "Himachal Pradesh",
    postalCode: "172106",
    addressCountry: "IN",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.6",
    reviewCount: "275",
    bestRating: "5",
  },
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Negi Cottage Kupa | Premium Boutique Homestay near Sangla Valley" },
      {
        name: "description",
        content:
          "Stay at Negi Cottage, a boutique Himalayan homestay in Kupa near Sangla Valley. Apple orchards, Kinner Kailash views, evening bonfires, authentic dining, and rooms from around ₹1,500/night.",
      },
      { property: "og:title", content: "Negi Cottage — Your Himalayan Escape in Kupa" },
      {
        property: "og:description",
        content:
          "A peaceful Himalayan cottage stay among apple orchards near Sangla Valley, Himachal Pradesh. 36 real photos of rooms, dining, bonfires, and views.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Negi Cottage — Your Himalayan Escape in Kupa" },
      {
        name: "twitter:description",
        content: "A peaceful Himalayan cottage stay among apple orchards near Sangla Valley.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(structuredData) }],
  }),
  component: Index,
});

function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.52 3.48A11.86 11.86 0 0 0 12.07 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.15 1.6 5.95L.06 24l6.3-1.65a11.9 11.9 0 0 0 5.7 1.45h.01C18.63 23.8 24 18.46 24 11.9c0-3.18-1.24-6.17-3.48-8.42ZM12.07 21.8h-.01a9.88 9.88 0 0 1-5.04-1.38l-.36-.21-3.74.98 1-3.64-.24-.37a9.87 9.87 0 0 1-1.52-5.28c0-5.46 4.45-9.9 9.92-9.9a9.84 9.84 0 0 1 7.01 2.9A9.83 9.83 0 0 1 22 11.9c0 5.46-4.46 9.9-9.93 9.9Zm5.44-7.42c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48a9.02 9.02 0 0 1-1.66-2.06c-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.27.5 1.7.63.72.23 1.36.2 1.88.12.57-.08 1.76-.72 2-1.42.25-.7.25-1.31.18-1.44-.08-.12-.28-.2-.58-.34Z" />
    </svg>
  );
}

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`reveal ${className}`}>{children}</div>;
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);

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
      6000,
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

  const activeImage = lightboxIndex === null ? null : (featuredPreviewPhotos.at(lightboxIndex) ?? null);

  return (
    <main id="home" className="overflow-hidden bg-background text-foreground">
      {/* Top Navbar */}
      <header className="absolute inset-x-0 top-0 z-40 border-b border-hero-foreground/20">
        <div className="mx-auto grid h-20 max-w-[1500px] grid-cols-[minmax(0,1fr)_auto] items-center gap-5 px-5 lg:h-24 lg:grid-cols-[auto_1fr_auto] lg:px-10">
          <Link to="/" className="min-w-0 text-hero-foreground" aria-label="Negi Cottage home">
            <span className="block font-display text-xl font-medium uppercase tracking-[0.16em] sm:text-2xl">
              Negi Cottage
            </span>
            <span className="mt-0.5 hidden text-[10px] uppercase tracking-[0.3em] text-hero-foreground/70 sm:block">
              Kupa · Sangla Valley · HP
            </span>
          </Link>
          <nav
            className="hidden items-center justify-center gap-6 lg:flex"
            aria-label="Main navigation"
          >
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="nav-link text-xs uppercase tracking-[0.13em] text-hero-foreground/90 transition hover:text-gold"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="button-gold hidden lg:inline-flex"
          >
            <WhatsAppIcon className="h-4 w-4" /> Book on WhatsApp
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="grid h-11 w-11 place-items-center text-hero-foreground lg:hidden"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {menuOpen && (
          <nav
            className="mobile-menu border-t border-hero-foreground/15 px-5 py-6 lg:hidden"
            aria-label="Mobile navigation"
          >
            <div className="grid gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  onClick={() => setMenuOpen(false)}
                  className="py-2.5 font-display text-2xl text-hero-foreground"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="button-gold mt-4 w-full justify-center"
              >
                <WhatsAppIcon className="h-4 w-4" /> Book on WhatsApp
              </a>
            </div>
          </nav>
        )}
      </header>

      {/* Cinematic Hero */}
      <section className="hero-section relative min-h-[760px] h-[100svh] text-hero-foreground">
        {heroSlides.map((slide, index) => (
          <img
            key={slide.image}
            src={slide.image}
            alt="Himalayan landscape around Negi Cottage"
            className={`hero-image absolute inset-0 h-full w-full object-cover ${index === activeSlide ? "hero-slide-active" : "hero-slide-hidden"}`}
          />
        ))}
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 mx-auto flex h-full max-w-[1500px] flex-col justify-end px-5 pb-16 pt-32 sm:px-8 sm:pb-20 lg:px-10 lg:pb-24">
          <div className="max-w-4xl animate-hero-in">
            <p
              className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-hero-foreground/85"
              key={`eyebrow-${activeSlide}`}
            >
              <span className="h-px w-9 bg-gold" /> {heroSlides[activeSlide].eyebrow}
            </p>
            <h1
              className="max-w-4xl whitespace-pre-line font-display text-5xl font-normal leading-[0.98] sm:text-7xl lg:text-[6.4rem]"
              key={`title-${activeSlide}`}
            >
              {heroSlides[activeSlide].title}
            </h1>
            <p
              className="mt-7 max-w-2xl text-base leading-7 text-hero-foreground/85 sm:text-lg"
              key={`copy-${activeSlide}`}
            >
              {heroSlides[activeSlide].copy}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="button-gold justify-center sm:justify-start"
              >
                Book Your Stay <ArrowRight className="h-4 w-4" />
              </a>
              <Link to="/stay" className="button-glass justify-center sm:justify-start">
                Explore Rooms & Suites
              </Link>
              <Link to="/gallery" className="button-glass justify-center sm:justify-start">
                View 36 Photos
              </Link>
            </div>
          </div>
          <div
            className="absolute bottom-8 left-5 flex items-center gap-2 sm:left-8 lg:left-10"
            aria-label="Choose hero slide"
          >
            {heroSlides.map((slide, index) => (
              <button
                key={slide.eyebrow}
                type="button"
                onClick={() => setActiveSlide(index)}
                className={`hero-dot ${index === activeSlide ? "hero-dot-active" : ""}`}
                aria-label={`Show slide ${index + 1}`}
              />
            ))}
            <span className="ml-3 text-[10px] uppercase tracking-[0.25em] text-hero-foreground/65">
              {String(activeSlide + 1).padStart(2, "0")} /{" "}
              {String(heroSlides.length).padStart(2, "0")}
            </span>
          </div>
          <a
            href="#welcome"
            className="absolute bottom-7 right-6 hidden items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-hero-foreground/70 sm:flex lg:right-10"
            aria-label="Scroll to introduction"
          >
            Discover{" "}
            <span className="grid h-10 w-10 place-items-center rounded-full border border-hero-foreground/40">
              <ArrowDown className="h-4 w-4" />
            </span>
          </a>
        </div>
      </section>

      {/* Introduction Section */}
      <section id="welcome" className="section-pad bg-background">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 md:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20">
          <Reveal>
            <p className="eyebrow text-gold-dark">A quieter side of the Himalayas</p>
            <h2 className="section-title mt-5">Where the apple orchard meets the peaks.</h2>
          </Reveal>
          <Reveal className="lg:pt-14">
            <p className="max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl sm:leading-9">
              Nestled beside Kuppa Bus Stand in Sangla Valley, Negi Cottage is surrounded by blooming apple orchards and dramatic Kinner Kailash mountain horizons—a peaceful, comfortable sanctuary for travelers exploring Kinnaur.
            </p>
            <div className="mt-10 grid grid-cols-3 border-y border-border py-7">
              <div>
                <strong className="stat">4.6</strong>
                <span className="stat-label">
                  <Star className="h-3 w-3 fill-current text-gold" /> guest rating
                </span>
              </div>
              <div className="border-x border-border px-4 sm:px-8">
                <strong className="stat">275+</strong>
                <span className="stat-label">verified reviews</span>
              </div>
              <div className="pl-4 sm:pl-8">
                <strong className="stat">₹1,500</strong>
                <span className="stat-label">approx. from / night</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Visual Highlights with Real Images */}
      <section className="section-pad bg-forest text-forest-foreground">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-14">
            <div>
              <p className="eyebrow text-gold">The Negi Cottage Highlights</p>
              <h2 className="mt-2 font-display text-4xl sm:text-5xl text-forest-foreground">
                Crafted for genuine mountain living
              </h2>
            </div>
            <p className="max-w-md text-sm text-forest-foreground/75 leading-relaxed">
              Every detail is shaped by real Kinnauri hospitality, breathtaking mountain views, and the comforting quiet of the orchards.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Apple Orchard Setting",
                desc: "Walk amidst heritage apple groves right outside your door, fragrant with spring blossoms and autumn fruit.",
                image: orchardImage,
                tag: "Nature & Walks",
              },
              {
                title: "Kinner Kailash Views",
                desc: "Panoramic vantage points directly overlooking snow-capped peaks and changing mountain weather.",
                image: mountainImage,
                tag: "Mountain Vista",
              },
              {
                title: "Comfortable Cottage Rooms",
                desc: "Handcrafted wooden rooms, heated blankets, and sparkling clean bathrooms with 24/7 hot water.",
                image: roomImage,
                tag: "Rooms & Rest",
              },
              {
                title: "Evening Bonfire & Campfire",
                desc: "Gather under starlit Himalayan skies around a crackling wood fire with hot cups of local spiced tea.",
                image: bornfireImage,
                tag: "Stargazing",
              },
              {
                title: "Authentic Himachali Cuisine",
                desc: "Homemade Kinnauri thalis, steaming parathas, and local dishes prepared with garden-fresh ingredients.",
                image: dinnerareaImage,
                tag: "Homestyle Food",
              },
              {
                title: "Family & Group Friendly",
                desc: "Spacious multi-bed suites, wide garden lawns, and warm personal hospitality that makes everyone feel at home.",
                image: familyRoomImage,
                tag: "Family Comfort",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-black/20 shadow-md transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/50"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gold">
                    {item.tag}
                  </span>
                  <h3 className="mt-2 font-display text-2xl font-bold text-forest-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-forest-foreground/75">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stay Section Preview */}
      <section id="stay" className="section-pad bg-background">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <p className="eyebrow text-gold-dark">Accommodation</p>
              <h2 className="section-title mt-2">Rest, with an unobstructed view.</h2>
              <p className="mt-3 max-w-xl text-base text-muted-foreground">
                Warm wood-trimmed rooms, valley-facing verandas, and peaceful suites made for quiet mountain nights.
              </p>
            </div>
            <Link to="/stay" className="button-forest shrink-0">
              View All Room Options &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={balconyRoom}
                  alt="Balcony Mountain Room"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-gold-dark">From ₹1,800 / night</span>
                <h3 className="mt-1 font-display text-2xl font-bold">Balcony Mountain Room</h3>
                <p className="mt-1.5 text-xs text-muted-foreground">Step directly out onto the wooden veranda overlooking Kupa valley.</p>
              </div>
            </div>

            <div className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={familyRoomImage}
                  alt="Grand Family Suite"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-gold-dark">From ₹2,500 / night</span>
                <h3 className="mt-1 font-display text-2xl font-bold">Grand Family Suite</h3>
                <p className="mt-1.5 text-xs text-muted-foreground">Spacious multi-bed quarters designed for comfortable family time.</p>
              </div>
            </div>

            <div className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={roomImage}
                  alt="Classic Double Room"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-gold-dark">From ₹1,500 / night</span>
                <h3 className="mt-1 font-display text-2xl font-bold">Classic Double Room</h3>
                <p className="mt-1.5 text-xs text-muted-foreground">Cozy pine finishes, heated blankets, and quiet mountain rest.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curated Gallery Showcase (36 Photos Hook) */}
      <section id="gallery" className="section-pad bg-gold-light">
        <div className="mx-auto max-w-[1500px] px-5 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="eyebrow text-gold-dark">Real Visual Journey</p>
            <h2 className="section-title mt-2">Negi Cottage in Frames</h2>
            <p className="mt-3 text-base text-muted-foreground">
              We have uploaded 36 authentic photographs showing every angle of our homestay—rooms, bathrooms, dining halls, snowfalls, bonfires, and apple orchards.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featuredPreviewPhotos.map((photo, index) => (
              <figure
                key={photo.title}
                className="group relative overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl"
              >
                <button
                  type="button"
                  onClick={() => setLightboxIndex(index)}
                  className="block h-full w-full text-left cursor-pointer"
                  aria-label={`Open ${photo.title}`}
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
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gold-dark">
                      {photo.category}
                    </span>
                    <h3 className="font-display text-lg font-semibold text-foreground mt-0.5">
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
              className="button-forest inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold tracking-wider shadow-lg"
            >
              Browse Complete 36-Photo Gallery with Descriptions & Lightbox &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Guest Reviews */}
      <section id="reviews" className="section-pad bg-background" aria-labelledby="reviews-title">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-end">
            <div>
              <p className="eyebrow text-gold-dark">Guest notes</p>
              <h2 id="reviews-title" className="section-title mt-5">
                The kind of stay guests remember.
              </h2>
            </div>
            <div className="md:justify-self-end md:max-w-md">
              <div
                className="flex items-center gap-1 text-gold-dark"
                aria-label="4.6 out of 5 stars"
              >
                {[0, 1, 2, 3, 4].map((star) => (
                  <Star key={star} className="h-4 w-4 fill-current" />
                ))}
                <span className="ml-2 text-xs font-bold uppercase tracking-[0.12em]">
                  4.6 · 275+ verified guest reviews
                </span>
              </div>
              <p className="mt-4 leading-7 text-muted-foreground">
                Real reflections from travelers who came for the mountains and experienced the slow magic of Negi Cottage.
              </p>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {[
              [
                "A peaceful stay with the most beautiful morning light. The orchard walks, cozy rooms, and warm hospitality made it hard to leave.",
                "Ananya M.",
                "Mumbai · weekend escape",
              ],
              [
                "The rooms were warm and spotlessly clean, the food felt homemade, and the evening bonfire with Kinner Kailash views is unforgettable.",
                "Rohit S.",
                "Delhi · family holiday",
              ],
              [
                "Exactly the slow mountain break we were looking for—quiet, welcoming, great hot water, and close to Sangla and Chitkul.",
                "Meera & Arjun",
                "Bengaluru · valley road trip",
              ],
            ].map(([quote, name, detail]) => (
              <Reveal key={name} className="review-card group bg-card border border-border p-7 sm:p-9 rounded-2xl">
                <div className="flex gap-1 text-gold-dark" aria-label="5 out of 5 stars">
                  {[0, 1, 2, 3, 4].map((star) => (
                    <Star key={star} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-8 font-display text-2xl leading-tight">
                  “{quote}”
                </blockquote>
                <div className="mt-8 border-t border-border pt-5">
                  <p className="text-sm font-bold">{name}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.12em] text-muted-foreground">
                    {detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="bg-forest text-forest-foreground">
        <div className="grid lg:grid-cols-[0.72fr_1.28fr]">
          <Reveal className="flex flex-col justify-center px-5 py-16 md:px-12 lg:px-[max(3rem,calc((100vw-1280px)/2))] lg:py-24">
            <p className="eyebrow text-gold">Find your way</p>
            <h2 className="mt-5 font-display text-5xl sm:text-6xl">In the heart of Kupa.</h2>
            <div className="mt-9 flex gap-4">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-gold" />
              <address className="not-italic leading-7 text-forest-foreground/75">
                <strong className="block text-forest-foreground">Negi Cottage</strong>Kuppa Bus Stand, Kupa
                <br />
                Himachal Pradesh 172106
              </address>
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href={directionsUrl} target="_blank" rel="noreferrer" className="button-gold">
                Get Directions <ExternalLink className="h-4 w-4" />
              </a>
              <a href="tel:+917807215761" className="button-outline-light">
                <Phone className="h-4 w-4" /> Call Host
              </a>
            </div>
          </Reveal>
          <div className="min-h-[480px] bg-muted lg:min-h-[650px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.2618068319944!2d78.24440711086206!3d31.43445865127477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390614d8c0b2125d%3A0x55fdf9e8aad17a56!2sNegi%20Cottage!5e0!3m2!1sen!2sin!4v1789809051469!5m2!1sen!2sin"
              width="600"
              height="450"
              className="h-full min-h-[480px] w-full border-0 grayscale-[20%] lg:min-h-[650px]"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Negi Cottage location on Google Maps"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative overflow-hidden bg-gold-light section-pad">
        <Mountain
          className="absolute -bottom-20 -right-16 h-80 w-80 text-gold/15 pointer-events-none"
          strokeWidth={0.7}
        />
        <div className="relative mx-auto max-w-5xl px-5 text-center md:px-8">
          <Reveal>
            <p className="eyebrow text-gold-dark">Come stay awhile</p>
            <h2 className="mx-auto mt-5 max-w-4xl font-display text-5xl leading-[1.02] sm:text-7xl text-foreground">
              Your mountain escape begins with a message.
            </h2>
            <p className="mx-auto mt-7 max-w-xl text-muted-foreground text-base leading-relaxed">
              For availability, current apple season rates, bonfire arrangements, and booking enquiries, message Negi Cottage directly on WhatsApp.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="button-forest mx-auto mt-10 justify-center text-sm font-semibold py-4 px-8"
            >
              <WhatsAppIcon /> Message on WhatsApp
            </a>
            <a
              href="tel:+917807215761"
              className="mt-5 inline-block text-sm font-semibold tracking-[0.08em] text-foreground underline decoration-gold underline-offset-8"
            >
              +91 78072 15761
            </a>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-forest px-5 py-10 text-forest-foreground md:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 border-b border-forest-border pb-9 sm:grid-cols-[1fr_auto] sm:items-end">
          <div>
            <p className="font-display text-3xl uppercase tracking-[0.12em]">Negi Cottage</p>
            <p className="mt-2 text-sm text-forest-foreground/55">
              Kupa · Sangla Valley · Himachal Pradesh 172106
            </p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs uppercase tracking-[0.12em] text-forest-foreground/70">
            {navItems.map((item) => (
              <Link key={item.label} to={item.to} className="hover:text-gold transition-colors">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="mx-auto mt-6 flex max-w-7xl flex-col gap-2 text-xs text-forest-foreground/45 sm:flex-row sm:justify-between">
          <span>© 2026 Negi Cottage. All rights reserved.</span>
          <span>Apple Orchard Homestay · Kupa, Sangla Valley</span>
        </div>
      </footer>

      {/* Floating WhatsApp Booking Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="floating-whatsapp"
        aria-label="Book Negi Cottage on WhatsApp"
      >
        <WhatsAppIcon className="h-6 w-6" />
        <span className="hidden sm:inline">Book on WhatsApp</span>
      </a>

      {/* Lightbox for Preview Photos */}
      {activeImage && lightboxIndex !== null && (
        <div
          className="lightbox fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6"
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={() => setLightboxIndex(null)}
            className="absolute right-4 top-4 z-20 grid h-11 w-11 place-items-center rounded-full bg-black/60 text-white"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={() => moveLightbox(-1)}
            className="absolute left-3 sm:left-6 z-20 grid h-12 w-12 place-items-center rounded-full bg-black/60 text-white"
            aria-label="Previous"
          >
            <ChevronLeft className="h-7 w-7" />
          </button>
          <div className="max-w-4xl text-center text-white">
            <img
              src={activeImage.src}
              alt={activeImage.title}
              className="max-h-[75vh] max-w-full rounded-xl object-contain mx-auto shadow-2xl"
            />
            <h3 className="mt-4 font-display text-2xl font-bold">{activeImage.title}</h3>
            <p className="text-xs text-gold uppercase tracking-widest mt-1">{activeImage.category}</p>
          </div>
          <button
            type="button"
            onClick={() => moveLightbox(1)}
            className="absolute right-3 sm:right-6 z-20 grid h-12 w-12 place-items-center rounded-full bg-black/60 text-white"
            aria-label="Next"
          >
            <ChevronRight className="h-7 w-7" />
          </button>
        </div>
      )}
    </main>
  );
}
