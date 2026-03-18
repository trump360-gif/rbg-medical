import { create } from 'zustand'
import {
  ReferralInfo, TreatmentRequest, PresentIllness,
  LocalDiagnosis, MedicalHistory, Medication, MedicalRecord,
  ConciergeServices, TreatmentVisitPurpose
} from './types'

interface PatientFormState {
  step: 1 | 2

  // Step 1
  name: string
  nationality: string
  countryCode: string
  phone: string
  email: string
  desiredDepartment: string
  mainSymptoms: string

  // Step 2
  referral: ReferralInfo
  treatmentRequest: TreatmentRequest
  presentIllness: PresentIllness
  localDiagnosis: LocalDiagnosis
  medicalHistory: MedicalHistory
  medications: Medication[]
  medicalRecords: MedicalRecord[]
  concierge: ConciergeServices

  // Agency
  registeredBy?: string
  agencyCompanyName?: string
  agencyContactPerson?: string

  // Actions
  setStep: (s: 1 | 2) => void
  updateStep1: (fields: Partial<Pick<PatientFormState, 'name' | 'nationality' | 'countryCode' | 'phone' | 'email' | 'desiredDepartment' | 'mainSymptoms'>>) => void
  updateReferral: (fields: Partial<ReferralInfo>) => void
  updateTreatmentRequest: (fields: Partial<TreatmentRequest>) => void
  updatePresentIllness: (fields: Partial<PresentIllness>) => void
  updateLocalDiagnosis: (fields: Partial<LocalDiagnosis>) => void
  updateMedicalHistory: (fields: Partial<MedicalHistory>) => void
  addMedication: (med: Medication) => void
  removeMedication: (id: string) => void
  updateMedication: (id: string, fields: Partial<Medication>) => void
  addMedicalRecord: (rec: MedicalRecord) => void
  removeMedicalRecord: (id: string) => void
  updateConcierge: (fields: Partial<ConciergeServices>) => void
  setAgencyInfo: (registeredBy: string, companyName: string, contactPerson: string) => void
  reset: () => void
}

const defaultReferral: ReferralInfo = { type: 'self' }
const defaultTreatment: TreatmentRequest = { visitPurpose: 'consultation' as TreatmentVisitPurpose }
const defaultIllness: PresentIllness = { mainSymptoms: '', hasPain: false }
const defaultDiagnosis: LocalDiagnosis = {}
const defaultHistory: MedicalHistory = { surgeryHistory: [], underlyingConditions: [] }
const defaultConcierge: ConciergeServices = { airportPickup: false, carService: false, accommodation: false, interpreter: false }

export const usePatientFormStore = create<PatientFormState>((set) => ({
  step: 1,
  name: '', nationality: '', countryCode: '+7', phone: '', email: '',
  desiredDepartment: '', mainSymptoms: '',
  referral: defaultReferral,
  treatmentRequest: defaultTreatment,
  presentIllness: defaultIllness,
  localDiagnosis: defaultDiagnosis,
  medicalHistory: defaultHistory,
  medications: [],
  medicalRecords: [],
  concierge: defaultConcierge,

  setStep: (s) => set({ step: s }),
  updateStep1: (fields) => set(fields),
  updateReferral: (fields) => set((s) => ({ referral: { ...s.referral, ...fields } })),
  updateTreatmentRequest: (fields) => set((s) => ({ treatmentRequest: { ...s.treatmentRequest, ...fields } })),
  updatePresentIllness: (fields) => set((s) => ({ presentIllness: { ...s.presentIllness, ...fields } })),
  updateLocalDiagnosis: (fields) => set((s) => ({ localDiagnosis: { ...s.localDiagnosis, ...fields } })),
  updateMedicalHistory: (fields) => set((s) => ({ medicalHistory: { ...s.medicalHistory, ...fields } })),
  addMedication: (med) => set((s) => ({ medications: [...s.medications, med] })),
  removeMedication: (id) => set((s) => ({ medications: s.medications.filter((m) => m.id !== id) })),
  updateMedication: (id, fields) => set((s) => ({
    medications: s.medications.map((m) => m.id === id ? { ...m, ...fields } : m)
  })),
  addMedicalRecord: (rec) => set((s) => ({ medicalRecords: [...s.medicalRecords, rec] })),
  removeMedicalRecord: (id) => set((s) => ({ medicalRecords: s.medicalRecords.filter((r) => r.id !== id) })),
  updateConcierge: (fields) => set((s) => ({ concierge: { ...s.concierge, ...fields } })),
  setAgencyInfo: (registeredBy, companyName, contactPerson) => set({
    registeredBy, agencyCompanyName: companyName, agencyContactPerson: contactPerson,
    referral: { type: 'agent', referringOrg: companyName },
  }),
  reset: () => set({
    step: 1, name: '', nationality: '', countryCode: '+7', phone: '', email: '',
    desiredDepartment: '', mainSymptoms: '',
    referral: defaultReferral, treatmentRequest: defaultTreatment,
    presentIllness: defaultIllness, localDiagnosis: defaultDiagnosis,
    medicalHistory: defaultHistory, medications: [], medicalRecords: [],
    concierge: defaultConcierge,
    registeredBy: undefined, agencyCompanyName: undefined, agencyContactPerson: undefined,
  }),
}))
