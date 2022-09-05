import React from 'react';
import Card from './components/Card';
import CardImage from './components/CardImage';

import Boxing from './assets/images/boxing.jpg';
import CardHeader from './components/CardHeader';
import CardFooter from './components/CardFooter';

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

        <CardFooter 
        className={'pt-4 pb-5 px-5 bg-white'} 
        author={'Jane Doe'} 
        title={'Boxing icon has the will for a couple more fights'} 
        description={'The highly anticipated world championship fight will take place at 10am and is the second major boxing blockbuster in the nation after 43 years.'}>
          
          
        </CardFooter>
      </Card>
    </div>
  )
}

export default App
