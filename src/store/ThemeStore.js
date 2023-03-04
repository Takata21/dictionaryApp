import { create } from 'zustand'

export const useThemeStore = create((set) => ({
  dark: window.matchMedia('(prefers-color-scheme: dark)'),
  font: 'sans',
  changeMode: () => {
    set((state) => ({ ...state, dark: !state.dark }))
  },
  changeFont: (payload) => {
    set((state) => ({ ...state, font: payload }))
  },
}))
