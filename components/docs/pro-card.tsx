"use client";

import React from "react";
import { BiCheck } from "react-icons/bi";
import { Button } from "@/components/ui/button";

interface ProCardProps {
  title?: string;
  subtitle?: string;
  features?: string[];
  ctaText?: string;
  ctaUrl?: string;
  description?: string;
}

export const ProCard: React.FC<ProCardProps> = ({
  title = "Bits&Pieces Pro",
  subtitle = "Ship real interfaces, faster",
  features = [
    "5+ complete templates for real projects",
    "85+ refined, production-ready components",
    "Copy, paste, and move on with your life",
  ],
  ctaText = "Unlock lifetime access",
  ctaUrl = "#",
  description = "For developers who care about speed, polish, and taste.",
}) => {
  return (
    <div className="pro-card-gradient mt-6">
      <div className="pro-card-inner">
        {/* Header */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-foreground">{title}</h4>
          <p className="text-xs text-muted-foreground">{subtitle}</p>
        </div>

        {/* Features */}
        <ul className="space-y-2 mb-4">
          {features.map((feature, index) => (
            <li
              key={index}
              className="flex items-start gap-2 text-xs text-muted-foreground"
            >
              <BiCheck className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <Button variant="outline" size="sm" className="w-full text-xs" asChild>
          <a href={ctaUrl}>{ctaText}</a>
        </Button>

        {/* Description */}
        <p className="mt-3 text-[10px] text-muted-foreground/70 italic">
          {description}
        </p>
      </div>
    </div>
  );
};
