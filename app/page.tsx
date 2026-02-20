import { Footer } from "@/components/home/footer";
import { Hero } from "@/components/home/hero";
import { TrustedBy } from "@/components/home/trusted-by";
import { BentoFeatures } from "@/components/home/bento-features";
import { CodeShowcase } from "@/components/home/code-showcase";
import { Showcase } from "@/components/home/showcase";
import { Testimonials } from "@/components/home/testimonials";
import { CTA } from "@/components/home/cta";
import { Navbar } from "@/components/layout/navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <TrustedBy />
      <BentoFeatures />
      <CodeShowcase />
      <Showcase />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
