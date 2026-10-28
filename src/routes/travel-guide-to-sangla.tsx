import { createFileRoute, Link } from "@tanstack/react-router";
import {
  AlertTriangle,
  Bus,
  Calendar,
  Car,
  CheckCircle2,
  Clock,
  Compass,
  CreditCard,
  FileText,
  Fuel,
  Info,
  MapPin,
  Mountain,
  PhoneCall,
  Plane,
  ShieldCheck,
  Smartphone,
  Sun,
  Thermometer,
  Train,
  Umbrella,
  Wind,
} from "lucide-react";
import { PageFrame, PageHero, whatsappUrl, WhatsAppIcon } from "@/components/negi-layout";
import mountain from "@/assets/negi-cottage-mountains.png";
import snowView from "@/assets/snow-view.png";
import sunrise from "@/assets/negi-retreat-sunrise.jpg";
import pineTrail from "@/assets/negi-retreat-pine-trail.jpg";

export const Route = createFileRoute("/travel-guide-to-sangla")({
  head: () => ({
    meta: [
      {
        title: "Sangla Valley Travel Guide | Planning & Practical Information",
      },
      {
        name: "description",
        content:
          "Complete Sangla Valley travel guide: how to reach from Delhi/Shimla, best season to visit, road conditions, permits, mobile connectivity, ATMs, packing list, and 4-day Kinnaur itineraries.",
      },
      {
        name: "keywords",
        content:
          "Sangla Valley travel guide, how to reach Sangla Valley, best time to visit Sangla, Delhi to Sangla road trip, Chitkul travel tips, Kinnaur itinerary, Sangla weather",
      },
      {
        property: "og:title",
        content: "Sangla Valley Travel Guide — Travel Planning & Practical Tips",
      },
      {
        property: "og:description",
        content:
          "Practical traveler guide for visiting Sangla Valley, Kinnaur: routes, transport, weather, network, ATMs, and local insights from Negi Cottage.",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:url",
        content: "https://www.negicottage.in/travel-guide-to-sangla",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://www.negicottage.in/travel-guide-to-sangla",
      },
    ],
  }),
  component: TravelGuidePage,
});

const seasons = [
  {
    period: "April – June",
    name: "Spring & Summer Blossom Season",
    temp: "15°C to 25°C · Pleasant & Sunny",
    desc: "Fragrant white apple and cherry blossoms blanket the valley. Days are comfortably warm with brilliant blue skies, perfect for family vacations and leisurely sightseeing.",
    bestFor: "Apple blossoms, riverside walks, Kamru Fort, sightseeing",
  },
  {
    period: "July – August",
    name: "Monsoon Season",
    temp: "18°C to 24°C · Lush Greenery",
    desc: "The valley turns vivid emerald green with roaring waterfalls. Travelers should check mountain road status on NH05 and drive carefully alongside the river gorges.",
    bestFor: "Lush landscape photography, quiet budget travel",
  },
  {
    period: "September – October",
    name: "Autumn & Apple Harvest Season",
    temp: "10°C to 20°C · Crisp Mountain Air",
    desc: "The most celebrated time in Kinnaur. Trees are laden with world-famous sweet Kinnauri apples, weather is crystal clear, and Kinner Kailash views are breathtaking.",
    bestFor: "Apple harvesting, astrophotography, Kinner Kailash views",
  },
  {
    period: "November – March",
    name: "Winter Snowfall Season",
    temp: "-5°C to 10°C · Pure White Snow",
    desc: "The valley transforms into a quiet winter wonderland. Snow blankets the roofs and orchards. Negi Cottage provides heated rooms and 24/7 hot water geysers.",
    bestFor: "Snowfall lovers, couples, peaceful fireside retreats",
  },
];

const transportOptions = [
  {
    icon: Car,
    title: "By Private Car / Self-Drive",
    desc: "Drive via NH-05 from Chandigarh/Shimla through Theog, Narkanda, Rampur Bushahr to Karcham Dam (225 km from Shimla, ~7-8 hrs). Turn right onto the Sangla Valley road. The road is paved all the way to Negi Cottage in Kupa with private roadside parking.",
  },
  {
    icon: Bus,
    title: "By Government / Private Bus",
    desc: "Daily direct HRTC buses operate from Delhi (ISBT Kashmiri Gate) and Shimla (Old Bus Stand / ISBT Tutikandi) to Sangla and Chitkul. Buses stop directly right in front of Negi Cottage at Kuppa Bus Stand.",
  },
  {
    icon: Train,
    title: "By Railway",
    desc: "The nearest broad-gauge railway stations are Kalka (KLK) and Chandigarh (CDG), located approx 310 km away. From Kalka, the UNESCO heritage Himalayan Toy Train connects to Shimla, from where taxis and buses depart for Sangla.",
  },
  {
    icon: Plane,
    title: "By Air / Flight",
    desc: "The nearest airport is Shimla Airport (Jubbarhatti, 245 km), followed by Chandigarh International Airport (IXC, 335 km), which has daily flights from all major Indian cities.",
  },
];

function TravelGuidePage() {
  return (
    <PageFrame>
      <PageHero
        image={sunrise}
        imageAlt="Sunrise over snow peaks in Sangla Valley"
        eyebrow="Practical Travel Guide · Kinnaur, Himachal Pradesh"
        title="Planning Your Trip to Sangla Valley."
        copy="Everything you need to know before visiting: how to reach, month-by-month weather, road conditions, mobile connectivity, permits, and essential packing tips."
      />

      {/* Guide Content */}
      <section className="section-pad bg-background">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          
          {/* Chapter 1: How to Reach */}
          <div className="max-w-4xl mx-auto">
            <span className="eyebrow text-terracotta">Transportation & Routes</span>
            <h2 className="mt-2 font-display text-4xl sm:text-5xl text-foreground font-normal">
              How to Reach Sangla Valley & Negi Cottage
            </h2>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed sm:text-lg">
              Sangla Valley is located in Kinnaur district of Himachal Pradesh at an average altitude of 2,600m (8,500 ft). Negi Cottage is located right along the paved main highway at <strong>Kuppa Bus Stand</strong>, just 2 km before reaching Sangla town.
            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              {transportOptions.map((opt) => {
                const Icon = opt.icon;
                return (
                  <div key={opt.title} className="rounded-2xl border border-border bg-card p-6 shadow-xs">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center h-10 w-10 rounded-xl bg-forest text-gold shrink-0">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="font-display text-xl font-bold text-foreground">{opt.title}</h3>
                    </div>
                    <p className="mt-3.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {opt.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Chapter 2: Seasons & Best Time */}
          <div className="mt-24 max-w-4xl mx-auto border-t border-border pt-16">
            <span className="eyebrow text-terracotta">Weather & Best Seasons</span>
            <h2 className="mt-2 font-display text-4xl sm:text-5xl text-foreground font-normal">
              Best Time to Visit Sangla Valley
            </h2>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              Sangla Valley offers four distinct seasonal personalities throughout the year. Choose the season that best matches your travel style:
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {seasons.map((s) => (
                <div key={s.name} className="rounded-2xl border border-border bg-card p-6 shadow-xs flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-terracotta">
                      {s.period}
                    </span>
                    <h3 className="font-display text-xl font-bold text-foreground mt-1">{s.name}</h3>
                    <p className="text-xs font-semibold text-forest mt-1">{s.temp}</p>
                    <p className="mt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-border text-[11px] text-muted-foreground">
                    <strong className="text-foreground">Ideal for:</strong> {s.bestFor}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chapter 3: Practical Essentials (Network, ATMs, Fuel, Medical) */}
          <div className="mt-24 max-w-4xl mx-auto border-t border-border pt-16">
            <span className="eyebrow text-terracotta">Practical Essentials</span>
            <h2 className="mt-2 font-display text-4xl sm:text-5xl text-foreground font-normal">
              Connectivity, ATMs, Fuel & Medical Tips
            </h2>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-xs">
                <div className="flex items-center gap-2.5 text-forest">
                  <Smartphone className="h-5 w-5 text-terracotta" />
                  <h3 className="font-display text-lg font-bold text-foreground">Mobile Network & Internet</h3>
                </div>
                <p className="mt-2.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  <strong>Jio</strong> and <strong>Airtel</strong> offer strong 4G/5G mobile signals in Kupa and Sangla town. <strong>BSNL</strong> has reliable rural connectivity throughout Kinnaur. Negi Cottage provides complimentary Wi-Fi for guests.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 shadow-xs">
                <div className="flex items-center gap-2.5 text-forest">
                  <CreditCard className="h-5 w-5 text-terracotta" />
                  <h3 className="font-display text-lg font-bold text-foreground">ATMs & Card Payments</h3>
                </div>
                <p className="mt-2.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  State Bank of India (SBI) ATM is located in Sangla main market (3 km away). While UPI payments work in most local shops, it is highly recommended to carry adequate cash for remote villages like Chitkul.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 shadow-xs">
                <div className="flex items-center gap-2.5 text-forest">
                  <Fuel className="h-5 w-5 text-terracotta" />
                  <h3 className="font-display text-lg font-bold text-foreground">Petrol Pumps & EV Charging</h3>
                </div>
                <p className="mt-2.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  An Indian Oil fuel station is operational near Sangla town. Make sure to top up your vehicle tank before embarking on the day excursion to Chitkul or onward journey to Spiti Valley.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 shadow-xs">
                <div className="flex items-center gap-2.5 text-forest">
                  <FileText className="h-5 w-5 text-terracotta" />
                  <h3 className="font-display text-lg font-bold text-foreground">Permits & Identification</h3>
                </div>
                <p className="mt-2.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  <strong>Indian Citizens:</strong> No permits required for Sangla, Chitkul, or Kalpa. Carry government photo ID (Aadhaar/Voter ID).<br />
                  <strong>Foreign Nationals:</strong> No Inner Line Permit required for Sangla Valley or Chitkul.
                </p>
              </div>
            </div>
          </div>

          {/* Chapter 4: Packing List */}
          <div className="mt-24 max-w-4xl mx-auto border-t border-border pt-16">
            <span className="eyebrow text-terracotta">What to Pack</span>
            <h2 className="mt-2 font-display text-4xl sm:text-5xl text-foreground font-normal">
              Packing Checklist for Sangla Valley
            </h2>

            <div className="mt-8 rounded-3xl border border-border bg-card p-6 sm:p-10 shadow-xs">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-muted-foreground">
                <div className="space-y-3">
                  <h4 className="font-display text-lg font-bold text-foreground">Clothing & Footwear</h4>
                  <p className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-terracotta shrink-0 mt-0.5" />
                    <span>Layered clothing: lightweight tees for daytime, warm fleece/wool for evenings</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-terracotta shrink-0 mt-0.5" />
                    <span>Heavy winter jacket, woollen cap (beanie), and gloves (especially Oct–Apr)</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-terracotta shrink-0 mt-0.5" />
                    <span>Comfortable walking / hiking shoes with good grip for orchard trails</span>
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="font-display text-lg font-bold text-foreground">Health & Essentials</h4>
                  <p className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-terracotta shrink-0 mt-0.5" />
                    <span>UV protection sunglasses and SPF 40+ sunscreen (high-altitude sun is strong)</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-terracotta shrink-0 mt-0.5" />
                    <span>Insulated thermos water bottle for warm water and tea on day trips</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-terracotta shrink-0 mt-0.5" />
                    <span>Basic motion sickness and altitude acclimatization tablets</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA to Stay at Negi Cottage */}
          <div className="mt-20 max-w-4xl mx-auto rounded-3xl bg-forest text-forest-foreground p-8 sm:p-12 text-center">
            <span className="eyebrow text-terracotta">Ready to Explore Kinnaur?</span>
            <h3 className="mt-2 font-display text-3xl sm:text-4xl font-normal text-white">
              Stay with Us at Negi Cottage, Kupa
            </h3>
            <p className="mt-4 text-sm sm:text-base text-white/80 max-w-2xl mx-auto leading-relaxed">
              Warm mountain hospitality, authentic home-cooked thalis, 24/7 hot geysers, and private apple orchard balconies from ₹1,500/night.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link to="/stay" className="button-gold text-xs font-bold">
                View Rooms & Rates
              </Link>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="button-outline-light text-xs font-bold"
              >
                <WhatsAppIcon className="h-4 w-4 text-terracotta" />
                <span>Message Host on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageFrame>
  );
}

