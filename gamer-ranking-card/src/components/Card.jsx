import React from 'react'

const Card = ({className, children}) => {
  return (
    <div className={`w-full bg-white rounded overflow-hidden shadow-md ${className}`}>
      {children}
    </div>
  )
}

export default Card