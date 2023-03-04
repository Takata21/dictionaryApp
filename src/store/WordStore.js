import { create } from 'zustand'
const URL = 'https://api.dictionaryapi.dev/api/v2/entries/en/'
export const useWordStore = create((set) => ({
  meaning: [],
  word: '',
  getMeaning: async (payload) => {
    set((state) => ({ ...state, word: payload }))
    const meaning = await (await fetch(`${URL}${payload}`)).json()
    set((state) => ({ ...state, meaning }))
  },
}))
