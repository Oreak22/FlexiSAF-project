import type { ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-paper font-sans text-ink antialiased [font-synthesis:none] [text-rendering:optimizeLegibility]">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
