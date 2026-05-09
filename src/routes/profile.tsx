import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, MapPin, Settings, Wallet } from "lucide-react";
import { SiteLayout } from "@/components/site/layout";
import { destinations } from "@/data/destinations";

export const Route = createFileRoute("/profile")({
  head: () => ({
    meta: [
      { title: "Your Profile — WanderNest AI" },
      { name: "description", content: "Saved trips, wishlist, and travel journal." },
      { property: "og:title", content: "Your Profile — WanderNest AI" },
      { property: "og:description", content: "Saved trips, wishlist, and travel journal." },
    ],
  }),
  component: ProfilePage,
});

function ProfilePage() {
  const saved = destinations.slice(0, 3);
  const wishlist = destinations.slice(3, 6);
  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="glass-strong rounded-3xl p-8 md:p-10 shadow-card flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="grid h-20 w-20 place-items-center rounded-3xl bg-gradient-hero text-primary-foreground font-display text-3xl font-semibold shadow-glow">
            A
          </div>
          <div className="flex-1">
            <h1 className="font-display text-3xl font-semibold">Amelia Rivers</h1>
            <p className="text-muted-foreground">Lisbon · 14 trips planned · Wanderlust level: ∞</p>
            <div className="mt-3 flex flex-wrap gap-2 text-xs">
              {["Foodie", "Slow travel", "Beaches", "Boutique hotels"].map((t) => (
                <span key={t} className="rounded-full bg-accent px-3 py-1 font-medium">{t}</span>
              ))}
            </div>
          </div>
          <button className="inline-flex items-center gap-1.5 rounded-xl bg-accent px-4 py-2.5 text-sm font-semibold">
            <Settings className="h-4 w-4" /> Edit profile
          </button>
        </div>

        {/* Stats */}
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { k: "Trips", v: "14" },
            { k: "Countries", v: "23" },
            { k: "Wishlist", v: "8" },
            { k: "Spent", v: "$18.4k" },
          ].map((s) => (
            <div key={s.k} className="glass rounded-2xl p-5">
              <div className="text-xs uppercase tracking-wider text-muted-foreground">{s.k}</div>
              <div className="mt-1 font-display text-3xl font-semibold text-gradient">{s.v}</div>
            </div>
          ))}
        </div>

        {/* Saved */}
        <div className="mt-12">
          <h2 className="font-display text-2xl font-semibold flex items-center gap-2">
            <Wallet className="h-5 w-5 text-primary" /> Saved trips
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {saved.map((d) => (
              <Link key={d.slug} to="/trip" className="group relative aspect-[5/4] overflow-hidden rounded-2xl shadow-card hover-lift">
                <img src={d.image} alt={d.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-4 text-white">
                  <div className="flex items-center gap-1 text-xs"><MapPin className="h-3 w-3" /> {d.country}</div>
                  <div className="font-display text-xl font-semibold">{d.name}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Wishlist */}
        <div className="mt-12">
          <h2 className="font-display text-2xl font-semibold flex items-center gap-2">
            <Heart className="h-5 w-5 text-destructive" /> Wishlist
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {wishlist.map((d) => (
              <div key={d.slug} className="glass rounded-2xl p-4 flex gap-4 hover-lift">
                <img src={d.image} alt={d.name} loading="lazy" className="h-20 w-20 rounded-xl object-cover" />
                <div>
                  <div className="text-xs text-muted-foreground">{d.country}</div>
                  <div className="font-display text-lg font-semibold">{d.name}</div>
                  <div className="text-xs text-primary mt-1">From ${d.priceFrom}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
