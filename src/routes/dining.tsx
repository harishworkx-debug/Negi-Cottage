import { createFileRoute } from "@tanstack/react-router";
import { Coffee, Flame, Heart, Sparkles, Utensils, Wheat } from "lucide-react";
import { PageFrame, PageHero, whatsappUrl, WhatsAppIcon } from "@/components/negi-layout";
import negiCottageDining from "@/assets/negi-cottage-dining.png";
import dinnerarea from "@/assets/dinnerarea.png";
import dinnerarea1 from "@/assets/dinnerarea1.png";
import dinnerarea2 from "@/assets/dinnerarea2.png";

export const Route = createFileRoute("/dining")({
  head: () => ({
    meta: [
      { title: "Authentic Himachali Dining & Cuisine | Negi Cottage, Kupa" },
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
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="eyebrow text-gold-dark">Real Photos · Fresh Food</span>
            <h2 className="mt-2 font-display text-4xl sm:text-5xl text-foreground">
              Dining Spaces at Negi Cottage
            </h2>
            <p className="mt-4 text-muted-foreground text-base leading-relaxed">
              We believe food in the Himalayas should be comforting, nourishing, and shared together. Take a look at our dining hall and family seating areas:
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {diningHighlights.map((item) => (
              <div
                key={item.title}
                className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 rounded-md bg-forest/85 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold backdrop-blur-sm">
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
      <section className="section-pad bg-warm/50">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="eyebrow text-gold-dark">Farm-to-Table Goodness</span>
              <h2 className="mt-3 font-display text-4xl sm:text-5xl text-foreground">
                Prepared with care, served with warmth.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                At Negi Cottage, meals are not mass-produced from a commercial menu. Our kitchen cooks with love, using clean mountain water, local organic vegetables, and time-honored Kinnauri techniques that keep you warm in the high altitudes.
              </p>
              <div className="mt-8 space-y-4">
                {menuDelicacies.map((item) => (
                  <div key={item.title} className="rounded-xl border border-border bg-card p-4 sm:p-5 shadow-xs">
                    <h4 className="font-display text-lg font-bold text-foreground">{item.title}</h4>
                    <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-forest p-8 text-forest-foreground sm:p-12 shadow-xl">
              <Utensils className="h-10 w-10 text-gold" />
              <h3 className="mt-6 font-display text-3xl sm:text-4xl text-forest-foreground">
                Custom Meal Requests & Dietary Needs
              </h3>
              <p className="mt-4 text-sm text-forest-foreground/80 leading-relaxed">
                Whether you prefer pure vegetarian thalis, Jain food preparations, gentle meals for kids, or warm herbal teas after an acclimatization trek, our cottage hosts are delighted to prepare custom dishes tailored to your preferences.
              </p>
              <div className="mt-8 pt-6 border-t border-forest-border">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="button-gold w-full justify-center text-sm font-semibold py-3.5"
                >
                  <WhatsAppIcon className="h-5 w-5" /> Inquire About Meals & Booking
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
