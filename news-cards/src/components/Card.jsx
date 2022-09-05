import React from 'react'

const Card = ({className, children}) => {
  return (
    <div className={`w-full h-[420px] relative shadow-lg ${className}`}>
      {children}
    </div>
  )
}

export default Card