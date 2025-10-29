"use client";

import { motion } from "framer-motion";

export function CTA() {
  return (
    <section className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative overflow-hidden rounded-2xl p-12 text-center
        bg-gradient-to-br from-primary to-primary/60"
      >
        <div className="absolute inset-0 bg-grid-white/10 [mask-image:radial-gradient(white,transparent_70%)]" />

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          viewport={{ once: true }}
          className="relative text-4xl font-bold text-primary-foreground mb-4"
        >
          Ready to build something amazing?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7 }}
          viewport={{ once: true }}
          className="relative text-lg text-primary-foreground/80 mb-8"
        >
          Join thousands of developers using ComponentHub
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.96 }}
          transition={{ type: "spring", stiffness: 250, damping: 12 }}
          className="px-8 py-4 bg-primary-foreground text-primary rounded-lg font-semibold shadow-lg hover:bg-primary-foreground/90 transition-colors"
        >
          Start Building Now
        </motion.button>
      </motion.div>
    </section>
  );
}
