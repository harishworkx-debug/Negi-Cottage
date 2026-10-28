import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, Clock, HelpCircle, MapPin, MessageSquare, Phone, ShieldCheck, Wifi } from "lucide-react";
import { BookingCalculator } from "@/components/booking-calculator";
import { PageFrame, PageHero, whatsappUrl, WhatsAppIcon } from "@/components/negi-layout";
import entrance from "@/assets/negi-cottage-entrance.png";
import balcony from "@/assets/balcony.png";
import gardan from "@/assets/gardan.png";
import bornfire from "@/assets/bornfire.png";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Booking | Negi Cottage, Kupa, Sangla Valley" },
      {
        name: "description",
        content:
          "Contact Negi Cottage directly on WhatsApp or by phone for availability, seasonal rates, and booking enquiries. Kuppa Bus Stand, Sangla Valley, HP.",
      },
      { property: "og:title", content: "Book Negi Cottage Directly" },
      {
        property: "og:description",
        content: "Call or message Negi Cottage for availability and seasonal rates.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.negicottage.in/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://www.negicottage.in/contact" }],
  }),
  component: ContactPage,
});

const travelFaqs = [
  {
    q: "What are the standard check-in and check-out times?",
    a: "Standard check-in is from 12:00 PM onwards, and check-out is by 11:00 AM. We offer flexible check-in times whenever possible—just send us a WhatsApp message with your estimated arrival time.",
  },
  {
    q: "Is vehicle parking available at the property?",
    a: "Yes, we have safe, complimentary on-site parking for both cars and motorcycles right beside the cottage with easy level road access.",
  },
  {
    q: "Is there 24/7 running hot water during cold months?",
    a: "Yes, absolutely. Every private attached bathroom is equipped with a high-capacity electric water heater (geyser) providing continuous hot water even in freezing winter conditions.",
  },
  {
    q: "Which mobile networks work at Negi Cottage?",
    a: "Jio and Airtel have strong 4G/5G mobile data and call coverage at the cottage in Kupa. BSNL is also functional.",
  },
  {
    q: "Can you arrange courtyard bonfires for our group?",
    a: "Yes! We frequently organize evening wood-fired bonfires in our open courtyard with warm tea, pahadi snacks, and mountain music upon request.",
  },
  {
    q: "Are Jain and pure vegetarian meals provided?",
    a: "Yes. Our home kitchen prepares pure vegetarian meals, and Jain meals without onion and garlic can be arranged with advance notice.",
  },
];

function ContactPage() {
  return (
    <PageFrame>
      <PageHero
        image={entrance}
        imageAlt="Welcoming carved entrance to Negi Cottage"
        eyebrow="Direct Homestay Booking · Kupa"
        title="Your mountain escape begins with a message."
        copy="Speak directly with the host for live room availability, custom bonfire requests, apple orchard harvest dates, and transparent seasonal pricing."
      />

      {/* Booking Rate Calculator */}
      <section className="section-pad bg-background">
        <div className="mx-auto max-w-4xl px-6 md:px-10">
          <BookingCalculator />
        </div>
      </section>

      {/* Direct Contact Cards */}
      <section className="section-pad bg-soft-sand/50 border-t border-border">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <div className="grid gap-8 md:grid-cols-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="group rounded-3xl bg-forest p-8 text-forest-foreground sm:p-12 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <WhatsAppIcon className="h-10 w-10 text-terracotta" />
              <h2 className="mt-8 font-display text-4xl sm:text-5xl font-normal text-forest-foreground">
                Message on WhatsApp
              </h2>
              <p className="mt-3 text-sm sm:text-base text-forest-foreground/80 leading-relaxed">
                Send a pre-filled booking enquiry directly to our WhatsApp. We reply promptly with availability, live photo updates, and current seasonal tariff.
              </p>
              <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-terracotta px-6 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-md">
                Start WhatsApp Chat &rarr;
              </div>
            </a>

            <div className="rounded-3xl border border-border bg-card p-8 sm:p-12 shadow-sm">
              <Phone className="h-10 w-10 text-terracotta" />
              <h2 className="mt-8 font-display text-4xl sm:text-5xl font-normal text-foreground">
                Call Negi Cottage
              </h2>
              <a
                href="tel:+917807215761"
                className="mt-3 block font-display text-3xl sm:text-4xl font-bold text-forest hover:text-pine transition-colors"
              >
                +91 78072 15761
              </a>
              <p className="mt-2 text-xs text-muted-foreground">
                Available daily from 7:00 AM to 10:00 PM IST for road advice, route guidance, and room bookings.
              </p>

              <div className="mt-8 flex gap-3 border-t border-border pt-6">
                <MapPin className="h-5 w-5 shrink-0 text-terracotta mt-0.5" />
                <p className="text-sm leading-6 text-muted-foreground">
                  <strong className="block text-foreground font-semibold">Negi Cottage</strong>
                  Kuppa Bus Stand, Kupa
                  <br />
                  Sangla Valley, Kinnaur, Himachal Pradesh 172106
                </p>
              </div>
            </div>
          </div>

          {/* Frequently Asked Questions */}
          <div className="mt-20">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="eyebrow text-terracotta">Travel Guidance</span>
              <h3 className="mt-2 font-display text-3xl sm:text-4xl lg:text-5xl font-normal text-foreground">
                Frequently Asked Questions
              </h3>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {travelFaqs.map((faq) => (
                <div key={faq.q} className="rounded-2xl border border-border bg-card p-6 shadow-xs">
                  <h4 className="font-display text-lg font-bold text-foreground">
                    {faq.q}
                  </h4>
                  <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Homestay Photo Teaser Strip */}
          <div className="mt-20 rounded-3xl border border-border bg-card p-8 sm:p-10 shadow-xs text-center">
            <span className="eyebrow text-terracotta">A Warm Himalayan Welcome</span>
            <h3 className="mt-2 font-display text-3xl sm:text-4xl font-normal text-foreground">
              We look forward to hosting you in Kupa.
            </h3>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div className="overflow-hidden rounded-2xl bg-soft-sand border border-border">
                <img
                  src={balcony}
                  alt="Valley view balcony"
                  className="h-48 w-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <p className="p-3 text-xs font-semibold text-center text-foreground">Sunny Balconies</p>
              </div>
              <div className="overflow-hidden rounded-2xl bg-soft-sand border border-border">
                <img
                  src={gardan}
                  alt="Green lawn garden"
                  className="h-48 w-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <p className="p-3 text-xs font-semibold text-center text-foreground">Lush Lawns & Orchards</p>
              </div>
              <div className="overflow-hidden rounded-2xl bg-soft-sand border border-border">
                <img
                  src={bornfire}
                  alt="Evening bonfire"
                  className="h-48 w-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <p className="p-3 text-xs font-semibold text-center text-foreground">Evening Campfires</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
