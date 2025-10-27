"use client";
import React from "react";
import { BorderStyle } from "./types";

const cornerDots: BorderStyle = {
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
};

export default cornerDots;
