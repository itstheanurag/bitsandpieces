"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Search, Menu, CreditCard, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

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
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                {/* Bits Content (reuse existing cards) */}
                <PreviewCard title="Interactive Buttons">
                  <div className="flex flex-col gap-3 items-center">
                    <button className="px-4 py-2 bg-neutral-900 text-white rounded-md text-sm font-medium hover:bg-neutral-800 transition-colors shadow-sm">
                      Primary Action
                    </button>
                    <button className="px-4 py-2 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-neutral-100 rounded-md text-sm font-medium hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors">
                      Secondary Action
                    </button>
                  </div>
                </PreviewCard>
                <PreviewCard title="Smart Notifications">
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
                          Changes saved.
                        </p>
                      </div>
                    </div>
                  </div>
                </PreviewCard>
                <PreviewCard title="Modern Inputs">
                  <div className="w-full max-w-[240px] space-y-3">
                    <div className="relative">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-neutral-400" />
                      <input
                        type="text"
                        placeholder="Search..."
                        className="w-full h-9 pl-9 pr-4 rounded-md border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-sm focus:outline-none"
                        readOnly
                      />
                    </div>
                  </div>
                </PreviewCard>
              </motion.div>
            ) : (
              <motion.div
                key="pieces"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {/* Pieces Content (Mocked) */}
                <PreviewCard
                  title="Responsive Navbar"
                  className="col-span-1 md:col-span-2"
                >
                  <div className="w-full border border-neutral-200 dark:border-neutral-800 rounded-lg bg-white dark:bg-neutral-950 p-4">
                    <div className="flex items-center justify-between">
                      <div className="font-bold text-lg">Logo</div>
                      <div className="hidden md:flex gap-4 text-sm text-neutral-600 dark:text-neutral-400">
                        <span>Home</span>
                        <span>Features</span>
                        <span>Pricing</span>
                      </div>
                      <div className="h-8 w-8 rounded-full bg-neutral-100 dark:bg-neutral-800 md:hidden flex items-center justify-center">
                        <Menu className="w-4 h-4" />
                      </div>
                      <div className="hidden md:block px-4 py-2 rounded-md bg-neutral-900 text-white text-xs">
                        Get Started
                      </div>
                    </div>
                  </div>
                </PreviewCard>
                <PreviewCard title="Payment Card">
                  <div className="w-full max-w-sm border border-neutral-200 dark:border-neutral-800 rounded-xl bg-white dark:bg-neutral-950 p-6 shadow-sm">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="font-semibold">Payment Method</h3>
                      <CreditCard className="w-5 h-5 text-neutral-500" />
                    </div>
                    <div className="space-y-4">
                      <div className="h-10 w-full bg-neutral-100 dark:bg-neutral-900 rounded-md border border-neutral-200 dark:border-neutral-800" />
                      <div className="flex gap-4">
                        <div className="h-10 w-1/2 bg-neutral-100 dark:bg-neutral-900 rounded-md border border-neutral-200 dark:border-neutral-800" />
                        <div className="h-10 w-1/2 bg-neutral-100 dark:bg-neutral-900 rounded-md border border-neutral-200 dark:border-neutral-800" />
                      </div>
                    </div>
                  </div>
                </PreviewCard>
                <PreviewCard title="Calendar Widget">
                  <div className="w-full max-w-sm border border-neutral-200 dark:border-neutral-800 rounded-xl bg-white dark:bg-neutral-950 p-6 shadow-sm flex flex-col items-center">
                    <div className="flex items-center gap-2 mb-4">
                      <Calendar className="w-5 h-5" />
                      <span className="font-semibold">November 2025</span>
                    </div>
                    <div className="grid grid-cols-7 gap-2 text-center text-xs w-full">
                      {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
                        <div key={i} className="text-neutral-400">
                          {d}
                        </div>
                      ))}
                      {Array.from({ length: 30 }).map((_, i) => (
                        <div
                          key={i}
                          className={cn(
                            "p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 cursor-pointer",
                            i === 14 &&
                              "bg-neutral-900 text-white hover:bg-neutral-800"
                          )}
                        >
                          {i + 1}
                        </div>
                      ))}
                    </div>
                  </div>
                </PreviewCard>
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
