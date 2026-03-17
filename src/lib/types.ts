export interface Hospital {
  id: string
  name: string
  type: 'tertiary' | 'general' | 'specialty'
  typeLabel: string
  region: string
  district: string
  address: string
  photos: Photo[]
  departments: Department[]
  languages: LanguageSupport[]
  isRegisteredForForeigner: boolean
  isAcceptingReferral: boolean
  whatsappNumber?: string
  email?: string
  certifications: string[]
  description: string
  internationalPatientCount?: number
  foundedYear?: number
}

export interface Department {
  id: string
  code: string
  name: string
  doctors: Doctor[]
}

export interface Doctor {
  id: string
  name: string
  departmentId: string
  specialties: string[]
  education: string[]
  experience: string[]
  publications: number
  languages: LanguageSupport[]
  foreignPatientExperience?: string
  awards?: string[]
  photo?: string
}

export interface LanguageSupport {
  code: 'ru' | 'en' | 'zh' | 'ar'
  label: string
  level: 'native' | 'fluent' | 'interpreter'
}

export interface Photo {
  url: string
  label: string
}

export interface Patient {
  id: string
  name: string
  nationality: string
  icdCode: string
  icdLabel: string
  desiredDepartment: string
  desiredProcedure?: string
  attachments: Attachment[]
  cases: PatientCase[]
  createdAt: string
}

export interface Attachment {
  id: string
  name: string
  type: string
  size: string
}

export interface PatientCase {
  id: string
  patientId: string
  hospitalId: string
  hospitalName: string
  doctorId?: string
  doctorName?: string
  status: CaseStatus
  feedbacks: Feedback[]
  submittedAt: string
  updatedAt: string
}

export type CaseStatus = 'submitted' | 'reviewing' | 'info_requested' | 'approved' | 'rejected'

export interface Feedback {
  id: string
  from: 'hospital' | 'agency'
  message: string
  requestedDocuments?: string[]
  createdAt: string
}

export const STATUS_CONFIG: Record<CaseStatus, { label: string; bgColor: string; textColor: string }> = {
  submitted:      { label: '접수 완료',      bgColor: 'bg-primary-light', textColor: 'text-primary-dark' },
  reviewing:      { label: '병원 검토 중',   bgColor: 'bg-primary-light', textColor: 'text-primary-dark' },
  info_requested: { label: '추가 자료 요청', bgColor: 'bg-warning-light',  textColor: 'text-warning' },
  approved:       { label: '최종 승인',      bgColor: 'bg-success-light', textColor: 'text-success' },
  rejected:       { label: '거절',           bgColor: 'bg-danger-light',  textColor: 'text-danger' },
}
