"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import { useState } from "react";

export function Hero() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay },
    }),
  };

  return (
    <section className="relative z-10 max-w-7xl mx-auto px-4 pt-28 pb-20 md:pt-36 md:pb-32">
      <motion.div
        className="text-center max-w-4xl mx-auto"
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div
          variants={fadeUp}
          custom={0.1}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border border-border text-muted-foreground font-semibold text-sm cursor-pointer"
        >
          <Zap className="w-4 h-4" />
          <span className="">Built with shadcn/ui + Framer Motion</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          variants={fadeUp}
          custom={0.2}
          className="text-primary font-bold mb-6 leading-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Beautiful Components
          <br />
          <span className="">Built for Modern Web</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          custom={0.3}
          className="text-base sm:text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
        >
          A curated collection of premium, animated components built with
          Next.js, Framer Motion, and shadcn/ui.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={fadeUp}
          custom={0.5}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6"
        >
          <motion.button
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg transition-all font-medium flex items-center gap-2 w-full sm:w-auto justify-center cursor-pointer"
          >
            Browse Components
            <ArrowRight className="w-4 h-4" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-accent text-accent-foreground rounded-lg transition-all font-medium w-full sm:w-auto cursor-pointer"
          >
            View on GitHub
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
