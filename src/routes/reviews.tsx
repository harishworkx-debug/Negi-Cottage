import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, Filter, Heart, MessageSquare, Search, Sparkles, Star, ThumbsUp, Users } from "lucide-react";
import { useState, useMemo } from "react";
import { PageFrame, PageHero, whatsappUrl, WhatsAppIcon } from "@/components/negi-layout";
import { allGoogleReviews, googleReviewsStats, type GuestReview } from "@/lib/guest-reviews";
import mountain from "@/assets/negi-cottage-mountains.png";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Guest Reviews (4.6★ · 279 Reviews) | Negi Cottage, Sangla Valley" },
      {
        name: "description",
        content:
          "Read genuine Google reviews for Negi Cottage in Kupa, Sangla Valley. Rated 4.6/5 from 279+ guests praising apple orchards, Kinner Kailash views, clean rooms, and warm hospitality.",
      },
      { property: "og:title", content: "Negi Cottage Guest Reviews — 4.6/5 on Google" },
      {
        property: "og:description",
        content:
          "279 verified guest reviews praising peaceful apple orchards, hearty home-cooked food, mountain views, and the genuine hospitality of Mr. Negi.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/reviews" }],
  }),
  component: ReviewsPage,
});

function ReviewsPage() {
  const [selectedTopic, setSelectedTopic] = useState<string>("All");
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredReviews = useMemo(() => {
    return allGoogleReviews.filter((review) => {
      // Topic match
      if (selectedTopic !== "All") {
        const matchesTag = review.tags.some(
          (t) => t.toLowerCase() === selectedTopic.toLowerCase(),
        );
        if (!matchesTag) return false;
      }
      // Rating match
      if (selectedRating !== null && review.rating !== selectedRating) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesContent = review.content.toLowerCase().includes(q);
        const matchesAuthor = review.author.toLowerCase().includes(q);
        const matchesTags = review.tags.some((t) => t.toLowerCase().includes(q));
        if (!matchesContent && !matchesAuthor && !matchesTags) return false;
      }
      return true;
    });
  }, [selectedTopic, selectedRating, searchQuery]);

  return (
    <PageFrame>
      <PageHero
        image={mountain}
        imageAlt="Kinner Kailash mountains and orchards seen from Negi Cottage"
        eyebrow="Verified Google Reviews · 4.6 / 5 Rating"
        title="Real stories from the mountains."
        copy="Read genuine feedback from families, solo travelers, and groups who stayed with us amidst the apple orchards of Kupa, Sangla Valley."
      />

      <section className="section-pad bg-background">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          {/* Rating Summary Banner */}
          <div className="rounded-3xl border border-border bg-card p-6 sm:p-10 lg:p-12 shadow-sm">
            <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:items-center">
              <div>
                <span className="eyebrow text-terracotta">Google Business Rating</span>
                <div className="mt-3 flex items-baseline gap-4">
                  <span className="font-display text-6xl sm:text-7xl font-bold text-forest">4.6</span>
                  <div>
                    <div className="flex items-center text-terracotta">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-5 w-5 fill-current" />
                      ))}
                    </div>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Based on 279 Google Reviews
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
                  Guests consistently highlight our peaceful apple orchard location, warm personal hosting by Mr. Negi, delicious fresh-cooked meals, and 360-degree rooftop views.
                </p>
              </div>

              {/* Topics from Google */}
              <div className="border-t border-border pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3 flex items-center gap-2">
                  <Filter className="h-3.5 w-3.5 text-terracotta" />
                  Popular Google Review Topics:
                </p>
                <div className="flex flex-wrap gap-2">
                  {googleReviewsStats.topics.map((topic) => {
                    const isSelected = selectedTopic === topic.name;
                    return (
                      <button
                        key={topic.name}
                        type="button"
                        onClick={() => setSelectedTopic(topic.name)}
                        className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all ${
                          isSelected
                            ? "bg-forest text-forest-foreground shadow-sm scale-105"
                            : "bg-soft-sand/70 text-foreground/80 hover:bg-soft-sand hover:text-foreground"
                        }`}
                      >
                        {topic.name} <span className="opacity-60 text-[11px]">({topic.count})</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Search & Star Filters */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-border pb-6">
            <div className="relative max-w-md w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search reviews (e.g. food, bonfire, family, host, snow)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-full border border-border bg-card py-2.5 pl-11 pr-4 text-xs text-foreground placeholder:text-muted-foreground focus:outline-hidden focus:border-forest"
              />
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs text-muted-foreground font-medium">Filter by rating:</span>
              <button
                type="button"
                onClick={() => setSelectedRating(null)}
                className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                  selectedRating === null
                    ? "bg-forest text-forest-foreground"
                    : "border border-border bg-card text-foreground/80 hover:border-forest"
                }`}
              >
                All
              </button>
              <button
                type="button"
                onClick={() => setSelectedRating(5)}
                className={`flex items-center gap-1 rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                  selectedRating === 5
                    ? "bg-forest text-forest-foreground"
                    : "border border-border bg-card text-foreground/80 hover:border-forest"
                }`}
              >
                <span>5</span>
                <Star className="h-3 w-3 fill-current text-terracotta" />
              </button>
              <button
                type="button"
                onClick={() => setSelectedRating(4)}
                className={`flex items-center gap-1 rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                  selectedRating === 4
                    ? "bg-forest text-forest-foreground"
                    : "border border-border bg-card text-foreground/80 hover:border-forest"
                }`}
              >
                <span>4</span>
                <Star className="h-3 w-3 fill-current text-terracotta" />
              </button>
            </div>
          </div>

          {/* Reviews Grid */}
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredReviews.map((review) => (
              <div
                key={review.id}
                className="flex flex-col justify-between rounded-2xl border border-border bg-card p-6 sm:p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-forest/40"
              >
                <div>
                  {/* Reviewer Header */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="grid h-11 w-11 place-items-center rounded-full bg-forest text-sm font-bold text-forest-foreground">
                        {review.author.charAt(0)}
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm text-foreground">{review.author}</h3>
                        {review.badge && (
                          <p className="text-[11px] text-muted-foreground">{review.badge}</p>
                        )}
                      </div>
                    </div>
                    <span className="text-[11px] text-muted-foreground whitespace-nowrap">
                      {review.time}
                    </span>
                  </div>

                  {/* Rating Stars & Badges */}
                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex items-center text-terracotta">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`h-4 w-4 ${
                            star <= review.rating ? "fill-current" : "text-border"
                          }`}
                        />
                      ))}
                    </div>
                    {review.travelGroup && (
                      <span className="rounded-full bg-soft-sand px-2.5 py-0.5 text-[10px] font-semibold text-muted-foreground">
                        {review.travelGroup}
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <blockquote className="mt-4 text-xs sm:text-sm leading-relaxed text-foreground/90">
                    "{review.content}"
                  </blockquote>

                  {/* Highlights */}
                  {review.highlights && review.highlights.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {review.highlights.map((hl) => (
                        <span
                          key={hl}
                          className="rounded-full bg-soft-sand px-2.5 py-0.5 text-[10px] font-medium text-forest"
                        >
                          ✓ {hl}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Owner Reply if available */}
                {review.ownerResponse && (
                  <div className="mt-5 rounded-xl bg-soft-sand/60 p-3 text-[11px] border-l-2 border-terracotta text-muted-foreground">
                    <strong className="block text-foreground font-semibold">Response from Negi Cottage:</strong>
                    <p className="mt-0.5 italic">"{review.ownerResponse}"</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Box */}
          <div className="mt-16 flex flex-col items-center justify-between gap-6 rounded-3xl bg-forest p-8 text-center sm:p-12 text-forest-foreground sm:flex-row sm:text-left shadow-xl">
            <div>
              <p className="eyebrow text-terracotta">Experience it for yourself</p>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl lg:text-5xl text-forest-foreground font-normal">
                Join 275+ happy travelers at Negi Cottage.
              </h2>
              <p className="mt-2 text-sm text-forest-foreground/80 max-w-xl">
                Direct booking on WhatsApp gives you transparent rates, instant confirmation, and direct contact with the host.
              </p>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="button-gold shrink-0 px-7 py-3.5 text-xs font-bold uppercase tracking-wider"
            >
              <WhatsAppIcon className="h-4 w-4" /> Book on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
