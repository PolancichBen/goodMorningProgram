import React, {useState} from 'react';


const UpperBar = () =>{
  return(
    <div className="upperBarInnerContainer">
      <div className="weatherSymbol">Weather Symbol</div>
      <div className="timeContainer">Time</div>
      <div className="notifications">Notifications</div>
    </div>
  )
}

export default UpperBar;