import React from 'react';

const GamerStatus = ({ avatarUrl, level, score, className }) => {
   return (
      <div className={`flex items-center justify-around ${className}`}>
         <h3 className='py-1 px-2 text-sm bg-[#00000045] text-white rounded-lg'>Level: {level}</h3>
         <div className='p-2 w-16 h-16 bg-white border-2 border-zinc-800 rounded-full -order-1'>
            <img className='w-full h-full' src={avatarUrl} alt="gamer avatar" />
         </div>
         <h3 className='py-1 px-2 text-sm bg-[#00000045] text-white rounded-lg'>Point: {score}</h3>
      </div>
   )
}

export default GamerStatus