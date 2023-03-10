import React, { useRef, useState } from 'react'
import { useLocation } from 'wouter'
import { useWordStore } from '../store/WordStore'
import Loader from './Loader'
function Search() {
  const { getMeaning, loading } = useWordStore()
  const [location, setLocation] = useLocation()
  const [inputWord, setInputWord] = useState('')
  const inputSearch = useRef()
  const handleChange = (e) => {
    const newSearch = e.target.value
    setInputWord(newSearch)
  }
  const handleSubmit = async (e) => {
    if (inputWord === '') {
      prompt('please write a word')
      return
    }
    e.preventDefault()
    await getMeaning(inputWord)
    setLocation(`/meaning/${inputWord}`)
  }
  return (
    <div className="w-11/12 m-auto mt-14 md:text-xl">
      <form
        className="flex justify-between items-center relative"
        onSubmit={handleSubmit}
      >
        {loading && (
          <div className="absolute right-11">
            <Loader />
          </div>
        )}
        <input
          type="text"
          className="border-none flex-1 px-6 py-5  bg-[#f5f5f5] rounded-3xl outline-[#a445ed] placeholder:text-[#757575] placeholder:font-medium dark:bg-[#1f1f1f] md:placeholder:text-xl md:placeholder:font-semibold"
          placeholder="Search for any word..."
          onChange={handleChange}
          ref={inputSearch}
          value={inputWord}
          required
        />
        <button className="w-auto  absolute right-5 top-0 bottom-0 w-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            fill="#a445ed"
            stroke="currentColor"
            strokeWidth="0"
            viewBox="0 0 16 16"
          >
            <path
              stroke="none"
              d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
            />
          </svg>
        </button>
      </form>
    </div>
  )
}

export default Search
