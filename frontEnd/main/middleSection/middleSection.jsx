import React, {useState} from 'react';
import UpperBar from './middleSubComponents/upperBar.jsx';
import Calender from './middleSubComponents/calender.jsx';
import FirstEvent from './middleSubComponents/firstEvent.jsx';

const MiddleSection = () =>{
  return(
    <div className="middleSectionInnerContainer">
      <div className="upperBarContainer">
        <UpperBar />
      </div>
      <div className="calenderContainer">
        <Calender />
      </div>
      <div className="firstEventContainer">
        <FirstEvent />
      </div>
    </div>
  )
}

export default MiddleSection;