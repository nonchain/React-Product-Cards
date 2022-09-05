import React from 'react'

const CardHeader = ({children, className}) => {
  return (
    <div className={`pt-4 pb-3 px-3 bg-slate-400 flex flex-col items-center absolute top-0 left-0 z-20 text-white ${className}`}>
      <span className='text-2xl font-bold relative day'>12</span>
          <span className='text-base font-normal'>AUG</span>
          <span className='text-base font-normal'>2022</span>
    </div>
  )
}

export default CardHeader