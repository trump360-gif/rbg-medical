'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { Plus, Search, SlidersHorizontal } from 'lucide-react'
import { STATUS_CONFIG, type CaseStatus } from '@/lib/types'
import { cn } from '@/lib/cn'

// Mock data: 환자 본인이 신청한 케이스 목록
const MY_CASES = [
  {
    id: 'mc-001',
    hospitalName: '서울아산병원',
    department: '심장내과',
    doctorName: 'Park Seung-Jung',
    visitPurpose: '수술',
    status: 'info_requested' as CaseStatus,
    statusLabel: '추가서류 요청',
    appliedAt: '2026-03-10',
  },
  {
    id: 'mc-002',
    hospitalName: '삼성서울병원',
    department: '정형외과',
    doctorName: 'Kim Sung-Soo',
    visitPurpose: '치료',
    status: 'approved' as CaseStatus,
    statusLabel: '최종 승인',
    appliedAt: '2026-03-05',
  },
  {
    id: 'mc-003',
    hospitalName: '강남세브란스병원',
    department: '신경외과',
    doctorName: 'Koo Yong-Seo',
    visitPurpose: '상담',
    status: 'reviewing' as CaseStatus,
    statusLabel: '병원 검토 중',
    appliedAt: '2026-03-12',
  },
  {
    id: 'mc-004',
    hospitalName: '국제성모병원',
    department: '재활의학과',
    doctorName: 'Park Ji-Hoon',
    visitPurpose: '재진',
    status: 'submitted' as CaseStatus,
    statusLabel: '접수 완료',
    appliedAt: '2026-03-15',
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

export default function MyCasesPage() {
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return MY_CASES
    return MY_CASES.filter(
      (c) =>
        c.hospitalName.toLowerCase().includes(q) ||
        c.department.toLowerCase().includes(q) ||
        c.doctorName.toLowerCase().includes(q),
    )
  }, [query])

  return (
    <div className="p-4 md:p-6 lg:p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-text-primary">내 진료</h1>
        <Link
          href="/patients/new"
          className="inline-flex items-center gap-2 bg-blue-600 text-white rounded-xl px-4 py-2.5 text-sm font-medium hover:bg-blue-700 transition-colors"
        >
          <Plus className="w-4 h-4" />
          진료 신청
        </Link>
      </div>

      {/* Search */}
      <div className="flex items-center gap-3 mb-5">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="병원명, 진료과로 검색..."
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
              {['접수 병원', '진료과', '담당 교수', '방문 목적', '진행 상태', '신청일'].map((col) => (
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
                  <td className="px-4 py-3 font-medium text-text-primary">{c.hospitalName}</td>
                  <td className="px-4 py-3 text-text-primary">{c.department}</td>
                  <td className="px-4 py-3 text-text-primary">{c.doctorName}</td>
                  <td className="px-4 py-3 text-text-primary">{c.visitPurpose}</td>
                  <td className="px-4 py-3"><StatusBadge status={c.status} /></td>
                  <td className="px-4 py-3 text-text-muted whitespace-nowrap">{formatDate(c.appliedAt)}</td>
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
                <span className="text-sm font-semibold text-text-primary">{c.hospitalName}</span>
                <span className="text-xs text-text-muted">{formatDate(c.appliedAt).slice(5)}</span>
              </div>
              <p className="text-xs text-text-secondary mb-2">
                {c.department} · {c.doctorName} · {c.visitPurpose}
              </p>
              <StatusBadge status={c.status} />
            </div>
          ))
        )}
      </div>
    </div>
  )
}
