import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden border-b border-border/60 pt-24 pb-16 lg:pt-32 lg:pb-24">
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.05),transparent_60%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.05),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.04),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.05]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/50 px-3 py-1 text-[11px] uppercase tracking-[0.35em] text-muted-foreground">
              Modern UI Library
            </div>

            <div className="space-y-5">
              <h1 className="text-5xl sm:text-6xl font-semibold tracking-tight leading-[1.05]">
                Components, blocks, templates — designed to ship.
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
                Build in layers. Every element shares the same visual system, so
                your product stays consistent from a button to a full template.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link href="/docs">
                <Button size="lg" className="h-12 px-8">
                  Explore Library
                </Button>
              </Link>
              <Link href="/docs">
                <Button variant="outline" size="lg" className="h-12 px-8">
                  View Documentation
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 text-[11px] uppercase tracking-[0.35em] text-muted-foreground">
              <span className="rounded-full border border-border/60 bg-muted/40 px-3 py-1">
                Components
              </span>
              <span className="rounded-full border border-border/60 bg-muted/40 px-3 py-1">
                Blocks
              </span>
              <span className="rounded-full border border-border/60 bg-muted/40 px-3 py-1">
                Templates
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-8 rounded-[32px] bg-gradient-to-br from-foreground/15 via-transparent to-transparent blur-2xl opacity-70" />
            <div className="relative rounded-3xl border border-border/70 bg-card/70 p-6 shadow-[0_30px_80px_-55px_rgba(0,0,0,0.7)] backdrop-blur">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-muted-foreground">
                <span>Preview</span>
                <span>v2.1</span>
              </div>

              <div className="mt-6 space-y-4">
                <div className="rounded-2xl border border-border/60 bg-muted/40 p-4">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>Component</span>
                    <span>Button</span>
                  </div>
                  <div className="mt-4 flex gap-3">
                    <button className="h-8 rounded-full bg-foreground px-4 text-[10px] font-semibold uppercase tracking-wide text-background">
                      Primary
                    </button>
                    <button className="h-8 rounded-full border border-border/70 px-4 text-[10px] font-semibold uppercase tracking-wide text-foreground">
                      Ghost
                    </button>
                  </div>
                </div>

                <div className="rounded-2xl border border-border/60 bg-muted/30 p-4">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>Block</span>
                    <span>Hero Section</span>
                  </div>
                  <div className="mt-4 space-y-3">
                    <div className="h-3 w-2/3 rounded-full bg-muted" />
                    <div className="h-3 w-full rounded-full bg-muted/70" />
                    <div className="h-3 w-4/5 rounded-full bg-muted/50" />
                  </div>
                </div>

                <div className="rounded-2xl border border-border/60 bg-muted/20 p-4">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>Template</span>
                    <span>SaaS App</span>
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-3">
                    <div className="h-10 rounded-xl bg-muted/70" />
                    <div className="h-10 rounded-xl bg-muted/40" />
                    <div className="h-10 rounded-xl bg-muted/40" />
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
