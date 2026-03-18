"use client";

import { Check } from "lucide-react";
import { cn } from "@/lib/cn";

interface Step {
  label: string;
}

interface StepIndicatorProps {
  steps: Step[];
  currentStep: number;
  className?: string;
}

export default function StepIndicator({ steps, currentStep, className }: StepIndicatorProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      {steps.map((step, idx) => {
        const stepNum = idx + 1;
        const isCompleted = stepNum < currentStep;
        const isCurrent = stepNum === currentStep;

        return (
          <div key={idx} className="flex items-center gap-2">
            {idx > 0 && (
              <div
                className={cn(
                  "w-8 h-px",
                  isCompleted ? "bg-primary" : "bg-[#E8E8E8]"
                )}
              />
            )}
            <div className="flex items-center gap-1.5">
              <div
                className={cn(
                  "w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium",
                  isCompleted && "bg-primary text-white",
                  isCurrent && "bg-primary text-white",
                  !isCompleted && !isCurrent && "bg-[#E8E8E8] text-text-muted"
                )}
              >
                {isCompleted ? <Check size={14} /> : stepNum}
              </div>
              <span
                className={cn(
                  "text-xs whitespace-nowrap",
                  isCurrent ? "text-primary font-medium" : "text-text-muted"
                )}
              >
                {step.label}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
