"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, Copy, Code2, Eye, Terminal } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden min-h-screen flex flex-col items-center justify-center pt-24 pb-12">
      {/* Background */}
      <div className="absolute inset-0 z-0">
         {/* Noise overlay */}
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 dark:opacity-20 brightness-100 contrast-150"></div>
         {/* Gradient Background */}
         <div className="absolute inset-0 bg-gradient-to-b from-white via-neutral-100/50 to-white dark:from-neutral-950 dark:via-neutral-900/50 dark:to-neutral-950"></div>
         {/* Grid */}
         <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center gap-12">
        
        {/* Text Content */}
        <div className="flex flex-col items-center text-center gap-6 max-w-4xl">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5 }}
             className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm text-xs font-medium text-neutral-600 dark:text-neutral-400 shadow-sm"
           >
             <span className="relative flex h-2 w-2">
               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
               <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
             </span>
             v1.0 is now live
           </motion.div>

           <motion.h1
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.1 }}
             className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-neutral-900 dark:text-white"
           >
             Build <span className="text-neutral-500 dark:text-neutral-400">faster</span> with
             <br />
             <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 via-neutral-600 to-neutral-900 dark:from-white dark:via-neutral-400 dark:to-white animate-gradient-x">
               premium components.
             </span>
           </motion.h1>

           <motion.p
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.2 }}
             className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed"
           >
             Copy and paste beautiful, accessible components into your app.
             Open source and free to use.
           </motion.p>

           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.3 }}
             className="flex flex-wrap items-center justify-center gap-4"
           >
             <Link
               href="/browse"
               className="h-12 px-8 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-medium flex items-center gap-2 hover:scale-105 active:scale-95 transition-transform"
             >
               Browse Components
               <ArrowRight className="w-4 h-4" />
             </Link>
             <Link
               href="https://github.com/itstheanurag/bitsandpieces"
               target="_blank"
               className="h-12 px-8 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white font-medium flex items-center gap-2 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
             >
               <Terminal className="w-4 h-4" />
               GitHub
             </Link>
           </motion.div>
        </div>

        {/* Interactive Demo */}
        <motion.div
           initial={{ opacity: 0, scale: 0.95, y: 40 }}
           animate={{ opacity: 1, scale: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.4 }} // Slow, dramatic entrance
           className="w-full max-w-5xl"
        >
          <HeroDemo />
        </motion.div>

      </div>
    </section>
  );
}

function HeroDemo() {
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");
  const [copied, setCopied] = useState(false);

  const codeString = `// 1. Copy the code
import { Button } from "@/components/ui/button";

export function HeroButton() {
  return (
    <Button 
      variant="neutral" 
      size="lg" 
      className="shadow-xl"
    >
      Click me
    </Button>
  );
}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(codeString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/50 backdrop-blur-md shadow-2xl overflow-hidden">
      {/* Window Header */}
      <div className="h-12 border-b border-neutral-200 dark:border-neutral-800 flex items-center justify-between px-4 bg-white/80 dark:bg-neutral-900/80">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-400/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
          <div className="w-3 h-3 rounded-full bg-green-400/80" />
        </div>
        
        <div className="flex bg-neutral-100 dark:bg-neutral-800 rounded-lg p-1">
          <button
            onClick={() => setActiveTab("preview")}
            className={cn(
              "px-3 py-1 rounded-md text-xs font-medium transition-all flex items-center gap-2",
              activeTab === "preview" 
                ? "bg-white dark:bg-neutral-700 shadow-sm text-neutral-900 dark:text-neutral-100" 
                : "text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-300"
            )}
          >
            <Eye className="w-3 h-3" />
            Preview
          </button>
          <button
             onClick={() => setActiveTab("code")}
             className={cn(
               "px-3 py-1 rounded-md text-xs font-medium transition-all flex items-center gap-2",
               activeTab === "code" 
                 ? "bg-white dark:bg-neutral-700 shadow-sm text-neutral-900 dark:text-neutral-100" 
                 : "text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-300"
             )}
          >
             <Code2 className="w-3 h-3" />
             Code
          </button>
        </div>

        <div className="w-16" /> {/* Spacer for centering */}
      </div>

      {/* Content Area */}
      <div className="relative h-[400px] bg-neutral-50/50 dark:bg-neutral-950/50">
         <AnimatePresence mode="wait">
            {activeTab === "preview" ? (
              <motion.div
                key="preview"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 flex items-center justify-center p-12"
              >
                 {/* The "Demo" Component */}
                 <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-neutral-200 to-neutral-200 dark:from-neutral-800 dark:to-neutral-800 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                    
                    <div className="relative p-8 bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-2xl flex flex-col items-center gap-6 max-w-sm">
                       <div className="w-16 h-16 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-4xl">
                          🚀
                       </div>
                       <div className="text-center space-y-2">
                          <h3 className="text-xl font-bold text-neutral-900 dark:text-white">Start Building</h3>
                          <p className="text-neutral-500 dark:text-neutral-400 text-sm">
                            This is a live component. It's fully responsive, accessible, and ready to use.
                          </p>
                       </div>
                       <button className="w-full py-2.5 rounded-lg bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-medium text-sm hover:opacity-90 transition-opacity">
                          Get it now
                       </button>
                    </div>
                 </div>
              </motion.div>
            ) : (
               <motion.div
                  key="code"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0 overflow-auto"
               >
                  <div className="p-6 font-mono text-sm relative min-h-full bg-neutral-950 text-neutral-300">
                     <button
                        onClick={handleCopy}
                        className="absolute top-4 right-4 p-2 rounded-md hover:bg-neutral-800 transition-colors text-neutral-400 hover:text-white"
                     >
                        {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                     </button>
                     <pre>
                        <code>{codeString}</code>
                     </pre>
                  </div>
               </motion.div>
            )}
         </AnimatePresence>
      </div>
    </div>
  );
}
