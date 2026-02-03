import { Footer } from "@/components/home/footer";
import { Hero } from "@/components/home/hero";
import { Pillars } from "@/components/home/pillars";
import { Showcase } from "@/components/home/showcase";
import { Stats } from "@/components/home/stats";
import { Navbar } from "@/components/layout/navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <Pillars />
      <Stats />
      <Showcase />
      <Footer />
    </main>
  );
}
