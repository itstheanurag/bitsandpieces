"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, Copy, Zap } from "lucide-react";
import { useState } from "react";

export function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("npx shadcn-ui@latest add component-name");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Animation Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay },
    }),
  };

  return (
    <section className="h-[90vh] relative z-10 max-w-7xl mx-auto pt-36 flex flex-col items-center">
      <motion.div
        className="text-center max-w-4xl mx-auto"
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div
          variants={fadeUp}
          custom={0.1}
          className="inline-flex items-center gap-2 px-4 py-2 bg-accent rounded-full mb-6 border border-border"
        >
          <Zap className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium">
            Built with shadcn/ui + Framer Motion
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          variants={fadeUp}
          custom={0.2}
          className="text-6xl md:text-7xl font-bold mb-6 leading-tight"
        >
          Beautiful <span className="text-primary">Components</span>
          <br />
          <span className="">Built for Modern Web</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          custom={0.3}
          className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
        >
          A curated collection of premium, animated components built with
          Next.js, Framer Motion, and shadcn/ui.
        </motion.p>

        {/* Animated Border Code Block */}

        {/* Buttons */}
        <motion.div
          variants={fadeUp}
          custom={0.5}
          className="flex items-center justify-center gap-4 pt-12"
        >
          <motion.button
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg transition-all font-medium flex items-center gap-2"
          >
            Browse Components
            <ArrowRight className="w-4 h-4" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-accent text-accent-foreground rounded-lg transition-all font-medium"
          >
            View on GitHub
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
