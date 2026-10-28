import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Calendar,
  Camera,
  CheckCircle2,
  Clock,
  Compass,
  Flame,
  Info,
  MapPin,
  Mountain,
  Navigation,
  Sparkles,
  Trees,
} from "lucide-react";
import { PageFrame, PageHero, whatsappUrl, WhatsAppIcon } from "@/components/negi-layout";
import mountain from "@/assets/negi-cottage-mountains.png";
import orchard from "@/assets/negi-cottage-orchard.png";
import bornfire from "@/assets/bornfire.png";
import view from "@/assets/view.png";
import pineTrail from "@/assets/negi-retreat-pine-trail.jpg";
import sunrise from "@/assets/negi-retreat-sunrise.jpg";
import snowView from "@/assets/snow-view.png";

export const Route = createFileRoute("/things-to-do-in-sangla")({
  head: () => ({
    meta: [
      {
        title: "Top Things to Do in Sangla Valley | Complete Sightseeing Guide",
      },
      {
        name: "description",
        content:
          "Discover the best things to do in Sangla Valley: Kamru Fort, Chitkul (Last Village of India), Baspa River trails, apple orchard strolls, Bering Nag temple, and alpine viewpoints curated by Negi Cottage.",
      },
      {
        name: "keywords",
        content:
          "Things to do in Sangla Valley, Sangla sightseeing, Kamru Fort Sangla, Chitkul day trip, Baspa river walk, places to visit in Sangla, Kinnaur tourist attractions",
      },
      {
        property: "og:title",
        content: "Top Things to Do in Sangla Valley — Sightseeing Guide",
      },
      {
        property: "og:description",
        content:
          "Your ultimate local sightseeing guide for Sangla Valley: Kamru Fort, Chitkul day trips, Baspa river walks, and apple orchards curated by Negi Cottage.",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:url",
        content: "https://www.negicottage.in/things-to-do-in-sangla",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://www.negicottage.in/things-to-do-in-sangla",
      },
    ],
  }),
  component: ThingsToDoPage,
});

const attractions = [
  {
    number: "01",
    title: "Explore Historic Kamru Fort & Badrinarayan Temple",
    distance: "3 km from Negi Cottage · ~6 min drive or 25 min walk",
    timeRequired: "1.5 – 2 hours",
    bestTime: "Morning (9:00 AM – 1:00 PM)",
    image: mountain,
    tag: "Historic Tower Fortress",
    summary:
      "Perched atop a commanding hill overlooking the Baspa River, Kamru Fort is an ancient 15th-century wooden tower fortress that once served as the throne seat of the rulers of the Bushahr Kingdom.",
    highlights: [
      "Walk through multiple ornate timber gates with wood carvings",
      "Houses the revered shrine of Kamakhya Devi idol brought from Assam centuries ago",
      "Traditional Kinnauri cap and waistband provided to guests at the gate",
      "Spectacular 360-degree panorama of the entire Sangla Valley and snow-dusted ridges",
    ],
    tips: "Wear comfortable walking shoes as there is a gentle cobblestone slope from Kamru village up to the fort gate.",
  },
  {
    number: "02",
    title: "Day Trip to Chitkul — The Last Inhabited Indian Village",
    distance: "24 km from Negi Cottage · ~50 min drive",
    timeRequired: "Half-day / 4–5 hours",
    bestTime: "Late morning to afternoon (10:00 AM – 4:00 PM)",
    image: view,
    tag: "Iconic Indo-Tibetan Border Village",
    summary:
      "Situated at an elevation of 3,450 meters (11,320 ft), Chitkul is the final inhabited settlement along the ancient Hindustan-Tibet trade route. Beyond Chitkul lies only the high Indo-Tibetan border outpost and snowy Himalayan ridges.",
    highlights: [
      "Drive along the crystal-clear azure waters of the Baspa River",
      "Traditional slate-roofed wooden houses with hand-carved balconies",
      "500-year-old Mathi Devi temple crafted in traditional Kinnauri architecture",
      "Sip hot tea and take photos at the famous 'Hindustan ka Aakhri Dhaba'",
    ],
    tips: "Temperatures can drop quickly here; carry a warm windbreaker jacket and sunglasses for high-altitude UV protection.",
  },
  {
    number: "03",
    title: "Wander Through Rakchham Meadows & Pine Woods",
    distance: "15 km from Negi Cottage · ~30 min drive",
    timeRequired: "1 – 2 hours",
    bestTime: "Mid-day stop on the way to Chitkul",
    image: pineTrail,
    tag: "Alpine Nomadic Pastures",
    summary:
      "Nestled midway between Sangla and Chitkul, Rakchham is a picturesque hamlet bounded by towering granite mountains on one side and dense cedar pine forests on the other.",
    highlights: [
      "Serene nomadic meadows dotted with grazing horses and sheep",
      "Traditional stone-and-timber houses with smoking chimneys",
      "Crystal-clear glacial stream beaches along the Baspa River",
      "One of the quietest, most peaceful photography spots in all of Kinnaur",
    ],
    tips: "Take a 30-minute stroll through the village alleys to witness traditional Kinnauri weaving and apple storage techniques.",
  },
  {
    number: "04",
    title: "Apple Orchard Walks & Farm Experiences at Negi Cottage",
    distance: "Directly outside your bedroom door in Kupa",
    timeRequired: "Flexible / 30 mins – 1 hour",
    bestTime: "Morning & Golden Hour sunset",
    image: orchard,
    tag: "Exclusive Homestay Feature",
    summary:
      "Kinnaur is world-famous for its crisp, sweet, aromatic apples. At Negi Cottage, you don't need a vehicle to experience apple cultivation—the property is surrounded by private, thriving family apple orchards.",
    highlights: [
      "April to May: Fragrant white and blush-pink apple blossoms blanket the valley",
      "August to October: Heavy red and golden Kinnauri apples ripe on the trees",
      "Learn firsthand about high-altitude organic farming from Mr. Negi",
      "Fresh morning air filled with pure pine and blossom fragrance",
    ],
    tips: "Guests visiting during harvest season (Sept–Oct) can enjoy freshly plucked organic apples right from the branches.",
  },
  {
    number: "05",
    title: "Baspa River Walks & Himalayan Trout Angling",
    distance: "500m trail from Negi Cottage down to the riverbed",
    timeRequired: "1 – 3 hours",
    bestTime: "Morning or early afternoon",
    image: sunrise,
    tag: "Glacial River Adventure",
    summary:
      "The Baspa River is the lifeblood of the valley, originating from high Himalayan glaciers and cascading down through pine forests with turquoise waters and white gravel pebble banks.",
    highlights: [
      "Follow quiet pine forest paths down from Kupa to the riverbank",
      "World-renowned for rainbow and brown trout angling (permits available locally)",
      "Unmatched tranquility with only the rushing glacial current for sound",
      "Ideal setting for a serene morning picnic or quiet reading time",
    ],
    tips: "Never attempt to swim in the river as glacial currents are strong and water temperatures are near freezing year-round.",
  },
  {
    number: "06",
    title: "Visit Bering Nag Temple & Explore Sangla Town Bazaar",
    distance: "3 km from Negi Cottage · ~6 min drive",
    timeRequired: "1 – 1.5 hours",
    bestTime: "Late afternoon (3:00 PM – 6:00 PM)",
    image: bornfire,
    tag: "Local Culture & Handicrafts",
    summary:
      "Sangla's vibrant central town is home to the revered Bering Nag temple, dedicated to the serpent deity, which forms the spiritual hub of local Kinnauri festivals like the Fulaich flower festival.",
    highlights: [
      "Exquisite wooden architecture with multi-tiered pagoda roofs",
      "Browse village shops for authentic hand-woven Kinnauri shawls and caps (Thepang)",
      "Purchase pure high-altitude mountain honey, dry wild walnuts, and dried apricots",
      "Experience the warm daily rhythm of local Himalayan mountain life",
    ],
    tips: "Local bakeries in Sangla town bake fresh apricot cakes and Tibetan steamed snacks in the afternoons.",
  },
  {
    number: "07",
    title: "Milky Way Stargazing & Evening Courtyard Bonfires",
    distance: "Right at Negi Cottage courtyard",
    timeRequired: "Evenings (7:30 PM – 10:00 PM)",
    bestTime: "Crisp clear mountain nights",
    image: snowView,
    tag: "Nighttime Magic",
    summary:
      "At 2,600 meters elevation in Kupa, with virtually zero light pollution and razor-sharp mountain air, the night sky transforms into an astronomical spectacle.",
    highlights: [
      "Unobstructed views of the Milky Way arching directly over the Kinner Kailash ridge",
      "Warm courtyard firewood bonfire with fellow travelers and the Negi family",
      "Hot cups of ginger tea, music, and local Himalayan storytelling",
      "Shooting stars visible regularly during clear moonless nights",
    ],
    tips: "Carry your smartphone tripod or DSLR camera with wide-angle lens for stunning long-exposure astrophotography.",
  },
];

function ThingsToDoPage() {
  return (
    <PageFrame>
      <PageHero
        image={mountain}
        imageAlt="Panoramic mountain landscape of Sangla Valley"
        eyebrow="Sangla Valley Sightseeing Guide · Kinnaur"
        title="Top Things to Do in Sangla Valley."
        copy="From ancient 15th-century wooden fortresses and the legendary border village of Chitkul to peaceful apple orchard trails and trout river walks, discover the finest attractions in the valley."
      />

      {/* Intro overview */}
      <section className="section-pad bg-background">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <div className="max-w-3xl">
            <span className="eyebrow text-terracotta">Curated by Negi Cottage · Kupa</span>
            <h2 className="mt-2 font-display text-4xl sm:text-5xl text-foreground font-normal">
              Explore the Valley at Your Own Pace
            </h2>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed sm:text-lg">
              Sangla Valley (also known as the Baspa Valley) is celebrated as one of the most scenic valleys in the entire Indian Himalayas. Positioned ideally in Kupa (2 km before Sangla town), Negi Cottage serves as the perfect basecamp for visiting every landmark below without long commuting times.
            </p>
          </div>

          {/* Attraction Cards */}
          <div className="mt-14 space-y-16">
            {attractions.map((item) => (
              <article
                key={item.number}
                className="grid gap-8 lg:grid-cols-12 items-stretch rounded-3xl border border-border bg-card p-6 sm:p-10 shadow-xs hover:shadow-md transition-all"
              >
                {/* Visual Side */}
                <div className="lg:col-span-5 flex flex-col justify-between overflow-hidden rounded-2xl bg-muted aspect-[4/3] lg:aspect-auto">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Content Side */}
                <div className="lg:col-span-7 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="font-display text-lg font-bold text-terracotta">
                        {item.number}
                      </span>
                      <span className="rounded-full bg-forest/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-forest">
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="mt-3 font-display text-2xl sm:text-3xl font-semibold text-foreground">
                      {item.title}
                    </h3>

                    {/* Metadata chips */}
                    <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-muted-foreground border-y border-border py-2.5">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5 text-terracotta" />
                        <strong>Distance:</strong> {item.distance}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5 text-terracotta" />
                        <strong>Time:</strong> {item.timeRequired}
                      </span>
                    </div>

                    <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {item.summary}
                    </p>

                    {/* Highlights bullet points */}
                    <div className="mt-5 space-y-2">
                      <strong className="block text-xs font-bold uppercase tracking-wider text-foreground">
                        Key Highlights:
                      </strong>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-muted-foreground">
                        {item.highlights.map((h) => (
                          <li key={h} className="flex items-start gap-2">
                            <CheckCircle2 className="h-3.5 w-3.5 text-terracotta shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Local Tip Box */}
                  <div className="mt-6 rounded-xl bg-soft-sand p-3.5 text-xs text-muted-foreground border border-border/60">
                    <strong className="text-foreground">Local Host Tip:</strong> {item.tips}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Bottom Host Booking Advice */}
          <div className="mt-16 rounded-3xl bg-forest text-forest-foreground p-8 sm:p-12 text-center">
            <span className="eyebrow text-terracotta">Basecamp for Sangla Sightseeing</span>
            <h3 className="mt-2 font-display text-3xl sm:text-4xl font-normal text-white">
              Stay Close to Every Sangla Attraction
            </h3>
            <p className="mt-4 text-sm sm:text-base text-white/80 max-w-2xl mx-auto leading-relaxed">
              Negi Cottage in Kupa puts you just 6 minutes from Kamru Fort and 50 minutes from Chitkul, with secure private parking and home-cooked Himachali meals waiting for your return.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link to="/stay" className="button-gold text-xs font-bold">
                View Rooms & Rates (From ₹1,500)
              </Link>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="button-outline-light text-xs font-bold"
              >
                <WhatsAppIcon className="h-4 w-4 text-terracotta" />
                <span>Ask Mr. Negi for Local Travel Advice</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageFrame>
  );
}

