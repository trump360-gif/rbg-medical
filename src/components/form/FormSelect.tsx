"use client";

import FormField, { selectClassName } from "./FormField";
import { cn } from "@/lib/cn";

interface Option {
  value: string;
  label: string;
}

interface FormSelectProps {
  label: string;
  required?: boolean;
  error?: string;
  value: string;
  onChange: (value: string) => void;
  options: Option[];
  placeholder?: string;
  className?: string;
}

export default function FormSelect({
  label,
  required,
  error,
  value,
  onChange,
  options,
  placeholder = "선택하세요",
  className,
}: FormSelectProps) {
  return (
    <FormField label={label} required={required} error={error} className={className}>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={cn(selectClassName, !value && "text-text-muted")}
      >
        <option value="">{placeholder}</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </FormField>
  );
}
