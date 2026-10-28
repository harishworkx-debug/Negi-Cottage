import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Calendar, CheckCircle2, Clock, Compass, Flame, MapPin, Moon, Mountain, Sparkles, Sun, Trees, Wind } from "lucide-react";
import { PageFrame, PageHero, whatsappUrl, WhatsAppIcon } from "@/components/negi-layout";
import SEO from "@/components/SEO";
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
      { title: "Things to Do in Sangla Valley & Kinnaur Travel Guide | Negi Cottage" },
      {
        name: "description",
        content:
          "Complete Sangla Valley travel guide and top things to do in Sangla Valley, Kinnaur: apple orchard walks, Kamru Fort hikes, Chitkul day trips, evening bonfires, and a curated 4-day Kinnaur travel itinerary.",
      },
      {
        name: "keywords",
        content:
          "Things to do in Sangla Valley, Sangla Valley travel guide, Kinnaur travel itinerary, Chitkul day trip, Kamru Fort hike, Baspa river walks, Sangla sightseeing",
      },
      { property: "og:title", content: "Things to Do in Sangla Valley & Kinnaur Travel Guide" },
      {
        property: "og:description",
        content:
          "Curated local guide: Kamru Fort, Chitkul excursions, apple orchards, Baspa river walks, and Kinnaur travel itineraries curated by Negi Cottage.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.negicottage.in/experience" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://www.negicottage.in/experience" }],
  }),
  component: ExperiencePage,
});

function ExperiencePage() {
  return (
    <PageFrame>
      <SEO
        title="Things to Do in Sangla Valley & Kinnaur Travel Guide | Negi Cottage"
        description="Complete Sangla Valley travel guide and top things to do in Sangla Valley, Kinnaur: apple orchard walks, Kamru Fort hikes, Chitkul day trips, evening bonfires, and a curated 4-day Kinnaur travel itinerary."
        path="/experience"
        image="/images/negi-cottage-cover.png"
      />
      <PageHero
        image={orchard}
        imageAlt="Apple orchards and Himalayan slopes around Negi Cottage"
        eyebrow="The Kinnaur Mountain Experience"
        title="Slow down. Breathe deeper."
        copy="A stay shaped by apple blossoms, crackling evening bonfires, cedar-scented pine walks, and pristine winter snowfalls under the gaze of the holy Kinner Kailash."
      />

      {/* Chapter 1: Evening Bonfire & Starry Skies */}
      <section className="section-pad bg-background">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-terracotta">
                <Flame className="h-4 w-4" />
                <span>Chapter 01 · Nightfall at the Cottage</span>
              </div>
              <h2 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl text-foreground font-normal">
                Crackling Bonfires & Starlit Skies
              </h2>
              <p className="mt-5 text-base text-muted-foreground leading-relaxed sm:text-lg">
                When dusk settles over the Sangla Valley, we light the evening bonfire in the open courtyard. Gather with hot cups of spiced chai or mountain kahwa, listen to local folklore, and witness the Milky Way arching across unpolluted Himalayan skies.
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-border bg-card p-5 shadow-xs">
                  <Flame className="h-6 w-6 text-terracotta" />
                  <h4 className="mt-3 font-display text-xl font-bold text-foreground">Courtyard Bonfires</h4>
                  <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                    Warmth, music, and quiet mountain camaraderie around cedar embers under open skies.
                  </p>
                </div>
                <div className="rounded-2xl border border-border bg-card p-5 shadow-xs">
                  <Moon className="h-6 w-6 text-terracotta" />
                  <h4 className="mt-3 font-display text-xl font-bold text-foreground">High-Altitude Stargazing</h4>
                  <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                    Zero city light pollution reveals breathtaking celestial views and shooting stars.
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href={`https://wa.me/917807215761?text=${encodeURIComponent(
                    "Hello, I would like to enquire about staying at Negi Cottage and having an evening courtyard bonfire.",
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="button-forest"
                >
                  <WhatsAppIcon className="h-4 w-4 text-terracotta" />
                  <span>Request a Bonfire Stay</span>
                </a>
              </div>
            </div>

            {/* Photos of bonfire & night views */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="aspect-[4/3] overflow-hidden bg-soft-sand">
                  <img
                    src={bornfire}
                    alt="Evening bonfire gathering at Negi Cottage"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-display text-lg font-bold text-foreground">Campfire Gatherings</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">Wood-fired comfort in cool mountain air.</p>
                </div>
              </div>

              <div className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="aspect-[4/3] overflow-hidden bg-soft-sand">
                  <img
                    src={nightView}
                    alt="Starry Himalayan night view"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-display text-lg font-bold text-foreground">Celestial Nights</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">Clear mountain skies above Kupa.</p>
                </div>
              </div>

              <div className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="aspect-[4/3] overflow-hidden bg-soft-sand">
                  <img
                    src={nightView1}
                    alt="Illuminated cottage exterior at night"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-display text-lg font-bold text-foreground">Nighttime Illumination</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">Warm ambient lights against mountain shadows.</p>
                </div>
              </div>

              <div className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="aspect-[4/3] overflow-hidden bg-soft-sand">
                  <img
                    src={eveningLights}
                    alt="Cottage lights at blue hour"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-display text-lg font-bold text-foreground">Twilight Blue Hour</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">Golden windows glowing in the dusk.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 2: Winter Magic & Snowfall */}
      <section className="section-pad bg-forest text-forest-foreground">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="eyebrow text-terracotta">Chapter 02 · Winter in Kinnaur</span>
            <h2 className="mt-2 font-display text-4xl sm:text-5xl lg:text-6xl text-forest-foreground font-normal">
              A Snow-Covered Himalayan Wonderland
            </h2>
            <p className="mt-4 text-forest-foreground/85 text-base sm:text-lg leading-relaxed">
              When winter arrives, Negi Cottage transforms into a fairy tale. Crisp white powdery snow blankets our cottage roof, balconies, and apple trees, creating an unforgettable alpine retreat.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="group overflow-hidden rounded-3xl border border-white/15 bg-black/25 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={snowView}
                  alt="Winter snowfall at Negi Cottage"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <span className="text-[11px] font-bold uppercase tracking-wider text-terracotta">Pristine Snow</span>
                <h4 className="mt-1 font-display text-2xl font-bold text-white">Snowfall on the Balcony</h4>
                <p className="mt-2 text-xs text-white/80 leading-relaxed">
                  Wake up to fresh snowfall resting on our handcrafted wooden verandas while sipping steaming ginger chai.
                </p>
              </div>
            </div>

            <div className="group overflow-hidden rounded-3xl border border-white/15 bg-black/25 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={snowView2}
                  alt="Frosted apple orchard branches"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <span className="text-[11px] font-bold uppercase tracking-wider text-terracotta">Frosted Orchards</span>
                <h4 className="mt-1 font-display text-2xl font-bold text-white">Winter Orchard Walks</h4>
                <p className="mt-2 text-xs text-white/80 leading-relaxed">
                  Delicate icicles and heavy snow clinging to dormant apple branches in tranquil morning silence.
                </p>
              </div>
            </div>

            <div className="group overflow-hidden rounded-3xl border border-white/15 bg-black/25 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={snowView3}
                  alt="Himalayan winter snow crests"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <span className="text-[11px] font-bold uppercase tracking-wider text-terracotta">Himalayan Peaks</span>
                <h4 className="mt-1 font-display text-2xl font-bold text-white">Glacier & Peak Vistas</h4>
                <p className="mt-2 text-xs text-white/80 leading-relaxed">
                  Sunlight dazzling off the towering snow peaks of the Kinner Kailash mountain range.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 3: Gardens, Orchards & Pine Forest Trails */}
      <section className="section-pad bg-background">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Photos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-[4/3] overflow-hidden bg-soft-sand">
                  <img
                    src={gardan}
                    alt="Lush green garden at Negi Cottage"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-display text-lg font-bold text-foreground">Cottage Lawn & Garden</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">Green grass, blooming flowers and sunshine.</p>
                </div>
              </div>

              <div className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-[4/3] overflow-hidden bg-soft-sand">
                  <img
                    src={pineTrail}
                    alt="Pine forest walking trail in Kinnaur"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-display text-lg font-bold text-foreground">Cedar Forest Trails</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">Peaceful deodar forest walks just steps away.</p>
                </div>
              </div>

              <div className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm sm:col-span-2 transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-[16/9] overflow-hidden bg-soft-sand">
                  <img
                    src={sunrise}
                    alt="Golden Himalayan sunrise"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-display text-lg font-bold text-foreground">Golden Hour Sunrises</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">Watch first light touch the sacred Kinner Kailash ridge.</p>
                </div>
              </div>
            </div>

            {/* Text description */}
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-terracotta">
                <Trees className="h-4 w-4" />
                <span>Chapter 03 · Nature & Exploration</span>
              </div>
              <h2 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl text-foreground font-normal">
                Apple Orchards & Himalayan Pine Trails
              </h2>
              <p className="mt-5 text-base text-muted-foreground leading-relaxed sm:text-lg">
                Step outside your room straight into heritage apple orchards. In spring, white and pink blossoms scent the air; in autumn, trees bend heavy with deep red Kinnauri apples ready for plucking.
              </p>
              <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                Follow winding cedar pine paths behind the cottage leading down towards the turquoise waters of the Baspa River, or sit with a book on the manicured green cottage lawn with views of the mountain peaks.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a href={whatsappUrl} target="_blank" rel="noreferrer" className="button-forest">
                  <WhatsAppIcon className="h-4 w-4 text-terracotta" /> Plan Your Experience
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 4: Sangla Valley Travel Guide & Top Things to Do */}
      <section className="section-pad bg-soft-sand/70 border-t border-border">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="eyebrow">Sangla Valley Travel Guide</span>
            <h2 className="mt-2 font-display text-4xl sm:text-5xl lg:text-6xl text-foreground font-normal">
              Top Things to Do in Sangla Valley
            </h2>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              Curated by the Negi family: the most scenic day excursions, heritage landmarks, and authentic mountain activities to experience while staying at Negi Cottage in Kupa.
            </p>
          </div>

          {/* Things to Do Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-all">
              <span className="text-[11px] font-bold uppercase tracking-wider text-terracotta">Heritage Landmark</span>
              <h3 className="font-display text-2xl font-semibold text-foreground mt-1.5">
                Explore Kamru Fort (3 km)
              </h3>
              <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">
                A 15th-century wooden tower fortress entered through multiple carved timber gates. Houses the ancient Kamakhya Devi idol and offers 360-degree panoramic views of the entire Sangla Valley.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-all">
              <span className="text-[11px] font-bold uppercase tracking-wider text-terracotta">Scenic Day Trip</span>
              <h3 className="font-display text-2xl font-semibold text-foreground mt-1.5">
                Day Excursion to Chitkul (24 km)
              </h3>
              <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">
                Drive along the turquoise Baspa River through Rakchham meadows to the legendary last inhabited village on the Indo-Tibetan border. Enjoy riverside walks and tea at "Hindustan ka Aakhri Dhaba".
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-all">
              <span className="text-[11px] font-bold uppercase tracking-wider text-terracotta">Orchard Life</span>
              <h3 className="font-display text-2xl font-semibold text-foreground mt-1.5">
                Apple Orchard Strolls
              </h3>
              <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">
                Step right outside your room into private apple orchards. Spring brings fragrant white blossoms, while late summer and autumn (Aug-Oct) reveal branches laden with juicy Kinnauri apples.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-all">
              <span className="text-[11px] font-bold uppercase tracking-wider text-terracotta">Glacial Waters</span>
              <h3 className="font-display text-2xl font-semibold text-foreground mt-1.5">
                Baspa River Walks & Angling
              </h3>
              <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">
                Take the pine path down to the sparkling Baspa River. Famous for Himalayan brown and rainbow trout, pebble beach picnics, and peaceful riverside contemplation.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-all">
              <span className="text-[11px] font-bold uppercase tracking-wider text-terracotta">Night Wonder</span>
              <h3 className="font-display text-2xl font-semibold text-foreground mt-1.5">
                Milky Way Bonfire Stargazing
              </h3>
              <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">
                Free from urban light pollution at 2,600m altitude, gather around the crackling firewood flames in our courtyard to watch shooting stars and the Milky Way arch over snow peaks.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-all">
              <span className="text-[11px] font-bold uppercase tracking-wider text-terracotta">Local Culture</span>
              <h3 className="font-display text-2xl font-semibold text-foreground mt-1.5">
                Bering Nag Temple & Bazaar
              </h3>
              <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">
                Visit the exquisite wooden Nag temple in Sangla town, famous for the Fulaich festival in September, and browse village shops for traditional green Kinnauri caps, shawls, and pure pine honey.
              </p>
            </div>
          </div>

          {/* 4-Day Kinnaur Travel Itinerary */}
          <div className="mt-16 rounded-3xl border border-border bg-card p-8 sm:p-12 shadow-md">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-6">
              <div>
                <span className="eyebrow text-terracotta">Recommended Road Trip Route</span>
                <h3 className="mt-1 font-display text-3xl sm:text-4xl font-semibold text-foreground">
                  4-Day Kinnaur Travel Itinerary
                </h3>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-forest/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-forest">
                <Clock className="h-3.5 w-3.5" /> Best Season: Apr – Nov
              </span>
            </div>

            <div className="mt-8 space-y-8">
              <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-start">
                <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-forest text-gold shrink-0 font-display text-xl font-bold">
                  01
                </div>
                <div className="flex-1">
                  <h4 className="font-display text-xl font-bold text-foreground">
                    Day 1: Drive from Shimla to Sangla Valley / Kupa (225 km · ~7-8 hrs)
                  </h4>
                  <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                    Scenic highway journey via Narkanda, Rampur Bushahr, and Sutlej gorge to Karcham dam, turning into the emerald Baspa Valley. Check into Negi Cottage, unwind with steaming ginger chai, and enjoy an evening courtyard bonfire with home-cooked Himachali dinner.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-start">
                <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-forest text-gold shrink-0 font-display text-xl font-bold">
                  02
                </div>
                <div className="flex-1">
                  <h4 className="font-display text-xl font-bold text-foreground">
                    Day 2: Kamru Fort, Sangla Bazaar & Orchard Walks
                  </h4>
                  <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                    Wake up to snow peak views from your wooden balcony. Hike up to ancient Kamru Fort (3 km), visit Badrinarayan temple, browse Sangla town's wood carving ateliers, and return to Negi Cottage for afternoon relaxation among apple trees.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-start">
                <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-forest text-gold shrink-0 font-display text-xl font-bold">
                  03
                </div>
                <div className="flex-1">
                  <h4 className="font-display text-xl font-bold text-foreground">
                    Day 3: Day Excursion to Rakchham & Chitkul (24 km)
                  </h4>
                  <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                    Drive alongside the turquoise Baspa River past Rakchham's alpine meadows to Chitkul, the last village on the Indo-Tibetan border. Stroll along the riverbanks, photograph traditional wooden houses, and return to Negi Cottage for evening tea.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-start">
                <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-forest text-gold shrink-0 font-display text-xl font-bold">
                  04
                </div>
                <div className="flex-1">
                  <h4 className="font-display text-xl font-bold text-foreground">
                    Day 4: Kalpa & Kinner Kailash Sunrise or Onward Journey
                  </h4>
                  <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                    Watch sunrise hit the holy Kinner Kailash summits. Either drive 45 km to Kalpa for the famous Roghi Suicide Point and apple orchards, or begin your relaxed return journey towards Shimla and Chandigarh.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-border flex flex-wrap items-center justify-between gap-4">
              <p className="text-xs text-muted-foreground">
                Need customized travel advice or local taxi assistance? Ask Mr. Negi directly.
              </p>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="button-forest text-xs">
                <WhatsAppIcon className="h-4 w-4 text-terracotta" /> Enquire Itinerary on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

    </PageFrame>
  );
}
