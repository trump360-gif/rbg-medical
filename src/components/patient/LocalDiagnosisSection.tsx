"use client";

import { usePatientFormStore } from "@/lib/patientFormStore";
import FormField, { inputClassName, textareaClassName } from "@/components/form/FormField";
import FormSection from "@/components/form/FormSection";
import { FileSearch } from "lucide-react";

export default function LocalDiagnosisSection() {
  const { localDiagnosis, updateLocalDiagnosis } = usePatientFormStore();

  return (
    <FormSection title="현지 진단 정보" icon={<FileSearch size={16} className="text-primary" />} collapsible defaultOpen={true}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField label="현지 병원 진단명">
          <input className={inputClassName} value={localDiagnosis.diagnosisName || ''}
            onChange={(e) => updateLocalDiagnosis({ diagnosisName: e.target.value })}
            placeholder="진단명" />
        </FormField>
        <FormField label="진단 날짜">
          <input className={inputClassName} type="date" value={localDiagnosis.diagnosisDate || ''}
            onChange={(e) => updateLocalDiagnosis({ diagnosisDate: e.target.value })} />
        </FormField>
        <FormField label="진단 병원">
          <input className={inputClassName} value={localDiagnosis.hospital || ''}
            onChange={(e) => updateLocalDiagnosis({ hospital: e.target.value })} placeholder="병원 이름" />
        </FormField>
        <FormField label="담당 의사">
          <input className={inputClassName} value={localDiagnosis.doctor || ''}
            onChange={(e) => updateLocalDiagnosis({ doctor: e.target.value })} placeholder="의사 이름" />
        </FormField>
        <FormField label="현재 치료 여부">
          <div className="flex gap-4 mt-1">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" checked={localDiagnosis.currentlyTreating === true}
                onChange={() => updateLocalDiagnosis({ currentlyTreating: true })} className="w-4 h-4 text-primary" />
              <span className="text-sm">예</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" checked={localDiagnosis.currentlyTreating === false}
                onChange={() => updateLocalDiagnosis({ currentlyTreating: false })} className="w-4 h-4 text-primary" />
              <span className="text-sm">아니오</span>
            </label>
          </div>
        </FormField>
        <div className="md:col-span-2">
          <FormField label="현지 처방 내용">
            <textarea className={textareaClassName} rows={2} value={localDiagnosis.prescriptions || ''}
              onChange={(e) => updateLocalDiagnosis({ prescriptions: e.target.value })}
              placeholder="현재 처방된 치료 내용" />
          </FormField>
        </div>
      </div>
    </FormSection>
  );
}
