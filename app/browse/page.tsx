"use client";

import Link from "next/link";
import { useState, useMemo, useEffect } from "react";
import { registryData as bitsRegistry } from "@/__registry__/registry.bits";
import { registryData as piecesRegistry } from "@/__registry__/registry.pieces";

interface RegistryItem {
  name: string;
  title: string;
  description: string;
}

// Combine the two registries
const bits = Object.values(bitsRegistry as Record<string, RegistryItem>).map(
  (i) => ({
    ...i,
    category: "bits" as const,
  })
);
const pieces = Object.values(
  piecesRegistry as Record<string, RegistryItem>
).map((i) => ({
  ...i,
  category: "pieces" as const,
}));

const fullRegistry = [...bits, ...pieces];

export default function BrowsePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<
    "all" | "bits" | "pieces"
  >("all");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");

  // Debounce search term
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 300);
    return () => clearTimeout(timer);
  }, [searchTerm]);

  const filteredComponents = useMemo(() => {
    return fullRegistry.filter((component) => {
      const matchesSearch =
        component.name
          .toLowerCase()
          .includes(debouncedSearchTerm.toLowerCase()) ||
        component.description
          .toLowerCase()
          .includes(debouncedSearchTerm.toLowerCase()) ||
        component.title
          .toLowerCase()
          .includes(debouncedSearchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === "all" || component.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [debouncedSearchTerm, selectedCategory]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Browse Components</h1>

      <div className="mb-8 flex flex-col sm:flex-row gap-4">
        <input
          type="text"
          placeholder="Search components..."
          className="flex-grow p-3 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-500"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <div className="flex gap-2">
          <button
            onClick={() => {
              setSelectedCategory("all");
            }}
            className={`px-4 py-2 rounded-lg transition-colors ${
              selectedCategory === "all"
                ? "bg-neutral-800 text-white"
                : "bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
            }`}
          >
            All
          </button>
          <button
            onClick={() => {
              setSelectedCategory("bits");
            }}
            className={`px-4 py-2 rounded-lg transition-colors ${
              selectedCategory === "bits"
                ? "bg-neutral-800 text-white"
                : "bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
            }`}
          >
            Bits
          </button>
          <button
            onClick={() => {
              setSelectedCategory("pieces");
            }}
            className={`px-4 py-2 rounded-lg transition-colors ${
              selectedCategory === "pieces"
                ? "bg-neutral-800 text-white"
                : "bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
            }`}
          >
            Pieces
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredComponents.length > 0 ? (
          filteredComponents.map((component) => (
            <Link
              href={`/browse/${component.category}/${component.name}`}
              key={component.name}
            >
              <div className="block p-6 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg shadow hover:shadow-lg transition-shadow">
                <h2 className="text-2xl font-bold mb-2">{component.title}</h2>
                <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                  {component.description}
                </p>
                <span
                  className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${
                    component.category === "bits"
                      ? "bg-neutral-100 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200"
                      : "bg-neutral-100 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200"
                  }`}
                >
                  {component.category}
                </span>
              </div>
            </Link>
          ))
        ) : (
          <p className="col-span-full text-center text-neutral-500 dark:text-neutral-400">
            No components found matching your criteria.
          </p>
        )}
      </div>
    </div>
  );
}
