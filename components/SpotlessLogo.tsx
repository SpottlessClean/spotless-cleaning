"use client";

import React from "react";

interface SpotlessLogoProps {
  className?: string;
  variant?: "full" | "icon";
  size?: number;
}

export default function SpotlessLogo({ className = "", variant = "full", size = 42 }: SpotlessLogoProps) {
  const iconOnly = variant === "icon";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img
        src="/logo-icon.png"
        alt="Spotless Clean"
        style={{ height: size }}
        className="w-auto object-contain"
      />

      {!iconOnly && (
        <div className="flex items-baseline gap-1.5">
          <span className="font-bold tracking-[-1.2px] text-[22px] leading-none text-brand-teal-dark">
            SPOTLESS
          </span>
          <span className="font-semibold tracking-[1px] text-[20px] leading-none text-brand-teal">
            CLEAN
          </span>
        </div>
      )}
    </div>
  );
}
