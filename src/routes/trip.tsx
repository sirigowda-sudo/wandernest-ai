import { createFileRoute, Link } from "@tanstack/react-router";
import { Cloud, Coffee, Compass, Download, Heart, MapPin, Save, Star, Sun, Utensils, Wallet } from "lucide-react";
import { SiteLayout } from "@/components/site/layout";
import iceland from "@/assets/dest-iceland.jpg";

export const Route = createFileRoute("/trip")({
  head: () => ({
    meta: [
      { title: "Your Iceland Itinerary — WanderNest AI" },
      { name: "description", content: "Day-by-day Iceland itinerary crafted by WanderNest AI." },
      { property: "og:title", content: "Your Iceland Itinerary — WanderNest AI" },
      { property: "og:description", content: "Aurora chases, glacier walks, and lagoon soaks." },
      { property: "og:image", content: "/dest-iceland.jpg" },
    ],
  }),
  component: TripPage,
});

const days = [
  {
    day: 1,
    title: "Reykjavík arrival & Blue Lagoon soak",
    cost: 220,
    weather: "4°C · light snow",
    places: ["Hallgrímskirkja", "Harpa Concert Hall", "Blue Lagoon"],
    food: "Dill (New Nordic tasting menu)",
    transport: "Airport transfer · walking",
  },
  {
    day: 2,
    title: "Golden Circle classics",
    cost: 180,
    weather: "2°C · partly cloudy",
    places: ["Þingvellir National Park", "Geysir", "Gullfoss waterfall"],
    food: "Friðheimar tomato greenhouse",
    transport: "Rental 4x4",
  },
  {
    day: 3,
    title: "South coast & black sand",
    cost: 240,
    weather: "1°C · clear skies",
    places: ["Seljalandsfoss", "Skógafoss", "Reynisfjara beach"],
    food: "Halldórskaffi in Vík",
    transport: "Self-drive",
  },
  {
    day: 4,
    title: "Glacier hike & ice caves",
    cost: 320,
    weather: "-2°C · sunny",
    places: ["Sólheimajökull glacier", "Katla ice cave"],
    food: "Black Beach Restaurant",
    transport: "Guided tour",
  },
  {
    day: 5,
    title: "Aurora chase & farewell dinner",
    cost: 260,
    weather: "0°C · KP index 5",
    places: ["Þingvellir aurora viewpoint"],
    food: "Grillmarkaðurinn",
    transport: "Aurora tour",
  },
];

const hotels = [
  { name: "Hotel Borg by Keahotels", rating: 4.8, price: 320, tag: "Boutique" },
  { name: "Sandhotel by Keahotels", rating: 4.7, price: 280, tag: "Central" },
  { name: "Reykjavík EDITION", rating: 4.9, price: 480, tag: "Luxury" },
];

function TripPage() {
  const total = days.reduce((s, d) => s + d.cost, 0);
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[420px] overflow-hidden">
        <img src={iceland} alt="Iceland" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-background" />
        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-12">
          <div className="flex items-center gap-2 text-white/90 text-sm">
            <MapPin className="h-4 w-4" /> Reykjavík, Iceland · 5 days · Couple
          </div>
          <h1 className="mt-3 font-display text-5xl md:text-7xl font-semibold text-white max-w-3xl leading-[1.05]">
            Aurora & glacier <span className="text-gradient">getaway</span>
          </h1>
          <div className="mt-6 flex flex-wrap gap-3">
            <button className="inline-flex items-center gap-1.5 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-primary shadow-card hover:scale-[1.02] transition">
              <Save className="h-4 w-4" /> Save trip
            </button>
            <button className="inline-flex items-center gap-1.5 rounded-xl glass-strong px-4 py-2.5 text-sm font-semibold text-white">
              <Download className="h-4 w-4" /> Download PDF
            </button>
            <button className="inline-flex items-center gap-1.5 rounded-xl glass-strong px-4 py-2.5 text-sm font-semibold text-white">
              <Heart className="h-4 w-4" /> Favorite
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 grid gap-8 lg:grid-cols-[1fr_360px]">
        <div>
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { icon: Wallet, k: "Est. total", v: `$${total}` },
              { icon: Sun, k: "Weather", v: "0–4°C" },
              { icon: Compass, k: "Distance", v: "1,240 km" },
              { icon: Cloud, k: "Aurora", v: "High" },
            ].map((s) => (
              <div key={s.k} className="glass rounded-2xl p-4">
                <s.icon className="h-4 w-4 text-primary" />
                <div className="mt-2 text-[10px] uppercase tracking-wider text-muted-foreground">{s.k}</div>
                <div className="font-display text-xl font-semibold">{s.v}</div>
              </div>
            ))}
          </div>

          {/* Map placeholder */}
          <div className="mt-8 relative aspect-[16/9] overflow-hidden rounded-3xl glass shadow-card">
            <div className="absolute inset-0 bg-gradient-aurora opacity-90" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.3),transparent_40%),radial-gradient(circle_at_70%_60%,rgba(255,255,255,0.2),transparent_40%)]" />
            {[
              { x: 25, y: 60 }, { x: 40, y: 45 }, { x: 55, y: 55 }, { x: 70, y: 40 }, { x: 80, y: 65 },
            ].map((p, i) => (
              <div
                key={i}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${p.x}%`, top: `${p.y}%` }}
              >
                <div className="grid h-8 w-8 place-items-center rounded-full bg-white text-primary shadow-glow font-bold text-xs animate-[float_4s_ease-in-out_infinite]" style={{ animationDelay: `${i * 0.3}s` }}>
                  {i + 1}
                </div>
              </div>
            ))}
            <div className="absolute bottom-4 left-4 glass-strong rounded-xl px-3 py-2 text-xs font-medium">
              Interactive map · 5 stops
            </div>
          </div>

          {/* Itinerary */}
          <div className="mt-10">
            <h2 className="font-display text-3xl font-semibold">Day by day</h2>
            <div className="mt-6 space-y-4">
              {days.map((d, i) => (
                <div
                  key={d.day}
                  className="glass rounded-2xl p-6 hover-lift"
                  style={{ animation: `fade-up 0.6s var(--ease-smooth) ${i * 0.06}s both` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-hero text-primary-foreground font-display font-semibold shadow-glow">
                      {d.day}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-3 flex-wrap">
                        <h3 className="font-display text-xl font-semibold">{d.title}</h3>
                        <div className="flex items-center gap-1 text-sm font-semibold text-primary">
                          <Wallet className="h-3.5 w-3.5" /> ${d.cost}
                        </div>
                      </div>
                      <div className="mt-3 grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
                        <Row icon={MapPin} label="Places">{d.places.join(" · ")}</Row>
                        <Row icon={Utensils} label="Food">{d.food}</Row>
                        <Row icon={Compass} label="Transport">{d.transport}</Row>
                        <Row icon={Sun} label="Weather">{d.weather}</Row>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="space-y-6 lg:sticky lg:top-28 self-start">
          <div className="glass-strong rounded-2xl p-6 shadow-card">
            <h3 className="font-display text-lg font-semibold">Recommended hotels</h3>
            <div className="mt-4 space-y-3">
              {hotels.map((h) => (
                <Link key={h.name} to="/hotels" className="block rounded-xl border border-border p-3 hover:border-primary/40 hover:bg-accent/40 transition">
                  <div className="flex items-start justify-between gap-2">
                    <div className="font-semibold text-sm">{h.name}</div>
                    <div className="text-xs flex items-center gap-0.5 text-gold"><Star className="h-3 w-3 fill-gold" />{h.rating}</div>
                  </div>
                  <div className="mt-1 flex items-center justify-between text-xs text-muted-foreground">
                    <span className="rounded-full bg-accent px-2 py-0.5">{h.tag}</span>
                    <span className="font-semibold text-foreground">${h.price}/night</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="glass-strong rounded-2xl p-6">
            <h3 className="font-display text-lg font-semibold flex items-center gap-2">
              <Coffee className="h-4 w-4 text-primary" /> Packing essentials
            </h3>
            <ul className="mt-3 space-y-2 text-sm">
              {["Thermal base layers", "Waterproof boots", "Swimsuit (Blue Lagoon)", "Power adapter (Type F)", "Crampons"].map((p) => (
                <li key={p} className="flex items-center gap-2">
                  <input type="checkbox" className="accent-primary h-4 w-4 rounded" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </section>
    </SiteLayout>
  );
}

function Row({ icon: Icon, label, children }: { icon: React.ComponentType<{ className?: string }>; label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-2">
      <Icon className="h-3.5 w-3.5 mt-0.5 text-primary shrink-0" />
      <div>
        <span className="text-muted-foreground">{label}: </span>
        <span className="text-foreground">{children}</span>
      </div>
    </div>
  );
}
