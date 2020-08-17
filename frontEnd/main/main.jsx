import React, { useState } from 'react';
import NewsSection from './leftSection/newsSection.jsx';
import MiddleSection from './middleSection/middleSection.jsx';
import MiniModulesSection from './rightSection/miniModulesSection.jsx';

const Main = () => {
  return (
    <div>
      <div>
        <NewsSection />
      </div>
      <div>
        <MiddleSection />
      </div>
      <div>
        <MiniModulesSection />
      </div>
    </div>
  )
}


export default Main;