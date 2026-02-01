import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
export const Hero: React.FC = () => {
  return (
    <section className="relative pt-24 pb-20 lg:pt-36 lg:pb-32 overflow-hidden border-b border-border/50">
      <div className="absolute inset-0 bg-background overflow-hidden pointer-events-none">
        {/* Subtle grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--foreground)_1px,transparent_1px),linear-gradient(to_bottom,var(--foreground)_1px,transparent_1px)] bg-[size:32px_32px] opacity-[0.05]"></div>

        {/* Deep ambient glow behind the visual */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] bg-foreground/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-foreground/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border border-border animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-[11px] font-mono text-muted-foreground font-medium tracking-wide uppercase">
                v2.0 Released
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-foreground leading-[1.1] animate-slide-up">
              The Architecture <br /> of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/50">
                Modern UI.
              </span>
            </h1>

            <p
              className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed animate-slide-up"
              style={{ animationDelay: "0.1s" }}
            >
              Everything you need to build world-class applications. Start with
              <span className="text-foreground font-medium">
                {" "}
                atomic components
              </span>
              , assemble{" "}
              <span className="text-foreground font-medium">blocks</span>, and
              ship{" "}
              <span className="text-foreground font-medium">
                full templates
              </span>
              .
            </p>

            <div
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4 animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              <Link href="/docs">
                <Button
                  size="lg"
                  className="h-12 px-8 bg-foreground text-background hover:bg-foreground/90 border-none shadow-[0_0_30px_-10px] shadow-foreground/30"
                >
                  Explore Directory
                </Button>
              </Link>
              <Link href="/docs">
                <Button
                  variant="secondary"
                  size="lg"
                  className="h-12 px-8 bg-transparent border-border hover:bg-secondary"
                >
                  Documentation
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Visual - Bento Grid */}
          <div
            className="flex-1 w-full max-w-[600px] lg:max-w-none perspective-1000 animate-slide-up"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="grid grid-cols-2 grid-rows-3 gap-4 h-[400px] lg:h-[500px] w-full p-4 rounded-2xl border border-border/50 bg-card/20 backdrop-blur-sm shadow-md rotate-y-[-5deg] rotate-x-[5deg] hover:rotate-0 transition-transform duration-700 ease-out">
              {/* 1. Template Preview (Tall Left) */}
              <div className="row-span-3 col-span-1 bg-card border border-border rounded-xl overflow-hidden flex flex-col group relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-card/80 pointer-events-none z-10" />
                {/* Header */}
                <div className="h-8 border-b border-border bg-muted/50 flex items-center px-3 gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-red-500/20" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500/20" />
                  <div className="w-2 h-2 rounded-full bg-green-500/20" />
                </div>
                {/* Body */}
                <div className="flex-1 flex">
                  {/* Sidebar */}
                  <div className="w-12 border-r border-border bg-muted/50 flex flex-col items-center py-3 gap-3">
                    <div className="w-6 h-6 rounded bg-muted" />
                    <div className="w-6 h-6 rounded bg-muted/50" />
                    <div className="w-6 h-6 rounded bg-muted/50" />
                  </div>
                  {/* Content */}
                  <div className="flex-1 p-3 space-y-3">
                    <div className="h-20 rounded-lg bg-muted border border-border/50" />
                    <div className="grid grid-cols-2 gap-2">
                      <div className="h-16 rounded-lg bg-muted border border-border/50" />
                      <div className="h-16 rounded-lg bg-muted border border-border/50" />
                    </div>
                    <div className="h-24 rounded-lg bg-muted border border-border/50" />
                  </div>
                </div>
                {/* Label */}
                <div className="absolute bottom-4 left-4 z-20">
                  <span className="px-2 py-1 rounded bg-primary/10 border border-primary/20 text-primary text-[10px] font-mono uppercase tracking-wider">
                    Templates
                  </span>
                </div>
              </div>

              {/* 2. Block Preview (Top Right) */}
              <div className="row-span-2 col-span-1 bg-card border border-border rounded-xl overflow-hidden relative group">
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <div className="w-full space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-muted border border-border" />
                      <div className="space-y-1.5">
                        <div className="h-2 w-20 bg-muted rounded" />
                        <div className="h-2 w-12 bg-muted/50 rounded" />
                      </div>
                    </div>
                    <div className="h-2 w-full bg-muted/30 rounded" />
                    <div className="h-2 w-3/4 bg-muted/30 rounded" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="px-2 py-1 rounded bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-mono uppercase tracking-wider">
                    Blocks
                  </span>
                </div>
              </div>

              {/* 3. Component Preview (Bottom Right) */}
              <div className="row-span-1 col-span-1 bg-card border border-border rounded-xl overflow-hidden relative group flex items-center justify-center gap-4">
                <button className="h-8 px-4 rounded bg-foreground text-background text-[10px] font-bold shadow-lg transform group-hover:-translate-y-1 transition-transform">
                  Button
                </button>
                <div className="w-10 h-5 rounded-full bg-muted border border-border flex items-center px-0.5">
                  <div className="w-4 h-4 rounded-full bg-foreground/50 shadow-sm" />
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="px-2 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-mono uppercase tracking-wider">
                    Components
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
