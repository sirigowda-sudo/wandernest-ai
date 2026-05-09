import { Link } from "@tanstack/react-router";
import { Heart, MapPin, Star } from "lucide-react";
import type { Destination } from "@/data/destinations";

export function DestinationCard({ d, index = 0 }: { d: Destination; index?: number }) {
  return (
    <Link
      to="/trip"
      className="group relative block overflow-hidden rounded-3xl shadow-card hover-lift"
      style={{ animation: `fade-up 0.7s var(--ease-smooth) ${index * 0.08}s both` }}
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={d.image}
          alt={d.name}
          loading="lazy"
          width={800}
          height={1024}
          className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

        <button
          onClick={(e) => { e.preventDefault(); }}
          className="absolute top-4 right-4 grid h-10 w-10 place-items-center rounded-full glass-strong text-foreground hover:text-destructive transition-colors"
          aria-label="Save"
        >
          <Heart className="h-4 w-4" />
        </button>

        <div className="absolute top-4 left-4 flex items-center gap-1 rounded-full glass-strong px-3 py-1 text-xs font-medium">
          <Star className="h-3 w-3 fill-gold text-gold" />
          {d.rating}
        </div>

        <div className="absolute inset-x-0 bottom-0 p-5 text-white">
          <div className="flex items-center gap-1 text-xs uppercase tracking-wider opacity-90">
            <MapPin className="h-3 w-3" />
            {d.country}
          </div>
          <h3 className="font-display text-2xl font-semibold mt-1">{d.name}</h3>
          <p className="text-sm opacity-90 mt-1 line-clamp-1">{d.tagline}</p>
          <div className="mt-3 flex items-end justify-between">
            <div className="flex flex-wrap gap-1.5">
              {d.tags.slice(0, 2).map((t) => (
                <span key={t} className="rounded-full bg-white/15 backdrop-blur px-2.5 py-0.5 text-[10px] font-medium">
                  {t}
                </span>
              ))}
            </div>
            <div className="text-right">
              <div className="text-[10px] uppercase tracking-wider opacity-75">From</div>
              <div className="font-display text-lg font-semibold">${d.priceFrom}</div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
