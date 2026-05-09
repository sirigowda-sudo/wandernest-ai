import { Link } from "@tanstack/react-router";
import { Compass, Github, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link to="/" className="flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-hero">
              <Compass className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-display text-xl font-semibold">
              WanderNest <span className="text-gradient">AI</span>
            </span>
          </Link>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            AI-crafted journeys, hand-picked hotels, and effortless itineraries.
            Travel smarter, wander deeper.
          </p>
          <div className="mt-6 flex gap-3">
            {[Twitter, Instagram, Github].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="grid h-9 w-9 place-items-center rounded-xl border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-sm mb-4">Explore</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/explore" className="hover:text-primary">Destinations</Link></li>
            <li><Link to="/planner" className="hover:text-primary">AI Planner</Link></li>
            <li><Link to="/hotels" className="hover:text-primary">Hotels</Link></li>
            <li><Link to="/profile" className="hover:text-primary">My trips</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-sm mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-primary">About</Link></li>
            <li><Link to="/about" className="hover:text-primary">Contact</Link></li>
            <li><Link to="/login" className="hover:text-primary">Sign in</Link></li>
            <li><Link to="/signup" className="hover:text-primary">Get started</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} WanderNest AI. Crafted for wanderers.
      </div>
    </footer>
  );
}
