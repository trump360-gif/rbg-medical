import { create } from 'zustand'
import { MemberType, AnyUser } from './types'
import { getMockUserByType } from './mockUsers'

interface UserState {
  currentUser: AnyUser
  switchUserType: (type: MemberType) => void
  isAgency: () => boolean
  isDoctor: () => boolean
  isPatient: () => boolean
}

export const useUserStore = create<UserState>((set, get) => ({
  currentUser: getMockUserByType('agency'),

  switchUserType: (type: MemberType) => {
    set({ currentUser: getMockUserByType(type) })
  },

  isAgency: () => get().currentUser.memberType === 'agency',
  isDoctor: () => get().currentUser.memberType === 'doctor',
  isPatient: () => get().currentUser.memberType === 'patient',
}))
