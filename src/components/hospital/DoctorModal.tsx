"use client";

import { useEffect, useCallback } from "react";
import {
  X,
  Send,
  MessageCircle,
  BookOpen,
  Briefcase,
  GraduationCap,
  Globe,
  Users,
} from "lucide-react";
import { Doctor } from "@/lib/types";
import { cn } from "@/lib/cn";

interface DoctorModalProps {
  doctor: Doctor;
  hospitalName: string;
  departmentName: string;
  onClose: () => void;
  onApply: (doctor: Doctor) => void;
}

function getInitials(name: string): string {
  return name.slice(0, 2);
}

const AVATAR_COLORS = [
  "bg-primary text-white",
  "bg-primary-dark text-white",
  "bg-success text-white",
  "bg-warning text-white",
];

function getAvatarColor(id: string): string {
  const index =
    id.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0) %
    AVATAR_COLORS.length;
  return AVATAR_COLORS[index];
}

export default function DoctorModal({
  doctor,
  hospitalName,
  departmentName,
  onClose,
  onApply,
}: DoctorModalProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleKeyDown]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
      data-testid="doctor-modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="doctor-modal-title"
    >
      <div
        className="w-[520px] max-h-[680px] bg-white rounded-xl shadow-modal flex flex-col overflow-hidden"
        data-testid="doctor-modal"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-border shrink-0">
          <h2
            id="doctor-modal-title"
            className="text-base font-semibold text-text-primary"
            data-testid="doctor-modal-title"
          >
            교수 상세
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="닫기"
            data-testid="doctor-modal-close"
            className="w-8 h-8 flex items-center justify-center bg-bg-surface rounded-full hover:bg-border transition-colors"
          >
            <X size={16} aria-hidden="true" />
          </button>
        </div>

        {/* Body — scrollable */}
        <div className="flex-1 overflow-y-auto px-5 py-5 space-y-5">
          {/* Profile */}
          <div className="flex items-start gap-4">
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
              <h3
                className="text-lg font-bold text-text-primary"
                data-testid="doctor-modal-name"
              >
                {doctor.name}
              </h3>
              <p className="text-sm text-text-secondary mt-0.5">
                {departmentName} · {hospitalName}
              </p>
              <div className="flex flex-wrap gap-1.5 mt-2">
                {doctor.languages.map((lang) => (
                  <span
                    key={lang.code}
                    className="inline-flex items-center gap-1 bg-primary-light text-primary-dark text-[11px] font-medium px-2 py-0.5 rounded-full"
                    data-testid={`doctor-modal-lang-${lang.code}`}
                  >
                    <Globe size={10} aria-hidden="true" />
                    {lang.label}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <hr className="border-border" />

          {/* Info grid */}
          <div className="grid grid-cols-1 gap-4">
            {/* 전문분야 */}
            <div>
              <div className="flex items-center gap-1.5 mb-1.5">
                <Briefcase size={14} className="text-primary shrink-0" aria-hidden="true" />
                <span className="text-xs font-semibold text-text-secondary uppercase tracking-wide">
                  전문분야
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {doctor.specialties.map((s) => (
                  <span
                    key={s}
                    className="bg-primary-light text-primary-dark text-xs px-2.5 py-1 rounded-full"
                    data-testid="doctor-modal-specialty"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* 학력 및 연수 */}
            <div>
              <div className="flex items-center gap-1.5 mb-1.5">
                <GraduationCap size={14} className="text-primary shrink-0" aria-hidden="true" />
                <span className="text-xs font-semibold text-text-secondary uppercase tracking-wide">
                  학력 및 연수
                </span>
              </div>
              <ul className="space-y-1">
                {doctor.education.map((edu, i) => (
                  <li
                    key={i}
                    className="text-sm text-text-primary flex items-start gap-1.5"
                  >
                    <span className="text-text-muted mt-1 shrink-0">·</span>
                    {edu}
                  </li>
                ))}
              </ul>
            </div>

            {/* 경력 */}
            <div>
              <div className="flex items-center gap-1.5 mb-1.5">
                <Briefcase size={14} className="text-primary shrink-0" aria-hidden="true" />
                <span className="text-xs font-semibold text-text-secondary uppercase tracking-wide">
                  경력
                </span>
              </div>
              <ul className="space-y-1">
                {doctor.experience.map((exp, i) => (
                  <li
                    key={i}
                    className="text-sm text-text-primary flex items-start gap-1.5"
                  >
                    <span className="text-text-muted mt-1 shrink-0">·</span>
                    {exp}
                  </li>
                ))}
              </ul>
            </div>

            {/* 하단 2-col stats */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-bg-surface rounded-lg p-3">
                <div className="flex items-center gap-1.5 mb-1">
                  <BookOpen size={13} className="text-primary shrink-0" aria-hidden="true" />
                  <span className="text-xs font-semibold text-text-secondary">
                    SCI 논문
                  </span>
                </div>
                <p
                  className="text-lg font-bold text-primary"
                  data-testid="doctor-modal-publications"
                >
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
                  <p
                    className="text-xs text-text-primary leading-relaxed"
                    data-testid="doctor-modal-foreign-experience"
                  >
                    {doctor.foreignPatientExperience}
                  </p>
                </div>
              )}
            </div>

            {/* Awards */}
            {doctor.awards && doctor.awards.length > 0 && (
              <div>
                <div className="flex items-center gap-1.5 mb-1.5">
                  <span className="text-xs font-semibold text-text-secondary uppercase tracking-wide">
                    수상
                  </span>
                </div>
                <ul className="space-y-1">
                  {doctor.awards.map((award, i) => (
                    <li
                      key={i}
                      className="text-sm text-text-primary flex items-start gap-1.5"
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

        {/* Footer */}
        <div className="px-5 py-4 border-t border-border flex gap-3 shrink-0">
          <button
            type="button"
            onClick={() => onApply(doctor)}
            data-testid="doctor-modal-apply-btn"
            className="flex-1 flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white text-sm font-semibold py-2.5 rounded-lg transition-colors"
          >
            <Send size={15} aria-hidden="true" />
            이 교수로 접수하기
          </button>
          <button
            type="button"
            onClick={() => alert("WhatsApp 연결은 실제 배포 시 활성화됩니다.")}
            data-testid="doctor-modal-whatsapp-btn"
            className="flex items-center justify-center gap-2 bg-success-light hover:bg-success/10 text-success text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors"
          >
            <MessageCircle size={15} aria-hidden="true" />
            WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}
