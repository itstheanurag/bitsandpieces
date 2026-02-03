"use client";
import React from "react";
import { ArrowRight, Check } from "lucide-react";
import { cn } from "@/registry/bitsandpieces/lib/utils";

export interface ComponentItem {
  id: string;
  name: string;
  description: string;
  category: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  isNew?: boolean;
  codePreview?: string;
}

interface ComponentCardProps {
  item: ComponentItem;
  className?: string;
}

export const ComponentCard: React.FC<ComponentCardProps> = ({
  item,
  className,
}) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={cn(
        "group relative overflow-hidden bg-card/70 transition-all duration-300 flex flex-col p-6 rounded-2xl border border-border/70 shadow-[0_12px_40px_-30px_rgba(0,0,0,0.65)] hover:-translate-y-1 hover:border-border",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-br from-foreground/10 via-transparent to-transparent" />
      <div className="flex items-start justify-between mb-4">
        <div className="p-2.5 bg-muted/60 rounded-xl group-hover:bg-background transition-colors border border-border/50 group-hover:border-border">
          <item.icon
            className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors"
            strokeWidth={1.5}
          />
        </div>

        {item.isNew && (
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
        )}
      </div>

      <div className="space-y-2 flex-grow">
        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
          {item.name}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {item.description}
        </p>
      </div>

      <div className="pt-4 flex items-center justify-between mt-auto">
        <span className="text-[10px] uppercase tracking-wider font-mono text-muted-foreground transition-colors bg-muted/50 px-2 py-1 rounded capitalize">
          {item.category}
        </span>

        <button
          onClick={handleCopy}
          className="opacity-0 group-hover:opacity-100 transition-all duration-200 -translate-x-2 group-hover:translate-x-0 text-xs font-medium text-foreground flex items-center gap-1.5 hover:text-primary"
        >
          {copied ? (
            <span className="text-green-500 flex items-center gap-1">
              Copied <Check className="w-3 h-3" />
            </span>
          ) : (
            <span className="flex items-center gap-1">
              Get Code <ArrowRight className="w-3 h-3" />
            </span>
          )}
        </button>
      </div>
    </div>
  );
};
