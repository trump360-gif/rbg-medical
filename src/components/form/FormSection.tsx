"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/cn";

interface FormSectionProps {
  title: string;
  icon?: React.ReactNode;
  collapsible?: boolean;
  defaultOpen?: boolean;
  children: React.ReactNode;
  className?: string;
}

export default function FormSection({
  title,
  icon,
  collapsible = false,
  defaultOpen = true,
  children,
  className,
}: FormSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={cn("bg-white rounded-xl border border-[#E8E8E8] overflow-hidden", className)}>
      <div
        className={cn(
          "flex items-center gap-2 px-5 py-3.5 bg-bg-surface border-b border-[#E8E8E8]",
          collapsible && "cursor-pointer hover:bg-gray-100 transition-colors"
        )}
        onClick={collapsible ? () => setIsOpen(!isOpen) : undefined}
      >
        {icon}
        <h3 className="text-sm font-semibold text-text-primary flex-1">{title}</h3>
        {collapsible && (
          isOpen ? <ChevronUp size={16} className="text-text-muted" /> : <ChevronDown size={16} className="text-text-muted" />
        )}
      </div>
      {isOpen && (
        <div className="p-5">
          {children}
        </div>
      )}
    </div>
  );
}
