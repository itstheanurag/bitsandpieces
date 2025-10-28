import { Navbar } from "./navbar";
import { Hero } from "./hero";
import { Features } from "./features";
import { CTA } from "./cta";
import { FAQ } from "./faq";
import { Contributors } from "./contributors";

export function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center overflow-hidden">
      <Navbar />
      <main className="relative z-10 w-full max-w-7xl px-4 py-8 md:px-8 md:py-12 lg:px-16 lg:py-20">
        <Hero />
        <Features />
        <CTA />
        <FAQ />
        <Contributors />
      </main>
    </div>
  );
}
