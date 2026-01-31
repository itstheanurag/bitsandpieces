"use client";

import { GlassCard } from "@/components/ui/card";
import { motion } from "motion/react";
import { Copy, Layout, Palette, Shield } from "lucide-react";

const features = [
  {
    title: "Copy & Paste",
    description: "Simply copy the code and paste it into your project.",
    icon: Copy,
    className: "md:col-span-1",
    bg: "bg-blue-500/10",
  },
  {
    title: "Modern Design",
    description: "Crafted with attention to detail and modern aesthetics.",
    icon: Palette,
    className: "md:col-span-1",
    bg: "bg-pink-500/10",
  },
  {
    title: "Type Safe",
    description: "Built with TypeScript for robust and error-free code.",
    icon: Shield,
    className: "md:col-span-1",
    bg: "bg-green-500/10",
  },
];

export function Showcase() {
  return (
    <section className="container mx-auto px-4 py-24">
      <div className="mb-16 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Everything you need
        </h2>
        <p className="mt-4 text-neutral-600 dark:text-neutral-400">
          Components designed to be flexible, accessible, and beautiful.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {/* Large Feature - Bento Main */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="md:col-span-2 md:row-span-2"
        >
          <GlassCard className="h-full flex flex-col justify-between overflow-hidden p-0">
            <div className="p-8">
              <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-purple-500/20 p-3 text-purple-500">
                <Layout className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-2xl font-bold">
                Rich Component Library
              </h3>
              <p className="text-neutral-500 dark:text-neutral-400">
                From simple buttons to complex interactive layouts. Our library
                covers a wide range of use cases to speed up your development.
              </p>
            </div>
            {/* Visual Placeholder - Could be an image or a code block */}
            <div className="relative h-64 w-full bg-neutral-100 dark:bg-neutral-900/50 mt-4 overflow-hidden mask-image-b-0">
              <div className="absolute inset-x-0 bottom-0 top-10 mx-auto w-[80%] rounded-t-xl bg-neutral-900 shadow-2xl ring-1 ring-white/10" />
            </div>
          </GlassCard>
        </motion.div>

        {/* Small Features */}
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className={feature.className}
          >
            <GlassCard className="h-full p-6 hover:border-neutral-500/50 transition-colors">
              <div
                className={`mb-4 inline-flex items-center justify-center rounded-lg p-3 ${feature.bg}`}
              >
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-bold">{feature.title}</h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                {feature.description}
              </p>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
