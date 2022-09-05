import React from 'react';
import Card from './components/Card';
import GamerStatus from './components/GamerStatus';
import GamerSummary from './components/GamerSummary';
import GamerDetails from './components/GamerDetails';

import GamerBoyAvatar from './assets/image/gamer_boy.png';
import GamerGirlAvatar from './assets/image/gamer_girl.png';

function App() {
  return (
    <div className="content grid md:grid-cols-2 gap-5">
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

      <Card className='grid grid-rows-3 relative card'>
        <GamerSummary
          className='row-span-2'
          fullName={'Tiffany Garcia'}
          summary={'Tiffany Michelle Herrera (born: March 19, 1988), (née Garcia), more commonly known as Cupquake, is a YouTube gaming commentator, fashion vlogger and an animal lover'} />

        <div className='w-full h-28 bg-blue-500 absolute bottom-0 overflow-hidden additional'>
          <GamerDetails
            fullName={'Tiffany Garcia'}
            group={'iHasCupquake'}
            role={'Gamer'}
            joinDate={'2022/5'}
            city={'Abhar'}
            country={'Iran'}
            className='w-full absolute bottom-[108px]'
          />

          <GamerStatus avatarUrl={GamerGirlAvatar} level='13' score='5,321' className='w-full absolute bottom-6' />
        </div>

      </Card>

    </div>
  )
}

export default App
