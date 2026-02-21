"use client";
import { motion } from "motion/react";
import { cn } from "../../lib/utils";
import type { MultiStepFormStep } from "./types";

interface StepIndicatorProps {
  steps: MultiStepFormStep[];
  currentStep: number;
}

function getStepVariants(direction: 1 | -1) {
  return {
    initial: { opacity: 0, x: direction * 40, filter: "blur(4px)" },
    animate: { opacity: 1, x: 0, filter: "blur(0px)" },
    exit: { opacity: 0, x: direction * -40, filter: "blur(4px)" },
  };
}

function StepIndicator({ steps, currentStep }: StepIndicatorProps) {
  const progress = steps.length > 1 ? currentStep / (steps.length - 1) : 0;

  return (
    <nav aria-label="Form progress" className="space-y-4">
      {/* Animated progress bar */}
      <div className="relative h-1.5 w-full rounded-full bg-muted/40 overflow-hidden">
        <motion.div
          className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-primary via-primary/80 to-primary/60"
          initial={false}
          animate={{ width: `${progress * 100}%` }}
          transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
        />
      </div>

      {/* Step circles */}
      <div className="flex items-start justify-between">
        {steps.map((step, idx) => {
          const isActive = idx === currentStep;
          const isCompleted = idx < currentStep;

          return (
            <div key={idx} className="flex flex-col items-center gap-1.5">
              <motion.div
                className={cn(
                  "relative flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition-all duration-300",
                  isActive &&
                    "bg-primary text-primary-foreground shadow-md shadow-primary/20 ring-[3px] ring-primary/15",
                  isCompleted &&
                    "bg-primary/10 text-primary ring-1 ring-primary/20",
                  !isActive &&
                    !isCompleted &&
                    "bg-muted/50 text-muted-foreground/60 ring-1 ring-border/20",
                )}
                aria-current={isActive ? "step" : undefined}
              >
                {isCompleted ? (
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </motion.svg>
                ) : (
                  idx + 1
                )}
              </motion.div>

              {step.title && (
                <span
                  className={cn(
                    "text-[0.65rem] font-medium leading-tight max-w-16 text-center hidden sm:block transition-colors duration-300",
                    isActive
                      ? "text-foreground"
                      : isCompleted
                        ? "text-primary/70"
                        : "text-muted-foreground/60",
                  )}
                >
                  {step.title}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
}

export { StepIndicator, getStepVariants };
export type { StepIndicatorProps };
