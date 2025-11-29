"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function CTA() {
  return (
    <section className="py-24 px-4 w-full">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="relative overflow-hidden rounded-3xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-6 py-24 text-center max-w-7xl mx-auto"
      >
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]"></div>

        <div className="relative z-10 flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Ready to ship faster?
          </h2>
          <p className="text-lg text-neutral-300 dark:text-neutral-600 max-w-xl mb-10">
            Stop reinventing the wheel. Use our copy-paste components to build
            your next project in record time.
          </p>

          <Link
            href="/docs"
            className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white font-medium transition-transform hover:scale-105 active:scale-95"
          >
            Get Started
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
