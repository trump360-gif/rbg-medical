"use client";

import { usePatientFormStore } from "@/lib/patientFormStore";
import FormSection from "@/components/form/FormSection";
import { Plane, Car, Hotel, Languages } from "lucide-react";
import { cn } from "@/lib/cn";

const services = [
  { key: "airportPickup" as const, icon: Plane, label: "공항 픽업", desc: "공항 도착 시 픽업 서비스" },
  { key: "carService" as const, icon: Car, label: "차량 서비스", desc: "병원 이동 차량 제공" },
  { key: "accommodation" as const, icon: Hotel, label: "숙박 예약", desc: "병원 인근 숙박 예약 지원" },
  { key: "interpreter" as const, icon: Languages, label: "통역 서비스", desc: "진료 시 통역 지원" },
];

export default function ConciergeSection() {
  const { concierge, updateConcierge } = usePatientFormStore();

  return (
    <FormSection title="컨시어지 서비스" icon={<Plane size={16} className="text-primary" />}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {services.map((svc) => {
          const Icon = svc.icon;
          const isActive = concierge[svc.key];
          return (
            <button
              key={svc.key}
              onClick={() => updateConcierge({ [svc.key]: !isActive })}
              className={cn(
                "flex items-center gap-3 p-3 rounded-xl border-2 text-left transition-all",
                isActive
                  ? "border-primary bg-primary-light"
                  : "border-[#E8E8E8] bg-white hover:border-primary/30"
              )}
            >
              <div className={cn(
                "w-10 h-10 rounded-lg flex items-center justify-center shrink-0",
                isActive ? "bg-primary text-white" : "bg-bg-surface text-text-muted"
              )}>
                <Icon size={20} />
              </div>
              <div>
                <p className={cn("text-sm font-medium", isActive ? "text-primary" : "text-text-primary")}>
                  {svc.label}
                </p>
                <p className="text-xs text-text-muted">{svc.desc}</p>
              </div>
            </button>
          );
        })}
      </div>
    </FormSection>
  );
}
