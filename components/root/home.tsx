"use client";

import { Navbar } from "./navbar";
import { Hero } from "./hero";
import { Features } from "./features";
import { CTA } from "./cta";
import { Contributors } from "./contributors";
import { FAQ } from "./faq";
import Container from "./container";
import { Footer } from "./footer";
import { ComponentsPreview } from "./components-preview";

export function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center overflow-hidden">
      {/* Navbar + Hero Section */}

      <Container>
        <Navbar />
        
        <Hero />

        <Features />

        <ComponentsPreview />

        <CTA />
      </Container>

      {/* FAQ */}
      <section className="w-full pt-20">
        <FAQ />
      </section>

      {/* Contributors */}
      <section className="w-full">
        <Contributors />
      </section>

      <section className="w-full">
        <Footer />
      </section>
    </div>
  );
}
