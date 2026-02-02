"use client";

import React, { useState, Suspense } from "react";
import { registry } from "@/registry/registry-data";
import { exampleRegistry } from "@/registry/example-registry";
import { CodeViewer } from "./code-viewer";

interface ComponentPreviewProps {
  name: string;
  className?: string;
}

export function ComponentPreview({ name, className }: ComponentPreviewProps) {
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");

  // Check if it's a registry component or an example
  const registryItem = registry[name];
  const exampleItem = exampleRegistry[name];

  const item = registryItem || exampleItem;

  if (!item) {
    return (
      <div className="p-4 border border-destructive rounded-lg text-destructive">
        Component "{name}" not found.
      </div>
    );
  }

  const isExample = !!exampleItem;
  const PreviewComponent = item.component;

  if (!PreviewComponent) {
    return (
      <div className="p-4 border border-destructive rounded-lg text-destructive">
        Component "{name}" has no preview.
      </div>
    );
  }

  return (
    <div className={className}>
      <div className="mb-2 flex items-center gap-2">
        {isExample && (
          <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
            Example
          </span>
        )}
        <span className="text-sm font-medium text-muted-foreground">
          {item.title}
        </span>
      </div>

      {/* Tab Header */}
      <div className="flex items-center justify-between border-b border-border bg-muted/30 px-4 py-2.5 rounded-t-xl border border-border">
        <div className="flex gap-1 bg-muted/50 p-1 rounded-lg">
          <button
            onClick={() => setActiveTab("preview")}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
              activeTab === "preview"
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground hover:bg-background/50"
            }`}
          >
            <span className="w-2.5 h-2.5 rounded-full border-2 border-current" />
            Preview
          </button>
          <button
            onClick={() => setActiveTab("code")}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
              activeTab === "code"
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground hover:bg-background/50"
            }`}
          >
            <svg
              className="h-3.5 w-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              />
            </svg>
            Code
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="rounded-b-xl border-x border-b border-border overflow-hidden bg-[#0d1117]">
        {activeTab === "preview" ? (
          <div className="flex items-center justify-center min-h-[350px] p-8 bg-background bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:24px_24px] bg-center">
            <Suspense
              fallback={
                <div className="animate-pulse text-muted-foreground">
                  Loading...
                </div>
              }
            >
              <PreviewComponent />
            </Suspense>
          </div>
        ) : (
          <CodeViewerFetcher
            examplePath={item.path}
            isExample={isExample}
            exampleName={name}
          />
        )}
      </div>
    </div>
  );
}

// Fetches code and passes to CodeViewer
function CodeViewerFetcher({
  examplePath,
  isExample,
  exampleName,
}: {
  examplePath: string;
  isExample: boolean;
  exampleName: string;
}) {
  const [code, setCode] = React.useState<string>("");
  const [highlightedHtml, setHighlightedHtml] = React.useState<string>("");

  React.useEffect(() => {
    if (isExample) {
      // For examples, fetch from API
      fetch(`/api/code?path=${encodeURIComponent(examplePath)}`)
        .then((res) => res.json())
        .then((result) => {
          setCode(result.code || "");
          setHighlightedHtml(result.html || "");
        })
        .catch((err) => {
          console.error("Error fetching code:", err);
          setHighlightedHtml("<pre>Error loading code</pre>");
        });
    } else {
      // For main components, fetch from public registry JSON
      fetch(`/r/${exampleName}.json`)
        .then((res) => res.json())
        .then((registryData) => {
          const file = registryData.files?.find(
            (f: { type: string }) => f.type === "registry:component",
          );
          if (file?.content) {
            setCode(file.content);
            // Fetch highlighted HTML from API
            fetch("/api/code", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ code: file.content }),
            })
              .then((res) => res.json())
              .then((highlightResult) => {
                setHighlightedHtml(highlightResult.html || "");
              })
              .catch(() => {
                setHighlightedHtml(
                  `<pre class="p-4 text-sm font-mono text-gray-300">${escapeHtml(file.content)}</pre>`,
                );
              });
          } else {
            setHighlightedHtml("<pre>Code not found</pre>");
          }
        })
        .catch((err) => {
          console.error("Error fetching component code:", err);
          setHighlightedHtml("<pre>Error loading code</pre>");
        });
    }
  }, [examplePath, isExample, exampleName]);

  return <CodeViewer code={code} highlightedHtml={highlightedHtml} />;
}

function escapeHtml(text: string): string {
  return text.replace(/&/g, "&").replace(/</g, "<").replace(/>/g, ">");
}

// Simple preview wrapper for inline usage in MDX
export function SimplePreview({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center justify-center min-h-[200px] p-8 rounded-lg border border-border bg-background ${className || ""}`}
    >
      {children}
    </div>
  );
}
