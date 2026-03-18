"use client";

import { cn } from "@/lib/cn";

interface FormFieldProps {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
  className?: string;
}

export default function FormField({ label, required, error, children, className }: FormFieldProps) {
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <label className="text-sm font-medium text-text-primary">
        {label}
        {required && <span className="text-danger ml-0.5">*</span>}
      </label>
      {children}
      {error && <p className="text-xs text-danger">{error}</p>}
    </div>
  );
}

// Reusable input style
export const inputClassName =
  "w-full h-10 px-3 rounded-lg border border-[#E8E8E8] text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors";

export const textareaClassName =
  "w-full px-3 py-2.5 rounded-lg border border-[#E8E8E8] text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-none";

export const selectClassName =
  "w-full h-10 px-3 rounded-lg border border-[#E8E8E8] text-sm text-text-primary bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Cpath%20fill%3D%22%237A7A7A%22%20d%3D%22M2.5%204.5L6%208l3.5-3.5%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_12px_center]";
