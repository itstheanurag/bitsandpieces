"use client";
import React from "react";
import { BorderStyle } from "./types";

const cornerLines: BorderStyle = {
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
};

export default cornerLines;
