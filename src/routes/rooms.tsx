import { createFileRoute } from "@tanstack/react-router";
import { Bed, CheckCircle2, Coffee, Flame, Heart, ShieldCheck, Sparkles, Sun, Wifi, Wind } from "lucide-react";
import { BookingCalculator } from "@/components/booking-calculator";
import { PageFrame, PageHero, whatsappUrl, WhatsAppIcon } from "@/components/negi-layout";
import SEO from "@/components/SEO";
import balconyRoom from "@/assets/balcony-room.png";
import windowRoom from "@/assets/window-room.png";
import roomView from "@/assets/negi-cottage-room-view.png";
import room2 from "@/assets/room2.png";
import familyRoom from "@/assets/family-room.png";
import familyRoom1 from "@/assets/family-room1.png";
import familyRoom2 from "@/assets/family-room2.png";
import negiCottageFamilyRoom from "@/assets/negi-cottage-family-room.png";
import room from "@/assets/room.png";
import room3 from "@/assets/room3.png";
import room4 from "@/assets/room4.png";
import negiCottageRoom from "@/assets/negi-cottage-room.png";
import bathroom from "@/assets/bathroom.png";
import bathroom1 from "@/assets/bathroom1.png";

export const Route = createFileRoute("/rooms")({
  head: () => ({
    meta: [
      { title: "Rooms & Accommodation | Negi Cottage, Sangla Valley Kinnaur" },
      {
        name: "description",
        content:
          "Explore clean, wood-lined rooms and 4-bedded family suites at Negi Cottage in Kupa, Sangla Valley. Single room at ₹1,500, Double room at ₹2,000, and 4-Bedded room at ₹3,000/night (EP Plan - Room Only).",
      },
      {
        name: "keywords",
        content:
          "Rooms in Sangla Valley, Negi Cottage rooms, accommodation in Sangla, family suites Sangla, budget homestay rooms Sangla Kinnaur, EP plan homestay Sangla",
      },
      { property: "og:title", content: "Rooms & Accommodation at Negi Cottage, Sangla Valley" },
      {
        property: "og:description",
        content:
          "Authentic Himalayan homestay rooms: Single room ₹1,500, Double room ₹2,000, 4-Bedded room ₹3,000/night (EP Plan · Room Only). Orchard balconies, Kinner Kailash views, 24/7 hot water geysers.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.negicottage.in/rooms" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://www.negicottage.in/rooms" }],
  }),
  component: RoomsPage,
});

const roomTiers = [
  {
    title: "Single Mountain Room",
    tag: "Single Room · EP Plan (₹1,500)",
    price: "₹1,500 / night",
    plan: "EP Plan (Room Only)",
    prefillMessage: "Hello, I would like to book a Single Room at Negi Cottage, Kupa (₹1,500/night EP Plan).",
    description:
      "Cozy, pine-trimmed single room designed for solo travelers, backpackers, and peaceful remote work stays. Features clean wooden interiors, attached private bathroom with 24/7 hot water geyser, and tranquil apple orchard surroundings.",
    images: [
      { src: room, title: "Single Mountain Room", desc: "Quiet retreat with warm bedding and pine timber trim." },
      { src: room3, title: "Pine-Accented Bedroom", desc: "Cozy mountain hideaway for solo travelers and backpackers." },
      { src: room4, title: "Orchard Wing Room", desc: "Peaceful corner facing the gentle apple orchard breeze." },
      { src: negiCottageRoom, title: "Traditional Wooden Room", desc: "Wood-panelled charm with genuine local hospitality." },
    ],
    amenities: [
      "Comfortable single bed with fresh mountain linen",
      "Attached private washroom with 24/7 hot water geyser",
      "Warm Himalayan woollen quilts & heavy blankets",
      "Power sockets with phone/laptop charging points",
      "Direct access to apple orchard garden walkways",
      "EP Plan: Room only (meals available fresh upon order)",
    ],
  },
  {
    title: "Double Mountain Room (Balcony / Scenic View)",
    tag: "Double Room · EP Plan (₹2,000)",
    price: "₹2,000 / night",
    plan: "EP Plan (Room Only)",
    prefillMessage: "Hello, I would like to book a Double Room at Negi Cottage, Kupa (₹2,000/night EP Plan).",
    description:
      "Spacious, morning-facing double room featuring direct wooden step-out balcony access or wide picture windows overlooking snow-capped Kinner Kailash ridges and blooming apple orchards. Ideal for couples and friends seeking mountain serenity.",
    images: [
      { src: balconyRoom, title: "Balcony Mountain Room", desc: "Private step-out wooden veranda facing the valley." },
      { src: windowRoom, title: "Scenic Window Suite", desc: "Large windows framing alpine peaks and morning light." },
      { src: roomView, title: "Orchard Vista Room", desc: "Wake up to misty ridgelines and pine-covered slopes." },
      { src: room2, title: "Sunlit Mountain Suite", desc: "Ample natural daylight and warm wooden accents." },
    ],
    amenities: [
      "Valley & orchard view wooden step-out balcony",
      "Spacious double bed with plush mattress & warm quilts",
      "Attached private washroom with 24/7 hot water geyser",
      "Morning tea / coffee served in bed upon request",
      "Panoramic views of snow-capped Kinner Kailash summits",
      "EP Plan: Room only (meals available fresh upon order)",
    ],
  },
  {
    title: "4-Bedded Grand Family Suite",
    tag: "4-Bedded Suite · EP Plan (₹3,000)",
    price: "₹3,000 / night",
    plan: "EP Plan (Room Only)",
    prefillMessage: "Hello, I would like to book a 4-Bedded Family Room at Negi Cottage, Kupa (₹3,000/night EP Plan).",
    description:
      "Expansive 4-bedded suite crafted specifically for parents traveling with children, family vacations, or small trekking groups exploring the Sangla Valley together in comfort. Generous floor plan with ample luggage space for winter gear.",
    images: [
      { src: familyRoom, title: "Grand Family Suite", desc: "Expansive layout with 4 beds and seating space." },
      { src: familyRoom1, title: "Master Bed Section", desc: "Extra wide beds with plush mattresses and warm linens." },
      { src: familyRoom2, title: "Family Lounge & Sleeping Area", desc: "Quiet seating nook for evening chai and card games." },
      { src: negiCottageFamilyRoom, title: "Upper Family Quarters", desc: "Top floor panoramic windows capturing full valley vistas." },
    ],
    amenities: [
      "Comfortably accommodates up to 4 guests",
      "4 beds with plush mattresses & heavy Himalayan quilts",
      "Ensuite bathroom with high-capacity fast geysers",
      "Spacious room layout for luggage, trekking gear & boots",
      "Quiet family-friendly environment close to dining hall",
      "EP Plan: Room only (meals available fresh upon order)",
    ],
  },
];

const generalAmenities = [
  { icon: Wifi, title: "Free Wi-Fi Internet", desc: "Stay connected with family and work remotely with mountain views." },
  { icon: Flame, title: "24/7 Hot Water Geysers", desc: "High-capacity electric water heaters in every attached ensuite bathroom." },
  { icon: Sun, title: "Apple Orchard Lawns", desc: "Step right outside your room into private heritage apple tree gardens." },
  { icon: Coffee, title: "Home-Cooked Food", desc: "Fresh breakfast, lunch, and dinner prepared with local organic ingredients." },
  { icon: Wind, title: "Room Heating & Quilts", desc: "Heavy Himalayan wool quilts, heated blankets, and heaters on request." },
  { icon: ShieldCheck, title: "Secure Car Parking", desc: "Direct road access with safe roadside parking beside Kuppa Bus Stand." },
];

function RoomsPage() {
  return (
    <PageFrame>
      <SEO
        title="Rooms & Accommodation | Negi Cottage, Sangla Valley Kinnaur"
        description="Explore clean, wood-lined rooms and 4-bedded family suites at Negi Cottage in Kupa, Sangla Valley. Single room at ₹1,500, Double room at ₹2,000, and 4-Bedded room at ₹3,000/night (EP Plan - Room Only)."
        path="/rooms"
        image="/images/negi-cottage-cover.png"
      />
      <PageHero
        image={roomView}
        imageAlt="Mountain-view guest room at Negi Cottage"
        eyebrow="Rooms & Accommodation · Kupa, Sangla Valley"
        title="Rest with a view of the peaks."
        copy="Wake up to birdsong in the apple orchards, inhale the crisp Himalayan air from your wooden balcony, and sleep deeply in clean, heated mountain rooms."
      />

      {/* Intro Overview */}
      <section className="section-pad bg-background">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between border-b border-border pb-10">
            <div>
              <p className="eyebrow text-terracotta">Rooms & Suites · Real Photos · EP Plan</p>
              <h2 className="mt-2 font-display text-4xl sm:text-5xl lg:text-6xl text-foreground font-normal">
                Rooms and Accommodation
              </h2>
              <p className="mt-4 max-w-2xl text-base text-muted-foreground leading-relaxed">
                Every photograph below is taken directly inside Negi Cottage. We offer transparent homestay rates on European Plan (EP: Room Only) — Single room at ₹1,500, Double room at ₹2,000, and 4-Bedded room at ₹3,000 per night. Fresh home-cooked meals are prepared upon order.
              </p>
            </div>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="button-forest shrink-0">
              <WhatsAppIcon className="h-4 w-4 text-terracotta" /> Enquire Availability
            </a>
          </div>

          {/* Room Tiers */}
          <div className="mt-14 space-y-20">
            {roomTiers.map((tier, idx) => (
              <article key={tier.title} className="rounded-3xl border border-border bg-card p-6 sm:p-10 shadow-xs">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 border-b border-border pb-6">
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full bg-forest/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-forest">
                      <Sparkles className="h-3 w-3 text-gold" />
                      <span>{tier.tag}</span>
                    </div>
                    <h3 className="mt-3 font-display text-3xl sm:text-4xl font-normal text-foreground">
                      {tier.title}
                    </h3>
                  </div>
                  <div className="text-left sm:text-right">
                    <span className="font-display text-2xl sm:text-3xl font-semibold text-terracotta">
                      {tier.price}
                    </span>
                    <span className="block text-xs font-medium text-forest/90">EP Plan · Room Only</span>
                  </div>
                </div>

                <p className="mt-6 text-base text-muted-foreground leading-relaxed max-w-4xl">
                  {tier.description}
                </p>

                {/* 4 Photo Grid */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {tier.images.map((img) => (
                    <div key={img.title} className="group overflow-hidden rounded-2xl border border-border bg-soft-sand">
                      <div className="aspect-[4/3] overflow-hidden">
                        <img
                          src={img.src}
                          alt={img.title}
                          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      <div className="p-3 bg-card">
                        <p className="font-display text-sm font-semibold text-foreground">{img.title}</p>
                        <p className="text-[11px] text-muted-foreground line-clamp-1">{img.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Amenities & Booking CTA */}
                <div className="mt-8 pt-6 border-t border-border flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-xs text-muted-foreground">
                    {tier.amenities.map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-terracotta shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href={`https://wa.me/917807215761?text=${encodeURIComponent(tier.prefillMessage)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="button-forest shrink-0 text-xs"
                  >
                    <WhatsAppIcon className="h-4 w-4 text-terracotta" />
                    <span>Book on WhatsApp</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Bathrooms Section */}
      <section className="section-pad bg-soft-sand/70 border-t border-border">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="eyebrow text-terracotta">Hygienic & Well-Maintained</p>
              <h2 className="mt-2 font-display text-4xl sm:text-5xl text-foreground font-normal">
                Ensuite Washrooms with 24/7 Geysers
              </h2>
              <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                We understand that clean, hygienic bathrooms with reliable hot water are paramount for high-altitude mountain travel. Every room at Negi Cottage includes a private attached washroom equipped with modern fittings, western commodes, and dedicated electric geysers.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-terracotta shrink-0" />
                  <span>24/7 continuous hot water geysers in all rooms</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-terracotta shrink-0" />
                  <span>Fresh clean towels and sanitised bathroom surfaces</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-terracotta shrink-0" />
                  <span>Clean mountain spring water supply</span>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-border overflow-hidden bg-card shadow-sm">
                <div className="aspect-[3/4]">
                  <img src={bathroom} alt="Clean attached bathroom with geyser" className="h-full w-full object-cover" />
                </div>
                <p className="p-3 text-xs text-muted-foreground text-center">Attached Washroom 1</p>
              </div>
              <div className="rounded-2xl border border-border overflow-hidden bg-card shadow-sm">
                <div className="aspect-[3/4]">
                  <img src={bathroom1} alt="Tiled bathroom with western toilet" className="h-full w-full object-cover" />
                </div>
                <p className="p-3 text-xs text-muted-foreground text-center">Attached Washroom 2</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* General Amenities */}
      <section className="section-pad bg-background">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="eyebrow text-terracotta">Homestay Facilities</p>
            <h2 className="mt-2 font-display text-4xl sm:text-5xl text-foreground font-normal">
              Included with Every Stay
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {generalAmenities.map((amenity) => {
              const Icon = amenity.icon;
              return (
                <div key={amenity.title} className="rounded-2xl border border-border bg-card p-6 shadow-xs">
                  <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-forest/10 text-forest">
                    <Icon className="h-6 w-6 text-terracotta" />
                  </div>
                  <h3 className="mt-4 font-display text-xl font-bold text-foreground">{amenity.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{amenity.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Booking Calculator */}
      <BookingCalculator />
    </PageFrame>
  );
}

