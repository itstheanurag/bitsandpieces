"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github } from "lucide-react";
import { CornerPlusSigns } from "../bits/border/corner-plus-signs";
import { HeroSectionOneDemo } from "../examples/pieces/hero/HeroSectionOne";
import { HeroSectionOne } from "../pieces/hero/section-one";
import { AnimatedBackground } from "./animated-background";

export function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center">
      {/* <div className="container px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-neutral-900 dark:text-neutral-100"
        >
          Build Stunning UIs with BitsAndPieces
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-4 mx-auto max-w-xl text-lg text-neutral-600 dark:text-neutral-400"
        >
          A collection of copy-paste React components for building modern web
          applications, designed with Tailwind CSS and Framer Motion.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 flex justify-center gap-4"
        >
          <Link href="/docs/pieces">
            <CornerPlusSigns>
              <Button
                size="lg"
                className="border-none bg-neutral-900 dark:bg-neutral-200 text-white dark:text-neutral-900 hover:bg-neutral-900 dark:hover:bg-neutral-200 rounded-none"
              >
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CornerPlusSigns>
          </Link>
          <Link
            href="https://github.com/itsTheAnurag/BitsAndPieces"
            target="_blank"
          >
            <CornerPlusSigns>
              <Button
                size="lg"
                variant="outline"
                className="border-none rounded-none"
              >
                GitHub <Github className="ml-2 h-4 w-4" />
              </Button>
            </CornerPlusSigns>
          </Link>
        </motion.div>
      </div> */}
      <AnimatedBackground />
      <HeroSectionOne
        badge={{
          label: "v1.0 Released",
          href: "#",
        }}
        title="Bits & Pieces"
        description="A collection of copy-paste and installable components to build your next idea faster."
        cta={{
          primary: {
            label: "Get Started",
            href: "#",
          },
          secondary: {
            label: "Learn More",
            href: "#",
          },
        }}
        logos={
          <div className="flex gap-8 items-center text-neutral-500 dark:text-neutral-600">
            <span>Logo1</span>
            <span>Logo2</span>
            <span>Logo3</span>
            <span>Logo4</span>
          </div>
        }
      />
    </section>
  );
}
