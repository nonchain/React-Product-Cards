import React from 'react'

const CardHeader = ({children, className}) => {
  return (
    <div className={`absolute top-0 left-0 z-20 text-white ${className}`}>
      {children}
    </div>
  )
}

export default CardHeader