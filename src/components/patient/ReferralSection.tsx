"use client";

import { usePatientFormStore } from "@/lib/patientFormStore";
import { useUserStore } from "@/lib/userStore";
import FormField, { inputClassName } from "@/components/form/FormField";
import FormSelect from "@/components/form/FormSelect";
import FormSection from "@/components/form/FormSection";
import { Send } from "lucide-react";

const referralTypeOptions = [
  { value: "self", label: "직접 신청 (Self)" },
  { value: "agent", label: "에이전시 (Agent)" },
  { value: "hospital", label: "병원 (Hospital)" },
  { value: "doctor", label: "의사 (Doctor)" },
];

export default function ReferralSection() {
  const { referral, updateReferral } = usePatientFormStore();
  const { isAgency } = useUserStore();
  const agencyMode = isAgency();

  return (
    <FormSection title="의뢰 정보" icon={<Send size={16} className="text-primary" />}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormSelect label="의뢰 유형" required value={referral.type}
          onChange={(v) => updateReferral({ type: v as 'self' | 'agent' | 'hospital' | 'doctor' })}
          options={agencyMode ? referralTypeOptions.filter(o => o.value === 'agent') : referralTypeOptions} />

        {(referral.type === 'agent' || referral.type === 'hospital') && (
          <FormField label="의뢰 기관명">
            <input className={inputClassName} value={referral.referringOrg || ''}
              onChange={(e) => updateReferral({ referringOrg: e.target.value })}
              placeholder="기관명" readOnly={agencyMode} />
          </FormField>
        )}

        {referral.type === 'doctor' && (
          <FormField label="의뢰 의사">
            <input className={inputClassName} value={referral.referringDoctor || ''}
              onChange={(e) => updateReferral({ referringDoctor: e.target.value })}
              placeholder="의사 이름" />
          </FormField>
        )}

        <FormField label="담당자 이메일">
          <input className={inputClassName} type="email" value={referral.contactEmail || ''}
            onChange={(e) => updateReferral({ contactEmail: e.target.value })} placeholder="email@example.com" />
        </FormField>
        <FormField label="담당자 전화번호">
          <input className={inputClassName} value={referral.contactPhone || ''}
            onChange={(e) => updateReferral({ contactPhone: e.target.value })} placeholder="전화번호" />
        </FormField>
      </div>
    </FormSection>
  );
}
