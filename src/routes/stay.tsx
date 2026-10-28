import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Bed, CheckCircle2, Coffee, Flame, Heart, Sparkles, Sun, Wifi, Wind } from "lucide-react";
import { BookingCalculator } from "@/components/booking-calculator";
import { PageFrame, PageHero, whatsappUrl, WhatsAppIcon } from "@/components/negi-layout";
import { roomPhotos } from "@/lib/cottage-photos";
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
      { title: "Stay at Negi Cottage | Deluxe Rooms & Family Suites in Kupa" },
      {
        name: "description",
        content:
          "Explore genuine photo tours of accommodations at Negi Cottage, Kupa: Balcony Mountain Rooms, Deluxe Suites, Grand Family Suites, and clean ensuite bathrooms with 24/7 hot water.",
      },
      { property: "og:title", content: "Rooms & Suites at Negi Cottage, Sangla Valley" },
      {
        property: "og:description",
        content:
          "Authentic Himalayan homestay rooms with orchard balconies, Kinner Kailash views, and modern comforts. Starting from around ₹1,500/night.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/stay" }],
  }),
  component: StayPage,
});

const roomTiers = [
  {
    title: "Balcony & Scenic Window Rooms",
    tag: "Most Popular",
    price: "From ₹1,800 / night",
    description:
      "Bright, morning-facing rooms featuring direct wooden balcony access or broad picture windows overlooking snow-capped Kinner Kailash ridges and blooming apple orchards.",
    images: [
      { src: balconyRoom, title: "Balcony Mountain Room", desc: "Private step-out wooden balcony facing the valley." },
      { src: windowRoom, title: "Scenic Window Suite", desc: "Large windows framing alpine peaks and morning light." },
      { src: roomView, title: "Orchard Vista Room", desc: "Wake up to misty ridgelines and pine-covered slopes." },
      { src: room2, title: "Sunlit Mountain Suite", desc: "Ample natural daylight and warm wooden accents." },
    ],
    amenities: [
      "Valley & orchard view balcony",
      "Attached private washroom with 24/7 hot water",
      "Warm Himalayan woollen quilts & blankets",
      "Morning tea / coffee service in bed",
    ],
  },
  {
    title: "Grand Family Suites",
    tag: "Ideal for Groups & Families",
    price: "From ₹2,500 / night",
    description:
      "Spacious multi-bed chambers crafted specifically for parents traveling with children or small trekking groups exploring the Sangla Valley together in comfort.",
    images: [
      { src: familyRoom, title: "Grand Family Suite", desc: "Expansive layout with multiple beds and seating space." },
      { src: familyRoom1, title: "Master Bed Section", desc: "Extra wide beds with plush mattresses and warm linens." },
      { src: familyRoom2, title: "Family Lounge & Sleeping Area", desc: "Quiet seating nook for evening chai and card games." },
      { src: negiCottageFamilyRoom, title: "Upper Family Quarters", desc: "Top floor panoramic windows capturing full valley vistas." },
    ],
    amenities: [
      "Accommodates 3 to 5 guests comfortably",
      "Ensuite bathroom with high-capacity geysers",
      "Spacious room layout for luggage and gear",
      "Child-friendly and quiet environment",
    ],
  },
  {
    title: "Classic Mountain Comfort Rooms",
    tag: "Cozy & Authentic",
    price: "From ₹1,500 / night",
    description:
      "Traditional pine-trimmed rooms that celebrate the rustic simplicity of a true Himalayan homestay. Silent, peaceful, and warm throughout the chill mountain nights.",
    images: [
      { src: room, title: "Classic Double Room", desc: "Quiet retreat with warm bedding and pine timber trim." },
      { src: room3, title: "Pine-Accented Bedroom", desc: "Cozy mountain hideaway for couples and solo travelers." },
      { src: room4, title: "Orchard Wing Room", desc: "Peaceful corner facing the gentle apple orchard breeze." },
      { src: negiCottageRoom, title: "Traditional Wooden Room", desc: "Wood-panelled charm with genuine local hospitality." },
    ],
    amenities: [
      "Double spring/foam comfortable bed",
      "Daily housekeeping & fresh mountain linen",
      "Dedicated power sockets for cameras & phones",
      "Quick access to the dining hall and garden",
    ],
  },
];

function StayPage() {
  return (
    <PageFrame>
      <PageHero
        image={roomView}
        imageAlt="Mountain-view guest room at Negi Cottage"
        eyebrow="Authentic Mountain Accommodation · Kupa"
        title="Rest with a view of the peaks."
        copy="Wake up to birdsong in the apple orchards, inhale the crisp Himalayan air from your wooden balcony, and sleep deeply in clean, heated mountain rooms."
      />

      {/* Intro Overview */}
      <section className="section-pad bg-background">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between border-b border-border pb-10">
            <div>
              <p className="eyebrow text-gold-dark">Real Photos · Real Homestay</p>
              <h2 className="mt-2 font-display text-4xl sm:text-5xl text-foreground">
                Our Rooms & Suites
              </h2>
              <p className="mt-3 max-w-2xl text-base text-muted-foreground leading-relaxed">
                Every photograph below is taken directly inside Negi Cottage. We pride ourselves on sparkling cleanliness, warm hospitality, and unobstructed Himalayan views.
              </p>
            </div>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="button-forest shrink-0">
              <WhatsAppIcon className="h-5 w-5" /> Enquire Availability
            </a>
          </div>

          {/* Room Tiers Section */}
          <div className="mt-14 space-y-20">
            {roomTiers.map((tier, idx) => (
              <div key={tier.title} className="rounded-3xl border border-border/80 bg-card p-6 sm:p-10 shadow-sm">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-b border-border/60 pb-6">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="rounded-full bg-forest px-3 py-1 text-xs font-bold uppercase tracking-wider text-gold">
                        {tier.tag}
                      </span>
                      <span className="text-sm font-semibold text-gold-dark">{tier.price}</span>
                    </div>
                    <h3 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-foreground">
                      {tier.title}
                    </h3>
                  </div>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="button-gold self-start sm:self-auto text-xs uppercase tracking-wider font-bold py-2.5 px-5"
                  >
                    Book This Room &rarr;
                  </a>
                </div>

                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                  {tier.description}
                </p>

                {/* 4 Image Grid per Tier */}
                <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {tier.images.map((img) => (
                    <div
                      key={img.title}
                      className="group overflow-hidden rounded-xl border border-border bg-background transition-all hover:-translate-y-1 hover:shadow-md"
                    >
                      <div className="aspect-[4/3] w-full overflow-hidden bg-muted">
                        <img
                          src={img.src}
                          alt={img.title}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-3.5">
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
                <div className="mt-8 rounded-xl bg-muted/40 p-5">
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">
                    Included Amenities:
                  </p>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    {tier.amenities.map((amenity) => (
                      <div key={amenity} className="flex items-center gap-2 text-xs font-medium text-foreground">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-gold-dark" />
                        <span>{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Ensuite Bathrooms Showcase */}
          <div className="mt-20 rounded-3xl bg-forest p-8 text-forest-foreground sm:p-12 shadow-xl">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <span className="eyebrow text-gold">Cleanliness & Hygiene Guaranteed</span>
                <h3 className="mt-3 font-display text-3xl sm:text-4xl text-forest-foreground">
                  Modern Ensuite Bathrooms with 24/7 Hot Water
                </h3>
                <p className="mt-4 text-sm text-forest-foreground/80 leading-relaxed">
                  We know that nothing matters more after a long drive across Kinnaur than a sparkling clean, private restroom and a steaming hot shower. All our bathrooms are fitted with high-efficiency geysers, western toilets, and fresh toiletries.
                </p>
                <div className="mt-6 space-y-2.5 text-xs text-forest-foreground/90">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-gold" />
                    <span>Instant electric geyser for non-stop hot water in freezing temperatures</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-gold" />
                    <span>Sparkling clean tiled interiors, western commodes, and sanitary fittings</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-gold" />
                    <span>Freshly laundered towels and complimentary mountain soaps provided</span>
                  </div>
                </div>
              </div>

              {/* 2 Bathroom Photos */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="overflow-hidden rounded-2xl border border-white/15 bg-black/20">
                  <img
                    src={bathroom}
                    alt="Modern attached bathroom at Negi Cottage"
                    className="h-60 w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="p-3 bg-black/40 text-center">
                    <p className="text-xs font-semibold text-gold">Clean Ensuite Bathroom</p>
                    <p className="text-[11px] text-white/70">Equipped with 24/7 hot water geyser</p>
                  </div>
                </div>
                <div className="overflow-hidden rounded-2xl border border-white/15 bg-black/20">
                  <img
                    src={bathroom1}
                    alt="Pristine ensuite washroom facilities"
                    className="h-60 w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="p-3 bg-black/40 text-center">
                    <p className="text-xs font-semibold text-gold">Modern Washroom Fixtures</p>
                    <p className="text-[11px] text-white/70">Hygienic, tiled & fully functional</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Rate Calculator */}
      <section className="section-pad bg-gold-light">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <BookingCalculator />
        </div>
      </section>
    </PageFrame>
  );
}
