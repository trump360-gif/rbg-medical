"use client";

import { usePatientFormStore } from "@/lib/patientFormStore";
import { inputClassName } from "@/components/form/FormField";
import FormSection from "@/components/form/FormSection";
import { Pill, Plus, Trash2 } from "lucide-react";

export default function MedicationTable() {
  const { medications, addMedication, removeMedication, updateMedication } = usePatientFormStore();

  const handleAdd = () => {
    addMedication({
      id: `med-${Date.now()}`,
      name: '', dosage: '', duration: '', purpose: '',
    });
  };

  return (
    <FormSection title="현재 복용 약물" icon={<Pill size={16} className="text-primary" />} collapsible defaultOpen={true}>
      <div className="flex flex-col gap-3">
        {medications.length === 0 && (
          <p className="text-sm text-text-muted text-center py-4">복용 중인 약물이 없습니다</p>
        )}

        {medications.map((med) => (
          <div key={med.id} className="bg-bg-surface rounded-lg border border-[#E8E8E8] p-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <input className={inputClassName} value={med.name}
                onChange={(e) => updateMedication(med.id, { name: e.target.value })}
                placeholder="약물명" />
              <input className={inputClassName} value={med.dosage}
                onChange={(e) => updateMedication(med.id, { dosage: e.target.value })}
                placeholder="용량 (예: 500mg)" />
              <input className={inputClassName} value={med.duration}
                onChange={(e) => updateMedication(med.id, { duration: e.target.value })}
                placeholder="복용 기간 (예: 6개월)" />
              <div className="flex gap-2">
                <input className={`${inputClassName} flex-1`} value={med.purpose}
                  onChange={(e) => updateMedication(med.id, { purpose: e.target.value })}
                  placeholder="복용 목적" />
                <button onClick={() => removeMedication(med.id)}
                  className="px-2.5 py-2 rounded-lg text-danger hover:bg-danger-light transition-colors shrink-0">
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}

        <button onClick={handleAdd}
          className="flex items-center justify-center gap-1.5 py-2.5 rounded-lg border-2 border-dashed border-[#E8E8E8] text-sm text-text-secondary hover:border-primary/40 hover:text-primary transition-colors">
          <Plus size={16} /> 약물 추가
        </button>
      </div>
    </FormSection>
  );
}
