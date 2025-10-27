"use client";
import React from "react";
import { BorderStyle } from "./types";

const cornerPlusSigns: BorderStyle = {
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
};

export default cornerPlusSigns;
