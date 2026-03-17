'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter, useParams } from 'next/navigation'
import {
  Search,
  Pencil,
  ChevronDown,
  ChevronRight,
  TriangleAlert,
  Paperclip,
} from 'lucide-react'
import { PATIENTS } from '@/lib/mockData'
import { STATUS_CONFIG, type PatientCase } from '@/lib/types'
import { cn } from '@/lib/cn'

// ─── helpers ─────────────────────────────────────────────────────────────────

function formatDate(iso: string) {
  const d = new Date(iso)
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getDate()).padStart(2, '0')}`
}

// ─── desktop hospital case card ───────────────────────────────────────────────

function DesktopCaseCard({ c }: { c: PatientCase }) {
  const cfg = STATUS_CONFIG[c.status]
  const hospitalFeedback = c.feedbacks.find((f) => f.from === 'hospital')

  return (
    <div
      className="border border-[#E8E8E8] rounded-lg p-4 bg-white shadow-card"
      data-testid={`desktop-case-${c.id}`}
    >
      {/* Card header */}
      <div className="flex items-center justify-between gap-3 mb-3">
        <div className="min-w-0">
          <p className="font-semibold text-sm text-[#0D0D0D] truncate">
            {c.hospitalName}
          </p>
          {c.doctorName && (
            <p className="text-xs text-[#7A7A7A] mt-0.5">{c.doctorName} 교수</p>
          )}
        </div>
        <span
          className={cn(
            'shrink-0 inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium',
            cfg.bgColor,
            cfg.textColor,
          )}
          data-testid={`case-status-${c.id}`}
        >
          {cfg.label}
        </span>
      </div>

      {/* Info requested feedback block */}
      {c.status === 'info_requested' && hospitalFeedback && (
        <div
          className="rounded-lg bg-warning-light border border-[#e8c87a] p-3"
          data-testid={`feedback-block-${c.id}`}
        >
          <div className="flex items-start gap-2 mb-2">
            <TriangleAlert
              className="w-4 h-4 text-warning shrink-0 mt-0.5"
              aria-hidden="true"
            />
            <p className="text-xs text-warning leading-relaxed">
              {hospitalFeedback.message}
            </p>
          </div>
          {hospitalFeedback.requestedDocuments && hospitalFeedback.requestedDocuments.length > 0 && (
            <ul className="ml-6 flex flex-col gap-1 list-disc list-outside">
              {hospitalFeedback.requestedDocuments.map((doc) => (
                <li key={doc} className="text-xs text-warning">
                  {doc}
                </li>
              ))}
            </ul>
          )}
          <p className="text-xs text-[#B0B0B0] mt-2 text-right">
            {formatDate(hospitalFeedback.createdAt)}
          </p>
        </div>
      )}

      {/* Approved / rejected feedback block */}
      {(c.status === 'approved' || c.status === 'rejected') && hospitalFeedback && (
        <div
          className={cn(
            'rounded-lg p-3 mt-0',
            c.status === 'approved'
              ? 'bg-success-light border border-[#a4cc78]'
              : 'bg-danger-light border border-[#e8a0a0]',
          )}
          data-testid={`feedback-block-${c.id}`}
        >
          <p
            className={cn(
              'text-xs leading-relaxed',
              c.status === 'approved' ? 'text-success' : 'text-danger',
            )}
          >
            {hospitalFeedback.message}
          </p>
          <p className="text-xs text-[#B0B0B0] mt-2 text-right">
            {formatDate(hospitalFeedback.createdAt)}
          </p>
        </div>
      )}

      {/* Dates footer */}
      <div className="flex items-center gap-4 mt-3 pt-3 border-t border-[#E8E8E8]">
        <p className="text-xs text-[#B0B0B0]">
          접수: {formatDate(c.submittedAt)}
        </p>
        <p className="text-xs text-[#B0B0B0]">
          업데이트: {formatDate(c.updatedAt)}
        </p>
      </div>
    </div>
  )
}

// ─── mobile hospital case accordion ──────────────────────────────────────────

function MobileCaseAccordion({ c }: { c: PatientCase }) {
  const [open, setOpen] = useState(c.status === 'info_requested')
  const cfg = STATUS_CONFIG[c.status]
  const hospitalFeedback = c.feedbacks.find((f) => f.from === 'hospital')

  return (
    <div
      className="border border-[#E8E8E8] rounded-xl overflow-hidden bg-white shadow-card"
      data-testid={`mobile-case-${c.id}`}
    >
      {/* Accordion header */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center gap-3 p-4 text-left"
        aria-expanded={open}
        data-testid={`mobile-case-toggle-${c.id}`}
      >
        {open ? (
          <ChevronDown className="w-4 h-4 text-[#7A7A7A] shrink-0" aria-hidden="true" />
        ) : (
          <ChevronRight className="w-4 h-4 text-[#7A7A7A] shrink-0" aria-hidden="true" />
        )}

        <span className="flex-1 font-semibold text-sm text-[#0D0D0D] truncate">
          {c.hospitalName}
        </span>

        {/* Status badge: filled when expanded (info_requested), outline otherwise */}
        {open && c.status === 'info_requested' ? (
          <span
            className={cn(
              'shrink-0 inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium',
              cfg.bgColor,
              cfg.textColor,
            )}
            data-testid={`mobile-case-status-${c.id}`}
          >
            <TriangleAlert className="w-3 h-3" aria-hidden="true" />
            {cfg.label}
          </span>
        ) : (
          <span
            className={cn(
              'shrink-0 inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border',
              open ? cn(cfg.bgColor, cfg.textColor) : 'bg-white border-[#E8E8E8] text-[#7A7A7A]',
            )}
            data-testid={`mobile-case-status-${c.id}`}
          >
            {cfg.label}
          </span>
        )}
      </button>

      {/* Accordion body */}
      {open && (
        <div
          className="px-4 pb-4 flex flex-col gap-3 border-t border-[#E8E8E8] pt-3"
          data-testid={`mobile-case-body-${c.id}`}
        >
          {/* Doctor */}
          {c.doctorName && (
            <p className="text-xs text-[#7A7A7A]">담당 의사: {c.doctorName} 교수</p>
          )}

          {/* Info requested feedback */}
          {c.status === 'info_requested' && hospitalFeedback && (
            <div className="rounded-lg bg-warning-light border border-[#e8c87a] p-3">
              <div className="flex items-start gap-2 mb-2">
                <TriangleAlert className="w-4 h-4 text-warning shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-xs text-warning leading-relaxed">{hospitalFeedback.message}</p>
              </div>
              {hospitalFeedback.requestedDocuments && hospitalFeedback.requestedDocuments.length > 0 && (
                <ul className="ml-6 flex flex-col gap-1 list-disc list-outside">
                  {hospitalFeedback.requestedDocuments.map((doc) => (
                    <li key={doc} className="text-xs text-warning">
                      {doc}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}

          {/* Approved / rejected feedback */}
          {(c.status === 'approved' || c.status === 'rejected') && hospitalFeedback && (
            <div
              className={cn(
                'rounded-lg p-3',
                c.status === 'approved'
                  ? 'bg-success-light border border-[#a4cc78]'
                  : 'bg-danger-light border border-[#e8a0a0]',
              )}
            >
              <p
                className={cn(
                  'text-xs leading-relaxed',
                  c.status === 'approved' ? 'text-success' : 'text-danger',
                )}
              >
                {hospitalFeedback.message}
              </p>
            </div>
          )}

          {/* Dates */}
          <div className="flex flex-col gap-0.5">
            <p className="text-xs text-[#B0B0B0]">접수: {formatDate(c.submittedAt)}</p>
            <p className="text-xs text-[#B0B0B0]">업데이트: {formatDate(c.updatedAt)}</p>
          </div>
        </div>
      )}
    </div>
  )
}

// ─── info field ───────────────────────────────────────────────────────────────

function InfoField({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div>
      <p className="text-xs text-[#B0B0B0] mb-0.5">{label}</p>
      <p className="text-sm font-medium text-[#0D0D0D]">{value || '-'}</p>
    </div>
  )
}

// ─── page ────────────────────────────────────────────────────────────────────

export default function PatientDetailPage() {
  const params = useParams()
  const router = useRouter()
  const id = typeof params.id === 'string' ? params.id : params.id?.[0] ?? ''

  const patient = PATIENTS.find((p) => p.id === id)

  if (!patient) {
    return (
      <div
        className="p-4 md:p-6 lg:p-8 flex flex-col items-center justify-center min-h-[40vh] gap-4"
        data-testid="patient-not-found"
      >
        <p className="text-[#7A7A7A]">환자를 찾을 수 없습니다.</p>
        <Link
          href="/patients"
          className="text-sm text-primary hover:text-primary-dark transition-colors"
        >
          환자 목록으로 돌아가기
        </Link>
      </div>
    )
  }

  return (
    <div
      className="p-4 md:p-6 lg:p-8"
      data-testid="patient-detail-page"
    >
      {/* ── Breadcrumb ── */}
      <nav
        aria-label="경로"
        className="flex items-center gap-1.5 text-sm mb-4"
        data-testid="breadcrumb"
      >
        <Link
          href="/patients"
          className="text-primary hover:text-primary-dark transition-colors"
          data-testid="breadcrumb-patients"
        >
          환자 관리
        </Link>
        <span className="text-[#B0B0B0]" aria-hidden="true">/</span>
        <span className="text-[#7A7A7A] truncate max-w-[180px]" aria-current="page">
          {patient.name}
        </span>
      </nav>

      {/* ── Header row ── */}
      <div className="flex items-center justify-between gap-3 mb-5">
        <h1
          className="text-2xl font-bold text-[#0D0D0D] truncate"
          data-testid="patient-name-heading"
        >
          {patient.name}
        </h1>

        <div className="flex items-center gap-2 shrink-0">
          {/* 병원 찾기 */}
          <Link
            href={`/hospitals?patientId=${patient.id}`}
            className="inline-flex items-center gap-2 bg-primary text-white rounded-xl px-3.5 py-2 text-sm font-medium hover:bg-primary-dark transition-colors"
            data-testid="btn-find-hospital"
          >
            <Search className="w-4 h-4" aria-hidden="true" />
            <span className="hidden sm:inline">병원 찾기</span>
          </Link>

          {/* 수정 */}
          <button
            type="button"
            onClick={() => router.push(`/patients/${patient.id}/edit`)}
            className="inline-flex items-center gap-2 border border-[#E8E8E8] bg-white rounded-xl px-3.5 py-2 text-sm font-medium text-[#7A7A7A] hover:bg-[#FAFAFA] transition-colors"
            data-testid="btn-edit-patient"
          >
            <Pencil className="w-4 h-4" aria-hidden="true" />
            <span className="hidden sm:inline">수정</span>
          </button>
        </div>
      </div>

      {/* ── Patient info card ── */}
      <div
        className="border border-[#E8E8E8] rounded-lg p-5 bg-white shadow-card mb-6"
        data-testid="patient-info-card"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Col 1 */}
          <div className="flex flex-col gap-4">
            <InfoField label="국적" value={patient.nationality} />
            <InfoField
              label="질병코드 (ICD-10)"
              value={
                <span>
                  <span className="font-mono">{patient.icdCode}</span>
                  <span className="text-[#7A7A7A] font-normal text-xs ml-1.5">
                    {patient.icdLabel}
                  </span>
                </span>
              }
            />
          </div>

          {/* Col 2 */}
          <div className="flex flex-col gap-4">
            <InfoField label="희망 진료과" value={patient.desiredDepartment} />
            <InfoField label="희망 시술" value={patient.desiredProcedure} />
          </div>

          {/* Col 3 */}
          <div className="flex flex-col gap-4">
            <InfoField label="등록일" value={formatDate(patient.createdAt)} />
            <div>
              <p className="text-xs text-[#B0B0B0] mb-1">첨부 서류</p>
              {patient.attachments.length === 0 ? (
                <p className="text-sm font-medium text-[#0D0D0D]">-</p>
              ) : (
                <ul className="flex flex-col gap-1">
                  {patient.attachments.map((att) => (
                    <li
                      key={att.id}
                      className="flex items-center gap-1.5 text-xs text-[#7A7A7A]"
                    >
                      <Paperclip className="w-3 h-3 shrink-0 text-[#B0B0B0]" aria-hidden="true" />
                      <span className="truncate">{att.name}</span>
                      <span className="shrink-0 text-[#B0B0B0]">({att.size})</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ── 접수된 병원 section ── */}
      <section aria-label="접수된 병원" data-testid="cases-section">
        <h2 className="text-base font-semibold text-[#0D0D0D] mb-3">
          접수된 병원
          <span className="ml-2 text-sm font-normal text-[#B0B0B0]">
            ({patient.cases.length}건)
          </span>
        </h2>

        {patient.cases.length === 0 ? (
          <p className="text-sm text-[#B0B0B0] py-6 text-center" data-testid="no-cases">
            접수된 병원이 없습니다.
          </p>
        ) : (
          <>
            {/* Desktop cards */}
            <div
              className="hidden md:grid grid-cols-1 lg:grid-cols-2 gap-4"
              data-testid="cases-desktop"
            >
              {patient.cases.map((c) => (
                <DesktopCaseCard key={c.id} c={c} />
              ))}
            </div>

            {/* Mobile accordions */}
            <div
              className="flex flex-col gap-3 md:hidden"
              data-testid="cases-mobile"
            >
              {patient.cases.map((c) => (
                <MobileCaseAccordion key={c.id} c={c} />
              ))}
            </div>
          </>
        )}
      </section>
    </div>
  )
}
