import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
export const Hero: React.FC = () => {
  return (
    <section className="relative pt-24 pb-16 lg:pt-36 lg:pb-24 overflow-hidden border-b border-border/60">
      <div className="absolute inset-0 bg-background overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_50%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.05),transparent_55%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.06),transparent_50%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.04),transparent_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:48px_48px] opacity-[0.06]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 text-center lg:text-left space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted/60 border border-border/60">
              <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.6)]" />
              <span className="text-[11px] font-mono text-muted-foreground font-medium tracking-wide uppercase">
                New: Templates Catalog
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl font-semibold tracking-tight text-foreground leading-[1.05]">
              Build faster with a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground via-foreground/70 to-foreground/40">
                layered UI system
              </span>
              .
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Start with components, compose blocks, and ship templates. Every
              piece shares the same design grammar, so your product looks
              intentional from pixel one.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link href="/docs">
                <Button size="lg" className="h-12 px-8">
                  Explore Library
                </Button>
              </Link>
              <Link href="/docs">
                <Button
                  variant="outline"
                  size="lg"
                  className="h-12 px-8 bg-transparent"
                >
                  View Documentation
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 text-[11px] uppercase tracking-[0.35em] text-muted-foreground">
              <span className="px-3 py-1 rounded-full border border-border/60 bg-muted/40">
                Components
              </span>
              <span className="px-3 py-1 rounded-full border border-border/60 bg-muted/40">
                Blocks
              </span>
              <span className="px-3 py-1 rounded-full border border-border/60 bg-muted/40">
                Templates
              </span>
            </div>
          </div>

          {/* Right Visual - Bento Grid */}
          <div
            className="flex-1 w-full max-w-[600px] lg:max-w-none perspective-1000"
          >
            <div className="grid grid-cols-2 grid-rows-3 gap-4 h-[400px] lg:h-[500px] w-full p-4 rounded-2xl border border-border/70 bg-card/40 backdrop-blur-sm shadow-[0_20px_60px_-40px_rgba(0,0,0,0.6)] rotate-y-[-4deg] rotate-x-[4deg] hover:rotate-0 transition-transform duration-700 ease-out">
              {/* 1. Template Preview (Tall Left) */}
              <div className="row-span-3 col-span-1 bg-card/70 border border-border/70 rounded-xl overflow-hidden flex flex-col group relative">
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
                  <span className="px-2 py-1 rounded bg-primary/10 border border-primary/30 text-primary text-[10px] font-mono uppercase tracking-wider">
                    Templates
                  </span>
                </div>
              </div>

              {/* 2. Block Preview (Top Right) */}
              <div className="row-span-2 col-span-1 bg-card/70 border border-border/70 rounded-xl overflow-hidden relative group">
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
              <div className="row-span-1 col-span-1 bg-card/70 border border-border/70 rounded-xl overflow-hidden relative group flex items-center justify-center gap-4">
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
