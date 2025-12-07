"use client";

import React, { useState } from "react";
import { X, Monitor, Smartphone, Tablet } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  SmartphoneFrame,
  TabletFrame,
  BrowserFrame,
} from "@/components/device-frames";

interface DevicePreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  component: React.ComponentType<any>;
  title: string;
}

export function DevicePreviewModal({
  isOpen,
  onClose,
  component: Component,
  title,
}: DevicePreviewModalProps) {
  const [device, setDevice] = useState<"desktop" | "tablet" | "mobile">("desktop");

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-sm flex flex-col"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-background/95">
          <div className="flex items-center gap-4">
            <h2 className="text-lg font-semibold">{title} - Device Preview</h2>
            <div className="flex items-center bg-neutral-100 dark:bg-neutral-800 rounded-lg p-1 border border-neutral-200 dark:border-neutral-700">
              <button
                onClick={() => setDevice("desktop")}
                className={cn(
                  "p-2 rounded-md transition-colors",
                  device === "desktop"
                    ? "bg-white dark:bg-neutral-700 shadow-sm text-neutral-900 dark:text-neutral-100"
                    : "text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-300"
                )}
                title="Desktop"
              >
                <Monitor className="w-4 h-4" />
              </button>
              <button
                onClick={() => setDevice("tablet")}
                className={cn(
                  "p-2 rounded-md transition-colors",
                  device === "tablet"
                    ? "bg-white dark:bg-neutral-700 shadow-sm text-neutral-900 dark:text-neutral-100"
                    : "text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-300"
                )}
                title="Tablet"
              >
                <Tablet className="w-4 h-4" />
              </button>
              <button
                onClick={() => setDevice("mobile")}
                className={cn(
                  "p-2 rounded-md transition-colors",
                  device === "mobile"
                    ? "bg-white dark:bg-neutral-700 shadow-sm text-neutral-900 dark:text-neutral-100"
                    : "text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-300"
                )}
                title="Mobile"
              >
                <Smartphone className="w-4 h-4" />
              </button>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-auto bg-neutral-50 dark:bg-neutral-900 p-8 flex items-center justify-center">
          {device === "mobile" ? (
            <SmartphoneFrame>
              <Component />
            </SmartphoneFrame>
          ) : device === "tablet" ? (
            <TabletFrame>
              <Component />
            </TabletFrame>
          ) : (
            <div className="w-full h-full max-w-6xl mx-auto bg-white dark:bg-neutral-950 rounded-xl shadow-sm border border-neutral-200 dark:border-neutral-800 overflow-hidden">
               <BrowserFrame className="h-full overflow-y-auto">
                <Component />
               </BrowserFrame>
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
