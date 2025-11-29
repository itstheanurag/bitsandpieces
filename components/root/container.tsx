import { cn } from "@/lib/utils";
import React from "react";

const Container: React.FC<{
  children?: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <div className={cn("max-w-7xl w-full mx-auto py-2 px-4", className)}>
      {children}
    </div>
  );
};

export default Container;
