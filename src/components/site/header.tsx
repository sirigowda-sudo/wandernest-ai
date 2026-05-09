import { Link, useLocation } from "@tanstack/react-router";
import { Compass, Heart, Menu, Moon, Sparkles, Sun, X } from "lucide-react";
import { useState } from "react";
import { useTheme } from "@/hooks/use-theme";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/explore", label: "Explore" },
  { to: "/planner", label: "AI Planner" },
  { to: "/hotels", label: "Hotels" },
  { to: "/about", label: "About" },
];

export function Header() {
  const { theme, toggle } = useTheme();
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 px-4 pt-4">
      <nav className="glass-strong mx-auto flex max-w-7xl items-center justify-between rounded-2xl px-4 py-3 shadow-card md:px-6">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-hero shadow-glow group-hover:scale-105 transition-transform">
            <Compass className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="font-display text-xl font-semibold tracking-tight">
            WanderNest <span className="text-gradient">AI</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => {
            const active = pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className={cn(
                  "relative rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  active
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {l.label}
                {active && (
                  <span className="absolute -bottom-0.5 left-3 right-3 h-0.5 rounded-full bg-gradient-hero" />
                )}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <Link
            to="/profile"
            className="hidden md:grid h-9 w-9 place-items-center rounded-xl text-muted-foreground hover:text-primary hover:bg-accent transition-colors"
            aria-label="Wishlist"
          >
            <Heart className="h-4 w-4" />
          </Link>
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="grid h-9 w-9 place-items-center rounded-xl text-muted-foreground hover:text-primary hover:bg-accent transition-colors"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <Link
            to="/planner"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-xl bg-gradient-hero px-4 py-2 text-sm font-semibold text-primary-foreground shadow-elegant hover:opacity-95 transition-opacity"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Plan trip
          </Link>
          <button
            onClick={() => setOpen((o) => !o)}
            className="md:hidden grid h-9 w-9 place-items-center rounded-xl hover:bg-accent"
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden mx-auto max-w-7xl mt-2 glass-strong rounded-2xl p-2 shadow-card animate-[fade-in_0.2s_ease-out]">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-3 text-sm font-medium hover:bg-accent"
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/login"
            onClick={() => setOpen(false)}
            className="block rounded-xl px-4 py-3 text-sm font-medium hover:bg-accent"
          >
            Sign in
          </Link>
        </div>
      )}
    </header>
  );
}
