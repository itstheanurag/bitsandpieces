import { Navbar } from "./navbar";
import { Hero } from "./hero";
import { Features } from "./features";
import { CTA } from "./cta";
import { Contributors } from "./contributors";
import { FAQ } from "./faq";
export function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center overflow-hidden">
      <Navbar />
      <Hero />

      <Features />
      <CTA />

      <FAQ />
      <Contributors />
    </div>
  );
}
