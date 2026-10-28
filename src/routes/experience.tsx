import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Compass, Flame, Moon, Mountain, Sparkles, Sun, Trees, Wind } from "lucide-react";
import { PageFrame, PageHero, whatsappUrl, WhatsAppIcon } from "@/components/negi-layout";
import orchard from "@/assets/negi-cottage-orchard.png";
import bornfire from "@/assets/bornfire.png";
import nightView from "@/assets/night-view.png";
import nightView1 from "@/assets/night-view1.png";
import eveningLights from "@/assets/negi-retreat-evening-lights.jpg";
import pineTrail from "@/assets/negi-retreat-pine-trail.jpg";
import gardan from "@/assets/gardan.png";
import snowView from "@/assets/snow-view.png";
import snowView2 from "@/assets/snow-view2.png";
import snowView3 from "@/assets/snow-view3.png";
import sunrise from "@/assets/negi-retreat-sunrise.jpg";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "The Himalayan Experience | Negi Cottage, Kupa" },
      {
        name: "description",
        content:
          "Discover apple orchard walks, magical evening bonfires, winter snowfall, and stargazing in Kinnaur at Negi Cottage in Sangla Valley.",
      },
      { property: "og:title", content: "The Negi Cottage Himalayan Experience" },
      {
        property: "og:description",
        content:
          "Bonfires, orchard strolls, snow-capped Kinner Kailash views, and authentic Kinnauri hospitality.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/experience" }],
  }),
  component: ExperiencePage,
});

function ExperiencePage() {
  return (
    <PageFrame>
      <PageHero
        image={orchard}
        imageAlt="Apple orchards and Himalayan slopes around Negi Cottage"
        eyebrow="The Kinnaur Mountain Experience"
        title="Slow down. Breathe deeper."
        copy="A stay shaped by apple blossoms, crackling evening bonfires, cedar-scented pine walks, and pristine winter snowfalls under the gaze of the holy Kinner Kailash."
      />

      {/* Chapter 1: Evening Bonfire & Starry Skies */}
      <section className="section-pad bg-background">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gold-dark">
                <Flame className="h-4 w-4" />
                <span>Nightfall at the Cottage</span>
              </div>
              <h2 className="mt-3 font-display text-4xl sm:text-5xl text-foreground">
                Crackling Bonfires & Starlit Skies
              </h2>
              <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                When dusk settles over the Sangla Valley, we light the evening bonfire in the open courtyard. Gather with hot cups of spiced chai or mountain kahwa, listen to local folklore, and witness the Milky Way arching across unpolluted Himalayan skies.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-xl border border-border bg-card p-4">
                  <Flame className="h-6 w-6 text-gold-dark" />
                  <h4 className="mt-2 font-display text-lg font-semibold">Courtyard Bonfires</h4>
                  <p className="mt-1 text-xs text-muted-foreground">Warmth, music, and quiet mountain camaraderie under open skies.</p>
                </div>
                <div className="rounded-xl border border-border bg-card p-4">
                  <Moon className="h-6 w-6 text-gold-dark" />
                  <h4 className="mt-2 font-display text-lg font-semibold">High-Altitude Stargazing</h4>
                  <p className="mt-1 text-xs text-muted-foreground">Zero light pollution gives you crystal-clear views of star constellations.</p>
                </div>
              </div>
            </div>

            {/* Photos of bonfire & night views */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={bornfire}
                    alt="Evening bonfire gathering at Negi Cottage"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-display text-lg font-semibold text-foreground">Campfire Gatherings</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">Wood-fired comfort in cool mountain air.</p>
                </div>
              </div>

              <div className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={nightView}
                    alt="Starry Himalayan night view"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-display text-lg font-semibold text-foreground">Celestial Nights</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">Clear mountain skies above Kupa.</p>
                </div>
              </div>

              <div className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={nightView1}
                    alt="Illuminated cottage exterior at night"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-display text-lg font-semibold text-foreground">Nighttime Illumination</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">Warm ambient lights against mountain shadows.</p>
                </div>
              </div>

              <div className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={eveningLights}
                    alt="Cottage lights at blue hour"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-display text-lg font-semibold text-foreground">Twilight Blue Hour</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">Golden windows glowing in the dusk.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 2: Winter Magic & Snowfall */}
      <section className="section-pad bg-forest text-forest-foreground">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="eyebrow text-gold">Winter in Kinnaur</span>
            <h2 className="mt-2 font-display text-4xl sm:text-5xl text-forest-foreground">
              A Snow-Covered Wonderland
            </h2>
            <p className="mt-4 text-forest-foreground/80 text-base leading-relaxed">
              When winter arrives, Negi Cottage transforms into a fairy tale. Crisp white powdery snow blankets our cottage roof, balconies, and apple trees, creating an unforgettable alpine escape.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="group overflow-hidden rounded-2xl border border-white/15 bg-black/25 backdrop-blur-sm">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={snowView}
                  alt="Winter snowfall at Negi Cottage"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-gold">Pristine Snow</span>
                <h4 className="mt-1 font-display text-2xl font-bold text-white">Snowfall on the Balcony</h4>
                <p className="mt-2 text-xs text-white/75 leading-relaxed">
                  Wake up to fresh snowfall resting on our handcrafted wooden verandas while sipping hot tea.
                </p>
              </div>
            </div>

            <div className="group overflow-hidden rounded-2xl border border-white/15 bg-black/25 backdrop-blur-sm">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={snowView2}
                  alt="Frosted apple orchard branches"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-gold">Frosted Orchards</span>
                <h4 className="mt-1 font-display text-2xl font-bold text-white">Winter Orchard Walks</h4>
                <p className="mt-2 text-xs text-white/75 leading-relaxed">
                  Delicate icicles and heavy snow clinging to dormant apple branches in tranquil morning silence.
                </p>
              </div>
            </div>

            <div className="group overflow-hidden rounded-2xl border border-white/15 bg-black/25 backdrop-blur-sm">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={snowView3}
                  alt="Himalayan winter snow crests"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-gold">Himalayan Peaks</span>
                <h4 className="mt-1 font-display text-2xl font-bold text-white">Glacier & Peak Vistas</h4>
                <p className="mt-2 text-xs text-white/75 leading-relaxed">
                  Sunlight dazzling off the towering snow peaks of the Kinner Kailash mountain range.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 3: Gardens, Orchards & Pine Forest Trails */}
      <section className="section-pad bg-background">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Photos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="group overflow-hidden rounded-2xl border border-border bg-card">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={gardan}
                    alt="Lush green garden at Negi Cottage"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-display text-lg font-semibold">Cottage Lawn & Garden</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">Green grass, blooming flowers and sunshine.</p>
                </div>
              </div>

              <div className="group overflow-hidden rounded-2xl border border-border bg-card">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={pineTrail}
                    alt="Pine forest walking trail in Kinnaur"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-display text-lg font-semibold">Cedar Forest Trails</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">Peaceful deodar forest walks just steps away.</p>
                </div>
              </div>

              <div className="group overflow-hidden rounded-2xl border border-border bg-card sm:col-span-2">
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={sunrise}
                    alt="Golden Himalayan sunrise"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-display text-lg font-semibold">Golden Hour Sunrises</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">Watch first light touch the sacred Kinner Kailash ridge.</p>
                </div>
              </div>
            </div>

            {/* Text description */}
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gold-dark">
                <Trees className="h-4 w-4" />
                <span>Nature & Exploration</span>
              </div>
              <h2 className="mt-3 font-display text-4xl sm:text-5xl text-foreground">
                Apple Orchards & Himalayan Pine Trails
              </h2>
              <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                Step outside your room straight into heritage apple orchards. In spring, white and pink blossoms scent the air; in autumn, trees bend heavy with deep red Kinnauri apples.
              </p>
              <p className="mt-3 text-base text-muted-foreground leading-relaxed">
                Follow winding cedar pine paths behind the cottage leading down towards the turquoise waters of the Baspa River, or sit with a book on the manicured green cottage lawn.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a href={whatsappUrl} target="_blank" rel="noreferrer" className="button-forest">
                  <WhatsAppIcon className="h-4 w-4" /> Plan an Experience
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
