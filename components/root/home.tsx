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
      <Container>
        <Navbar />
        <Hero />
      </Container>

      <Features />
      <CTA />

      <FAQ />
      <Contributors />
    </div>
  );
}
