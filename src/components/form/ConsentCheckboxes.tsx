"use client";

import { UserConsents } from "@/lib/types";

interface ConsentCheckboxesProps {
  consents: UserConsents;
  onChange: (consents: UserConsents) => void;
}

const consentItems: { key: keyof UserConsents; label: string; required: boolean }[] = [
  { key: "privacy", label: "개인정보 처리 동의", required: true },
  { key: "medicalInfo", label: "의료정보 제공 동의", required: true },
  { key: "internationalDataTransfer", label: "국외 데이터 전송 동의", required: true },
  { key: "marketing", label: "마케팅 수신 동의", required: false },
];

export default function ConsentCheckboxes({ consents, onChange }: ConsentCheckboxesProps) {
  const handleToggle = (key: keyof UserConsents) => {
    onChange({ ...consents, [key]: !consents[key] });
  };

  const allRequired = consentItems.filter((c) => c.required).every((c) => consents[c.key]);

  const handleAllRequired = () => {
    const newConsents = { ...consents };
    const targetValue = !allRequired;
    consentItems.filter((c) => c.required).forEach((c) => {
      newConsents[c.key] = targetValue;
    });
    onChange(newConsents);
  };

  return (
    <div className="flex flex-col gap-3">
      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="checkbox"
          checked={allRequired}
          onChange={handleAllRequired}
          className="w-4 h-4 rounded border-[#E8E8E8] text-primary focus:ring-primary/30"
        />
        <span className="text-sm font-medium text-text-primary">필수 항목 전체 동의</span>
      </label>
      <div className="ml-2 flex flex-col gap-2.5 border-l-2 border-[#E8E8E8] pl-4">
        {consentItems.map((item) => (
          <label key={item.key} className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={consents[item.key]}
              onChange={() => handleToggle(item.key)}
              className="w-4 h-4 rounded border-[#E8E8E8] text-primary focus:ring-primary/30"
            />
            <span className="text-sm text-text-secondary">
              {item.label}
              {item.required && <span className="text-danger ml-0.5 text-xs">(필수)</span>}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}
