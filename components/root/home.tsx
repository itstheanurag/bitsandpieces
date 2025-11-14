"use client";

import { Navbar } from "./navbar";
import { Hero } from "./hero";
import { Features } from "./features";
import { CTA } from "./cta";
import { Contributors } from "./contributors";
import { FAQ } from "./faq";
import Container from "./container";

export function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center overflow-hidden">
      {/* Navbar + Hero Section */}
      <section className="w-full">
        <Container>
          <Navbar />
          <Hero />
        </Container>
      </section>

      {/* Features Section */}
      <section className="w-full pt-20">
        <Container>
          <Features />
        </Container>
      </section>

      {/* CTA Section */}
      <section className="w-full pt-20 pb-20">
        <Container>
          <CTA />
        </Container>
      </section>

      {/* FAQ */}
      <section className="w-full pt-20">
        <FAQ />
      </section>

      {/* Contributors */}
      <section className="w-full pt-20 pb-32">
        <Contributors />
      </section>
    </div>
  );
}
