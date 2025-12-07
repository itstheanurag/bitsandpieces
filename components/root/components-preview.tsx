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
    <section className="relative py-32 w-full overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        </div>

      <div className="max-w-7xl px-4 mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-100/50 dark:bg-neutral-900/50 backdrop-blur-sm mb-4"
          >
            <span className="text-xs font-semibold text-neutral-600 dark:text-neutral-400 tracking-wide uppercase">
              Library Content
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white"
          >
            Explore the Collection
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto"
          >
            From atomic utilities to full-page sections. painstakingly crafted for copy-paste.
          </motion.p>

          {/* Premium Tabs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center justify-center p-1.5 rounded-full bg-neutral-100/80 dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-800 backdrop-blur-xl shadow-lg mt-8"
          >
            {[
                { id: "bits", label: "Bits" },
                { id: "pieces", label: "Pieces" }
            ].map((tab) => (
                <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as "bits" | "pieces")}
                    className={cn(
                        "relative px-8 py-2.5 rounded-full text-sm font-medium transition-colors z-10",
                        activeTab === tab.id 
                            ? "text-neutral-900 dark:text-white" 
                            : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200"
                    )}
                >
                    {activeTab === tab.id && (
                        <motion.div
                            layoutId="activeTab"
                            className="absolute inset-0 bg-white dark:bg-neutral-800 rounded-full shadow-sm"
                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            style={{ zIndex: -1 }}
                        />
                    )}
                    {tab.label}
                </button>
            ))}
          </motion.div>
        </div>

        <div className="w-full min-h-[400px]">
          <AnimatePresence mode="wait">
            {activeTab === "bits" ? (
              <motion.div
                key="bits"
                initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 gap-16"
              >
                {/* Dynamically render Bits */}
                {Object.entries(bits)
                  .sort(([slugA], [slugB]) => {
                     // Prioritize borders and backgrounds
                     const isPremiumA = slugA.includes("border") || slugA.includes("retro");
                     const isPremiumB = slugB.includes("border") || slugB.includes("retro");
                     const isBgA = slugA.includes("backgrounds");
                     const isBgB = slugB.includes("backgrounds");

                     if (isPremiumA && !isPremiumB) return -1;
                     if (!isPremiumA && isPremiumB) return 1;
                     
                     if (isBgA && !isBgB) return -1;
                     if (!isBgA && isBgB) return 1;

                     return 0;
                  })
                  .slice(0, 3)
                  .map(([slug, item]: [string, any]) => {
                   const Component = exampleRegistryMap[slug] || registryMap[slug];
                   if (!Component) return null;
                   return (
                     <div key={slug} className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-200 dark:via-neutral-800 to-transparent" />
                             <h3 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100 tracking-tight">{item.title}</h3>
                             <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-200 dark:via-neutral-800 to-transparent" />
                        </div>
                       <div className="bg-white dark:bg-neutral-950 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-sm overflow-hidden">
                           <ComponentView
                             name={slug}
                             code={item.code}
                             component={Component}
                           />
                       </div>
                     </div>
                   );
                })}
              </motion.div>
            ) : (
              <motion.div
                key="pieces"
                initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 gap-16"
              >
                {/* Dynamically render Pieces */}
                 {Object.entries(pieces)
                   .filter(([slug]) => !slug.toLowerCase().includes("navbar"))
                   .slice(0, 3)
                   .map(([slug, item]: [string, any]) => {
                   const Component = exampleRegistryMap[slug] || registryMap[slug];
                   if (!Component) return null;
                   return (
                     <div key={slug} className="space-y-6">
                       <div className="flex items-center gap-4">
                            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-200 dark:via-neutral-800 to-transparent" />
                             <h3 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100 tracking-tight">{item.title}</h3>
                             <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-200 dark:via-neutral-800 to-transparent" />
                        </div>
                       <div className="bg-white dark:bg-neutral-950 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-sm overflow-hidden">
                            <ComponentView
                                name={slug}
                                code={item.code}
                                component={Component}
                            />
                       </div>
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
