import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ChevronLeft, ChevronRight, Filter, Sparkles, X } from "lucide-react";
import { useEffect, useState, useMemo } from "react";
import { PageFrame, PageHero, whatsappUrl, WhatsAppIcon } from "@/components/negi-layout";
import { allCottagePhotos, type CottagePhoto } from "@/lib/cottage-photos";
import mountain from "@/assets/negi-cottage-mountains.png";

type FilterCategory = "all" | "rooms" | "dining" | "views" | "winter" | "outdoor" | "experience";

const categoryFilters: { id: FilterCategory; label: string }[] = [
  { id: "all", label: "All Photos (36)" },
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
      { title: "Visual Gallery (36 Photos) | Negi Cottage, Kupa" },
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
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          {/* Category Filter Controls */}
          <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-border pb-6">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              <Filter className="h-4 w-4 text-gold-dark" />
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
                        ? "bg-forest text-gold shadow-md"
                        : "border border-border bg-card text-foreground/80 hover:border-gold hover:text-foreground"
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
                className="group relative mb-6 break-inside-avoid overflow-hidden rounded-xl border border-border/80 bg-card shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:border-gold/50"
              >
                <button
                  type="button"
                  onClick={() => setActivePhotoIndex(index)}
                  className="relative block w-full overflow-hidden text-left cursor-pointer"
                  aria-label={`Open ${photo.title} in lightbox`}
                >
                  <div className="overflow-hidden bg-muted/40">
                    <img
                      src={photo.src}
                      alt={photo.title}
                      loading="lazy"
                      className="w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>

                  {/* Badge */}
                  <span className="absolute left-3 top-3 rounded-md bg-forest/85 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-gold backdrop-blur-sm shadow-sm">
                    {photo.tag}
                  </span>

                  {/* Information Overlay */}
                  <div className="p-4 sm:p-5">
                    <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {photo.title}
                    </h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground line-clamp-2">
                      {photo.description}
                    </p>
                    <div className="mt-3 flex items-center justify-between text-[11px] font-medium text-gold-dark border-t border-border/50 pt-2.5">
                      <span>Click to expand</span>
                      <span className="inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        View Photo &rarr;
                      </span>
                    </div>
                  </div>
                </button>
              </figure>
            ))}
          </div>

          {/* Enquiry CTA Bar */}
          <div className="mt-16 flex flex-col items-start justify-between gap-6 rounded-2xl bg-forest p-8 text-forest-foreground sm:flex-row sm:items-center sm:p-12 shadow-xl">
            <div>
              <p className="eyebrow text-gold">Ready to experience this in person?</p>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl text-forest-foreground">
                Plan your stay at Negi Cottage today.
              </h2>
              <p className="mt-2 max-w-xl text-sm text-forest-foreground/75 leading-relaxed">
                Contact us on WhatsApp for direct booking, current apple season rates, and personalized travel recommendations for Sangla Valley.
              </p>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="button-gold shrink-0 px-6 py-3.5 text-sm font-semibold"
            >
              <WhatsAppIcon className="h-5 w-5" /> Enquire on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Fullscreen Lightbox Modal */}
      {activePhoto !== null && activePhotoIndex !== null && (
        <div
          className="lightbox fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label="Photo gallery lightbox"
        >
          {/* Close button */}
          <button
            type="button"
            onClick={() => setActivePhotoIndex(null)}
            className="absolute right-4 top-4 z-20 grid h-11 w-11 place-items-center rounded-full bg-black/60 text-white backdrop-blur-md transition hover:bg-black/80"
            aria-label="Close gallery"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Prev button */}
          <button
            type="button"
            onClick={() => movePhoto(-1)}
            className="absolute left-3 sm:left-6 z-20 grid h-12 w-12 place-items-center rounded-full bg-black/60 text-white backdrop-blur-md transition hover:bg-black/90 hover:scale-110"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-7 w-7" />
          </button>

          {/* Modal Container */}
          <div className="relative flex max-h-[92vh] max-w-5xl flex-col items-center overflow-hidden rounded-2xl bg-black/80 p-4 text-center text-white backdrop-blur-xl border border-white/10 shadow-2xl">
            <div className="relative max-h-[68vh] w-full overflow-hidden rounded-xl">
              <img
                src={activePhoto.src}
                alt={activePhoto.title}
                className="mx-auto max-h-[68vh] w-auto max-w-full rounded-xl object-contain"
              />
            </div>

            <div className="mt-4 max-w-2xl px-2">
              <div className="flex items-center justify-center gap-2">
                <span className="rounded bg-gold/20 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-gold">
                  {activePhoto.tag}
                </span>
                <span className="text-xs text-white/50">
                  {activePhotoIndex + 1} of {filteredPhotos.length}
                </span>
              </div>
              <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
                {activePhoto.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-white/80">
                {activePhoto.description}
              </p>

              <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2 text-xs font-bold text-forest transition hover:bg-gold-light"
                >
                  <WhatsAppIcon className="h-4 w-4" /> Book this experience on WhatsApp
                </a>
                <span className="text-xs text-white/40">Use ← → arrow keys to navigate</span>
              </div>
            </div>
          </div>

          {/* Next button */}
          <button
            type="button"
            onClick={() => movePhoto(1)}
            className="absolute right-3 sm:right-6 z-20 grid h-12 w-12 place-items-center rounded-full bg-black/60 text-white backdrop-blur-md transition hover:bg-black/90 hover:scale-110"
            aria-label="Next image"
          >
            <ChevronRight className="h-7 w-7" />
          </button>
        </div>
      )}
    </PageFrame>
  );
}
