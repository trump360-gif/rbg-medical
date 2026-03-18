'use client'

import { useState, useMemo } from 'react'
import { Send, Search, SlidersHorizontal } from 'lucide-react'
import { STATUS_CONFIG, type CaseStatus } from '@/lib/types'
import { cn } from '@/lib/cn'

// Mock data: 의료인이 의뢰한 환자 목록
const REFERRAL_CASES = [
  {
    id: 'ref-001',
    patientName: 'Иван Петров',
    nationality: '러시아',
    hospitalName: '서울아산병원',
    department: '심장내과',
    status: 'info_requested' as CaseStatus,
    referredAt: '2026-03-08',
  },
  {
    id: 'ref-002',
    patientName: 'Мария Иванова',
    nationality: '카자흐',
    hospitalName: '삼성서울병원',
    department: '정형외과',
    status: 'approved' as CaseStatus,
    referredAt: '2026-03-05',
  },
  {
    id: 'ref-003',
    patientName: 'Ahmad Hassan',
    nationality: 'UAE',
    hospitalName: '국제성모병원',
    department: '척추외과',
    status: 'reviewing' as CaseStatus,
    referredAt: '2026-03-12',
  },
  {
    id: 'ref-004',
    patientName: 'Li Wei',
    nationality: '중국',
    hospitalName: '서울아산병원',
    department: '신경과',
    status: 'submitted' as CaseStatus,
    referredAt: '2026-03-14',
  },
]

function formatDate(iso: string) {
  const d = new Date(iso)
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getDate()).padStart(2, '0')}`
}

function StatusBadge({ status }: { status: CaseStatus }) {
  const cfg = STATUS_CONFIG[status]
  return (
    <span className={cn('inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium', cfg.bgColor, cfg.textColor)}>
      {cfg.label}
    </span>
  )
}

export default function ReferralsPage() {
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return REFERRAL_CASES
    return REFERRAL_CASES.filter(
      (c) =>
        c.patientName.toLowerCase().includes(q) ||
        c.hospitalName.toLowerCase().includes(q) ||
        c.department.toLowerCase().includes(q),
    )
  }, [query])

  return (
    <div className="p-4 md:p-6 lg:p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-text-primary">의뢰 환자</h1>
        <button className="inline-flex items-center gap-2 bg-emerald-600 text-white rounded-xl px-4 py-2.5 text-sm font-medium hover:bg-emerald-700 transition-colors">
          <Send className="w-4 h-4" />
          환자 의뢰
        </button>
      </div>

      {/* Search */}
      <div className="flex items-center gap-3 mb-5">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="환자 이름, 진료과로 검색..."
            className="w-full h-10 pl-9 pr-4 bg-bg-surface border border-[#E8E8E8] rounded-lg text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
          />
        </div>
        <button className="inline-flex items-center gap-2 h-10 px-3 border border-[#E8E8E8] rounded-lg bg-white hover:bg-bg-surface transition-colors text-sm text-text-secondary">
          <SlidersHorizontal className="w-4 h-4 shrink-0" />
          <span className="hidden md:inline">필터</span>
        </button>
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block border border-[#E8E8E8] rounded-lg overflow-hidden bg-white shadow-card">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-bg-surface border-b border-[#E8E8E8]">
              {['환자명', '국적', '의뢰 병원', '진료과', '진행 상태', '의뢰일'].map((col) => (
                <th key={col} className="px-4 py-3 text-left text-xs font-semibold text-text-secondary whitespace-nowrap">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-4 py-10 text-center text-sm text-text-muted">
                  검색 결과가 없습니다.
                </td>
              </tr>
            ) : (
              filtered.map((c) => (
                <tr key={c.id} className="border-b border-[#E8E8E8] last:border-b-0 hover:bg-bg-surface cursor-pointer transition-colors">
                  <td className="px-4 py-3 font-medium text-text-primary">{c.patientName}</td>
                  <td className="px-4 py-3 text-text-primary">{c.nationality}</td>
                  <td className="px-4 py-3 text-text-primary">{c.hospitalName}</td>
                  <td className="px-4 py-3 text-text-primary">{c.department}</td>
                  <td className="px-4 py-3"><StatusBadge status={c.status} /></td>
                  <td className="px-4 py-3 text-text-muted whitespace-nowrap">{formatDate(c.referredAt)}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="flex flex-col gap-2 md:hidden">
        {filtered.length === 0 ? (
          <p className="text-center text-sm text-text-muted py-10">검색 결과가 없습니다.</p>
        ) : (
          filtered.map((c) => (
            <div key={c.id} className="border border-[#E8E8E8] rounded-xl p-3.5 bg-white">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-semibold text-text-primary">{c.patientName}</span>
                <span className="text-xs text-text-muted">{formatDate(c.referredAt).slice(5)}</span>
              </div>
              <p className="text-xs text-text-secondary mb-2">
                {c.nationality} · {c.hospitalName} · {c.department}
              </p>
              <StatusBadge status={c.status} />
            </div>
          ))
        )}
      </div>
    </div>
  )
}
