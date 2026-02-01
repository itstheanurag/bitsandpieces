"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/registry/bitsandpieces/lib/utils";
import { BiCheck, BiCopy } from "react-icons/bi";

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  className?: string;
  showLineNumbers?: boolean;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language = "tsx",
  filename,
  className,
  showLineNumbers = false,
}) => {
  const [copied, setCopied] = useState(false);
  const [highlightedCode, setHighlightedCode] = useState<string>("");

  useEffect(() => {
    // Dynamic import for shiki to avoid SSR issues
    const highlightCode = async () => {
      try {
        const { codeToHtml } = await import("shiki");
        const html = await codeToHtml(code, {
          lang: language,
          theme: "github-dark-default",
        });
        setHighlightedCode(html);
      } catch (error) {
        console.error("Failed to highlight code:", error);
        setHighlightedCode(`<pre><code>${escapeHtml(code)}</code></pre>`);
      }
    };

    highlightCode();
  }, [code, language]);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={cn(
        "rounded-lg border border-border overflow-hidden my-4",
        className,
      )}
    >
      {/* Header with filename and copy button */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-muted/30">
        <div className="flex items-center gap-2">
          {filename && (
            <span className="text-xs font-mono text-muted-foreground">
              {filename}
            </span>
          )}
          {!filename && (
            <span className="text-xs font-mono text-muted-foreground uppercase">
              {language}
            </span>
          )}
        </div>
        <button
          onClick={handleCopy}
          className="p-1.5 rounded-md hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Copy code"
        >
          {copied ? (
            <BiCheck className="w-4 h-4 text-green-500" />
          ) : (
            <BiCopy className="w-4 h-4" />
          )}
        </button>
      </div>

      {/* Code content */}
      <div
        className="overflow-x-auto text-sm [&_pre]:p-4 [&_pre]:m-0 [&_pre]:bg-transparent [&_code]:bg-transparent bg-[#0d1117]"
        dangerouslySetInnerHTML={{
          __html:
            highlightedCode ||
            `<pre class="p-4"><code>${escapeHtml(code)}</code></pre>`,
        }}
      />
    </div>
  );
};

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
