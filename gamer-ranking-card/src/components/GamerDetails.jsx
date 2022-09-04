import React from 'react'
import GameAward from './GameAward'

const GamerDetails = ({ fullName, group, role, joinDate, city, country, className }) => {
   return (
      <div className={`pt-8 pb-5 px-4 flex flex-col ${className}`}>
         <h2 className='text-2xl font-semibold text-white'>{fullName}</h2>
         <div className='mt-5 flex items-center justify-between'>
            <div className='grid gap-1'>
               <span className='text-sm font-medium text-white'>{group}</span>
               <span className='text-sm font-medium text-white'>{role}</span>
            </div>

            <div className='grid gap-1'>
               <span className='text-sm font-medium text-white'>{joinDate}</span>
               <span className='text-sm font-medium text-white'>{country}, {city}</span>
            </div>
         </div>

         <GameAward />
         
      </div>
   )
}

export default GamerDetails