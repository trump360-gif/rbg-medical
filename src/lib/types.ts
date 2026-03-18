// ========== Auth & User Types ==========

export type MemberType = 'patient' | 'doctor' | 'agency'
export type SignupChannel = 'direct' | 'partner' | 'referral'
export type VisitPurpose = 'checkup' | 'consultation' | 'treatment' | 'surgery' | 'follow_up'
export type DoctorPosition = 'professor' | 'specialist' | 'resident' | 'gp'
export type AgencyBusinessType = 'medical_tourism' | 'travel_agency' | 'medical_referral' | 'consultant'

export interface UserConsents {
  privacy: boolean
  medicalInfo: boolean
  internationalDataTransfer: boolean
  marketing: boolean
}

export interface ContactPerson {
  name: string
  position: string
  email: string
  phone: string
  whatsapp?: string
  telegram?: string
}

export interface SettlementAccount {
  bankName: string
  accountNumber: string
  swift: string
  accountHolder: string
}

// Base User (공통 필드)
export interface User {
  id: string
  name: string
  email: string
  phone: string
  dob: string
  gender: 'male' | 'female' | 'other'
  nationality: string
  country: string
  city: string
  language: string
  profilePhoto?: string
  memberType: MemberType
  signupChannel: SignupChannel
  consents: UserConsents
  createdAt: string
}

// 환자/보호자
export interface PatientUser extends User {
  memberType: 'patient'
  isPatientSelf: boolean
  guardianRelationship?: string
  emergencyContact: string
  visitPurpose: VisitPurpose[]
  plannedCountry: string
  passportNumber?: string
}

// 의료인
export interface DoctorUser extends User {
  memberType: 'doctor'
  hospital: string
  hospitalAddress: string
  position: DoctorPosition
  specialty: string
  clinicalExperience: string
  currentHospitalDuration: string
  licenseNumber: string
  licenseCountry: string
  licenseAuthority: string
  desiredTrainingDept?: string
  desiredTrainingDuration?: string
  desiredStartDate?: string
}

// 에이전시/여행사/파트너
export interface AgencyUser extends User {
  memberType: 'agency'
  companyName: string
  companyNameEn: string
  businessRegistration: string
  foundingCountry: string
  companyAddress: string
  website: string
  representativeName: string
  contactPerson: ContactPerson
  businessType: AgencyBusinessType
  annualPatientVolume: string
  mainCountries: string[]
  partnerHospitals: string[]
  settlementAccount: SettlementAccount
}

export type AnyUser = PatientUser | DoctorUser | AgencyUser

// ========== Hospital & Doctor Types ==========

export interface Hospital {
  id: string
  name: string
  type: 'tertiary' | 'general' | 'specialty'
  typeLabel: string
  region: string
  district: string
  address: string
  lat: number
  lng: number
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

// ========== Patient Registration (Expanded) ==========

export type ReferralType = 'self' | 'agent' | 'hospital' | 'doctor'
export type TreatmentVisitPurpose = 'consultation' | 'treatment' | 'surgery' | 'second_opinion' | 'health_checkup'
export type MedicalRecordType = 'diagnosis_report' | 'ct' | 'mri' | 'xray' | 'blood_test' | 'pathology' | 'prescription' | 'other'
export type UnderlyingCondition = 'diabetes' | 'hypertension' | 'heart_disease' | 'cancer' | 'other'

export interface ReferralInfo {
  type: ReferralType
  referringOrg?: string
  referringDoctor?: string
  contactEmail?: string
  contactPhone?: string
}

export interface TreatmentRequest {
  preferredDoctor?: string
  visitPurpose: TreatmentVisitPurpose
  preferredDate?: string
  expectedStayDuration?: string
  companions?: number
}

export interface PresentIllness {
  mainSymptoms: string
  onsetDate?: string
  duration?: string
  hasPain: boolean
  painLevel?: number
  affectedBodyArea?: string
}

export interface LocalDiagnosis {
  diagnosisName?: string
  diagnosisDate?: string
  hospital?: string
  doctor?: string
  currentlyTreating?: boolean
  prescriptions?: string
}

export interface SurgeryEntry {
  type: string
  date: string
}

export interface MedicalHistory {
  pastConditions?: string
  surgeryHistory: SurgeryEntry[]
  familyHistory?: string
  underlyingConditions: UnderlyingCondition[]
  allergies?: string
}

export interface Medication {
  id: string
  name: string
  dosage: string
  duration: string
  purpose: string
}

export interface MedicalRecord {
  id: string
  type: MedicalRecordType
  fileName: string
  fileType: string
  size: string
}

export interface ConciergeServices {
  airportPickup: boolean
  carService: boolean
  accommodation: boolean
  interpreter: boolean
}

export interface PatientRegistration {
  // Step 1 - Quick Intake
  name: string
  nationality: string
  countryCode: string
  phone: string
  email: string
  desiredDepartment: string
  mainSymptoms: string

  // Step 2 - Detailed Medical Info
  referral: ReferralInfo
  treatmentRequest: TreatmentRequest
  presentIllness: PresentIllness
  localDiagnosis: LocalDiagnosis
  medicalHistory: MedicalHistory
  medications: Medication[]
  medicalRecords: MedicalRecord[]
  concierge: ConciergeServices

  // Agency tracking
  registeredBy?: string
  agencyCompanyName?: string
  agencyContactPerson?: string
}

export const STATUS_CONFIG: Record<CaseStatus, { label: string; bgColor: string; textColor: string }> = {
  submitted:      { label: '접수 완료',      bgColor: 'bg-primary-light', textColor: 'text-primary-dark' },
  reviewing:      { label: '병원 검토 중',   bgColor: 'bg-primary-light', textColor: 'text-primary-dark' },
  info_requested: { label: '추가 자료 요청', bgColor: 'bg-warning-light',  textColor: 'text-warning' },
  approved:       { label: '최종 승인',      bgColor: 'bg-success-light', textColor: 'text-success' },
  rejected:       { label: '거절',           bgColor: 'bg-danger-light',  textColor: 'text-danger' },
}
