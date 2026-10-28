import { createFileRoute } from "@tanstack/react-router";
import { Clock, HelpCircle, MapPin, MessageSquare, Phone, ShieldCheck } from "lucide-react";
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
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

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
      <section className="section-pad bg-gold-light">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <BookingCalculator />
        </div>
      </section>

      {/* Direct Contact Cards */}
      <section className="section-pad bg-background">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="group rounded-3xl bg-forest p-8 text-forest-foreground sm:p-12 shadow-lg transition-transform hover:-translate-y-1"
            >
              <WhatsAppIcon className="h-10 w-10 text-gold" />
              <h2 className="mt-8 font-display text-4xl">Message on WhatsApp</h2>
              <p className="mt-3 text-sm text-forest-foreground/75 leading-relaxed">
                Send a pre-filled booking enquiry directly to our WhatsApp. We reply promptly with availability, photos, and current tariff.
              </p>
              <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-forest">
                Start Chat &rarr;
              </div>
            </a>

            <div className="rounded-3xl border border-border bg-card p-8 sm:p-12 shadow-sm">
              <Phone className="h-10 w-10 text-gold-dark" />
              <h2 className="mt-8 font-display text-4xl">Call Negi Cottage</h2>
              <a
                href="tel:+917807215761"
                className="mt-3 block font-display text-3xl font-bold text-foreground hover:text-primary transition-colors"
              >
                +91 78072 15761
              </a>
              <p className="mt-2 text-xs text-muted-foreground">
                Available 7:00 AM – 10:00 PM IST daily for travel guidance and directions.
              </p>

              <div className="mt-8 flex gap-3 border-t border-border pt-6">
                <MapPin className="h-5 w-5 shrink-0 text-gold-dark mt-0.5" />
                <p className="text-sm leading-6 text-muted-foreground">
                  <strong className="block text-foreground font-semibold">Negi Cottage</strong>
                  Kuppa Bus Stand, Kupa
                  <br />
                  Himachal Pradesh 172106, India
                </p>
              </div>
            </div>
          </div>

          {/* Homestay Photo Teaser Strip */}
          <div className="mt-16 rounded-3xl border border-border bg-muted/30 p-6 sm:p-8">
            <h3 className="font-display text-2xl font-bold text-foreground mb-4 text-center">
              A Warm Himalayan Welcome Awaits You
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="overflow-hidden rounded-xl bg-card border border-border shadow-xs">
                <img
                  src={balcony}
                  alt="Valley view balcony"
                  className="h-44 w-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <p className="p-3 text-xs font-semibold text-center text-foreground">Sunny Balconies</p>
              </div>
              <div className="overflow-hidden rounded-xl bg-card border border-border shadow-xs">
                <img
                  src={gardan}
                  alt="Green lawn garden"
                  className="h-44 w-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <p className="p-3 text-xs font-semibold text-center text-foreground">Lush Lawns & Orchards</p>
              </div>
              <div className="overflow-hidden rounded-xl bg-card border border-border shadow-xs">
                <img
                  src={bornfire}
                  alt="Evening bonfire"
                  className="h-44 w-full object-cover transition-transform duration-500 hover:scale-105"
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
