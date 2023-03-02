import { create } from 'zustand'

export const useThemeStore = create((set) => ({
  mode: 'dark',
  font: 'sans',
  changeMode: (payload) => {
    set((state) => ({ ...state, mode: payload }))
  },
  changeFont: (payload) => {
    set((state) => ({ ...state, font: payload }))
  },
}))
