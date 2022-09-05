import React, { useState, useEffect } from 'react'

const getWindowWidth = () => {
  const { innerWidth: width, } = window;
  return width;
}

const GamerSummary = ({ fullName, summary, className }) => {

  const [screenWidth, setScreenWidth] = useState(getWindowWidth());
  let message = screenWidth > 768 ? 'Hover the card for more info' : 'Tap to card for more info';

  useEffect(() => {
    window.addEventListener('resize', () => setScreenWidth(getWindowWidth()));
  }, []);

  return (
    <div className={`pt-8 pb-5 px-4 md:px-6 flex flex-col ${className}`}>
      <h2 className='text-2xl font-semibold text-zinc-800'>{fullName}</h2>
      <p className='mt-5'>
        {summary.length > 90 ? `${summary.substring(0, 90)} ...` : summary.substring(0, summary.length)}
      </p>
      <span className='mt-12 text-right text-xs font-medium'>{message}</span>
    </div>
  )
}

export default GamerSummary