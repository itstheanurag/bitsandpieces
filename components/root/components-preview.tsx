"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { registryData as bits } from "@/__registry__/registry.bits";
import { registryData as pieces } from "@/__registry__/registry.pieces";
import { exampleRegistryMap, registryMap } from "@/__registry__/registry.map";
import { ComponentView } from "@/components/component-view";

export function ComponentsPreview() {
  const [activeTab, setActiveTab] = useState<"bits" | "pieces">("bits");

  return (
    <section className="py-24 bg-white dark:bg-neutral-950 w-full">
      <div className="max-w-7xl px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-neutral-900 dark:text-white">
            Explore the Collection
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto mb-8">
            From atomic utilities to full-page sections.
          </p>

          {/* Tabs */}
          <div className="inline-flex items-center justify-center p-1 rounded-full bg-neutral-200 dark:bg-neutral-800">
            <button
              onClick={() => setActiveTab("bits")}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium transition-all",
                activeTab === "bits"
                  ? "bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white shadow-sm"
                  : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
              )}
            >
              Bits
            </button>
            <button
              onClick={() => setActiveTab("pieces")}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium transition-all",
                activeTab === "pieces"
                  ? "bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white shadow-sm"
                  : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
              )}
            >
              Pieces
            </button>
          </div>
        </div>

        <div className="w-full min-h-[400px]">
          <AnimatePresence mode="wait">
            {activeTab === "bits" ? (
              <motion.div
                key="bits"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 gap-12"
              >
                {/* Dynamically render Bits */}
                {Object.entries(bits).slice(0, 3).map(([slug, item]: [string, any]) => {
                   const Component = exampleRegistryMap[slug] || registryMap[slug];
                   if (!Component) return null;
                   return (
                     <div key={slug} className="space-y-4">
                       <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">{item.title}</h3>
                       <ComponentView
                         name={slug}
                         code={item.code}
                         component={Component}
                       />
                     </div>
                   );
                })}
              </motion.div>
            ) : (
              <motion.div
                key="pieces"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 gap-12"
              >
                {/* Dynamically render Pieces */}
                 {Object.entries(pieces)
                   .filter(([slug]) => !slug.toLowerCase().includes("navbar"))
                   .slice(0, 3)
                   .map(([slug, item]: [string, any]) => {
                   const Component = exampleRegistryMap[slug] || registryMap[slug];
                   if (!Component) return null;
                   return (
                     <div key={slug} className="space-y-4">
                       <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">{item.title}</h3>
                       <ComponentView
                         name={slug}
                         code={item.code}
                         component={Component}
                       />
                     </div>
                   );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function PreviewCard({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 shadow-sm hover:shadow-md transition-all flex flex-col",
        className
      )}
    >
      <div className="flex-1 p-6 flex items-center justify-center bg-neutral-50/50 dark:bg-neutral-900/50 border-b border-neutral-100 dark:border-neutral-800">
        {children}
      </div>
      <div className="p-4 bg-white dark:bg-neutral-950">
        <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
          {title}
        </h3>
      </div>
    </div>
  );
}
