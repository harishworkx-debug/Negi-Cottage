import { createFileRoute } from "@tanstack/react-router";
import { Car, Compass, ExternalLink, MapPin, Navigation, Phone } from "lucide-react";
import { PageFrame, PageHero, directionsUrl, whatsappUrl, WhatsAppIcon } from "@/components/negi-layout";
import mountain from "@/assets/negi-cottage-mountains.png";
import exterior from "@/assets/negi-cottage-exterior.png";
import entrance from "@/assets/negi-cottage-entrance.png";
import outsideview from "@/assets/outsideview.png";
import view from "@/assets/view.png";

export const Route = createFileRoute("/location")({
  head: () => ({
    meta: [
      { title: "Location & Directions | Negi Cottage, Kupa, Sangla Valley" },
      {
        name: "description",
        content:
          "Find Negi Cottage at Kuppa Bus Stand, Kupa, Himachal Pradesh 172106. View actual photographs of the property exterior, entrance, and road accessibility.",
      },
      { property: "og:title", content: "Find Negi Cottage in Kupa" },
      {
        property: "og:description",
        content: "Directions, map, and property photos for Negi Cottage near Sangla Valley.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/location" }],
  }),
  component: LocationPage,
});

function LocationPage() {
  return (
    <PageFrame>
      <PageHero
        image={mountain}
        imageAlt="Snowy Himalayan landscape around Kupa"
        eyebrow="Prime Valley Location · Kinnaur"
        title="In the heart of Kupa."
        copy="Easily accessible right beside Kuppa Bus Stand, perfectly positioned between Sangla and Chitkul with sweeping mountain views all around."
      />

      {/* Map & Address Section */}
      <section className="bg-forest text-forest-foreground">
        <div className="grid lg:grid-cols-[0.72fr_1.28fr]">
          <div className="flex flex-col justify-center px-5 py-16 md:px-12 lg:py-24">
            <span className="eyebrow text-gold">Location & Contact</span>
            <MapPin className="mt-4 h-8 w-8 text-gold" />
            <address className="mt-4 not-italic text-lg leading-8">
              <strong className="block font-display text-3xl font-bold text-forest-foreground">
                Negi Cottage
              </strong>
              Kuppa Bus Stand, Kupa
              <br />
              Himachal Pradesh 172106, India
            </address>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href={directionsUrl} target="_blank" rel="noreferrer" className="button-gold">
                Get Directions <ExternalLink className="h-4 w-4" />
              </a>
              <a href="tel:+917807215761" className="button-outline-light">
                <Phone className="h-4 w-4" /> Call Host
              </a>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="button-outline-light">
                <WhatsAppIcon className="h-4 w-4" /> WhatsApp
              </a>
            </div>
          </div>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.2618068319944!2d78.24440711086206!3d31.43445865127477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390614d8c0b2125d%3A0x55fdf9e8aad17a56!2sNegi%20Cottage!5e0!3m2!1sen!2sin!4v1789809051469!5m2!1sen!2sin"
            className="min-h-[500px] w-full border-0 lg:min-h-[600px]"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            title="Negi Cottage location on Google Maps"
          />
        </div>
      </section>

      {/* Property Landmarks & Road Arrival */}
      <section className="section-pad bg-background">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="eyebrow text-gold-dark">Recognize the Property</span>
            <h2 className="mt-2 font-display text-4xl sm:text-5xl text-foreground">
              What to look for on your arrival
            </h2>
            <p className="mt-3 text-base text-muted-foreground">
              Here are actual pictures of the cottage exterior, road approach, and traditional entrance so you can spot Negi Cottage instantly upon reaching Kupa.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={exterior}
                  alt="Negi Cottage exterior facade"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h4 className="font-display text-lg font-semibold">Cottage Exterior</h4>
                <p className="text-xs text-muted-foreground mt-1">Multi-story architecture standing by the apple orchard.</p>
              </div>
            </div>

            <div className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={entrance}
                  alt="Carved wooden entrance"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h4 className="font-display text-lg font-semibold">Carved Entrance</h4>
                <p className="text-xs text-muted-foreground mt-1">Authentic Kinnauri wooden carvings at the front gate.</p>
              </div>
            </div>

            <div className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={outsideview}
                  alt="Sangla Valley road approach"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h4 className="font-display text-lg font-semibold">Valley Road View</h4>
                <p className="text-xs text-muted-foreground mt-1">Scenic valley roads connecting Shimla, Sangla, and Chitkul.</p>
              </div>
            </div>

            <div className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={view}
                  alt="Mountain vista around Kupa"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h4 className="font-display text-lg font-semibold">The Surrounding Vistas</h4>
                <p className="text-xs text-muted-foreground mt-1">Expansive mountain views in all directions from the property.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
