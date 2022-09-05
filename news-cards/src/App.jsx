import React, { useState } from 'react';
import Card from './components/Card';
import CardImage from './components/CardImage';
import CardHeader from './components/CardHeader';
import CardFooter from './components/CardFooter';
import { UilEllipsisH } from '@iconscout/react-unicons';

import Boxing from './assets/images/boxing.jpg';
import CardAction from './components/CardAction';

function App() {
  const [actionsVisibility, setActionsVisibility] = useState(true);

  const actionsVisibilityHandler = ()=>{
    setActionsVisibility(!actionsVisibility)
  }

  return (

    <div className="content">
      <Card className={'card'}>
        <CardHeader />
        <CardImage src={Boxing} />

        <div className='flex flex-col absolute bottom-0 left-0 z-20 translate-y-24 details'>
          <CardAction iconSize={24} comment={'8'} like={'47'} save={'0'} className={`z-10 ${actionsVisibility && 'translate-y-full'} `}/>

          <CardFooter
            className={'pt-4 pb-5 px-5 bg-white relative z-20'}
            author={'Jane Doe'}
            title={'Boxing icon has the will for a couple more fights'}
            description={'The highly anticipated world championship fight will take place at 10am and is the second major boxing blockbuster in the nation after 43 years.'}>


            <button className='cursor-pointer absolute right-5 top-4' onClick={actionsVisibilityHandler}>
              <UilEllipsisH color='#444368' />
            </button>
          </CardFooter>
        </div>
      </Card>
    </div>
  )
}

export default App
