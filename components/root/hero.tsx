"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";

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
    <section
      className={cn(
        "relative z-10",
        "max-w-7xl mx-auto px-4",
        "pt-28 pb-20 md:pt-36 md:pb-32",
        "bg-[radial-gradient(circle,rgba(0,0,0,0.2)_1px,transparent_1px)]",
        "dark:bg-[radial-gradient(circle,rgba(255,255,255,0.2)_1px,transparent_1px)]",
        "bg-size-[15px_15px]"
      )}
    >
      <motion.div
        className={cn("text-center max-w-4xl mx-auto")}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div
          variants={fadeUp}
          custom={0.1}
          className={cn(
            "inline-flex items-center gap-2",
            "px-4 py-2 rounded-full mb-6",
            "border border-border",
            "font-semibold text-sm cursor-pointer",
            "dark:text-neutral-200"
          )}
        >
          <Zap className={cn("w-4 h-4")} />
          <span>Built with shadcn/ui + Framer Motion</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          variants={fadeUp}
          custom={0.2}
          className={cn(
            "font-bold leading-tight",
            "text-4xl sm:text-5xl md:text-6xl lg:text-7xl",
            "mb-6",
            "dark:text-neutral-100"
          )}
        >
          Beautiful Components
          <br />
          <span>Built for Modern Web</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          custom={0.3}
          className={cn(
            "text-muted-foreground",
            "sm:text-lg md:text-xl",
            "mb-10 max-w-2xl mx-auto"
          )}
        >
          A curated collection of premium, animated components built with
          Next.js, Framer Motion, and shadcn/ui.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={fadeUp}
          custom={0.5}
          className={cn(
            "flex flex-col sm:flex-row",
            "items-center justify-center",
            "gap-4 pt-6"
          )}
        >
          {/* Primary Button */}
          <motion.button
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
              "px-6 py-3",
              "text-neutral-100 dark:text-neutral-900",
              "bg-neutral-900 dark:bg-neutral-200",
              "rounded-lg font-medium",
              "flex items-center gap-2",
              "w-full sm:w-auto justify-center",
              "cursor-pointer",
              "transition-all text-shadow-2xs shadow-md"
            )}
          >
            Browse Components
            <ArrowRight className={cn("w-4 h-4")} />
          </motion.button>

          {/* Secondary Button */}
          <motion.button
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
              "px-6 py-3",
              "text-neutral-700 dark:text-neutral-200",
              "rounded-lg font-medium",
              "w-full sm:w-auto cursor-pointer",
              "border",
              "transition-all"
            )}
          >
            View on GitHub
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
