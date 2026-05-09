import { Header } from "./header";
import { Footer } from "./footer";
import { ChatWidget } from "./chat-widget";

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-24">{children}</main>
      <Footer />
      <ChatWidget />
    </div>
  );
}
