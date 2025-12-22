"use client";

import { Navbar } from "./navbar";
import { Features } from "./features";
import { CTA } from "./cta";
import { Contributors } from "./contributors";
import { FAQ } from "./faq";
import { Footer } from "./footer";
import Hero from "./hero";
import FloatingShapes from "./floating-shape";
import UtilitiesSection from "./utilities";

export function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center overflow-hidden">
      {/* Navbar + Hero Section */}

      <Navbar />
      <section className="relative">
        <FloatingShapes />
        <Hero />
      </section>

      <Features />
      <UtilitiesSection />

      <CTA />
      <FAQ />

      <Contributors />
      <Footer />
    </div>
  );
}
