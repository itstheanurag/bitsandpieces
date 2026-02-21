import type { MDXComponents } from "mdx/types";
import {
  ComponentPreview,
  SimplePreview,
} from "@/components/docs/component-preview";
import { InstallationTabs } from "@/components/docs/installation-tabs";
import { PropsTable } from "@/components/docs/props-table";
import { CodeBlock } from "@/components/docs/code-block";
import { DocsCards } from "@/components/docs/docs-cards";

export function useMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...components,
    // Custom MDX widgets
    ComponentPreview,
    SimplePreview,
    InstallationTabs,
    PropsTable,
    CodeBlock,
    DocsCards,

    // Native HTML Element Mappings
    h1: (props) => (
      <h1
        className="text-4xl font-bold mt-12 mb-6 tracking-tight text-foreground"
        {...props}
      />
    ),
    h2: (props) => (
      <h2
        className="text-2xl font-semibold mt-12 mb-4 pb-2 border-b border-border/60 text-foreground"
        {...props}
      />
    ),
    h3: (props) => (
      <h3
        className="text-xl font-semibold mt-8 mb-4 text-foreground"
        {...props}
      />
    ),
    p: (props) => (
      <p
        className="text-[1.05rem] leading-relaxed mb-6 text-muted-foreground"
        {...props}
      />
    ),
    a: (props) => (
      <a className="text-primary hover:underline font-medium" {...props} />
    ),
    ul: (props) => (
      <ul
        className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground"
        {...props}
      />
    ),
    ol: (props) => (
      <ol
        className="list-decimal pl-6 mb-6 space-y-2 text-muted-foreground"
        {...props}
      />
    ),
    li: (props) => <li className="text-[1.05rem] leading-relaxed" {...props} />,
    strong: (props) => (
      <strong className="font-semibold text-foreground" {...props} />
    ),
    blockquote: (props) => (
      <blockquote
        className="border-l-4 border-primary bg-primary/10 px-6 py-4 rounded-r-lg my-6 italic text-foreground"
        {...props}
      />
    ),
    code: (props: any) => {
      // Syntax highlighted blocks inherit `data-theme` and `data-language`
      if (props["data-language"]) {
        return <code className="font-mono text-[0.85em]" {...props} />;
      }
      return (
        <code
          className="bg-muted px-1.5 py-0.5 rounded-md font-mono text-[0.85em] text-foreground"
          {...props}
        />
      );
    },
    figure: (props: any) => {
      if ("data-rehype-pretty-code-figure" in props) {
        return (
          <figure
            className="relative mt-6 mb-8 rounded-xl overflow-hidden border border-border shadow-md bg-[#0d1117]"
            {...props}
          >
            <div className="absolute top-4 left-4 flex gap-1.5 z-10">
              <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
            </div>
            {props.children}
          </figure>
        );
      }
      return <figure {...props} />;
    },
    pre: (props) => (
      <pre
        className="pt-12 pb-4 px-4 overflow-x-auto text-[0.9em]"
        {...props}
      />
    ),
    table: (props) => (
      <div className="my-6 w-full overflow-y-auto rounded-lg border border-border">
        <table
          className="w-full text-sm text-left border-collapse"
          {...props}
        />
      </div>
    ),
    th: (props) => (
      <th
        className="bg-muted/50 px-4 py-3 font-medium text-foreground border-b border-border"
        {...props}
      />
    ),
    td: (props) => (
      <td
        className="px-4 py-3 border-b border-border/50 text-muted-foreground"
        {...props}
      />
    ),
  };
}
