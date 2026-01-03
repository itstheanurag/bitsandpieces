"use client";

import { motion } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden bg-background flex flex-col items-center">
      <div className="max-w-7xl w-full mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
              v1.0 is now live
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70 pb-2">
              Beautiful React components.
              <br />
              Copy. Paste. Ship.
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A collection of high-quality, unstyled components built for speed
              and accessibility. Engineered for developers who care about the
              details.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" className="h-12 px-8 rounded-full" asChild>
              <Link href="/docs">
                Read the Docs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <div className="flex items-center gap-2 px-4 py-2 bg-muted/50 rounded-full border border-border/50 text-sm font-mono text-muted-foreground group cursor-pointer hover:bg-muted/80 transition-colors">
              <Terminal className="h-4 w-4" />
              <span>npx bitsandpieces add button</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Gradients */}
      <div className="absolute top-0 left-0 right-0 h-[600px] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] opacity-20 bg-primary blur-[120px] rounded-full" />
      </div>
    </section>
  );
}
