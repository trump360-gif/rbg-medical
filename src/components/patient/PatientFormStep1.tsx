"use client";

import { usePatientFormStore } from "@/lib/patientFormStore";
import FormField, { inputClassName, textareaClassName } from "@/components/form/FormField";
import FormSelect from "@/components/form/FormSelect";
import PhoneInput from "@/components/form/PhoneInput";
import AgencyBanner from "./AgencyBanner";

const nationalityOptions = [
  { value: "Russia", label: "러시아" }, { value: "Kazakhstan", label: "카자흐스탄" },
  { value: "Uzbekistan", label: "우즈베키스탄" }, { value: "Kyrgyzstan", label: "키르기스스탄" },
  { value: "Tajikistan", label: "타지키스탄" }, { value: "Turkmenistan", label: "투르크메니스탄" },
  { value: "Azerbaijan", label: "아제르바이잔" }, { value: "Armenia", label: "아르메니아" },
  { value: "Belarus", label: "벨라루스" }, { value: "Ukraine", label: "우크라이나" },
  { value: "Saudi Arabia", label: "사우디아라비아" }, { value: "UAE", label: "UAE" },
  { value: "Other", label: "기타" },
];

const departmentOptions = [
  { value: "종양내과", label: "종양내과 (Oncology)" },
  { value: "심장내과", label: "심장내과 (Cardiology)" },
  { value: "신경외과", label: "신경외과 (Neurosurgery)" },
  { value: "신경과", label: "신경과 (Neurology)" },
  { value: "소화기내과", label: "소화기내과 (Gastroenterology)" },
  { value: "정형외과", label: "정형외과 (Orthopedic Surgery)" },
  { value: "안과", label: "안과 (Ophthalmology)" },
  { value: "이비인후과", label: "이비인후과 (ENT)" },
  { value: "산부인과", label: "산부인과 (OB/GYN)" },
  { value: "비뇨기과", label: "비뇨기과 (Urology)" },
  { value: "피부과", label: "피부과 (Dermatology)" },
  { value: "성형외과", label: "성형외과 (Plastic Surgery)" },
  { value: "치과", label: "치과 (Dentistry)" },
  { value: "재활의학과", label: "재활의학과 (Rehabilitation)" },
  { value: "기타", label: "기타" },
];

export default function PatientFormStep1() {
  const store = usePatientFormStore();

  return (
    <div>
      <AgencyBanner />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField label="환자 이름" required>
          <input className={inputClassName} value={store.name}
            onChange={(e) => store.updateStep1({ name: e.target.value })} placeholder="환자 이름" />
        </FormField>

        <FormSelect label="국적" required value={store.nationality}
          onChange={(v) => store.updateStep1({ nationality: v })} options={nationalityOptions} />

        <div className="md:col-span-2">
          <PhoneInput label="전화번호" required countryCode={store.countryCode} phone={store.phone}
            onCountryCodeChange={(c) => store.updateStep1({ countryCode: c })}
            onPhoneChange={(p) => store.updateStep1({ phone: p })} />
        </div>

        <FormField label="이메일" required>
          <input className={inputClassName} type="email" value={store.email}
            onChange={(e) => store.updateStep1({ email: e.target.value })} placeholder="email@example.com" />
        </FormField>

        <FormSelect label="희망 진료과" required value={store.desiredDepartment}
          onChange={(v) => store.updateStep1({ desiredDepartment: v })} options={departmentOptions} />

        <div className="md:col-span-2">
          <FormField label="주요 증상" required>
            <textarea className={textareaClassName} rows={3} value={store.mainSymptoms}
              onChange={(e) => store.updateStep1({ mainSymptoms: e.target.value })}
              placeholder="현재 증상을 간략히 설명해주세요" />
          </FormField>
        </div>
      </div>
    </div>
  );
}
