import React from 'react'

function Loader({ size }) {
  return (
    <div
      className={`flex items-center justify-center ${
        size === 'l' ? 'min-h-[calc(100vh_-_183px)]' : ''
      }  `}
    >
      <div
        className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-[#a445ed] border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] "
        role="status"
      >
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)] ">
          Loading...
        </span>
      </div>
    </div>
  )
}

export default Loader
