import { useState } from "react"

function Switch() {
  const [active, setActive] = useState(false)
  const handleClick = () => {
    setActive((prev) => !prev)
  }
  return (
    <div className="flex items-center justify-end flex-1 gap-2 group pl-5 border-l border-[#a445ed] ">
      <button
        className={`w-9 rounded-xl relative bg-[#757575] h-4 before:w-3 before:h-3 before:bg-white block before:absolute before:top-0.5 before:left-1 before:rounded-full group-hover:bg-[#a445ed] before:transition-transform before:duration-500
        ${
          active
            ? "bg-[#a445ed] before:translate-x-[18px]"
            : "before:translate-x-[-2px]"
        }`}
        id="toggle"
        onClick={() => handleClick()}
      ></button>
      <label htmlFor="toggle">
        <svg
          className="group-hover:fill-[#a445ed]"
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          fill="#757575"
          stroke="#757575"
          strokeWidth="0"
          viewBox="0 0 16 16"
        >
          <path
            stroke="none"
            d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z"
          />
        </svg>
      </label>
    </div>
  )
}

export default Switch
