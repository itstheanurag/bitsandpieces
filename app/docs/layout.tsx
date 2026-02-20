import type { ReactNode } from "react";
import { DocsNavbar } from "@/components/docs/docs-navbar";
import { DocsSidebar } from "@/components/docs/sidebar";
import { TableOfContents } from "@/components/docs/toc";

export const metadata = {
  title: "Bits&Pieces Documentation",
  description: "Premium React UI Components - Documentation",
};

export default function DocsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <DocsNavbar />

      <div className="w-full flex-1 flex gap-8 px-4 sm:px-6 lg:px-8 xl:px-12 bg-background">
        {/* Left Sidebar - Detached borderless */}
        <aside className="hidden lg:block w-64 xl:w-72 shrink-0 py-10 sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto hidden-scrollbar">
          <DocsSidebar />
        </aside>

        {/* Main content pane */}
        <main className="flex-1 min-w-0 py-10 lg:px-8 xl:px-12">
          <article className="max-w-4xl mx-auto w-full relative">
            {children}
          </article>
        </main>

        {/* Right Sidebar - TOC */}
        <aside className="hidden xl:block w-64 shrink-0 py-10 sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto hidden-scrollbar">
          <div className="relative h-full">
            <TableOfContents />
          </div>
        </aside>
      </div>
    </div>
  );
}
