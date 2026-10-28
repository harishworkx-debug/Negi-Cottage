import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, Coffee, Flame, Heart, Sparkles, Utensils, Wheat } from "lucide-react";
import { PageFrame, PageHero, whatsappUrl, WhatsAppIcon } from "@/components/negi-layout";
import negiCottageDining from "@/assets/negi-cottage-dining.png";
import dinnerarea from "@/assets/dinnerarea.png";
import dinnerarea1 from "@/assets/dinnerarea1.png";
import dinnerarea2 from "@/assets/dinnerarea2.png";

export const Route = createFileRoute("/dining")({
  head: () => ({
    meta: [
      { title: "Authentic Himachali Dining & Cuisine | Negi Cottage, Kupa, Sangla" },
      {
        name: "description",
        content:
          "Enjoy wholesome home-cooked Himachali and Kinnauri delicacies in the warm wood-panelled dining hall at Negi Cottage in Kupa, Sangla Valley.",
      },
      { property: "og:title", content: "Authentic Dining at Negi Cottage" },
      {
        property: "og:description",
        content:
          "Freshly prepared local dishes, steaming parathas, Kinnauri apple treats, and soothing mountain herbal teas.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/dining" }],
  }),
  component: DiningPage,
});

const diningHighlights = [
  {
    image: negiCottageDining,
    title: "Wood-Panelled Traditional Dining Hall",
    tag: "Signature Space",
    description:
      "Handcrafted timber walls and warm mountain lighting create an intimate, cozy atmosphere where guests gather to share stories and savor homestyle cooking.",
  },
  {
    image: dinnerarea,
    title: "The Cottage Feast Table",
    tag: "Homestyle Meals",
    description:
      "Spacious dining table setup tailored for slow breakfasts and hearty family dinners after days spent exploring Kinnaur and Sangla Valley.",
  },
  {
    image: dinnerarea1,
    title: "Family Dining Quarters",
    tag: "Warm Hospitality",
    description:
      "A welcoming space designed for laughter, warm cups of ginger tea, and authentic local food served straight from the cottage kitchen.",
  },
  {
    image: dinnerarea2,
    title: "Intimate Evening Dining",
    tag: "Evening Comfort",
    description:
      "As mountain temperatures drop at dusk, step into our heated dining area for steaming hot dal, organic vegetables, and freshly rolled chapatis.",
  },
];

const menuDelicacies = [
  {
    title: "Traditional Kinnauri & Himachali Dishes",
    desc: "Authentic local preparations cooked with freshly harvested ingredients, regional spices, and mountain ghee.",
  },
  {
    title: "Steaming Breakfast & Hot Mountain Chai",
    desc: "Crisp aloo and paneer parathas, homemade curd, apple preserves, and special herbal tea with Kinnaur honey.",
  },
  {
    title: "Fresh Hand-Rolled Momos & Thukpa",
    desc: "Delicate steamed dumplings and comforting Tibetan noodle soups made fresh upon guest request.",
  },
  {
    title: "Wholesome Homestay Thalis",
    desc: "Balanced comfort meals of fragrant Basmati rice, local rajma, seasonal organic greens, and crisp rotis.",
  },
  {
    title: "Jain Food Options Available",
    desc: "Specially prepared vegetarian meals without onion and garlic available on prior notice for observant guests.",
  },
  {
    title: "Bonfire Evening Snacks & Kahwa",
    desc: "Hot pakoras, roasted nuts, and aromatic saffron kahwa served around the courtyard bonfire under the stars.",
  },
];

function DiningPage() {
  return (
    <PageFrame>
      <PageHero
        image={negiCottageDining}
        imageAlt="Wood-panelled dining room at Negi Cottage"
        eyebrow="From our mountain kitchen"
        title="Authentic Himachali Flavours."
        copy="Gather in our warm, wood-panelled dining hall for wholesome homemade meals, fresh garden produce, and the heartfelt culinary hospitality of Kinnaur."
      />

      {/* Gallery of Dining Spaces */}
      <section className="section-pad bg-background">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="eyebrow text-terracotta">Real Photographs · Fresh Food</span>
            <h2 className="mt-2 font-display text-4xl sm:text-5xl lg:text-6xl text-foreground font-normal">
              Dining Spaces at Negi Cottage
            </h2>
            <p className="mt-4 text-muted-foreground text-base sm:text-lg leading-relaxed">
              We believe food in the Himalayas should be comforting, nourishing, and shared together. Take a look at our authentic wood-panelled dining hall and family seating areas:
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {diningHighlights.map((item) => (
              <div
                key={item.title}
                className="group overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-soft-sand">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 rounded-full bg-forest/90 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-forest-foreground backdrop-blur-sm">
                    {item.tag}
                  </span>
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culinary Highlights & Menu */}
      <section className="section-pad bg-soft-sand/50 border-t border-border">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="eyebrow text-terracotta">Farm-to-Table Goodness</span>
              <h2 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl text-foreground font-normal">
                Prepared with care, served with warmth.
              </h2>
              <p className="mt-5 text-base sm:text-lg leading-relaxed text-muted-foreground">
                At Negi Cottage, meals are not mass-produced from a commercial menu. Our kitchen cooks with love, using clean mountain water, local organic vegetables, and time-honored Kinnauri techniques that keep you warm in the high altitudes.
              </p>
              <div className="mt-8 space-y-4">
                {menuDelicacies.map((item) => (
                  <div key={item.title} className="rounded-2xl border border-border bg-card p-5 shadow-xs">
                    <h4 className="font-display text-xl font-bold text-foreground">{item.title}</h4>
                    <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-forest p-8 text-forest-foreground sm:p-12 lg:p-14 shadow-xl">
              <Utensils className="h-10 w-10 text-terracotta" />
              <h3 className="mt-6 font-display text-3xl sm:text-4xl text-forest-foreground font-normal">
                Pure Mountain Hospitality
              </h3>
              <p className="mt-4 text-sm sm:text-base text-forest-foreground/85 leading-relaxed">
                Whether you arrive chilled from a snowy trek to Chitkul or an early morning drive over jalori pass, the aroma of simmering dal, spiced tea, and fresh pahadi rotis will welcome you home.
              </p>

              <div className="mt-8 space-y-3.5 border-t border-white/15 pt-6 text-xs sm:text-sm text-forest-foreground/90">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-terracotta mt-0.5" />
                  <span>Wholesome breakfast served from 7:30 AM to 10:30 AM</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-terracotta mt-0.5" />
                  <span>Fresh evening snacks & chai around the bonfire</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-terracotta mt-0.5" />
                  <span>Special Jain and pure vegetarian options prepared on request</span>
                </div>
              </div>

              <div className="mt-10">
                <a
                  href={`https://wa.me/917807215761?text=${encodeURIComponent(
                    "Hello, I would like to enquire about meal options and dining at Negi Cottage.",
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="button-gold"
                >
                  <WhatsAppIcon className="h-4 w-4" /> Enquire About Dining &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
