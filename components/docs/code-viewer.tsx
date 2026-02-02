"use client";

import React, { useState } from "react";
import { BiCopy, BiCheck } from "react-icons/bi";

interface CodeViewerProps {
  code?: string;
  highlightedHtml?: string;
  onHighlight?: (code: string) => Promise<string>;
  className?: string;
}

export function CodeViewer({
  code,
  highlightedHtml,
  onHighlight,
  className,
}: CodeViewerProps) {
  const [html, setHtml] = useState(highlightedHtml || "<pre>Loading...</pre>");
  const [displayCode, setDisplayCode] = useState(code);
  const [copied, setCopied] = useState(false);

  React.useEffect(() => {
    if (highlightedHtml) {
      setHtml(highlightedHtml);
    } else if (code && onHighlight) {
      onHighlight(code).then((highlighted) => {
        setHtml(highlighted);
      });
    }
  }, [code, highlightedHtml, onHighlight]);

  const handleCopy = async () => {
    const textToCopy = displayCode || code;
    if (textToCopy) {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className={className}>
      {/* Copy Button */}
      <button
        onClick={handleCopy}
        className="absolute top-2 right-6 p-2 rounded-md bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors z-10"
        aria-label="Copy code"
      >
        {copied ? (
          <BiCheck className="w-4 h-4 text-green-500" />
        ) : (
          <BiCopy className="w-4 h-4" />
        )}
      </button>

      <div
        className="p-4 text-sm font-mono overflow-auto max-h-[500px] bg-[#0d1117]"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}

// Utility function to escape HTML
export function escapeHtml(text: string): string {
  return text.replace(/&/g, "&").replace(/</g, "<").replace(/>/g, ">");
}
