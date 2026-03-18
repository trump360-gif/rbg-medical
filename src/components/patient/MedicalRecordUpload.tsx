"use client";

import { usePatientFormStore } from "@/lib/patientFormStore";
import { MedicalRecordType } from "@/lib/types";
import FormSection from "@/components/form/FormSection";
import { Upload, X, FileText } from "lucide-react";

const recordTypeLabels: Record<MedicalRecordType, string> = {
  diagnosis_report: "진단서 (Diagnosis Report)",
  ct: "CT 이미지",
  mri: "MRI 이미지",
  xray: "X-ray",
  blood_test: "혈액검사 결과",
  pathology: "병리 검사 결과 (Pathology)",
  prescription: "처방전 (Prescription)",
  other: "기타 의료 기록",
};

export default function MedicalRecordUpload() {
  const { medicalRecords, addMedicalRecord, removeMedicalRecord } = usePatientFormStore();

  const handleUpload = (type: MedicalRecordType) => {
    addMedicalRecord({
      id: `rec-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      type,
      fileName: `${recordTypeLabels[type]}.pdf`,
      fileType: "application/pdf",
      size: `${(Math.random() * 10 + 1).toFixed(1)}MB`,
    });
  };

  const groupedRecords = Object.entries(recordTypeLabels).map(([type, label]) => ({
    type: type as MedicalRecordType,
    label,
    files: medicalRecords.filter((r) => r.type === type),
  }));

  return (
    <FormSection title="의료 기록 업로드" icon={<Upload size={16} className="text-primary" />}>
      <p className="text-xs text-text-muted mb-4">지원 형식: PDF / JPG / DICOM</p>

      <div className="flex flex-col gap-3">
        {groupedRecords.map(({ type, label, files }) => (
          <div key={type} className="bg-bg-surface rounded-lg border border-[#E8E8E8] p-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-text-primary">{label}</span>
              <button onClick={() => handleUpload(type)}
                className="flex items-center gap-1 px-2.5 py-1 rounded-md text-xs text-primary bg-primary-light hover:bg-primary/10 transition-colors">
                <Upload size={12} /> 업로드
              </button>
            </div>

            {files.length > 0 && (
              <div className="flex flex-col gap-1.5">
                {files.map((f) => (
                  <div key={f.id} className="flex items-center gap-2 px-2 py-1.5 bg-white rounded border border-[#E8E8E8]">
                    <FileText size={14} className="text-primary shrink-0" />
                    <span className="text-xs text-text-primary flex-1 truncate">{f.fileName}</span>
                    <span className="text-xs text-text-muted">{f.size}</span>
                    <button onClick={() => removeMedicalRecord(f.id)}
                      className="text-text-muted hover:text-danger"><X size={12} /></button>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </FormSection>
  );
}
