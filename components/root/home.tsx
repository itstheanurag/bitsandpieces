import { Navbar } from "./navbar";
import { Hero } from "./hero";
import { Features } from "./features";
import { CTA } from "./cta";
import { FAQ } from "./faq";
import { Contributors } from "./contributors";
import { AnimatedBackground } from "./animated-background";

export function Home() {
  return (
    <div className="w-full relative flex flex-col min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100">
      <AnimatedBackground />
      <Navbar />

      <main className="relative z-10  px-4 py-8 md:px-8 md:py-12 lg:px-16 lg:py-20">
        <Hero />
        <Features />
        <CTA />
        <FAQ />
        <Contributors />
      </main>
    </div>
  );
}
