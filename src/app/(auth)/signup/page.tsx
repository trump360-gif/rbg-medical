"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  User, Stethoscope, Briefcase, ArrowLeft, ArrowRight, Check,
  Mail, MapPin, Camera
} from "lucide-react";
import { cn } from "@/lib/cn";
import { MemberType } from "@/lib/types";
import { useSignupStore } from "@/lib/signupStore";
import StepIndicator from "@/components/form/StepIndicator";
import FormField, { inputClassName } from "@/components/form/FormField";
import FormSection from "@/components/form/FormSection";
import FormSelect from "@/components/form/FormSelect";
import PhoneInput from "@/components/form/PhoneInput";
import ConsentCheckboxes from "@/components/form/ConsentCheckboxes";
import FileUploadZone from "@/components/form/FileUploadZone";

const steps = [
  { label: "유형 선택" },
  { label: "기본 정보" },
  { label: "상세 정보" },
  { label: "완료" },
];

const nationalityOptions = [
  { value: "Russia", label: "러시아" }, { value: "Kazakhstan", label: "카자흐스탄" },
  { value: "Uzbekistan", label: "우즈베키스탄" }, { value: "Kyrgyzstan", label: "키르기스스탄" },
  { value: "Tajikistan", label: "타지키스탄" }, { value: "Turkmenistan", label: "투르크메니스탄" },
  { value: "Azerbaijan", label: "아제르바이잔" }, { value: "Armenia", label: "아르메니아" },
  { value: "Belarus", label: "벨라루스" }, { value: "Ukraine", label: "우크라이나" },
  { value: "UAE", label: "UAE" }, { value: "Saudi Arabia", label: "사우디아라비아" },
  { value: "South Korea", label: "한국" }, { value: "Other", label: "기타" },
];

const languageOptions = [
  { value: "ru", label: "러시아어" }, { value: "en", label: "영어" },
  { value: "ko", label: "한국어" }, { value: "ar", label: "아랍어" },
  { value: "zh", label: "중국어" }, { value: "uz", label: "우즈벡어" },
];

export default function SignupPage() {
  const store = useSignupStore();
  const { currentStep, memberType } = store;

  return (
    <div className="min-h-screen bg-bg-surface">
      {/* Header */}
      <div className="bg-white border-b border-[#E8E8E8] px-4 md:px-8 py-4">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md bg-primary" />
            <span className="font-semibold text-sm text-text-primary">RBG Medical</span>
          </div>
          <StepIndicator steps={steps} currentStep={currentStep} />
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 md:px-8 py-6 md:py-10">
        {currentStep === 1 && <Step1TypeSelect />}
        {currentStep === 2 && <Step2CommonInfo />}
        {currentStep === 3 && memberType === "patient" && <Step3Patient />}
        {currentStep === 3 && memberType === "doctor" && <Step3Doctor />}
        {currentStep === 3 && memberType === "agency" && <Step3Agency />}
        {currentStep === 4 && <Step4Complete />}
      </div>
    </div>
  );
}

// ====== Step 1: 유형 선택 ======
function Step1TypeSelect() {
  const { setMemberType } = useSignupStore();

  const types: { type: MemberType; icon: React.ElementType; title: string; desc: string; color: string; bg: string }[] = [
    { type: "patient", icon: User, title: "일반 사용자", desc: "환자 또는 보호자로 가입합니다", color: "text-blue-600", bg: "bg-blue-50 border-blue-200 hover:bg-blue-100" },
    { type: "doctor", icon: Stethoscope, title: "의료인", desc: "의사/전문의로 가입합니다", color: "text-emerald-600", bg: "bg-emerald-50 border-emerald-200 hover:bg-emerald-100" },
    { type: "agency", icon: Briefcase, title: "에이전시 / 여행사", desc: "의료관광 에이전시/파트너로 가입합니다", color: "text-violet-600", bg: "bg-violet-50 border-violet-200 hover:bg-violet-100" },
  ];

  return (
    <div>
      <h1 className="text-xl font-bold text-text-primary mb-2">회원가입</h1>
      <p className="text-sm text-text-secondary mb-6">가입 유형을 선택해주세요</p>

      <div className="flex flex-col gap-3">
        {types.map((t) => {
          const Icon = t.icon;
          return (
            <button
              key={t.type}
              onClick={() => setMemberType(t.type)}
              className={cn("flex items-center gap-4 p-4 rounded-xl border-2 text-left transition-colors", t.bg)}
            >
              <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center bg-white shadow-sm")}>
                <Icon size={24} className={t.color} />
              </div>
              <div>
                <p className="font-semibold text-text-primary">{t.title}</p>
                <p className="text-sm text-text-secondary">{t.desc}</p>
              </div>
            </button>
          );
        })}
      </div>

      <div className="mt-6 text-center">
        <a href="/login" className="text-sm text-text-secondary hover:text-primary">
          이미 계정이 있으신가요? <span className="text-primary font-medium">로그인</span>
        </a>
      </div>
    </div>
  );
}

// ====== Step 2: 공통 정보 ======
function Step2CommonInfo() {
  const { commonFields, updateCommonFields, setStep } = useSignupStore();
  const f = commonFields;

  return (
    <div>
      <h1 className="text-xl font-bold text-text-primary mb-6">기본 정보</h1>

      <div className="flex flex-col gap-5">
        <FormSection title="계정 정보" icon={<Mail size={16} className="text-primary" />}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField label="이름" required>
              <input className={inputClassName} value={f.name} onChange={(e) => updateCommonFields({ name: e.target.value })} placeholder="이름" />
            </FormField>
            <FormField label="이메일" required>
              <input className={inputClassName} type="email" value={f.email} onChange={(e) => updateCommonFields({ email: e.target.value })} placeholder="email@example.com" />
            </FormField>
            <FormField label="비밀번호" required>
              <input className={inputClassName} type="password" value={f.password} onChange={(e) => updateCommonFields({ password: e.target.value })} placeholder="8자 이상" />
            </FormField>
            <FormSelect label="가입 채널" required value={f.signupChannel} onChange={(v) => updateCommonFields({ signupChannel: v })}
              options={[{ value: "direct", label: "직접 가입 (Direct)" }, { value: "partner", label: "파트너 (Partner)" }, { value: "referral", label: "추천 (Referral)" }]} />
          </div>
        </FormSection>

        <FormSection title="개인 정보" icon={<User size={16} className="text-primary" />}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <FormField label="프로필 사진 (선택)">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-bg-surface border border-[#E8E8E8] flex items-center justify-center shrink-0">
                    <Camera size={20} className="text-text-muted" />
                  </div>
                  <button type="button" className="px-4 py-2 rounded-lg border border-[#E8E8E8] text-sm text-text-secondary hover:bg-bg-surface transition-colors">
                    사진 업로드
                  </button>
                </div>
              </FormField>
            </div>
            <FormField label="생년월일" required>
              <input className={inputClassName} type="date" value={f.dob} onChange={(e) => updateCommonFields({ dob: e.target.value })} />
            </FormField>
            <FormSelect label="성별" required value={f.gender} onChange={(v) => updateCommonFields({ gender: v })}
              options={[{ value: "male", label: "남성" }, { value: "female", label: "여성" }, { value: "other", label: "기타" }]} />
            <FormSelect label="국적" required value={f.nationality} onChange={(v) => updateCommonFields({ nationality: v })} options={nationalityOptions} />
            <FormSelect label="사용 언어" required value={f.language} onChange={(v) => updateCommonFields({ language: v })} options={languageOptions} />
          </div>
        </FormSection>

        <FormSection title="연락처" icon={<MapPin size={16} className="text-primary" />}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormSelect label="거주 국가" required value={f.country} onChange={(v) => updateCommonFields({ country: v })} options={nationalityOptions} />
            <FormField label="거주 도시">
              <input className={inputClassName} value={f.city} onChange={(e) => updateCommonFields({ city: e.target.value })} placeholder="도시명" />
            </FormField>
            <div className="md:col-span-2">
              <PhoneInput label="전화번호" required countryCode={f.countryCode} phone={f.phone}
                onCountryCodeChange={(c) => updateCommonFields({ countryCode: c })}
                onPhoneChange={(p) => updateCommonFields({ phone: p })} />
            </div>
          </div>
        </FormSection>

        <FormSection title="동의 항목" icon={<Check size={16} className="text-primary" />}>
          <ConsentCheckboxes consents={f.consents} onChange={(c) => updateCommonFields({ consents: c })} />
        </FormSection>
      </div>

      <div className="flex gap-3 mt-6">
        <button onClick={() => setStep(1)} className="flex items-center gap-1.5 px-4 py-2.5 rounded-lg border border-[#E8E8E8] text-sm text-text-secondary hover:bg-bg-surface">
          <ArrowLeft size={16} /> 이전
        </button>
        <button onClick={() => setStep(3)} className="flex items-center gap-1.5 px-6 py-2.5 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary-dark ml-auto">
          다음 <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}

// ====== Step 3a: 환자 전용 ======
function Step3Patient() {
  const { patientFields, updatePatientFields, setStep } = useSignupStore();
  const f = patientFields;

  const visitPurposeOptions = [
    { value: "checkup", label: "건강검진" }, { value: "consultation", label: "진료상담" },
    { value: "treatment", label: "치료" }, { value: "surgery", label: "수술" },
    { value: "follow_up", label: "재진" },
  ];

  const toggleVisitPurpose = (v: string) => {
    const cur = f.visitPurpose;
    updatePatientFields({ visitPurpose: cur.includes(v) ? cur.filter((x) => x !== v) : [...cur, v] });
  };

  return (
    <div>
      <h1 className="text-xl font-bold text-text-primary mb-6">환자 / 보호자 정보</h1>

      <div className="flex flex-col gap-5">
        <FormSection title="환자 정보">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" checked={f.isPatientSelf} onChange={() => updatePatientFields({ isPatientSelf: true })}
                  className="w-4 h-4 text-primary focus:ring-primary/30" />
                <span className="text-sm">환자 본인</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" checked={!f.isPatientSelf} onChange={() => updatePatientFields({ isPatientSelf: false })}
                  className="w-4 h-4 text-primary focus:ring-primary/30" />
                <span className="text-sm">보호자 (대리)</span>
              </label>
            </div>

            {!f.isPatientSelf && (
              <FormField label="보호자 관계">
                <input className={inputClassName} value={f.guardianRelationship}
                  onChange={(e) => updatePatientFields({ guardianRelationship: e.target.value })}
                  placeholder="예: 배우자, 부모, 자녀" />
              </FormField>
            )}

            <FormField label="여권번호 (선택)">
              <input className={inputClassName} value={f.passportNumber}
                onChange={(e) => updatePatientFields({ passportNumber: e.target.value })} placeholder="여권번호" />
            </FormField>
          </div>
        </FormSection>

        <FormSection title="긴급 연락처">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <FormField label="이름" required>
              <input className={inputClassName} value={f.emergencyContactName}
                onChange={(e) => updatePatientFields({ emergencyContactName: e.target.value })} placeholder="긴급 연락 이름" />
            </FormField>
            <FormField label="관계" required>
              <input className={inputClassName} value={f.emergencyContactRelation}
                onChange={(e) => updatePatientFields({ emergencyContactRelation: e.target.value })} placeholder="관계" />
            </FormField>
            <FormField label="전화번호" required>
              <input className={inputClassName} value={f.emergencyContactPhone}
                onChange={(e) => updatePatientFields({ emergencyContactPhone: e.target.value })} placeholder="전화번호" />
            </FormField>
          </div>
        </FormSection>

        <FormSection title="방문 계획">
          <div className="flex flex-col gap-4">
            <FormField label="방문 목적 (복수 선택 가능)" required>
              <div className="flex flex-wrap gap-2">
                {visitPurposeOptions.map((opt) => (
                  <button key={opt.value} onClick={() => toggleVisitPurpose(opt.value)}
                    className={cn("px-3 py-1.5 rounded-full text-sm border transition-colors",
                      f.visitPurpose.includes(opt.value)
                        ? "bg-primary text-white border-primary"
                        : "bg-white text-text-secondary border-[#E8E8E8] hover:border-primary/40")}>
                    {opt.label}
                  </button>
                ))}
              </div>
            </FormField>
            <FormSelect label="방문 예정 국가" value={f.plannedCountry}
              onChange={(v) => updatePatientFields({ plannedCountry: v })}
              options={[{ value: "South Korea", label: "한국" }]} />
          </div>
        </FormSection>
      </div>

      <NavigationButtons onBack={() => setStep(2)} onNext={() => setStep(4)} />
    </div>
  );
}

// ====== Step 3b: 의료인 전용 ======
function Step3Doctor() {
  const { doctorFields, updateDoctorFields, setStep } = useSignupStore();
  const f = doctorFields;
  const [files, setFiles] = useState<{ id: string; name: string; type: string; size: string }[]>([]);

  const positionOptions = [
    { value: "professor", label: "Professor" }, { value: "specialist", label: "Specialist" },
    { value: "resident", label: "Resident" }, { value: "gp", label: "GP (일반의)" },
  ];

  const specialtyOptions = [
    { value: "General Surgery", label: "일반외과" }, { value: "Orthopedic Surgery", label: "정형외과" },
    { value: "Cardiology", label: "심장내과" }, { value: "Plastic Surgery", label: "성형외과" },
    { value: "Dermatology", label: "피부과" }, { value: "Oncology", label: "종양내과" },
    { value: "Neurosurgery", label: "신경외과" }, { value: "Other", label: "기타" },
  ];

  return (
    <div>
      <h1 className="text-xl font-bold text-text-primary mb-6">의료인 정보</h1>

      <div className="flex flex-col gap-5">
        <FormSection title="근무 정보">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField label="근무 병원" required>
              <input className={inputClassName} value={f.hospital} onChange={(e) => updateDoctorFields({ hospital: e.target.value })} placeholder="병원명" />
            </FormField>
            <FormField label="병원 주소">
              <input className={inputClassName} value={f.hospitalAddress} onChange={(e) => updateDoctorFields({ hospitalAddress: e.target.value })} placeholder="주소" />
            </FormField>
            <FormSelect label="직위" required value={f.position} onChange={(v) => updateDoctorFields({ position: v })} options={positionOptions} />
            <FormSelect label="전공 분야" required value={f.specialty} onChange={(v) => updateDoctorFields({ specialty: v })} options={specialtyOptions} />
            <FormField label="임상 경력">
              <input className={inputClassName} value={f.clinicalExperience} onChange={(e) => updateDoctorFields({ clinicalExperience: e.target.value })} placeholder="예: 15년" />
            </FormField>
            <FormField label="현재 병원 근무기간">
              <input className={inputClassName} value={f.currentHospitalDuration} onChange={(e) => updateDoctorFields({ currentHospitalDuration: e.target.value })} placeholder="예: 8년" />
            </FormField>
          </div>
        </FormSection>

        <FormSection title="의료 면허">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <FormField label="면허번호" required>
              <input className={inputClassName} value={f.licenseNumber} onChange={(e) => updateDoctorFields({ licenseNumber: e.target.value })} />
            </FormField>
            <FormSelect label="면허 발급국가" required value={f.licenseCountry}
              onChange={(v) => updateDoctorFields({ licenseCountry: v })} options={nationalityOptions} />
            <FormField label="면허 기관">
              <input className={inputClassName} value={f.licenseAuthority} onChange={(e) => updateDoctorFields({ licenseAuthority: e.target.value })} />
            </FormField>
          </div>
        </FormSection>

        <FormSection title="연수 희망 (선택)" collapsible defaultOpen={false}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <FormField label="관심 연수과">
              <input className={inputClassName} value={f.desiredTrainingDept} onChange={(e) => updateDoctorFields({ desiredTrainingDept: e.target.value })} />
            </FormField>
            <FormField label="희망 연수기간">
              <input className={inputClassName} value={f.desiredTrainingDuration} onChange={(e) => updateDoctorFields({ desiredTrainingDuration: e.target.value })} placeholder="예: 3개월" />
            </FormField>
            <FormField label="희망 시작시기">
              <input className={inputClassName} type="date" value={f.desiredStartDate} onChange={(e) => updateDoctorFields({ desiredStartDate: e.target.value })} />
            </FormField>
          </div>
        </FormSection>

        <FormSection title="서류 업로드">
          <FileUploadZone label="면허증, CV, 재직증명서, 추천서" files={files}
            onAdd={(f) => setFiles((prev) => [...prev, f])}
            onRemove={(id) => setFiles((prev) => prev.filter((f) => f.id !== id))}
            accept="PDF, JPG, PNG" />
        </FormSection>
      </div>

      <NavigationButtons onBack={() => setStep(2)} onNext={() => setStep(4)} />
    </div>
  );
}

// ====== Step 3c: 에이전시 전용 ======
function Step3Agency() {
  const { agencyFields, updateAgencyFields, setStep } = useSignupStore();
  const f = agencyFields;
  const [files, setFiles] = useState<{ id: string; name: string; type: string; size: string }[]>([]);

  const businessTypeOptions = [
    { value: "medical_tourism", label: "Medical Tourism Agency" },
    { value: "travel_agency", label: "Travel Agency" },
    { value: "medical_referral", label: "Medical Referral Partner" },
    { value: "consultant", label: "Consultant" },
  ];

  return (
    <div>
      <h1 className="text-xl font-bold text-text-primary mb-6">에이전시 / 파트너 정보</h1>

      <div className="flex flex-col gap-5">
        <FormSection title="회사 정보">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField label="회사명" required>
              <input className={inputClassName} value={f.companyName} onChange={(e) => updateAgencyFields({ companyName: e.target.value })} placeholder="회사명" />
            </FormField>
            <FormField label="회사명 (영문)" required>
              <input className={inputClassName} value={f.companyNameEn} onChange={(e) => updateAgencyFields({ companyNameEn: e.target.value })} placeholder="Company Name" />
            </FormField>
            <FormField label="사업자등록번호" required>
              <input className={inputClassName} value={f.businessRegistration} onChange={(e) => updateAgencyFields({ businessRegistration: e.target.value })} />
            </FormField>
            <FormSelect label="설립 국가" required value={f.foundingCountry} onChange={(v) => updateAgencyFields({ foundingCountry: v })} options={nationalityOptions} />
            <div className="md:col-span-2">
              <FormField label="회사 주소">
                <input className={inputClassName} value={f.companyAddress} onChange={(e) => updateAgencyFields({ companyAddress: e.target.value })} placeholder="주소" />
              </FormField>
            </div>
            <FormField label="웹사이트">
              <input className={inputClassName} value={f.website} onChange={(e) => updateAgencyFields({ website: e.target.value })} placeholder="https://" />
            </FormField>
            <FormField label="대표자명" required>
              <input className={inputClassName} value={f.representativeName} onChange={(e) => updateAgencyFields({ representativeName: e.target.value })} />
            </FormField>
          </div>
        </FormSection>

        <FormSection title="담당자 정보">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField label="담당자명" required>
              <input className={inputClassName} value={f.contactPersonName} onChange={(e) => updateAgencyFields({ contactPersonName: e.target.value })} />
            </FormField>
            <FormField label="직책">
              <input className={inputClassName} value={f.contactPersonPosition} onChange={(e) => updateAgencyFields({ contactPersonPosition: e.target.value })} />
            </FormField>
            <FormField label="담당자 이메일" required>
              <input className={inputClassName} type="email" value={f.contactPersonEmail} onChange={(e) => updateAgencyFields({ contactPersonEmail: e.target.value })} />
            </FormField>
            <FormField label="담당자 전화" required>
              <input className={inputClassName} value={f.contactPersonPhone} onChange={(e) => updateAgencyFields({ contactPersonPhone: e.target.value })} />
            </FormField>
            <FormField label="WhatsApp / Telegram">
              <input className={inputClassName} value={f.contactPersonWhatsapp} onChange={(e) => updateAgencyFields({ contactPersonWhatsapp: e.target.value })} placeholder="메신저 ID" />
            </FormField>
          </div>
        </FormSection>

        <FormSection title="사업 정보">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormSelect label="사업 유형" required value={f.businessType} onChange={(v) => updateAgencyFields({ businessType: v })} options={businessTypeOptions} />
            <FormField label="연간 환자 송출 규모">
              <input className={inputClassName} value={f.annualPatientVolume} onChange={(e) => updateAgencyFields({ annualPatientVolume: e.target.value })} placeholder="예: 200+" />
            </FormField>
            <FormField label="주요 송출 국가">
              <input className={inputClassName} value={f.mainCountries} onChange={(e) => updateAgencyFields({ mainCountries: e.target.value })} placeholder="쉼표로 구분" />
            </FormField>
            <FormField label="주요 협력 병원">
              <input className={inputClassName} value={f.partnerHospitals} onChange={(e) => updateAgencyFields({ partnerHospitals: e.target.value })} placeholder="쉼표로 구분" />
            </FormField>
          </div>
        </FormSection>

        <FormSection title="정산 계좌" collapsible defaultOpen={false}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField label="은행명">
              <input className={inputClassName} value={f.bankName} onChange={(e) => updateAgencyFields({ bankName: e.target.value })} />
            </FormField>
            <FormField label="계좌번호">
              <input className={inputClassName} value={f.accountNumber} onChange={(e) => updateAgencyFields({ accountNumber: e.target.value })} />
            </FormField>
            <FormField label="SWIFT 코드">
              <input className={inputClassName} value={f.swift} onChange={(e) => updateAgencyFields({ swift: e.target.value })} />
            </FormField>
            <FormField label="계좌주">
              <input className={inputClassName} value={f.accountHolder} onChange={(e) => updateAgencyFields({ accountHolder: e.target.value })} />
            </FormField>
          </div>
        </FormSection>

        <FormSection title="서류 업로드">
          <FileUploadZone label="사업자등록증, 회사소개서, 회사로고" files={files}
            onAdd={(f) => setFiles((prev) => [...prev, f])}
            onRemove={(id) => setFiles((prev) => prev.filter((f) => f.id !== id))}
            accept="PDF, JPG, PNG" />
        </FormSection>
      </div>

      <NavigationButtons onBack={() => setStep(2)} onNext={() => setStep(4)} />
    </div>
  );
}

// ====== Step 4: 완료 ======
function Step4Complete() {
  const router = useRouter();
  const { memberType, reset } = useSignupStore();

  const typeLabel = memberType === "patient" ? "환자/보호자" : memberType === "doctor" ? "의료인" : "에이전시/파트너";

  return (
    <div className="text-center py-10">
      <div className="w-16 h-16 rounded-full bg-success-light flex items-center justify-center mx-auto mb-4">
        <Check size={32} className="text-success" />
      </div>
      <h1 className="text-xl font-bold text-text-primary mb-2">회원가입 완료!</h1>
      <p className="text-sm text-text-secondary mb-1">
        <span className="font-medium text-primary">{typeLabel}</span> 회원으로 가입이 완료되었습니다.
      </p>
      <p className="text-xs text-text-muted mb-8">관리자 승인 후 서비스를 이용하실 수 있습니다.</p>
      <button
        onClick={() => { reset(); router.push("/login"); }}
        className="px-6 py-2.5 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary-dark"
      >
        로그인하러 가기
      </button>
    </div>
  );
}

// ====== Navigation Buttons ======
function NavigationButtons({ onBack, onNext }: { onBack: () => void; onNext: () => void }) {
  return (
    <div className="flex gap-3 mt-6">
      <button onClick={onBack} className="flex items-center gap-1.5 px-4 py-2.5 rounded-lg border border-[#E8E8E8] text-sm text-text-secondary hover:bg-bg-surface">
        <ArrowLeft size={16} /> 이전
      </button>
      <button onClick={onNext} className="flex items-center gap-1.5 px-6 py-2.5 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary-dark ml-auto">
        가입하기 <Check size={16} />
      </button>
    </div>
  );
}
