import { createFileRoute, Link } from "@tanstack/react-router";
import { Calendar, DollarSign, Heart, MapPin, Sparkles, Users, Wand2 } from "lucide-react";
import { useState } from "react";
import { SiteLayout } from "@/components/site/layout";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/planner")({
  head: () => ({
    meta: [
      { title: "AI Trip Planner — WanderNest AI" },
      { name: "description", content: "Generate a beautiful day-by-day itinerary in seconds with WanderNest AI." },
      { property: "og:title", content: "AI Trip Planner — WanderNest AI" },
      { property: "og:description", content: "Generate a beautiful day-by-day itinerary in seconds." },
    ],
  }),
  component: PlannerPage,
});

const travelTypes = ["Solo", "Couple", "Family", "Friends"];
const interests = ["Adventure", "Food", "Nightlife", "Nature", "Shopping", "Culture", "Wellness", "Beach"];

function PlannerPage() {
  const [type, setType] = useState("Couple");
  const [picks, setPicks] = useState<string[]>(["Food", "Culture"]);
  const [days, setDays] = useState(5);
  const [budget, setBudget] = useState(2000);

  const togglePick = (i: string) =>
    setPicks((p) => (p.includes(i) ? p.filter((x) => x !== i) : [...p, i]));

  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-1.5 rounded-full glass px-3 py-1 text-xs font-medium text-primary">
            <Sparkles className="h-3 w-3" /> AI Planner
          </span>
          <h1 className="mt-4 font-display text-5xl md:text-6xl font-semibold">
            Design your <span className="text-gradient">dream trip</span>
          </h1>
          <p className="mt-4 text-muted-foreground">
            Tell us a few things. We'll craft a polished day-by-day plan in seconds.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_1fr]">
          {/* Form */}
          <div className="glass-strong rounded-3xl p-6 md:p-8 shadow-card space-y-7">
            <Field label="Destination" icon={MapPin}>
              <input
                placeholder="e.g. Lisbon, Portugal"
                defaultValue="Lisbon, Portugal"
                className="w-full bg-transparent text-base font-medium focus:outline-none"
              />
            </Field>

            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Days" icon={Calendar}>
                <div className="flex items-center gap-3">
                  <input
                    type="range" min={1} max={21} value={days}
                    onChange={(e) => setDays(+e.target.value)}
                    className="w-full accent-primary"
                  />
                  <span className="font-display text-xl font-semibold w-10 text-right">{days}</span>
                </div>
              </Field>
              <Field label="Budget (USD)" icon={DollarSign}>
                <div className="flex items-center gap-3">
                  <input
                    type="range" min={300} max={10000} step={100} value={budget}
                    onChange={(e) => setBudget(+e.target.value)}
                    className="w-full accent-primary"
                  />
                  <span className="font-display text-base font-semibold w-16 text-right">${budget}</span>
                </div>
              </Field>
            </div>

            <Field label="Travel type" icon={Users}>
              <div className="flex flex-wrap gap-2">
                {travelTypes.map((t) => (
                  <button
                    key={t}
                    onClick={() => setType(t)}
                    className={cn(
                      "rounded-full px-4 py-2 text-sm font-medium transition-all",
                      type === t
                        ? "bg-gradient-hero text-primary-foreground shadow-glow"
                        : "bg-accent text-foreground hover:bg-accent/80",
                    )}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </Field>

            <Field label="Interests" icon={Heart}>
              <div className="flex flex-wrap gap-2">
                {interests.map((i) => (
                  <button
                    key={i}
                    onClick={() => togglePick(i)}
                    className={cn(
                      "rounded-full px-3.5 py-1.5 text-sm font-medium transition-all border",
                      picks.includes(i)
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-transparent border-border text-muted-foreground hover:text-foreground hover:border-primary/40",
                    )}
                  >
                    {i}
                  </button>
                ))}
              </div>
            </Field>

            <Link
              to="/trip"
              className="group flex items-center justify-center gap-2 w-full rounded-2xl bg-gradient-hero px-6 py-4 font-semibold text-primary-foreground shadow-elegant hover:opacity-95 transition"
            >
              <Wand2 className="h-4 w-4 group-hover:rotate-12 transition" />
              Generate my itinerary
            </Link>
          </div>

          {/* Preview */}
          <div className="relative rounded-3xl overflow-hidden bg-gradient-aurora p-8 md:p-10 text-white shadow-elegant min-h-[480px]">
            <div className="absolute inset-0 bg-black/30" />
            <div className="relative">
              <div className="text-xs uppercase tracking-[0.2em] opacity-90">Live preview</div>
              <h3 className="font-display text-3xl md:text-4xl font-semibold mt-3 leading-tight">
                {days} days in Lisbon<br />for {type.toLowerCase()} travelers
              </h3>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {[
                  { k: "Daily budget", v: `$${Math.round(budget / days)}` },
                  { k: "Vibe", v: picks.slice(0, 2).join(" · ") || "Custom" },
                  { k: "Pace", v: days > 10 ? "Relaxed" : days > 5 ? "Balanced" : "Packed" },
                  { k: "Weather", v: "22° Sunny" },
                ].map((s) => (
                  <div key={s.k} className="rounded-2xl glass-strong p-4 text-foreground">
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{s.k}</div>
                    <div className="font-display text-lg font-semibold mt-1">{s.v}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 space-y-2">
                {[1, 2, 3].map((d) => (
                  <div key={d} className="rounded-2xl glass-strong p-4 text-foreground flex items-center gap-3">
                    <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-hero text-primary-foreground font-semibold text-sm">
                      {d}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-sm">Day {d}</div>
                      <div className="text-xs text-muted-foreground">
                        {d === 1 ? "Alfama wandering · Pastéis de Belém" : d === 2 ? "Sintra day trip · Pena Palace" : "Tram 28 · LX Factory · sunset"}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({
  label, icon: Icon, children,
}: { label: string; icon: React.ComponentType<{ className?: string }>; children: React.ReactNode }) {
  return (
    <div>
      <div className="flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-muted-foreground mb-3">
        <Icon className="h-3.5 w-3.5" />
        {label}
      </div>
      {children}
    </div>
  );
}
