"use client";

import { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import {
  Search,
  SlidersHorizontal,
  ChevronDown,
  ChevronRight,
  ShieldCheck,
  Globe,
  MessageCircle,
  Mail,
  Send,
  BookOpen,
  Briefcase,
  GraduationCap,
  Users,
  X,
} from "lucide-react";
import { cn } from "@/lib/cn";
import { HOSPITALS, PATIENTS } from "@/lib/mockData";
import { useAppStore } from "@/lib/store";
import { Hospital, Doctor, Department } from "@/lib/types";
import TopNav from "@/components/layout/TopNav";
import DoctorModal from "@/components/hospital/DoctorModal";

// ─── Avatar helpers ─────────────────────────────────────────────────────────

const AVATAR_COLORS = [
  "bg-primary text-white",
  "bg-primary-dark text-white",
  "bg-success text-white",
  "bg-warning text-white",
];

function getAvatarColor(id: string): string {
  const idx =
    id.split("").reduce((a, c) => a + c.charCodeAt(0), 0) %
    AVATAR_COLORS.length;
  return AVATAR_COLORS[idx];
}

function getInitials(name: string) {
  return name.slice(0, 2);
}

// ─── StepBar ────────────────────────────────────────────────────────────────

function StepBar({ current }: { current: 1 | 2 | 3 }) {
  const steps = [
    { label: "환자정보", n: 1 },
    { label: "병원선택", n: 2 },
    { label: "접수·상태", n: 3 },
  ];
  return (
    <div
      className="flex items-center justify-center gap-0 px-4 py-3 bg-white border-b border-border"
      data-testid="step-bar"
    >
      {steps.map((step, i) => (
        <div key={step.n} className="flex items-center">
          {i > 0 && (
            <div
              className={cn(
                "h-px w-8",
                step.n <= current ? "bg-primary" : "bg-border"
              )}
            />
          )}
          <div className="flex flex-col items-center gap-0.5">
            <div
              className={cn(
                "w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold",
                step.n < current
                  ? "bg-primary text-white"
                  : step.n === current
                  ? "bg-primary text-white ring-2 ring-primary ring-offset-1"
                  : "bg-border text-text-muted"
              )}
              data-testid={`step-${step.n}`}
            >
              {step.n < current ? "✓" : step.n === current ? "●" : "○"}
            </div>
            <span
              className={cn(
                "text-[10px] font-medium",
                step.n === current ? "text-primary" : "text-text-muted"
              )}
            >
              {step.label}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── Toggle Switch ───────────────────────────────────────────────────────────

function Toggle({
  checked,
  onChange,
  label,
  testId,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  label: string;
  testId?: string;
}) {
  return (
    <label
      className="flex items-center gap-2 cursor-pointer"
      data-testid={testId}
    >
      <button
        role="switch"
        aria-checked={checked}
        type="button"
        onClick={() => onChange(!checked)}
        className={cn(
          "w-9 h-5 rounded-full relative transition-colors shrink-0",
          checked ? "bg-primary" : "bg-border"
        )}
      >
        <span
          className={cn(
            "absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-transform",
            checked ? "translate-x-4" : "translate-x-0.5"
          )}
        />
      </button>
      <span className="text-xs text-text-primary">{label}</span>
    </label>
  );
}

// ─── Filter Panel ────────────────────────────────────────────────────────────

interface FilterState {
  departments: string[];
  hospitalTypes: string[];
  regions: string[];
  languages: string[];
  registeredOnly: boolean;
  acceptingOnly: boolean;
}

const DEPT_OPTIONS = ["종양내과", "심장내과", "신경외과"];
const TYPE_OPTIONS = ["상급종합병원", "종합병원", "전문병원"];
const REGION_OPTIONS = ["서울", "경기", "부산"];
const LANG_OPTIONS = ["러시아어", "영어"];

const LANG_CODE_MAP: Record<string, string> = {
  러시아어: "ru",
  영어: "en",
};

function FilterPanel({
  filters,
  onChange,
  onReset,
}: {
  filters: FilterState;
  onChange: (f: FilterState) => void;
  onReset: () => void;
}) {
  function toggleChip(key: keyof FilterState, value: string) {
    const arr = filters[key] as string[];
    const next = arr.includes(value)
      ? arr.filter((v) => v !== value)
      : [...arr, value];
    onChange({ ...filters, [key]: next });
  }

  function toggleCheck(key: keyof FilterState, value: string) {
    toggleChip(key, value);
  }

  return (
    <aside
      className="w-[220px] border-r border-border overflow-y-auto p-5 bg-white shrink-0"
      data-testid="filter-panel"
    >
      <div className="flex items-center justify-between mb-5">
        <span className="text-sm font-semibold text-text-primary">필터</span>
        <button
          type="button"
          onClick={onReset}
          className="text-xs text-primary hover:underline"
          data-testid="filter-reset"
        >
          초기화
        </button>
      </div>

      <div className="flex flex-col gap-5">
        {/* 진료과목 */}
        <div>
          <p className="text-xs font-semibold text-text-secondary mb-2">
            진료과목
          </p>
          <div className="flex flex-wrap gap-1.5">
            {DEPT_OPTIONS.map((dept) => (
              <button
                key={dept}
                type="button"
                onClick={() => toggleChip("departments", dept)}
                data-testid={`filter-dept-${dept}`}
                className={cn(
                  "px-3 py-1 rounded-full text-xs border transition-colors",
                  filters.departments.includes(dept)
                    ? "bg-primary text-white border-primary"
                    : "border-border text-text-secondary hover:border-primary"
                )}
              >
                {dept}
              </button>
            ))}
          </div>
        </div>

        {/* 병원 유형 */}
        <div>
          <p className="text-xs font-semibold text-text-secondary mb-2">
            병원 유형
          </p>
          <div className="flex flex-col gap-1.5">
            {TYPE_OPTIONS.map((type) => (
              <label
                key={type}
                className="flex items-center gap-2 cursor-pointer"
                data-testid={`filter-type-${type}`}
              >
                <input
                  type="checkbox"
                  checked={filters.hospitalTypes.includes(type)}
                  onChange={() => toggleCheck("hospitalTypes", type)}
                  className="w-3.5 h-3.5 accent-primary"
                />
                <span className="text-xs text-text-primary">{type}</span>
              </label>
            ))}
          </div>
        </div>

        {/* 지역 */}
        <div>
          <p className="text-xs font-semibold text-text-secondary mb-2">
            지역
          </p>
          <div className="flex flex-wrap gap-1.5">
            {REGION_OPTIONS.map((region) => (
              <button
                key={region}
                type="button"
                onClick={() => toggleChip("regions", region)}
                data-testid={`filter-region-${region}`}
                className={cn(
                  "px-3 py-1 rounded-full text-xs border transition-colors",
                  filters.regions.includes(region)
                    ? "bg-primary text-white border-primary"
                    : "border-border text-text-secondary hover:border-primary"
                )}
              >
                {region}
              </button>
            ))}
          </div>
        </div>

        {/* 언어 지원 */}
        <div>
          <p className="text-xs font-semibold text-text-secondary mb-2">
            언어 지원
          </p>
          <div className="flex flex-col gap-1.5">
            {LANG_OPTIONS.map((lang) => (
              <label
                key={lang}
                className="flex items-center gap-2 cursor-pointer"
                data-testid={`filter-lang-${lang}`}
              >
                <input
                  type="checkbox"
                  checked={filters.languages.includes(lang)}
                  onChange={() => toggleCheck("languages", lang)}
                  className="w-3.5 h-3.5 accent-primary"
                />
                <span className="text-xs text-text-primary">{lang}</span>
              </label>
            ))}
          </div>
        </div>

        {/* 외국인 등록 toggle */}
        <Toggle
          checked={filters.registeredOnly}
          onChange={(v) => onChange({ ...filters, registeredOnly: v })}
          label="공식 등록기관만"
          testId="filter-toggle-registered"
        />

        {/* 접수 가능 toggle */}
        <Toggle
          checked={filters.acceptingOnly}
          onChange={(v) => onChange({ ...filters, acceptingOnly: v })}
          label="수락 가능한 병원만"
          testId="filter-toggle-accepting"
        />
      </div>
    </aside>
  );
}

// ─── Hospital Card ────────────────────────────────────────────────────────────

function HospitalCard({
  hospital,
  isSelected,
  onClick,
  matchedDeptName,
  variant = "list",
}: {
  hospital: Hospital;
  isSelected: boolean;
  onClick: () => void;
  matchedDeptName?: string;
  variant?: "list" | "mobile";
}) {
  const allDepts = hospital.departments.map((d) => d.name);
  const topDepts = allDepts.slice(0, 3);
  const topLangs = hospital.languages.slice(0, 3);

  return (
    <button
      type="button"
      onClick={onClick}
      data-testid={`hospital-card-${hospital.id}`}
      className={cn(
        "w-full text-left transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary",
        variant === "list"
          ? cn(
              "p-4 border-b border-border",
              isSelected ? "bg-primary-light" : "hover:bg-bg-surface"
            )
          : cn(
              "p-4 rounded-xl border border-border",
              isSelected
                ? "bg-primary-light border-primary"
                : "bg-white hover:border-primary"
            )
      )}
    >
      <div className="flex items-start gap-3">
        {/* Thumbnail */}
        <div
          className="w-12 h-12 rounded-md bg-bg-surface shrink-0 overflow-hidden"
          aria-hidden="true"
        >
          {hospital.photos[0] ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={hospital.photos[0].url}
              alt={hospital.photos[0].label}
              className="w-full h-full object-cover"
            />
          ) : null}
        </div>

        <div className="flex-1 min-w-0">
          <p className="font-semibold text-sm text-text-primary truncate">
            {hospital.name}
          </p>
          <p className="text-xs text-text-secondary mt-0.5">
            {hospital.typeLabel} · {hospital.region}
          </p>

          {/* Badges */}
          <div className="flex flex-wrap gap-1 mt-2">
            {topDepts.map((dept) => (
              <span
                key={dept}
                className={cn(
                  "text-[10px] px-2 py-0.5 rounded-full font-medium",
                  dept === matchedDeptName
                    ? "bg-primary text-white"
                    : "bg-primary-light text-primary-dark"
                )}
              >
                {dept}
              </span>
            ))}
            {topLangs.map((lang) => (
              <span
                key={lang.code}
                className="text-[10px] px-2 py-0.5 rounded-full bg-primary-light text-primary-dark font-medium"
              >
                {lang.label}
              </span>
            ))}
            {hospital.isAcceptingReferral && (
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-success-light text-success font-medium">
                접수가능
              </span>
            )}
          </div>
        </div>
      </div>
    </button>
  );
}

// ─── Department Accordion ────────────────────────────────────────────────────

function DepartmentAccordion({
  dept,
  isMatched,
  defaultOpen,
  onDoctorClick,
}: {
  dept: Department;
  isMatched: boolean;
  defaultOpen: boolean;
  onDoctorClick: (doctor: Doctor, dept: Department) => void;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div
      className={cn(
        "rounded-lg border overflow-hidden",
        isMatched ? "border-primary" : "border-border"
      )}
      data-testid={`dept-accordion-${dept.id}`}
    >
      {/* Accordion header */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "w-full flex items-center justify-between px-4 py-3 text-left transition-colors",
          isMatched
            ? "bg-primary-light hover:bg-primary/10"
            : "bg-white hover:bg-bg-surface"
        )}
        aria-expanded={open}
        data-testid={`dept-toggle-${dept.id}`}
      >
        <div className="flex items-center gap-2">
          <span
            className={cn(
              "text-sm font-semibold",
              isMatched ? "text-primary" : "text-text-primary"
            )}
          >
            {dept.name}
          </span>
          {isMatched && (
            <span className="bg-primary text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
              환자 매칭
            </span>
          )}
        </div>
        <div className="flex items-center gap-2">
          {!open && (
            <span className="text-xs text-text-muted">
              의사 {dept.doctors.length}명
            </span>
          )}
          {open ? (
            <ChevronDown size={16} className="text-text-secondary shrink-0" />
          ) : (
            <ChevronRight size={16} className="text-text-secondary shrink-0" />
          )}
        </div>
      </button>

      {/* Doctor list */}
      {open && (
        <div className="divide-y divide-border bg-white">
          {dept.doctors.map((doctor) => (
            <button
              key={doctor.id}
              type="button"
              onClick={() => onDoctorClick(doctor, dept)}
              className="w-full flex items-center gap-3 px-4 py-3 hover:bg-bg-surface transition-colors text-left"
              data-testid={`doctor-row-${doctor.id}`}
            >
              {/* Avatar */}
              <div
                className={cn(
                  "w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold shrink-0",
                  getAvatarColor(doctor.id)
                )}
                aria-hidden="true"
              >
                {getInitials(doctor.name)}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-text-primary">
                  {doctor.name}
                </p>
                <p className="text-xs text-text-secondary truncate">
                  {doctor.specialties.slice(0, 2).join(", ")}
                </p>
              </div>
              <div className="flex flex-wrap gap-1 justify-end shrink-0">
                {doctor.languages.slice(0, 2).map((lang) => (
                  <span
                    key={lang.code}
                    className="text-[10px] px-1.5 py-0.5 rounded-full bg-primary-light text-primary-dark font-medium"
                  >
                    {lang.label}
                  </span>
                ))}
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Hospital Detail Panel ────────────────────────────────────────────────────

function HospitalDetail({
  hospital,
  matchedDeptName,
  onDoctorClick,
}: {
  hospital: Hospital;
  matchedDeptName?: string;
  onDoctorClick: (doctor: Doctor, dept: Department, hospital: Hospital) => void;
}) {
  const photos = hospital.photos;

  return (
    <div
      className="flex-1 overflow-y-auto bg-white"
      data-testid="hospital-detail-panel"
    >
      {/* Photo grid */}
      <div className="flex h-[180px] bg-bg-surface">
        {/* Main photo */}
        <div className="flex-[2] overflow-hidden">
          {photos[0] ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={photos[0].url}
              alt={photos[0].label}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-bg-surface" />
          )}
        </div>
        {/* Side column */}
        <div className="w-[160px] flex flex-col gap-px shrink-0">
          {[1, 2].map((i) => (
            <div key={i} className="flex-1 overflow-hidden">
              {photos[i] ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={photos[i].url}
                  alt={photos[i].label}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-border" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Hospital header */}
      <div className="px-6 pt-5 pb-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <h2
              className="text-xl font-bold text-text-primary"
              data-testid="detail-hospital-name"
            >
              {hospital.name}
            </h2>
            <p className="text-sm text-text-secondary mt-1">
              {hospital.typeLabel} · {hospital.address}
            </p>
          </div>
          <div className="flex gap-2 shrink-0">
            {hospital.whatsappNumber && (
              <a
                href={`https://wa.me/${hospital.whatsappNumber.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="detail-whatsapp-btn"
                className="flex items-center gap-1.5 bg-success-light text-success text-xs font-semibold px-3 py-2 rounded-lg hover:opacity-90 transition-opacity"
              >
                <MessageCircle size={13} aria-hidden="true" />
                WhatsApp
              </a>
            )}
            {hospital.email && (
              <a
                href={`mailto:${hospital.email}`}
                data-testid="detail-email-btn"
                className="flex items-center gap-1.5 border border-border text-text-secondary text-xs font-medium px-3 py-2 rounded-lg hover:border-primary hover:text-primary transition-colors"
              >
                <Mail size={13} aria-hidden="true" />
                Email
              </a>
            )}
          </div>
        </div>

        {/* Cert badges */}
        <div className="flex flex-wrap gap-2 mt-3">
          {hospital.certifications.slice(0, 2).map((cert) => (
            <span
              key={cert}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-primary bg-primary-light px-2.5 py-1 rounded-full"
              data-testid={`cert-badge-${cert}`}
            >
              {cert.includes("JCI") ? (
                <ShieldCheck size={11} aria-hidden="true" />
              ) : (
                <Globe size={11} aria-hidden="true" />
              )}
              {cert}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="text-sm text-text-secondary mt-3 line-clamp-2">
          {hospital.description}
        </p>
      </div>

      <hr className="border-border mx-6" />

      {/* 진료과 */}
      <div className="px-6 pt-4 pb-6">
        <h3 className="text-sm font-semibold text-text-primary mb-3">진료과</h3>
        <div className="flex flex-col gap-2">
          {hospital.departments.map((dept) => (
            <DepartmentAccordion
              key={dept.id}
              dept={dept}
              isMatched={dept.name === matchedDeptName}
              defaultOpen={dept.name === matchedDeptName}
              onDoctorClick={(doctor, d) =>
                onDoctorClick(doctor, d, hospital)
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Mobile Doctor Detail ─────────────────────────────────────────────────────

function MobileDoctorDetail({
  doctor,
  departmentName,
  hospitalName,
  onBack,
  onApply,
}: {
  doctor: Doctor;
  departmentName: string;
  hospitalName: string;
  onBack: () => void;
  onApply: () => void;
}) {
  return (
    <div className="flex flex-col min-h-0 flex-1" data-testid="mobile-doctor-detail">
      <TopNav
        title="교수 상세"
        showBack
        onBack={onBack}
        data-testid="mobile-doctor-topnav"
      />
      <StepBar current={2} />

      <div className="flex-1 overflow-y-auto bg-white">
        {/* Profile */}
        <div className="flex items-start gap-4 px-4 pt-5 pb-4">
          <div
            className={cn(
              "w-14 h-14 rounded-full flex items-center justify-center text-lg font-bold shrink-0",
              getAvatarColor(doctor.id)
            )}
            aria-hidden="true"
          >
            {getInitials(doctor.name)}
          </div>
          <div className="flex-1 min-w-0">
            <h2 className="text-lg font-bold text-text-primary">
              {doctor.name}
            </h2>
            <p className="text-sm text-text-secondary mt-0.5">
              {departmentName} · {hospitalName}
            </p>
            <div className="flex flex-wrap gap-1.5 mt-2">
              {doctor.languages.map((lang) => (
                <span
                  key={lang.code}
                  className="inline-flex items-center gap-1 bg-primary-light text-primary-dark text-[11px] font-medium px-2 py-0.5 rounded-full"
                >
                  <Globe size={10} aria-hidden="true" />
                  {lang.label}
                </span>
              ))}
            </div>
          </div>
        </div>

        <hr className="border-border mx-4" />

        <div className="px-4 py-4 space-y-5">
          {/* 전문분야 */}
          <div>
            <div className="flex items-center gap-1.5 mb-2">
              <Briefcase size={13} className="text-primary shrink-0" aria-hidden="true" />
              <span className="text-xs font-semibold text-text-secondary uppercase tracking-wide">
                전문분야
              </span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {doctor.specialties.map((s) => (
                <span
                  key={s}
                  className="bg-primary-light text-primary-dark text-xs px-2.5 py-1 rounded-full"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* 학력 */}
          <div>
            <div className="flex items-center gap-1.5 mb-2">
              <GraduationCap size={13} className="text-primary shrink-0" aria-hidden="true" />
              <span className="text-xs font-semibold text-text-secondary uppercase tracking-wide">
                학력 및 연수
              </span>
            </div>
            <ul className="space-y-1">
              {doctor.education.map((edu, i) => (
                <li key={i} className="text-sm text-text-primary flex gap-1.5">
                  <span className="text-text-muted shrink-0">·</span>
                  {edu}
                </li>
              ))}
            </ul>
          </div>

          {/* 경력 */}
          <div>
            <div className="flex items-center gap-1.5 mb-2">
              <Briefcase size={13} className="text-primary shrink-0" aria-hidden="true" />
              <span className="text-xs font-semibold text-text-secondary uppercase tracking-wide">
                경력
              </span>
            </div>
            <ul className="space-y-1">
              {doctor.experience.map((exp, i) => (
                <li key={i} className="text-sm text-text-primary flex gap-1.5">
                  <span className="text-text-muted shrink-0">·</span>
                  {exp}
                </li>
              ))}
            </ul>
          </div>

          {/* 2-col stats */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-bg-surface rounded-lg p-3">
              <div className="flex items-center gap-1.5 mb-1">
                <BookOpen size={13} className="text-primary shrink-0" aria-hidden="true" />
                <span className="text-xs font-semibold text-text-secondary">
                  SCI 논문
                </span>
              </div>
              <p className="text-lg font-bold text-primary">
                {doctor.publications}
                <span className="text-xs font-normal text-text-secondary ml-1">
                  편
                </span>
              </p>
            </div>
            {doctor.foreignPatientExperience && (
              <div className="bg-bg-surface rounded-lg p-3">
                <div className="flex items-center gap-1.5 mb-1">
                  <Users size={13} className="text-primary shrink-0" aria-hidden="true" />
                  <span className="text-xs font-semibold text-text-secondary">
                    외국인 환자 경험
                  </span>
                </div>
                <p className="text-xs text-text-primary leading-relaxed">
                  {doctor.foreignPatientExperience}
                </p>
              </div>
            )}
          </div>

          {/* Awards */}
          {doctor.awards && doctor.awards.length > 0 && (
            <div>
              <span className="text-xs font-semibold text-text-secondary uppercase tracking-wide">
                수상
              </span>
              <ul className="mt-1.5 space-y-1">
                {doctor.awards.map((award, i) => (
                  <li
                    key={i}
                    className="text-sm text-text-primary flex gap-1.5 items-start"
                  >
                    <span className="text-warning shrink-0">★</span>
                    {award}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Action buttons */}
      <div className="px-4 pb-6 pt-3 bg-white border-t border-border flex flex-col gap-2 shrink-0">
        <button
          type="button"
          onClick={onApply}
          data-testid="mobile-doctor-apply-btn"
          className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white text-sm font-semibold py-3 rounded-xl transition-colors"
        >
          <Send size={15} aria-hidden="true" />
          이 교수로 접수하기
        </button>
        <button
          type="button"
          onClick={() => alert("WhatsApp 연결은 실제 배포 시 활성화됩니다.")}
          data-testid="mobile-doctor-whatsapp-btn"
          className="w-full flex items-center justify-center gap-2 bg-success-light text-success text-sm font-semibold py-3 rounded-xl hover:opacity-90 transition-opacity"
        >
          <MessageCircle size={15} aria-hidden="true" />
          WhatsApp 문의
        </button>
      </div>
    </div>
  );
}

// ─── Mobile Filter Drawer ─────────────────────────────────────────────────────

function MobileFilterDrawer({
  filters,
  onChange,
  onReset,
  onClose,
}: {
  filters: FilterState;
  onChange: (f: FilterState) => void;
  onReset: () => void;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-40 bg-black/40 flex flex-col justify-end"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      data-testid="mobile-filter-drawer"
    >
      <div className="bg-white rounded-t-2xl max-h-[80vh] flex flex-col overflow-hidden">
        {/* Drawer header */}
        <div className="flex items-center justify-between px-4 py-4 border-b border-border">
          <span className="text-base font-semibold text-text-primary">필터</span>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onReset}
              className="text-sm text-primary"
              data-testid="mobile-filter-reset"
            >
              초기화
            </button>
            <button
              type="button"
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center bg-bg-surface rounded-full"
              aria-label="닫기"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        <div className="overflow-y-auto p-4 flex flex-col gap-5">
          {/* 진료과목 */}
          <div>
            <p className="text-xs font-semibold text-text-secondary mb-2">
              진료과목
            </p>
            <div className="flex flex-wrap gap-2">
              {DEPT_OPTIONS.map((dept) => (
                <button
                  key={dept}
                  type="button"
                  onClick={() => {
                    const arr = filters.departments;
                    const next = arr.includes(dept)
                      ? arr.filter((v) => v !== dept)
                      : [...arr, dept];
                    onChange({ ...filters, departments: next });
                  }}
                  className={cn(
                    "px-3 py-1.5 rounded-full text-sm border transition-colors",
                    filters.departments.includes(dept)
                      ? "bg-primary text-white border-primary"
                      : "border-border text-text-secondary"
                  )}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>

          {/* 지역 */}
          <div>
            <p className="text-xs font-semibold text-text-secondary mb-2">
              지역
            </p>
            <div className="flex flex-wrap gap-2">
              {REGION_OPTIONS.map((region) => (
                <button
                  key={region}
                  type="button"
                  onClick={() => {
                    const arr = filters.regions;
                    const next = arr.includes(region)
                      ? arr.filter((v) => v !== region)
                      : [...arr, region];
                    onChange({ ...filters, regions: next });
                  }}
                  className={cn(
                    "px-3 py-1.5 rounded-full text-sm border transition-colors",
                    filters.regions.includes(region)
                      ? "bg-primary text-white border-primary"
                      : "border-border text-text-secondary"
                  )}
                >
                  {region}
                </button>
              ))}
            </div>
          </div>

          {/* 외국인 등록 */}
          <Toggle
            checked={filters.registeredOnly}
            onChange={(v) => onChange({ ...filters, registeredOnly: v })}
            label="공식 등록기관만"
            testId="mobile-filter-toggle-registered"
          />

          {/* 접수 가능 */}
          <Toggle
            checked={filters.acceptingOnly}
            onChange={(v) => onChange({ ...filters, acceptingOnly: v })}
            label="수락 가능한 병원만"
            testId="mobile-filter-toggle-accepting"
          />
        </div>

        <div className="px-4 pb-6 pt-3 border-t border-border">
          <button
            type="button"
            onClick={onClose}
            className="w-full bg-primary text-white text-sm font-semibold py-3 rounded-xl"
          >
            적용
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Default filter state ─────────────────────────────────────────────────────

function defaultFilters(): FilterState {
  return {
    departments: [],
    hospitalTypes: ["상급종합병원"],
    regions: [],
    languages: [],
    registeredOnly: true,
    acceptingOnly: false,
  };
}

// ─── Filter logic ─────────────────────────────────────────────────────────────

function applyFilters(hospitals: Hospital[], filters: FilterState): Hospital[] {
  return hospitals.filter((h) => {
    if (
      filters.departments.length > 0 &&
      !h.departments.some((d) => filters.departments.includes(d.name))
    )
      return false;
    if (
      filters.hospitalTypes.length > 0 &&
      !filters.hospitalTypes.includes(h.typeLabel)
    )
      return false;
    if (filters.regions.length > 0 && !filters.regions.includes(h.region))
      return false;
    if (filters.languages.length > 0) {
      const codes = filters.languages.map((l) => LANG_CODE_MAP[l]);
      if (!h.languages.some((l) => codes.includes(l.code))) return false;
    }
    if (filters.registeredOnly && !h.isRegisteredForForeigner) return false;
    if (filters.acceptingOnly && !h.isAcceptingReferral) return false;
    return true;
  });
}

// ─── Main Page Content ────────────────────────────────────────────────────────

function HospitalsPageContent() {
  const searchParams = useSearchParams();
  const patientId = searchParams.get("patientId");
  const patient = patientId
    ? PATIENTS.find((p) => p.id === patientId)
    : undefined;
  const matchedDeptName = patient?.desiredDepartment;

  const {
    selectedHospitalId,
    setSelectedHospitalId,
    selectedDoctorId,
    selectedDoctorHospitalId,
    openDoctorModal,
    closeDoctorModal,
  } = useAppStore();

  const [filters, setFilters] = useState<FilterState>(defaultFilters);
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileScreen, setMobileScreen] = useState<"list" | "detail" | "doctor">("list");
  const [mobileDoctorInfo, setMobileDoctorInfo] = useState<{
    doctor: Doctor;
    dept: Department;
    hospital: Hospital;
  } | null>(null);
  const [showMobileFilter, setShowMobileFilter] = useState(false);

  const filteredHospitals = useMemo(() => {
    let list = applyFilters(HOSPITALS, filters);
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (h) =>
          h.name.toLowerCase().includes(q) ||
          h.typeLabel.toLowerCase().includes(q) ||
          h.region.toLowerCase().includes(q)
      );
    }
    return list;
  }, [filters, searchQuery]);

  // Auto-select first hospital on desktop
  const selectedHospital = useMemo(() => {
    if (selectedHospitalId) {
      return filteredHospitals.find((h) => h.id === selectedHospitalId) ?? filteredHospitals[0] ?? null;
    }
    return filteredHospitals[0] ?? null;
  }, [selectedHospitalId, filteredHospitals]);

  // Doctor modal data
  const doctorModalData = useMemo(() => {
    if (!selectedDoctorId || !selectedDoctorHospitalId) return null;
    const hospital = HOSPITALS.find((h) => h.id === selectedDoctorHospitalId);
    if (!hospital) return null;
    for (const dept of hospital.departments) {
      const doctor = dept.doctors.find((d) => d.id === selectedDoctorId);
      if (doctor) return { doctor, dept, hospital };
    }
    return null;
  }, [selectedDoctorId, selectedDoctorHospitalId]);

  function handleHospitalClick(hospital: Hospital) {
    setSelectedHospitalId(hospital.id);
    setMobileScreen("detail");
  }

  function handleDoctorClick(
    doctor: Doctor,
    dept: Department,
    hospital: Hospital
  ) {
    // Desktop: open modal
    openDoctorModal(doctor.id, hospital.id);
    // Mobile: navigate to doctor screen (set state for mobile)
    setMobileDoctorInfo({ doctor, dept, hospital });
    setMobileScreen("doctor");
  }

  function handleApply() {
    alert("접수가 완료되었습니다");
    closeDoctorModal();
    setMobileScreen("list");
  }

  function handleReset() {
    setFilters(defaultFilters());
    setSearchQuery("");
  }

  const mobileHospital = useMemo(() => {
    if (!selectedHospitalId) return filteredHospitals[0] ?? null;
    return filteredHospitals.find((h) => h.id === selectedHospitalId) ?? filteredHospitals[0] ?? null;
  }, [selectedHospitalId, filteredHospitals]);

  // ── MOBILE RENDER ──────────────────────────────────────────────────────────
  return (
    <>
      {/* ===== MOBILE ===== */}
      <div className="md:hidden flex flex-col h-[calc(100vh-56px)] bg-bg-surface" data-testid="hospitals-mobile">
        {/* Doctor screen */}
        {mobileScreen === "doctor" && mobileDoctorInfo && (
          <MobileDoctorDetail
            doctor={mobileDoctorInfo.doctor}
            departmentName={mobileDoctorInfo.dept.name}
            hospitalName={mobileDoctorInfo.hospital.name}
            onBack={() => setMobileScreen("detail")}
            onApply={() => handleApply()}
          />
        )}

        {/* Detail screen */}
        {mobileScreen === "detail" && mobileHospital && (
          <div className="flex flex-col flex-1 min-h-0">
            <TopNav
              title={mobileHospital.name}
              showBack
              onBack={() => setMobileScreen("list")}
            />
            <StepBar current={2} />
            <div className="flex-1 overflow-y-auto bg-white">
              {/* Photo */}
              <div className="relative w-full h-[200px] bg-bg-surface overflow-hidden">
                {mobileHospital.photos[0] && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={mobileHospital.photos[0].url}
                    alt={mobileHospital.photos[0].label}
                    className="w-full h-full object-cover"
                  />
                )}
                {/* dot indicators */}
                <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1">
                  {mobileHospital.photos.map((_, i) => (
                    <span
                      key={i}
                      className={cn(
                        "w-1.5 h-1.5 rounded-full",
                        i === 0 ? "bg-white" : "bg-white/50"
                      )}
                    />
                  ))}
                </div>
                {/* photo count badge */}
                <span className="absolute top-2 right-2 bg-black/50 text-white text-xs px-2 py-0.5 rounded-full">
                  1/{mobileHospital.photos.length}
                </span>
              </div>

              {/* Info */}
              <div className="px-4 pt-4 pb-2">
                <h2
                  className="text-lg font-bold text-text-primary"
                  data-testid="mobile-detail-name"
                >
                  {mobileHospital.name}
                </h2>
                <p className="text-sm text-text-secondary mt-0.5">
                  {mobileHospital.typeLabel} · {mobileHospital.address}
                </p>

                <div className="flex flex-wrap gap-2 mt-3">
                  {mobileHospital.certifications.slice(0, 2).map((cert) => (
                    <span
                      key={cert}
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-primary bg-primary-light px-2.5 py-1 rounded-full"
                    >
                      {cert.includes("JCI") ? (
                        <ShieldCheck size={11} aria-hidden="true" />
                      ) : (
                        <Globe size={11} aria-hidden="true" />
                      )}
                      {cert}
                    </span>
                  ))}
                </div>

                <p className="text-sm text-text-secondary mt-3 line-clamp-2">
                  {mobileHospital.description}
                </p>

                <div className="flex gap-2 mt-3">
                  {mobileHospital.whatsappNumber && (
                    <a
                      href={`https://wa.me/${mobileHospital.whatsappNumber.replace(/[^0-9]/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-testid="mobile-detail-whatsapp"
                      className="flex items-center gap-1.5 bg-success-light text-success text-xs font-semibold px-3 py-2 rounded-lg"
                    >
                      <MessageCircle size={13} aria-hidden="true" />
                      WhatsApp
                    </a>
                  )}
                  {mobileHospital.email && (
                    <a
                      href={`mailto:${mobileHospital.email}`}
                      data-testid="mobile-detail-email"
                      className="flex items-center gap-1.5 border border-border text-text-secondary text-xs font-medium px-3 py-2 rounded-lg"
                    >
                      <Mail size={13} aria-hidden="true" />
                      Email
                    </a>
                  )}
                </div>
              </div>

              <hr className="border-border mx-4 mt-3" />

              <div className="px-4 pt-4 pb-6">
                <h3 className="text-sm font-semibold text-text-primary mb-3">
                  진료과
                </h3>
                <div className="flex flex-col gap-2">
                  {mobileHospital.departments.map((dept) => (
                    <DepartmentAccordion
                      key={dept.id}
                      dept={dept}
                      isMatched={dept.name === matchedDeptName}
                      defaultOpen={dept.name === matchedDeptName}
                      onDoctorClick={(doctor, d) =>
                        handleDoctorClick(doctor, d, mobileHospital)
                      }
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* List screen */}
        {mobileScreen === "list" && (
          <div className="flex flex-col flex-1 min-h-0">
            <TopNav
              title="병원 검색"
              rightAction={
                <button
                  type="button"
                  onClick={() => setShowMobileFilter(true)}
                  aria-label="필터"
                  data-testid="mobile-filter-icon"
                  className="w-8 h-8 flex items-center justify-center text-text-secondary hover:text-primary"
                >
                  <SlidersHorizontal size={18} aria-hidden="true" />
                </button>
              }
            />
            <StepBar current={2} />

            {/* Patient context banner */}
            {patient && (
              <div className="px-4 py-2 bg-primary-light border-b border-border">
                <p className="text-xs text-primary-dark">
                  <span className="font-semibold">{patient.name}</span> 환자 ·{" "}
                  {patient.desiredDepartment} 진료 희망
                </p>
              </div>
            )}

            {/* Filter chips */}
            <div className="flex gap-2 px-4 py-2 overflow-x-auto scrollbar-hide bg-white border-b border-border">
              {DEPT_OPTIONS.map((dept) => (
                <button
                  key={dept}
                  type="button"
                  onClick={() => {
                    const arr = filters.departments;
                    const next = arr.includes(dept)
                      ? arr.filter((v) => v !== dept)
                      : [...arr, dept];
                    setFilters({ ...filters, departments: next });
                  }}
                  className={cn(
                    "shrink-0 px-3 py-1.5 rounded-full text-xs border transition-colors",
                    filters.departments.includes(dept)
                      ? "bg-primary text-white border-primary"
                      : "border-border text-text-secondary bg-white"
                  )}
                  data-testid={`mobile-chip-dept-${dept}`}
                >
                  {dept}
                </button>
              ))}
              {REGION_OPTIONS.map((region) => (
                <button
                  key={region}
                  type="button"
                  onClick={() => {
                    const arr = filters.regions;
                    const next = arr.includes(region)
                      ? arr.filter((v) => v !== region)
                      : [...arr, region];
                    setFilters({ ...filters, regions: next });
                  }}
                  className={cn(
                    "shrink-0 px-3 py-1.5 rounded-full text-xs border transition-colors",
                    filters.regions.includes(region)
                      ? "bg-primary text-white border-primary"
                      : "border-border text-text-secondary bg-white"
                  )}
                  data-testid={`mobile-chip-region-${region}`}
                >
                  {region}
                </button>
              ))}
            </div>

            {/* Search + count */}
            <div className="px-4 pt-3 pb-2 bg-white">
              <div className="relative">
                <Search
                  size={14}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted"
                  aria-hidden="true"
                />
                <input
                  type="search"
                  placeholder="병원명 검색"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-8 pr-3 py-2 text-sm border border-border rounded-lg bg-bg-surface focus:outline-none focus:border-primary"
                  data-testid="mobile-search-input"
                />
              </div>
              <p className="text-xs text-text-secondary mt-2">
                {filteredHospitals.length}개
              </p>
            </div>

            {/* Hospital list */}
            <div
              className="flex-1 overflow-y-auto flex flex-col gap-3 p-4"
              data-testid="mobile-hospital-list"
            >
              {filteredHospitals.map((hospital) => (
                <HospitalCard
                  key={hospital.id}
                  hospital={hospital}
                  isSelected={selectedHospitalId === hospital.id}
                  onClick={() => handleHospitalClick(hospital)}
                  matchedDeptName={matchedDeptName}
                  variant="mobile"
                />
              ))}
              {filteredHospitals.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-sm text-text-muted">
                    조건에 맞는 병원이 없습니다
                  </p>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="mt-2 text-sm text-primary hover:underline"
                  >
                    필터 초기화
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Mobile filter drawer */}
        {showMobileFilter && (
          <MobileFilterDrawer
            filters={filters}
            onChange={setFilters}
            onReset={handleReset}
            onClose={() => setShowMobileFilter(false)}
          />
        )}
      </div>

      {/* ===== DESKTOP ===== */}
      <div
        className="hidden md:flex h-screen overflow-hidden"
        data-testid="hospitals-desktop"
      >
        {/* Left: Filter panel */}
        <FilterPanel
          filters={filters}
          onChange={setFilters}
          onReset={handleReset}
        />

        {/* Middle: Hospital list */}
        <div
          className="w-[340px] border-r border-border overflow-y-auto bg-white shrink-0 flex flex-col"
          data-testid="hospital-list-panel"
        >
          {/* Header */}
          <div className="px-4 pt-4 pb-3 border-b border-border shrink-0">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-sm font-semibold text-text-primary">
                병원 목록
              </h2>
              <span
                className="text-xs text-text-secondary"
                data-testid="hospital-count"
              >
                {filteredHospitals.length}개
              </span>
            </div>
            <div className="relative">
              <Search
                size={14}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted"
                aria-hidden="true"
              />
              <input
                type="search"
                placeholder="병원명 검색"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-8 pr-3 py-2 text-sm border border-border rounded-lg bg-bg-surface focus:outline-none focus:border-primary"
                data-testid="desktop-search-input"
              />
            </div>
          </div>

          {/* Patient context banner */}
          {patient && (
            <div className="px-4 py-2 bg-primary-light border-b border-border">
              <p className="text-xs text-primary-dark leading-relaxed">
                <span className="font-semibold">{patient.name}</span> 환자 ·{" "}
                <span className="font-medium">{patient.desiredDepartment}</span>{" "}
                진료 희망
              </p>
            </div>
          )}

          {/* List */}
          <div className="flex-1 overflow-y-auto" data-testid="desktop-hospital-list">
            {filteredHospitals.map((hospital) => (
              <HospitalCard
                key={hospital.id}
                hospital={hospital}
                isSelected={selectedHospital?.id === hospital.id}
                onClick={() => setSelectedHospitalId(hospital.id)}
                matchedDeptName={matchedDeptName}
                variant="list"
              />
            ))}
            {filteredHospitals.length === 0 && (
              <div className="text-center py-12 px-4">
                <p className="text-sm text-text-muted">
                  조건에 맞는 병원이 없습니다
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="mt-2 text-sm text-primary hover:underline"
                >
                  필터 초기화
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Right: Hospital detail */}
        {selectedHospital ? (
          <HospitalDetail
            hospital={selectedHospital}
            matchedDeptName={matchedDeptName}
            onDoctorClick={handleDoctorClick}
          />
        ) : (
          <div className="flex-1 flex items-center justify-center bg-bg-surface">
            <p className="text-sm text-text-muted">병원을 선택해 주세요</p>
          </div>
        )}
      </div>

      {/* Doctor modal (desktop) */}
      {doctorModalData && (
        <DoctorModal
          doctor={doctorModalData.doctor}
          hospitalName={doctorModalData.hospital.name}
          departmentName={doctorModalData.dept.name}
          onClose={closeDoctorModal}
          onApply={handleApply}
        />
      )}
    </>
  );
}

// ─── Page export (wrapped in Suspense for useSearchParams) ────────────────────

export default function HospitalsPage() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center h-screen">
          <p className="text-sm text-text-muted">로딩 중...</p>
        </div>
      }
    >
      <HospitalsPageContent />
    </Suspense>
  );
}
