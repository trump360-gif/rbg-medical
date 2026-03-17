'use client'

import { Bell, Globe, Shield, User } from 'lucide-react'

const SETTING_SECTIONS = [
  {
    icon: User,
    title: '프로필 설정',
    description: '이름, 이메일, 프로필 사진 관리',
  },
  {
    icon: Bell,
    title: '알림 설정',
    description: '이메일, 푸시 알림 수신 설정',
  },
  {
    icon: Globe,
    title: '언어 설정',
    description: '인터페이스 언어 변경',
  },
  {
    icon: Shield,
    title: '보안 설정',
    description: '비밀번호 변경, 2단계 인증',
  },
]

export default function SettingsPage() {
  return (
    <div className="p-4 md:p-6 lg:p-8" data-testid="settings-page">
      <h1
        className="text-2xl font-bold text-[#0D0D0D] mb-6"
        data-testid="settings-title"
      >
        설정
      </h1>

      <div className="flex flex-col gap-3">
        {SETTING_SECTIONS.map((section) => (
          <button
            key={section.title}
            type="button"
            className="flex items-center gap-4 w-full text-left border border-[#E8E8E8] rounded-xl p-4 bg-white shadow-card hover:shadow-card-hover transition-shadow"
          >
            <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center shrink-0">
              <section.icon className="w-5 h-5 text-primary" />
            </div>
            <div className="min-w-0">
              <p className="font-semibold text-sm text-[#0D0D0D]">
                {section.title}
              </p>
              <p className="text-xs text-[#7A7A7A] mt-0.5">
                {section.description}
              </p>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
