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

export const Route = createFileRoute("/stay")({
  head: () => ({
    meta: [
      { title: "Places to Stay in Sangla | Budget Homestay & Hotel in Sangla Valley" },
      {
        name: "description",
        content:
          "Looking for places to stay in Sangla? Negi Cottage offers the best homestay rooms in Sangla Valley: Single room at ₹1,500, Double room at ₹2,000, 4-Bedded suite at ₹3,000/night (EP Plan - Room Only). Clean rooms with attached 24/7 hot geysers.",
      },
      {
        name: "keywords",
        content:
          "Hotel in Sangla Valley, Budget homestay in Sangla, Places to stay in Sangla, Family stay in Sangla Valley, Homestay in Sangla Valley, Negi Cottage rooms, EP plan homestay Sangla",
      },
      { property: "og:title", content: "Places to Stay in Sangla — Budget Homestay & Hotel in Sangla Valley" },
      {
        property: "og:description",
        content:
          "Authentic rooms and family suites in Sangla Valley: Single ₹1,500, Double ₹2,000, 4-Bedded ₹3,000/night (EP Plan · Room Only) with orchard balconies, Kinner Kailash views, and 24/7 hot geysers.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.negicottage.in/stay" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://www.negicottage.in/stay" }],
  }),
  component: StayPage,
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

function StayPage() {
  return (
    <PageFrame>
      <SEO
        title="Places to Stay in Sangla | Budget Homestay & Hotel in Sangla Valley"
        description="Looking for places to stay in Sangla? Negi Cottage offers the best budget homestay and family stay in Sangla Valley. Clean rooms with attached hot geysers, mountain balconies, and family suites from ₹1,500/night."
        path="/stay"
        image="/images/negi-cottage-cover.png"
      />
      <PageHero
        image={roomView}
        imageAlt="Mountain-view guest room at Negi Cottage"
        eyebrow="Places to Stay in Sangla · Kinnaur"
        title="Rest with a view of the peaks."
        copy="Whether you are searching for a serene hotel in Sangla Valley, an authentic homestay in Sangla Valley, or a comfortable family stay in Sangla Valley on a sensible budget, Negi Cottage welcomes you."
      />

      {/* Intro Overview */}
      <section className="section-pad bg-background">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between border-b border-border pb-10">
            <div>
              <p className="eyebrow text-terracotta">Budget Homestay in Sangla · Real Photos · EP Plan</p>
              <h2 className="mt-2 font-display text-4xl sm:text-5xl lg:text-6xl text-foreground font-normal">
                Places to Stay in Sangla Valley
              </h2>
              <p className="mt-4 max-w-2xl text-base text-muted-foreground leading-relaxed">
                If you are comparing hotels in Sangla Valley and looking for genuine mountain peace, Negi Cottage provides a top-rated homestay with transparent European Plan rates (EP: Room Only) — Single room at ₹1,500, Double room at ₹2,000, and 4-Bedded suite at ₹3,000 per night. Clean rooms, attached 24/7 hot geysers, and orchard balconies.
              </p>
            </div>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="button-forest shrink-0">
              <WhatsAppIcon className="h-4 w-4 text-terracotta" /> Enquire Availability
            </a>
          </div>

          {/* Room Tiers Section */}
          <div className="mt-14 space-y-20">
            {roomTiers.map((tier) => (
              <div
                key={tier.title}
                className="overflow-hidden rounded-3xl border border-border bg-card p-6 sm:p-10 lg:p-12 shadow-sm transition-shadow hover:shadow-lg"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-border/70 pb-6">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="rounded-full bg-forest px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-forest-foreground">
                        {tier.tag}
                      </span>
                      <span className="font-display text-xl sm:text-2xl font-bold text-forest">
                        {tier.price}
                      </span>
                    </div>
                    <h3 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-normal text-foreground">
                      {tier.title}
                    </h3>
                  </div>
                  <a
                    href={`https://wa.me/917807215761?text=${encodeURIComponent(tier.prefillMessage)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="button-gold self-start sm:self-auto shrink-0"
                  >
                    <WhatsAppIcon className="h-4 w-4" /> Book This Room &rarr;
                  </a>
                </div>

                <p className="mt-5 max-w-4xl text-base leading-relaxed text-muted-foreground">
                  {tier.description}
                </p>

                {/* 4 Image Grid per Tier */}
                <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                  {tier.images.map((img) => (
                    <div
                      key={img.title}
                      className="group overflow-hidden rounded-2xl border border-border bg-background transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                    >
                      <div className="aspect-[4/3] w-full overflow-hidden bg-soft-sand">
                        <img
                          src={img.src}
                          alt={img.title}
                          loading="lazy"
                          decoding="async"
                          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="font-display text-lg font-semibold text-foreground">
                          {img.title}
                        </h4>
                        <p className="mt-1 text-xs text-muted-foreground leading-normal">
                          {img.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Key Amenities row */}
                <div className="mt-8 rounded-2xl bg-soft-sand/50 p-6 border border-border/80">
                  <p className="text-xs font-bold uppercase tracking-widest text-forest mb-4 flex items-center gap-2">
                    <Sparkles className="h-3.5 w-3.5 text-terracotta" /> Included in This Room:
                  </p>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {tier.amenities.map((amenity) => (
                      <div key={amenity} className="flex items-center gap-2.5 text-xs font-medium text-foreground">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-terracotta" />
                        <span>{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Ensuite Bathrooms Showcase */}
          <div className="mt-20 rounded-3xl bg-forest p-8 text-forest-foreground sm:p-12 lg:p-16 shadow-xl">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <span className="eyebrow text-terracotta">Cleanliness & Hygiene Guaranteed</span>
                <h3 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-normal text-forest-foreground">
                  Modern Ensuite Bathrooms with 24/7 Hot Water
                </h3>
                <p className="mt-4 text-base text-forest-foreground/85 leading-relaxed">
                  We know that nothing matters more after a long scenic drive through Kinnaur than a sparkling clean, private restroom and a steaming hot shower. All our bathrooms are fitted with high-efficiency geysers, hygienic western commodes, and fresh mountain towels.
                </p>
                <div className="mt-6 space-y-3 text-xs sm:text-sm text-forest-foreground/90">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-terracotta mt-0.5" />
                    <span>Instant electric geyser for non-stop steaming hot water even in freezing temperatures</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-terracotta mt-0.5" />
                    <span>Sparkling clean tiled interiors, western commodes, and sanitary fittings</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-terracotta mt-0.5" />
                    <span>Freshly laundered soft towels and complimentary mountain soaps provided</span>
                  </div>
                </div>
              </div>

              {/* 2 Bathroom Photos */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="overflow-hidden rounded-2xl border border-white/15 bg-black/25">
                  <img
                    src={bathroom}
                    alt="Modern attached bathroom at Negi Cottage"
                    className="h-64 w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="p-4 bg-black/40 text-center">
                    <p className="text-xs font-semibold text-terracotta">Clean Ensuite Bathroom</p>
                    <p className="text-[11px] text-white/75 mt-0.5">Equipped with 24/7 electric hot water geyser</p>
                  </div>
                </div>
                <div className="overflow-hidden rounded-2xl border border-white/15 bg-black/25">
                  <img
                    src={bathroom1}
                    alt="Pristine ensuite washroom facilities"
                    className="h-64 w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="p-4 bg-black/40 text-center">
                    <p className="text-xs font-semibold text-terracotta">Modern Washroom Fixtures</p>
                    <p className="text-[11px] text-white/75 mt-0.5">Hygienic, tiled & meticulously maintained</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Rate Calculator Section */}
      <section className="section-pad bg-soft-sand/50 border-t border-border">
        <div className="mx-auto max-w-4xl px-6 md:px-10">
          <BookingCalculator />
        </div>
      </section>
    </PageFrame>
  );
}
