"use client";

import { motion } from "framer-motion";

import type { Variants } from "framer-motion";

const fadeUp = (delay = 0): Variants => ({
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay },
  },
});

export function Features() {
  return (
    <section className="py-16 w-full">
      <div className="container max-w-7xl">
        {/* Title */}
        <motion.h2
          variants={fadeUp(0.1)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-primary mb-12"
        >
          Why BitsAndPieces?
        </motion.h2>

        {/* Bento Grid Wrapper */}
        <motion.div
          variants={fadeUp(0.3)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        ></motion.div>
      </div>
    </section>
  );
}
