'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Plus, Search, SlidersHorizontal, Briefcase } from 'lucide-react'
import { PATIENTS } from '@/lib/mockData'
import { STATUS_CONFIG, type CaseStatus } from '@/lib/types'
import { useUserStore } from '@/lib/userStore'
import { cn } from '@/lib/cn'

// ─── helpers ────────────────────────────────────────────────────────────────

function formatDate(iso: string) {
  const d = new Date(iso)
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getDate()).padStart(2, '0')}`
}

function buildStatusSummary(cases: { status: CaseStatus }[]): Record<CaseStatus, number> {
  const summary: Record<CaseStatus, number> = {
    submitted: 0,
    reviewing: 0,
    info_requested: 0,
    approved: 0,
    rejected: 0,
  }
  for (const c of cases) {
    summary[c.status] += 1
  }
  return summary
}

// ─── sub-components ─────────────────────────────────────────────────────────

function StatusBadges({ cases }: { cases: { status: CaseStatus }[] }) {
  const summary = buildStatusSummary(cases)
  const entries = (Object.entries(summary) as [CaseStatus, number][]).filter(([, count]) => count > 0)

  if (entries.length === 0) {
    return <span className="text-xs text-[#B0B0B0]">-</span>
  }

  return (
    <div className="flex flex-wrap gap-1">
      {entries.map(([status, count]) => {
        const cfg = STATUS_CONFIG[status]
        return (
          <span
            key={status}
            className={cn(
              'inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium',
              cfg.bgColor,
              cfg.textColor,
            )}
            data-testid={`badge-${status}`}
          >
            {cfg.label} {count}
          </span>
        )
      })}
    </div>
  )
}

// ─── page ────────────────────────────────────────────────────────────────────

export default function PatientsPage() {
  const router = useRouter()
  const [query, setQuery] = useState('')
  const { isAgency } = useUserStore()
  const agencyMode = isAgency()

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return PATIENTS
    return PATIENTS.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.icdCode.toLowerCase().includes(q) ||
        p.icdLabel.toLowerCase().includes(q),
    )
  }, [query])

  return (
    <div className="p-4 md:p-6 lg:p-8" data-testid="patients-page">

      {/* ── Header ── */}
      <div className="flex items-center justify-between mb-6">
        <h1
          className="text-2xl font-bold text-[#0D0D0D]"
          data-testid="patients-title"
        >
          환자 관리
        </h1>

        <Link
          href="/patients/new"
          className={cn(
            "inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition-colors",
            agencyMode
              ? "bg-violet-600 text-white hover:bg-violet-700"
              : "bg-primary text-white hover:bg-primary-dark"
          )}
          data-testid="btn-register-patient"
        >
          {agencyMode ? <Briefcase className="w-4 h-4" aria-hidden="true" /> : <Plus className="w-4 h-4" aria-hidden="true" />}
          {agencyMode ? '환자 대리 등록' : '환자 등록'}
        </Link>
      </div>

      {/* ── Search + Filter ── */}
      <div
        className="flex items-center gap-3 mb-5"
        data-testid="search-filter-row"
      >
        {/* Search input */}
        <div className="relative flex-1">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#B0B0B0]"
            aria-hidden="true"
          />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="환자 이름, 질병코드로 검색..."
            className="w-full h-10 pl-9 pr-4 bg-[#FAFAFA] border border-[#E8E8E8] rounded-lg text-sm text-[#0D0D0D] placeholder:text-[#B0B0B0] focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
            aria-label="환자 검색"
            data-testid="search-input"
          />
        </div>

        {/* Filter button */}
        <button
          type="button"
          className="inline-flex items-center gap-2 h-10 px-3 border border-[#E8E8E8] rounded-lg bg-white hover:bg-[#FAFAFA] transition-colors text-sm text-[#7A7A7A]"
          aria-label="필터"
          data-testid="btn-filter"
        >
          <SlidersHorizontal className="w-4 h-4 shrink-0" aria-hidden="true" />
          <span className="hidden md:inline">필터</span>
        </button>
      </div>

      {/* ── Desktop Table (md+) ── */}
      <div
        className="hidden md:block border border-[#E8E8E8] rounded-lg overflow-hidden bg-white shadow-card"
        data-testid="patients-table"
      >
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-[#FAFAFA] border-b border-[#E8E8E8]">
              {['환자명', '국적', '질병코드', '희망 진료과', '접수 현황', '등록일'].map((col) => (
                <th
                  key={col}
                  scope="col"
                  className="px-4 py-3 text-left text-xs font-semibold text-[#7A7A7A] whitespace-nowrap"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td
                  colSpan={6}
                  className="px-4 py-10 text-center text-sm text-[#B0B0B0]"
                  data-testid="table-empty"
                >
                  검색 결과가 없습니다.
                </td>
              </tr>
            ) : (
              filtered.map((patient) => (
                <tr
                  key={patient.id}
                  onClick={() => router.push(`/patients/${patient.id}`)}
                  className="border-b border-[#E8E8E8] last:border-b-0 hover:bg-[#FAFAFA] cursor-pointer transition-colors"
                  data-testid={`patient-row-${patient.id}`}
                >
                  <td className="px-4 py-3 font-medium text-[#0D0D0D]">
                    {patient.name}
                  </td>
                  <td className="px-4 py-3 text-[#7A7A7A]">
                    {patient.nationality}
                  </td>
                  <td className="px-4 py-3 text-[#7A7A7A]">
                    <span className="font-mono">{patient.icdCode}</span>
                  </td>
                  <td className="px-4 py-3 text-[#7A7A7A]">
                    {patient.desiredDepartment}
                  </td>
                  <td className="px-4 py-3">
                    <StatusBadges cases={patient.cases} />
                  </td>
                  <td className="px-4 py-3 text-[#B0B0B0] whitespace-nowrap">
                    {formatDate(patient.createdAt)}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* ── Mobile Cards (below md) ── */}
      <div
        className="flex flex-col gap-3 md:hidden"
        data-testid="patients-cards"
      >
        {filtered.length === 0 ? (
          <p className="text-center text-sm text-[#B0B0B0] py-10" data-testid="cards-empty">
            검색 결과가 없습니다.
          </p>
        ) : (
          filtered.map((patient) => (
            <button
              key={patient.id}
              type="button"
              onClick={() => router.push(`/patients/${patient.id}`)}
              className="w-full text-left border border-[#E8E8E8] rounded-xl p-4 bg-white shadow-card hover:shadow-card-hover transition-shadow"
              data-testid={`patient-card-${patient.id}`}
            >
              {/* Top row: name + date */}
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="font-semibold text-sm text-[#0D0D0D] leading-snug">
                  {patient.name}
                </span>
                <span className="text-xs text-[#B0B0B0] shrink-0 mt-0.5">
                  {formatDate(patient.createdAt)}
                </span>
              </div>

              {/* Meta line */}
              <p className="text-xs text-[#7A7A7A] mb-2">
                {patient.nationality} · {patient.icdCode} · {patient.desiredDepartment}
              </p>

              {/* Status badges */}
              <StatusBadges cases={patient.cases} />
            </button>
          ))
        )}
      </div>
    </div>
  )
}
