"use client";

import React from "react";
import { FiMoon, FiCode, FiLayers, FiZap, FiCheck } from "react-icons/fi";

export const BentoFeatures: React.FC = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-background border-t border-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <p className="inline-flex items-center gap-2 rounded-full border border-border/60 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4">
            Features
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6 text-foreground">
            Built for modern teams
          </h2>
          <p className="text-muted-foreground text-lg">
            A comprehensive ecosystem of components and templates designed to
            elevate your web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 auto-rows-[24rem]">
          {/* Card 1: Components (Span 2) */}
          <div className="lg:col-span-2 relative overflow-hidden rounded-[2.5rem] bg-card border border-border shadow-sm hover:shadow-md transition-all p-10 flex flex-col justify-between group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-border/50 bg-background/50 backdrop-blur text-xs font-medium">
                  <FiLayers className="w-3.5 h-3.5" /> Contains 100+ items
                </div>
              </div>
              <h3 className="text-3xl md:text-4xl font-semibold tracking-tight mb-3">
                Extensive Component Library
              </h3>
              <p className="text-muted-foreground max-w-md text-lg">
                Beautifully crafted, highly customizable UI components. From
                simple buttons to complex interactive blocks.
              </p>
            </div>
            {/* Visual element: Mock components cascading */}
            <div className="absolute -bottom-10 -right-10 w-[85%] sm:w-[70%] h-[70%] bg-gradient-to-tl from-background via-border/20 to-border/10 rounded-tl-[3rem] border-t border-l border-border/50 p-6 flex flex-col gap-5 transform transition-transform group-hover:-translate-y-3 group-hover:-translate-x-3 duration-700 shadow-2xl">
              <div className="h-14 w-full rounded-2xl bg-muted/60 border border-border/50 flex items-center px-4 shadow-sm backdrop-blur">
                <div className="h-4 w-4 rounded-full bg-primary/80 mr-4" />
                <div className="h-3 w-32 rounded-full bg-muted-foreground/30" />
                <div className="ml-auto flex gap-2">
                  <div className="h-6 w-12 rounded-lg bg-background/50 border border-border/40" />
                  <div className="h-6 w-12 rounded-lg bg-background/50 border border-border/40" />
                </div>
              </div>
              <div className="h-24 w-[90%] rounded-2xl bg-muted/40 border border-border/50 flex flex-col justify-center px-5 gap-4 shadow-sm backdrop-blur">
                <div className="h-3 w-20 rounded-full bg-muted-foreground/30" />
                <div className="h-10 w-full rounded-xl bg-background/60 border border-border/50" />
              </div>
              <div className="flex gap-4">
                <div className="h-12 w-32 rounded-full bg-primary/20 border border-primary/30 flex justify-center items-center backdrop-blur">
                  <div className="h-2 w-10 rounded-full bg-primary" />
                </div>
                <div className="h-12 w-32 rounded-full bg-muted/50 border border-border/50 flex justify-center items-center backdrop-blur">
                  <div className="h-2 w-12 rounded-full bg-muted-foreground/40" />
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Dark Mode First (Span 1) */}
          <div className="col-span-1 col-start-1 lg:col-start-3 relative overflow-hidden rounded-[2.5rem] bg-[#09090b] dark:bg-card border border-border shadow-lg transition-all p-10 flex flex-col justify-between group">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] bg-primary/20 blur-[80px] rounded-full group-hover:scale-125 transition-transform duration-1000" />

            {/* Abstract Dark Mode Orb */}
            <div className="absolute top-10 right-10 w-24 h-24 bg-gradient-to-br from-zinc-800 to-black rounded-full border border-white/10 shadow-[inset_0_-10px_20px_rgba(255,255,255,0.05),0_0_40px_rgba(0,0,0,0.8)] flex items-center justify-center transform group-hover:-translate-y-2 group-hover:-rotate-12 transition-all duration-700">
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-black to-zinc-800 shadow-[inset_0_5px_10px_rgba(255,255,255,0.1)]" />
            </div>

            <div className="relative z-10 h-full flex flex-col pointer-events-none">
              <div className="flex items-center gap-3 mb-auto">
                <div className="flex items-center justify-center w-12 h-12 rounded-2xl border border-white/10 bg-white/5 text-white backdrop-blur shadow-lg">
                  <FiMoon className="w-5 h-5" />
                </div>
              </div>
              <div className="mt-auto">
                <h3 className="text-3xl font-semibold tracking-tight text-white mb-3">
                  Dark Mode First
                </h3>
                <p className="text-zinc-400 text-base leading-relaxed">
                  Every component is engineered to look flawless in dark
                  backgrounds with tailored contrast ratios and subtle glows.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3: Interactive (Span 1) */}
          <div className="col-span-1 lg:col-start-1 lg:row-start-2 relative overflow-hidden rounded-[2.5rem] bg-card border border-border shadow-sm hover:shadow-md transition-all p-10 flex flex-col justify-between group">
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative z-10 flex flex-col h-full pointer-events-none">
              <div className="flex items-center gap-3 mb-auto">
                <div className="flex items-center justify-center w-12 h-12 rounded-2xl border border-border/50 bg-muted/50 text-amber-500 backdrop-blur shadow-sm">
                  <FiZap className="w-6 h-6" />
                </div>
              </div>

              {/* Abstract decorative floating elements */}
              <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[200px]">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-border/60 rounded-full border-dashed group-hover:rotate-180 transition-transform duration-[3s] ease-in-out" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 border border-primary/40 rounded-full group-hover:-rotate-90 transition-transform duration-[2s] ease-in-out">
                  <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-primary rounded-full shadow-[0_0_10px_rgba(var(--primary),0.8)]" />
                </div>
              </div>

              <div className="mt-auto">
                <h3 className="text-3xl font-semibold tracking-tight mb-3">
                  Alive Layouts
                </h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Micro-interactions and physics-based animations that make your
                  app feel polished and premium.
                </p>
              </div>
            </div>
          </div>

          {/* Card 4: Dev Experience (Span 2) */}
          <div className="lg:col-span-2 lg:col-start-2 lg:row-start-2 relative overflow-hidden rounded-[2.5rem] bg-card border border-border shadow-sm hover:shadow-md transition-all p-10 flex flex-col justify-between group">
            <div className="absolute inset-0 bg-gradient-to-tl from-emerald-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="flex flex-col md:flex-row h-full gap-8 relative z-10">
              <div className="flex-1 flex flex-col justify-end">
                <div className="flex items-center justify-center w-12 h-12 rounded-2xl border border-border/50 bg-muted/50 mb-8 backdrop-blur shadow-sm">
                  <FiCode className="w-6 h-6 text-emerald-500" />
                </div>
                <h3 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-4">
                  Zero setup required
                </h3>
                <p className="text-muted-foreground text-lg mb-6">
                  Just copy, paste, and ship. Fully typed with TypeScript and
                  styled with Tailwind CSS v4.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-base text-muted-foreground">
                    <FiCheck className="w-5 h-5 text-emerald-500 shrink-0" />{" "}
                    Native React APIs
                  </li>
                  <li className="flex items-center gap-3 text-base text-muted-foreground">
                    <FiCheck className="w-5 h-5 text-emerald-500 shrink-0" />{" "}
                    Accessible semantics
                  </li>
                </ul>
              </div>

              {/* Code Editor Decoration */}
              <div className="flex-1 hidden md:block relative pointer-events-none">
                <div className="absolute right-[-20%] bottom-[-10%] w-[130%] h-[110%] bg-muted/20 border border-border/50 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-xl transform transition-transform group-hover:-translate-x-4 group-hover:-translate-y-2 duration-700">
                  <div className="flex items-center gap-2 px-5 py-4 border-b border-border/50 bg-muted/40 backdrop-blur">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    <span className="ml-3 text-xs font-mono text-muted-foreground opacity-70">
                      button.tsx
                    </span>
                  </div>
                  <div className="p-6">
                    <pre className="text-xs sm:text-sm font-mono text-foreground/80 leading-[1.8]">
                      <span className="text-blue-400">import</span> {"{"} Button{" "}
                      {"}"} <span className="text-blue-400">from</span>{" "}
                      <span className="text-emerald-400">"@/components"</span>;
                      <br />
                      <br />
                      <span className="text-purple-400">export</span>{" "}
                      <span className="text-blue-400">default</span>{" "}
                      <span className="text-purple-400">function</span>{" "}
                      <span className="text-amber-200">App</span>() {"{"}
                      <br />
                      {"  "}
                      <span className="text-purple-400">return</span> (
                      <br />
                      {"    "}&lt;<span className="text-red-400">Button</span>{" "}
                      <span className="text-sky-300">variant</span>=
                      <span className="text-emerald-400">"outline"</span>&gt;
                      <br />
                      {"      "}Click me
                      <br />
                      {"    "}&lt;/<span className="text-red-400">Button</span>
                      &gt;
                      <br />
                      {"  "});
                      <br />
                      {"}"}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
