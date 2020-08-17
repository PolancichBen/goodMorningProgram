import React, { useState } from 'react';
import NewsSection from './leftSection/newsSection.jsx';
import MiddleSection from './middleSection/middleSection.jsx';
import MiniModulesSection from './rightSection/miniModulesSection.jsx';

const Main = () => {
  return (
    <div className="mainContainer">
      <div className="newsContainer">
        <NewsSection />
      </div>
      <div className="middleContainer">
        <MiddleSection />
      </div>
      <div className="miniModulesContainer">
        <MiniModulesSection />
      </div>
    </div>
  )
}


export default Main;