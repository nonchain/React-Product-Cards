import React from 'react'

const CardFooter = ({children, className, author, title, description}) => {
  return (
    <div className={`w-full flex flex-col ${className}`}>
      <span className='text-xs text-zinc-800  font-normal'>{author}</span>
      <h2 className='mt-5 cursor-pointer text-3xl text-zinc-500 font-extralight'>{title}</h2>
      <p className='mt-7 text-[15px] font-normal'>{description}</p>
      {children}
    </div>
  )
}

export default CardFooter