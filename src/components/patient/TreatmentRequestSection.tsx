"use client";

import { usePatientFormStore } from "@/lib/patientFormStore";
import { TreatmentVisitPurpose } from "@/lib/types";
import FormField, { inputClassName } from "@/components/form/FormField";
import FormSelect from "@/components/form/FormSelect";
import FormSection from "@/components/form/FormSection";
import { CalendarDays } from "lucide-react";

const visitPurposeOptions = [
  { value: "consultation", label: "상담 (Consultation)" },
  { value: "treatment", label: "치료 (Treatment)" },
  { value: "surgery", label: "수술 (Surgery)" },
  { value: "second_opinion", label: "세컨드 오피니언 (Second Opinion)" },
  { value: "health_checkup", label: "건강검진 (Health Check-up)" },
];

export default function TreatmentRequestSection() {
  const { treatmentRequest, updateTreatmentRequest } = usePatientFormStore();

  return (
    <FormSection title="진료 요청 정보" icon={<CalendarDays size={16} className="text-primary" />}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField label="희망 교수 (선택)">
          <input className={inputClassName} value={treatmentRequest.preferredDoctor || ''}
            onChange={(e) => updateTreatmentRequest({ preferredDoctor: e.target.value })}
            placeholder="특정 교수를 원할 경우 입력" />
        </FormField>

        <FormSelect label="방문 목적" required value={treatmentRequest.visitPurpose}
          onChange={(v) => updateTreatmentRequest({ visitPurpose: v as TreatmentVisitPurpose })}
          options={visitPurposeOptions} />

        <FormField label="방문 희망 날짜">
          <input className={inputClassName} type="date" value={treatmentRequest.preferredDate || ''}
            onChange={(e) => updateTreatmentRequest({ preferredDate: e.target.value })} />
        </FormField>

        <FormField label="예상 체류 기간">
          <input className={inputClassName} value={treatmentRequest.expectedStayDuration || ''}
            onChange={(e) => updateTreatmentRequest({ expectedStayDuration: e.target.value })}
            placeholder="예: 2주" />
        </FormField>

        <FormField label="동반 인원">
          <input className={inputClassName} type="number" min="0" value={treatmentRequest.companions ?? ''}
            onChange={(e) => updateTreatmentRequest({ companions: parseInt(e.target.value) || 0 })}
            placeholder="0" />
        </FormField>
      </div>
    </FormSection>
  );
}
