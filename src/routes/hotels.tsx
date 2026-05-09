import { createFileRoute } from "@tanstack/react-router";
import { Heart, MapPin, Star, Wifi } from "lucide-react";
import { SiteLayout } from "@/components/site/layout";
import { destinations } from "@/data/destinations";

export const Route = createFileRoute("/hotels")({
  head: () => ({
    meta: [
      { title: "Hotels & Stays — WanderNest AI" },
      { name: "description", content: "Curated hotels and boutique stays around the world." },
      { property: "og:title", content: "Hotels & Stays — WanderNest AI" },
      { property: "og:description", content: "Curated hotels and boutique stays around the world." },
    ],
  }),
  component: HotelsPage,
});

const hotels = destinations.map((d, i) => ({
  ...d,
  hotel: ["The Cliffside Suites", "Garden Ryokan", "Alpine Chalet 1908", "Riad Lumière", "Ubud Jungle Villa", "Aurora Lodge"][i],
  amenities: ["Spa", "Wifi", "Pool", "Breakfast"],
  reviews: 240 + i * 31,
  price: d.priceFrom / 4,
}));

export function HotelsPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Stays</span>
          <h1 className="mt-3 font-display text-5xl md:text-6xl font-semibold">
            Sleep <span className="text-gradient">beautifully</span>
          </h1>
          <p className="mt-4 text-muted-foreground">
            Boutique hotels, dreamy villas, and design-forward stays.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {hotels.map((h, i) => (
            <article
              key={h.slug}
              className="group glass rounded-3xl overflow-hidden shadow-card hover-lift flex flex-col sm:flex-row"
              style={{ animation: `fade-up 0.6s var(--ease-smooth) ${i * 0.06}s both` }}
            >
              <div className="relative sm:w-2/5 aspect-[4/3] sm:aspect-auto overflow-hidden">
                <img src={h.image} alt={h.hotel} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <button className="absolute top-3 right-3 grid h-9 w-9 place-items-center rounded-full glass-strong hover:text-destructive">
                  <Heart className="h-4 w-4" />
                </button>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <MapPin className="h-3 w-3" /> {h.name}, {h.country}
                </div>
                <h3 className="mt-1 font-display text-xl font-semibold">{h.hotel}</h3>
                <div className="mt-2 flex items-center gap-1 text-sm">
                  <Star className="h-3.5 w-3.5 fill-gold text-gold" />
                  <span className="font-semibold">{h.rating}</span>
                  <span className="text-muted-foreground">· {h.reviews} reviews</span>
                </div>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {h.amenities.map((a) => (
                    <span key={a} className="rounded-full bg-accent px-2.5 py-0.5 text-[11px] font-medium flex items-center gap-1">
                      {a === "Wifi" && <Wifi className="h-3 w-3" />} {a}
                    </span>
                  ))}
                </div>
                <div className="mt-auto pt-4 flex items-end justify-between">
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground">From</div>
                    <div className="font-display text-2xl font-semibold">${Math.round(h.price)}<span className="text-sm font-normal text-muted-foreground">/night</span></div>
                  </div>
                  <button className="rounded-xl bg-gradient-hero px-4 py-2 text-sm font-semibold text-primary-foreground shadow-glow hover:opacity-95">
                    Book
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
