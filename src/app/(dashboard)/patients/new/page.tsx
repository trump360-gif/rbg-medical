'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ChevronDown, Upload, Save } from 'lucide-react'
import { cn } from '@/lib/cn'

// ─── static option lists ─────────────────────────────────────────────────────

const NATIONALITY_OPTIONS = [
  '러시아',
  '카자흐스탄',
  '우즈베키스탄',
  '키르기스스탄',
  '타지키스탄',
  '투르크메니스탄',
  '아제르바이잔',
  '아르메니아',
  '벨라루스',
  '우크라이나',
  '기타',
]

const DEPARTMENT_OPTIONS = [
  '종양내과',
  '심장내과',
  '신경외과',
  '신경내과',
  '소화기내과',
  '정형외과',
  '안과',
  '이비인후과',
  '산부인과',
  '비뇨의학과',
  '피부과',
  '기타',
]

// ─── small primitives ────────────────────────────────────────────────────────

function Label({ htmlFor, children, required }: { htmlFor: string; children: React.ReactNode; required?: boolean }) {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-xs font-semibold text-[#7A7A7A] mb-1.5"
    >
      {children}
      {required && (
        <span className="text-danger ml-0.5" aria-hidden="true">
          *
        </span>
      )}
    </label>
  )
}

const inputBase =
  'w-full h-10 px-3 bg-white border border-[#E8E8E8] rounded-lg text-sm text-[#0D0D0D] placeholder:text-[#B0B0B0] focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors'

const selectBase =
  'w-full h-10 pl-3 pr-8 bg-white border border-[#E8E8E8] rounded-lg text-sm text-[#0D0D0D] appearance-none focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors cursor-pointer'

function SelectWrapper({ id, value, onChange, options, placeholder, 'data-testid': testId }: {
  id: string
  value: string
  onChange: (v: string) => void
  options: string[]
  placeholder: string
  'data-testid'?: string
}) {
  return (
    <div className="relative">
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={cn(selectBase, !value && 'text-[#B0B0B0]')}
        data-testid={testId}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      <ChevronDown
        className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#B0B0B0] pointer-events-none"
        aria-hidden="true"
      />
    </div>
  )
}

// ─── section wrapper ─────────────────────────────────────────────────────────

function SectionCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border border-[#E8E8E8] rounded-lg bg-white shadow-card overflow-hidden">
      <div className="px-5 py-3.5 border-b border-[#E8E8E8] bg-[#FAFAFA]">
        <h2 className="text-sm font-semibold text-[#0D0D0D]">{title}</h2>
      </div>
      <div className="p-5">{children}</div>
    </div>
  )
}

// ─── page ────────────────────────────────────────────────────────────────────

export default function NewPatientPage() {
  const router = useRouter()

  // form state
  const [name, setName] = useState('')
  const [nationality, setNationality] = useState('')
  const [icdCode, setIcdCode] = useState('')
  const [department, setDepartment] = useState('')
  const [procedure, setProcedure] = useState('')

  function handleCancel() {
    router.back()
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // UI only — navigate to patients list
    router.push('/patients')
  }

  return (
    <div className="p-4 md:p-6 lg:p-8 pb-24 md:pb-8" data-testid="new-patient-page">

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
        <span className="text-[#7A7A7A]" aria-current="page">신규 등록</span>
      </nav>

      {/* ── Title ── */}
      <h1
        className="text-2xl font-bold text-[#0D0D0D] mb-6"
        data-testid="new-patient-title"
      >
        환자 신규 등록
      </h1>

      <form
        onSubmit={handleSubmit}
        noValidate
        className="flex flex-col gap-5"
        data-testid="new-patient-form"
      >

        {/* ── 기본 정보 ── */}
        <SectionCard title="기본 정보">
          <div className="flex flex-col gap-4">

            {/* Row 1: 이름 + 국적 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="patient-name" required>환자 이름</Label>
                <input
                  id="patient-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="환자 성명 입력"
                  className={inputBase}
                  data-testid="input-patient-name"
                  required
                />
              </div>
              <div>
                <Label htmlFor="patient-nationality" required>국적</Label>
                <SelectWrapper
                  id="patient-nationality"
                  value={nationality}
                  onChange={setNationality}
                  options={NATIONALITY_OPTIONS}
                  placeholder="국적 선택"
                  data-testid="select-nationality"
                />
              </div>
            </div>

            {/* Row 2: ICD 코드 + 진료과 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="patient-icd" required>질병코드 (ICD-10)</Label>
                <input
                  id="patient-icd"
                  type="text"
                  value={icdCode}
                  onChange={(e) => setIcdCode(e.target.value)}
                  placeholder="예: C34, I25, G40"
                  className={inputBase}
                  data-testid="input-icd-code"
                  required
                />
              </div>
              <div>
                <Label htmlFor="patient-department" required>희망 진료과목</Label>
                <SelectWrapper
                  id="patient-department"
                  value={department}
                  onChange={setDepartment}
                  options={DEPARTMENT_OPTIONS}
                  placeholder="진료과 선택"
                  data-testid="select-department"
                />
              </div>
            </div>

            {/* Row 3: 희망 시술 (full width) */}
            <div>
              <Label htmlFor="patient-procedure">희망 시술/처치</Label>
              <textarea
                id="patient-procedure"
                value={procedure}
                onChange={(e) => setProcedure(e.target.value)}
                placeholder="희망하는 시술 또는 처치 내용을 입력하세요"
                rows={2}
                className="w-full h-[60px] px-3 py-2 bg-white border border-[#E8E8E8] rounded-lg text-sm text-[#0D0D0D] placeholder:text-[#B0B0B0] focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-none"
                data-testid="textarea-procedure"
              />
            </div>
          </div>
        </SectionCard>

        {/* ── 첨부 서류 ── */}
        <SectionCard title="첨부 서류">
          <div
            className="border-2 border-dashed border-[#E8E8E8] rounded-lg p-8 flex flex-col items-center justify-center gap-3 cursor-pointer hover:border-primary/50 hover:bg-primary-light/30 transition-colors"
            role="button"
            tabIndex={0}
            aria-label="파일 업로드 영역"
            data-testid="upload-area"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
              }
            }}
          >
            <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center">
              <Upload className="w-5 h-5 text-primary" aria-hidden="true" />
            </div>
            <p className="text-sm text-[#7A7A7A] text-center leading-relaxed max-w-xs">
              비자 서류, 검사 수치, CT/MRI 등<br />
              드래그 또는 클릭하여 업로드
            </p>
            <p className="text-xs text-[#B0B0B0]">
              PDF, DICOM, JPG, PNG 지원 · 최대 200MB
            </p>
          </div>
        </SectionCard>

        {/* ── Action buttons ── */}
        <div
          className="flex items-center justify-end gap-3 pt-1"
          data-testid="form-actions"
        >
          <button
            type="button"
            onClick={handleCancel}
            className="inline-flex items-center gap-2 h-10 px-5 border border-[#E8E8E8] rounded-xl text-sm font-medium text-[#7A7A7A] bg-white hover:bg-[#FAFAFA] transition-colors"
            data-testid="btn-cancel"
          >
            취소
          </button>
          <button
            type="submit"
            className="inline-flex items-center gap-2 h-10 px-5 bg-primary text-white rounded-xl text-sm font-medium hover:bg-primary-dark transition-colors"
            data-testid="btn-submit"
          >
            <Save className="w-4 h-4" aria-hidden="true" />
            등록하기
          </button>
        </div>
      </form>
    </div>
  )
}
