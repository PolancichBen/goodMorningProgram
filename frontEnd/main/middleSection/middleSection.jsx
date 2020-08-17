import React, {useState} from 'react';
import UpperBar from './middleSubComponents/upperBar.jsx';
import Calender from './middleSubComponents/calender.jsx';
import FirstEvent from './middleSubComponents/firstEvent.jsx';

const MiddleSection = () =>{
  return(
    <div>
      <div>
        <UpperBar />
      </div>
      <div>
        <Calender />
      </div>
      <div>
        <FirstEvent />
      </div>
    </div>
  )
}

export default MiddleSection;