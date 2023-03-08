import { create } from 'zustand'
const URL = 'https://api.dictionaryapi.dev/api/v2/entries/en/'
export const useWordStore = create((set) => ({
  meaning: [],
  loading: false,
  error: false,
  getMeaning: async (payload) => {
    set((state) => ({ ...state, loading: true }))
    const meaning = await (await fetch(`${URL}${payload}`)).json()
    meaning.title
      ? set((state) => ({ ...state, error: true }))
      : set((state) => ({ ...state, error: false }))

    set((state) => ({ ...state, meaning }))
    set((state) => ({ ...state, loading: false }))
  },
}))
