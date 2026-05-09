import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Compass, Lock, Mail, User } from "lucide-react";
import { SiteLayout } from "@/components/site/layout";

export const Route = createFileRoute("/signup")({
  head: () => ({ meta: [{ title: "Create account — WanderNest AI" }, { name: "description", content: "Join WanderNest AI and start planning your next trip." }] }),
  component: SignupPage,
});

function SignupPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-md px-6 py-16">
        <div className="glass-strong rounded-3xl p-8 shadow-elegant">
          <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-hero shadow-glow">
            <Compass className="h-6 w-6 text-primary-foreground" />
          </div>
          <h1 className="mt-6 font-display text-3xl font-semibold">Start exploring</h1>
          <p className="mt-2 text-sm text-muted-foreground">Create your free WanderNest account.</p>

          <form className="mt-8 space-y-4" onSubmit={(e) => e.preventDefault()}>
            <Field icon={User} placeholder="Full name" />
            <Field icon={Mail} type="email" placeholder="Email address" />
            <Field icon={Lock} type="password" placeholder="Password" />
            <button className="w-full inline-flex items-center justify-center gap-1.5 rounded-xl bg-gradient-hero px-5 py-3 font-semibold text-primary-foreground shadow-elegant">
              Create account <ArrowRight className="h-4 w-4" />
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            Already a member? <Link to="/login" className="text-primary font-semibold hover:underline">Sign in</Link>
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
