"use client";

import { useState } from "react";
import { usePatientFormStore } from "@/lib/patientFormStore";
import { UnderlyingCondition, SurgeryEntry } from "@/lib/types";
import FormField, { inputClassName, textareaClassName } from "@/components/form/FormField";
import FormSection from "@/components/form/FormSection";
import { cn } from "@/lib/cn";
import { Heart, Plus, X } from "lucide-react";

const conditionOptions: { value: UnderlyingCondition; label: string }[] = [
  { value: "diabetes", label: "당뇨" },
  { value: "hypertension", label: "고혈압" },
  { value: "heart_disease", label: "심장질환" },
  { value: "cancer", label: "암" },
  { value: "other", label: "기타" },
];

export default function MedicalHistorySection() {
  const { medicalHistory, updateMedicalHistory } = usePatientFormStore();
  const [newSurgery, setNewSurgery] = useState<SurgeryEntry>({ type: '', date: '' });

  const toggleCondition = (c: UnderlyingCondition) => {
    const cur = medicalHistory.underlyingConditions;
    updateMedicalHistory({
      underlyingConditions: cur.includes(c) ? cur.filter((x) => x !== c) : [...cur, c],
    });
  };

  const addSurgery = () => {
    if (newSurgery.type) {
      updateMedicalHistory({ surgeryHistory: [...medicalHistory.surgeryHistory, newSurgery] });
      setNewSurgery({ type: '', date: '' });
    }
  };

  const removeSurgery = (idx: number) => {
    updateMedicalHistory({ surgeryHistory: medicalHistory.surgeryHistory.filter((_, i) => i !== idx) });
  };

  return (
    <FormSection title="병력 및 건강 상태" icon={<Heart size={16} className="text-primary" />} collapsible defaultOpen={true}>
      <div className="flex flex-col gap-5">
        <FormField label="과거 병력">
          <textarea className={textareaClassName} rows={2} value={medicalHistory.pastConditions || ''}
            onChange={(e) => updateMedicalHistory({ pastConditions: e.target.value })}
            placeholder="과거 주요 질환 이력" />
        </FormField>

        {/* Surgery history */}
        <div>
          <label className="text-sm font-medium text-text-primary mb-2 block">수술 이력</label>
          {medicalHistory.surgeryHistory.map((s, idx) => (
            <div key={idx} className="flex items-center gap-2 mb-2 bg-bg-surface rounded-lg px-3 py-2 border border-[#E8E8E8]">
              <span className="text-sm text-text-primary flex-1">{s.type}</span>
              <span className="text-xs text-text-muted">{s.date}</span>
              <button onClick={() => removeSurgery(idx)} className="text-text-muted hover:text-danger"><X size={14} /></button>
            </div>
          ))}
          <div className="flex gap-2">
            <input className={cn(inputClassName, "flex-1")} value={newSurgery.type}
              onChange={(e) => setNewSurgery({ ...newSurgery, type: e.target.value })} placeholder="수술 종류" />
            <input className={cn(inputClassName, "w-[140px]")} type="date" value={newSurgery.date}
              onChange={(e) => setNewSurgery({ ...newSurgery, date: e.target.value })} />
            <button onClick={addSurgery} className="px-3 py-2 rounded-lg bg-primary text-white hover:bg-primary-dark shrink-0">
              <Plus size={16} />
            </button>
          </div>
        </div>

        <FormField label="가족력">
          <textarea className={textareaClassName} rows={2} value={medicalHistory.familyHistory || ''}
            onChange={(e) => updateMedicalHistory({ familyHistory: e.target.value })}
            placeholder="암, 심혈관질환, 유전질환 등" />
        </FormField>

        <FormField label="기저 질환 (복수 선택)">
          <div className="flex flex-wrap gap-2">
            {conditionOptions.map((c) => (
              <button key={c.value} onClick={() => toggleCondition(c.value)}
                className={cn("px-3 py-1.5 rounded-full text-sm border transition-colors",
                  medicalHistory.underlyingConditions.includes(c.value)
                    ? "bg-primary text-white border-primary"
                    : "bg-white text-text-secondary border-[#E8E8E8] hover:border-primary/40")}>
                {c.label}
              </button>
            ))}
          </div>
        </FormField>

        <FormField label="알레르기">
          <input className={inputClassName} value={medicalHistory.allergies || ''}
            onChange={(e) => updateMedicalHistory({ allergies: e.target.value })}
            placeholder="약물, 음식 등 알레르기 정보" />
        </FormField>
      </div>
    </FormSection>
  );
}
