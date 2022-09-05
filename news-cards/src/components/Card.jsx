import React from 'react'

const Card = ({className, children}) => {
  return (
    <div className={`w-full h-[540px] relative shadow-lg overflow-hidden ${className}`}>
      {children}
    </div>
  )
}

export default Card