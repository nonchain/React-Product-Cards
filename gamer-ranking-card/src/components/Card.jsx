import React from 'react'

const Card = ({className, children}) => {
  return (
    <div className={`w-full min-h-[254px] bg-white cursor-pointer rounded overflow-hidden shadow-md ${className}`}>
      {children}
    </div>
  )
}

export default Card