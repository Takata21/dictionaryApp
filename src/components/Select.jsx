import { useState, useRef, useEffect } from 'react'
import { useThemeStore } from '../store/ThemeStore'
function Select() {
  const { changeFont, font } = useThemeStore()
  const ref = useRef()

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (isMenuOpen && ref.current && !ref.current.contains(e.target)) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', checkIfClickedOutside)

    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', checkIfClickedOutside)
    }
  }, [isMenuOpen])
  const handleSelected = (option) => {
    changeFont(option)
    setIsMenuOpen((prev) => !prev)
  }
  return (
    <div
      className="relative flex-1 mr-5 dark:bg-[#050505] dark:text-[#f5f5f5]"
      ref={ref}
    >
      <button
        className={`flex items-center gap-1 capitalize button  w-28 justify-end dark:bg-[#050505] dark:text-[#f5f5f5]  font-${font}`}
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        {font === 'sans' ? `${font} Serif` : font}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          fill="#a445ed"
          stroke="currentColor"
          strokeWidth="0"
          viewBox="0 0 512 512"
        >
          <path
            stroke="none"
            d="M256 294.1 383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"
          />
        </svg>
      </button>
      {isMenuOpen && (
        <ul className="absolute shadow-[0_3px_10px_rgb(0,0,0,0.2)] w-40 p-3 mt-4 bg-white z-10 dark:bg-[#050505] dark:text-[#f5f5f5] ">
          <li
            className="font-sans cursor-pointer hover:text-[#a445ed]"
            onClick={() => handleSelected('sans')}
          >
            Sans Serif
          </li>
          <li
            className="font-serif cursor-pointer hover:text-[#a445ed]"
            onClick={() => handleSelected('serif')}
          >
            Serif
          </li>
          <li
            className="font-mono cursor-pointer hover:text-[#a445ed]"
            onClick={() => handleSelected('mono')}
          >
            Mono
          </li>
        </ul>
      )}
    </div>
  )
}

export default Select
