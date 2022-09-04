import React from 'react';
import TrophyFillIcon from 'remixicon-react/TrophyFillIcon';
import GroupFillIcon from 'remixicon-react/GroupFillIcon';
import GamepadFillIcon from 'remixicon-react/GamepadFillIcon';
import CupFillIcon from 'remixicon-react/CupFillIcon';
import AwardIcon from './AwardIcon';

const GameAward = ({className}) => {
  return (
    <div className={`flex items-center justify-between ${className}`}>
      <AwardIcon title={'Awards'} number={'2'}>
         <TrophyFillIcon />
      </AwardIcon>
      <AwardIcon title={'Matches'} number={'27'}>
         <GamepadFillIcon />
      </AwardIcon>
      <AwardIcon title={'PALS'} number={'147'}>
         <GroupFillIcon />
      </AwardIcon>
      <AwardIcon title={'Awards'} number={'∞'}>
         <CupFillIcon />
      </AwardIcon>
    </div>
  )
}

export default GameAward