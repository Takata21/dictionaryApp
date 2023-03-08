import React from 'react'

function ErrorComponent({ message }) {
  console.log(message)
  return (
    <div className="text-orange-700 px-4 py-3" role="alert">
      <p className="font-bold">{message?.title}</p>
      <p className="text-sm">{message?.message}</p>
    </div>
  )
}

export default ErrorComponent
