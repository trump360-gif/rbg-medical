'use client'

import Link from 'next/link'
import { Plus, FileText, CheckCircle, Clock, Briefcase, Stethoscope, User, Building2 } from 'lucide-react'
import { cn } from '@/lib/cn'
import { useUserStore } from '@/lib/userStore'
import { MemberType } from '@/lib/types'

// --- Per-type dashboard config ---

const dashboardConfig: Record<MemberType, {
  greeting: string
  description: string
  accentColor: string
  accentBg: string
  ctaLabel: string
  ctaHref: string
  ctaIcon: React.ElementType
  ctaBg: string
  stats: { label: string; value: number; subtitle: string; valueColor: string }[]
  notifications: { id: string; title: string; time: string; statusLabel: string; variant: NotificationVariant }[]
}> = {
  agency: {
    greeting: '에이전시 대시보드',
    description: '환자 대리 등록 및 케이스 현황을 관리합니다',
    accentColor: 'text-violet-700',
    accentBg: 'bg-violet-50 border-violet-200',
    ctaLabel: '환자 대리 등록',
    ctaHref: '/patients/new',
    ctaIcon: Briefcase,
    ctaBg: 'bg-violet-600 hover:bg-violet-700',
    stats: [
      { label: '접수 완료', value: 12, subtitle: '이번 주 +3', valueColor: 'text-primary' },
      { label: '검토 중', value: 5, subtitle: '이번 주 +2', valueColor: 'text-warning' },
      { label: '추가 자료 요청', value: 3, subtitle: '긴급 1건', valueColor: 'text-danger' },
      { label: '최종 승인', value: 8, subtitle: '이번 달 +5', valueColor: 'text-success' },
    ],
    notifications: [
      { id: 'n1', title: '삼성서울병원 — Иван Петров 건 추가 자료 요청', time: '2시간 전', statusLabel: '추가 자료 요청', variant: 'warning' },
      { id: 'n2', title: '서울아산병원 — Мария Иванова 건 최종 승인', time: '5시간 전', statusLabel: '최종 승인', variant: 'success' },
      { id: 'n3', title: '강남세브란스병원 — Алексей Козлов 건 검토 시작', time: '어제', statusLabel: '검토 중', variant: 'primary' },
    ],
  },
  patient: {
    greeting: '환자 대시보드',
    description: '진료 신청 현황과 병원 매칭 상태를 확인합니다',
    accentColor: 'text-blue-700',
    accentBg: 'bg-blue-50 border-blue-200',
    ctaLabel: '진료 신청하기',
    ctaHref: '/patients/new',
    ctaIcon: Plus,
    ctaBg: 'bg-blue-600 hover:bg-blue-700',
    stats: [
      { label: '신청한 진료', value: 2, subtitle: '진행 중', valueColor: 'text-primary' },
      { label: '병원 검토 중', value: 1, subtitle: '서울아산병원', valueColor: 'text-warning' },
      { label: '추가 서류 필요', value: 1, subtitle: '혈액검사 결과', valueColor: 'text-danger' },
      { label: '확정된 예약', value: 0, subtitle: '-', valueColor: 'text-success' },
    ],
    notifications: [
      { id: 'n1', title: '서울아산병원에서 추가 서류를 요청했습니다 (혈액검사, MRI)', time: '3시간 전', statusLabel: '서류 요청', variant: 'warning' },
      { id: 'n2', title: '삼성서울병원 정형외과 접수가 완료되었습니다', time: '1일 전', statusLabel: '접수 완료', variant: 'primary' },
    ],
  },
  doctor: {
    greeting: '의료인 대시보드',
    description: '연수 신청 현황과 협력 병원 정보를 확인합니다',
    accentColor: 'text-emerald-700',
    accentBg: 'bg-emerald-50 border-emerald-200',
    ctaLabel: '병원 탐색',
    ctaHref: '/hospitals',
    ctaIcon: Building2,
    ctaBg: 'bg-emerald-600 hover:bg-emerald-700',
    stats: [
      { label: '연수 신청', value: 1, subtitle: '정형외과', valueColor: 'text-primary' },
      { label: '승인 대기', value: 1, subtitle: '서울아산병원', valueColor: 'text-warning' },
      { label: '관심 병원', value: 4, subtitle: '저장됨', valueColor: 'text-primary' },
      { label: '연수 확정', value: 0, subtitle: '-', valueColor: 'text-success' },
    ],
    notifications: [
      { id: 'n1', title: '서울아산병원 정형외과 연수 프로그램 안내가 도착했습니다', time: '1일 전', statusLabel: '새 안내', variant: 'primary' },
      { id: 'n2', title: '국제성모병원 척추센터에서 연수 일정을 확인해주세요', time: '3일 전', statusLabel: '일정 확인', variant: 'warning' },
    ],
  },
}

// --- Notification types ---
type NotificationVariant = 'warning' | 'success' | 'primary'

const ICON_BG: Record<NotificationVariant, string> = {
  warning: 'bg-warning-light', success: 'bg-success-light', primary: 'bg-primary-light',
}
const ICON_COLOR: Record<NotificationVariant, string> = {
  warning: 'text-warning', success: 'text-success', primary: 'text-primary',
}
const BADGE_BG: Record<NotificationVariant, string> = {
  warning: 'bg-warning-light', success: 'bg-success-light', primary: 'bg-primary-light',
}
const BADGE_TEXT: Record<NotificationVariant, string> = {
  warning: 'text-warning', success: 'text-success', primary: 'text-primary-dark',
}

function NotificationIcon({ variant }: { variant: NotificationVariant }) {
  const baseClass = `w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${ICON_BG[variant]}`
  const iconClass = `w-4 h-4 ${ICON_COLOR[variant]}`

  if (variant === 'warning') return <div className={baseClass} aria-hidden="true"><FileText className={iconClass} /></div>
  if (variant === 'success') return <div className={baseClass} aria-hidden="true"><CheckCircle className={iconClass} /></div>
  return <div className={baseClass} aria-hidden="true"><Clock className={iconClass} /></div>
}

const memberTypeIcon: Record<MemberType, React.ElementType> = {
  patient: User,
  doctor: Stethoscope,
  agency: Briefcase,
}

export default function DashboardPage() {
  const { currentUser } = useUserStore()
  const config = dashboardConfig[currentUser.memberType]
  const TypeIcon = memberTypeIcon[currentUser.memberType]
  const CtaIcon = config.ctaIcon

  return (
    <div className="p-4 md:p-6 lg:p-8">
      {/* Welcome banner */}
      <div className={cn("rounded-xl border p-4 md:p-5 mb-6", config.accentBg)}>
        <div className="flex items-center gap-3 mb-1">
          <TypeIcon size={20} className={config.accentColor} />
          <h1 className={cn("text-lg md:text-xl font-bold", config.accentColor)}>
            {config.greeting}
          </h1>
        </div>
        <p className="text-sm text-text-secondary ml-8">
          {currentUser.name}님, {config.description}
        </p>
      </div>

      {/* Page header with CTA */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-base font-semibold text-text-primary">현황 요약</h2>
        <Link
          href={config.ctaHref}
          className={cn("hidden md:inline-flex items-center gap-2 text-white rounded-xl px-4 py-2.5 text-sm font-medium transition-colors", config.ctaBg)}
        >
          <CtaIcon className="w-4 h-4" aria-hidden="true" />
          {config.ctaLabel}
        </Link>
      </div>

      {/* Stats grid */}
      <section aria-label="통계" className="mb-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {config.stats.map((stat, i) => (
            <div key={i} className="border border-border rounded-lg p-5 bg-white shadow-card">
              <p className="text-sm text-text-secondary mb-1">{stat.label}</p>
              <p className={`text-3xl font-bold ${stat.valueColor} leading-none mb-1`}>{stat.value}</p>
              <p className="text-xs text-text-muted">{stat.subtitle}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mobile CTA */}
      <div className="md:hidden mb-6">
        <Link
          href={config.ctaHref}
          className={cn("flex items-center justify-center gap-2 w-full text-white rounded-xl py-3 text-sm font-medium transition-colors", config.ctaBg)}
        >
          <CtaIcon className="w-4 h-4" aria-hidden="true" />
          {config.ctaLabel}
        </Link>
      </div>

      {/* Notifications */}
      <section aria-label="최근 알림">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-base font-semibold text-text-primary">최근 알림</h2>
        </div>

        <div className="flex flex-col gap-3">
          {config.notifications.map((notif) => (
            <div key={notif.id} className="border border-border rounded-lg p-4 bg-white shadow-card flex items-center gap-3">
              <NotificationIcon variant={notif.variant} />
              <div className="flex-1 min-w-0">
                <p className="font-medium text-sm text-text-primary truncate">{notif.title}</p>
                <p className="text-xs text-text-muted mt-0.5">{notif.time}</p>
              </div>
              <span className={`shrink-0 text-xs font-medium px-2.5 py-1 rounded-full ${BADGE_BG[notif.variant]} ${BADGE_TEXT[notif.variant]}`}>
                {notif.statusLabel}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
