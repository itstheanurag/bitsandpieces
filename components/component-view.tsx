"use client";

import * as React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, Copy, Maximize2, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ComponentViewProps {
  name: string;
  code: string;
  component: React.ComponentType<any>;
}

export function ComponentView({
  name,
  code,
  component: Component,
}: ComponentViewProps) {
  const [isCopied, setIsCopied] = React.useState(false);
  const [showFullPreview, setShowFullPreview] = React.useState(false);

  const copyToClipboard = async (text: string) => {
    await navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  // Generate usage code example
  const usageCode = `import { ${name
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("")} } from "@/components/pieces/${name.split("-")[0]}/${
    name.split("-")[1]
  }"

export default function App() {
  return (
    <${name
      .split("-")
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join("")} />
  )
}`;

  return (
    <div className="space-y-4">
      <Tabs defaultValue="preview" className="w-full">
        <div className="flex items-center justify-between pb-3">
          <TabsList>
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="usage">Usage</TabsTrigger>
            <TabsTrigger value="code">Source</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent
          value="preview"
          className="border border-neutral-200 dark:border-neutral-800 rounded-lg flex flex-col items-center justify-center bg-neutral-100 dark:bg-neutral-900 min-h-[350px] relative overflow-hidden p-0"
        >
          <div className="absolute top-4 right-4 z-20">
            <button
              onClick={() => setShowFullPreview(true)}
              className="p-2 bg-white dark:bg-neutral-800 rounded-md shadow-sm border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors"
              title="View Full Screen"
            >
              <Maximize2 className="w-4 h-4 text-neutral-600 dark:text-neutral-300" />
            </button>
          </div>

          <div className="w-full h-[400px] relative transform-gpu overflow-y-auto overflow-x-hidden bg-white dark:bg-neutral-950 shadow-sm">
            {Component ? (
              <Component />
            ) : (
              <div className="flex items-center justify-center h-full text-neutral-500">
                Component not found
              </div>
            )}
          </div>
        </TabsContent>

        <TabsContent value="usage">
          <div className="relative rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-950 p-4 overflow-x-auto">
            <button
              onClick={() => copyToClipboard(usageCode)}
              className="absolute top-4 right-4 p-2 rounded-md hover:bg-neutral-800 transition-colors"
            >
              {isCopied ? (
                <Check className="w-4 h-4 text-green-500" />
              ) : (
                <Copy className="w-4 h-4 text-neutral-400" />
              )}
            </button>
            <pre className="text-sm text-neutral-50 font-mono">
              <code>{usageCode}</code>
            </pre>
          </div>
        </TabsContent>

        <TabsContent value="code">
          <div className="relative rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-950 p-4 overflow-x-auto">
            <button
              onClick={() => copyToClipboard(code)}
              className="absolute top-4 right-4 p-2 rounded-md hover:bg-neutral-800 transition-colors"
            >
              {isCopied ? (
                <Check className="w-4 h-4 text-green-500" />
              ) : (
                <Copy className="w-4 h-4 text-neutral-400" />
              )}
            </button>
            <pre className="text-sm text-neutral-50 font-mono">
              <code>{code}</code>
            </pre>
          </div>
        </TabsContent>
      </Tabs>

      {/* Full Screen Preview Modal */}
      <AnimatePresence>
        {showFullPreview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
          >
            <div className="fixed inset-0 flex flex-col bg-background">
              <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 relative">
                <span className="font-semibold">Full Screen Preview</span>
                <button
                  onClick={() => setShowFullPreview(false)}
                  className="p-2 hover:bg-accent rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="flex-1 overflow-auto bg-neutral-100 dark:bg-neutral-900 relative">
                {Component && <Component />}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
