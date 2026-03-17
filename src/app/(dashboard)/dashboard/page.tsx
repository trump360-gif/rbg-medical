'use client'

import Link from 'next/link'
import { Plus, FileText, CheckCircle, Clock } from 'lucide-react'

// --- Static data for dashboard stats ---
const STATS = [
  {
    label: '접수 완료',
    value: 12,
    subtitle: '이번 주 +3',
    valueColor: 'text-primary',
    testId: 'stat-submitted',
  },
  {
    label: '검토 중',
    value: 5,
    subtitle: '이번 주 +2',
    valueColor: 'text-warning',
    testId: 'stat-reviewing',
  },
  {
    label: '추가 자료 요청',
    value: 3,
    subtitle: '긴급 1건',
    valueColor: 'text-danger',
    testId: 'stat-info-requested',
  },
  {
    label: '최종 승인',
    value: 8,
    subtitle: '이번 달 +5',
    valueColor: 'text-success',
    testId: 'stat-approved',
  },
]

// --- Static notification data ---
type NotificationVariant = 'warning' | 'success' | 'primary'

interface Notification {
  id: string
  title: string
  time: string
  statusLabel: string
  variant: NotificationVariant
}

const NOTIFICATIONS: Notification[] = [
  {
    id: 'notif-1',
    title: '삼성서울병원 — Иван Петров 건 추가 자료 요청',
    time: '2시간 전',
    statusLabel: '추가 자료 요청',
    variant: 'warning',
  },
  {
    id: 'notif-2',
    title: '서울아산병원 — Мария Иванова 건 최종 승인',
    time: '5시간 전',
    statusLabel: '최종 승인',
    variant: 'success',
  },
  {
    id: 'notif-3',
    title: '강남세브란스병원 — Алексей Козлов 건 검토 시작',
    time: '어제',
    statusLabel: '검토 중',
    variant: 'primary',
  },
]

// Variant style maps
const ICON_BG: Record<NotificationVariant, string> = {
  warning: 'bg-warning-light',
  success: 'bg-success-light',
  primary: 'bg-primary-light',
}

const ICON_COLOR: Record<NotificationVariant, string> = {
  warning: 'text-warning',
  success: 'text-success',
  primary: 'text-primary',
}

const BADGE_BG: Record<NotificationVariant, string> = {
  warning: 'bg-warning-light',
  success: 'bg-success-light',
  primary: 'bg-primary-light',
}

const BADGE_TEXT: Record<NotificationVariant, string> = {
  warning: 'text-warning',
  success: 'text-success',
  primary: 'text-primary-dark',
}

function NotificationIcon({ variant }: { variant: NotificationVariant }) {
  const baseClass = `w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${ICON_BG[variant]}`
  const iconClass = `w-4 h-4 ${ICON_COLOR[variant]}`

  if (variant === 'warning') {
    return (
      <div className={baseClass} aria-hidden="true">
        <FileText className={iconClass} />
      </div>
    )
  }
  if (variant === 'success') {
    return (
      <div className={baseClass} aria-hidden="true">
        <CheckCircle className={iconClass} />
      </div>
    )
  }
  return (
    <div className={baseClass} aria-hidden="true">
      <Clock className={iconClass} />
    </div>
  )
}

export default function DashboardPage() {
  return (
    <div className="p-4 md:p-6 lg:p-8 pb-24 md:pb-8">
      {/* Page header */}
      <div className="flex items-center justify-between mb-6">
        <h1
          className="text-2xl font-bold text-[#0D0D0D]"
          data-testid="dashboard-title"
        >
          대시보드
        </h1>

        {/* Desktop: register button */}
        <Link
          href="/patients/new"
          className="hidden md:inline-flex items-center gap-2 bg-primary text-white rounded-xl px-4 py-2.5 text-sm font-medium hover:bg-primary-dark transition-colors"
          data-testid="btn-new-patient-desktop"
        >
          <Plus className="w-4 h-4" aria-hidden="true" />
          환자 등록
        </Link>
      </div>

      {/* Stats grid */}
      <section aria-label="통계" className="mb-6">
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
          data-testid="stats-grid"
        >
          {STATS.map((stat) => (
            <div
              key={stat.testId}
              className="border border-border rounded-lg p-5 bg-white shadow-card"
              data-testid={stat.testId}
            >
              <p className="text-sm text-[#7A7A7A] mb-1">{stat.label}</p>
              <p className={`text-3xl font-bold ${stat.valueColor} leading-none mb-1`}>
                {stat.value}
              </p>
              <p className="text-xs text-[#B0B0B0]">{stat.subtitle}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mobile: register patient button */}
      <div className="md:hidden mb-6">
        <Link
          href="/patients/new"
          className="flex items-center justify-center gap-2 w-full bg-primary text-white rounded-xl py-3 text-sm font-medium hover:bg-primary-dark transition-colors"
          data-testid="btn-new-patient-mobile"
        >
          <Plus className="w-4 h-4" aria-hidden="true" />
          환자 등록
        </Link>
      </div>

      {/* Recent notifications section */}
      <section aria-label="최근 알림" data-testid="notifications-section">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-base font-semibold text-[#0D0D0D]">
            최근 알림
          </h2>
          <Link
            href="/notifications"
            className="text-sm text-primary hover:text-primary-dark transition-colors"
            data-testid="link-view-all-notifications"
          >
            전체 보기 →
          </Link>
        </div>

        <div className="flex flex-col gap-3" data-testid="notifications-list">
          {NOTIFICATIONS.map((notif) => (
            <div
              key={notif.id}
              className="border border-border rounded-lg p-4 bg-white shadow-card flex items-center gap-3"
              data-testid={`notification-${notif.id}`}
            >
              {/* Left: icon */}
              <NotificationIcon variant={notif.variant} />

              {/* Middle: title + time */}
              <div className="flex-1 min-w-0">
                <p className="font-medium text-sm text-[#0D0D0D] truncate">
                  {notif.title}
                </p>
                <p className="text-xs text-[#B0B0B0] mt-0.5">{notif.time}</p>
              </div>

              {/* Right: status badge */}
              <span
                className={`shrink-0 text-xs font-medium px-2.5 py-1 rounded-full ${BADGE_BG[notif.variant]} ${BADGE_TEXT[notif.variant]}`}
                data-testid={`notification-badge-${notif.id}`}
              >
                {notif.statusLabel}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
