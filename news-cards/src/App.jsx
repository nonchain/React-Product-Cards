import React from 'react';
import Card from './components/Card';
import CardImage from './components/CardImage';
import CardHeader from './components/CardHeader';
import CardFooter from './components/CardFooter';
import { UilEllipsisH } from '@iconscout/react-unicons';

import Boxing from './assets/images/boxing.jpg';
import CardAction from './components/CardAction';

function App() {
  return (

    <div className="content">
      <Card>
        <CardHeader className={'pt-4 pb-3 px-3 bg-slate-400 flex flex-col items-center'}>
          <span className='text-2xl font-bold relative day'>12</span>
          <span className='text-base font-normal'>AUG</span>
          <span className='text-base font-normal'>2022</span>
        </CardHeader>
        <CardImage src={Boxing} />

        <div className='flex flex-col absolute bottom-0 left-0 z-20'>
          <CardAction iconSize={24} comment={'8'} like={'47'} save={'0'} className={'py-2 bg-green-500 justify-around'}/>

          <CardFooter
            className={'pt-4 pb-5 px-5 bg-white relative'}
            author={'Jane Doe'}
            title={'Boxing icon has the will for a couple more fights'}
            description={'The highly anticipated world championship fight will take place at 10am and is the second major boxing blockbuster in the nation after 43 years.'}>


            <button className='cursor-pointer absolute right-5 top-4'>
              <UilEllipsisH color='#444368' />
            </button>
          </CardFooter>
        </div>
      </Card>
    </div>
  )
}

export default App
