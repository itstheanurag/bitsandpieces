"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Zap, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/navbar";
import { Container } from "../layout/container";

export function Hero() {
  return (
    <section className="relative min-h-screen bg-background">
      <Navbar />

      <Container>
        <div className="pt-40 pb-32">
          <div className="grid grid-cols-1 gap-20 md:grid-cols-2 md:items-center">
            {/* Left */}
            <div className="space-y-8">
              <motion.span
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-muted-foreground"
              >
                <span className="h-2 w-2 rounded-full bg-green-500" />
                v1.0 released
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.05 }}
                className="text-5xl font-semibold leading-tight sm:text-6xl"
              >
                Production-ready UI components
                <br />
                for modern React apps
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="max-w-xl text-lg text-muted-foreground"
              >
                A growing library of accessible, composable components built
                with React, Next.js, and Tailwind CSS. Copy, paste, and ship
                faster.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 }}
                className="flex flex-wrap gap-4"
              >
                <Link href="/docs">
                  <Button size="lg" className="h-12 px-8 text-base">
                    <Zap className="mr-2 h-5 w-5" />
                    View components
                  </Button>
                </Link>

                <Link
                  href="https://github.com/itstheanurag/bitsandpieces"
                  target="_blank"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-12 px-8 text-base"
                  >
                    <Code className="mr-2 h-5 w-5" />
                    GitHub
                  </Button>
                </Link>
              </motion.div>
            </div>

            {/* Right – Component Preview */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="relative rounded-xl border border-border bg-muted/40 p-6 shadow-sm"
            >
              <div className="flex items-center gap-2 border-b border-border px-2 pb-4 text-xs text-muted-foreground">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
                <span className="ml-3 font-mono">button.tsx</span>
              </div>

              <pre className="mt-6 overflow-hidden rounded-md bg-background p-6 text-sm">
                <code className="text-muted-foreground">
                  {`<Button variant="outline">
  Copy & Paste
</Button>`}
                </code>
              </pre>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
