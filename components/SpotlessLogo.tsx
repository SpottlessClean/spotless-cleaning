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
      {/* Logo Icon - Inspired by reference: house + sparkle + clean water motif */}
      <div className="relative" style={{ width: size, height: size }}>
        <svg
          width={size}
          height={size}
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-sm"
        >
          {/* Gradient defs */}
          <defs>
            <linearGradient id="tealGrad" x1="12" y1="14" x2="52" y2="52" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#134E4B" />
              <stop offset="45%" stopColor="#0D9488" />
              <stop offset="100%" stopColor="#14B8A6" />
            </linearGradient>
            <linearGradient id="goldGrad" x1="32" y1="8" x2="48" y2="26" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#B8860B" />
            </linearGradient>
          </defs>

          {/* House body - clean modern shape */}
          <path
            d="M12 38 L12 54 Q12 58 16 58 L48 58 Q52 58 52 54 L52 38 Z"
            fill="url(#tealGrad)"
          />
          {/* Roof */}
          <path
            d="M8 36 L32 12 L56 36 Z"
            fill="#0F766E"
          />
          {/* Roof accent line */}
          <path
            d="M14 34 L32 18 L50 34"
            stroke="#14B8A6"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Sparkle / shine on roof */}
          <path
            d="M38 20 L41 24 L45 21"
            stroke="#D4AF37"
            strokeWidth="2"
            strokeLinecap="round"
          />

          {/* Clean window - bright interior */}
          <rect x="22" y="40" width="9" height="8" rx="1.5" fill="#F0FDFA" />
          <rect x="33" y="40" width="9" height="8" rx="1.5" fill="#F0FDFA" />

          {/* Door */}
          <rect x="28.5" y="48" width="7" height="10" rx="1" fill="#134E4B" />
          <circle cx="33.5" cy="53" r="1" fill="#14B8A6" />

          {/* Water / fresh sparkle accents */}
          <circle cx="19" cy="30" r="3.5" fill="#14B8A6" opacity="0.9" />
          <path
            d="M17 27 Q19 25 21 27"
            stroke="#F0FDFA"
            strokeWidth="1.5"
            strokeLinecap="round"
          />

          {/* Sparkles */}
          <g className="sparkle">
            <path d="M46 27 L47.5 29.5 L50 28 L47.5 31 L46 33.5 L44.5 31 L42 32 L44.5 29.5 Z" fill="#D4AF37" />
          </g>
          <circle cx="53" cy="41" r="2" fill="#14B8A6" opacity="0.85" />
        </svg>
      </div>

      {!iconOnly && (
        <div className="flex flex-col -space-y-0.5">
          <div className="font-bold tracking-[-1.5px] text-[23px] leading-none text-brand-teal-dark">
            SPOTLESS
          </div>
          <div className="font-semibold tracking-[1.5px] text-[13px] leading-none text-brand-teal -mt-0.5">
            CLEAN
          </div>
        </div>
      )}
    </div>
  );
}
