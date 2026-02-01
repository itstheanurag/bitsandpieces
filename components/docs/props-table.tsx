"use client";

import React from "react";
import { cn } from "@/registry/bitsandpieces/lib/utils";

interface PropDefinition {
  name: string;
  type: string;
  default?: string;
  description: string;
  required?: boolean;
}

interface PropsTableProps {
  props: PropDefinition[];
  className?: string;
}

export const PropsTable: React.FC<PropsTableProps> = ({ props, className }) => {
  return (
    <div className={cn("my-6 overflow-x-auto", className)}>
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="border-b border-border">
            <th className="py-3 px-4 text-left font-semibold text-foreground">
              Prop
            </th>
            <th className="py-3 px-4 text-left font-semibold text-foreground">
              Type
            </th>
            <th className="py-3 px-4 text-left font-semibold text-foreground">
              Default
            </th>
            <th className="py-3 px-4 text-left font-semibold text-foreground">
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          {props.map((prop, index) => (
            <tr
              key={prop.name}
              className={cn(
                "border-b border-border/50 hover:bg-muted/30 transition-colors",
                index === props.length - 1 && "border-b-0",
              )}
            >
              <td className="py-3 px-4">
                <code className="text-sm font-mono text-foreground bg-muted px-1.5 py-0.5 rounded">
                  {prop.name}
                </code>
                {prop.required && (
                  <span className="ml-1 text-destructive text-xs">*</span>
                )}
              </td>
              <td className="py-3 px-4">
                <code className="text-sm font-mono text-muted-foreground">
                  {prop.type}
                </code>
              </td>
              <td className="py-3 px-4">
                {prop.default ? (
                  <code className="text-sm font-mono text-muted-foreground">
                    {prop.default}
                  </code>
                ) : (
                  <span className="text-muted-foreground">-</span>
                )}
              </td>
              <td className="py-3 px-4 text-muted-foreground">
                {prop.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
