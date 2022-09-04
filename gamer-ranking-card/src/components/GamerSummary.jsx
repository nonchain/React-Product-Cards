import React from 'react'

const GamerSummary = ({fullName, summary, className}) => {
  return (
    <div className={`pt-8 pb-5 px-4 flex flex-col ${className}`}>
      <h2 className='text-2xl font-semibold text-zinc-800'>{fullName}</h2>
      <p className='mt-5'>{summary}</p>
      <span className='mt-12 text-right text-xs font-medium'>Hover the card for more info</span>
    </div>
  )
}

export default GamerSummary