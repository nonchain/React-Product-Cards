import React from 'react'

const CardImage = ({src}) => {
  return (
    <img className='w-full h-full object-cover absolute z-10' src={src} alt="news image" />
  )
}

export default CardImage