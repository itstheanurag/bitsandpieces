"use client";
import React from "react";
import { BorderStyle } from "./types";

const thickBrackets: BorderStyle = {
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
};

export default thickBrackets;
