"use client";
import React from "react";
import { BorderStyle } from "./types";

const curvedLCorners: BorderStyle = {
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
};

export default curvedLCorners;
