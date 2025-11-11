import { cn } from "@/lib/utils";
import React from "react";

const Container: React.FC<{
  children?: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <div className={cn("max-w-6xl w-full mx-auto py-2 px-4 border border-border", className)}>
      {children}
    </div>
  );
};

export default Container;
