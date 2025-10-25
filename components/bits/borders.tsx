"use client";
import React from "react";

export type BorderStyle = {
  name: string;
  outerClass: string;
  innerClass: string;
  contentWrapper: ((children: React.ReactNode) => React.ReactNode) | null;
};

const borderStyles: BorderStyle[] = [
  {
    name: "Corner Plus Signs",
    outerClass:
      "relative px-8 py-6 border border-slate-400 dark:border-slate-600",
    innerClass: "relative z-10",
    contentWrapper: (children: React.ReactNode) => (
      <>
        <div className="absolute top-0 left-0 w-3 h-3 -translate-x-1/2 -translate-y-1/2">
          <div className="absolute inset-x-0 h-0.5 bg-slate-400 dark:bg-slate-600 top-1/2 -translate-y-1/2"></div>
          <div className="absolute inset-y-0 w-0.5 bg-slate-400 dark:bg-slate-600 left-1/2 -translate-x-1/2"></div>
        </div>
        <div className="absolute top-0 right-0 w-3 h-3 translate-x-1/2 -translate-y-1/2">
          <div className="absolute inset-x-0 h-0.5 bg-slate-400 dark:bg-slate-600 top-1/2 -translate-y-1/2"></div>
          <div className="absolute inset-y-0 w-0.5 bg-slate-400 dark:bg-slate-600 left-1/2 -translate-x-1/2"></div>
        </div>
        <div className="absolute bottom-0 left-0 w-3 h-3 -translate-x-1/2 translate-y-1/2">
          <div className="absolute inset-x-0 h-0.5 bg-slate-400 dark:bg-slate-600 top-1/2 -translate-y-1/2"></div>
          <div className="absolute inset-y-0 w-0.5 bg-slate-400 dark:bg-slate-600 left-1/2 -translate-x-1/2"></div>
        </div>
        <div className="absolute bottom-0 right-0 w-3 h-3 translate-x-1/2 translate-y-1/2">
          <div className="absolute inset-x-0 h-0.5 bg-slate-400 dark:bg-slate-600 top-1/2 -translate-y-1/2"></div>
          <div className="absolute inset-y-0 w-0.5 bg-slate-400 dark:bg-slate-600 left-1/2 -translate-x-1/2"></div>
        </div>
        {children}
      </>
    ),
  },
  {
    name: "Scan Line",
    outerClass:
      "relative px-8 py-6 rounded-lg border-2 border-slate-700 overflow-hidden group",
    innerClass: "relative z-10",
    contentWrapper: (children: React.ReactNode) => (
      <>
        <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-slate-400 to-transparent -translate-y-full group-hover:translate-y-[400%] transition-transform duration-1000"></div>
        {children}
      </>
    ),
  },
  {
    name: "Corner Lines",
    outerClass: "relative px-8 py-6",
    innerClass: "relative z-10",
    contentWrapper: (children: React.ReactNode) => (
      <>
        <div className="absolute top-0 left-0 w-6 h-0.5 bg-slate-400 dark:bg-slate-600 -translate-y-1"></div>
        <div className="absolute top-0 left-0 w-0.5 h-6 bg-slate-400 dark:bg-slate-600 -translate-x-1"></div>
        <div className="absolute top-0 right-0 w-6 h-0.5 bg-slate-400 dark:bg-slate-600 -translate-y-1"></div>
        <div className="absolute top-0 right-0 w-0.5 h-6 bg-slate-400 dark:bg-slate-600 translate-x-1"></div>
        <div className="absolute bottom-0 left-0 w-6 h-0.5 bg-slate-400 dark:bg-slate-600 translate-y-1"></div>
        <div className="absolute bottom-0 left-0 w-0.5 h-6 bg-slate-400 dark:bg-slate-600 -translate-x-1"></div>
        <div className="absolute bottom-0 right-0 w-6 h-0.5 bg-slate-400 dark:bg-slate-600 translate-y-1"></div>
        <div className="absolute bottom-0 right-0 w-0.5 h-6 bg-slate-400 dark:bg-slate-600 translate-x-1"></div>
        {children}
      </>
    ),
  },
  {
    name: "Curved L Corners",
    outerClass: "relative px-8 py-6 rounded-lg",
    innerClass: "relative z-10",
    contentWrapper: (children: React.ReactNode) => (
      <>
        <svg
          className="absolute top-0 left-0 w-6 h-6 -translate-x-1 -translate-y-1 text-slate-400 dark:text-slate-600"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M0 24 L0 6 Q0 0 6 0 L24 0"
            stroke={"currentColor"}
            strokeWidth="2"
          />
        </svg>
        <svg
          className="absolute top-0 right-0 w-6 h-6 translate-x-1 -translate-y-1 rotate-90 text-slate-400 dark:text-slate-600"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M0 24 L0 6 Q0 0 6 0 L24 0"
            stroke={"currentColor"}
            strokeWidth="2"
          />
        </svg>
        <svg
          className="absolute bottom-0 left-0 w-6 h-6 -translate-x-1 translate-y-1 -rotate-90 text-slate-400 dark:text-slate-600"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M0 24 L0 6 Q0 0 6 0 L24 0"
            stroke={"currentColor"}
            strokeWidth="2"
          />
        </svg>
        <svg
          className="absolute bottom-0 right-0 w-6 h-6 translate-x-1 translate-y-1 rotate-180 text-slate-400 dark:text-slate-600"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M0 24 L0 6 Q0 0 6 0 L24 0"
            stroke={"currentColor"}
            strokeWidth="2"
          />
        </svg>
        {children}
      </>
    ),
  },
  {
    name: "Corner Brackets",
    outerClass: "relative px-8 py-6 ",
    innerClass: "relative z-10",
    contentWrapper: (children: React.ReactNode) => (
      <>
        <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-slate-400 -translate-x-1 -translate-y-1"></div>
        <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-slate-400 translate-x-1 -translate-y-1"></div>
        <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-slate-400 -translate-x-1 translate-y-1"></div>
        <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-slate-400 translate-x-1 translate-y-1"></div>
        {children}
      </>
    ),
  },
  {
    name: "Corner Dots",
    outerClass:
      "relative px-8 py-6 border border-slate-400 dark:border-slate-600",
    innerClass: "relative z-10",
    contentWrapper: (children: React.ReactNode) => (
      <>
        {/* top-left */}
        <div className="absolute -top-0.5 -left-0.5 w-1 h-1 bg-slate-400 dark:bg-slate-600 rounded-full"></div>
        {/* top-right */}
        <div className="absolute -top-0.5 -right-0.5 w-1 h-1 bg-slate-400 dark:bg-slate-600 rounded-full"></div>
        {/* bottom-left */}
        <div className="absolute -bottom-0.5 -left-0.5 w-1 h-1 bg-slate-400 dark:bg-slate-600 rounded-full"></div>
        {/* bottom-right */}
        <div className="absolute -bottom-0.5 -right-0.5 w-1 h-1 bg-slate-400 dark:bg-slate-600 rounded-full"></div>{" "}
        {children}
      </>
    ),
  },
  {
    name: "Corner Dot Square",
    outerClass:
      "relative px-8 py-6 border border-slate-400 dark:border-slate-600",
    innerClass: "relative z-10",
    contentWrapper: (children: React.ReactNode) => (
      <>
        {/* top-left */}
        <div className="absolute -top-0.5 -left-0.5 w-1 h-1 bg-slate-400 dark:bg-slate-600 "></div>
        {/* top-right */}
        <div className="absolute -top-0.5 -right-0.5 w-1 h-1 bg-slate-400 dark:bg-slate-600 "></div>
        {/* bottom-left */}
        <div className="absolute -bottom-0.5 -left-0.5 w-1 h-1 bg-slate-400 dark:bg-slate-600 "></div>
        {/* bottom-right */}
        <div className="absolute -bottom-0.5 -right-0.5 w-1 h-1 bg-slate-400 dark:bg-slate-600 "></div>{" "}
        {children}
      </>
    ),
  },

  {
    name: "Minimal Corners",
    outerClass: "relative px-8 py-6 rounded-lg",
    innerClass: "relative z-10",
    contentWrapper: (children: React.ReactNode) => (
      <>
        <div className="absolute top-0 left-0 w-3 h-0.5 bg-slate-400 dark:bg-slate-600"></div>
        <div className="absolute top-0 left-0 w-0.5 h-3 bg-slate-400 dark:bg-slate-600"></div>
        <div className="absolute top-0 right-0 w-3 h-0.5 bg-slate-400 dark:bg-slate-600"></div>
        <div className="absolute top-0 right-0 w-0.5 h-3 bg-slate-400 dark:bg-slate-600"></div>
        <div className="absolute bottom-0 left-0 w-3 h-0.5 bg-slate-400 dark:bg-slate-600"></div>
        <div className="absolute bottom-0 left-0 w-0.5 h-3 bg-slate-400 dark:bg-slate-600"></div>
        <div className="absolute bottom-0 right-0 w-3 h-0.5 bg-slate-400 dark:bg-slate-600"></div>
        <div className="absolute bottom-0 right-0 w-0.5 h-3 bg-slate-400 dark:bg-slate-600"></div>
        {children}
      </>
    ),
  },
  {
    name: "Extended Corners",
    outerClass: "relative px-8 py-6 rounded-lg",
    innerClass: "relative z-10",
    contentWrapper: (children: React.ReactNode) => (
      <>
        <div className="absolute top-0 left-0 w-10 h-0.5 bg-slate-400 dark:bg-slate-600 -translate-y-1"></div>
        <div className="absolute top-0 left-0 w-0.5 h-10 bg-slate-400 dark:bg-slate-600 -translate-x-1"></div>
        <div className="absolute top-0 right-0 w-10 h-0.5 bg-slate-400 dark:bg-slate-600 -translate-y-1"></div>
        <div className="absolute top-0 right-0 w-0.5 h-10 bg-slate-400 dark:bg-slate-600 translate-x-1"></div>
        <div className="absolute bottom-0 left-0 w-10 h-0.5 bg-slate-400 dark:bg-slate-600 translate-y-1"></div>
        <div className="absolute bottom-0 left-0 w-0.5 h-10 bg-slate-400 dark:bg-slate-600 -translate-x-1"></div>
        <div className="absolute bottom-0 right-0 w-10 h-0.5 bg-slate-400 dark:bg-slate-600 translate-y-1"></div>
        <div className="absolute bottom-0 right-0 w-0.5 h-10 bg-slate-400 dark:bg-slate-600 translate-x-1"></div>
        {children}
      </>
    ),
  },
  {
    name: "Thick Brackets",
    outerClass: "relative px-8 py-6 border border-slate-800",
    innerClass: "relative z-10",
    contentWrapper: (children: React.ReactNode) => (
      <>
        <div className="absolute top-0 left-0 w-6 h-6 border-t-[3px] border-l-[3px] border-slate-400 -translate-x-1 -translate-y-1 rounded-tl"></div>
        <div className="absolute top-0 right-0 w-6 h-6 border-t-[3px] border-r-[3px] border-slate-400 translate-x-1 -translate-y-1 rounded-tr"></div>
        <div className="absolute bottom-0 left-0 w-6 h-6 border-b-[3px] border-l-[3px] border-slate-400 -translate-x-1 translate-y-1 rounded-bl"></div>
        <div className="absolute bottom-0 right-0 w-6 h-6 border-b-[3px] border-r-[3px] border-slate-400 translate-x-1 translate-y-1 rounded-br"></div>
        {children}
      </>
    ),
  },
  {
    name: "Simple Frame",
    outerClass: "relative px-8 py-6 rounded-lg border-2 border-slate-700",
    innerClass: "",
    contentWrapper: null,
  },
  {
    name: "Offset Frame",
    outerClass:
      "relative px-8 py-6 rounded-lg border border-slate-700 dark:shadow-[4px_4px_0px_0px_rgba(51,65,85,1)] shadow-[4px_4px_0px_0px_rgba(203,213,225,1)]",
    innerClass: "",
    contentWrapper: null,
  },
];

export default borderStyles;
