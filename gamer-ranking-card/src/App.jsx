import React from 'react';
import Card from './components/Card';
import GamerStatus from './components/GamerStatus';
import GamerSummary from './components/GamerSummary';

import GamerBoyAvatar from './assets/image/gamer_boy.png';
import GamerDetails from './components/GamerDetails';

function App() {
  return (
    <div className="content">
      <Card className='grid grid-rows-3 relative card'>
        <GamerSummary
          fullName={'Richard Tyler Blevins'}
          className='row-span-2'
          summary={'Better known as Ninja, is an American Twitch streamer, YouTuber and professional gamer.'} />

        <div className='w-full h-28 bg-red-500 absolute bottom-0 overflow-hidden additional'>
          <GamerDetails
            fullName={'Richard Tyler Blevins'}
            group={'Fire Friends'}
            role={'Gamer'}
            joinDate={'2022/5'}
            city={'Abhar'}
            country={'Iran'}
            className='w-full absolute bottom-[108px]'
          />

          <GamerStatus avatarUrl={GamerBoyAvatar} level='13' score='5,321' className='w-full absolute bottom-6' />
        </div>

      </Card>

    </div>
  )
}

export default App
