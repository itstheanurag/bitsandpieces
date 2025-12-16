"use client";

import * as React from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

interface CodeBlockProps {
  code: string;
  highlightedCode?: string;
  className?: string;
}

/**
 * CodeBlock - A code display component with syntax highlighting and copy functionality.
 *
 * Uses pre-highlighted HTML from Shiki for proper syntax highlighting.
 * Falls back to plain code if highlighted version not provided.
 */
export function CodeBlock({
  code,
  highlightedCode,
  className,
}: CodeBlockProps) {
  const [isCopied, setIsCopied] = React.useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div
      className={cn(
        "relative rounded-lg border border-neutral-200 dark:border-neutral-800 overflow-hidden",
        className
      )}
    >
      <button
        onClick={copyToClipboard}
        className="absolute top-3 right-3 z-10 p-2 rounded-md bg-neutral-800/50 hover:bg-neutral-700/50 transition-colors"
        aria-label="Copy code"
      >
        {isCopied ? (
          <Check className="w-4 h-4 text-green-500" />
        ) : (
          <Copy className="w-4 h-4 text-neutral-400" />
        )}
      </button>

      {highlightedCode ? (
        <div
          className="overflow-x-auto text-sm [&_pre]:p-4 [&_pre]:m-0 [&_.shiki]:bg-transparent"
          dangerouslySetInnerHTML={{ __html: highlightedCode }}
        />
      ) : (
        <pre className="p-4 overflow-x-auto text-sm bg-neutral-950 text-neutral-50 font-mono">
          <code>{code}</code>
        </pre>
      )}
    </div>
  );
}
