import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Compass, Mail } from "lucide-react";
import { SiteLayout } from "@/components/site/layout";

export const Route = createFileRoute("/forgot-password")({
  head: () => ({ meta: [{ title: "Reset password — WanderNest AI" }, { name: "description", content: "Reset your WanderNest AI password." }] }),
  component: ForgotPage,
});

function ForgotPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-md px-6 py-16">
        <div className="glass-strong rounded-3xl p-8 shadow-elegant">
          <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-hero shadow-glow">
            <Compass className="h-6 w-6 text-primary-foreground" />
          </div>
          <h1 className="mt-6 font-display text-3xl font-semibold">Forgot password?</h1>
          <p className="mt-2 text-sm text-muted-foreground">We'll send a reset link to your inbox.</p>
          <form className="mt-8 space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="flex items-center gap-2 rounded-xl border border-border bg-background px-4 py-3 focus-within:border-primary">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <input type="email" placeholder="Email address" className="w-full bg-transparent text-sm focus:outline-none" />
            </div>
            <button className="w-full inline-flex items-center justify-center gap-1.5 rounded-xl bg-gradient-hero px-5 py-3 font-semibold text-primary-foreground shadow-elegant">
              Send reset link <ArrowRight className="h-4 w-4" />
            </button>
          </form>
          <p className="mt-6 text-center text-sm text-muted-foreground">
            Remembered? <Link to="/login" className="text-primary font-semibold hover:underline">Sign in</Link>
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}
