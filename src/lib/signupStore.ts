import { create } from 'zustand'
import { MemberType, UserConsents } from './types'

export interface SignupCommonFields {
  name: string
  email: string
  password: string
  dob: string
  gender: string
  nationality: string
  country: string
  city: string
  countryCode: string
  phone: string
  language: string
  signupChannel: string
  signupChannelDetail?: string
  consents: UserConsents
}

export interface SignupPatientFields {
  isPatientSelf: boolean
  guardianRelationship: string
  emergencyContactName: string
  emergencyContactRelation: string
  emergencyContactPhone: string
  visitPurpose: string[]
  plannedCountry: string
  passportNumber: string
}

export interface SignupDoctorFields {
  hospital: string
  hospitalAddress: string
  position: string
  specialty: string
  clinicalExperience: string
  currentHospitalDuration: string
  licenseNumber: string
  licenseCountry: string
  licenseAuthority: string
  desiredTrainingDept: string
  desiredTrainingDuration: string
  desiredStartDate: string
}

export interface SignupAgencyFields {
  companyName: string
  companyNameEn: string
  businessRegistration: string
  foundingCountry: string
  companyAddress: string
  website: string
  representativeName: string
  contactPersonName: string
  contactPersonPosition: string
  contactPersonEmail: string
  contactPersonPhone: string
  contactPersonWhatsapp: string
  businessType: string
  annualPatientVolume: string
  mainCountries: string
  partnerHospitals: string
  bankName: string
  accountNumber: string
  swift: string
  accountHolder: string
}

interface SignupState {
  currentStep: number // 1=유형선택, 2=공통정보, 3=유형별정보, 4=완료
  memberType: MemberType | null
  commonFields: SignupCommonFields
  patientFields: SignupPatientFields
  doctorFields: SignupDoctorFields
  agencyFields: SignupAgencyFields

  setMemberType: (type: MemberType) => void
  setStep: (step: number) => void
  updateCommonFields: (fields: Partial<SignupCommonFields>) => void
  updatePatientFields: (fields: Partial<SignupPatientFields>) => void
  updateDoctorFields: (fields: Partial<SignupDoctorFields>) => void
  updateAgencyFields: (fields: Partial<SignupAgencyFields>) => void
  reset: () => void
}

const defaultConsents: UserConsents = {
  privacy: false,
  medicalInfo: false,
  internationalDataTransfer: false,
  marketing: false,
}

const defaultCommon: SignupCommonFields = {
  name: '', email: '', password: '', dob: '', gender: '',
  nationality: '', country: '', city: '', countryCode: '+82', phone: '',
  language: '', signupChannel: 'direct', consents: defaultConsents,
}

const defaultPatient: SignupPatientFields = {
  isPatientSelf: true, guardianRelationship: '',
  emergencyContactName: '', emergencyContactRelation: '', emergencyContactPhone: '',
  visitPurpose: [], plannedCountry: '', passportNumber: '',
}

const defaultDoctor: SignupDoctorFields = {
  hospital: '', hospitalAddress: '', position: '', specialty: '',
  clinicalExperience: '', currentHospitalDuration: '', licenseNumber: '',
  licenseCountry: '', licenseAuthority: '', desiredTrainingDept: '',
  desiredTrainingDuration: '', desiredStartDate: '',
}

const defaultAgency: SignupAgencyFields = {
  companyName: '', companyNameEn: '', businessRegistration: '', foundingCountry: '',
  companyAddress: '', website: '', representativeName: '',
  contactPersonName: '', contactPersonPosition: '', contactPersonEmail: '',
  contactPersonPhone: '', contactPersonWhatsapp: '', businessType: '',
  annualPatientVolume: '', mainCountries: '', partnerHospitals: '',
  bankName: '', accountNumber: '', swift: '', accountHolder: '',
}

export const useSignupStore = create<SignupState>((set) => ({
  currentStep: 1,
  memberType: null,
  commonFields: defaultCommon,
  patientFields: defaultPatient,
  doctorFields: defaultDoctor,
  agencyFields: defaultAgency,

  setMemberType: (type) => set({ memberType: type, currentStep: 2 }),
  setStep: (step) => set({ currentStep: step }),
  updateCommonFields: (fields) => set((s) => ({ commonFields: { ...s.commonFields, ...fields } })),
  updatePatientFields: (fields) => set((s) => ({ patientFields: { ...s.patientFields, ...fields } })),
  updateDoctorFields: (fields) => set((s) => ({ doctorFields: { ...s.doctorFields, ...fields } })),
  updateAgencyFields: (fields) => set((s) => ({ agencyFields: { ...s.agencyFields, ...fields } })),
  reset: () => set({
    currentStep: 1, memberType: null,
    commonFields: defaultCommon, patientFields: defaultPatient,
    doctorFields: defaultDoctor, agencyFields: defaultAgency,
  }),
}))
