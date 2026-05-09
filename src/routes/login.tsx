import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Compass, Lock, Mail } from "lucide-react";
import { SiteLayout } from "@/components/site/layout";

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [{ title: "Sign in — WanderNest AI" }, { name: "description", content: "Sign in to plan and save trips with WanderNest AI." }] }),
  component: LoginPage,
});

function LoginPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-md px-6 py-16">
        <div className="glass-strong rounded-3xl p-8 shadow-elegant">
          <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-hero shadow-glow">
            <Compass className="h-6 w-6 text-primary-foreground" />
          </div>
          <h1 className="mt-6 font-display text-3xl font-semibold">Welcome back</h1>
          <p className="mt-2 text-sm text-muted-foreground">Sign in to continue planning.</p>

          <form className="mt-8 space-y-4" onSubmit={(e) => e.preventDefault()}>
            <Field icon={Mail} type="email" placeholder="Email address" />
            <Field icon={Lock} type="password" placeholder="Password" />
            <div className="flex items-center justify-between text-xs">
              <label className="flex items-center gap-2 text-muted-foreground">
                <input type="checkbox" className="accent-primary" /> Remember me
              </label>
              <Link to="/forgot-password" className="text-primary font-medium hover:underline">Forgot?</Link>
            </div>
            <button className="w-full inline-flex items-center justify-center gap-1.5 rounded-xl bg-gradient-hero px-5 py-3 font-semibold text-primary-foreground shadow-elegant">
              Sign in <ArrowRight className="h-4 w-4" />
            </button>
          </form>

          <div className="my-6 flex items-center gap-3 text-xs text-muted-foreground">
            <div className="h-px flex-1 bg-border" /> or <div className="h-px flex-1 bg-border" />
          </div>
          <button className="w-full rounded-xl border border-border bg-background px-5 py-3 font-medium text-sm hover:bg-accent">
            Continue with Google
          </button>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            New here? <Link to="/signup" className="text-primary font-semibold hover:underline">Create an account</Link>
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({ icon: Icon, ...rest }: { icon: React.ComponentType<{ className?: string }> } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="flex items-center gap-2 rounded-xl border border-border bg-background px-4 py-3 focus-within:border-primary">
      <Icon className="h-4 w-4 text-muted-foreground" />
      <input {...rest} className="w-full bg-transparent text-sm focus:outline-none" />
    </div>
  );
}
