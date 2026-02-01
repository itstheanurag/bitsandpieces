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
        "group relative bg-background hover:bg-zinc-900/40 transition-colors duration-300 flex flex-col p-8 border-b border-r border-zinc-800/50",
        className,
      )}
    >
      <div className="flex items-start justify-between mb-8">
        <div className="p-3 bg-zinc-900 rounded-md border border-zinc-800 group-hover:border-zinc-600 transition-colors">
          <item.icon
            className="w-6 h-6 text-zinc-400 group-hover:text-white transition-colors"
            strokeWidth={1.5}
          />
        </div>

        {item.isNew && (
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
          </span>
        )}
      </div>

      <div className="space-y-3 flex-grow">
        <h3 className="text-lg font-medium text-zinc-200 group-hover:text-white transition-colors">
          {item.name}
        </h3>
        <p className="text-sm text-zinc-500 leading-relaxed max-w-[90%]">
          {item.description}
        </p>
      </div>

      <div className="pt-8 flex items-center justify-between mt-auto">
        <span className="text-[10px] uppercase tracking-wider font-mono text-zinc-600 group-hover:text-zinc-400 transition-colors bg-zinc-900/50 px-2 py-1 rounded">
          {item.category}
        </span>

        <button
          onClick={handleCopy}
          className="opacity-0 group-hover:opacity-100 transition-all duration-200 -translate-x-2 group-hover:translate-x-0 text-xs font-medium text-white flex items-center gap-2"
        >
          {copied ? (
            <span className="text-green-400 flex items-center gap-1">
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
