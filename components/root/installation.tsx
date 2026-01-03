"use client";

import { Check, Copy, Terminal } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Installation() {
  const [copied, setCopied] = useState(false);
  const command = "npx bitsandpieces add button dropdown-menu";

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Start building in seconds
          </h2>
          <p className="text-muted-foreground text-lg">
            Install components directly into your project using the CLI. No
            heavy dependencies.
          </p>
        </div>

        <div className="max-w-2xl mx-auto relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-secondary/50 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />

          <div className="relative rounded-xl border border-border bg-black text-white px-6 py-8 md:p-10 text-left font-mono text-sm md:text-base shadow-2xl">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Terminal className="h-5 w-5 text-muted-foreground" />
                <span className="text-green-400">$</span>
                <span>{command}</span>
              </div>
              <Button
                size="icon"
                variant="ghost"
                className="h-8 w-8 text-muted-foreground hover:text-white hover:bg-white/10"
                onClick={handleCopy}
              >
                {copied ? (
                  <Check className="h-4 w-4 text-green-400" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
                <span className="sr-only">Copy command</span>
              </Button>
            </div>

            <div className="mt-6 space-y-2 text-muted-foreground text-xs md:text-sm opacity-60 selection:bg-white/20">
              <div>✓ Checking registry...</div>
              <div>✓ Installing dependencies...</div>
              <div>✓ Adding components...</div>
              <div className="text-green-400 mt-4">Done in 1.42s.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
