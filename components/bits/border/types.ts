import React from "react";

export type BorderStyle = {
  name: string;
  outerClass: string;
  innerClass: string;
  contentWrapper: ((children: React.ReactNode) => React.ReactNode) | null;
};
