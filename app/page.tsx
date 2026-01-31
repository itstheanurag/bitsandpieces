import { Hero } from "@/components/home/hero";
import { Showcase } from "@/components/home/showcase";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Hero />
      <Showcase />
    </main>
  );
}
