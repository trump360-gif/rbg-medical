"use client";

import { useState, useRef, useEffect } from "react";
import { Search, ChevronDown, X } from "lucide-react";
import FormField from "./FormField";
import { cn } from "@/lib/cn";

interface Option {
  value: string;
  label: string;
}

interface SearchableSelectProps {
  label: string;
  required?: boolean;
  error?: string;
  value: string;
  onChange: (value: string) => void;
  options: Option[];
  placeholder?: string;
  searchPlaceholder?: string;
  className?: string;
}

export default function SearchableSelect({
  label,
  required,
  error,
  value,
  onChange,
  options,
  placeholder = "선택하세요",
  searchPlaceholder = "검색...",
  className,
}: SearchableSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const ref = useRef<HTMLDivElement>(null);

  const selectedLabel = options.find((o) => o.value === value)?.label;

  const filtered = search.trim()
    ? options.filter((o) =>
        o.label.toLowerCase().includes(search.toLowerCase()) ||
        o.value.toLowerCase().includes(search.toLowerCase())
      )
    : options;

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
        setSearch("");
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <FormField label={label} required={required} error={error} className={className}>
      <div ref={ref} className="relative">
        {/* Trigger */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "w-full h-10 px-3 rounded-lg border border-[#E8E8E8] text-sm text-left bg-white flex items-center justify-between",
            "focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors",
            !value && "text-text-muted"
          )}
        >
          <span className={cn("truncate", value ? "text-text-primary" : "text-text-muted")}>
            {selectedLabel || placeholder}
          </span>
          <div className="flex items-center gap-1 shrink-0">
            {value && (
              <span
                onClick={(e) => { e.stopPropagation(); onChange(""); }}
                className="text-text-muted hover:text-danger cursor-pointer"
              >
                <X size={14} />
              </span>
            )}
            <ChevronDown size={14} className={cn("text-text-muted transition-transform", isOpen && "rotate-180")} />
          </div>
        </button>

        {/* Dropdown */}
        {isOpen && (
          <div className="absolute z-50 mt-1 w-full bg-white border border-[#E8E8E8] rounded-lg shadow-lg overflow-hidden">
            {/* Search input */}
            <div className="p-2 border-b border-[#E8E8E8]">
              <div className="relative">
                <Search size={14} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-text-muted" />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder={searchPlaceholder}
                  className="w-full h-8 pl-8 pr-3 rounded-md border border-[#E8E8E8] text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-1 focus:ring-primary/30"
                  autoFocus
                />
              </div>
            </div>

            {/* Options */}
            <div className="max-h-48 overflow-y-auto">
              {filtered.length === 0 ? (
                <p className="px-3 py-4 text-sm text-text-muted text-center">검색 결과가 없습니다</p>
              ) : (
                filtered.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => {
                      onChange(opt.value);
                      setIsOpen(false);
                      setSearch("");
                    }}
                    className={cn(
                      "w-full text-left px-3 py-2 text-sm transition-colors",
                      opt.value === value
                        ? "bg-primary-light text-primary font-medium"
                        : "text-text-primary hover:bg-bg-surface"
                    )}
                  >
                    {opt.label}
                  </button>
                ))
              )}
            </div>
          </div>
        )}
      </div>
    </FormField>
  );
}
