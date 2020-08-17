import React, {useState} from 'react';
import WeatherModule from './subModules/weather.jsx';
import MusicModule from './subModules/music.jsx';
import EmailModule from './subModules/email.jsx';
import LocalTrafficModule from './subModules/localTraffic.jsx';
import StocksModule from './subModules/stocks.jsx';
import DailyInspiration from './subModules/dailyInspiration.jsx';


const MiniModulesSection = () =>{
  return(
    <div className="miniModulesInnerContainer">
      <div className="miniModulesHeader">
      MiniModulesSection Header
      </div>
      <div className="modules">
      <div className="moduleContainer">
        <WeatherModule />
      </div>
      <div className="moduleContainer">
        <MusicModule />
      </div>
      <div className="moduleContainer">
        <EmailModule />
      </div>
      <div className="moduleContainer">
        <LocalTrafficModule />
      </div>
      <div className="moduleContainer">
        <StocksModule />
      </div>
      <div className="moduleContainer">
        <DailyInspiration />
      </div>
      </div>
    </div>
  )
}

export default MiniModulesSection;