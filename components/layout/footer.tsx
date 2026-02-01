import React from "react";
import Image from "next/image";

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-zinc-900 bg-zinc-950 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 opacity-80 hover:opacity-100 transition-opacity">
        <div className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Logo"
            width={24}
            height={24}
            className="rounded-md"
          />
          <span className="text-sm font-semibold text-zinc-400 tracking-tight">
            bits&pieces
          </span>
        </div>

        <div className="text-xs text-zinc-600">
          © 2024 Open Source • MIT License
        </div>
      </div>
    </footer>
  );
};
