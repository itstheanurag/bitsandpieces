"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Code2, Copy, Moon, Box } from "lucide-react";

export function Features() {
  const features = [
    {
      title: "Bits & Pieces",
      description:
        "A clear distinction between small utilities (Bits) and large components (Pieces).",
      icon: <Box className="w-6 h-6" />,
      className: "md:col-span-2",
    },
    {
      title: "Copy & Paste",
      description:
        "Simply copy the code and paste it into your project. No npm install required.",
      icon: <Copy className="w-6 h-6" />,
      className: "md:col-span-1",
    },
    {
      title: "Dark Mode Ready",
      description:
        "Every component is built with dark mode support out of the box.",
      icon: <Moon className="w-6 h-6" />,
      className: "md:col-span-1",
    },
    {
      title: "Modern Stack",
      description: "Built with Next.js 14, Tailwind CSS, and Framer Motion.",
      icon: <Code2 className="w-6 h-6" />,
      className: "md:col-span-2",
    },
  ];

  return (
    <section className="py-24 w-full bg-neutral-50 dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-neutral-900 dark:text-white">
            Everything you need.
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-lg max-w-2xl mx-auto">
            Thoughtfully designed components that you can drop into your
            projects immediately.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                "group relative overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-8 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors",
                feature.className
              )}
            >
              <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-800 p-3 text-neutral-900 dark:text-white group-hover:bg-neutral-200 dark:group-hover:bg-neutral-700 transition-colors">
                {feature.icon}
              </div>
              <h3 className="mb-2 text-xl font-semibold text-neutral-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
