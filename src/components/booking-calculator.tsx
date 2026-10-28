import { CalendarDays, Minus, Plus, Sparkles } from "lucide-react";
import { useMemo, useState } from "react";
import { WhatsAppIcon } from "@/components/negi-layout";

const roomOptions = [
  { id: "single", label: "Single Room", rate: 1500, desc: "Cozy single room with attached hot geyser bath (EP Plan · Room Only)" },
  { id: "double", label: "Double Room", rate: 2000, desc: "Pine-trimmed double room with balcony / valley views (EP Plan · Room Only)" },
  { id: "family", label: "4-Bedded Family Room", rate: 3000, desc: "Spacious 4-bedded suite for family and group stays (EP Plan · Room Only)" },
] as const;

function formatDate(value: string) {
  if (!value) return "your dates";
  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(`${value}T00:00:00`));
}

export function BookingCalculator() {
  const today = new Date().toISOString().slice(0, 10);
  const tomorrow = new Date(Date.now() + 86400000).toISOString().slice(0, 10);
  const [checkIn, setCheckIn] = useState(today);
  const [checkOut, setCheckOut] = useState(tomorrow);
  const [room, setRoom] = useState<(typeof roomOptions)[number]["id"]>("double");
  const [guests, setGuests] = useState(2);

  const selectedRoom = roomOptions.find((option) => option.id === room) ?? roomOptions[0];

  const nights = useMemo(() => {
    const start = new Date(`${checkIn}T00:00:00`).getTime();
    const end = new Date(`${checkOut}T00:00:00`).getTime();
    return Number.isFinite(start) && Number.isFinite(end) && end > start
      ? Math.round((end - start) / 86400000)
      : 0;
  }, [checkIn, checkOut]);

  const total = nights * selectedRoom.rate;

  const enquiryUrl = `https://wa.me/917807215761?text=${encodeURIComponent(
    `Hello, I would like to enquire about booking a stay at Negi Cottage, Kupa.\n• Check-in: ${formatDate(
      checkIn,
    )}\n• Check-out: ${formatDate(checkOut)}\n• Room: ${selectedRoom.label} (₹${selectedRoom.rate.toLocaleString("en-IN")}/night · EP Plan - Room Only)\n• Guests: ${guests} guest${
      guests > 1 ? "s" : ""
    }\n• Duration: ${nights || 1} night${nights === 1 ? "" : "s"}\n• Estimated Total: ₹${total.toLocaleString(
      "en-IN",
    )} (EP Plan - Room Only)\nCould you please confirm availability?`,
  )}`;

  return (
    <div className="overflow-hidden rounded-3xl border border-border bg-card p-6 sm:p-10 shadow-xl transition-all">
      {/* Top Header */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-b border-border/80 pb-6">
        <div>
          <span className="eyebrow text-terracotta">Direct Homestay Rates · EP Plan</span>
          <h3 className="mt-1 font-display text-3xl sm:text-4xl font-normal text-foreground">
            Estimate Your Stay
          </h3>
          <p className="mt-1 text-xs text-muted-foreground">
            Transparent pricing with zero middleman commissions (EP Plan: Room Only). Speak directly with the host.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 self-start sm:self-center">
          <span className="rounded-full bg-forest/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-forest">
            EP Plan (Room Only)
          </span>
          <div className="flex items-center gap-1.5 rounded-full bg-soft-sand px-3 py-1 text-xs font-semibold text-forest">
            <Sparkles className="h-3.5 w-3.5 text-terracotta" />
            <span>Single: ₹1,500 · Double: ₹2,000 · 4-Bed: ₹3,000</span>
          </div>
        </div>
      </div>

      {/* Date Pickers Grid */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5 rounded-2xl border border-border bg-background p-4 transition-colors focus-within:border-forest focus-within:ring-1 focus-within:ring-forest">
          <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
            <CalendarDays className="h-3.5 w-3.5 text-terracotta" />
            Check-In Date
          </span>
          <input
            type="date"
            min={today}
            value={checkIn}
            onChange={(event) => setCheckIn(event.target.value)}
            className="w-full bg-transparent text-sm font-semibold text-foreground focus:outline-hidden"
          />
        </label>

        <label className="flex flex-col gap-1.5 rounded-2xl border border-border bg-background p-4 transition-colors focus-within:border-forest focus-within:ring-1 focus-within:ring-forest">
          <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
            <CalendarDays className="h-3.5 w-3.5 text-terracotta" />
            Check-Out Date
          </span>
          <input
            type="date"
            min={checkIn || today}
            value={checkOut}
            onChange={(event) => setCheckOut(event.target.value)}
            className="w-full bg-transparent text-sm font-semibold text-foreground focus:outline-hidden"
          />
        </label>
      </div>

      {/* Room Preference & Guests Grid */}
      <div className="mt-4 grid gap-4 sm:grid-cols-[1.5fr_1fr]">
        <label className="flex flex-col gap-1.5 rounded-2xl border border-border bg-background p-4 transition-colors focus-within:border-forest focus-within:ring-1 focus-within:ring-forest">
          <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
            Room Type
          </span>
          <select
            value={room}
            onChange={(event) => setRoom(event.target.value as typeof room)}
            className="w-full bg-transparent text-sm font-semibold text-foreground focus:outline-hidden cursor-pointer"
          >
            {roomOptions.map((option) => (
              <option key={option.id} value={option.id}>
                {option.label} · ₹{option.rate.toLocaleString("en-IN")}/night
              </option>
            ))}
          </select>
          <span className="text-[11px] text-muted-foreground">{selectedRoom.desc}</span>
        </label>

        <div className="flex flex-col justify-between rounded-2xl border border-border bg-background p-4">
          <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
            Guests
          </span>
          <div className="mt-1 flex items-center justify-between">
            <button
              type="button"
              onClick={() => setGuests((val) => Math.max(1, val - 1))}
              aria-label="Decrease guest count"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-foreground transition-all hover:border-forest hover:bg-forest hover:text-white"
            >
              <Minus className="h-4 w-4" />
            </button>
            <span className="font-display text-2xl font-bold text-foreground">
              {guests} <span className="text-xs font-normal font-sans text-muted-foreground">guest{guests > 1 ? "s" : ""}</span>
            </span>
            <button
              type="button"
              onClick={() => setGuests((val) => Math.min(10, val + 1))}
              aria-label="Increase guest count"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-foreground transition-all hover:border-forest hover:bg-forest hover:text-white"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Summary & WhatsApp Action */}
      <div className="mt-8 flex flex-col gap-6 rounded-2xl bg-soft-sand/60 p-6 border border-border/80 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
            Estimated Total ({nights > 0 ? `${nights} night${nights === 1 ? "" : "s"}` : "Select dates"}):
          </span>
          <div className="mt-1 flex items-baseline gap-2">
            <span className="font-display text-4xl sm:text-5xl font-bold text-forest">
              {nights > 0 ? `₹${total.toLocaleString("en-IN")}` : "—"}
            </span>
            {nights > 0 && (
              <span className="text-xs text-muted-foreground">
                (₹{selectedRoom.rate.toLocaleString("en-IN")} × {nights} nights)
              </span>
            )}
          </div>
          <p className="mt-1 text-[11px] text-muted-foreground">
            *EP Plan (European Plan) includes room stay only. Fresh home-cooked Himachali meals available upon order.
          </p>
        </div>

        <a
          href={enquiryUrl}
          target="_blank"
          rel="noreferrer"
          className="button-gold shrink-0 text-center"
        >
          <WhatsAppIcon className="h-4 w-4 text-white" />
          <span>Confirm on WhatsApp &rarr;</span>
        </a>
      </div>
    </div>
  );
}
