import React, {useState} from 'react';
import WeatherModule from './subModules/weather.jsx';
import MusicModule from './subModules/music.jsx';
import EmailModule from './subModules/email.jsx';
import LocalTrafficModule from './subModules/localTraffic.jsx';
import StocksModule from './subModules/stocks.jsx';
import DailyInspiration from './subModules/dailyInspiration.jsx';


const MiniModulesSection = () =>{
  return(
    <div>
      <div>
      MiniModulesSection Header
      </div>
      <div>
        <WeatherModule />
      </div>
      <div>
        <MusicModule />
      </div>
      <div>
        <EmailModule />
      </div>
      <div>
        <LocalTrafficModule />
      </div>
      <div>
        <StocksModule />
      </div>
      <div>
        <DailyInspiration />
      </div>
    </div>
  )
}

export default MiniModulesSection;