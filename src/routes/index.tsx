import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Compass, MapPin, Search, Sparkles, Star, Wallet, Wand2 } from "lucide-react";
import { SiteLayout } from "@/components/site/layout";
import { DestinationCard } from "@/components/site/destination-card";
import { destinations } from "@/data/destinations";
import heroImage from "@/assets/hero-travel.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "WanderNest AI — Luxury AI-Powered Travel Planner" },
      {
        name: "description",
        content:
          "Plan unforgettable journeys with WanderNest AI. AI itineraries, curated hotels, and trending destinations — designed for the modern wanderer.",
      },
      { property: "og:title", content: "WanderNest AI — Luxury AI Travel Planner" },
      { property: "og:description", content: "AI itineraries, curated hotels, and dreamy destinations." },
    ],
  }),
  component: HomePage,
});

const features = [
  { icon: Wand2, title: "AI itineraries", desc: "Day-by-day plans tailored to your taste, pace, and budget." },
  { icon: MapPin, title: "Hidden gems", desc: "Discover spots locals love — beyond the guidebook." },
  { icon: Wallet, title: "Smart budgeting", desc: "Live cost estimates, currency, and expense tracking." },
  { icon: Sparkles, title: "Concierge chat", desc: "Ask anything, anytime — your travel co-pilot." },
];

const testimonials = [
  { name: "Amelia R.", role: "Honeymoon in Santorini", quote: "Felt like a private travel concierge. The Santorini plan was magical down to the last sunset." },
  { name: "Daichi K.", role: "Tokyo + Kyoto, 12 days", quote: "It found ramen shops I'd never have dared to enter. Best trip of my life." },
  { name: "Zara M.", role: "Family safari", quote: "Planning for four kids in 10 minutes? Sorcery. WanderNest nailed every detail." },
];

function HomePage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative -mt-24 h-[100svh] min-h-[640px] overflow-hidden">
        <img
          src={heroImage}
          alt="Tropical paradise at sunset"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-background" />
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-transparent to-gold/20 mix-blend-overlay" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 pt-24 text-center">
          <span className="inline-flex items-center gap-2 rounded-full glass-strong px-4 py-1.5 text-xs font-medium text-white animate-[fade-up_0.6s_ease-out]">
            <Sparkles className="h-3 w-3" /> AI-crafted travel, beautifully done
          </span>
          <h1 className="mt-6 font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold text-white max-w-4xl leading-[1.05] animate-[fade-up_0.7s_ease-out_0.1s_both]">
            Wander further.<br />
            <span className="text-gradient">Plan effortlessly.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base sm:text-lg text-white/90 animate-[fade-up_0.7s_ease-out_0.2s_both]">
            From hidden Kyoto alleys to Santorini sunsets — let AI design the trip
            you've always imagined, in seconds.
          </p>

          {/* Search */}
          <div className="mt-10 w-full max-w-2xl glass-strong rounded-2xl p-2 shadow-elegant animate-[fade-up_0.7s_ease-out_0.3s_both]">
            <div className="flex items-center gap-2">
              <div className="flex flex-1 items-center gap-2 rounded-xl px-4 py-3 text-left">
                <Search className="h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Where to next? Bali, Iceland, Tokyo…"
                  className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
                />
              </div>
              <Link
                to="/planner"
                className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-hero px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow hover:opacity-95"
              >
                <Wand2 className="h-4 w-4" />
                <span className="hidden sm:inline">Plan with AI</span>
              </Link>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-white/85 text-xs sm:text-sm animate-[fade-up_0.7s_ease-out_0.4s_both]">
            <div className="flex items-center gap-2"><Star className="h-3.5 w-3.5 fill-gold text-gold" /> 4.9 from 12k+ travelers</div>
            <div className="flex items-center gap-2"><Compass className="h-3.5 w-3.5" /> 180+ destinations</div>
            <div className="flex items-center gap-2"><Sparkles className="h-3.5 w-3.5" /> Instant AI plans</div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Why WanderNest</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold">
            Travel planning, finally <span className="text-gradient">delightful</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Stop juggling 18 tabs. Tell us your dream trip — we craft a polished
            plan with stays, food, transport, and weather.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="group glass rounded-2xl p-6 hover-lift"
              style={{ animation: `fade-up 0.6s var(--ease-smooth) ${i * 0.08}s both` }}
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-hero text-primary-foreground shadow-glow">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TRENDING */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Trending now</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold max-w-xl">
              Where the world is wandering
            </h2>
          </div>
          <Link to="/explore" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all">
            Explore all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.slice(0, 6).map((d, i) => (
            <DestinationCard key={d.slug} d={d} index={i} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-hero p-10 md:p-16 shadow-elegant">
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-gold/30 blur-3xl" />
          <div className="relative grid gap-8 md:grid-cols-2 items-center">
            <div className="text-primary-foreground">
              <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight">
                Your next great trip<br />is one prompt away.
              </h2>
              <p className="mt-4 text-primary-foreground/85 max-w-md">
                Try the AI planner free. No credit card. No travel-agent calls. Just stunning itineraries you'll actually love.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/planner" className="inline-flex items-center gap-1.5 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-primary shadow-card hover:scale-[1.02] transition-transform">
                  <Wand2 className="h-4 w-4" /> Plan my trip
                </Link>
                <Link to="/explore" className="inline-flex items-center gap-1.5 rounded-xl glass-strong px-5 py-3 text-sm font-semibold text-white">
                  Browse destinations
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3 md:gap-4">
              {destinations.slice(0, 6).map((d, i) => (
                <img
                  key={d.slug}
                  src={d.image}
                  alt={d.name}
                  loading="lazy"
                  width={300}
                  height={400}
                  className="aspect-[3/4] w-full rounded-2xl object-cover shadow-card"
                  style={{ animation: `fade-up 0.6s var(--ease-smooth) ${i * 0.06}s both` }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Loved by travelers</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold">
            Stories from the road
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div key={t.name} className="glass rounded-2xl p-7 hover-lift" style={{ animation: `fade-up 0.6s var(--ease-smooth) ${i * 0.1}s both` }}>
              <div className="flex gap-0.5 text-gold">
                {[...Array(5)].map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-gold" />
                ))}
              </div>
              <p className="mt-4 text-foreground leading-relaxed">"{t.quote}"</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-hero text-primary-foreground font-semibold text-sm">
                  {t.name[0]}
                </div>
                <div>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
