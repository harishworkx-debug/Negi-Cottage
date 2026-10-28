import { createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight, Filter, Sparkles, X } from "lucide-react";
import { useEffect, useState, useMemo } from "react";
import { PageFrame, PageHero, whatsappUrl, WhatsAppIcon } from "@/components/negi-layout";
import { allCottagePhotos, type CottagePhoto } from "@/lib/cottage-photos";
import mountain from "@/assets/negi-cottage-mountains.png";

type FilterCategory = "all" | "rooms" | "dining" | "views" | "winter" | "outdoor" | "experience";

const categoryFilters: { id: FilterCategory; label: string }[] = [
  { id: "all", label: "All Photos" },
  { id: "rooms", label: "Rooms & Suites" },
  { id: "views", label: "Mountain Panoramas" },
  { id: "winter", label: "Snow & Winter" },
  { id: "dining", label: "Dining & Food" },
  { id: "experience", label: "Bonfire & Night" },
  { id: "outdoor", label: "Garden & Orchards" },
];

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Visual Gallery (36 Photos) | Negi Cottage, Kupa, Sangla" },
      {
        name: "description",
        content:
          "Explore the complete 36-photo gallery of Negi Cottage in Kupa: deluxe rooms, apple orchards, snowy mountain vistas, traditional dining, and evening bonfires.",
      },
      { property: "og:title", content: "Negi Cottage Complete Photo Gallery" },
      {
        property: "og:description",
        content:
          "Browse 36 authentic photographs of Negi Cottage, Sangla Valley: apple orchards, snowy winter views, comfortable rooms, and warm Himachali dining.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<FilterCategory>("all");
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  const filteredPhotos = useMemo(() => {
    if (selectedCategory === "all") return allCottagePhotos;
    return allCottagePhotos.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  const activePhoto: CottagePhoto | null =
    activePhotoIndex !== null ? filteredPhotos[activePhotoIndex] ?? null : null;

  const movePhoto = (direction: number) => {
    setActivePhotoIndex((current) => {
      if (current === null) return null;
      return (current + direction + filteredPhotos.length) % filteredPhotos.length;
    });
  };

  useEffect(() => {
    if (activePhotoIndex === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActivePhotoIndex(null);
      if (event.key === "ArrowLeft") movePhoto(-1);
      if (event.key === "ArrowRight") movePhoto(1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activePhotoIndex, filteredPhotos.length]);

  return (
    <PageFrame>
      <PageHero
        image={mountain}
        imageAlt="Himalayan peaks and apple orchards around Negi Cottage"
        eyebrow="Kinnaur Photo Archive · 36 Curated Frames"
        title="Every corner, framed by the Himalayas."
        copy="Explore all 36 authentic photographs of Negi Cottage—from cozy wood-panelled rooms and crisp snowy winters to apple orchard walks and evening bonfires under starry skies."
      />

      <section className="section-pad bg-background">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          {/* Category Filter Controls */}
          <div className="mb-12 flex flex-wrap items-center justify-between gap-4 border-b border-border pb-6">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              <Filter className="h-4 w-4 text-terracotta" />
              <span>Filter Gallery:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {categoryFilters.map((tab) => {
                const count =
                  tab.id === "all"
                    ? allCottagePhotos.length
                    : allCottagePhotos.filter((p) => p.category === tab.id).length;
                const isActive = selectedCategory === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => {
                      setSelectedCategory(tab.id);
                      setActivePhotoIndex(null);
                    }}
                    className={`rounded-full px-4 py-2 text-xs font-semibold tracking-wider transition-all duration-300 ${
                      isActive
                        ? "bg-forest text-forest-foreground shadow-md"
                        : "border border-border bg-card text-foreground/80 hover:border-forest hover:text-foreground"
                    }`}
                  >
                    {tab.label} ({count})
                  </button>
                );
              })}
            </div>
          </div>

          {/* Photo Masonry Grid */}
          <div className="columns-1 gap-6 sm:columns-2 lg:columns-3 xl:columns-4">
            {filteredPhotos.map((photo, index) => (
              <figure
                key={photo.id}
                className="group relative mb-6 break-inside-avoid overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:border-forest/40"
              >
                <button
                  type="button"
                  onClick={() => setActivePhotoIndex(index)}
                  className="relative block w-full overflow-hidden text-left cursor-pointer"
                  aria-label={`Open ${photo.title} in lightbox`}
                >
                  <div className="overflow-hidden bg-soft-sand">
                    <img
                      src={photo.src}
                      alt={photo.title}
                      loading="lazy"
                      className="w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>

                  {/* Badge */}
                  <span className="absolute left-3.5 top-3.5 rounded-full bg-forest/85 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-forest-foreground backdrop-blur-sm shadow-sm">
                    {photo.tag}
                  </span>

                  {/* Information Overlay */}
                  <div className="p-4 sm:p-5">
                    <h3 className="font-display text-xl font-bold text-foreground group-hover:text-forest transition-colors">
                      {photo.title}
                    </h3>
                    <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                      {photo.description}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-terracotta">
                      View Frame &rarr;
                    </span>
                  </div>
                </button>
              </figure>
            ))}
          </div>

          {/* Bottom booking teaser */}
          <div className="mt-20 rounded-3xl bg-soft-sand/50 p-8 sm:p-12 border border-border text-center max-w-4xl mx-auto">
            <span className="eyebrow text-terracotta">Experience It Yourself</span>
            <h3 className="mt-2 font-display text-3xl sm:text-4xl font-normal text-foreground">
              Ready to wake up to these views?
            </h3>
            <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-xl mx-auto">
              Direct booking with the host guarantees personal attention, flexible check-in times, and genuine Kinnauri hospitality.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="button-forest">
                <WhatsAppIcon className="h-4 w-4 text-terracotta" /> Enquire on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div
          role="dialog"
          aria-modal="true"
          className="lightbox fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActivePhotoIndex(null)}
        >
          <div
            className="relative flex max-h-[92vh] max-w-5xl w-full flex-col overflow-hidden rounded-3xl bg-forest/95 text-forest-foreground shadow-2xl border border-white/15"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-terracotta">
                  {activePhoto.tag}
                </span>
                <span className="text-xs text-forest-foreground/60">
                  Frame {(activePhotoIndex ?? 0) + 1} of {filteredPhotos.length}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setActivePhotoIndex(null)}
                className="rounded-full p-2 text-forest-foreground/80 hover:bg-white/10 hover:text-white transition-colors"
                aria-label="Close lightbox"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Image Stage */}
            <div className="relative flex flex-1 items-center justify-center overflow-hidden bg-black/40 min-h-[350px] sm:min-h-[480px]">
              <img
                src={activePhoto.src}
                alt={activePhoto.title}
                className="max-h-[65vh] w-auto max-w-full object-contain p-2"
              />

              {/* Prev / Next buttons */}
              <button
                type="button"
                onClick={() => movePhoto(-1)}
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white backdrop-blur-sm transition-all hover:bg-black/80"
                aria-label="Previous photo"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                type="button"
                onClick={() => movePhoto(1)}
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white backdrop-blur-sm transition-all hover:bg-black/80"
                aria-label="Next photo"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>

            {/* Bottom Caption & WhatsApp CTA */}
            <div className="flex flex-col gap-4 border-t border-white/10 p-6 sm:flex-row sm:items-center sm:justify-between bg-black/25">
              <div>
                <h3 className="font-display text-2xl font-bold text-white">
                  {activePhoto.title}
                </h3>
                <p className="mt-1 text-xs text-white/80 max-w-xl">
                  {activePhoto.description}
                </p>
              </div>
              <a
                href={`https://wa.me/917807215761?text=${encodeURIComponent(
                  `Hello, I saw "${activePhoto.title}" in the Negi Cottage gallery and would like to enquire about staying here.`,
                )}`}
                target="_blank"
                rel="noreferrer"
                className="button-gold shrink-0 text-xs"
              >
                <WhatsAppIcon className="h-4 w-4" /> Book This Experience &rarr;
              </a>
            </div>
          </div>
        </div>
      )}
    </PageFrame>
  );
}
