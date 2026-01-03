"use client";

import { Navbar } from "./navbar";
import { Features } from "./features";
import { CTA } from "./cta";
import { SocialProof } from "./social-proof";
import { Installation } from "./installation";
import { Footer } from "./footer";
import Hero from "./hero";
import { InteractivePreview } from "./interactive-preview";

export function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col font-sans bg-background text-foreground antialiased selection:bg-primary/20 selection:text-primary">
      <Navbar />

      <main className="flex-1">
        <Hero />
        <SocialProof />
        <Features />
        <InteractivePreview />
        <Installation />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}
