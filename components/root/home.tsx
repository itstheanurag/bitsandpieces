import { Navbar } from "./navbar";
import { Hero } from "./hero";
import { Features } from "./features";
import { CTA } from "./cta";
import { FAQ } from "./faq";
import { Contributors } from "./contributors";
import { AnimatedBackground } from "./animated-background";

export function Home() {
  return (
    <div className="w-full relative flex flex-col min-h-screen">
      <AnimatedBackground />
      <Navbar />

      <main>
        <Hero />
        <Features />
        <CTA />
        <FAQ />
        <Contributors />
      </main>
    </div>
  );
}
