import { createFileRoute } from "@tanstack/react-router";
import { Bed, CheckCircle2, Coffee, Flame, Heart, ShieldCheck, Sparkles, Sun, Wifi, Wind } from "lucide-react";
import { BookingCalculator } from "@/components/booking-calculator";
import { PageFrame, PageHero, whatsappUrl, WhatsAppIcon } from "@/components/negi-layout";
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
          "Explore clean, wood-lined rooms and family suites at Negi Cottage in Kupa, Sangla Valley. Balcony mountain rooms, 24/7 hot geysers, apple orchard views, starting from ₹1,500/night.",
      },
      {
        name: "keywords",
        content:
          "Rooms in Sangla Valley, Negi Cottage rooms, accommodation in Sangla, family suites Sangla, budget homestay rooms Sangla Kinnaur",
      },
      { property: "og:title", content: "Rooms & Accommodation at Negi Cottage, Sangla Valley" },
      {
        property: "og:description",
        content:
          "Authentic Himalayan homestay rooms with orchard balconies, Kinner Kailash views, 24/7 hot water geysers, and cozy heated quilts from ₹1,500/night.",
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
    title: "Balcony & Scenic Window Rooms",
    tag: "Guest Favorite in Sangla",
    price: "From ₹1,800 / night",
    prefillMessage: "Hello, I would like to book a Balcony Mountain Room at Negi Cottage, Kupa.",
    description:
      "Bright, morning-facing rooms featuring direct wooden balcony access or wide picture windows overlooking snow-capped Kinner Kailash ridges and blooming apple orchards. Perfect for couples, solo travelers, and writers seeking tranquil mountain views.",
    images: [
      { src: balconyRoom, title: "Balcony Mountain Room", desc: "Private step-out wooden veranda facing the valley." },
      { src: windowRoom, title: "Scenic Window Suite", desc: "Large windows framing alpine peaks and morning light." },
      { src: roomView, title: "Orchard Vista Room", desc: "Wake up to misty ridgelines and pine-covered slopes." },
      { src: room2, title: "Sunlit Mountain Suite", desc: "Ample natural daylight and warm wooden accents." },
    ],
    amenities: [
      "Valley & orchard view wooden balcony",
      "Attached private washroom with 24/7 hot water geyser",
      "Warm Himalayan woollen quilts & heavy blankets",
      "Morning tea / coffee served in bed upon request",
      "Power sockets with phone/camera charging points",
      "Fresh daily linen & housekeeping service",
    ],
  },
  {
    title: "Grand Family Suites",
    tag: "Best Family Stay in Sangla Valley",
    price: "From ₹2,500 / night",
    prefillMessage: "Hello, I would like to enquire about the Grand Family Suite for our family/group at Negi Cottage, Kupa.",
    description:
      "Expansive multi-bed chambers crafted specifically for parents traveling with children or small trekking groups exploring the Sangla Valley together in comfort. Generous floor plan with ample space for mountain luggage, backpacks, and winter gear.",
    images: [
      { src: familyRoom, title: "Grand Family Suite", desc: "Expansive layout with multiple beds and seating space." },
      { src: familyRoom1, title: "Master Bed Section", desc: "Extra wide beds with plush mattresses and warm linens." },
      { src: familyRoom2, title: "Family Lounge & Sleeping Area", desc: "Quiet seating nook for evening chai and card games." },
      { src: negiCottageFamilyRoom, title: "Upper Family Quarters", desc: "Top floor panoramic windows capturing full valley vistas." },
    ],
    amenities: [
      "Comfortably accommodates 3 to 5 guests",
      "Multiple beds with plush mattresses & heavy quilts",
      "Ensuite bathroom with high-capacity fast geysers",
      "Spacious room layout for luggage, trekking gear & boots",
      "Quiet family-friendly environment close to dining hall",
      "Extra blankets and hot water bottles on chill nights",
    ],
  },
  {
    title: "Classic Mountain Comfort Rooms",
    tag: "Budget Homestay in Sangla (From ₹1,500)",
    price: "From ₹1,500 / night",
    prefillMessage: "Hello, I would like to book a Classic Mountain Room at Negi Cottage, Kupa.",
    description:
      "Traditional pine-trimmed rooms that celebrate the rustic simplicity and soothing peace of an authentic Himalayan homestay. Silent, peaceful, and warm throughout the chill mountain nights.",
    images: [
      { src: room, title: "Classic Double Room", desc: "Quiet retreat with warm bedding and pine timber trim." },
      { src: room3, title: "Pine-Accented Bedroom", desc: "Cozy mountain hideaway for couples and solo travelers." },
      { src: room4, title: "Orchard Wing Room", desc: "Peaceful corner facing the gentle apple orchard breeze." },
      { src: negiCottageRoom, title: "Traditional Wooden Room", desc: "Wood-panelled charm with genuine local hospitality." },
    ],
    amenities: [
      "Comfortable spring/foam double mattress",
      "Ensuite private bathroom with running hot water",
      "Warm wooden ceiling panels & local textiles",
      "Daily housekeeping & fresh mountain towels",
      "Quick access to the dining hall and garden lawn",
      "Fast host assistance for travel planning",
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
              <p className="eyebrow text-terracotta">Rooms & Suites · Real Photos</p>
              <h2 className="mt-2 font-display text-4xl sm:text-5xl lg:text-6xl text-foreground font-normal">
                Rooms and Accommodation
              </h2>
              <p className="mt-4 max-w-2xl text-base text-muted-foreground leading-relaxed">
                Every photograph below is taken directly inside Negi Cottage. We take immense pride in sparkling cleanliness, warm Kinnauri hospitality, and unobstructed Himalayan mountain views starting from ₹1,500/night.
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
                    <span className="block text-xs text-muted-foreground">Direct booking rate</span>
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

