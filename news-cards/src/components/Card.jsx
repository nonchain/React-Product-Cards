import React from 'react'

const Card = ({className, children}) => {
  return (
    <div className={`w-full relative shadow-lg ${className}`}>
      {children}
    </div>
  )
}

export default Card