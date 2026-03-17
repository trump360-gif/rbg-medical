"use client";

import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/cn";

interface TopNavProps {
  title: string;
  showBack?: boolean;
  onBack?: () => void;
  rightAction?: React.ReactNode;
}

export default function TopNav({
  title,
  showBack = false,
  onBack,
  rightAction,
}: TopNavProps) {
  return (
    <header
      className="md:hidden flex items-center justify-between border-b border-[#E8E8E8] bg-white px-4 py-3"
      data-testid="top-nav"
    >
      {/* Left: back button or spacer */}
      <div className="w-8 flex items-center justify-start">
        {showBack && (
          <button
            type="button"
            onClick={onBack}
            aria-label="뒤로 가기"
            data-testid="top-nav-back"
            className="flex items-center justify-center w-8 h-8 -ml-1 rounded-md text-text-primary hover:bg-bg-surface transition-colors"
          >
            <ArrowLeft size={20} aria-hidden="true" />
          </button>
        )}
      </div>

      {/* Center: title */}
      <h1
        className="flex-1 text-center text-base font-semibold text-text-primary"
        data-testid="top-nav-title"
      >
        {title}
      </h1>

      {/* Right: action or spacer */}
      <div
        className={cn("w-8 flex items-center justify-end")}
        data-testid="top-nav-right"
      >
        {rightAction ?? null}
      </div>
    </header>
  );
}
