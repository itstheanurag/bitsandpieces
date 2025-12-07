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
        className="
          relative overflow-hidden rounded-3xl 
          bg-white text-neutral-900 
          dark:bg-neutral-900 dark:text-white
          px-6 py-24 text-center max-w-7xl mx-auto
        "
      >
        {/* Background textures */}
        <div className="absolute inset-0 z-0">
          {/* Noise overlay */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-15 
            dark:opacity-20 brightness-100 contrast-125"></div>

          {/* Grid overlay */}
          <div
            className="
              absolute inset-0 
              bg-[linear-gradient(to_right,rgba(0,0,0,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.08)_1px,transparent_1px)]
              dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)]
              bg-[size:24px_24px]
              mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]
            "
          ></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Ready to ship faster?
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-xl mb-10">
            Stop reinventing the wheel. Use our copy-paste components to build your next project in record time.
          </p>

          <Link
            href="/browse"
            className="
              inline-flex items-center justify-center h-12 px-8 rounded-full
              bg-neutral-900 text-white 
              dark:bg-white dark:text-neutral-900
              font-medium transition-transform hover:scale-105 active:scale-95
            "
          >
            Get Started
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
