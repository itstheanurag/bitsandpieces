"use client";

import { motion } from "framer-motion";
import { Copy, Wind, Palette } from "lucide-react";

const features = [
  {
    icon: <Copy className="h-8 w-8" />,
    title: "Copy & Paste",
    description:
      "Components are designed to be easily copied and pasted into your projects.",
  },
  {
    icon: <Wind className="h-8 w-8" />,
    title: "Framer Motion",
    description:
      "Beautifully animated components using the power of Framer Motion.",
  },
  {
    icon: <Palette className="h-8 w-8" />,
    title: "Themed",
    description:
      "Built with Tailwind CSS, with full support for dark mode and easy customization.",
  },
];

export function Features() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-24 bg-neutral-50 dark:bg-neutral-900">
      <div className="container px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-neutral-900 dark:text-neutral-100">
          Why BitsAndPieces?
        </h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="mt-12 grid gap-8 md:grid-cols-3"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ translateY: -5 }}
              transition={{ duration: 0.2 }}
              className="p-8 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 cursor-pointer"
            >
              <div className="text-neutral-900 dark:text-neutral-100">
                {feature.icon}
              </div>
              <h3 className="mt-4 text-xl font-bold text-neutral-900 dark:text-neutral-100">
                {feature.title}
              </h3>
              <p className="mt-2 text-neutral-600 dark:text-neutral-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}