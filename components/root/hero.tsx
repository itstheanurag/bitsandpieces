"use client";

import { motion } from "framer-motion";
import { ArrowRight, Component, Layers } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden min-h-screen flex flex-col items-center justify-center pt-20">
      {/* Background */}
      <div className="absolute inset-0 z-0 w-full h-full bg-white dark:bg-neutral-950 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-neutral-400 opacity-20 blur-[100px] dark:bg-neutral-500"></div>
      </div>

      {/* Content */}
      <div className="z-10 flex flex-col items-center text-center max-w-5xl mx-auto px-4 gap-6">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm text-xs font-medium text-neutral-600 dark:text-neutral-400"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neutral-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-neutral-500"></span>
          </span>
          v1.0.0 Public Beta
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-neutral-900 dark:text-white"
        >
          Craft <span className="text-neutral-500">Better</span> Interfaces
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 to-neutral-500 dark:from-neutral-100 dark:to-neutral-500">
            Piece by Piece.
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl"
        >
          A collection of modern, copy-paste React components. From small{" "}
          <span className="font-semibold text-neutral-900 dark:text-neutral-200">
            Bits
          </span>{" "}
          like buttons and shadows to large{" "}
          <span className="font-semibold text-neutral-900 dark:text-neutral-200">
            Pieces
          </span>{" "}
          like navbars and dashboards.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 mt-4"
        >
          <Link
            href="/docs"
            className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-950 dark:bg-neutral-50 px-8 font-medium text-neutral-50 dark:text-neutral-950 transition-all duration-300 hover:bg-neutral-800 dark:hover:bg-neutral-200 hover:ring-2 hover:ring-neutral-950 dark:hover:ring-neutral-50 hover:ring-offset-2"
          >
            <span className="mr-2">Browse Components</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="https://github.com"
            target="_blank"
            className="inline-flex h-12 items-center justify-center rounded-md border border-neutral-200 dark:border-neutral-800 bg-transparent px-8 font-medium text-neutral-900 dark:text-neutral-100 transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-900"
          >
            GitHub
          </Link>
        </motion.div>
      </div>

      {/* Visual Preview / Abstract Representation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative w-full max-w-6xl mt-16 px-4"
      >
        <div className="relative rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/50 backdrop-blur-xl p-4 shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-100/20 to-transparent dark:from-neutral-800/20 pointer-events-none rounded-xl" />
          {/* Mock UI Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[400px] w-full overflow-hidden">
            {/* Card 1: Bits */}
            <div className="col-span-1 bg-white dark:bg-neutral-950 rounded-lg border border-neutral-200 dark:border-neutral-800 p-6 flex flex-col gap-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="p-2 rounded-md bg-neutral-100 dark:bg-neutral-900">
                  <Component className="w-4 h-4" />
                </div>
                <h3 className="font-semibold">Bits</h3>
              </div>
              <div className="space-y-3">
                <div className="h-8 w-24 bg-neutral-100 dark:bg-neutral-900 rounded animate-pulse" />
                <div className="h-8 w-32 bg-neutral-100 dark:bg-neutral-900 rounded animate-pulse delay-75" />
                <div className="h-8 w-20 bg-neutral-100 dark:bg-neutral-900 rounded animate-pulse delay-150" />
              </div>
            </div>

            {/* Card 2: Pieces */}
            <div className="col-span-1 md:col-span-2 bg-white dark:bg-neutral-950 rounded-lg border border-neutral-200 dark:border-neutral-800 p-6 relative overflow-hidden">
              <div className="flex items-center gap-2 mb-6">
                <div className="p-2 rounded-md bg-neutral-100 dark:bg-neutral-900">
                  <Layers className="w-4 h-4" />
                </div>
                <h3 className="font-semibold">Pieces</h3>
              </div>
              {/* Mock Navbar */}
              <div className="w-full h-12 border border-neutral-200 dark:border-neutral-800 rounded-md mb-4 flex items-center px-4 justify-between">
                <div className="w-20 h-4 bg-neutral-200 dark:bg-neutral-800 rounded" />
                <div className="flex gap-2">
                  <div className="w-16 h-4 bg-neutral-100 dark:bg-neutral-900 rounded" />
                  <div className="w-16 h-4 bg-neutral-100 dark:bg-neutral-900 rounded" />
                </div>
              </div>
              {/* Mock Hero Content */}
              <div className="space-y-4">
                <div className="w-3/4 h-8 bg-neutral-200 dark:bg-neutral-800 rounded" />
                <div className="w-1/2 h-4 bg-neutral-100 dark:bg-neutral-900 rounded" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
