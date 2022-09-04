import React from 'react'

const AwardIcon = ({children, title, number}) => {
   return (
      <div className='flex flex-col items-center gap-1'>
         <span className='text-white text-xs font-semibold'>{title}</span>
         <div className='text-white'>{children}</div>
         <span className='text-white text-base font-bold'>{number}</span>
      </div>
   )
}

export default AwardIcon