"use client";

import { useEffect, useState } from "react";

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

export function TableOfContents() {
  const [headings, setHeadings] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    // Wait slightly to ensure MDX has rendered
    const timeoutId = setTimeout(() => {
      const elements = Array.from(
        document.querySelectorAll("article h2, article h3"),
      );

      const tocItems: TOCItem[] = elements
        .map((elem) => ({
          id: elem.id,
          text: elem.textContent || "",
          level: Number(elem.tagName.charAt(1)),
        }))
        .filter((item) => item.id); // Valid IDs only

      setHeadings(tocItems);

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveId(entry.target.id);
            }
          });
        },
        { rootMargin: "0% 0% -80% 0%" },
      );

      elements.forEach((elem) => observer.observe(elem));
      return () => observer.disconnect();
    }, 100);

    return () => clearTimeout(timeoutId);
  }, []);

  if (headings.length === 0) return null;

  return (
    <div className="space-y-4">
      <p className="font-semibold text-[0.8rem] uppercase tracking-wider text-foreground">
        On this page
      </p>
      <div className="absolute left-0 top-14 bottom-0 w-[1px] bg-border" />
      <ul className="space-y-3 text-[0.85rem] relative">
        {headings.map((heading) => {
          const isActive = activeId === heading.id;
          return (
            <li
              key={heading.id}
              className="relative"
              style={{ paddingLeft: `${(heading.level - 2) * 0.75}rem` }}
            >
              {isActive && (
                <div className="absolute -left-[1px] top-1 bottom-1 w-[2px] rounded-full bg-primary" />
              )}
              <a
                href={`#${heading.id}`}
                className={`block transition-colors pl-4 ${
                  isActive
                    ? "text-primary font-medium"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {heading.text}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
