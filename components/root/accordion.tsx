"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionProps {
  children: React.ReactNode;
  type: "single" | "multiple";
  collapsible?: boolean;
  className?: string;
}

interface AccordionItemProps {
  children: React.ReactNode;
  value: string;
  className?: string;
}

interface AccordionTriggerProps {
  children: React.ReactNode;
  className?: string;
}

interface AccordionContentProps {
  children: React.ReactNode;
  className?: string;
}

const AccordionContext = React.createContext<{
  selected: string[];
  toggle: (value: string) => void;
}>({ selected: [], toggle: () => {} });

const AccordionItemContext = React.createContext<{ value: string }>({
  value: "",
});

export function Accordion({
  children,
  type,
  collapsible,
  className,
}: AccordionProps) {
  const [selected, setSelected] = React.useState<string[]>([]);

  const toggle = (value: string) => {
    if (type === "single") {
      setSelected(selected.includes(value) && collapsible ? [] : [value]);
    } else {
      setSelected(
        selected.includes(value)
          ? selected.filter((item) => item !== value)
          : [...selected, value]
      );
    }
  };

  return (
    <AccordionContext.Provider value={{ selected, toggle }}>
      <div className={cn("w-full", className)}>{children}</div>
    </AccordionContext.Provider>
  );
}

export function AccordionItem({
  children,
  value,
  className,
}: AccordionItemProps) {
  return (
    <AccordionItemContext.Provider value={{ value }}>
      <div
        className={cn(
          "border-b border-neutral-200 dark:border-neutral-800",
          className
        )}
      >
        {children}
      </div>
    </AccordionItemContext.Provider>
  );
}

export function AccordionTrigger({
  children,
  className,
}: AccordionTriggerProps) {
  const { toggle } = React.useContext(AccordionContext);
  const { value } = React.useContext(AccordionItemContext);
  const { selected } = React.useContext(AccordionContext);
  const isOpen = selected.includes(value);

  return (
    <button
      onClick={() => toggle(value)}
      className={cn(
        "flex w-full items-center justify-between py-4 font-semibold text-left",
        className
      )}
    >
      {children}
      <ChevronDown
        className={cn("h-4 w-4 shrink-0 transition-transform duration-200", {
          "rotate-180": isOpen,
        })}
      />
    </button>
  );
}

export function AccordionContent({
  children,
  className,
}: AccordionContentProps) {
  const { value } = React.useContext(AccordionItemContext);
  const { selected } = React.useContext(AccordionContext);
  const isOpen = selected.includes(value);

  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          initial="collapsed"
          animate="open"
          exit="collapsed"
          variants={{
            open: { opacity: 1, height: "auto" },
            collapsed: { opacity: 0, height: 0 },
          }}
          transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
          className="overflow-hidden text-neutral-600 dark:text-neutral-400"
        >
          <div className={cn("pb-4 pt-0", className)}>{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
