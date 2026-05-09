import { createFileRoute } from "@tanstack/react-router";
import { Globe, Heart, Mail, MapPin, MessageCircle, Sparkles, Users } from "lucide-react";
import { SiteLayout } from "@/components/site/layout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About & Contact — WanderNest AI" },
      { name: "description", content: "Meet WanderNest AI — the team reimagining travel planning with AI." },
      { property: "og:title", content: "About — WanderNest AI" },
      { property: "og:description", content: "Reimagining travel planning with AI." },
    ],
  }),
  component: AboutPage,
});

const stats = [
  { k: "Travelers", v: "120k+", icon: Users },
  { k: "Destinations", v: "180+", icon: MapPin },
  { k: "Itineraries", v: "1.2M", icon: Sparkles },
  { k: "Countries", v: "94", icon: Globe },
];

function AboutPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-5xl px-6 py-16 text-center">
        <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Our story</span>
        <h1 className="mt-4 font-display text-5xl md:text-7xl font-semibold leading-[1.05]">
          Travel planning,<br />
          <span className="text-gradient">reimagined with AI</span>
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
          We started WanderNest because planning a trip should feel as exciting
          as taking it. Our AI does the heavy lifting — you focus on the wonder.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <div
              key={s.k}
              className="glass rounded-2xl p-6 text-center"
              style={{ animation: `fade-up 0.6s var(--ease-smooth) ${i * 0.08}s both` }}
            >
              <s.icon className="h-5 w-5 text-primary mx-auto" />
              <div className="mt-3 font-display text-3xl font-semibold text-gradient">{s.v}</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{s.k}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 grid gap-10 md:grid-cols-2 items-center">
        <div className="relative aspect-square rounded-3xl bg-gradient-aurora overflow-hidden shadow-elegant">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.4),transparent_50%)]" />
          <div className="absolute bottom-8 left-8 right-8 glass-strong rounded-2xl p-6">
            <Heart className="h-5 w-5 text-destructive" />
            <p className="mt-3 font-display text-xl">
              "We believe every trip deserves the polish of a private concierge — without the price tag."
            </p>
          </div>
        </div>
        <div>
          <h2 className="font-display text-4xl font-semibold">Built for the modern wanderer</h2>
          <p className="mt-4 text-muted-foreground">
            WanderNest AI blends AI itinerary generation with curated local
            knowledge, real-time pricing, and beautiful design — so every trip
            feels personal, polished, and a little bit magical.
          </p>
          <ul className="mt-6 space-y-3 text-sm">
            {[
              "AI that learns your travel style",
              "Verified hotel and restaurant data",
              "Real-time weather, currency, and flight deals",
              "Beautiful, shareable trip pages",
            ].map((p) => (
              <li key={p} className="flex items-start gap-2">
                <Sparkles className="h-4 w-4 text-primary mt-0.5" /> {p}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Contact */}
      <section className="mx-auto max-w-3xl px-6 pb-16">
        <div className="glass-strong rounded-3xl p-8 md:p-10 shadow-card">
          <div className="text-center">
            <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Get in touch</span>
            <h2 className="mt-3 font-display text-4xl font-semibold">Say hello</h2>
            <p className="mt-2 text-muted-foreground">We'd love to hear from you.</p>
          </div>
          <form className="mt-8 grid gap-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-4">
              <input className="rounded-xl bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary" placeholder="Your name" />
              <input className="rounded-xl bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary" placeholder="Email" type="email" />
            </div>
            <textarea rows={5} className="rounded-xl bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary resize-none" placeholder="Your message" />
            <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-hero px-6 py-3 font-semibold text-primary-foreground shadow-elegant">
              <Mail className="h-4 w-4" /> Send message
            </button>
          </form>
          <div className="mt-6 flex justify-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-1"><Mail className="h-4 w-4" /> hello@wandernest.ai</span>
            <span className="flex items-center gap-1"><MessageCircle className="h-4 w-4" /> Live chat 24/7</span>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
