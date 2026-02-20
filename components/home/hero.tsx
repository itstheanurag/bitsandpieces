"use client";

import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { motion, Variants } from "motion/react";
import { FiCommand, FiArrowRight } from "react-icons/fi";

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden border-b border-border/60 pt-32 pb-20 lg:pt-48 lg:pb-32 flex flex-col items-center justify-center min-h-[90vh] bg-background">
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div variants={fadeUpVariant} className="flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/40 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-md transition-colors hover:bg-muted/60">
              <span className="flex h-2 w-2 rounded-full bg-primary"></span>
              Introducing Bits&Pieces v0.1
              <FiArrowRight className="ml-1 h-3 w-3" />
            </div>
          </motion.div>

          {/* Headline */}
          <motion.div
            variants={fadeUpVariant}
            className="space-y-6 max-w-4xl mx-auto"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.1] bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70">
              Ship beautiful UI, <br className="hidden sm:block" /> faster than
              ever.
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
              A meticulously crafted collection of open-source React components,
              blocks, and templates designed for modern web applications.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUpVariant}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <Link href="/docs">
              <Button
                size="lg"
                className="h-12 px-8 rounded-full text-base font-medium shadow-lg shadow-primary/20"
              >
                Start Building
              </Button>
            </Link>
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-border/60 bg-muted/20 backdrop-blur text-sm font-mono text-muted-foreground">
              <FiCommand className="h-4 w-4" />
              <span>npm i bitsandpieces</span>
              <button
                className="ml-2 hover:text-foreground transition-colors p-1"
                aria-label="Copy install command"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5"
                >
                  <path
                    d="M1 9.50006C1 10.3285 1.67157 11.0001 2.5 11.0001H4L4 10.0001H2.5C2.22386 10.0001 2 9.7762 2 9.50006L2 2.50006C2 2.22392 2.22386 2.00006 2.5 2.00006L9.5 2.00006C9.77614 2.00006 10 2.22392 10 2.50006V4.00002H5.5C4.67157 4.00002 4 4.67159 4 5.50002V12.5C4 13.3284 4.67157 14 5.5 14H12.5C13.3284 14 14 13.3284 14 12.5V5.50002C14 4.67159 13.3284 4.00002 12.5 4.00002H11V2.50006C11 1.67163 10.3284 1.00006 9.5 1.00006H2.5C1.67157 1.00006 1 1.67163 1 2.50006V9.50006ZM5.5 5.00002H12.5C12.7761 5.00002 13 5.22388 13 5.50002V12.5C13 12.7762 12.7761 13 12.5 13H5.5C5.22386 13 5 12.7762 5 12.5V5.50002C5 5.22388 5.22386 5.00002 5.5 5.00002Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
