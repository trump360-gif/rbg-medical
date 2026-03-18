"use client";

import { usePatientFormStore } from "@/lib/patientFormStore";
import FormField, { inputClassName, textareaClassName } from "@/components/form/FormField";
import FormSection from "@/components/form/FormSection";
import { Thermometer } from "lucide-react";

export default function PresentIllnessSection() {
  const { presentIllness, updatePresentIllness } = usePatientFormStore();

  return (
    <FormSection title="현재 증상" icon={<Thermometer size={16} className="text-primary" />}>
      <div className="flex flex-col gap-4">
        <FormField label="주요 증상" required>
          <textarea className={textareaClassName} rows={3} value={presentIllness.mainSymptoms}
            onChange={(e) => updatePresentIllness({ mainSymptoms: e.target.value })}
            placeholder="증상을 상세히 설명해주세요" />
        </FormField>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField label="증상 시작 시기">
            <input className={inputClassName} type="date" value={presentIllness.onsetDate || ''}
              onChange={(e) => updatePresentIllness({ onsetDate: e.target.value })} />
          </FormField>
          <FormField label="증상 지속 기간">
            <input className={inputClassName} value={presentIllness.duration || ''}
              onChange={(e) => updatePresentIllness({ duration: e.target.value })}
              placeholder="예: 3개월" />
          </FormField>
        </div>

        <div className="flex flex-col gap-3">
          <FormField label="통증 여부">
            <div className="flex gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" checked={presentIllness.hasPain} onChange={() => updatePresentIllness({ hasPain: true })}
                  className="w-4 h-4 text-primary" />
                <span className="text-sm">있음</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" checked={!presentIllness.hasPain} onChange={() => updatePresentIllness({ hasPain: false, painLevel: undefined })}
                  className="w-4 h-4 text-primary" />
                <span className="text-sm">없음</span>
              </label>
            </div>
          </FormField>

          {presentIllness.hasPain && (
            <FormField label={`통증 강도 (${presentIllness.painLevel || 1}/10)`}>
              <input
                type="range" min="1" max="10" value={presentIllness.painLevel || 1}
                onChange={(e) => updatePresentIllness({ painLevel: parseInt(e.target.value) })}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
              />
              <div className="flex justify-between text-xs text-text-muted mt-1">
                <span>1 (약함)</span><span>5 (보통)</span><span>10 (극심)</span>
              </div>
            </FormField>
          )}
        </div>

        <FormField label="현재 불편한 신체 부위">
          <input className={inputClassName} value={presentIllness.affectedBodyArea || ''}
            onChange={(e) => updatePresentIllness({ affectedBodyArea: e.target.value })}
            placeholder="예: 왼쪽 무릎, 허리" />
        </FormField>
      </div>
    </FormSection>
  );
}
