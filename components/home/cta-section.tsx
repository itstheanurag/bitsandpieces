"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";

export function CtaSection() {
  return (
    <section className="py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl border border-border bg-muted/30 px-6 py-16 text-center sm:px-12"
        >
          <div className="mx-auto max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Ready to ship?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Start building your next project with Bits&Pieces today. Free and
              open source.
            </p>

            <div className="mt-8 flex items-center justify-center gap-4">
              <Link href="/docs">
                <Button size="lg" className="h-11 px-8">
                  Get Started
                </Button>
              </Link>
              <Link href="/docs/components">
                <Button size="lg" variant="outline" className="h-11 gap-2 px-8">
                  Explore Components
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
