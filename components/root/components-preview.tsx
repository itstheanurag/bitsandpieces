"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, Bell, Search } from "lucide-react";

export function ComponentsPreview() {
  return (
    <section className="py-24 bg-neutral-50/50 dark:bg-neutral-950/50">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4 text-neutral-900 dark:text-neutral-100"
          >
            Crafted for Excellence
          </motion.h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Every component is designed with attention to detail, accessibility,
            and customization in mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Card 1: Buttons */}
          <PreviewCard title="Interactive Buttons" delay={0.1}>
            <div className="flex flex-col gap-3 items-center justify-center h-full w-full">
              <button className="px-4 py-2 bg-neutral-900 text-white rounded-md text-sm font-medium hover:bg-neutral-800 transition-colors shadow-sm">
                Primary Action
              </button>
              <button className="px-4 py-2 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-neutral-100 rounded-md text-sm font-medium hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors">
                Secondary Action
              </button>
            </div>
          </PreviewCard>

          {/* Card 2: Notifications */}
          <PreviewCard title="Smart Notifications" delay={0.2}>
            <div className="flex flex-col gap-3 w-full max-w-[240px]">
              <div className="flex items-start gap-3 p-3 rounded-lg bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-sm">
                <div className="p-1.5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400">
                  <Check className="w-3 h-3" />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-medium text-neutral-900 dark:text-neutral-100">
                    Success
                  </p>
                  <p className="text-[10px] text-neutral-500">
                    Changes saved successfully.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-sm">
                <div className="p-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                  <Bell className="w-3 h-3" />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-medium text-neutral-900 dark:text-neutral-100">
                    Update
                  </p>
                  <p className="text-[10px] text-neutral-500">
                    New version available.
                  </p>
                </div>
              </div>
            </div>
          </PreviewCard>

          {/* Card 3: Inputs */}
          <PreviewCard title="Modern Inputs" delay={0.3}>
            <div className="w-full max-w-[240px] space-y-3">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-neutral-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full h-9 pl-9 pr-4 rounded-md border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-sm text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-600"
                  readOnly
                />
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Email"
                  className="flex-1 h-9 px-3 rounded-md border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-sm focus:outline-none"
                  readOnly
                />
                <button className="h-9 px-3 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 rounded-md text-sm">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </PreviewCard>
        </div>
      </div>
    </section>
  );
}

function PreviewCard({
  title,
  children,
  delay,
}: {
  title: string;
  children: React.ReactNode;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group relative overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 shadow-sm hover:shadow-md transition-all"
    >
      <div className="absolute inset-0 bg-grid text-neutral-100/50 dark:text-neutral-900/50 mask-[linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />

      <div className="relative p-6 h-full flex flex-col">
        <div className="flex-1 flex items-center justify-center min-h-[160px] bg-neutral-50/50 dark:bg-neutral-900/50 rounded-lg border border-neutral-100 dark:border-neutral-800 mb-4 overflow-hidden group-hover:scale-[1.02] transition-transform duration-300">
          {children}
        </div>
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
          {title}
        </h3>
      </div>
    </motion.div>
  );
}
