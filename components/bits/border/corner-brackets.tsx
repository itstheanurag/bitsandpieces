"use client";
import React from "react";
import { BorderStyle } from "./types";

const cornerBrackets: BorderStyle = {
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
};

export default cornerBrackets;
