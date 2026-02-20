"use client";

import React, { useState } from "react";
import {
  FiCheck,
  FiCopy,
  FiLayout,
  FiMaximize2,
  FiTerminal,
} from "react-icons/fi";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

const MOCK_CODE = `"use client";

import { motion } from "motion/react";
import { CopyButton } from "@/components/ui/button";

export function AccessTokenCard({ token }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="p-6 rounded-2xl bg-card border border-border/50 shadow-sm"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-medium text-sm text-muted-foreground">
          Production API Key
        </h3>
        <span className="px-2 py-1 bg-emerald-500/10 text-emerald-500 text-xs rounded-full font-medium">
          Active
        </span>
      </div>
      
      <div className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg border border-border/40 font-mono text-sm">
        <div className="text-foreground/80 truncate flex-1">
          {token.slice(0, 12)}••••••••••••••••{token.slice(-4)}
        </div>
        <CopyButton text={token} />
      </div>
    </motion.div>
  );
}`;

export const CodeShowcase: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");

  const copyToClipboard = () => {
    navigator.clipboard.writeText(MOCK_CODE);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-32 bg-background border-t border-border/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground mb-6">
              Beautifully crafted, <br />
              ready to adapt.
            </h2>
            <p className="text-lg text-muted-foreground">
              We focus on the foundation so you can focus on your product. Every
              component is designed to be easily extensible, accessible, and
              stunning out of the box.
            </p>
          </div>
          <div className="hidden lg:flex items-center gap-4 text-sm text-muted-foreground font-medium">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
              TypeScript Native
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500" />
              Tailwind v4
            </div>
          </div>
        </div>

        {/* Central interactive showcase */}
        <div className="rounded-[2rem] border border-border/60 dark:border-border bg-muted/40 dark:bg-muted/10 shadow-2xl overflow-hidden flex flex-col">
          {/* Top Bar Navigation */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-border/60 bg-card/60 backdrop-blur">
            <div className="flex items-center gap-6">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>

              <div className="flex items-center bg-muted/50 p-1 rounded-lg border border-border/50 relative">
                {["preview", "code"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab as "preview" | "code")}
                    className={`relative flex items-center gap-2 px-4 py-1.5 rounded-md text-sm font-medium transition-colors z-10 ${
                      activeTab === tab
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground/80"
                    }`}
                  >
                    {activeTab === tab && (
                      <motion.div
                        layoutId="active-tab-code-showcase"
                        className="absolute inset-0 bg-background rounded-md shadow-sm border border-border/50"
                        transition={{
                          type: "spring",
                          bounce: 0.15,
                          duration: 0.5,
                        }}
                      />
                    )}
                    <span className="relative z-20 flex items-center gap-2">
                      {tab === "preview" ? (
                        <FiLayout className="w-4 h-4" />
                      ) : (
                        <FiTerminal className="w-4 h-4" />
                      )}
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3">
              {activeTab === "code" && (
                <button
                  onClick={copyToClipboard}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors bg-muted/50 px-3 py-1.5 rounded-md border border-border/50"
                >
                  {copied ? (
                    <FiCheck className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <FiCopy className="w-4 h-4" />
                  )}
                  {copied ? "Copied!" : "Copy code"}
                </button>
              )}
              <FiMaximize2 className="w-4 h-4 text-muted-foreground hidden sm:block" />
            </div>
          </div>

          <div className="relative min-h-[400px] flex items-center justify-center bg-gradient-to-br from-background via-muted/30 to-background p-8 md:p-12 overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

            {activeTab === "preview" ? (
              <div className="relative w-full max-w-md animate-in fade-in zoom-in-95 duration-500">
                <div className="p-8 rounded-3xl bg-card border border-border/60 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="font-semibold text-lg text-foreground">
                        Production API Key
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Used for production environments
                      </p>
                    </div>
                    <span className="px-3 py-1 bg-emerald-500/10 text-emerald-500 text-xs rounded-full font-medium border border-emerald-500/20">
                      Active
                    </span>
                  </div>

                  <div className="flex items-center gap-3 p-4 bg-background rounded-xl border border-border shadow-inner font-mono text-sm">
                    <div className="text-foreground/90 flex-1 truncate select-all">
                      sk_live_1234••••••••••••••••5678
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-8 shadow-sm"
                    >
                      Copy
                    </Button>
                  </div>

                  <div className="mt-6 flex justify-between items-center text-sm border-t border-border/50 pt-6">
                    <span className="text-muted-foreground">
                      Created 2 days ago
                    </span>
                    <button className="text-red-500/80 hover:text-red-500 font-medium transition-colors">
                      Revoke token
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="w-full h-full max-w-3xl animate-in fade-in zoom-in-95 duration-500 self-start">
                <pre className="p-6 rounded-xl bg-[#0d0d12] border border-border/30 overflow-x-auto h-full text-sm leading-relaxed font-mono text-gray-300">
                  <div className="flex">
                    <div className="hidden sm:flex flex-col text-gray-600 select-none pr-4 border-r border-gray-800 text-right mr-4">
                      {MOCK_CODE.split("\n").map((_, i) => (
                        <span key={i}>{i + 1}</span>
                      ))}
                    </div>
                    <code className="text-gray-300">{MOCK_CODE}</code>
                  </div>
                </pre>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
