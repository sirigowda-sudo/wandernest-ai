import { createFileRoute } from "@tanstack/react-router";
import { Search, SlidersHorizontal } from "lucide-react";
import { useState } from "react";
import { SiteLayout } from "@/components/site/layout";
import { DestinationCard } from "@/components/site/destination-card";
import { destinations } from "@/data/destinations";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/explore")({
  head: () => ({
    meta: [
      { title: "Explore Destinations — WanderNest AI" },
      { name: "description", content: "Discover trending destinations curated by WanderNest AI." },
      { property: "og:title", content: "Explore Destinations — WanderNest AI" },
      { property: "og:description", content: "Discover trending destinations curated by WanderNest AI." },
    ],
  }),
  component: ExplorePage,
});

const filters = ["All", "Beach", "Culture", "Adventure", "Nature", "Food", "Luxury"];

function ExplorePage() {
  const [active, setActive] = useState("All");
  const [q, setQ] = useState("");

  const list = destinations.filter((d) => {
    const matchesTag = active === "All" || d.tags.includes(active);
    const matchesQ =
      !q ||
      d.name.toLowerCase().includes(q.toLowerCase()) ||
      d.country.toLowerCase().includes(q.toLowerCase());
    return matchesTag && matchesQ;
  });

  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Explore</span>
          <h1 className="mt-3 font-display text-5xl md:text-6xl font-semibold">
            Find your <span className="text-gradient">next escape</span>
          </h1>
          <p className="mt-4 text-muted-foreground">
            Hand-picked destinations, sorted by what matters to you.
          </p>
        </div>

        <div className="mt-10 glass-strong rounded-2xl p-3 flex flex-col md:flex-row gap-3 shadow-card">
          <div className="flex flex-1 items-center gap-2 rounded-xl bg-background/50 px-4 py-2.5">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search destinations or countries…"
              className="w-full bg-transparent text-sm focus:outline-none"
            />
          </div>
          <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-4 py-2.5 text-sm font-semibold">
            <SlidersHorizontal className="h-4 w-4" />
            Filters
          </button>
        </div>

        <div className="mt-6 flex gap-2 overflow-x-auto pb-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap transition-all",
                active === f
                  ? "bg-gradient-hero text-primary-foreground shadow-glow"
                  : "glass text-muted-foreground hover:text-foreground",
              )}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((d, i) => (
            <DestinationCard key={d.slug} d={d} index={i} />
          ))}
          {list.length === 0 && (
            <div className="col-span-full text-center py-20 text-muted-foreground">
              No destinations match your search.
            </div>
          )}
        </div>
      </section>
    </SiteLayout>
  );
}
