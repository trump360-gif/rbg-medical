import { create } from 'zustand'

interface AppState {
  // Current patient context (when browsing hospitals for a specific patient)
  currentPatientId: string | null
  setCurrentPatientId: (id: string | null) => void

  // Selected hospital in 3-panel layout
  selectedHospitalId: string | null
  setSelectedHospitalId: (id: string | null) => void

  // Doctor modal
  selectedDoctorId: string | null
  selectedDoctorHospitalId: string | null
  openDoctorModal: (doctorId: string, hospitalId: string) => void
  closeDoctorModal: () => void
}

export const useAppStore = create<AppState>((set) => ({
  currentPatientId: null,
  setCurrentPatientId: (id) => set({ currentPatientId: id }),

  selectedHospitalId: null,
  setSelectedHospitalId: (id) => set({ selectedHospitalId: id }),

  selectedDoctorId: null,
  selectedDoctorHospitalId: null,
  openDoctorModal: (doctorId, hospitalId) =>
    set({ selectedDoctorId: doctorId, selectedDoctorHospitalId: hospitalId }),
  closeDoctorModal: () =>
    set({ selectedDoctorId: null, selectedDoctorHospitalId: null }),
}))
