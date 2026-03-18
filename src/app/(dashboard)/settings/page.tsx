'use client'

import { useState } from 'react'
import { Bell, Globe, Shield, User, ArrowLeft, Save, Check } from 'lucide-react'
import { cn } from '@/lib/cn'
import { useUserStore } from '@/lib/userStore'
import { MemberType } from '@/lib/types'
import FormField, { inputClassName } from '@/components/form/FormField'
import FormSection from '@/components/form/FormSection'

type SettingTab = 'main' | 'profile' | 'notifications' | 'language' | 'security'

const SETTING_SECTIONS = [
  { id: 'profile' as const, icon: User, title: '프로필 설정', description: '이름, 이메일, 프로필 사진 관리' },
  { id: 'notifications' as const, icon: Bell, title: '알림 설정', description: '이메일, 푸시 알림 수신 설정' },
  { id: 'language' as const, icon: Globe, title: '언어 설정', description: '인터페이스 언어 변경' },
  { id: 'security' as const, icon: Shield, title: '보안 설정', description: '비밀번호 변경, 2단계 인증' },
]

export default function SettingsPage() {
  const [tab, setTab] = useState<SettingTab>('main')

  return (
    <div className="p-4 md:p-6 lg:p-8" data-testid="settings-page">
      {tab === 'main' ? (
        <>
          <h1 className="text-2xl font-bold text-text-primary mb-6">설정</h1>
          <div className="flex flex-col gap-3">
            {SETTING_SECTIONS.map((section) => (
              <button key={section.id} type="button" onClick={() => setTab(section.id)}
                className="flex items-center gap-4 w-full text-left border border-[#E8E8E8] rounded-xl p-4 bg-white shadow-card hover:shadow-card-hover transition-shadow">
                <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center shrink-0">
                  <section.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-sm text-text-primary">{section.title}</p>
                  <p className="text-xs text-text-secondary mt-0.5">{section.description}</p>
                </div>
                <span className="text-text-muted text-sm">›</span>
              </button>
            ))}
          </div>

          {/* User type switcher for mobile */}
          <div className="mt-6 md:hidden">
            <UserTypeSwitcher />
          </div>
        </>
      ) : (
        <>
          <button onClick={() => setTab('main')}
            className="flex items-center gap-1.5 text-sm text-primary hover:text-primary-dark mb-4">
            <ArrowLeft size={16} /> 설정
          </button>
          {tab === 'profile' && <ProfileSettings />}
          {tab === 'notifications' && <NotificationSettings />}
          {tab === 'language' && <LanguageSettings />}
          {tab === 'security' && <SecuritySettings />}
        </>
      )}
    </div>
  )
}

// ====== User Type Switcher (for mobile settings) ======
function UserTypeSwitcher() {
  const { currentUser, switchUserType } = useUserStore()

  const types: { type: MemberType; label: string; color: string; bg: string }[] = [
    { type: 'patient', label: '환자', color: 'text-blue-700', bg: 'bg-blue-50 border-blue-200' },
    { type: 'doctor', label: '의료인', color: 'text-emerald-700', bg: 'bg-emerald-50 border-emerald-200' },
    { type: 'agency', label: '에이전시', color: 'text-violet-700', bg: 'bg-violet-50 border-violet-200' },
  ]

  return (
    <FormSection title="사용자 유형 전환 (시안용)">
      <div className="flex gap-2">
        {types.map((t) => (
          <button key={t.type} onClick={() => switchUserType(t.type)}
            className={cn("flex-1 py-2.5 rounded-lg text-sm font-medium border transition-colors",
              currentUser.memberType === t.type ? cn(t.bg, t.color) : "border-[#E8E8E8] text-text-muted")}>
            {t.label}
          </button>
        ))}
      </div>
    </FormSection>
  )
}

// ====== Profile Settings ======
function ProfileSettings() {
  const { currentUser } = useUserStore()
  const [name, setName] = useState(currentUser.name)
  const [email, setEmail] = useState(currentUser.email)
  const [phone, setPhone] = useState(currentUser.phone)
  const [saved, setSaved] = useState(false)

  const handleSave = () => { setSaved(true); setTimeout(() => setSaved(false), 2000) }

  return (
    <div>
      <h2 className="text-xl font-bold text-text-primary mb-5">프로필 설정</h2>
      <div className="flex flex-col gap-5">
        <FormSection title="기본 정보">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField label="이름">
              <input className={inputClassName} value={name} onChange={(e) => setName(e.target.value)} />
            </FormField>
            <FormField label="이메일">
              <input className={inputClassName} type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </FormField>
            <FormField label="전화번호">
              <input className={inputClassName} value={phone} onChange={(e) => setPhone(e.target.value)} />
            </FormField>
            <FormField label="회원 유형">
              <input className={cn(inputClassName, "bg-bg-surface")} value={
                currentUser.memberType === 'patient' ? '환자/보호자' :
                currentUser.memberType === 'doctor' ? '의료인' : '에이전시/파트너'
              } readOnly />
            </FormField>
          </div>
        </FormSection>

        <FormSection title="프로필 사진">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-primary-light flex items-center justify-center text-primary text-xl font-bold">
              {currentUser.name.charAt(0)}
            </div>
            <button className="px-4 py-2 rounded-lg border border-[#E8E8E8] text-sm text-text-secondary hover:bg-bg-surface">
              사진 변경
            </button>
          </div>
        </FormSection>

        <button onClick={handleSave}
          className="inline-flex items-center gap-2 self-end px-5 py-2.5 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary-dark">
          {saved ? <><Check size={16} /> 저장됨</> : <><Save size={16} /> 저장</>}
        </button>
      </div>
    </div>
  )
}

// ====== Notification Settings ======
function NotificationSettings() {
  const [emailNotif, setEmailNotif] = useState(true)
  const [pushNotif, setPushNotif] = useState(true)
  const [caseUpdate, setCaseUpdate] = useState(true)
  const [marketing, setMarketing] = useState(false)

  const Toggle = ({ checked, onChange }: { checked: boolean; onChange: (v: boolean) => void }) => (
    <button onClick={() => onChange(!checked)}
      className={cn("w-11 h-6 rounded-full transition-colors relative",
        checked ? "bg-primary" : "bg-gray-300")}>
      <span className={cn("absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform",
        checked ? "left-[22px]" : "left-0.5")} />
    </button>
  )

  return (
    <div>
      <h2 className="text-xl font-bold text-text-primary mb-5">알림 설정</h2>
      <FormSection title="알림 채널">
        <div className="flex flex-col gap-4">
          {[
            { label: '이메일 알림', desc: '중요 알림을 이메일로 수신', checked: emailNotif, onChange: setEmailNotif },
            { label: '푸시 알림', desc: '브라우저 푸시 알림 수신', checked: pushNotif, onChange: setPushNotif },
            { label: '케이스 업데이트', desc: '환자 케이스 상태 변경 알림', checked: caseUpdate, onChange: setCaseUpdate },
            { label: '마케팅 알림', desc: '프로모션 및 이벤트 정보', checked: marketing, onChange: setMarketing },
          ].map((item) => (
            <div key={item.label} className="flex items-center justify-between py-2">
              <div>
                <p className="text-sm font-medium text-text-primary">{item.label}</p>
                <p className="text-xs text-text-muted">{item.desc}</p>
              </div>
              <Toggle checked={item.checked} onChange={item.onChange} />
            </div>
          ))}
        </div>
      </FormSection>
    </div>
  )
}

// ====== Language Settings ======
function LanguageSettings() {
  const [lang, setLang] = useState('ko')

  const languages = [
    { value: 'ko', label: '한국어', flag: '🇰🇷' },
    { value: 'en', label: 'English', flag: '🇺🇸' },
    { value: 'ru', label: 'Русский', flag: '🇷🇺' },
    { value: 'ar', label: 'العربية', flag: '🇸🇦' },
    { value: 'zh', label: '中文', flag: '🇨🇳' },
  ]

  return (
    <div>
      <h2 className="text-xl font-bold text-text-primary mb-5">언어 설정</h2>
      <FormSection title="인터페이스 언어">
        <div className="flex flex-col gap-2">
          {languages.map((l) => (
            <label key={l.value}
              className={cn("flex items-center gap-3 p-3 rounded-xl border-2 cursor-pointer transition-colors",
                lang === l.value ? "border-primary bg-primary-light" : "border-[#E8E8E8] hover:border-primary/30")}>
              <input type="radio" name="language" value={l.value}
                checked={lang === l.value} onChange={() => setLang(l.value)}
                className="w-4 h-4 text-primary" />
              <span className="text-lg">{l.flag}</span>
              <span className={cn("text-sm", lang === l.value ? "font-medium text-primary" : "text-text-primary")}>
                {l.label}
              </span>
            </label>
          ))}
        </div>
      </FormSection>
    </div>
  )
}

// ====== Security Settings ======
function SecuritySettings() {
  const [currentPw, setCurrentPw] = useState('')
  const [newPw, setNewPw] = useState('')
  const [confirmPw, setConfirmPw] = useState('')
  const [twoFa, setTwoFa] = useState(false)

  return (
    <div>
      <h2 className="text-xl font-bold text-text-primary mb-5">보안 설정</h2>
      <div className="flex flex-col gap-5">
        <FormSection title="비밀번호 변경">
          <div className="flex flex-col gap-4 max-w-md">
            <FormField label="현재 비밀번호">
              <input className={inputClassName} type="password" value={currentPw} onChange={(e) => setCurrentPw(e.target.value)} />
            </FormField>
            <FormField label="새 비밀번호">
              <input className={inputClassName} type="password" value={newPw} onChange={(e) => setNewPw(e.target.value)} placeholder="8자 이상" />
            </FormField>
            <FormField label="새 비밀번호 확인">
              <input className={inputClassName} type="password" value={confirmPw} onChange={(e) => setConfirmPw(e.target.value)} />
            </FormField>
            <button className="self-start px-5 py-2.5 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary-dark">
              비밀번호 변경
            </button>
          </div>
        </FormSection>

        <FormSection title="2단계 인증">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-text-primary">2단계 인증 (2FA)</p>
              <p className="text-xs text-text-muted mt-0.5">로그인 시 추가 인증 코드 필요</p>
            </div>
            <button onClick={() => setTwoFa(!twoFa)}
              className={cn("w-11 h-6 rounded-full transition-colors relative",
                twoFa ? "bg-primary" : "bg-gray-300")}>
              <span className={cn("absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform",
                twoFa ? "left-[22px]" : "left-0.5")} />
            </button>
          </div>
        </FormSection>
      </div>
    </div>
  )
}
