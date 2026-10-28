import { createFileRoute } from "@tanstack/react-router";
import { Car, Compass, ExternalLink, MapPin, Navigation, Phone, ShieldCheck } from "lucide-react";
import { PageFrame, PageHero, directionsUrl, whatsappUrl, WhatsAppIcon } from "@/components/negi-layout";
import SEO from "@/components/SEO";
import mountain from "@/assets/negi-cottage-mountains.png";
import exterior from "@/assets/negi-cottage-exterior.png";
import entrance from "@/assets/negi-cottage-entrance.png";
import outsideview from "@/assets/outsideview.png";
import view from "@/assets/view.png";

export const Route = createFileRoute("/location")({
  head: () => ({
    meta: [
      { title: "Homestay near Kamru Fort | Location & Route Guide, Sangla Valley" },
      {
        name: "description",
        content:
          "Looking for a homestay near Kamru Fort? Negi Cottage is located in Kupa, just 3 km (6 mins) from historic Kamru Fort, Sangla bazaar, and Baspa River, offering private roadside car parking and apple orchard peace.",
      },
      {
        name: "keywords",
        content:
          "Homestay near Kamru Fort, Negi Cottage location, how to reach Sangla Valley, Kupa Sangla distance, Sangla to Chitkul route, Kamru Fort hotel",
      },
      { property: "og:title", content: "Homestay near Kamru Fort & Sangla Valley | Negi Cottage" },
      {
        property: "og:description",
        content:
          "Directions, route distances, and property accessibility for Negi Cottage near Kamru Fort, Sangla, and Chitkul.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.negicottage.in/location" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://www.negicottage.in/location" }],
  }),
  component: LocationPage,
});

const routeGuides = [
  {
    title: "From Shimla / Chandigarh",
    distance: "225 km · ~7-8 hours",
    route: "Via NH05 through Theog, Narkanda, Rampur Bushahr, and Jeori up to Karcham, then turn towards Sangla Valley.",
    highlight: "Smooth paved highway alongside the Sutlej river gorge with sweeping valley views.",
  },
  {
    title: "Homestay near Kamru Fort & Sangla Town",
    distance: "3 km · ~6 minutes",
    route: "Negi Cottage is one of the closest and most scenic homestays near Kamru Fort. Take a quick 6-minute drive or peaceful valley walk to the ancient 15th-century wooden fortress, Badrinarayan Temple, and Sangla market.",
    highlight: "Daily convenience stores located just steps away from the cottage gate.",
  },
  {
    title: "To Chitkul (Last Indian Village)",
    distance: "24 km · ~50 minutes",
    route: "Spectacular road following the azure Baspa River through Rakchham and high alpine meadows to Chitkul.",
    highlight: "Negi Cottage is the ideal base camp before proceeding on day trips to Chitkul.",
  },
];

function LocationPage() {
  return (
    <PageFrame>
      <SEO
        title="Homestay near Kamru Fort | Location & Route Guide, Sangla Valley"
        description="Looking for a homestay near Kamru Fort? Negi Cottage is located in Kupa, just 3 km (6 mins) from historic Kamru Fort, Sangla bazaar, and Baspa River, offering private roadside car parking and apple orchard peace."
        path="/location"
        image="/images/negi-cottage-cover.png"
      />
      <PageHero
        image={mountain}
        imageAlt="Snowy Himalayan landscape around Kupa"
        eyebrow="Homestay near Kamru Fort · Sangla Valley"
        title="In the peaceful heart of Kupa."
        copy="Easily accessible right beside Kuppa Bus Stand, perfectly positioned between Sangla and Chitkul with sweeping mountain views all around."
      />

      {/* Map & Address Section */}
      <section className="bg-forest text-forest-foreground">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
            <div className="flex flex-col justify-center px-6 py-16 md:px-12 lg:py-24">
              <span className="eyebrow text-terracotta">Location & Access</span>
              <MapPin className="mt-4 h-8 w-8 text-terracotta" />
              <address className="mt-4 not-italic text-lg sm:text-xl leading-relaxed">
                <strong className="block font-display text-3xl sm:text-4xl font-normal text-forest-foreground">
                  Negi Cottage
                </strong>
                Kuppa Bus Stand, Kupa
                <br />
                Sangla Valley, Kinnaur
                <br />
                Himachal Pradesh 172106, India
              </address>

              <p className="mt-6 text-sm text-forest-foreground/80 leading-relaxed">
                Situated right beside the Kuppa bus stop with ample open parking for cars and motorcycles. No steep off-road hiking required to reach the homestay.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href={directionsUrl} target="_blank" rel="noreferrer" className="button-gold">
                  Get Directions <ExternalLink className="h-4 w-4" />
                </a>
                <a href="tel:+919816815761" className="button-outline-light">
                  <Phone className="h-4 w-4" /> Call Host
                </a>
                <a href={whatsappUrl} target="_blank" rel="noreferrer" className="button-outline-light">
                  <WhatsAppIcon className="h-4 w-4" /> WhatsApp
                </a>
              </div>
            </div>

            <div className="relative min-h-[480px] w-full bg-black/20 lg:min-h-[600px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.2618068319944!2d78.24440711086206!3d31.43445865127477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390614d8c0b2125d%3A0x55fdf9e8aad17a56!2sNegi%20Cottage!5e0!3m2!1sen!2sin!4v1789809051469!5m2!1sen!2sin"
                className="h-full w-full border-0 min-h-[480px] lg:min-h-[600px]"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Negi Cottage location on Google Maps"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Property Landmarks & Road Arrival */}
      <section className="section-pad bg-background">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="eyebrow text-terracotta">Recognize the Property</span>
            <h2 className="mt-2 font-display text-4xl sm:text-5xl lg:text-6xl text-foreground font-normal">
              What to look for on your arrival
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              Here are actual pictures of the cottage exterior, road approach, and traditional entrance so you can spot Negi Cottage instantly upon reaching Kupa.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <div className="aspect-[4/3] overflow-hidden bg-soft-sand">
                <img
                  src={exterior}
                  alt="Negi Cottage exterior facade"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <div className="p-4 sm:p-5">
                <h4 className="font-display text-xl font-bold text-foreground">Cottage Exterior</h4>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">Multi-story architecture standing by the apple orchard.</p>
              </div>
            </div>

            <div className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <div className="aspect-[4/3] overflow-hidden bg-soft-sand">
                <img
                  src={entrance}
                  alt="Carved wooden entrance"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <div className="p-4 sm:p-5">
                <h4 className="font-display text-xl font-bold text-foreground">Carved Entrance</h4>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">Authentic Kinnauri wooden carvings at the front gate.</p>
              </div>
            </div>

            <div className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <div className="aspect-[4/3] overflow-hidden bg-soft-sand">
                <img
                  src={outsideview}
                  alt="Sangla Valley road approach"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <div className="p-4 sm:p-5">
                <h4 className="font-display text-xl font-bold text-foreground">Valley Road View</h4>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">Scenic valley roads connecting Shimla, Sangla, and Chitkul.</p>
              </div>
            </div>

            <div className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <div className="aspect-[4/3] overflow-hidden bg-soft-sand">
                <img
                  src={view}
                  alt="Mountain vista around Kupa"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <div className="p-4 sm:p-5">
                <h4 className="font-display text-xl font-bold text-foreground">The Surrounding Vistas</h4>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">Expansive mountain views in all directions from the property.</p>
              </div>
            </div>
          </div>

          {/* Route Distance Guides */}
          <div className="mt-20 rounded-3xl bg-soft-sand/50 p-8 sm:p-12 border border-border">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="eyebrow text-terracotta">Travel Distance & Routes</span>
              <h3 className="mt-2 font-display text-3xl sm:text-4xl font-normal text-foreground">
                Reaching Negi Cottage
              </h3>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {routeGuides.map((guide) => (
                <div key={guide.title} className="rounded-2xl border border-border bg-card p-6 shadow-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-forest">
                      {guide.title}
                    </span>
                  </div>
                  <p className="mt-2 font-display text-2xl font-bold text-terracotta">
                    {guide.distance}
                  </p>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                    {guide.route}
                  </p>
                  <div className="mt-4 pt-4 border-t border-border/70 text-[11px] font-medium text-forest">
                    Tip: {guide.highlight}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
