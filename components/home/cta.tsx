import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";

export const CTA: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden text-center border-t border-border/60">
      {/* Background glow */}
      <div className="absolute inset-0 bg-background overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] rounded-full bg-primary/15 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-foreground mb-6">
          Ready to ship faster?
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          Join thousands of developers building beautiful, robust applications
          with Bits&Pieces. Free and open source.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/docs">
            <Button
              size="lg"
              className="h-12 px-8 rounded-full text-base font-medium"
            >
              Start Building Now
            </Button>
          </Link>
          <Link href="https://github.com/itstheanurag/bitsandpieces">
            <Button
              variant="outline"
              size="lg"
              className="h-12 px-8 rounded-full text-base font-medium border-border/70 hover:bg-muted/50"
            >
              Star on GitHub
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
