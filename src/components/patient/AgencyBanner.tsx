"use client";

import { Briefcase } from "lucide-react";
import { useUserStore } from "@/lib/userStore";
import { AgencyUser } from "@/lib/types";

export default function AgencyBanner() {
  const { currentUser, isAgency } = useUserStore();

  if (!isAgency()) return null;

  const agency = currentUser as AgencyUser;

  return (
    <div className="bg-violet-50 border border-violet-200 rounded-xl p-4 mb-5">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-violet-100 flex items-center justify-center shrink-0">
          <Briefcase size={20} className="text-violet-600" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-violet-700 bg-violet-200 px-2 py-0.5 rounded-full">
              환자 대리 등록
            </span>
          </div>
          <p className="text-sm font-medium text-text-primary mt-0.5 truncate">
            {agency.companyName} ({agency.companyNameEn})
          </p>
          <p className="text-xs text-text-secondary">
            담당: {agency.contactPerson.name} &middot; 의뢰 유형: 에이전시 (자동 설정)
          </p>
        </div>
      </div>
    </div>
  );
}
