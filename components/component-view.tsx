"use client";

import * as React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, Copy, Maximize2, Power, Smartphone, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { createPortal } from "react-dom";

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
  const [isNavbarActive, setIsNavbarActive] = React.useState(false);

  const isNavbar = name.includes("navbar");

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
          className="border border-neutral-200 dark:border-neutral-800 rounded-lg flex flex-col items-center justify-center bg-neutral-100 dark:bg-neutral-900 min-h-[500px] relative overflow-hidden p-0"
        >
          <div className="absolute top-4 left-4 z-20 flex gap-2">
            {!isNavbar && null}
          </div>

          <div className="w-full h-[700px] relative transform-gpu overflow-auto bg-neutral-100 dark:bg-neutral-900 shadow-sm p-8 flex items-center justify-center">
             {Component ? (
                isNavbar ? (
                  <button
                    onClick={() => setIsNavbarActive(true)}
                    className="flex flex-col items-center gap-4 group"
                  >
                    <div className="p-4 rounded-full bg-neutral-100 dark:bg-neutral-800 group-hover:scale-110 transition-transform">
                      <Power className="w-8 h-8 text-neutral-600 dark:text-neutral-400" />
                    </div>
                    <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-neutral-100 transition-colors">
                      Preview Navbar on Screen
                    </span>
                  </button>
                ) : (
                  <div className="w-full h-full bg-white dark:bg-neutral-950 rounded-lg border border-neutral-200 dark:border-neutral-800 overflow-y-auto relative">
                     {/* Normal desktop preview */}
                     <div className="min-h-full w-full flex items-center justify-center p-8">
                       <Component />
                     </div>
                  </div>
                )
             ) : (
               <div className="flex items-center justify-center h-full text-neutral-500">
                 Component not found
               </div>
             )}
          </div>




        {isNavbarActive &&
          Component &&
          typeof document !== "undefined" &&
          createPortal(
            <div className="fixed inset-x-0 top-0 z-[100]">
              <Component />
              <button
                onClick={() => setIsNavbarActive(false)}
                className="fixed bottom-4 right-4 z-[101] bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full shadow-lg text-sm font-medium transition-colors"
              >
                Exit Navbar Preview
              </button>
            </div>,
            document.body
          )}
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

    </div>
  );
}
