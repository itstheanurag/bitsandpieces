"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { registryData as bitsRegistry } from "@/__registry__/registry.bits";
import { registryData as piecesRegistry } from "@/__registry__/registry.pieces";
import { cn } from "@/lib/utils";

function groupComponents(
  registry: Record<string, any>,
  category: "bits" | "pieces"
) {
  const groups: Record<string, any[]> = {};

  Object.values(registry).forEach((item) => {
    const parts = item.path.split("/");
    let groupName = "Other";

    if (parts.length >= 4) {
      groupName = parts[2];
    }

    if (!groups[groupName]) groups[groupName] = [];
    groups[groupName].push({ ...item, category });
  });

  return groups;
}

const bitsGroups = groupComponents(bitsRegistry, "bits");
const piecesGroups = groupComponents(piecesRegistry, "pieces");

export default function BrowseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen bg-background text-foreground">
      {/* Sidebar */}
      <aside className="
        w-64 
        border-r 
        border-neutral-200 dark:border-neutral-800 
        bg-neutral-50 dark:bg-neutral-900 
        hidden md:block 
        sticky top-0 h-screen 
        overflow-y-auto
      ">
        <div className="p-6">
          <Link
            href="/browse"
            className="text-xl font-bold tracking-tight mb-8 block text-neutral-900 dark:text-neutral-100"
          >
            BitsAndPieces
          </Link>

          <nav className="space-y-8">
            {/* Pieces Section */}
            {Object.keys(piecesGroups).length > 0 && (
              <div>
                <h3 className="font-semibold text-xs text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-3 px-2">
                  Pieces
                </h3>

                <div className="space-y-6">
                  {Object.entries(piecesGroups).map(([group, items]) => (
                    <div key={group}>
                      <h4 className="text-sm font-medium text-neutral-900 dark:text-neutral-100 mb-2 px-2 capitalize">
                        {group}
                      </h4>

                      <div className="space-y-1">
                        {items.map((item) => {
                          const href = `/browse/${item.category}/${item.name}`;
                          const isActive = pathname === href;
                          return (
                            <Link
                              key={item.name}
                              href={href}
                              className={cn(
                                "block px-2 py-1.5 text-sm rounded-md transition-colors",
                                isActive
                                  ? "bg-neutral-200 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 font-medium"
                                  : "text-neutral-700 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-800 hover:text-neutral-900 dark:hover:text-neutral-100"
                              )}
                            >
                              {item.title}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Bits Section */}
            {Object.keys(bitsGroups).length > 0 && (
              <div>
                <h3 className="font-semibold text-xs text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-3 px-2">
                  Bits
                </h3>

                <div className="space-y-6">
                  {Object.entries(bitsGroups).map(([group, items]) => (
                    <div key={group}>
                      <h4 className="text-sm font-medium text-neutral-900 dark:text-neutral-100 mb-2 px-2 capitalize">
                        {group}
                      </h4>

                      <div className="space-y-1">
                        {items.map((item) => {
                          const href = `/browse/${item.category}/${item.name}`;
                          const isActive = pathname === href;
                          return (
                            <Link
                              key={item.name}
                              href={href}
                              className={cn(
                                "block px-2 py-1.5 text-sm rounded-md transition-colors",
                                isActive
                                  ? "bg-neutral-200 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 font-medium"
                                  : "text-neutral-700 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-800 hover:text-neutral-900 dark:hover:text-neutral-100"
                              )}
                            >
                              {item.title}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 min-w-0 bg-background text-foreground">{children}</main>
    </div>
  );
}
