import { PatientUser, DoctorUser, AgencyUser, AnyUser } from './types'

export const MOCK_PATIENT: PatientUser = {
  id: 'u-patient-001',
  name: 'Mikhail Petrov',
  email: 'mikhail@example.com',
  phone: '+7-999-123-4567',
  dob: '1985-03-15',
  gender: 'male',
  nationality: 'Russia',
  country: 'Russia',
  city: 'Moscow',
  language: 'ru',
  memberType: 'patient',
  signupChannel: 'direct',
  consents: { privacy: true, medicalInfo: true, internationalDataTransfer: true, marketing: false },
  isPatientSelf: true,
  emergencyContact: '+7-999-987-6543',
  visitPurpose: ['treatment', 'consultation'],
  plannedCountry: 'South Korea',
  passportNumber: '1234567890',
  createdAt: '2025-01-10T09:00:00Z',
}

export const MOCK_DOCTOR: DoctorUser = {
  id: 'u-doctor-001',
  name: 'Dr. Ahmed Hassan',
  email: 'ahmed.hassan@hospital.ae',
  phone: '+971-50-123-4567',
  dob: '1978-07-22',
  gender: 'male',
  nationality: 'UAE',
  country: 'UAE',
  city: 'Dubai',
  language: 'ar',
  memberType: 'doctor',
  signupChannel: 'partner',
  consents: { privacy: true, medicalInfo: true, internationalDataTransfer: true, marketing: true },
  hospital: 'Dubai Health Authority Hospital',
  hospitalAddress: 'Al Baraha, Dubai, UAE',
  position: 'specialist',
  specialty: 'Orthopedic Surgery',
  clinicalExperience: '15 years',
  currentHospitalDuration: '8 years',
  licenseNumber: 'DHA-2010-12345',
  licenseCountry: 'UAE',
  licenseAuthority: 'Dubai Health Authority',
  desiredTrainingDept: 'Orthopedic Surgery',
  desiredTrainingDuration: '3 months',
  desiredStartDate: '2026-06-01',
  createdAt: '2025-02-20T14:00:00Z',
}

export const MOCK_AGENCY: AgencyUser = {
  id: 'u-agency-001',
  name: 'Kim Minsoo',
  email: 'minsoo@rbgmedical.com',
  phone: '+82-10-1234-5678',
  dob: '1990-11-05',
  gender: 'male',
  nationality: 'South Korea',
  country: 'South Korea',
  city: 'Seoul',
  language: 'ko',
  memberType: 'agency',
  signupChannel: 'direct',
  consents: { privacy: true, medicalInfo: true, internationalDataTransfer: true, marketing: true },
  companyName: 'RBG 메디컬',
  companyNameEn: 'RBG Medical Agency',
  businessRegistration: '123-45-67890',
  foundingCountry: 'South Korea',
  companyAddress: '서울특별시 강남구 테헤란로 123',
  website: 'https://rbgmedical.com',
  representativeName: '박대표',
  contactPerson: {
    name: 'Kim Minsoo',
    position: 'Manager',
    email: 'minsoo@rbgmedical.com',
    phone: '+82-10-1234-5678',
    whatsapp: '+82-10-1234-5678',
  },
  businessType: 'medical_tourism',
  annualPatientVolume: '200+',
  mainCountries: ['Russia', 'Kazakhstan', 'Uzbekistan'],
  partnerHospitals: ['서울아산병원', '삼성서울병원', '세브란스병원'],
  settlementAccount: {
    bankName: '우리은행',
    accountNumber: '1002-123-456789',
    swift: 'HVBKKRSE',
    accountHolder: 'RBG Medical Agency',
  },
  createdAt: '2024-12-01T10:00:00Z',
}

export const MOCK_USERS: AnyUser[] = [MOCK_PATIENT, MOCK_DOCTOR, MOCK_AGENCY]

export function getMockUserByType(type: 'patient' | 'doctor' | 'agency'): AnyUser {
  switch (type) {
    case 'patient': return MOCK_PATIENT
    case 'doctor': return MOCK_DOCTOR
    case 'agency': return MOCK_AGENCY
  }
}
