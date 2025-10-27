"use client";
import React from "react";
import { BorderStyle } from "./types";

const scanLine: BorderStyle = {
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
};

export default scanLine;
