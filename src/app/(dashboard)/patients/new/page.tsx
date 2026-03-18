'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowLeft, ArrowRight, Save } from 'lucide-react'
import { usePatientFormStore } from '@/lib/patientFormStore'
import { useUserStore } from '@/lib/userStore'
import { AgencyUser } from '@/lib/types'
import StepIndicator from '@/components/form/StepIndicator'
import PatientFormStep1 from '@/components/patient/PatientFormStep1'
import ReferralSection from '@/components/patient/ReferralSection'
import TreatmentRequestSection from '@/components/patient/TreatmentRequestSection'
import PresentIllnessSection from '@/components/patient/PresentIllnessSection'
import LocalDiagnosisSection from '@/components/patient/LocalDiagnosisSection'
import MedicalHistorySection from '@/components/patient/MedicalHistorySection'
import MedicationTable from '@/components/patient/MedicationTable'
import MedicalRecordUpload from '@/components/patient/MedicalRecordUpload'
import ConciergeSection from '@/components/patient/ConciergeSection'

const steps = [
  { label: '간단 접수' },
  { label: '상세 의료정보' },
]

export default function NewPatientPage() {
  const router = useRouter()
  const { step, setStep, reset, setAgencyInfo } = usePatientFormStore()
  const { currentUser, isAgency } = useUserStore()

  // 에이전시 로그인 시 자동으로 에이전시 정보 설정
  useEffect(() => {
    if (isAgency()) {
      const agency = currentUser as AgencyUser
      setAgencyInfo(agency.id, agency.companyName, agency.contactPerson.name)
    }
  }, [currentUser, isAgency, setAgencyInfo])

  function handleCancel() {
    reset()
    router.back()
  }

  function handleSubmit() {
    // Mock: redirect to patients list
    reset()
    router.push('/patients')
  }

  return (
    <div className="p-4 md:p-6 lg:p-8" data-testid="new-patient-page">
      {/* Breadcrumb */}
      <nav aria-label="경로" className="flex items-center gap-1.5 text-sm mb-4">
        <Link href="/patients" className="text-primary hover:text-primary-dark transition-colors">
          환자 관리
        </Link>
        <span className="text-text-muted" aria-hidden="true">/</span>
        <span className="text-text-secondary" aria-current="page">신규 등록</span>
      </nav>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-6">
        <h1 className="text-2xl font-bold text-text-primary">
          {isAgency() ? '환자 대리 등록' : '환자 신규 등록'}
        </h1>
        <StepIndicator steps={steps} currentStep={step} />
      </div>

      {/* Step content */}
      <div className="flex flex-col gap-5">
        {step === 1 && (
          <>
            <div className="bg-white rounded-xl border border-[#E8E8E8] p-5">
              <h2 className="text-sm font-semibold text-text-primary mb-4 pb-3 border-b border-[#E8E8E8]">
                1단계: 간단 접수
              </h2>
              <PatientFormStep1 />
            </div>

            {/* Actions */}
            <div className="flex items-center justify-end gap-3 pt-1">
              <button type="button" onClick={handleCancel}
                className="inline-flex items-center gap-2 h-10 px-5 border border-[#E8E8E8] rounded-xl text-sm font-medium text-text-secondary bg-white hover:bg-bg-surface transition-colors">
                취소
              </button>
              <button type="button" onClick={() => setStep(2)}
                className="inline-flex items-center gap-2 h-10 px-5 bg-primary text-white rounded-xl text-sm font-medium hover:bg-primary-dark transition-colors">
                다음: 상세 의료정보 <ArrowRight size={16} />
              </button>
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <div className="bg-primary-light/50 rounded-xl p-4 border border-primary/20">
              <p className="text-sm text-primary">
                <strong>2단계:</strong> 상세 의료 정보를 입력합니다. 모든 항목은 선택사항이며, 나중에 추가할 수 있습니다.
              </p>
            </div>

            <ReferralSection />
            <TreatmentRequestSection />
            <PresentIllnessSection />
            <LocalDiagnosisSection />
            <MedicalHistorySection />
            <MedicationTable />
            <MedicalRecordUpload />
            <ConciergeSection />

            {/* Actions */}
            <div className="flex items-center justify-between gap-3 pt-1">
              <button type="button" onClick={() => setStep(1)}
                className="inline-flex items-center gap-2 h-10 px-5 border border-[#E8E8E8] rounded-xl text-sm font-medium text-text-secondary bg-white hover:bg-bg-surface transition-colors">
                <ArrowLeft size={16} /> 이전
              </button>
              <button type="button" onClick={handleSubmit}
                className="inline-flex items-center gap-2 h-10 px-5 bg-primary text-white rounded-xl text-sm font-medium hover:bg-primary-dark transition-colors">
                <Save size={16} /> 등록하기
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
